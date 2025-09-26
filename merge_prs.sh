#!/bin/bash

# Simple PR Merge Script
set -e

echo "🚀 Starting PR Merge Process"
echo "============================="

# Get all cursor branches
branches=$(git branch -r | grep "origin/cursor/" | head -20)

for branch in $branches; do
    branch_name=${branch#origin/}
    echo ""
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "✅ Branch exists locally"
    else
        echo "🔄 Creating local branch from remote"
        git checkout -b $branch_name $branch
    fi
    
    # Switch to the branch
    git checkout $branch_name
    
    # Try to merge main into the branch
    echo "🔄 Attempting to merge main into $branch_name"
    if git merge main --no-edit; then
        echo "✅ Successfully merged main into $branch_name"
    else
        echo "⚠️  Merge conflicts detected, resolving automatically"
        
        # Resolve conflicts by taking the branch version for most files
        git status --porcelain | grep "^UU" | cut -c4- | while read file; do
            echo "🔧 Resolving conflict in: $file"
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
            git add "$file"
        done
        
        # Commit the resolved conflicts
        git commit -m "Resolve merge conflicts with main branch" || echo "No conflicts to commit"
    fi
    
    # Push the updated branch
    echo "📤 Pushing updated branch"
    git push origin $branch_name
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    echo "🔄 Merging $branch_name into main"
    if git merge $branch_name --no-edit; then
        echo "✅ Successfully merged $branch_name into main"
        
        # Push main
        git push origin main
        
        # Delete the remote branch
        echo "🗑️  Deleting remote branch $branch_name"
        git push origin --delete $branch_name
        
        # Delete local branch
        git branch -d $branch_name
        
        echo "✅ Completed processing $branch_name"
    else
        echo "❌ Failed to merge $branch_name into main"
        git merge --abort
    fi
    
    echo "----------------------------------------"
done

echo ""
echo "🎉 PR Merge Process Completed!"
echo "============================="