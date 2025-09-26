#!/bin/bash

# Script to merge multiple PRs systematically
# This will attempt to merge PRs in batches and handle conflicts

set -e

echo "Starting PR merge process..."

# Function to merge a single PR
merge_pr() {
    local pr_branch=$1
    echo "Attempting to merge $pr_branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$pr_branch"; then
        echo "✗ Branch $pr_branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    merge_output=$(git merge "$pr_branch" 2>&1)
    if echo "$merge_output" | grep -q "Already up to date"; then
        echo "✓ $pr_branch already up to date"
        return 0
    elif echo "$merge_output" | grep -q "Automatic merge went well"; then
        echo "✓ Successfully merged $pr_branch"
        return 0
    else
        echo "✗ Conflict in $pr_branch, skipping..."
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Get list of recent cursor branches (excluding the one we already merged)
recent_branches=$(git branch -r | grep "origin/cursor/" | grep -v "add-2030q1-services-ui" | tail -30)

successful_merges=0
failed_merges=0

for branch in $recent_branches; do
    if merge_pr "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Limit to prevent too many merges at once
    if [ $successful_merges -ge 15 ]; then
        echo "Reached limit of 15 successful merges. Stopping."
        break
    fi
done

echo "Merge process completed:"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"

# Push the changes
echo "Pushing changes to remote..."
git push origin main