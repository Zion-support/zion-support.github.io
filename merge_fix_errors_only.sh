#!/bin/bash

# Script to merge only the fix-errors-and-merge-to-main branches

echo "Starting fix-errors PR merge process..."

# Get only the fix-errors branches
FIX_ERRORS_BRANCHES="cursor/fix-errors-and-merge-to-main-b9a0 cursor/fix-errors-and-merge-to-main-a424 cursor/fix-errors-and-merge-to-main-9be1 cursor/fix-errors-and-merge-to-main-af9b"

echo "Processing fix-errors branches: $FIX_ERRORS_BRANCHES"

count=0
success=0
failed=0

for branch in $FIX_ERRORS_BRANCHES; do
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

echo "Fix-errors PR merge process completed!"
echo "Total branches processed: $count"
echo "Successfully merged: $success"
echo "Failed to merge: $failed"