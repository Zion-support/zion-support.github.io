#!/bin/bash

# Batch merge script for processing multiple PRs
set -e

echo "Starting batch PR merge process..."

# Get the first 20 open PRs
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=20" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

echo "Processing PRs: $PR_NUMBERS"

for pr in $PR_NUMBERS; do
    echo "Processing PR #$pr..."
    
    # Fetch the PR
    if ! git fetch origin pull/$pr/head:pr-$pr 2>/dev/null; then
        echo "Failed to fetch PR #$pr, skipping..."
        continue
    fi
    
    # Try to merge
    if git merge pr-$pr --no-commit 2>/dev/null; then
        echo "PR #$pr merged successfully without conflicts"
        git commit -m "Merge PR #$pr"
    else
        echo "PR #$pr has conflicts, resolving automatically..."
        
        # Get conflicted files
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        
        # Resolve conflicts by preferring incoming changes
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file..."
            git checkout --theirs "$file" 2>/dev/null || true
        done
        
        # Add all resolved files
        git add .
        
        # Commit the merge
        if git commit -m "Merge PR #$pr with automatic conflict resolution" 2>/dev/null; then
            echo "PR #$pr merged successfully after conflict resolution"
        else
            echo "Failed to commit PR #$pr, aborting merge..."
            git merge --abort
            continue
        fi
    fi
    
    # Clean up the branch
    git branch -D pr-$pr 2>/dev/null || true
    
    echo "PR #$pr completed"
    echo "---"
done

echo "Batch merge completed. Pushing to main..."
git push origin main

echo "All PRs processed and pushed to main!"