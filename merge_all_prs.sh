#!/bin/bash

# Script to merge all open PRs automatically
# This script will merge all open PRs by accepting incoming changes

echo "Starting automatic PR merge process..."

# Get list of open PRs
PRS=$(gh pr list --state open --json number --jq '.[].number')

for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Try to merge with auto-merge strategy
    if gh pr merge $pr --squash --delete-branch --auto; then
        echo "Successfully merged PR #$pr"
    else
        echo "Failed to merge PR #$pr, trying conflict resolution..."
        
        # Checkout the PR branch
        if gh pr checkout $pr; then
            # Fetch latest main
            git fetch origin main
            
            # Try to merge with strategy to accept incoming changes
            if git merge origin/main -X theirs; then
                # Push the resolved conflicts
                git push origin HEAD
                
                # Try to merge again
                if gh pr merge $pr --squash --delete-branch; then
                    echo "Successfully merged PR #$pr after conflict resolution"
                else
                    echo "Still failed to merge PR #$pr after conflict resolution"
                fi
            else
                echo "Failed to resolve conflicts for PR #$pr"
                git merge --abort
            fi
            
            # Go back to main
            git checkout main
        else
            echo "Failed to checkout PR #$pr"
        fi
    fi
    
    echo "---"
done

echo "PR merge process completed!"