#!/bin/bash

# Check which cursor branches have commits not in main

echo "Checking for branches with unique commits..."

branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main-" | head -100)

unmerged_count=0
merged_count=0

for branch in $branches; do
    # Get the commit hash of the branch
    branch_commit=$(git rev-parse "$branch" 2>/dev/null)
    
    if [ $? -eq 0 ]; then
        # Check if this commit is in main
        if git merge-base --is-ancestor "$branch_commit" HEAD 2>/dev/null; then
            merged_count=$((merged_count + 1))
        else
            unmerged_count=$((unmerged_count + 1))
            echo "UNMERGED: $branch"
        fi
    fi
done

echo ""
echo "Summary (first 100 branches):"
echo "  Already merged: $merged_count"
echo "  Need merging: $unmerged_count"
