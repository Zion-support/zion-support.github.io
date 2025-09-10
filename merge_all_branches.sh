#!/bin/bash

# Script to merge all unmerged branches that can be merged without conflicts
echo "Starting automated merge process..."

# Get list of unmerged branches
unmerged_branches=$(git branch -r --no-merged origin/main | head -50)

merge_count=0
conflict_count=0
error_count=0

for branch in $unmerged_branches; do
    echo "Attempting to merge: $branch"
    
    # Try to merge without committing
    if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
        # If merge succeeds, commit it
        git commit -m "Auto-merge: $branch" --no-edit
        echo "✅ Successfully merged: $branch"
        ((merge_count++))
    else
        # If merge fails, reset and continue
        git merge --abort 2>/dev/null
        echo "❌ Conflict or error merging: $branch"
        ((conflict_count++))
    fi
    
    # Push every 10 merges to avoid issues
    if [ $((merge_count % 10)) -eq 0 ] && [ $merge_count -gt 0 ]; then
        echo "Pushing changes after $merge_count merges..."
        git push origin main
    fi
done

echo "Merge process completed!"
echo "Successfully merged: $merge_count branches"
echo "Conflicts/errors: $conflict_count branches"

# Final push
git push origin main