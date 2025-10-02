#!/bin/bash

# Script to systematically merge open PRs
echo "Starting PR merge process..."

# Get list of open PR numbers
echo "Fetching open PR numbers..."
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | cut -d':' -f2)

if [ -z "$PR_NUMBERS" ]; then
    echo "No open PRs found"
    exit 0
fi

echo "Found PRs: $PR_NUMBERS"

# Process each PR
for pr_number in $PR_NUMBERS; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    pr_data=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    pr_title=$(echo "$pr_data" | grep -o '"title":"[^"]*"' | cut -d'"' -f4)
    pr_head_branch=$(echo "$pr_data" | grep -o '"head":{"ref":"[^"]*"' | cut -d'"' -f6)
    pr_base_branch=$(echo "$pr_data" | grep -o '"base":{"ref":"[^"]*"' | cut -d'"' -f6)
    
    echo "  Title: $pr_title"
    echo "  Head branch: $pr_head_branch"
    echo "  Base branch: $pr_base_branch"
    
    if [ "$pr_base_branch" = "main" ]; then
        echo "  Attempting to merge PR #$pr_number..."
        
        # Try to checkout and merge the branch
        if git checkout "origin/$pr_head_branch" 2>/dev/null; then
            echo "  Successfully checked out $pr_head_branch"
            
            # Try to merge into main
            git checkout main
            if git merge "origin/$pr_head_branch" --no-ff -m "Merge PR #$pr_number: $pr_title" 2>/dev/null; then
                echo "  Successfully merged PR #$pr_number"
                git push origin main
                echo "  Pushed changes to main"
            else
                echo "  Merge conflict detected for PR #$pr_number"
                # Try to resolve conflicts automatically
                git status
                git merge --abort
            fi
        else
            echo "  Could not checkout branch $pr_head_branch"
        fi
    else
        echo "  Skipping PR #$pr_number (base branch is not main)"
    fi
    
    echo "  Completed processing PR #$pr_number"
    echo "---"
done

echo "PR merge process completed!"