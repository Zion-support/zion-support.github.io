#!/bin/bash

# Script to process all open PRs
echo "Processing all open PRs..."

# Get list of open PRs
gh pr list --state open --json number,title,headRefName --jq '.[] | "\(.number) \(.headRefName)"' | while read pr_number branch_name; do
    echo "Processing PR #$pr_number with branch $branch_name"
    
    # Try to merge the PR
    if gh pr merge $pr_number --squash 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_number"
    else
        echo "❌ Failed to merge PR #$pr_number - has conflicts or other issues"
        
        # Try to checkout and resolve conflicts
        if gh pr checkout $pr_number 2>/dev/null; then
            echo "Checking out PR #$pr_number for conflict resolution..."
            
            # Fetch latest main
            git fetch origin main
            
            # Try to merge
            if git merge origin/main 2>/dev/null; then
                echo "✅ Successfully resolved conflicts for PR #$pr_number"
                git push origin $branch_name
                gh pr merge $pr_number --squash
            else
                echo "❌ Could not resolve conflicts for PR #$pr_number"
                # Use our conflict resolution script
                if [ -f "resolve_conflicts.sh" ]; then
                    ./resolve_conflicts.sh
                    git push origin $branch_name
                    gh pr merge $pr_number --squash
                fi
            fi
        else
            echo "❌ Could not checkout PR #$pr_number"
        fi
    fi
    
    # Switch back to main
    git checkout main
    git pull origin main
done

echo "Finished processing all PRs!"