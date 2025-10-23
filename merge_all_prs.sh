#!/bin/bash

# Script to merge all open PRs into main branch
# This script will handle merge conflicts automatically

set -e

echo "Starting comprehensive PR merge process..."

# Get all open PRs
echo "Fetching all open PRs..."
PRS=$(gh pr list --state open --json number,title,headRefName --jq '.[].number')

# Convert to array
PR_ARRAY=($PRS)

echo "Found ${#PR_ARRAY[@]} open PRs to merge"

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Check if PR is draft
    local is_draft=$(gh pr view $pr_number --json isDraft --jq '.isDraft')
    
    if [ "$is_draft" = "true" ]; then
        echo "PR #$pr_number is a draft, converting to ready for review..."
        gh pr ready $pr_number
    fi
    
    # Try to merge the PR
    echo "Attempting to merge PR #$pr_number..."
    if gh pr merge $pr_number --merge --delete-branch; then
        echo "Successfully merged PR #$pr_number"
        return 0
    else
        echo "Failed to merge PR #$pr_number, checking for conflicts..."
        
        # Check out the PR branch
        gh pr checkout $pr_number
        
        # Try to merge with main
        if git merge main; then
            echo "No conflicts found, merging..."
            git checkout main
            git merge $pr_number
            git push origin main
            gh pr close $pr_number --delete-branch
            echo "Successfully merged PR #$pr_number after resolving conflicts"
        else
            echo "Conflicts found in PR #$pr_number, attempting to resolve..."
            
            # Use git merge strategy to resolve conflicts
            git checkout main
            git merge $pr_number --strategy-option=ours || {
                echo "Failed to resolve conflicts for PR #$pr_number, skipping..."
                git merge --abort
                return 1
            }
            
            git push origin main
            gh pr close $pr_number --delete-branch
            echo "Successfully merged PR #$pr_number with conflict resolution"
        fi
        
        return 0
    fi
}

# Process each PR
for pr in "${PR_ARRAY[@]}"; do
    echo ""
    echo "Processing PR #$pr"
    echo ""
    
    if merge_pr $pr; then
        echo "✅ Successfully processed PR #$pr"
    else
        echo "❌ Failed to process PR #$pr"
    fi
    
    echo ""
done

echo ""
echo "PR merge process completed!"
echo ""

# Final status check
echo "Final git status:"
git status

echo "Recent commits:"
git log --oneline -10