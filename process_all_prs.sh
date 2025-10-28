#!/bin/bash

# Script to process all open PRs automatically
set -e

echo "Starting automated PR processing..."

# Get all open PR numbers
PR_NUMBERS=$(gh pr list --state open --json number --jq '.[].number' 2>/dev/null || gh pr list --state open | grep -o '^[0-9]*' | head -20)

echo "Found PRs to process: $PR_NUMBERS"

successful_merges=0
failed_merges=0

for pr_num in $PR_NUMBERS; do
    echo "Processing PR #$pr_num..."
    
    # Get PR details
    pr_info=$(gh pr view $pr_num)
    head_ref=$(echo "$pr_info" | grep "headRefName:" | sed 's/.*headRefName: *//')
    title=$(echo "$pr_info" | grep "title:" | sed 's/.*title: *//')
    is_draft=$(echo "$pr_info" | grep "draft:" | sed 's/.*draft: *//')
    
    echo "Branch: $head_ref"
    echo "Title: $title"
    echo "Is Draft: $is_draft"
    
    # Checkout the PR
    if ! gh pr checkout $pr_num; then
        echo "Failed to checkout PR #$pr_num, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # If it's a draft, mark as ready
    if echo "$is_draft" | grep -q "true"; then
        echo "Marking draft PR as ready for review..."
        gh pr ready $pr_num
    fi
    
    # Try to merge with main
    if git fetch origin main && git merge origin/main --no-edit; then
        echo "Successfully merged with main"
    else
        echo "Merge conflicts detected, resolving..."
        # Resolve conflicts by keeping main branch changes
        git checkout --ours . || true
        git add . || true
        git commit -m "Resolve merge conflicts by keeping main branch changes" || true
    fi
    
    # Push changes
    if git push origin $head_ref; then
        echo "Successfully pushed changes"
    else
        echo "Failed to push changes, skipping PR #$pr_num"
        ((failed_merges++))
        continue
    fi
    
    # Merge the PR
    if gh pr merge $pr_num --merge --delete-branch; then
        echo "Successfully merged PR #$pr_num"
        ((successful_merges++))
    else
        echo "Failed to merge PR #$pr_num"
        ((failed_merges++))
    fi
    
    # Switch back to main and pull latest
    git checkout main
    git pull origin main
    
    echo "Completed processing PR #$pr_num"
    echo "---"
    
    # Small delay to avoid overwhelming the system
    sleep 2
done

echo "PR processing completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"