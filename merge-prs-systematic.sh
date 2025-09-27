#!/bin/bash

# Systematic PR Merge Script
# This script will merge PRs one by one with proper conflict resolution

set -e

echo "🚀 Starting systematic PR merge process..."

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Get list of PR branches (trim whitespace)
PR_BRANCHES=($(git branch -r | grep -E "origin/pr-" | sed 's/origin\///' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//' | sort -V))

echo "📊 Found ${#PR_BRANCHES[@]} PR branches to process"

# Counter for tracking progress
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

# Process first 10 PRs to start
for i in "${!PR_BRANCHES[@]}"; do
    if [ $i -ge 10 ]; then
        echo "⏸️  Processing first 10 PRs for now..."
        break
    fi
    
    pr_branch="${PR_BRANCHES[$i]}"
    echo ""
    echo "🔄 Processing PR #$((i+1)): $pr_branch"
    
    # Fetch the branch
    echo "📥 Fetching $pr_branch..."
    if ! git fetch origin "$pr_branch" 2>/dev/null; then
        echo "⚠️  Failed to fetch $pr_branch, skipping..."
        ((SKIPPED_COUNT++))
        continue
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$pr_branch"; then
        echo "⚠️  Branch $pr_branch does not exist, skipping..."
        ((SKIPPED_COUNT++))
        continue
    fi
    
    # Check for conflicts using merge-tree
    echo "🔍 Checking for merge conflicts..."
    merge_tree_output=$(git merge-tree $(git merge-base HEAD "origin/$pr_branch") HEAD "origin/$pr_branch" 2>/dev/null || echo "")
    
    if echo "$merge_tree_output" | grep -q "<<<<<<< HEAD\|=======\|>>>>>>>"; then
        echo "⚠️  Merge conflicts detected in $pr_branch"
        
        # Try to merge with strategy
        echo "🔀 Attempting to merge with conflict resolution strategy..."
        if git merge "origin/$pr_branch" --no-commit --no-ff --strategy=recursive -X ours; then
            echo "✅ Successfully merged $pr_branch with conflict resolution"
            git commit -m "Merge $pr_branch into main - resolved conflicts with ours strategy" || true
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to merge $pr_branch with conflict resolution"
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        fi
    else
        echo "✅ No conflicts detected, merging normally..."
        if git merge "origin/$pr_branch" --no-ff -m "Merge $pr_branch into main"; then
            echo "✅ Successfully merged $pr_branch (no conflicts)"
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to merge $pr_branch"
            ((FAILED_COUNT++))
        fi
    fi
    
    # Push changes
    echo "📤 Pushing changes to origin/main..."
    if git push origin main; then
        echo "✅ Successfully pushed merged changes"
    else
        echo "⚠️  Failed to push changes, but continuing..."
    fi
    
    # Show progress
    echo "📊 Progress: $((i+1))/10 processed (Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT, Skipped: $SKIPPED_COUNT)"
done

echo ""
echo "🎉 First batch of PR merges completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   ⚠️  Skipped branches: $SKIPPED_COUNT"

# Show current status
echo ""
echo "🔍 Current repository status:"
git status --porcelain | head -10
echo ""
echo "📈 Latest commits:"
git log --oneline -5

echo ""
echo "✅ Systematic PR merge process completed!"