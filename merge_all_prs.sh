#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# Get all open PR numbers
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number": [0-9]*' | grep -o '[0-9]*' | sort -n)

for pr_number in $PR_NUMBERS; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    HEAD_REF=$(echo "$PR_DETAILS" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    
    if [ -z "$HEAD_REF" ]; then
        echo "Could not get head ref for PR #$pr_number, skipping..."
        continue
    fi
    
    echo "PR #$pr_number head ref: $HEAD_REF"
    
    # Fetch the branch
    git fetch origin "$HEAD_REF"
    
    # Checkout the branch
    git checkout -b "pr-$pr_number" "origin/$HEAD_REF" 2>/dev/null || git checkout "pr-$pr_number"
    
    # Merge with main
    git merge main --no-edit || {
        echo "Merge conflict in PR #$pr_number, resolving..."
        # Resolve conflicts by keeping main branch content
        git checkout --ours . 2>/dev/null || true
        git add .
        git commit -m "Resolve merge conflicts - keep main branch content" || true
    }
    
    # Switch back to main and merge
    git checkout main
    git merge "pr-$pr_number" --no-edit || {
        echo "Failed to merge PR #$pr_number into main"
        continue
    }
    
    # Push to main
    git push origin main || {
        echo "Failed to push PR #$pr_number to main"
        continue
    }
    
    echo "Successfully merged PR #$pr_number"
    
    # Clean up
    git branch -D "pr-$pr_number" 2>/dev/null || true
done

echo "Finished merging all PRs"