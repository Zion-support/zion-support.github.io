#!/bin/bash

# Script to merge open PRs into main branch
echo "Starting PR merge process..."

# PR numbers to merge
PR_NUMBERS=(24633 24632)

for pr in "${PR_NUMBERS[@]}"; do
    echo "Processing PR #$pr..."
    
    # Get PR details
    PR_INFO=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    BRANCH_NAME=$(echo "$PR_INFO" | grep -o '"ref": "[^"]*"' | cut -d'"' -f4)
    
    if [ -z "$BRANCH_NAME" ]; then
        echo "Could not get branch name for PR #$pr"
        continue
    fi
    
    echo "Branch: $BRANCH_NAME"
    
    # Fetch the branch
    git fetch origin "$BRANCH_NAME"
    
    # Try to merge with conflict resolution
    echo "Attempting to merge $BRANCH_NAME..."
    if git merge "origin/$BRANCH_NAME" --no-ff -m "Merge PR #$pr: $BRANCH_NAME" --strategy-option=ours; then
        echo "Successfully merged PR #$pr"
    else
        echo "Merge conflict in PR #$pr, resolving with ours strategy..."
        git add .
        git commit -m "Resolve conflicts for PR #$pr using ours strategy"
    fi
done

echo "All PRs processed!"