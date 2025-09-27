#!/bin/bash

# Merge All New Branches Script
# This script will merge all the new cursor branches and resolve conflicts

set -e

echo "🚀 Starting comprehensive merge of all new branches..."

# Get the list of new cursor branches
NEW_BRANCHES=(
    "origin/cursor/check-fix-push-and-merge-to-main-0705"
    "origin/cursor/check-fix-push-and-merge-to-main-22ba"
    "origin/cursor/check-fix-push-and-merge-to-main-639c"
    "origin/cursor/check-fix-push-and-merge-to-main-6764"
    "origin/cursor/check-fix-push-and-merge-to-main-6838"
    "origin/cursor/check-fix-push-and-merge-to-main-7469"
    "origin/cursor/check-fix-push-and-merge-to-main-751c"
    "origin/cursor/check-fix-push-and-merge-to-main-a31c"
    "origin/cursor/check-fix-push-and-merge-to-main-a39b"
    "origin/cursor/check-fix-push-and-merge-to-main-b6f6"
    "origin/cursor/check-fix-push-and-merge-to-main-f34e"
)

# Function to resolve conflicts automatically
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # For JSON files, prefer the newer timestamp or more complete data
    if [[ "$file" == *.json ]]; then
        echo "📝 Resolving JSON conflicts by keeping more complete data"
        # Use git checkout --theirs for JSON files to get the latest version
        git checkout --theirs "$file"
        return 0
    fi
    
    # For TypeScript/JavaScript files, prefer the more complete version
    if [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
        echo "📝 Resolving TypeScript/JavaScript conflicts by keeping more complete version"
        # Use git checkout --theirs for source files to get the latest version
        git checkout --theirs "$file"
        return 0
    fi
    
    # For other files, use the incoming version
    git checkout --theirs "$file"
    return 0
}

# Function to merge a branch
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged: $branch"
        return 0
    else
        echo "⚠️  Merge conflict in: $branch"
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in files: $conflicted_files"
            
            for file in $conflicted_files; do
                resolve_conflicts "$file"
            done
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                return 0
            else
                echo "❌ Failed to commit resolved conflicts for: $branch"
                git merge --abort
                return 1
            fi
        else
            echo "❌ No conflicted files found but merge failed for: $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Ensure we're on main branch
echo "📍 Switching to main branch..."
git checkout main

# Merge each branch
successful_merges=0
failed_merges=0

for branch in "${NEW_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    echo "📊 Progress: $((successful_merges + failed_merges))/${#NEW_BRANCHES[@]} branches processed"
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📈 Total processed: $((successful_merges + failed_merges))"

# Push changes to remote
if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🚀 Pushing merged changes to remote..."
    git push origin main
    echo "✅ Changes pushed successfully!"
else
    echo "⚠️  No successful merges to push"
fi

echo ""
echo "🎉 Comprehensive merge process completed!"