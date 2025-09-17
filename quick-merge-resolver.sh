#!/bin/bash

echo "🚀 Quick Merge Conflict Resolver"
echo "================================"

# Navigate to workspace
cd /workspace

# Check current status
echo "📊 Current git status:"
git status --short

# Fetch all remote changes
echo "📥 Fetching all remote changes..."
git fetch --all

# Reset to remote main to resolve diverged commits
echo "🔄 Resetting to remote main..."
git reset --hard origin/main

# Get all remote branches (excluding main)
echo "🌿 Getting all remote branches..."
branches=$(git branch -r | grep -v HEAD | grep -v "origin/main" | sed 's/origin\///' | head -20)

echo "Found branches to process:"
echo "$branches"

# Process each branch
for branch in $branches; do
    echo "🔄 Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️ Merge conflict in $branch, resolving..."
        
        # Get conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "Conflicted files: $conflicted_files"
            
            # Auto-resolve by choosing incoming version
            for file in $conflicted_files; do
                echo "🔧 Resolving conflicts in $file..."
                git checkout --theirs "$file"
                git add "$file"
            done
            
            # Complete the merge
            if git commit -m "Resolve merge conflicts in $branch"; then
                echo "✅ Successfully resolved and merged $branch"
            else
                echo "❌ Failed to resolve conflicts in $branch"
                git merge --abort
            fi
        else
            echo "❌ Failed to merge $branch"
            git merge --abort
        fi
    fi
done

# Final status
echo "📊 Final git status:"
git status --short

# Push changes
echo "📤 Pushing changes to remote..."
git push origin main

echo "✅ Merge conflict resolution completed!"