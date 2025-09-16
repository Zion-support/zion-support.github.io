#!/bin/bash

# Script to merge all open branches and resolve conflicts
set -e

echo "🚀 Starting systematic merge of all branches..."

# Get list of unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep -E "(cursor|feature)" | head -20)

echo "Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "🔄 Attempting to merge $branch..."
    
    # Try to merge
    if git merge "$branch" --no-commit; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - resolved conflicts automatically"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "Conflicted files: $CONFLICT_FILES"
        
        # Resolve conflicts by keeping our version (main branch)
        for file in $CONFLICT_FILES; do
            echo "Resolving conflict in $file..."
            git checkout --ours "$file"
            git add "$file"
        done
        
        # Commit the merge
        git commit -m "Merge $branch into main - resolved conflicts by keeping main branch version"
        echo "✅ Resolved conflicts and merged $branch"
        return 0
    fi
}

# Merge each branch
for branch in $UNMERGED_BRANCHES; do
    echo "Processing $branch..."
    merge_branch "$branch"
    echo "---"
done

echo "🎉 All branches merged successfully!"

# Push to remote
echo "📤 Pushing to remote..."
git push origin main

echo "✅ All done!"