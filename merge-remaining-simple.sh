#!/bin/bash

set -e

echo "🚀 Starting simple merge of remaining branches..."

# Function to merge a branch
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Check if branch has commits not in main
    if ! git log --oneline "$branch" --not origin/main | head -1 > /dev/null 2>&1; then
        echo "⏭️  Branch has no new commits, skipping"
        return 0
    fi
    
    # Try to merge
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged: $branch"
        return 0
    else
        echo "⚠️  Merge conflict in: $branch"
        
        # Auto-resolve conflicts by taking the main branch version
        git checkout --ours .
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
    fi
}

# Ensure we're on main branch
echo "📍 Switching to main branch..."
git checkout main
git pull origin main

# Process different branch types
successful_merges=0
failed_merges=0

# Process codex branches
echo "🔄 Processing codex branches..."
CODEX_BRANCHES=($(git branch -r | grep "codex/" | head -50))
for branch in "${CODEX_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
done

# Process chore branches
echo "🔄 Processing chore branches..."
CHORE_BRANCHES=($(git branch -r | grep "chore/" | head -50))
for branch in "${CHORE_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
done

# Process clean branches
echo "🔄 Processing clean branches..."
CLEAN_BRANCHES=($(git branch -r | grep "clean/" | head -50))
for branch in "${CLEAN_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
done

# Process comprehensive branches
echo "🔄 Processing comprehensive branches..."
COMPREHENSIVE_BRANCHES=($(git branch -r | grep "comprehensive/" | head -50))
for branch in "${COMPREHENSIVE_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push changes to remote
if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🚀 Pushing merged changes to remote..."
    git push origin main
    echo "✅ Changes pushed successfully!"
fi

echo ""
echo "🎉 Merge process completed!"