#!/bin/bash

# Comprehensive PR Merge Script
# This script will systematically merge all open PRs and resolve conflicts

set -e

echo "🚀 Starting comprehensive PR merge process..."

# Update main branch first
echo "📥 Updating main branch..."
git checkout main
git pull origin main

# Function to safely merge a branch
merge_branch() {
    local branch_name=$1
    echo "🔄 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "❌ Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Create local tracking branch
    git checkout -b $branch_name origin/$branch_name 2>/dev/null || git checkout $branch_name
    
    # Try to merge with main
    if git merge main --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git checkout main
        git merge $branch_name --no-ff -m "Merge $branch_name: resolved conflicts and merged"
        git push origin main
        git branch -D $branch_name
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Use our strategy to resolve conflicts
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit -m "Resolve merge conflicts in $branch_name" 2>/dev/null; then
                echo "✅ Conflicts resolved for $branch_name"
                git checkout main
                git merge $branch_name --no-ff -m "Merge $branch_name: auto-resolved conflicts"
                git push origin main
                git branch -D $branch_name
                return 0
            else
                echo "❌ Could not resolve conflicts in $branch_name"
                git merge --abort 2>/dev/null || true
                git checkout main
                git branch -D $branch_name 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ No conflicts detected but merge failed for $branch_name"
            git merge --abort 2>/dev/null || true
            git checkout main
            git branch -D $branch_name 2>/dev/null || true
            return 1
        fi
    fi
}

# Get the most recent branches (last 50)
echo "📋 Getting recent branches..."
RECENT_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sort -V | tail -50 | sed 's/origin\///')

# Also include merge branches
MERGE_BRANCHES=$(git branch -r | grep "merge-cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

# Combine and process
ALL_BRANCHES="$RECENT_BRANCHES $MERGE_BRANCHES"

echo "🎯 Processing branches..."
SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in $ALL_BRANCHES; do
    if merge_branch "$branch"; then
        ((SUCCESS_COUNT++))
    else
        ((FAILED_COUNT++))
    fi
    echo "📊 Progress: Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT"
done

echo "🏁 Merge process completed!"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"

# Final verification
echo "🔍 Final verification..."
git checkout main
git pull origin main
npm run build
npm run lint

echo "🎉 All done! Main branch is up to date and builds successfully."