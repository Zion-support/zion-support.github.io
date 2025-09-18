#!/bin/bash

# Comprehensive script to merge all open PRs and branches into main
echo "🚀 Starting comprehensive merge process for all branches..."

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch_name=$1
    echo "🔄 Processing branch: $branch_name"
    
    # Try to merge the branch
    if git merge "origin/$branch_name" --no-commit 2>/dev/null; then
        echo "  ✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name - clean merge"
        return 0
    else
        echo "  ⚠️  Merge conflicts detected for $branch_name, resolving in favor of main..."
        
        # Resolve conflicts by keeping our version (main branch)
        git checkout --ours . 2>/dev/null
        git add . 2>/dev/null
        
        if git commit -m "Merge $branch_name - resolved conflicts in favor of main branch" 2>/dev/null; then
            echo "  ✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            echo "  ❌ Failed to merge $branch_name, aborting..."
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Get all cursor branches (content creation branches)
echo "📋 Processing cursor content creation branches..."
cursor_branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | head -50)

for branch in $cursor_branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    merge_branch "$branch_name"
    echo "  ---"
done

# Get all fix-netlify-build branches
echo "📋 Processing fix-netlify-build branches..."
fix_branches=$(git branch -r | grep "cursor/fix-netlify-build-and-merge-to-main" | head -30)

for branch in $fix_branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    merge_branch "$branch_name"
    echo "  ---"
done

# Get all feature branches
echo "📋 Processing feature branches..."
feature_branches=$(git branch -r | grep "feat/" | head -30)

for branch in $feature_branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    merge_branch "$branch_name"
    echo "  ---"
done

# Get all feature/ branches
echo "📋 Processing feature/ branches..."
feature_slash_branches=$(git branch -r | grep "feature/" | head -30)

for branch in $feature_slash_branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    merge_branch "$branch_name"
    echo "  ---"
done

# Push all changes to main branch
echo "📤 Pushing all changes to main branch..."
git push origin main --force

echo "🎉 Comprehensive merge process completed!"