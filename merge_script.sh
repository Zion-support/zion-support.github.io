#!/bin/bash

# Script to merge all cursor/check-fix-push-and-merge-to-main branches
echo "Starting systematic merge of cursor branches..."

# Get all branches with the pattern
branches=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///')

# Counter for tracking progress
count=0
total=$(echo "$branches" | wc -l)
merged=0
skipped=0

echo "Found $total branches to check"

for branch in $branches; do
    count=$((count + 1))
    echo "[$count/$total] Checking branch: $branch"
    
    # Check if branch has commits ahead of main
    commits_ahead=$(git log --oneline main..origin/$branch | wc -l)
    
    if [ "$commits_ahead" -gt 0 ]; then
        echo "  -> Branch has $commits_ahead commits ahead of main, attempting merge..."
        
        # Try to merge
        if git merge origin/$branch --no-edit --no-ff; then
            echo "  -> ✅ Successfully merged $branch"
            merged=$((merged + 1))
        else
            echo "  -> ❌ Merge conflict in $branch, skipping..."
            git merge --abort
            skipped=$((skipped + 1))
        fi
    else
        echo "  -> ⏭️  Branch is up to date with main, skipping..."
        skipped=$((skipped + 1))
    fi
    
    # Show progress every 50 branches
    if [ $((count % 50)) -eq 0 ]; then
        echo "Progress: $count/$total processed, $merged merged, $skipped skipped"
    fi
done

echo ""
echo "Merge complete!"
echo "Total branches processed: $total"
echo "Successfully merged: $merged"
echo "Skipped (up to date or conflicts): $skipped"

# Push changes if any merges were successful
if [ "$merged" -gt 0 ]; then
    echo "Pushing merged changes to origin/main..."
    git push origin main
fi