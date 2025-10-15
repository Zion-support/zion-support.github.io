#!/bin/bash

# Batch merge script for open PRs
# This script will attempt to merge multiple PRs in sequence

echo "Starting batch merge of open PRs..."

# List of recent PR branches to merge
PR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-8726"
    "cursor/fix-errors-and-merge-to-main-0746"
    "cursor/fix-errors-and-merge-to-main-4a95"
    "cursor/display-app-content-on-the-front-end-47a5"
    "cursor/fix-errors-and-merge-to-main-b724"
    "cursor/fix-errors-and-merge-to-main-7ab1"
    "cursor/fix-errors-and-merge-to-main-117c"
    "cursor/fix-errors-and-merge-to-main-a653"
    "cursor/fix-errors-and-merge-to-main-acb1"
    "cursor/fix-errors-and-merge-to-main-bc06"
)

success_count=0
fail_count=0

for branch in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    echo "=================================="
    
    # Fetch the branch
    echo "Fetching branch $branch..."
    if git fetch origin "$branch"; then
        echo "✅ Successfully fetched $branch"
    else
        echo "❌ Failed to fetch $branch"
        ((fail_count++))
        continue
    fi
    
    # Attempt to merge
    echo "Attempting to merge $branch..."
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch"; then
        echo "✅ Successfully merged $branch"
        ((success_count++))
    else
        echo "⚠️  Merge failed for $branch, attempting conflict resolution..."
        
        # Try to resolve conflicts
        if python3 fix_merge_conflicts.py; then
            echo "✅ Conflicts resolved for $branch"
            if git add . && git commit -m "Merge branch $branch (conflicts resolved)"; then
                echo "✅ Successfully merged $branch with conflicts resolved"
                ((success_count++))
            else
                echo "❌ Failed to commit resolved conflicts for $branch"
                ((fail_count++))
            fi
        else
            echo "❌ Failed to resolve conflicts for $branch"
            ((fail_count++))
        fi
    fi
    
    echo "Waiting 2 seconds before next merge..."
    sleep 2
done

echo ""
echo "=================================="
echo "Batch merge completed!"
echo "✅ Successfully merged: $success_count"
echo "❌ Failed to merge: $fail_count"
echo "📊 Total processed: $((success_count + fail_count))"