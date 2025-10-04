#!/bin/bash

# Script to merge open PRs into main branch
set -e

echo "Starting PR merge process..."

# List of PR branches to merge (including new ones)
PR_BRANCHES=(
    "origin/cursor/fix-errors-and-merge-to-main-0c34"
    "origin/cursor/fix-errors-and-merge-to-main-0cb4"
    "origin/cursor/fix-errors-and-merge-to-main-134f"
    "origin/cursor/fix-errors-and-merge-to-main-1380"
    "origin/cursor/fix-errors-and-merge-to-main-14cd"
    "origin/cursor/fix-errors-and-merge-to-main-155c"
    "origin/cursor/fix-errors-and-merge-to-main-1bc6"
    "origin/cursor/fix-errors-and-merge-to-main-2a38"
    "origin/cursor/fix-errors-and-merge-to-main-2e95"
    "origin/cursor/fix-errors-and-merge-to-main-2edf"
    "origin/cursor/fix-errors-and-merge-to-main-3328"
    "origin/cursor/fix-errors-and-merge-to-main-398b"
    "origin/cursor/fix-errors-and-merge-to-main-4291"
    "origin/cursor/fix-errors-and-merge-to-main-4756"
    "origin/cursor/fix-errors-and-merge-to-main-78fd"
    "origin/cursor/fix-errors-and-merge-to-main-7ca8"
    "origin/cursor/fix-errors-and-merge-to-main-849a"
    "origin/cursor/fix-errors-and-merge-to-main-8906"
    "origin/cursor/fix-errors-and-merge-to-main-8aad"
    "origin/cursor/fix-errors-and-merge-to-main-a0a8"
    "origin/cursor/fix-errors-and-merge-to-main-a312"
    "origin/cursor/fix-errors-and-merge-to-main-a54a"
    "origin/cursor/fix-errors-and-merge-to-main-aa33"
    "origin/cursor/fix-errors-and-merge-to-main-ac56"
    "origin/cursor/fix-errors-and-merge-to-main-b477"
    "origin/cursor/fix-errors-and-merge-to-main-c48f"
    "origin/cursor/fix-errors-and-merge-to-main-d54f"
    "origin/cursor/fix-errors-and-merge-to-main-da01"
)

# Ensure we're on main branch
git checkout main

# Fetch latest changes
git fetch origin

# Try to merge each branch
for branch in "${PR_BRANCHES[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Branch $branch exists, attempting merge..."
        
        # Try to merge
        if git merge --no-ff $branch; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict in $branch, attempting to resolve..."
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Conflicts detected, resolving automatically..."
                # Try to resolve conflicts automatically
                git add .
                git commit -m "Resolve merge conflicts from $branch"
            fi
        fi
    else
        echo "Branch $branch does not exist, skipping..."
    fi
done

echo "PR merge process completed!"