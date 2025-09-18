#!/bin/bash

# Script to batch merge remaining unmerged cursor branches
set -e

echo "Starting batch merge of remaining unmerged cursor branches..."

# Get list of unmerged cursor branches
UNMERGED_BRANCHES=($(git branch -r --no-merged main | grep "cursor/" | head -20))

echo "Found ${#UNMERGED_BRANCHES[@]} unmerged cursor branches"

SUCCESSFUL_MERGES=()
FAILED_MERGES=()

for branch in "${UNMERGED_BRANCHES[@]}"; do
    # Remove 'origin/' prefix
    branch_name=${branch#origin/}
    
    echo ""
    echo "Processing branch: $branch_name"
    echo "=========================================="
    
    # Try to merge the branch with strategy
    if git merge "origin/$branch_name" --no-edit -X ours; then
        echo "✅ Successfully merged $branch_name"
        SUCCESSFUL_MERGES+=("$branch_name")
        
        # Commit the merge
        git add . && git commit -m "Merge $branch_name with advanced content and components" || true
        
        # Push the merge
        if git push origin main --force-with-lease; then
            echo "✅ Successfully pushed merge for $branch_name"
        else
            echo "❌ Failed to push merge for $branch_name"
        fi
    else
        echo "❌ Merge conflict in $branch_name even with strategy"
        FAILED_MERGES+=("$branch_name")
        
        # Abort the merge
        git merge --abort
        echo "Aborted merge for $branch_name"
    fi
    
    echo "Current status:"
    git status --porcelain
    echo ""
done

echo ""
echo "=========================================="
echo "BATCH MERGE SUMMARY"
echo "=========================================="
echo "Successful merges: ${#SUCCESSFUL_MERGES[@]}"
for branch in "${SUCCESSFUL_MERGES[@]}"; do
    echo "  ✅ $branch"
done

echo ""
echo "Failed merges: ${#FAILED_MERGES[@]}"
for branch in "${FAILED_MERGES[@]}"; do
    echo "  ❌ $branch"
done

echo ""
echo "Final git status:"
git status

echo ""
echo "Batch merge completed!"