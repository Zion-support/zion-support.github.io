#!/bin/bash

# Merge Specific PRs Script
# This script will merge PRs that actually have commits to merge

set -e

echo "🚀 Starting targeted PR merge process..."

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Get list of PR branches
PR_BRANCHES=($(git branch -r | grep -E "origin/pr-" | sed 's/origin\///' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//' | sort -V))

echo "📊 Found ${#PR_BRANCHES[@]} PR branches to analyze"

# Counter for tracking progress
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0
ALREADY_UPTODATE_COUNT=0

# First, identify PRs that actually need merging
echo "🔍 Identifying PRs that need merging..."
PRS_TO_MERGE=()

for pr_branch in "${PR_BRANCHES[@]}"; do
    # Fetch the branch
    if ! git fetch origin "$pr_branch" 2>/dev/null; then
        echo "⚠️  Failed to fetch $pr_branch, skipping..."
        continue
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$pr_branch"; then
        echo "⚠️  Branch $pr_branch does not exist, skipping..."
        continue
    fi
    
    # Check if already merged (fast-forward check)
    if git merge-base --is-ancestor "origin/$pr_branch" HEAD 2>/dev/null; then
        echo "✅ $pr_branch is already merged (up to date)"
        ((ALREADY_UPTODATE_COUNT++))
        continue
    fi
    
    # Check if there are commits to merge
    merge_base=$(git merge-base HEAD "origin/$pr_branch" 2>/dev/null)
    current_head=$(git rev-parse HEAD)
    
    if [ "$merge_base" != "$current_head" ]; then
        echo "🔄 $pr_branch has commits to merge"
        PRS_TO_MERGE+=("$pr_branch")
    else
        echo "✅ $pr_branch is already merged"
        ((ALREADY_UPTODATE_COUNT++))
    fi
done

echo ""
echo "📋 Found ${#PRS_TO_MERGE[@]} PRs that need merging"

if [ ${#PRS_TO_MERGE[@]} -eq 0 ]; then
    echo "✅ All PRs are already merged!"
    exit 0
fi

# Process PRs that need merging
for i in "${!PRS_TO_MERGE[@]}"; do
    pr_branch="${PRS_TO_MERGE[$i]}"
    echo ""
    echo "🔄 Processing PR #$((i+1))/${#PRS_TO_MERGE[@]}: $pr_branch"
    
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
    
    # Push changes every 5 merges
    if [ $((i % 5)) -eq 4 ]; then
        echo "📤 Pushing changes to origin/main..."
        if git push origin main; then
            echo "✅ Successfully pushed merged changes"
        else
            echo "⚠️  Failed to push changes, but continuing..."
        fi
    fi
done

# Final push
echo "📤 Final push to origin/main..."
if git push origin main; then
    echo "✅ Successfully pushed all merged changes"
else
    echo "⚠️  Failed to push final changes"
fi

echo ""
echo "🎉 Targeted PR merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   ⚠️  Skipped branches: $SKIPPED_COUNT"
echo "   📋 Already up-to-date: $ALREADY_UPTODATE_COUNT"
echo "   📊 Total processed: $((SUCCESS_COUNT + FAILED_COUNT + SKIPPED_COUNT + ALREADY_UPTODATE_COUNT))"

# Show final status
echo ""
echo "🔍 Final repository status:"
git status --porcelain | wc -l | xargs echo "Uncommitted changes:"
echo ""
echo "📈 Latest commits:"
git log --oneline -10

echo ""
echo "✅ All PRs have been processed!"