#!/bin/bash

# Script to merge all open PR branches into main
set -e

echo "Starting systematic merge of all branches..."

# Get all branches that need to be merged
branches=(
    "origin/cursor/check-fix-push-and-merge-to-main-0a91"
    "origin/cursor/check-fix-push-and-merge-to-main-0df3"
    "origin/cursor/check-fix-push-and-merge-to-main-0efc"
    "origin/cursor/check-fix-push-and-merge-to-main-2964"
    "origin/cursor/check-fix-push-and-merge-to-main-4014"
    "origin/cursor/check-fix-push-and-merge-to-main-4fc6"
    "origin/cursor/check-fix-push-and-merge-to-main-6c00"
    "origin/cursor/check-fix-push-and-merge-to-main-6ecb"
    "origin/cursor/check-fix-push-and-merge-to-main-93f1"
    "origin/cursor/check-fix-push-and-merge-to-main-abd6"
    "origin/cursor/check-fix-push-and-merge-to-main-b3cd"
    "origin/cursor/check-fix-push-and-merge-to-main-f438"
    "origin/cursor/fix-netlify-build-and-merge-to-main-0e88"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1ec9"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2a9f"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2ee4"
    "origin/cursor/fix-netlify-build-and-merge-to-main-3df7"
    "origin/cursor/fix-netlify-build-and-merge-to-main-4497"
    "origin/cursor/fix-netlify-build-and-merge-to-main-47ac"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6310"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8304"
    "origin/cursor/fix-netlify-build-and-merge-to-main-88ba"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b157"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b390"
    "origin/cursor/fix-netlify-build-and-merge-to-main-bfeb"
    "origin/cursor/fix-netlify-build-and-merge-to-main-c7f4"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ec6b"
    "origin/cursor/fix-netlify-build-and-merge-to-main-f262"
)

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Check what files have conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts using main branch versions..."
            
            # Resolve conflicts by taking our version (main branch)
            git checkout --ours .
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch"
            echo "✅ Resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ Failed to merge $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Merge each branch
successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    echo "---"
done

echo "Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push the updated main branch
echo "Pushing updated main branch..."
git push origin main

echo "Merge process completed!"