#!/bin/bash

# Script to merge remaining PRs with conflict resolution
set -e

echo "🚀 Starting remaining PR merge process..."

# Remaining PR numbers (excluding already merged: 23982, 23981, 23980, 23979, 23978)
REMAINING_PRS=(23937 23935 23934 23933 23931 23930 23928 23927 23926 23923 23922 23920 23919 23917 23915 23913 23912)

successful_merges=0
failed_merges=0

for pr_num in "${REMAINING_PRS[@]}"; do
    echo "📋 Processing PR #$pr_num..."
    
    # Get PR details
    pr_data=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num")
    branch_name=$(echo "$pr_data" | grep '"ref":' | head -1 | sed 's/.*"ref": *"//' | sed 's/".*//')
    
    if [ -z "$branch_name" ]; then
        echo "❌ Could not find branch name for PR #$pr_num"
        ((failed_merges++))
        continue
    fi
    
    echo "🌿 Branch: $branch_name"
    
    # Fetch the branch
    if ! git fetch origin "$branch_name:$branch_name"; then
        echo "❌ Failed to fetch branch $branch_name"
        ((failed_merges++))
        continue
    fi
    
    # Try to merge with conflict resolution strategy
    if git merge --strategy-option=ours --no-commit --no-ff "$branch_name" 2>/dev/null; then
        echo "✅ Merge successful for PR #$pr_num"
        git commit -m "Merge PR $pr_num: Create and deploy new content (ours strategy)

- Auto-merged PR $pr_num from $branch_name
- Used ours strategy to resolve conflicts"
        echo "🎉 PR #$pr_num merged successfully"
        ((successful_merges++))
    else
        echo "⚠️  Direct merge failed, trying alternative approach..."
        
        # Try cherry-picking the commits instead
        if git cherry-pick --allow-empty "$branch_name" 2>/dev/null; then
            echo "✅ Cherry-pick successful for PR #$pr_num"
            ((successful_merges++))
        else
            echo "❌ All merge strategies failed for PR #$pr_num"
            ((failed_merges++))
            # Reset any failed state
            git cherry-pick --abort 2>/dev/null || true
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Clean up local branch
    git branch -d "$branch_name" 2>/dev/null || true
    echo "---"
done

echo "📊 Final Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📝 Total PRs processed: $((successful_merges + failed_merges))"

if [ $failed_merges -eq 0 ]; then
    echo "🎉 All remaining PRs merged successfully!"
else
    echo "⚠️  $failed_merges PRs failed to merge."
fi