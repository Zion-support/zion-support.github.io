#!/bin/bash

# Auto-merge script to resolve conflicts by accepting current version (main branch)
# This script will merge all cursor/fix-errors-and-merge-to-main branches

echo "Starting auto-merge process..."

# Get all branches that are ahead of main
branches=$(git for-each-ref --format='%(refname:short) %(ahead-behind:origin/main)' refs/remotes/origin/cursor/fix-errors-and-merge-to-main* | grep -v "0 " | awk '{print $1}' | head -20)

echo "Found branches to merge:"
echo "$branches"

for branch in $branches; do
    echo "Processing branch: $branch"
    
    # Try to merge with strategy to accept current version for conflicts
    if git merge "$branch" --strategy-option=ours --no-commit; then
        echo "Successfully merged $branch"
        git commit -m "Auto-merge $branch - resolved conflicts by accepting current version"
    else
        echo "Failed to merge $branch, aborting..."
        git merge --abort
    fi
    
    echo "---"
done

echo "Auto-merge process completed!"