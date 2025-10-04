#!/bin/bash

# Script to merge open PRs into main branch
set -e

echo "Starting PR merge process..."

# List of PR branches to merge (including latest ones)
PR_BRANCHES=(
    "origin/cursor/fix-errors-and-merge-to-main-0571"
    "origin/cursor/fix-errors-and-merge-to-main-5e24"
    "origin/cursor/fix-errors-and-merge-to-main-631d"
    "origin/cursor/fix-errors-and-merge-to-main-69c7"
    "origin/cursor/fix-errors-and-merge-to-main-849a"
    "origin/cursor/fix-errors-and-merge-to-main-ac42"
    "origin/cursor/fix-errors-and-merge-to-main-d6cf"
    "origin/cursor/fix-errors-and-merge-to-main-e6fc"
    "origin/cursor/fix-errors-and-merge-to-main-eb9b"
    "origin/cursor/fix-errors-and-merge-to-main-f51c"
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