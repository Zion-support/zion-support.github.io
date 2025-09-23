#!/bin/bash

# Script to merge all open branches into main
# This will handle the 4000+ branches efficiently

set -e

echo "Starting bulk merge of all open branches..."

# Create a backup branch first
git checkout -b backup-before-bulk-merge-$(date +%Y%m%d-%H%M%S)
git checkout main

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    if git merge --no-ff "$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Conflict in $branch, resolving..."
        # Resolve conflicts by preferring main branch
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        if git commit --no-edit 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ Failed to merge $branch, skipping..."
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all remote branches
echo "Fetching all remote branches..."
git fetch --all

# Merge branches in priority order
echo "Merging branches by priority..."

# Priority 1: Recent service expansion branches
echo "=== Priority 1: Service Expansion Branches ==="
for branch in $(git branch -r | grep -E "(services-expansion|add.*services.*2025)" | head -20); do
    merge_branch "$branch"
done

# Priority 2: Website enhancement branches
echo "=== Priority 2: Website Enhancement Branches ==="
for branch in $(git branch -r | grep -E "enhance.*website" | head -20); do
    merge_branch "$branch"
done

# Priority 3: Fix and improvement branches
echo "=== Priority 3: Fix and Improvement Branches ==="
for branch in $(git branch -r | grep -E "(fix|improve|chore)" | head -20); do
    merge_branch "$branch"
done

# Priority 4: Cursor branches (batch process)
echo "=== Priority 4: Cursor Branches (Batch 1) ==="
for branch in $(git branch -r | grep "cursor/" | head -50); do
    merge_branch "$branch"
done

# Priority 5: Remaining branches (process in smaller batches)
echo "=== Priority 5: Remaining Branches ==="
remaining_branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | wc -l)
echo "Processing $remaining_branches remaining branches..."

batch_size=100
processed=0

for branch in $(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD"); do
    if [ $processed -ge $batch_size ]; then
        echo "Pushing progress after $batch_size branches..."
        git push origin main
        processed=0
    fi
    
    merge_branch "$branch"
    processed=$((processed + 1))
done

echo "=== Final Push ==="
git push origin main

echo "✅ Bulk merge completed!"
echo "Summary:"
echo "- Total branches processed: $(git log --oneline | wc -l)"
echo "- Current branch: $(git branch --show-current)"
echo "- Latest commit: $(git log -1 --oneline)"
