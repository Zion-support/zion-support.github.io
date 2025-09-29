#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "🚀 Starting automated PR merge process..."

# List of PR numbers to merge (excluding already merged: 23982, 23981, 23980)
PR_NUMBERS=(23979 23978 23937 23935 23934 23933 23931 23930 23928 23927 23926 23923 23922 23920 23919 23917 23915 23913 23912)

# Function to merge a single PR
merge_pr() {
    local pr_num=$1
    echo "📋 Processing PR #$pr_num..."
    
    # Get PR details to find the branch name
    local pr_data=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num")
    local branch_name=$(echo "$pr_data" | grep '"ref":' | head -1 | sed 's/.*"ref": *"//' | sed 's/".*//')
    
    if [ -z "$branch_name" ]; then
        echo "❌ Could not find branch name for PR #$pr_num"
        return 1
    fi
    
    echo "🌿 Branch: $branch_name"
    
    # Fetch the branch
    if git fetch origin "$branch_name:$branch_name"; then
        echo "✅ Fetched branch $branch_name"
    else
        echo "❌ Failed to fetch branch $branch_name"
        return 1
    fi
    
    # Attempt to merge
    if git merge --no-commit --no-ff "$branch_name"; then
        echo "✅ Merge successful for PR #$pr_num"
        git commit -m "Merge PR $pr_num: Create and deploy new content

- Auto-merged PR $pr_num from $branch_name
- Integrated new content and resolved conflicts"
        echo "🎉 PR #$pr_num merged successfully"
        
        # Clean up local branch
        git branch -d "$branch_name" || true
        return 0
    else
        echo "⚠️  Merge conflicts detected for PR #$pr_num"
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Attempting to resolve conflicts automatically..."
            
            # Reset merge state
            git merge --abort
            
            # Try a different merge strategy
            if git merge --strategy-option=ours --no-commit --no-ff "$branch_name"; then
                git commit -m "Merge PR $pr_num: Create and deploy new content (conflict resolution)

- Auto-merged PR $pr_num from $branch_name
- Resolved conflicts using ours strategy"
                echo "🎉 PR #$pr_num merged successfully after conflict resolution"
                git branch -d "$branch_name" || true
                return 0
            else
                git merge --abort
                echo "❌ Could not resolve conflicts for PR #$pr_num"
                return 1
            fi
        else
            git merge --abort
            echo "❌ Unknown merge issue for PR #$pr_num"
            return 1
        fi
    fi
}

# Track success/failure
successful_merges=0
failed_merges=0

# Process each PR
for pr_num in "${PR_NUMBERS[@]}"; do
    if merge_pr "$pr_num"; then
        ((successful_merges++))
    else
        ((failed_merges++))
        echo "⚠️  Skipping PR #$pr_num due to merge issues"
    fi
    echo "---"
done

echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📝 Total PRs processed: $((successful_merges + failed_merges))"

if [ $failed_merges -eq 0 ]; then
    echo "🎉 All PRs merged successfully!"
    exit 0
else
    echo "⚠️  Some PRs failed to merge. Please review manually."
    exit 1
fi