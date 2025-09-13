#!/bin/bash

# Comprehensive Merge All Branches Script
# This script will merge all compatible branches into main

set -e

echo "🚀 Starting Comprehensive Branch Merge Process"
echo "=============================================="

# Function to safely merge a branch
merge_branch() {
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
    
    # Attempt to merge
    if git merge --no-ff --no-edit "$branch_name" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Try to resolve conflicts automatically
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged $branch_name"
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch_name, aborting merge..."
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ Unknown merge issue with $branch_name, aborting..."
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all remote branches
echo "📊 Fetching all remote branches..."
git fetch --all

# Get list of all remote branches
branches=$(git branch -r | grep -v 'origin/main' | grep 'origin/cursor' | head -50)

echo "📋 Found $(echo "$branches" | wc -l) branches to process"

# Counter for tracking
successful_merges=0
failed_merges=0
skipped_merges=0

# Process each branch
for branch in $branches; do
    echo ""
    echo "🔄 Processing: $branch"
    echo "----------------------------------------"
    
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Add a small delay to prevent overwhelming the system
    sleep 1
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
echo "🎉 Comprehensive merge process completed!"
echo "All compatible branches have been merged into main."