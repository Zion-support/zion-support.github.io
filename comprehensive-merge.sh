#!/bin/bash

# Comprehensive merge script for all important branches
# This script will attempt to merge branches with different strategies

echo "Starting comprehensive merge process..."

# Function to safely merge a branch with different strategies
merge_branch_safely() {
    local branch_name="$1"
    local description="$2"
    
    echo "Attempting to merge: $branch_name - $description"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Try different merge strategies
    echo "  Trying fast-forward merge..."
    if git merge "origin/$branch_name" --ff-only 2>/dev/null; then
        echo "✅ Fast-forward merged: $branch_name"
        return 0
    fi
    
    echo "  Fast-forward failed, trying regular merge..."
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        return 0
    fi
    
    echo "  Regular merge failed, trying squash merge..."
    if git merge "origin/$branch_name" --squash --no-edit 2>/dev/null; then
        git commit -m "feat: Squash merge $branch_name - $description"
        echo "✅ Squash merged: $branch_name"
        return 0
    fi
    
    echo "❌ All merge strategies failed for: $branch_name"
    # Clean up any partial merge state
    git merge --abort 2>/dev/null || true
    git reset --hard HEAD 2>/dev/null || true
    return 1
}

# List of branches to merge (expanded list)
branches_to_merge=(
    "chore/improve-homepage:Homepage improvements"
    "chore/homepage-improvements:Homepage improvements v2"
    "chore/site-improvements:Site improvements"
    "chore/content-update:Content updates"
    "chore/merge-open-prs:Merge open PRs"
    "chore/clean-main:Clean main branch"
    "chore/comprehensive-improvements:Comprehensive improvements"
    "clean/improvements:Clean improvements"
    "clean/main:Clean main"
    "content/content-updates:Content updates"
    "cursor/add-new-services:New services additions"
    "cursor/add-comprehensive-services:Comprehensive services"
    "cursor/add-innovative-services:Innovative services"
)

successful_merges=0
failed_merges=0

for branch_info in "${branches_to_merge[@]}"; do
    branch_name="${branch_info%%:*}"
    description="${branch_info##*:}"
    
    if merge_branch_safely "$branch_name" "$description"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    echo "---"
done

echo "Comprehensive Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Final commit if there were any changes
if [ $successful_merges -gt 0 ]; then
    git add .
    if ! git diff --cached --quiet; then
        git commit -m "feat: Comprehensive merge of $successful_merges branches

Successfully merged branches including:
- Homepage and site improvements
- Content updates
- Service additions
- Clean improvements

Total branches processed: $((successful_merges + failed_merges))
Successful: $successful_merges
Failed: $failed_merges"
        
        echo "✅ Committed comprehensive merges"
    fi
fi

echo "Comprehensive merge process completed!"