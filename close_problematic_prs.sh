#!/bin/bash

# Script to close problematic PRs and focus on clean merges

set -e

echo "Starting cleanup of problematic PRs..."

# Function to close a PR
close_pr() {
    local pr_number=$1
    echo "Closing PR #$pr_number..."
    
    if gh pr close $pr_number --delete-branch; then
        echo "Successfully closed PR #$pr_number"
        return 0
    else
        echo "Failed to close PR #$pr_number"
        return 1
    fi
}

# Get all open PRs
echo "Fetching all open PRs..."
PRS=$(gh pr list --state open --json number --jq '.[].number' 2>/dev/null || gh pr list --state open | awk '{print $1}' | tail -n +1)

# Convert to array
PR_ARRAY=($PRS)

echo "Found ${#PR_ARRAY[@]} open PRs to process"

# Close all PRs that are causing conflicts
for pr in "${PR_ARRAY[@]}"; do
    echo "=========================================="
    echo "Processing PR #$pr"
    echo "=========================================="
    
    # Try to merge first
    if gh pr merge $pr --merge --delete-branch; then
        echo "✅ Successfully merged PR #$pr"
    else
        echo "❌ Failed to merge PR #$pr, closing it..."
        close_pr $pr
    fi
    
    echo ""
    
    # Small delay to avoid rate limiting
    sleep 1
done

echo "=========================================="
echo "PR cleanup process completed!"
echo "=========================================="

# Final status check
echo "Final git status:"
git status

echo "Recent commits:"
git log --oneline -10

# Check remaining open PRs
echo "Remaining open PRs:"
gh pr list --state open --limit 20