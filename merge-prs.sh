#!/bin/bash

# Script to merge all open PRs into main branch
# This script will handle merge conflicts and merge all open PRs

echo "Starting PR merge process..."

# Get list of open PRs
echo "Fetching open PRs..."
PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

echo "Found open PRs: $PRS"

# Process each PR
for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    
    # Extract branch name
    BRANCH=$(echo "$PR_DETAILS" | grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    
    if [ -z "$BRANCH" ]; then
        echo "Could not extract branch name for PR #$pr, skipping..."
        continue
    fi
    
    echo "Branch: $BRANCH"
    
    # Fetch the branch
    echo "Fetching branch $BRANCH..."
    git fetch origin "$BRANCH" 2>/dev/null
    
    if [ $? -ne 0 ]; then
        echo "Failed to fetch branch $BRANCH, skipping..."
        continue
    fi
    
    # Try to merge
    echo "Attempting to merge $BRANCH..."
    git merge --no-commit --no-ff "origin/$BRANCH" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "Merge successful for $BRANCH"
        git commit -m "Merge PR #$pr: $BRANCH"
        echo "PR #$pr merged successfully"
    else
        echo "Merge conflict in $BRANCH, resolving..."
        
        # Resolve conflicts by keeping our version (main branch)
        git checkout --ours .
        git add .
        git commit -m "Merge PR #$pr: $BRANCH (resolved conflicts)"
        echo "PR #$pr merged with conflict resolution"
    fi
done

echo "All PRs processed!"