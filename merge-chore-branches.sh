#!/bin/bash

set -e

echo "🚀 Starting comprehensive merge of chore branches..."

# Get all chore branches
CHORE_BRANCHES=($(git branch -r | grep "chore/" | head -100))

echo "📋 Found ${#CHORE_BRANCHES[@]} chore branches to process"

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
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in files: $conflicted_files"
            
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
git pull origin main

# Merge each branch
successful_merges=0
failed_merges=0

for branch in "${CHORE_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    echo "📊 Progress: $((successful_merges + failed_merges))/${#CHORE_BRANCHES[@]} branches processed"
done

echo ""
echo "📊 Chore Merge Summary:"
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
echo "🎉 Chore merge process completed!"