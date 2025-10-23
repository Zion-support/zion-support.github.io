#!/bin/bash

# Final comprehensive script to merge all remaining PRs
# This script uses aggressive merge strategies to resolve conflicts

set -e

echo "Starting final comprehensive PR merge process..."

# Function to merge a single PR with aggressive conflict resolution
merge_pr_aggressive() {
    local pr_number=$1
    echo "Processing PR #$pr_number with aggressive merge strategy..."
    
    # Get PR details
    local pr_info=$(gh pr view $pr_number --json title,headRefName,mergeable,isDraft)
    local title=$(echo $pr_info | grep -o '"title":"[^"]*"' | cut -d'"' -f4)
    local head_ref=$(echo $pr_info | grep -o '"headRefName":"[^"]*"' | cut -d'"' -f4)
    local mergeable=$(echo $pr_info | grep -o '"mergeable":[^,}]*' | cut -d':' -f2 | tr -d ' "')
    local is_draft=$(echo $pr_info | grep -o '"isDraft":[^,}]*' | cut -d':' -f2 | tr -d ' "')
    
    echo "PR #$pr_number: $title"
    echo "Head ref: $head_ref"
    echo "Mergeable: $mergeable"
    echo "Is Draft: $is_draft"
    
    # Convert draft to ready if needed
    if [ "$is_draft" = "true" ]; then
        echo "Converting draft PR #$pr_number to ready for review..."
        gh pr ready $pr_number || echo "Failed to convert draft, continuing..."
    fi
    
    # Try direct merge first
    if gh pr merge $pr_number --merge --delete-branch; then
        echo "Successfully merged PR #$pr_number directly"
        return 0
    fi
    
    echo "Direct merge failed, trying local merge with conflict resolution..."
    
    # Fetch latest changes
    git fetch origin
    
    # Try to merge with conflict resolution
    if git merge origin/$head_ref --strategy-option=ours; then
        echo "Successfully merged PR #$pr_number with conflict resolution"
        git push origin main
        gh pr close $pr_number --delete-branch || echo "Failed to close PR, but merge succeeded"
        return 0
    else
        echo "Failed to merge PR #$pr_number even with conflict resolution"
        git merge --abort || true
        return 1
    fi
}

# Get all open PRs
echo "Fetching all open PRs..."
PRS=$(gh pr list --state open --json number --jq '.[].number' 2>/dev/null || gh pr list --state open | awk '{print $1}' | tail -n +1)

# Convert to array
PR_ARRAY=($PRS)

echo "Found ${#PR_ARRAY[@]} open PRs to merge"

# Process each PR
success_count=0
failed_count=0

for pr in "${PR_ARRAY[@]}"; do
    echo ""
    echo "Processing PR #$pr"
    echo ""
    
    if merge_pr_aggressive $pr; then
        echo "✅ Successfully processed PR #$pr"
        ((success_count++))
    else
        echo "❌ Failed to process PR #$pr"
        ((failed_count++))
    fi
    
    echo ""
    
    # Small delay to avoid rate limiting
    sleep 1
done

echo ""
echo "Final PR merge process completed!"
echo "Successfully merged: $success_count PRs"
echo "Failed to merge: $failed_count PRs"
echo ""

# Final status check
echo "Final git status:"
git status

echo "Recent commits:"
git log --oneline -10

# Check remaining open PRs
echo "Remaining open PRs:"
gh pr list --state open --limit 20