#!/bin/bash

# Final comprehensive script to merge all remaining branches
set -e

echo "🚀 Final comprehensive merge process starting..."

# All remaining branches
ALL_BRANCHES=(
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

TOTAL=${#ALL_BRANCHES[@]}
PROCESSED=0
SUCCESSFUL=0
FAILED=0

echo "📊 Total branches to process: $TOTAL"

# Function to process a single branch
process_branch() {
    local branch=$1
    echo "🔄 [$((PROCESSED+1))/$TOTAL] Processing: $branch"
    
    # Check if branch exists on remote
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch 2>/dev/null; then
        echo "⚠️  Branch $branch not found on remote, skipping..."
        ((PROCESSED++))
        return 0
    fi
    
    # Checkout the branch
    if ! git checkout "$branch" 2>/dev/null; then
        echo "⚠️  Could not checkout $branch, skipping..."
        ((PROCESSED++))
        return 0
    fi
    
    # Try to merge main into the branch
    echo "🔀 Merging main into $branch..."
    if git merge main --no-edit 2>/dev/null; then
        echo "✅ Clean merge for $branch"
    else
        echo "🔧 Resolving conflicts in $branch..."
        if node fix_merge_conflicts.cjs 2>/dev/null; then
            if git commit -m "Merge main into $branch - resolved conflicts" 2>/dev/null; then
                echo "✅ Conflicts resolved for $branch"
            else
                echo "⚠️  Commit failed for $branch, continuing..."
            fi
        else
            echo "⚠️  Conflict resolution failed for $branch, continuing..."
        fi
    fi
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    echo "🔀 Merging $branch into main..."
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch into main"
        ((SUCCESSFUL++))
    else
        echo "⚠️  Final merge conflict, resolving..."
        if node fix_merge_conflicts.cjs 2>/dev/null; then
            if git commit -m "Merge $branch into main - resolved conflicts" 2>/dev/null; then
                echo "✅ Final conflicts resolved for $branch"
                ((SUCCESSFUL++))
            else
                echo "❌ Final commit failed for $branch"
                ((FAILED++))
            fi
        else
            echo "❌ Final conflict resolution failed for $branch"
            ((FAILED++))
        fi
    fi
    
    ((PROCESSED++))
    echo "🎉 Completed: $branch (Success: $SUCCESSFUL, Failed: $FAILED)"
    
    # Push every 10 branches
    if ((PROCESSED % 10 == 0)); then
        echo "📤 Pushing progress after $PROCESSED branches..."
        git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
    fi
    
    echo "---"
}

# Process all branches
for branch in "${ALL_BRANCHES[@]}"; do
    process_branch "$branch"
done

echo "🎯 All branches processed!"
echo "📊 Final stats:"
echo "   Total processed: $PROCESSED"
echo "   Successful merges: $SUCCESSFUL"
echo "   Failed merges: $FAILED"

echo "📤 Final push to remote..."
git push origin main

echo "✅ Final merge process completed!"
echo "🚀 Ready to proceed with improvements!"