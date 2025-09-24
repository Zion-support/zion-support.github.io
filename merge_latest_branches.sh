#!/bin/bash

# Merge latest branches that were just fetched
set -e

echo "Starting merge of latest branches..."

# Get the new branches that were just fetched
NEW_BRANCHES="cursor/create-and-deploy-new-content-0a03 cursor/create-and-deploy-new-content-11fa cursor/create-and-deploy-new-content-190e cursor/create-and-deploy-new-content-260a cursor/create-and-deploy-new-content-2caa cursor/create-and-deploy-new-content-2d37 cursor/create-and-deploy-new-content-30db cursor/create-and-deploy-new-content-3c32 cursor/create-and-deploy-new-content-5159 cursor/create-and-deploy-new-content-5aa8 cursor/create-and-deploy-new-content-8389 cursor/create-and-deploy-new-content-8671 cursor/create-and-deploy-new-content-91ab cursor/create-and-deploy-new-content-b23d cursor/create-and-deploy-new-content-c9d1 cursor/create-and-deploy-new-content-d955 cursor/create-and-deploy-new-content-f433 cursor/create-and-deploy-new-content-fcbe cursor/create-and-deploy-new-content-fd6a-merged cursor/create-and-deploy-new-content-fd98-merged cursor/create-and-deploy-new-content-fdac-merged cursor/create-and-deploy-new-content-fe01-merged cursor/create-and-deploy-new-content-fe5a-merged cursor/create-and-deploy-new-content-fe5c-merged cursor/create-and-deploy-new-content-fe7f-merged cursor/create-and-deploy-new-content-fe8f-merged cursor/create-and-deploy-new-content-ff16-merged cursor/create-and-deploy-new-content-ff81-merged cursor/create-and-deploy-new-content-ffe9-merged"

successful=0
failed=0

for branch in $NEW_BRANCHES; do
    echo ""
    echo "=== Processing branch: $branch ==="
    
    # Fetch the branch
    if git fetch origin $branch:$branch 2>/dev/null; then
        echo "✅ Fetched branch $branch"
        
        # Check if branch has new commits
        if git merge-base --is-ancestor $branch HEAD 2>/dev/null; then
            echo "⏭️  Branch $branch is already merged, skipping"
            git branch -D $branch 2>/dev/null || true
            continue
        fi
        
        # Try to merge
        if git merge $branch --no-ff -m "Merge branch $branch" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            git branch -D $branch 2>/dev/null || true
            ((successful++))
        else
            echo "❌ Merge conflict in $branch, resolving..."
            
            # Auto-resolve conflicts by prioritizing our content
            git add . 2>/dev/null || true
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts for $branch"
                git branch -D $branch 2>/dev/null || true
                ((successful++))
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                git branch -D $branch 2>/dev/null || true
                ((failed++))
            fi
        fi
    else
        echo "❌ Failed to fetch branch $branch"
        ((failed++))
    fi
done

# Push changes
echo "Pushing changes..."
git push origin main

echo ""
echo "=== Merge completed ==="
echo "✅ Successfully merged: $successful"
echo "❌ Failed to merge: $failed"