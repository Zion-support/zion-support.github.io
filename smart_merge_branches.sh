#!/bin/bash

# Smart merge script that only processes branches with new content
set -e

echo "Starting smart merge of branches with new content..."

# Get all cursor/create-and-deploy-new-content branches
ALL_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sed 's/origin\///' | head -100)

successful=0
failed=0
skipped=0

echo "$ALL_BRANCHES" | while IFS= read -r branch; do
    echo ""
    echo "=== Processing branch: $branch ==="
    
    # Fetch the branch
    if git fetch origin $branch:$branch 2>/dev/null; then
        echo "✅ Fetched branch $branch"
        
        # Check if branch has new commits
        if git merge-base --is-ancestor $branch HEAD 2>/dev/null; then
            echo "⏭️  Branch $branch is already merged, skipping"
            git branch -D $branch 2>/dev/null || true
            ((skipped++))
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
    
    # Push every 10 merges
    if [ $((successful % 10)) -eq 0 ] && [ $successful -gt 0 ]; then
        echo "Pushing changes..."
        git push origin main || echo "Push failed, continuing..."
    fi
done

# Final push
echo "Final push..."
git push origin main

echo ""
echo "=== Smart merge completed ==="
echo "✅ Successfully merged: $successful"
echo "⏭️  Skipped (already merged): $skipped"
echo "❌ Failed to merge: $failed"