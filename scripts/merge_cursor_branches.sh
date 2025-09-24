#!/bin/bash

set -euo pipefail

retry_push() {
	local max_attempts=5
	local attempt=1
	while true; do
		if git push origin main; then
			return 0
		fi
		echo "Push rejected (attempt $attempt). Rebased with origin/main and retrying..."
		git pull --rebase origin main || true
		if [ $attempt -ge $max_attempts ]; then
			echo "Push failed after $max_attempts attempts."
			return 1
		fi
		attempt=$((attempt+1))
	done
}

# Ensure we are on main and up to date
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
	git checkout main
fi

git fetch origin
git reset --hard origin/main

echo "Enumerating cursor/check-fix-push-and-merge-to-main branches..."
mapfile -t cursor_branches < <(git ls-remote --heads origin | awk '/refs\/heads\/cursor\/check-fix-push-and-merge-to-main/ {print $2}' | sed 's#refs/heads/##')

if [ ${#cursor_branches[@]} -eq 0 ]; then
	echo "No cursor branches found on origin. Nothing to merge."
	exit 0
fi

echo "Found ${#cursor_branches[@]} cursor branches to merge."

for br in "${cursor_branches[@]}"; do
	echo "---"
	echo "Merging $br into main"
	git fetch origin "$br" || true
	if git merge --no-ff --no-edit "origin/$br"; then
		echo "Merged $br"
		retry_push || exit 1
		continue
	fi
	
	echo "Conflicts detected for $br. Preferring cursor branch changes (theirs) for conflicted files."
	conflicted_files=$(git diff --name-only --diff-filter=U || true)
	if [ -z "$conflicted_files" ]; then
		echo "No conflicted files listed; aborting merge for $br."
		git merge --abort || true
		continue
	fi
	for f in $conflicted_files; do
		git checkout --theirs -- "$f" || true
		git add -- "$f"
	done
	if git commit -m "chore: auto-resolve conflicts preferring cursor branch: $br"; then
		retry_push || exit 1
		echo "Auto-resolved and merged $br"
	else
		echo "Auto-resolution failed for $br; aborting."
		git merge --abort || true
	fi
done

echo "Done merging cursor branches."