#!/bin/bash

# Script to merge multiple PRs efficiently
PR_NUMBERS=(24142 24141 24140 24138 24137 24136 24135 24134 24133 24130 24129 24125 24122 24119 24116 24114 24111 24109 24106 24101 24100)

for pr_num in "${PR_NUMBERS[@]}"; do
    echo "Processing PR #$pr_num..."
    
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
            git commit -m "Merge PR #$pr_num: Resolve conflicts and integrate content" || true
        fi
    else
        echo "Could not get branch info for PR #$pr_num"
    fi
    
    echo "Completed PR #$pr_num"
    echo "---"
done

echo "All PRs processed!"