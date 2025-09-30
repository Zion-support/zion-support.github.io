#!/bin/bash

# Script to merge the final 2 PRs
FINAL_PR_NUMBERS=(24149 24148)

for pr_num in "${FINAL_PR_NUMBERS[@]}"; do
    echo "Processing final PR #$pr_num..."
    
    # Get PR details
    pr_data=$(curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num)
    head_ref=$(echo "$pr_data" | grep -o '"ref": "[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -n "$head_ref" ]; then
        echo "Fetching branch: $head_ref"
        git fetch origin "$head_ref"
        
        echo "Merging branch: $head_ref"
        if git merge "origin/$head_ref" --no-edit; then
            echo "Successfully merged PR #$pr_num"
        else
            echo "Conflict in PR #$pr_num, resolving..."
            # Resolve conflicts by keeping our version
            git checkout HEAD -- app/page.tsx app/layout.tsx 2>/dev/null || true
            git add .
            git commit -m "Merge final PR #$pr_num: Resolve conflicts and integrate content" || true
        fi
    else
        echo "Could not get branch info for PR #$pr_num"
    fi
    
    echo "Completed PR #$pr_num"
    echo "---"
done

echo "All final PRs processed!"