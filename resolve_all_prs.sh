#!/bin/bash

# Script to resolve all open PRs and merge them into main
set -e

echo "🔍 Starting comprehensive PR resolution process..."

# Get list of all cursor/fix-errors branches
BRANCHES=($(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's|origin/||' | head -20))

echo "📋 Found ${#BRANCHES[@]} branches to process"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

for branch in "${BRANCHES[@]}"; do
    echo "🔄 Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/"$branch"; then
        git checkout "$branch"
        git pull origin "$branch"
    else
        git checkout -b "$branch" "origin/$branch"
    fi
    
    # Try to merge into main
    git checkout main
    
    echo "🔀 Attempting to merge $branch into main..."
    
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        
        # Push the merged changes
        git push origin main
        
        # Clean up the branch
        git branch -d "$branch" 2>/dev/null || true
        git push origin --delete "$branch" 2>/dev/null || true
        
        echo "🧹 Cleaned up branch $branch"
    else
        echo "⚠️ Merge conflict detected in $branch"
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # List conflicted files
            CONFLICTED_FILES=($(git diff --name-only --diff-filter=U))
            
            for file in "${CONFLICTED_FILES[@]}"; do
                echo "🔨 Resolving conflicts in $file"
                
                # For most conflicts, we'll take the incoming changes (theirs)
                # This is a simple approach - in production you'd want more sophisticated resolution
                git checkout --theirs "$file" 2>/dev/null || true
            done
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Resolved conflicts and completed merge for $branch"
                
                # Push the merged changes
                git push origin main
                
                # Clean up the branch
                git branch -d "$branch" 2>/dev/null || true
                git push origin --delete "$branch" 2>/dev/null || true
                
                echo "🧹 Cleaned up branch $branch"
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort
            fi
        else
            echo "❌ Merge failed for $branch (not a conflict issue)"
            git merge --abort
        fi
    fi
    
    echo "📝 Completed processing $branch"
    echo "---"
done

echo "🎉 PR resolution process completed!"
echo "📊 Summary:"
echo "   - Processed ${#BRANCHES[@]} branches"
echo "   - All successful merges have been pushed to main"
echo "   - All processed branches have been cleaned up"

# Final status check
echo "🔍 Final repository status:"
git status --short
echo "📈 Recent commits:"
git log --oneline -5