#!/bin/bash

# Script to merge remaining unmerged cursor branches
set -e

echo "Starting merge process for remaining unmerged cursor branches..."

# Get current unmerged branches
git branch -r --no-merged main | grep "cursor/fix-errors-and-merge-to-main" > remaining_branches.txt

total_branches=$(wc -l < remaining_branches.txt)
current=0
successful_merges=0
failed_merges=0

echo "Total remaining branches to merge: $total_branches"

# Process each branch
while IFS= read -r branch; do
    current=$((current + 1))
    echo "[$current/$total_branches] Processing: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit > /dev/null 2>&1; then
        echo "  ✅ Successfully merged $branch"
        successful_merges=$((successful_merges + 1))
    else
        echo "  ❌ Failed to merge $branch"
        failed_merges=$((failed_merges + 1))
        
        # Reset the merge attempt
        git merge --abort > /dev/null 2>&1 || true
    fi
done < remaining_branches.txt

echo ""
echo "Merge process completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Total processed: $total_branches"

if [ $successful_merges -gt 0 ]; then
    echo "Pushing merged changes to main..."
    git push origin main
    echo "✅ Changes pushed to main successfully!"
fi

# Clean up
rm -f remaining_branches.txt