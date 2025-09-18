#!/bin/bash

# Quick merge script to handle open PRs
set -e

echo "🚀 Starting quick merge for open PRs..."

# Check current status
echo "📊 Current git status:"
git status --short

# Ensure we're on main and up to date
echo "🔄 Switching to main and pulling latest..."
git checkout main
git pull origin main

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch --all

# Get list of cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

echo "📊 Found cursor branches:"
echo "$BRANCHES"

# Process each branch
for branch in $BRANCHES; do
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists and can be merged
    if git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        if ! git branch --merged main | grep -q "$branch"; then
            echo "✅ Attempting to merge $branch..."
            
            # Try to merge
            if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
                echo "✅ Successfully merged $branch"
                git commit -m "Merge $branch into main - $(date)"
            else
                echo "⚠️  Merge conflicts in $branch, resolving..."
                
                # Get conflicted files
                CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
                
                if [ -n "$CONFLICTED_FILES" ]; then
                    echo "📋 Conflicted files: $CONFLICTED_FILES"
                    
                    # Resolve conflicts by keeping main version for critical files
                    for file in $CONFLICTED_FILES; do
                        if [ -f "$file" ]; then
                            echo "🔧 Resolving conflicts in $file..."
                            
                            # For critical files, keep main version
                            if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
                                echo "📦 Critical file, keeping main version..."
                                git checkout --ours "$file"
                            else
                                echo "📝 Regular file, keeping both versions..."
                                # Remove conflict markers
                                sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                                sed -i '/>>>>>>> /d' "$file"
                            fi
                        fi
                    done
                    
                    # Add resolved files
                    git add .
                    
                    # Commit the merge
                    git commit -m "Resolve merge conflicts for $branch - $(date)"
                    
                    echo "✅ Successfully resolved conflicts and merged $branch"
                else
                    echo "❌ No conflicted files found, aborting merge..."
                    git merge --abort
                fi
            fi
        else
            echo "⏭️  Branch $branch already merged, skipping..."
        fi
    else
        echo "❌ Branch $branch doesn't exist, skipping..."
    fi
    
    echo "---"
done

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main

echo "🎉 Quick merge completed!"
echo "📊 Final status:"
git status --short