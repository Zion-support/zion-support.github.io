#!/bin/bash

# Script to merge all cursor/fix-errors-and-merge-to-main branches into main
set -e

echo "Starting batch merge of all feature branches..."

# Get all cursor/fix-errors-and-merge-to-main branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -50)

successful_merges=0
failed_merges=0
conflict_branches=()

echo "Found $(echo "$branches" | wc -l) branches to process"

for branch in $branches; do
    # Remove origin/ prefix
    local_branch=$(echo $branch | sed 's/origin\///')
    
    echo "Processing branch: $local_branch"
    
    # Checkout the branch
    if git checkout -b $local_branch $branch 2>/dev/null || git checkout $local_branch 2>/dev/null; then
        # Try to merge into main
        git checkout main
        
        if git merge --no-edit $local_branch 2>/dev/null; then
            echo "✅ Successfully merged $local_branch"
            ((successful_merges++))
            
            # Clean up the branch
            git branch -d $local_branch 2>/dev/null || true
        else
            echo "❌ Merge conflict in $local_branch"
            ((failed_merges++))
            conflict_branches+=($local_branch)
            
            # Abort the merge
            git merge --abort 2>/dev/null || true
            
            # Keep the branch for manual resolution
            git checkout main
        fi
    else
        echo "❌ Failed to checkout $local_branch"
        ((failed_merges++))
    fi
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Branches with conflicts: ${#conflict_branches[@]}"

if [ ${#conflict_branches[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts:"
    for branch in "${conflict_branches[@]}"; do
        echo "  - $branch"
    done
fi

echo ""
echo "Batch merge completed!"