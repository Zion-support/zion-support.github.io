#!/bin/bash

# Script to merge all remaining unmerged branches
set -e

echo "🔄 Starting to merge remaining unmerged branches..."

# Get list of unmerged branches
UNMERGED_BRANCHES=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-0ee3"
    "origin/cursor/fix-netlify-build-and-merge-to-main-317e"
    "origin/cursor/fix-netlify-build-and-merge-to-main-45cd"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6d34"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8d86"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ff2d"
)

SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in "${UNMERGED_BRANCHES[@]}"; do
    echo "🔄 Attempting to merge: $branch"
    
    if git merge "$branch" --no-commit; then
        echo "✅ Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch into main"
        ((SUCCESS_COUNT++))
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Try to resolve conflicts automatically
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "Conflicted files: $CONFLICT_FILES"
        
        # Resolve conflicts by taking the version from main (HEAD)
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file"
            git checkout --ours "$file"
            git add "$file"
        done
        
        # Commit the resolved conflicts
        if git commit -m "Resolve merge conflicts from $branch"; then
            echo "✅ Successfully resolved conflicts and merged $branch"
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort
            ((FAILED_COUNT++))
        fi
    fi
    
    echo "---"
done

echo "📊 Merge Results:"
echo "✅ Successful: $SUCCESS_COUNT"
echo "❌ Failed: $FAILED_COUNT"
echo "📋 Total processed: $((SUCCESS_COUNT + FAILED_COUNT))"