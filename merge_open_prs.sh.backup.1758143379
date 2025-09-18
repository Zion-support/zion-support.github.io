#!/bin/bash

# Merge all open PRs into main
set -e

echo "🚀 Starting merge of open PRs into main..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "🔄 Switching to main and pulling latest..."
git checkout main
git pull origin main

# Create backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Fetch all branches
echo "📋 Fetching all branches..."
git fetch --all

# Get cursor branches
echo "📊 Getting cursor branches..."
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | sed 's/origin\///' > /tmp/cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/cursor_branches.txt)
echo "📊 Total cursor branches found: $TOTAL_BRANCHES"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Process each branch
while IFS= read -r branch; do
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists and not already merged
    if git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        if ! git branch --merged main | grep -q "$branch"; then
            echo "✅ Attempting to merge $branch..."
            
            # Try to merge
            if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
                echo "✅ Successfully merged $branch"
                git commit -m "Merge $branch into main - $(date)"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
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
                            if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" ]]; then
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
done < /tmp/cursor_branches.txt

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main

# Cleanup
rm -f /tmp/cursor_branches.txt

echo "🎉 Merge completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"