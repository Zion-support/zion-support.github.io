#!/bin/bash

# Batch Merge Script - Process multiple branches efficiently
set -e

echo "🚀 Starting Batch Merge Process..."
echo "📅 $(date)"

# Function to merge a single branch
merge_single_branch() {
    local branch_name="$1"
    echo "📋 Processing: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Try to merge directly
    if git merge "origin/$branch_name" --no-commit --no-ff 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name into main - $(date +%Y%m%d-%H%M%S)"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, aborting..."
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Get the most recent branches
echo "🔍 Finding most recent branches..."

# Get recent cursor branches
recent_cursor_branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
    grep "cursor/check-fix-push-and-merge-to-main" | \
    head -20)

# Get recent codex branches  
recent_codex_branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
    grep -E "(codex|zzdg1a-codex)" | \
    head -10)

all_branches="$recent_cursor_branches $recent_codex_branches"

echo "📊 Found $(echo "$all_branches" | wc -w) branches to process"

successful=0
failed=0

# Process branches in batches
for branch in $all_branches; do
    branch_name="${branch#origin/}"
    
    if merge_single_branch "$branch_name"; then
        ((successful++))
    else
        ((failed++))
    fi
    
    # Add small delay
    sleep 0.05
done

echo ""
echo "📊 Batch Merge Summary:"
echo "✅ Successful: $successful"
echo "❌ Failed: $failed"
echo "📅 Completed: $(date)"

# Push changes
echo ""
echo "🚀 Pushing changes..."
git push origin main

echo "🎉 Batch merge completed!"