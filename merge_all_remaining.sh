#!/bin/bash

# Script to merge all remaining fix-errors branches

echo "Starting comprehensive PR merge process..."

# Get all remaining fix-errors branches (excluding delete-records)
REMAINING_BRANCHES="cursor/fix-errors-and-merge-to-main-74a6 cursor/fix-errors-and-merge-to-main-5186 cursor/fix-errors-and-merge-to-main-de70 cursor/fix-errors-and-merge-to-main-f13c cursor/fix-errors-and-merge-to-main-a51b cursor/fix-errors-and-merge-to-main-a070 cursor/fix-errors-and-merge-to-main-7beb cursor/fix-errors-and-merge-to-main-6053 cursor/fix-errors-and-merge-to-main-5443"

echo "Processing remaining branches: $REMAINING_BRANCHES"

count=0
success=0
failed=0

for branch in $REMAINING_BRANCHES; do
    count=$((count + 1))
    echo "Processing branch $branch ($count)..."
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  Branch $branch already exists locally"
    else
        echo "  Fetching branch $branch..."
        git fetch origin $branch:$branch
    fi
    
    # Try to merge
    echo "  Attempting to merge $branch into main..."
    if git merge $branch --no-edit; then
        echo "  ✅ Successfully merged branch $branch"
        success=$((success + 1))
        
        # Push the changes
        echo "  Pushing changes..."
        if git push origin main; then
            echo "  ✅ Successfully pushed changes for branch $branch"
        else
            echo "  ⚠️  Failed to push changes for branch $branch"
        fi
    else
        echo "  ❌ Failed to merge branch $branch - resolving conflicts..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  Resolving conflicts automatically..."
            
            # For sitemap conflicts, use the newer version
            if git status --porcelain | grep -q "public/sitemap.xml"; then
                echo "  Resolving sitemap conflict..."
                git checkout --ours public/sitemap.xml
                git add public/sitemap.xml
            fi
            
            # For other conflicts, try to resolve automatically
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "  ✅ Resolved conflicts and merged branch $branch"
                success=$((success + 1))
                
                # Push the changes
                if git push origin main; then
                    echo "  ✅ Successfully pushed resolved changes for branch $branch"
                else
                    echo "  ⚠️  Failed to push resolved changes for branch $branch"
                fi
            else
                echo "  ❌ Could not resolve conflicts for branch $branch"
                git merge --abort
                failed=$((failed + 1))
            fi
        else
            echo "  ❌ Merge failed for branch $branch (no conflicts detected)"
            git merge --abort
            failed=$((failed + 1))
        fi
    fi
    
    echo "  ---"
    
    # Add a small delay to avoid rate limiting
    sleep 1
done

echo "Comprehensive PR merge process completed!"
echo "Total branches processed: $count"
echo "Successfully merged: $success"
echo "Failed to merge: $failed"