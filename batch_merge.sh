#!/bin/bash

# Script to batch merge multiple branches with conflict resolution
# This will attempt to merge branches and resolve conflicts automatically

echo "Starting batch merge process..."

# List of branches to merge (most recent first)
branches=(
    "origin/cursor/fix-errors-and-merge-to-main-2aaa"
    "origin/cursor/fix-errors-and-merge-to-main-7574"
    "origin/cursor/fix-errors-and-merge-to-main-8fd9"
    "origin/cursor/fix-errors-and-merge-to-main-0fa2"
    "origin/cursor/fix-errors-and-merge-to-main-52d9"
    "origin/cursor/fix-errors-and-merge-to-main-bb88"
    "origin/cursor/fix-errors-and-merge-to-main-8836"
)

successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-commit; then
        echo "✅ Successfully merged $branch (no conflicts)"
        git commit -m "Merge branch '$branch' - no conflicts"
        ((successful_merges++))
    else
        echo "⚠️  Conflicts detected in $branch, attempting to resolve..."
        
        # Get list of conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "Resolving conflicts in: $conflicted_files"
            
            # For each conflicted file, accept the incoming version (theirs)
            for file in $conflicted_files; do
                echo "  Resolving $file..."
                git checkout --theirs "$file" 2>/dev/null || echo "    Could not resolve $file"
                git add "$file" 2>/dev/null || echo "    Could not add $file"
            done
            
            # Handle deleted files
            deleted_files=$(git diff --name-only --diff-filter=D)
            for file in $deleted_files; do
                echo "  Removing deleted file: $file"
                git rm "$file" 2>/dev/null || echo "    Could not remove $file"
            done
            
            # Commit the merge
            if git commit -m "Merge branch '$branch' with automatic conflict resolution"; then
                echo "✅ Successfully merged $branch (conflicts resolved)"
                ((successful_merges++))
            else
                echo "❌ Failed to commit merge for $branch"
                git merge --abort
                ((failed_merges++))
            fi
        else
            echo "❌ No conflicted files found, aborting merge for $branch"
            git merge --abort
            ((failed_merges++))
        fi
    fi
    
    echo "---"
done

echo "Batch merge completed!"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Verify build still works
echo "Verifying build..."
if npm run build; then
    echo "✅ Build successful after merges"
else
    echo "❌ Build failed after merges"
fi