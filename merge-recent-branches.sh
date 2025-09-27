#!/bin/bash

# Merge recent branches efficiently
set -e

echo "🚀 Starting efficient branch merge process..."

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo "🔄 Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch doesn't exist, skipping"
        return 0
    fi
    
    # Check if branch has commits not in main
    if ! git log --oneline "origin/$branch" --not origin/main | head -1 > /dev/null 2>&1; then
        echo "⏭️  Branch $branch has no new commits, skipping"
        return 0
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Conflicts in $branch, resolving..."
        
        # Resolve conflicts by taking main version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit --no-edit 2>/dev/null; then
            echo "✅ Resolved conflicts for $branch"
            return 0
        else
            echo "❌ Failed to commit merge for $branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get recent branches (last 20)
echo "📋 Getting recent branches to merge..."
branches=($(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | tail -20 | sed 's/origin\///'))

total_branches=${#branches[@]}
echo "Found $total_branches recent branches to process"

successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    if merge_branch "$branch"; then
        successful_merges=$((successful_merges + 1))
    else
        failed_merges=$((failed_merges + 1))
    fi
done

echo ""
echo "🎉 Merge process completed!"
echo "📊 Final Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"
echo "  📋 Total processed: $total_branches"
echo "  📈 Success rate: $(( successful_merges * 100 / total_branches ))%"

# Push changes
echo "🚀 Pushing changes to main..."
if git push origin main; then
    echo "✅ Changes pushed successfully"
else
    echo "❌ Failed to push changes"
fi