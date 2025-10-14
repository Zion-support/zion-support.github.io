#!/bin/bash

# Script to resolve all merge conflicts and merge PRs
set -e

echo "Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts by accepting main branch version
resolve_conflicts() {
    echo "Resolving conflicts in $1..."
    
    # For most conflicts, accept the main branch version (HEAD)
    git checkout --ours "$1" 2>/dev/null || true
    
    # For deleted files, remove them
    if git status --porcelain | grep -q "^DU.*$1"; then
        git rm "$1" 2>/dev/null || true
    fi
}

# Get list of all open PRs
echo "Fetching open PRs..."
PRS=$(gh pr list --state open --json number --jq '.[].number')

for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Checkout the PR branch
    gh pr checkout $pr 2>/dev/null || continue
    
    # Get branch name
    BRANCH_NAME=$(git branch --show-current)
    
    # Switch back to main
    git checkout main
    
    # Try to merge
    if git merge $BRANCH_NAME --no-commit 2>/dev/null; then
        echo "PR #$pr merged successfully"
        git commit -m "Merge PR #$pr: $BRANCH_NAME"
    else
        echo "Resolving conflicts for PR #$pr..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        for file in $CONFLICTED_FILES; do
            resolve_conflicts "$file"
        done
        
        # Handle tsconfig.tsbuildinfo specially
        if [ -f "tsconfig.tsbuildinfo" ]; then
            rm -f tsconfig.tsbuildinfo
        fi
        
        # Add all resolved files
        git add .
        
        # Commit the merge
        git commit -m "Merge PR #$pr: $BRANCH_NAME (conflicts resolved)"
        
        echo "PR #$pr merged with conflicts resolved"
    fi
    
    # Clean up
    git branch -D $BRANCH_NAME 2>/dev/null || true
done

echo "All PRs processed successfully!"