#!/bin/bash

# Script to merge cursor branches into main
# This script will handle merge conflicts and merge branches systematically

echo "Starting cursor branch merge process..."

# Get the list of cursor branches
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -100)

# Counter for tracking progress
count=0
successful_merges=0
failed_merges=0

for branch in $BRANCHES; do
    count=$((count + 1))
    echo "Processing branch $count: $branch"
    
    # Extract branch name without origin/
    branch_name=$(echo $branch | sed 's/origin\///')
    
    # Try to merge the branch
    if git merge --no-ff -m "Merge $branch_name" $branch 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        successful_merges=$((successful_merges + 1))
    else
        echo "❌ Failed to merge $branch_name (conflicts or other issues)"
        failed_merges=$((failed_merges + 1))
        
        # Reset to previous state
        git merge --abort 2>/dev/null
    fi
    
    # Show progress every 10 branches
    if [ $((count % 10)) -eq 0 ]; then
        echo "Progress: $count branches processed, $successful_merges successful, $failed_merges failed"
    fi
done

echo "Merge process completed!"
echo "Total branches processed: $count"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"