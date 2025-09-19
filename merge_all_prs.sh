#!/bin/bash

# Script to merge all open PRs into main branch
echo "Starting bulk PR merge process..."

# Extract PR numbers from the JSON file
PR_NUMBERS=$(grep -o '"number": [0-9]*' /workspace/current_prs.json | grep -o '[0-9]*' | sort -n)

echo "Found PR numbers: $(echo $PR_NUMBERS | wc -w) PRs"

# Counter for tracking
count=0
merged=0
failed=0

for pr_num in $PR_NUMBERS; do
    count=$((count + 1))
    echo "[$count] Processing PR #$pr_num..."
    
    # Try to merge the PR
    if gh pr merge $pr_num --merge --delete-branch 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_num"
        merged=$((merged + 1))
    else
        echo "❌ Failed to merge PR #$pr_num (may have conflicts or be already merged)"
        failed=$((failed + 1))
    fi
    
    # Add a small delay to avoid rate limiting
    sleep 1
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Total PRs processed: $count"
echo "Successfully merged: $merged"
echo "Failed to merge: $failed"
echo "======================"