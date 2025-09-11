#!/bin/bash

# Script to merge all open PRs
set -e

echo "Starting PR merge process..."

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN is not set. Export GITHUB_TOKEN before running." >&2
  exit 1
fi

# Get list of open PRs
PRS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=20" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

echo "Found PRs: $PRS"

for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    
    # Extract head branch
    HEAD_BRANCH=$(echo "$PR_DETAILS" | grep -o '"ref":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -n "$HEAD_BRANCH" ]; then
        echo "Merging branch: $HEAD_BRANCH"
        
        # Fetch the branch
        git fetch origin "$HEAD_BRANCH"
        
        # Try to merge
        if git merge "origin/$HEAD_BRANCH" --no-ff -m "Merge PR #$pr: $HEAD_BRANCH"; then
            echo "Successfully merged PR #$pr"
            git push origin main
        else
            echo "Failed to merge PR #$pr, resolving conflicts..."
            # Try to resolve conflicts automatically
            git checkout --theirs .
            git add .
            git commit -m "Resolve merge conflicts for PR #$pr"
            git push origin main
        fi
    else
        echo "Could not find head branch for PR #$pr"
    fi
    
    echo "Completed PR #$pr"
    echo "---"
done

echo "All PRs processed!"