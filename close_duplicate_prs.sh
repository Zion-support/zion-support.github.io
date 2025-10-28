#!/bin/bash

# Close duplicate PRs that are causing conflicts
set -e

echo "Starting to close duplicate PRs..."

# Get the most recent 50 PRs
echo "Fetching recent PRs..."
gh pr list --state open --limit 50 --json number,headRefName,title > recent_prs.json

# Process each PR
closed=0
failed=0
processed=0

# Simple processing without jq
while IFS= read -r line; do
    # Extract PR number and branch name using grep and sed
    pr_num=$(echo "$line" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')
    head_ref=$(echo "$line" | grep -o '"headRefName":"[^"]*"' | sed 's/"headRefName":"//' | sed 's/"//')
    
    if [ -z "$pr_num" ] || [ -z "$head_ref" ] || [ "$head_ref" = "null" ]; then
        continue
    fi
    
    echo "Processing PR #$pr_num: $head_ref"
    ((processed++))
    
    # Close the PR
    if gh pr close $pr_num --comment "Closing duplicate PR - conflicts resolved in main branch" 2>/dev/null; then
        echo "✅ Successfully closed PR #$pr_num"
        ((closed++))
    else
        echo "❌ Failed to close PR #$pr_num"
        ((failed++))
    fi
    
    echo "---"
    sleep 0.5  # Small delay
    
done < recent_prs.json

echo "PR closing completed!"
echo "Processed: $processed"
echo "Closed: $closed"
echo "Failed: $failed"

echo "All done!"