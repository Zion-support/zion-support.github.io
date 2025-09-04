#!/usr/bin/env bash
set -euo pipefail

# Aggressively merges all fetched PR heads into main, resolving conflicts automatically

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Starting aggressive PR merge process..."

current_branch="$(git rev-parse --abbrev-ref HEAD)"
trap 'git merge --abort >/dev/null 2>&1 || true; git checkout -f "$current_branch" >/dev/null 2>&1 || true' EXIT

git fetch origin main >/dev/null 2>&1 || true
git checkout -f main >/dev/null 2>&1
git reset --hard origin/main >/dev/null 2>&1

merged_count=0
skipped_count=0
conflict_resolved=0

# Get all PR refs, sorted by PR number
mapfile -t pr_refs < <(git for-each-ref --format='%(refname)' 'refs/remotes/origin/pr/*' | sed 's#refs/remotes/origin/##' | sort -t/ -k3,3n)

echo "Found ${#pr_refs[@]} PRs to process"

for pr_ref in "${pr_refs[@]}"; do
	echo "\n=== Processing PR: ${pr_ref} ==="
	
	# Create a temporary branch for this merge
	git checkout -f -B merge-tmp origin/main >/dev/null 2>&1
	
	# Attempt merge with conflict resolution
	if git merge --no-edit "origin/${pr_ref}" >/dev/null 2>&1; then
		echo "Clean merge for ${pr_ref}"
	else
		echo "Conflict detected in ${pr_ref}, attempting resolution..."
		
		# Check if there are actual conflicts
		if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
			echo "Resolving conflicts in ${pr_ref}..."
			
			# Auto-resolve conflicts by preferring the PR version for most files
			git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r status file; do
				if [[ -f "$file" ]]; then
					echo "Resolving conflict in $file"
					# Use PR version (theirs) for most conflicts
					git checkout --theirs "$file" >/dev/null 2>&1 || true
					git add "$file" >/dev/null 2>&1 || true
				fi
			done
			
			# Complete the merge
			if git commit --no-edit >/dev/null 2>&1; then
				echo "Conflicts resolved for ${pr_ref}"
				((conflict_resolved++))
			else
				echo "Failed to resolve conflicts for ${pr_ref}, skipping"
				git merge --abort >/dev/null 2>&1 || true
				((skipped_count++))
				continue
			fi
		else
			echo "No conflicts found, completing merge for ${pr_ref}"
			git commit --no-edit >/dev/null 2>&1 || true
		fi
	fi
	
	# Merge into main
	git checkout -f main >/dev/null 2>&1
	if git merge --no-ff merge-tmp -m "Merge ${pr_ref} into main" >/dev/null 2>&1; then
		echo "Successfully merged ${pr_ref} into main"
		((merged_count++))
	else
		echo "Failed to merge ${pr_ref} into main, skipping"
		((skipped_count++))
	fi
	
	# Push every 10 merges to avoid large pushes
	if (( merged_count % 10 == 0 )); then
		echo "Pushing batch of merges..."
		git push origin main >/dev/null 2>&1 || echo "Push failed, continuing..."
	fi
done

# Final push
echo "Pushing final state..."
git push origin main >/dev/null 2>&1 || echo "Final push failed"

git checkout -f "$current_branch" >/dev/null 2>&1 || true

echo "\nAggressive merge process completed:"
echo "- Merged: ${merged_count}"
echo "- Conflicts resolved: ${conflict_resolved}"
echo "- Skipped: ${skipped_count}"