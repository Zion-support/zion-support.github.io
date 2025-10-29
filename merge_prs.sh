#!/bin/bash

# Script to merge open PRs systematically
echo "Starting PR merge process..."

# List of PR numbers to process (excluding DRAFT PRs)
PRS=(
    33410 33409 33407 33405 33404 33403 33402 33401
    33392 33391 33390 33389 33054 32379 32024 31846
    31845 31843 31842 31841 31840 31839 31838 31836
    31835 31834
)

for pr in "${PRS[@]}"; do
    echo "Processing PR #$pr..."
    
    # Try to merge the PR
    if gh pr merge $pr --squash --delete-branch 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr"
    else
        echo "❌ Failed to merge PR #$pr (likely has conflicts)"
    fi
done

echo "PR merge process completed."