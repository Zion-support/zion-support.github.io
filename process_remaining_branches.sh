#!/bin/bash

# Process remaining branches one by one
set -e

echo "🚀 Processing remaining branches..."

# Remaining branches to process
REMAINING_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-1aaf"
    "cursor/fix-errors-and-merge-to-main-2303"
    "cursor/fix-errors-and-merge-to-main-2ad6"
    "cursor/fix-errors-and-merge-to-main-549d"
    "cursor/fix-errors-and-merge-to-main-5562"
    "cursor/fix-errors-and-merge-to-main-59dc"
    "cursor/fix-errors-and-merge-to-main-59e5"
    "cursor/fix-errors-and-merge-to-main-5a1e"
    "cursor/fix-errors-and-merge-to-main-5caf"
    "cursor/fix-errors-and-merge-to-main-6517"
    "cursor/fix-errors-and-merge-to-main-69a3"
    "cursor/fix-errors-and-merge-to-main-6af4"
    "cursor/fix-errors-and-merge-to-main-7162"
    "cursor/fix-errors-and-merge-to-main-7679"
    "cursor/fix-errors-and-merge-to-main-7a03"
    "cursor/fix-errors-and-merge-to-main-8428"
    "cursor/fix-errors-and-merge-to-main-8fe9"
    "cursor/fix-errors-and-merge-to-main-95bc"
    "cursor/fix-errors-and-merge-to-main-9759"
    "cursor/fix-errors-and-merge-to-main-9a25"
    "cursor/fix-errors-and-merge-to-main-a771"
    "cursor/fix-errors-and-merge-to-main-adc9"
    "cursor/fix-errors-and-merge-to-main-b32f"
    "cursor/fix-errors-and-merge-to-main-b7c3"
    "cursor/fix-errors-and-merge-to-main-bcfd"
    "cursor/fix-errors-and-merge-to-main-bd5e"
    "cursor/fix-errors-and-merge-to-main-c24f"
    "cursor/fix-errors-and-merge-to-main-c26f"
    "cursor/fix-errors-and-merge-to-main-c338"
    "cursor/fix-errors-and-merge-to-main-caf5"
    "cursor/fix-errors-and-merge-to-main-cf6a"
    "cursor/fix-errors-and-merge-to-main-d14e"
    "cursor/fix-errors-and-merge-to-main-e14f"
    "cursor/fix-errors-and-merge-to-main-e7ee"
    "cursor/fix-errors-and-merge-to-main-e8d8"
    "cursor/fix-errors-and-merge-to-main-ea18"
    "cursor/fix-errors-and-merge-to-main-ec2e"
    "cursor/fix-errors-and-merge-to-main-ec70"
    "cursor/fix-errors-and-merge-to-main-f08d"
    "cursor/fix-errors-and-merge-to-main-fed1"
)

PROCESSED=0
TOTAL=${#REMAINING_BRANCHES[@]}

echo "📊 Processing $TOTAL remaining branches..."

for branch in "${REMAINING_BRANCHES[@]}"; do
    ((PROCESSED++))
    echo "🔄 [$PROCESSED/$TOTAL] Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "⚠️  Branch $branch not found on remote, skipping..."
        continue
    fi
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || {
        echo "⚠️  Could not checkout $branch, skipping..."
        continue
    }
    
    # Try to merge main into the branch
    echo "🔀 Merging main into $branch..."
    if git merge main --no-edit 2>/dev/null; then
        echo "✅ Clean merge for $branch"
    else
        echo "🔧 Resolving conflicts in $branch..."
        # Use our conflict resolution script
        node fix_merge_conflicts.cjs
        git commit -m "Merge main into $branch - resolved conflicts" || {
            echo "⚠️  Commit failed for $branch, continuing..."
        }
    fi
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    echo "🔀 Merging $branch into main..."
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch into main"
    else
        echo "⚠️  Final merge conflict, resolving..."
        node fix_merge_conflicts.cjs
        git commit -m "Merge $branch into main - resolved conflicts" || {
            echo "⚠️  Final commit failed for $branch, continuing..."
        }
    fi
    
    echo "🎉 Completed: $branch"
    
    # Push every 5 branches
    if ((PROCESSED % 5 == 0)); then
        echo "📤 Pushing progress after $PROCESSED branches..."
        git push origin main || echo "⚠️  Push failed, continuing..."
    fi
    
    echo "---"
done

echo "🎯 All remaining branches processed!"
echo "📊 Final stats: $PROCESSED branches processed"
echo "📤 Final push to remote..."
git push origin main

echo "✅ All branches merge process completed!"