#!/bin/bash

# Script to merge remaining open PRs into main branch
# This script will handle merge conflicts more robustly

set -e

echo "Starting remaining PR merge process..."

# Get all open PRs (excluding DRAFT)
echo "Fetching all open PRs (excluding DRAFT)..."
PRS=$(gh pr list --state open --json number,title,headRefName,isDraft --jq '.[] | select(.isDraft == false) | .number')

# Convert to array
PR_ARRAY=($PRS)

echo "Found ${#PR_ARRAY[@]} open non-draft PRs to merge"

# Function to merge a single PR with better error handling
merge_pr() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    local pr_info=$(gh pr view $pr_number --json title,headRefName,mergeable)
    local title=$(echo $pr_info | jq -r '.title')
    local head_ref=$(echo $pr_info | jq -r '.headRefName')
    local mergeable=$(echo $pr_info | jq -r '.mergeable')
    
    echo "PR #$pr_number: $title"
    echo "Head ref: $head_ref"
    echo "Mergeable: $mergeable"
    
    if [ "$mergeable" = "false" ]; then
        echo "PR #$pr_number is not mergeable, skipping..."
        return 1
    fi
    
    # Try to merge the PR directly
    echo "Attempting to merge PR #$pr_number..."
    if gh pr merge $pr_number --merge --delete-branch; then
        echo "Successfully merged PR #$pr_number"
        return 0
    else
        echo "Failed to merge PR #$pr_number via GitHub CLI, trying local merge..."
        
        # Fetch the latest changes
        git fetch origin
        
        # Try to merge locally
        if git merge origin/$head_ref; then
            echo "Successfully merged PR #$pr_number locally"
            git push origin main
            gh pr close $pr_number --delete-branch
            echo "Successfully merged and closed PR #$pr_number"
            return 0
        else
            echo "Conflicts found in PR #$pr_number, attempting to resolve..."
            
            # Try to resolve conflicts using ours strategy
            git checkout main
            if git merge origin/$head_ref --strategy-option=ours; then
                echo "Successfully merged PR #$pr_number with conflict resolution"
                git push origin main
                gh pr close $pr_number --delete-branch
                echo "Successfully merged and closed PR #$pr_number with conflict resolution"
                return 0
            else
                echo "Failed to resolve conflicts for PR #$pr_number, skipping..."
                git merge --abort
                return 1
            fi
        fi
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
    
    # Small delay to avoid rate limiting
    sleep 2
done

echo ""
echo "Remaining PR merge process completed!"
echo ""

# Final status check
echo "Final git status:"
git status

echo "Recent commits:"
git log --oneline -10

# Check remaining open PRs
echo "Remaining open PRs:"
gh pr list --state open --json number,title,isDraft --jq '.[] | "\(.number) - \(.title) (\(if .isDraft then "DRAFT" else "OPEN" end))"'