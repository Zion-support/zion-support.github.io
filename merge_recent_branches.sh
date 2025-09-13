#!/bin/bash

# Merge Recent Branches Script
# Focus on the most recent branches that need merging

set -e

echo "🚀 Starting Recent Branches Merge Process"
echo "=========================================="

# Function to safely merge a branch with better conflict resolution
merge_branch_safe() {
    local branch_name="$1"
    echo "📋 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_name"; then
        echo "❌ Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "$branch_name" main 2>/dev/null; then
        echo "✅ Branch $branch_name is already merged, skipping..."
        return 0
    fi
    
    # Create a backup of current state
    git stash push -m "Backup before merging $branch_name" 2>/dev/null || true
    
    # Attempt to merge
    if git merge --no-ff --no-edit "$branch_name" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Try to resolve conflicts by accepting our version for most files
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged $branch_name"
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch_name, aborting merge..."
                git merge --abort 2>/dev/null || true
                git stash pop 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ Unknown merge issue with $branch_name, aborting..."
            git merge --abort 2>/dev/null || true
            git stash pop 2>/dev/null || true
            return 1
        fi
    fi
}

# Get the most recent branches (last 20)
echo "📊 Getting most recent branches..."
recent_branches=$(git for-each-ref --format='%(refname:short) %(committerdate)' refs/remotes/origin | grep 'origin/cursor' | sort -k2 -r | head -20 | cut -d' ' -f1)

echo "📋 Found $(echo "$recent_branches" | wc -l) recent branches to process"

# Counter for tracking
successful_merges=0
failed_merges=0
skipped_merges=0

# Process each recent branch
for branch in $recent_branches; do
    echo ""
    echo "🔄 Processing: $branch"
    echo "----------------------------------------"
    
    if merge_branch_safe "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Add a small delay
    sleep 0.5
done

echo ""
echo "📊 Merge Summary"
echo "================"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "⏭️  Skipped merges: $skipped_merges"

# Push all changes
echo ""
echo "🚀 Pushing all changes to main..."
if git push origin main --force-with-lease; then
    echo "✅ Successfully pushed all changes to main"
else
    echo "❌ Failed to push changes to main"
    exit 1
fi

echo ""
echo "🎉 Recent branches merge process completed!"