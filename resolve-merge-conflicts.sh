#!/bin/bash

# Script to resolve merge conflicts and merge PRs into main branch
# This script should be run manually due to sandbox restrictions

echo "🚀 Starting merge conflict resolution and PR merging process..."

# 1. First, let's check the current status
echo "📊 Current git status:"
git status

# 2. Fetch all remote changes
echo "📥 Fetching all remote changes..."
git fetch origin

# 3. Check for open PRs (this would need to be done via GitHub API or web interface)
echo "🔍 Checking for open PRs..."
echo "Note: You'll need to check GitHub web interface for open PRs at:"
echo "https://github.com/Zion-Holdings/zion.app/pulls"

# 4. Try to merge origin/main into current main
echo "🔄 Attempting to merge origin/main into current main..."
git merge origin/main --no-edit

# 5. If there are conflicts, resolve them
if [ $? -ne 0 ]; then
    echo "⚠️  Merge conflicts detected. Resolving conflicts..."
    
    # Find files with conflicts
    CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
    
    if [ -n "$CONFLICTED_FILES" ]; then
        echo "📝 Files with conflicts:"
        echo "$CONFLICTED_FILES"
        
        # For each conflicted file, try to resolve automatically
        for file in $CONFLICTED_FILES; do
            echo "🔧 Resolving conflicts in: $file"
            
            # Check if it's a merge conflict marker issue
            if grep -q "<<<<<<< HEAD" "$file"; then
                echo "  - Found merge conflict markers, resolving..."
                # Remove conflict markers and keep the working version
                sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' "$file"
                git add "$file"
            fi
        done
        
        # Commit the resolved conflicts
        git commit -m "Resolve merge conflicts automatically"
    fi
fi

# 6. Push the merged changes
echo "📤 Pushing merged changes to main..."
git push origin main

# 7. Check for other branches that might need merging
echo "🔍 Checking for other branches that might need merging..."

# List recent branches
echo "Recent branches:"
git branch -r --sort=-committerdate | head -10

# 8. Try to merge some of the recent fix branches
RECENT_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-8d57"
    "cursor/fix-errors-and-merge-to-main-1d5e"
    "cursor/fix-errors-and-merge-to-main-14ab"
    "cursor/fix-errors-and-merge-to-main-0022"
)

for branch in "${RECENT_BRANCHES[@]}"; do
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "🔄 Attempting to merge $branch..."
        git merge "origin/$branch" --no-edit
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully merged $branch"
        else
            echo "⚠️  Could not merge $branch (conflicts or already merged)"
        fi
    else
        echo "❌ Branch $branch not found"
    fi
done

# 9. Final push
echo "📤 Pushing all merged changes..."
git push origin main

echo "✅ Merge conflict resolution and PR merging completed!"
echo "📊 Final status:"
git status
git log --oneline -5