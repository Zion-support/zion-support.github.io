#!/bin/bash

# Script to merge all open PRs systematically
# This script will fetch, check for conflicts, resolve them, and merge PRs

set -e

echo "Starting PR merge process..."

# Get list of open PRs
echo "Fetching open PRs..."
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

echo "Found PRs: $PR_NUMBERS"

# Process each PR
for pr in $PR_NUMBERS; do
    echo "Processing PR #$pr..."
    
    # Fetch the PR
    echo "Fetching PR #$pr..."
    git fetch origin pull/$pr/head:pr-$pr 2>/dev/null || {
        echo "Failed to fetch PR #$pr, skipping..."
        continue
    }
    
    # Try to merge
    echo "Attempting to merge PR #$pr..."
    if git merge pr-$pr --no-commit 2>/dev/null; then
        echo "PR #$pr merged successfully without conflicts"
        git commit -m "Merge PR #$pr: $(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr" | grep '"title"' | sed 's/.*"title": "\(.*\)".*/\1/')"
        echo "PR #$pr committed successfully"
    else
        echo "PR #$pr has conflicts, attempting to resolve..."
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "Conflicted files: $CONFLICT_FILES"
        
        # Try to resolve conflicts automatically
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file..."
            
            # For most files, we'll use the incoming changes (theirs)
            if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.jsx ]]; then
                # For code files, prefer the incoming changes
                git checkout --theirs "$file"
            elif [[ "$file" == *.md ]] || [[ "$file" == *.yaml ]] || [[ "$file" == *.yml ]]; then
                # For content files, prefer the incoming changes
                git checkout --theirs "$file"
            else
                # For other files, prefer the incoming changes
                git checkout --theirs "$file"
            fi
        done
        
        # Add resolved files
        git add .
        
        # Try to commit
        if git commit -m "Merge PR #$pr with conflict resolution: $(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr" | grep '"title"' | sed 's/.*"title": "\(.*\)".*/\1/')" 2>/dev/null; then
            echo "PR #$pr merged successfully after conflict resolution"
        else
            echo "Failed to commit PR #$pr after conflict resolution, aborting merge..."
            git merge --abort
            continue
        fi
    fi
    
    # Clean up the branch
    git branch -D pr-$pr 2>/dev/null || true
    
    echo "PR #$pr processing completed"
    echo "---"
done

echo "All PRs processed. Pushing changes to main..."
git push origin main

echo "PR merge process completed!"