#!/bin/bash

# Auto-merge script for branches without conflicts
echo "Starting auto-merge process..."

# Get list of unmerged branches, sorted by date (most recent first)
branches=$(git branch -r --no-merged main --sort=-committerdate | head -50)

merged_count=0
conflict_count=0
total_count=0

for branch in $branches; do
    # Skip origin/HEAD
    if [[ "$branch" == "origin/HEAD" ]]; then
        continue
    fi
    
    total_count=$((total_count + 1))
    echo "Attempting to merge: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-ff -m "Auto-merge: $branch" 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        merged_count=$((merged_count + 1))
    else
        echo "❌ Conflict in: $branch - aborting merge"
        git merge --abort 2>/dev/null
        conflict_count=$((conflict_count + 1))
    fi
    
    # Add a small delay to avoid overwhelming the system
    sleep 1
done

echo "=========================================="
echo "Auto-merge completed!"
echo "Total branches processed: $total_count"
echo "Successfully merged: $merged_count"
echo "Conflicts encountered: $conflict_count"
echo "=========================================="