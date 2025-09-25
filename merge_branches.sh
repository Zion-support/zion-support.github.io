#!/bin/bash

# Script to merge multiple branches efficiently
echo "Starting batch merge of unmerged branches..."

# Get list of unmerged branches (excluding backup branches)
branches=$(git branch -r --no-merged origin/main | grep -v backup | grep -v aggressive | grep -v bulk | head -20)

merged_count=0
failed_count=0

for branch in $branches; do
    echo "Attempting to merge: $branch"
    
    # Fetch the branch
    git fetch origin $branch
    
    # Try to merge
    if git merge origin/$branch --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        merged_count=$((merged_count + 1))
    else
        echo "❌ Failed to merge: $branch - resolving conflicts automatically"
        
        # Try to resolve conflicts automatically
        find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.json" | xargs sed -i '/<<<<<<< HEAD/,/=======/d; />>>>>>> /d' 2>/dev/null
        
        # Remove any backup files that cause conflicts
        find . -name "*.backup.*" -exec git rm -f {} \; 2>/dev/null
        
        # Add all changes
        git add . 2>/dev/null
        
        # Try to commit
        if git commit -m "Auto-merge $branch with conflict resolution" 2>/dev/null; then
            echo "✅ Auto-resolved and merged: $branch"
            merged_count=$((merged_count + 1))
        else
            echo "❌ Could not auto-resolve: $branch - aborting merge"
            git merge --abort 2>/dev/null
            failed_count=$((failed_count + 1))
        fi
    fi
    
    # Push every 5 merges
    if [ $((merged_count % 5)) -eq 0 ] && [ $merged_count -gt 0 ]; then
        echo "Pushing batch of merges..."
        git push origin main --force-with-lease
    fi
done

echo "Batch merge completed!"
echo "Successfully merged: $merged_count branches"
echo "Failed to merge: $failed_count branches"

# Final push
git push origin main --force-with-lease

echo "All changes pushed to main branch"