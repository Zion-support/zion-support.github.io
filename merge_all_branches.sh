#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "Starting branch merge process..."

# Get all cursor branches that haven't been merged
UNMERGED_BRANCHES=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | grep -v "origin/cursor/fix-errors-and-merge-to-main-cab2\|origin/cursor/fix-errors-and-merge-to-main-bdd2\|origin/cursor/fix-errors-and-merge-to-main-9385\|origin/cursor/fix-errors-and-merge-to-main-83da" | sed 's/origin\///')

echo "Found $(echo "$UNMERGED_BRANCHES" | wc -l) branches to merge"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Counter for tracking progress
count=0
total=$(echo "$UNMERGED_BRANCHES" | wc -l)

# Merge each branch
for branch in $UNMERGED_BRANCHES; do
    count=$((count + 1))
    echo "[$count/$total] Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge --no-ff --no-edit "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
    else
        echo "❌ Merge conflict in $branch, attempting to resolve..."
        
        # Check if there are actual conflicts or just already up to date
        if git status --porcelain | grep -q "^UU"; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU" | while read status file; do
                echo "  Resolving conflict in $file"
                # Use git checkout to take the incoming version (from the branch)
                git checkout --theirs "$file"
                git add "$file"
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Resolved conflicts and merged $branch"
            else
                echo "❌ Failed to resolve conflicts in $branch, skipping..."
                git merge --abort
            fi
        else
            echo "ℹ️  Branch $branch is already up to date or has no conflicts"
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push the updated main branch
    git push origin main
    echo "📤 Pushed updated main branch"
    echo "---"
done

echo "🎉 Completed merging all branches!"
echo "Final main branch status:"
git log --oneline -3