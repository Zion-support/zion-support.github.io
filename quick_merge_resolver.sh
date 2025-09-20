#!/bin/bash

# Quick merge resolver for remaining branches
set -e

echo "🚀 Starting quick merge resolution..."

# Ensure we're on main
git checkout main

# Get recent cursor branches (limit to 50 for efficiency)
echo "📋 Getting recent cursor branches..."
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | head -50 > /tmp/recent_cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/recent_cursor_branches.txt)
echo "📊 Processing $TOTAL_BRANCHES recent cursor branches..."

SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Process each branch
while IFS= read -r branch; do
    echo "🔄 Processing: $branch"
    
    # Check if branch exists and not already merged
    if git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        if ! git branch --merged main | grep -q "$branch"; then
            echo "✅ Attempting to merge $branch..."
            
            # Try to merge with conflict resolution
            if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
                echo "✅ Successfully merged $branch"
                git commit -m "Merge $branch into main - $(date)"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            else
                echo "⚠️  Merge conflicts in $branch, resolving..."
                
                # Auto-resolve conflicts by keeping main version for critical files
                CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
                
                if [ -n "$CONFLICTED_FILES" ]; then
                    for file in $CONFLICTED_FILES; do
                        if [ -f "$file" ]; then
                            # For critical files, keep main version
                            if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" || "$file" == "vite.config.ts" ]]; then
                                echo "📦 Critical file, keeping main version: $file"
                                git checkout --ours "$file"
                            else
                                echo "📝 Resolving conflicts in: $file"
                                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
                            fi
                            git add "$file"
                        fi
                    done
                    
                    # Commit the merge
                    git commit -m "Resolve merge conflicts for $branch - $(date)"
                    echo "✅ Successfully resolved conflicts and merged $branch"
                    SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                else
                    echo "❌ No conflicted files found, aborting merge..."
                    git merge --abort
                    FAILED_MERGES=$((FAILED_MERGES + 1))
                fi
            fi
        else
            echo "⏭️  Branch $branch already merged, skipping..."
        fi
    else
        echo "❌ Branch $branch doesn't exist, skipping..."
    fi
    
    echo "---"
done < /tmp/recent_cursor_branches.txt

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main

# Cleanup
rm -f /tmp/recent_cursor_branches.txt

echo "🎉 Quick merge completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"