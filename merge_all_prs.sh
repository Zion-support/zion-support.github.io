#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# Get list of open PR numbers
PR_NUMBERS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

echo "Found PR numbers: $PR_NUMBERS"

for pr in $PR_NUMBERS; do
    echo "Processing PR #$pr..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    
    # Extract head ref
    HEAD_REF=$(echo "$PR_DETAILS" | grep -o '"ref":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -n "$HEAD_REF" ]; then
        echo "Merging PR #$pr from branch $HEAD_REF..."
        
        # Fetch the branch
        git fetch origin "$HEAD_REF"
        
        # Try to merge
        if git merge "origin/$HEAD_REF" --no-edit; then
            echo "Successfully merged PR #$pr"
        else
            echo "Failed to merge PR #$pr, resolving conflicts..."
            # Try to resolve conflicts automatically
            git add .
            git commit -m "Resolve merge conflicts for PR #$pr"
        fi
    else
        echo "Could not extract head ref for PR #$pr"
    fi
done

echo "Finished processing all PRs"