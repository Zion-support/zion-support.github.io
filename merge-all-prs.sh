#!/bin/bash

echo "Starting PR merge process..."

# Get all PR refs
PR_REFS=$(git ls-remote origin | grep -E 'refs/pull/[0-9]+/head' | awk '{print $2}' | sort -V)

# Counter for tracking
SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_PRS=()

for pr_ref in $PR_REFS; do
    # Extract PR number
    PR_NUM=$(echo $pr_ref | sed 's/refs\/pull\/\([0-9]*\)\/head/\1/')
    
    echo "Processing PR #$PR_NUM..."
    
    # Fetch the PR
    if git fetch origin $pr_ref:pr-$PR_NUM 2>/dev/null; then
        echo "  ✓ Fetched PR #$PR_NUM"
        
        # Try to merge
        if git merge pr-$PR_NUM --no-edit -X ours 2>/dev/null; then
            echo "  ✓ Successfully merged PR #$PR_NUM"
            ((SUCCESS_COUNT++))
        else
            echo "  ✗ Failed to merge PR #$PR_NUM (conflicts)"
            git merge --abort 2>/dev/null
            FAILED_PRS+=($PR_NUM)
            ((FAILED_COUNT++))
        fi
        
        # Clean up the branch
        git branch -D pr-$PR_NUM 2>/dev/null
    else
        echo "  ✗ Failed to fetch PR #$PR_NUM"
        FAILED_PRS+=($PR_NUM)
        ((FAILED_COUNT++))
    fi
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Successfully merged: $SUCCESS_COUNT PRs"
echo "Failed to merge: $FAILED_COUNT PRs"

if [ ${#FAILED_PRS[@]} -gt 0 ]; then
    echo "Failed PRs: ${FAILED_PRS[*]}"
fi

echo "Process completed."