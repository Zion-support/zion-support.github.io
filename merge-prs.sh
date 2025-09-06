#!/bin/bash

echo "Starting PR merge process..."

# Get the 5 most recent open PRs
PRS="12054 12053 12052 12051 12050"

for pr in $PRS; do
    echo "Processing PR #$pr"
    
    # Get PR details
    PR_DATA=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    HEAD_REF=$(echo "$PR_DATA" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    MERGEABLE=$(echo "$PR_DATA" | grep -o '"mergeable":[^,]*' | cut -d':' -f2 | tr -d ' ,')
    
    echo "PR #$pr: $HEAD_REF (mergeable: $MERGEABLE)"
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "Attempting to merge PR #$pr..."
        
        # Fetch the PR branch
        git fetch origin "$HEAD_REF"
        
        # Try to merge
        if git merge "origin/$HEAD_REF" --no-edit; then
            echo "Successfully merged PR #$pr"
            git push origin main
            echo "Pushed to main"
        else
            echo "Merge failed for PR #$pr, aborting..."
            git merge --abort
        fi
    else
        echo "PR #$pr is not mergeable, skipping..."
    fi
    
    echo "---"
done

echo "PR merge process complete!"