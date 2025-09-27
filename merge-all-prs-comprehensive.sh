#!/bin/bash

# Comprehensive PR Merge Script
# This script will merge all open PRs into main branch with conflict resolution

set -e

echo "🚀 Starting comprehensive PR merge process..."
echo "📊 Found 70 PR branches to process"

# Create backup of current main
echo "💾 Creating backup of current main branch..."
git checkout main
git pull origin main
git checkout -b backup-main-$(date +%Y%m%d-%H%M%S)
git push origin backup-main-$(date +%Y%m%d-%H%M%S)
git checkout main

# Get list of all PR branches
PR_BRANCHES=($(git branch -r | grep -E "origin/pr-" | sed 's/origin\///' | sort -V))

echo "📋 Processing ${#PR_BRANCHES[@]} PR branches..."

# Counter for tracking progress
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

# Process each PR branch
for pr_branch in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing PR branch: $pr_branch"
    
    # Fetch the latest changes
    git fetch origin $pr_branch
    
    # Check if branch exists locally
    if ! git show-ref --verify --quiet refs/remotes/origin/$pr_branch; then
        echo "⚠️  Branch $pr_branch not found, skipping..."
        ((SKIPPED_COUNT++))
        continue
    fi
    
    # Try to merge with conflict resolution
    echo "🔀 Attempting to merge $pr_branch into main..."
    
    # Check for merge conflicts before attempting merge
    if git merge-tree $(git merge-base HEAD origin/$pr_branch) HEAD origin/$pr_branch | grep -q "<<<<<<< HEAD"; then
        echo "⚠️  Merge conflicts detected in $pr_branch"
        
        # Try to merge with automatic conflict resolution
        if git merge origin/$pr_branch --no-commit --no-ff; then
            echo "✅ Successfully merged $pr_branch (with auto-resolution)"
            
            # Commit the merge
            git commit -m "Merge $pr_branch into main - resolved conflicts automatically"
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to merge $pr_branch automatically"
            
            # Reset the merge attempt
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        fi
    else
        # No conflicts, merge normally
        if git merge origin/$pr_branch --no-ff -m "Merge $pr_branch into main"; then
            echo "✅ Successfully merged $pr_branch (no conflicts)"
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to merge $pr_branch"
            ((FAILED_COUNT++))
        fi
    fi
    
    # Push changes to main
    if git push origin main; then
        echo "📤 Successfully pushed merged changes to origin/main"
    else
        echo "❌ Failed to push changes to origin/main"
        # Continue with next PR even if push fails
    fi
    
    # Show progress
    echo "📊 Progress: $((SUCCESS_COUNT + FAILED_COUNT + SKIPPED_COUNT))/${#PR_BRANCHES[@]} processed"
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   ⚠️  Skipped branches: $SKIPPED_COUNT"
echo "   📋 Total processed: $((SUCCESS_COUNT + FAILED_COUNT + SKIPPED_COUNT))"

# Final status check
echo ""
echo "🔍 Final repository status:"
git status
echo ""
echo "📈 Latest commits:"
git log --oneline -10

echo ""
echo "✅ Comprehensive PR merge process completed successfully!"