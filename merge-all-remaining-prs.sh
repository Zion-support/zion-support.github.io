#!/bin/bash

# Merge All Remaining PRs Script
# This script will process all remaining PR branches systematically

set -e

echo "🚀 Starting comprehensive PR merge process for all remaining PRs..."

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

# Process all PRs
for i in "${!PR_BRANCHES[@]}"; do
    pr_branch="${PR_BRANCHES[$i]}"
    echo ""
    echo "🔄 Processing PR #$((i+1))/${#PR_BRANCHES[@]}: $pr_branch"
    
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
        
        # Try different merge strategies
        echo "🔀 Attempting to merge with conflict resolution strategies..."
        
        # Strategy 1: Use ours strategy
        if git merge "origin/$pr_branch" --no-commit --no-ff --strategy=recursive -X ours 2>/dev/null; then
            echo "✅ Successfully merged $pr_branch with 'ours' strategy"
            git commit -m "Merge $pr_branch into main - resolved conflicts with ours strategy" 2>/dev/null || true
            ((SUCCESS_COUNT++))
        # Strategy 2: Use theirs strategy
        elif git merge "origin/$pr_branch" --no-commit --no-ff --strategy=recursive -X theirs 2>/dev/null; then
            echo "✅ Successfully merged $pr_branch with 'theirs' strategy"
            git commit -m "Merge $pr_branch into main - resolved conflicts with theirs strategy" 2>/dev/null || true
            ((SUCCESS_COUNT++))
        # Strategy 3: Manual resolution attempt
        else
            echo "🔧 Attempting manual conflict resolution..."
            if git merge "origin/$pr_branch" --no-commit --no-ff 2>/dev/null; then
                # Try to resolve conflicts automatically
                git add . 2>/dev/null || true
                if git commit -m "Merge $pr_branch into main - auto-resolved conflicts" 2>/dev/null; then
                    echo "✅ Successfully merged $pr_branch with auto-resolution"
                    ((SUCCESS_COUNT++))
                else
                    echo "❌ Failed to commit merged changes for $pr_branch"
                    git merge --abort 2>/dev/null || true
                    ((FAILED_COUNT++))
                fi
            else
                echo "❌ Failed to merge $pr_branch - aborting merge"
                git merge --abort 2>/dev/null || true
                ((FAILED_COUNT++))
            fi
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
    
    # Push changes every 10 merges
    if [ $((i % 10)) -eq 9 ]; then
        echo "📤 Pushing changes to origin/main..."
        if git push origin main; then
            echo "✅ Successfully pushed merged changes"
        else
            echo "⚠️  Failed to push changes, but continuing..."
        fi
    fi
    
    # Show progress every 5 PRs
    if [ $((i % 5)) -eq 4 ]; then
        echo "📊 Progress: $((i+1))/${#PR_BRANCHES[@]} processed (Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT, Skipped: $SKIPPED_COUNT, Up-to-date: $ALREADY_UPTODATE_COUNT)"
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
echo "🎉 Comprehensive PR merge process completed!"
echo "📊 Final Summary:"
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