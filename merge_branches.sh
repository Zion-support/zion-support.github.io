#!/bin/bash

# Script to merge all cursor/fix-errors-and-merge-to-main branches
echo "Starting systematic merge of cursor/fix-errors-and-merge-to-main branches..."

# Get all branches matching the pattern
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -20)

# Counter for tracking
count=0
successful_merges=0
failed_merges=0

for branch in $branches; do
    count=$((count + 1))
    echo "Processing branch $count: $branch"
    
    # Extract branch name without origin/
    branch_name=${branch#origin/}
    
    # Try to merge the branch
    echo "Attempting to merge $branch_name..."
    
    if git merge "$branch" --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        successful_merges=$((successful_merges + 1))
    else
        echo "❌ Failed to merge $branch_name (likely already merged or conflicts)"
        failed_merges=$((failed_merges + 1))
        # Reset to clean state
        git merge --abort 2>/dev/null || true
    fi
    
    echo "---"
done

echo "Merge Summary:"
echo "Total branches processed: $count"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"