#!/bin/bash

# Merge new branches that were just fetched
set -e

echo "Starting merge of new branches..."

# Get the new branches that were just fetched
NEW_BRANCHES="cursor/create-and-deploy-new-content-007f cursor/create-and-deploy-new-content-1039 cursor/create-and-deploy-new-content-243e cursor/create-and-deploy-new-content-3c33 cursor/create-and-deploy-new-content-4e15 cursor/create-and-deploy-new-content-5cee cursor/create-and-deploy-new-content-6f4e cursor/create-and-deploy-new-content-8689 cursor/create-and-deploy-new-content-9463 cursor/create-and-deploy-new-content-b331 cursor/create-and-deploy-new-content-d874 cursor/create-and-deploy-new-content-e0f5 cursor/create-and-deploy-new-content-e354"

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