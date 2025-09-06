#!/bin/bash

# Batch merge script for resolving conflicts and merging branches
set -e

echo "🚀 Starting batch merge of remaining branches..."

# Get the most recent unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep "cursor/" | tail -10)

echo "📋 Processing branches:"
echo "$UNMERGED_BRANCHES"

for branch in $UNMERGED_BRANCHES; do
    echo ""
    echo "🔄 Processing: $branch"
    
    # Go back to main first
    git checkout main
    
    # Try to merge the branch
    if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
        echo "✅ $branch merged successfully without conflicts"
        git commit -m "Merge $branch: no conflicts"
    else
        echo "⚠️  $branch has conflicts, resolving..."
        
        # Resolve conflicts by accepting main branch version
        git status --porcelain | grep "^UU\|^AU\|^UA" | while read status file; do
            echo "🔧 Resolving conflict in $file"
            git checkout --ours "$file" 2>/dev/null || true
        done
        
        # Handle deleted files
        git status --porcelain | grep "^DU" | while read status file; do
            echo "🗑️  Removing deleted file: $file"
            git rm "$file" 2>/dev/null || true
        done
        
        # Add resolved files
        git add .
        
        # Commit the merge
        if git commit -m "Merge $branch: resolved conflicts by accepting main branch changes"; then
            echo "✅ $branch conflicts resolved and merged"
        else
            echo "❌ Failed to commit merge for $branch, aborting..."
            git merge --abort
        fi
    fi
done

echo ""
echo "🎉 Batch merge completed!"
echo "📊 Final status:"
git log --oneline -5