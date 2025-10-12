#!/bin/bash

# Script to merge all remaining PRs with automatic conflict resolution
set -e

echo "Starting bulk merge of all remaining PRs..."

# Get all PR branch names
echo "Fetching all PR branches..."
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | head -20)

count=0
success_count=0
error_count=0

for branch in $BRANCHES; do
    echo ""
    echo "Processing branch: $branch..."
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit; then
        echo "  ✓ Successfully merged $branch"
        success_count=$((success_count + 1))
    else
        echo "  ⚠️  Merge conflict in $branch, resolving automatically..."
        
        # Resolve conflicts by choosing our version
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        for file in $CONFLICT_FILES; do
            if [ -f "$file" ]; then
                echo "    Resolving conflict in $file..."
                git checkout --ours "$file"
                git add "$file"
            fi
        done
        
        # Commit the resolved merge
        if git commit -m "Auto-resolve conflicts in $branch"; then
            echo "  ✓ Successfully resolved and merged $branch"
            success_count=$((success_count + 1))
        else
            echo "  ✗ Failed to resolve conflicts in $branch"
            git merge --abort 2>/dev/null || true
            error_count=$((error_count + 1))
        fi
    fi
    
    count=$((count + 1))
    
    # Safety limit
    if [ $count -ge 20 ]; then
        echo "  ⚠️  Processed 20 branches, stopping for safety"
        break
    fi
done

echo ""
echo "Summary:"
echo "  Total processed: $count"
echo "  Successful merges: $success_count"
echo "  Errors: $error_count"

# Push all changes
if [ $success_count -gt 0 ]; then
    echo ""
    echo "Pushing all merged changes to main..."
    git push origin main
    echo "✓ All changes pushed to main"
fi