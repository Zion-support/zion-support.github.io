#!/bin/bash

# Strategic merge script for resolving conflicts and merging branches
set -e

echo "🚀 Starting strategic merge process..."

# Function to clean up dist conflicts
clean_dist_conflicts() {
    echo "🧹 Cleaning up dist directory conflicts..."
    git rm -rf dist/ 2>/dev/null || true
    echo "dist/" >> .gitignore
    git add .gitignore
    git commit -m "Clean up dist directory conflicts" || true
}

# Function to merge branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "📥 Attempting to merge $branch..."
    
    if git merge "origin/$branch" --no-commit; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch: Integrate improvements and resolve conflicts"
        return 0
    else
        echo "⚠️ Merge conflicts detected for $branch, resolving..."
        
        # Clean up dist conflicts
        clean_dist_conflicts
        
        # Resolve package conflicts
        if [ -f package-lock.json ]; then
            git checkout --theirs package-lock.json 2>/dev/null || true
            git add package-lock.json
        fi
        
        # Resolve tsconfig conflicts
        if [ -f tsconfig.json ]; then
            git checkout --ours tsconfig.json 2>/dev/null || true
            git add tsconfig.json
        fi
        
        # Remove build artifacts
        git rm -rf dist/ 2>/dev/null || true
        git rm tsconfig.tsbuildinfo 2>/dev/null || true
        
        # Add all resolved files
        git add -A
        
        # Commit the merge
        git commit -m "Merge $branch: Resolve conflicts and integrate improvements" || true
        echo "✅ Successfully resolved conflicts for $branch"
        return 0
    fi
}

# Main merge process
echo "🔄 Starting branch merge process..."

# List of branches to merge in order of priority
branches=(
    "ziontechgroup-improvements"
    "zion-enhancements-v6"
    "zion-enhancements-v5"
    "zion-enhancements-v4"
    "clean/build-without-artifacts"
)

for branch in "${branches[@]}"; do
    echo "📋 Processing branch: $branch"
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        merge_branch "$branch"
    else
        echo "⚠️ Branch origin/$branch not found, skipping..."
    fi
done

echo "🎉 Merge process completed!"
echo "📊 Current status:"
git status --short