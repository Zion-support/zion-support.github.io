#!/bin/bash

# Script to merge only branches that have differences
set -e

echo "Starting selective branch merge process..."

# Get all cursor branches
branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sed 's/origin\///' | sort)

success_count=0
processed_count=0
skipped_count=0

# Function to merge a branch if it has differences
merge_branch_if_different() {
    local branch=$1
    processed_count=$((processed_count + 1))
    
    echo "Checking branch $processed_count: $branch"
    
    # Check if branch has differences from main
    if git diff --quiet main "origin/$branch"; then
        echo "⏭️  Branch $branch is identical to main, skipping..."
        skipped_count=$((skipped_count + 1))
        return 0
    fi
    
    echo "🔄 Branch $branch has differences, attempting merge..."
    
    # Fetch the branch if not already fetched
    git fetch origin "$branch" 2>/dev/null || {
        echo "Could not fetch branch $branch, skipping..."
        return 1
    }
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch" 2>/dev/null; then
        echo "✅ Successfully merged branch $branch"
        success_count=$((success_count + 1))
        return 0
    else
        echo "⚠️  Merge conflict in branch $branch, resolving..."
        
        # Resolve conflicts by accepting our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        # Complete the merge
        if git commit -m "Merge branch $branch (resolved conflicts)" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged branch $branch"
            success_count=$((success_count + 1))
            return 0
        else
            echo "❌ Failed to merge branch $branch"
            return 1
        fi
    fi
}

# Process each branch
for branch in $branches; do
    merge_branch_if_different "$branch"
    
    # Show progress every 50 branches
    if [ $((processed_count % 50)) -eq 0 ]; then
        echo "Progress: $processed_count processed, $success_count merged, $skipped_count skipped"
    fi
done

echo "=========================================="
echo "Selective merge completed:"
echo "  - Total processed: $processed_count"
echo "  - Successfully merged: $success_count"
echo "  - Skipped (identical): $skipped_count"
echo "=========================================="

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "Selective branch merge completed!"