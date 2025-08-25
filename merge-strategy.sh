#!/bin/bash

# Zion App Branch Merge Strategy Script
# This script will systematically merge branches and resolve conflicts

set -e

echo "🚀 Starting Zion App Branch Merge Strategy"
echo "=========================================="

# Function to merge a branch and resolve conflicts
merge_branch() {
    local branch_name=$1
    echo "📦 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git ls-remote --heads origin | grep -q "$branch_name"; then
        echo "❌ Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "origin/$branch_name" --no-commit --no-ff; then
        echo "✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name into main"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name"
        
        # Check which files have conflicts
        git status --porcelain | grep "^UU\|^UD\|^DU" | while read -r line; do
            file=$(echo "$line" | awk '{print $2}')
            echo "🔧 Resolving conflicts in: $file"
        done
        
        # For now, abort and mark for manual resolution
        git merge --abort
        echo "⏸️  Aborted merge of $branch_name - requires manual conflict resolution"
        return 1
    fi
}

# Function to check if a branch can be fast-forwarded
can_ff_merge() {
    local branch_name=$1
    git merge-base --is-ancestor origin/main "origin/$branch_name" 2>/dev/null
}

# Main merge strategy
echo "🔍 Analyzing branches for merge strategy..."

# Get list of branches that haven't been merged
unmerged_branches=$(git branch -r --no-merged origin/main | grep -v "origin/main" | head -20)

echo "📋 Found $(echo "$unmerged_branches" | wc -l) unmerged branches"

# Strategy 1: Try to merge branches that can be fast-forwarded first
echo ""
echo "🔄 Phase 1: Fast-forward merges"
echo "================================"

for branch in $unmerged_branches; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    if can_ff_merge "$branch_name"; then
        echo "🚀 $branch_name can be fast-forwarded"
        if merge_branch "$branch_name"; then
            echo "✅ Successfully merged $branch_name"
        fi
    fi
done

# Strategy 2: Try to merge feature branches with potential conflicts
echo ""
echo "🔧 Phase 2: Feature branch merges (with conflict resolution)"
echo "============================================================"

# Priority branches to merge first
priority_branches=(
    "cursor/enhance-app-with-new-services-and-futuristic-design-8849"
    "cursor/website-audit-and-enhancement-acb8"
    "cursor/expand-services-and-deploy-updates-2885"
)

for branch in "${priority_branches[@]}"; do
    echo "🎯 Processing priority branch: $branch"
    if merge_branch "$branch"; then
        echo "✅ Successfully merged priority branch: $branch"
    else
        echo "⚠️  Priority branch $branch requires manual attention"
    fi
done

echo ""
echo "🏁 Merge strategy completed!"
echo "📝 Check git status for any remaining conflicts"
echo "🔧 Manual conflict resolution may be required for some branches"