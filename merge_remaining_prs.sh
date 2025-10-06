#!/bin/bash

# Script to merge remaining open PRs
set -e

echo "Starting comprehensive PR merge process..."

# Update todos
echo "Updating todo status..."

# Function to check if a branch exists and can be merged
check_and_merge_branch() {
    local branch_name=$1
    local pr_number=$2
    
    echo "Checking branch: $branch_name (PR #$pr_number)"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "✅ Found branch $branch_name"
        
        # Try to merge
        if git merge "origin/$branch_name" --no-ff -m "Merge PR #$pr_number: $branch_name"; then
            echo "✅ Successfully merged $branch_name"
            return 0
        else
            echo "❌ Failed to merge $branch_name due to conflicts"
            git merge --abort
            return 1
        fi
    else
        echo "⚠️  Branch $branch_name not found"
        return 1
    fi
}

# List of remaining PRs to check
PR_BRANCHES=(
    "cursor/fix-web-application-console-errors-0bf5:11935"
    "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4:24703"
    "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7:24702"
    "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e:24701"
    "cursor/fix-errors-and-merge-to-main-fcbd:25062"
    "cursor/fix-errors-and-merge-to-main-e6e1:25061"
)

echo "Checking ${#PR_BRANCHES[@]} remaining PRs..."

merged_count=0
conflict_count=0

for pr_info in "${PR_BRANCHES[@]}"; do
    IFS=':' read -r branch_name pr_number <<< "$pr_info"
    echo ""
    echo "Processing PR #$pr_number: $branch_name"
    
    if check_and_merge_branch "$branch_name" "$pr_number"; then
        ((merged_count++))
    else
        ((conflict_count++))
    fi
done

echo ""
echo "Merge Summary:"
echo "✅ Successfully merged: $merged_count PRs"
echo "❌ Conflicts/Not found: $conflict_count PRs"

if [ $merged_count -gt 0 ]; then
    echo ""
    echo "Pushing merged changes to remote..."
    git push origin main
    echo "✅ Changes pushed to remote!"
fi

echo ""
echo "Merge process completed!"