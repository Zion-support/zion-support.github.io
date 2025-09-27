#!/bin/bash

# Merge PRs in Batches Script
# This script will process PR branches in smaller batches for better control

set -e

echo "🚀 Starting batch PR merge process..."

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Get list of all PR branches
PR_BRANCHES=($(git branch -r | grep -E "origin/pr-" | sed 's/origin\///' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//' | sort -V))

echo "📊 Found ${#PR_BRANCHES[@]} PR branches to process"

# Counter for tracking progress
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0
ALREADY_UPTODATE_COUNT=0

# Process first 20 PRs
BATCH_SIZE=20
echo "🔄 Processing first $BATCH_SIZE PRs..."

for i in "${!PR_BRANCHES[@]}"; do
    if [ $i -ge $BATCH_SIZE ]; then
        echo "⏸️  Completed first batch of $BATCH_SIZE PRs"
        break
    fi
    
    pr_branch="${PR_BRANCHES[$i]}"
    echo ""
    echo "🔄 Processing PR #$((i+1))/$BATCH_SIZE: $pr_branch"
    
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
    
    # Check if already merged (fast-forward check)
    if git merge-base --is-ancestor "origin/$pr_branch" HEAD 2>/dev/null; then
        echo "✅ $pr_branch is already merged (up to date)"
        ((ALREADY_UPTODATE_COUNT++))
        continue
    fi
    
    # Check for conflicts using merge-tree
    echo "🔍 Checking for merge conflicts..."
    merge_tree_output=$(git merge-tree $(git merge-base HEAD "origin/$pr_branch") HEAD "origin/$pr_branch" 2>/dev/null || echo "")
    
    if echo "$merge_tree_output" | grep -q "<<<<<<< HEAD\|=======\|>>>>>>>"; then
        echo "⚠️  Merge conflicts detected in $pr_branch"
        
        # Try to merge with strategy
        echo "🔀 Attempting to merge with conflict resolution..."
        if git merge "origin/$pr_branch" --no-commit --no-ff --strategy=recursive -X ours 2>/dev/null; then
            echo "✅ Successfully merged $pr_branch with 'ours' strategy"
            git commit -m "Merge $pr_branch into main - resolved conflicts with ours strategy" 2>/dev/null || true
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
    
    # Show progress every 5 PRs
    if [ $((i % 5)) -eq 4 ]; then
        echo "📊 Progress: $((i+1))/$BATCH_SIZE processed (Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT, Skipped: $SKIPPED_COUNT, Up-to-date: $ALREADY_UPTODATE_COUNT)"
    fi
done

# Push changes
echo "📤 Pushing changes to origin/main..."
if git push origin main; then
    echo "✅ Successfully pushed merged changes"
else
    echo "⚠️  Failed to push changes"
fi

echo ""
echo "🎉 Batch PR merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   ⚠️  Skipped branches: $SKIPPED_COUNT"
echo "   📋 Already up-to-date: $ALREADY_UPTODATE_COUNT"
echo "   📊 Total processed: $((SUCCESS_COUNT + FAILED_COUNT + SKIPPED_COUNT + ALREADY_UPTODATE_COUNT))"

# Show current status
echo ""
echo "🔍 Current repository status:"
git status --porcelain | head -5
echo ""
echo "📈 Latest commits:"
git log --oneline -5

echo ""
echo "✅ Batch PR merge process completed!"