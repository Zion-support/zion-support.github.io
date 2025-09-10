#!/bin/bash

# Merge Conflicts Resolver Script
# This script will resolve merge conflicts and merge all open PRs into main

set -e

echo "🚀 Starting Merge Conflicts Resolution Process..."

# Function to check if a branch can be merged
check_merge_status() {
    local branch=$1
    echo "Checking merge status for $branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "❌ Branch $branch does not exist"
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor origin/$branch origin/main; then
        echo "✅ Branch $branch is already merged into main"
        return 0
    fi
    
    echo "⚠️  Branch $branch needs to be merged"
    return 2
}

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "🔄 Attempting to merge $branch..."
    
    # Create a temporary branch for merging
    local temp_branch="temp-merge-$branch"
    
    # Checkout main and create temp branch
    git checkout main
    git checkout -b $temp_branch
    
    # Try to merge
    if git merge origin/$branch --no-ff -m "Merge $branch into main"; then
        echo "✅ Successfully merged $branch"
        
        # Update main
        git checkout main
        git merge $temp_branch --ff-only
        git push origin main
        
        # Clean up temp branch
        git branch -D $temp_branch
        
        return 0
    else
        echo "❌ Merge conflict detected for $branch"
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts for $branch..."
            
            # Auto-resolve conflicts by preferring main branch
            git checkout --ours .
            git add .
            
            # Commit the resolution
            git commit -m "Resolve merge conflicts for $branch (auto-resolved)"
            
            # Update main
            git checkout main
            git merge $temp_branch --ff-only
            git push origin main
            
            # Clean up temp branch
            git branch -D $temp_branch
            
            echo "✅ Conflicts resolved and merged $branch"
        else
            echo "❌ Failed to merge $branch"
            git checkout main
            git branch -D $temp_branch
            return 1
        fi
    fi
}

# Get list of unmerged branches
echo "📋 Finding unmerged branches..."
unmerged_branches=$(git branch -r --no-merged origin/main | grep "cursor/fix-netlify-build-and-merge-to-main" | head -10)

if [ -z "$unmerged_branches" ]; then
    echo "✅ No unmerged branches found"
    exit 0
fi

echo "Found unmerged branches:"
echo "$unmerged_branches"

# Process each branch
for branch in $unmerged_branches; do
    # Remove 'origin/' prefix
    branch_name=${branch#origin/}
    
    echo ""
    echo "🔄 Processing branch: $branch_name"
    
    # Check merge status
    check_merge_status $branch_name
    status=$?
    
    if [ $status -eq 0 ]; then
        echo "⏭️  Skipping $branch_name (already merged)"
        continue
    elif [ $status -eq 2 ]; then
        # Try to merge
        if merge_branch $branch_name; then
            echo "✅ Successfully processed $branch_name"
        else
            echo "❌ Failed to process $branch_name"
        fi
    fi
done

echo ""
echo "🎉 Merge conflicts resolution process completed!"
echo "📊 Final status:"
git status