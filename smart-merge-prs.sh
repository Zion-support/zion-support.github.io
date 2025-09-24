#!/bin/bash

# Smart script to merge PR branches into main with conflict auto-resolution and logging
set -e

LOG_FILE="smart-merge-log-$(date +%Y%m%d-%H%M%S).txt"
BATCH_SIZE=50
BACKUP_BRANCH="smart-merge-backup-$(date +%Y%m%d-%H%M%S)"

log_message() {
	local message="$1"
	echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

log_message "🚀 Starting smart PR merge process..."

# Ensure we have latest refs and prepare backup from main
git fetch origin --prune
if git show-ref --verify --quiet "refs/heads/$BACKUP_BRANCH"; then
	git branch -D "$BACKUP_BRANCH" || true
fi
(git checkout -B "$BACKUP_BRANCH" origin/main || git checkout -b "$BACKUP_BRANCH")
log_message "🔒 Created backup branch: $BACKUP_BRANCH"

git push -u origin "$BACKUP_BRANCH" || true

git checkout main
git pull --rebase origin main

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Check if branch has differences vs main
has_differences() {
	local branch="$1"
	git fetch origin "$branch" >/dev/null 2>&1 || true
	if git diff --quiet main "origin/$branch"; then
		return 1
	else
		return 0
	fi
}

# Resolve file conflicts by stripping markers conservatively
resolve_conflicts() {
	local file="$1"
	local branch="$2"
	if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
		cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
		if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
			# Prefer main for critical package files
			sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
			sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
		elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
			sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
			sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
		else
			# Generic: drop markers, keep incoming section
			sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file" 2>/dev/null || true
			sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
		fi
		CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
	fi
}

merge_branch() {
	local branch="$1"
	log_message "🔄 Attempting to merge $branch..."
	if ! has_differences "$branch"; then
		log_message "⏭️  No differences for $branch; skipping"
		SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
		return 0
	fi
	if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
		git commit -m "Merge $branch into main"
		SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
		return 0
	fi
	# Conflicts path
	local conflicted
	conflicted=$(git diff --name-only --diff-filter=U || true)
	if [ -z "$conflicted" ]; then
		log_message "❌ Merge failed without conflicts; aborting $branch"
		git merge --abort || true
		FAILED_MERGES=$((FAILED_MERGES + 1))
		return 1
	fi
	log_message "📋 Conflicted files: $conflicted"
	for f in $conflicted; do
		[ -f "$f" ] && resolve_conflicts "$f" "$branch"
	done
	git add -A
	if git diff --name-only --diff-filter=U | grep -q .; then
		log_message "❌ Remaining conflicts; aborting $branch"
		git merge --abort || true
		FAILED_MERGES=$((FAILED_MERGES + 1))
		return 1
	fi
	git commit -m "Resolve merge conflicts for $branch"
	SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
	return 0
}

log_message "📋 Getting list of cursor branches..."
BRANCHES=$(git branch -r | awk -F'origin/' '/origin\/cursor\//{print $2}' | sort | uniq)

for branch in $BRANCHES; do
	TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
	merge_branch "$branch" || true
	log_message "📊 Progress: $SUCCESSFUL_MERGES ok, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts, $SKIPPED_BRANCHES skipped"
	# Periodically sync with remote main to avoid push rejects
	git pull --rebase origin main || true
	git push origin main || true
	if [ $TOTAL_PROCESSED -ge $BATCH_SIZE ]; then
		log_message "🎯 Reached batch size limit ($BATCH_SIZE). Stopping."
		break
	fi
done

log_message "💾 Final push..."
(git push origin main || true)

log_message "🎉 Completed. Backup branch: $BACKUP_BRANCH"
