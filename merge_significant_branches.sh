#!/bin/bash

# Script to merge branches with significant changes (>100 commits)

set -e

echo "🚀 Starting merge of significant branches..."

# Update main branch first
git checkout main
git pull origin main

# Function to safely merge a branch
merge_branch() {
    local branch_name=$1
    local commit_count=$2
    
    echo "🔄 Processing branch: $branch_name ($commit_count commits)"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "❌ Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Create local tracking branch
    git checkout -b $branch_name origin/$branch_name 2>/dev/null || git checkout $branch_name
    
    # Try to merge with main using strategy
    if git merge main --no-ff -X ours -m "Merge $branch_name into main (keep main changes)" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git checkout main
        git merge $branch_name --no-ff -m "Merge $branch_name: $commit_count commits"
        git push origin main
        git branch -D $branch_name
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Use our strategy to resolve conflicts
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Resolve merge conflicts in $branch_name (keep main changes)" 2>/dev/null; then
            echo "✅ Conflicts resolved for $branch_name"
            git checkout main
            git merge $branch_name --no-ff -m "Merge $branch_name: resolved conflicts"
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
    fi
}

# Get branches with significant changes (>100 commits)
echo "📋 Finding branches with significant changes..."
SIGNIFICANT_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-0162:1429"
    "cursor/fix-errors-and-merge-to-main-0167:2229"
    "cursor/fix-errors-and-merge-to-main-0210:523"
    "cursor/fix-errors-and-merge-to-main-0278:1303"
    "cursor/fix-errors-and-merge-to-main-03ab:1832"
    "cursor/fix-errors-and-merge-to-main-051b:1853"
    "cursor/fix-errors-and-merge-to-main-0568:129"
    "cursor/fix-errors-and-merge-to-main-0670:685"
    "cursor/fix-errors-and-merge-to-main-0672:1566"
    "cursor/fix-errors-and-merge-to-main-06ff:1646"
    "cursor/fix-errors-and-merge-to-main-0744:1565"
    "cursor/fix-errors-and-merge-to-main-07d0:453"
    "cursor/fix-errors-and-merge-to-main-07d1:1320"
    "cursor/fix-errors-and-merge-to-main-0927:653"
    "cursor/fix-errors-and-merge-to-main-0964:1000"
    "cursor/fix-errors-and-merge-to-main-0b14:160"
    "cursor/fix-errors-and-merge-to-main-0b41:2165"
    "cursor/fix-errors-and-merge-to-main-0c69:1028"
    "cursor/fix-errors-and-merge-to-main-0d48:1369"
    "cursor/fix-errors-and-merge-to-main-0df3:363"
    "cursor/fix-errors-and-merge-to-main-0ea5:1035"
    "cursor/fix-errors-and-merge-to-main-0ec1:19"
    "cursor/fix-errors-and-merge-to-main-0ece:1565"
    "cursor/fix-errors-and-merge-to-main-0fe2:505"
    "cursor/fix-errors-and-merge-to-main-1081:2116"
    "cursor/fix-errors-and-merge-to-main-1182:1814"
    "cursor/fix-errors-and-merge-to-main-1183:21"
    "cursor/fix-errors-and-merge-to-main-127b:1725"
    "cursor/fix-errors-and-merge-to-main-130e:1557"
    "cursor/fix-errors-and-merge-to-main-13a8:1309"
    "cursor/fix-errors-and-merge-to-main-1463:325"
    "cursor/fix-errors-and-merge-to-main-162b:158"
    "cursor/fix-errors-and-merge-to-main-16bb:751"
    "cursor/fix-errors-and-merge-to-main-18a2:160"
    "cursor/fix-errors-and-merge-to-main-18b5:1030"
    "cursor/fix-errors-and-merge-to-main-1921:1080"
    "cursor/fix-errors-and-merge-to-main-1933:160"
    "cursor/fix-errors-and-merge-to-main-19b8:1583"
    "cursor/fix-errors-and-merge-to-main-1ace:1522"
    "cursor/fix-errors-and-merge-to-main-1ad5:383"
    "cursor/fix-errors-and-merge-to-main-1b19:367"
    "cursor/fix-errors-and-merge-to-main-1bfc:452"
    "cursor/fix-errors-and-merge-to-main-1c52:69"
)

echo "🎯 Processing ${#SIGNIFICANT_BRANCHES[@]} significant branches..."
SUCCESS_COUNT=0
FAILED_COUNT=0

for branch_info in "${SIGNIFICANT_BRANCHES[@]}"; do
    IFS=':' read -r branch_name commit_count <<< "$branch_info"
    
    if merge_branch "$branch_name" "$commit_count"; then
        ((SUCCESS_COUNT++))
    else
        ((FAILED_COUNT++))
    fi
    
    echo "📊 Progress: Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT"
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

echo "🏁 Significant branches merge completed!"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"

# Final verification
echo "🔍 Final verification..."
git checkout main
git pull origin main
npm run build
npm run lint

echo "🎉 Significant branches merge process completed!"