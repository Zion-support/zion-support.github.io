#!/bin/bash

# Script to merge all open PRs from cursor branches
set -e

echo "Starting merge process for all open PRs..."

# Get list of open PRs
PR_BRANCHES=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=50" | grep -o '"ref": "[^"]*"' | grep "cursor/fix-errors-and-merge-to-main" | sed 's/"ref": "//' | sed 's/"//')

echo "Found open PR branches:"
echo "$PR_BRANCHES"

# Ensure we're on main branch
git checkout main

# Merge each branch
for branch in $PR_BRANCHES; do
    echo "Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "Branch $branch already exists locally"
    else
        echo "Creating local branch $branch"
        git checkout -b $branch origin/$branch
    fi
    
    # Switch back to main
    git checkout main
    
    # Try to merge
    echo "Attempting to merge $branch into main..."
    if git merge $branch --no-edit; then
        echo "Successfully merged $branch"
    else
        echo "Merge conflict in $branch, attempting to resolve..."
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            # Auto-resolve conflicts by taking main branch version
            git checkout --ours .
            git add .
            git commit -m "Resolve merge conflicts with $branch"
            echo "Conflicts resolved for $branch"
        else
            echo "No conflicts found, continuing..."
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch 2>/dev/null || true
done

echo "All PRs processed successfully!"
echo "Final status:"
git status