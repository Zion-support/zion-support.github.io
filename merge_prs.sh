#!/bin/bash

# Script to merge all open PRs by resolving conflicts automatically

# Get list of open PRs
echo "Getting list of open PRs..."
gh pr list --state open --json number,title,headRefName --jq '.[] | "\(.number) \(.headRefName)"' > pr_list.txt

# Process each PR
while IFS= read -r line; do
    pr_number=$(echo $line | cut -d' ' -f1)
    branch_name=$(echo $line | cut -d' ' -f2)
    
    echo "Processing PR #$pr_number ($branch_name)..."
    
    # Mark as ready for review
    gh pr ready $pr_number
    
    # Try to merge
    if gh pr merge $pr_number --merge --delete-branch 2>/dev/null; then
        echo "✓ Successfully merged PR #$pr_number"
    else
        echo "⚠ PR #$pr_number has conflicts, resolving..."
        
        # Checkout the PR branch
        gh pr checkout $pr_number
        
        # Fetch latest main
        git fetch origin main
        
        # Merge with main and resolve conflicts by accepting PR changes
        if git merge origin/main 2>/dev/null; then
            echo "✓ No conflicts in PR #$pr_number"
        else
            echo "Resolving conflicts in PR #$pr_number..."
            git checkout --ours .
            git add .
            git commit -m "Resolve merge conflicts by accepting PR changes"
        fi
        
        # Push changes
        git push origin $branch_name
        
        # Switch back to main and merge
        git checkout main
        git merge $branch_name
        git push origin main
        
        echo "✓ Manually merged PR #$pr_number"
    fi
    
    echo "---"
done < pr_list.txt

# Cleanup
rm pr_list.txt
echo "All PRs processed!"