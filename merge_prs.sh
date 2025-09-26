#!/bin/bash

# Script to merge multiple PRs systematically
# This will attempt to merge PRs in batches and handle conflicts

set -e

echo "Starting PR merge process..."

# Function to merge a single PR
merge_pr() {
    local pr_branch=$1
    echo "Attempting to merge $pr_branch..."
    
    if git merge "$pr_branch" --no-commit 2>/dev/null; then
        echo "✓ Successfully merged $pr_branch"
        git commit -m "Merge $pr_branch: Automated merge"
        return 0
    else
        echo "✗ Conflict in $pr_branch, skipping..."
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Get list of recent cursor branches
recent_branches=$(git branch -r | grep "origin/cursor/" | head -50)

successful_merges=0
failed_merges=0

for branch in $recent_branches; do
    if merge_pr "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Limit to prevent too many merges at once
    if [ $successful_merges -ge 20 ]; then
        echo "Reached limit of 20 successful merges. Stopping."
        break
    fi
done

echo "Merge process completed:"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"

# Push the changes
echo "Pushing changes to remote..."
git push origin main