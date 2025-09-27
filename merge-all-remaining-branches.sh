#!/bin/bash

# Comprehensive script to merge all remaining branches
set -e

echo "🚀 Starting comprehensive merge of all remaining branches..."

# Function to merge a branch safely
merge_branch() {
    local branch=$1
    echo "🔄 Processing branch: $branch"
    
    # Check if branch has commits not in main
    local commits=$(git log --oneline "origin/$branch" --not origin/main | wc -l)
    
    if [ $commits -eq 0 ]; then
        echo "⏭️  Branch has no new commits, skipping"
        return 0
    fi
    
    echo "📝 Branch has $commits new commits, attempting merge..."
    
    # Try to merge with strategy to take main version for conflicts
    if git merge "origin/$branch" --no-commit -X ours 2>/dev/null; then
        echo "✅ No conflicts in $branch"
        git commit -m "Merge $branch into main - no conflicts"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving..."
        
        # Check if there are actual conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            # Resolve conflicts by taking main version
            git checkout --ours .
            git add .
            git commit -m "Merge $branch into main - conflicts resolved (took main version)"
            echo "✅ Conflicts resolved for $branch"
            return 0
        else
            echo "❌ Merge failed for $branch - aborting"
            git merge --abort
            return 1
        fi
    fi
}

# Get all branches that might need merging
echo "📋 Getting list of all branches..."

# Get recent branches
recent_branches=($(git branch -r --sort=-committerdate | head -50 | grep -v "origin/main\|origin/HEAD" | sed 's/origin\///'))

echo "Found ${#recent_branches[@]} branches to check:"

successful_merges=0
failed_merges=0
skipped_branches=0

for branch in "${recent_branches[@]}"; do
    echo ""
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
done

echo ""
echo "📊 Final Merge Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"
echo "  📋 Total processed: ${#recent_branches[@]}"

# Push all changes
echo ""
echo "🚀 Pushing all changes to remote..."
git push origin main

echo "🎉 Comprehensive merge process completed!"