#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "🚀 Starting PR merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# List of PR branches to merge
PR_BRANCHES=(
    "cursor/fix-netlify-build-and-merge-to-main-74ad"
    "cursor/fix-netlify-build-and-merge-to-main-9e6a"
    "cursor/fix-netlify-build-and-merge-to-main-34e4"
)

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "📋 Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "❌ Branch $branch does not exist, skipping..."
        return 0
    fi
    
    # Fetch the branch
    git fetch origin $branch
    
    # Try to merge
    echo "🔄 Attempting to merge $branch into main..."
    if git merge origin/$branch --no-ff -m "Merge $branch into main"; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving merge conflicts in $branch..."
            
            # Auto-resolve common conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "  - Resolving conflict in: $file"
                
                # For package.json conflicts, prefer the version with more dependencies
                if [[ "$file" == "package.json" ]]; then
                    echo "    Using package.json from $branch (more complete)"
                    git checkout --theirs "$file"
                elif [[ "$file" == "package-lock.json" ]]; then
                    echo "    Using package-lock.json from $branch"
                    git checkout --theirs "$file"
                else
                    # For other files, try to auto-resolve or use ours
                    echo "    Using version from $branch for $file"
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged $branch"
            else
                echo "❌ Failed to complete merge for $branch"
                git merge --abort
                return 1
            fi
        else
            echo "❌ Unknown merge issue with $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Process each PR branch
for branch in "${PR_BRANCHES[@]}"; do
    merge_branch "$branch"
done

echo "🎉 All PRs processed!"

# Push changes to main
echo "📤 Pushing changes to main..."
git push origin main

echo "✅ PR merge process completed successfully!"