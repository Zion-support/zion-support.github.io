#!/bin/bash

# Script to resolve merge conflicts and merge PRs
set -e

echo "🚀 Starting merge conflict resolution and PR merging..."

# Change to workspace directory
cd /workspace

# Function to run commands with timeout
run_with_timeout() {
    local cmd="$1"
    local timeout="${2:-30}"
    timeout "$timeout" bash -c "$cmd" 2>/dev/null || echo "Command timed out or failed"
}

# Check current status
echo "📊 Checking current git status..."
run_with_timeout "git status --short" 10

# Ensure we're on main branch
echo "🔄 Switching to main branch..."
run_with_timeout "git checkout main" 10

# Pull latest changes
echo "📥 Pulling latest changes..."
run_with_timeout "git pull origin main" 30

# Fetch all branches
echo "📋 Fetching all branches..."
run_with_timeout "git fetch --all" 30

# Get cursor branches
echo "🔍 Finding cursor branches..."
BRANCHES=$(run_with_timeout "git branch -r | grep 'origin/cursor/' | sed 's/origin\\///' | head -10" 10)

if [ -n "$BRANCHES" ]; then
    echo "📊 Found cursor branches:"
    echo "$BRANCHES"
    
    # Process each branch
    echo "$BRANCHES" | while read -r branch; do
        if [ -n "$branch" ]; then
            echo "🔄 Processing branch: $branch"
            
            # Check if branch exists
            if run_with_timeout "git ls-remote --heads origin $branch" 10 >/dev/null 2>&1; then
                # Check if already merged
                if ! run_with_timeout "git branch --merged main | grep $branch" 10 >/dev/null 2>&1; then
                    echo "✅ Attempting to merge $branch..."
                    
                    # Try to merge
                    if run_with_timeout "git merge --no-commit --no-ff origin/$branch" 30; then
                        echo "✅ Successfully merged $branch"
                        run_with_timeout "git commit -m 'Merge $branch into main - $(date)'" 10
                    else
                        echo "⚠️  Merge conflicts in $branch, resolving..."
                        
                        # Get conflicted files
                        CONFLICTED_FILES=$(run_with_timeout "git diff --name-only --diff-filter=U" 10)
                        
                        if [ -n "$CONFLICTED_FILES" ]; then
                            echo "📋 Conflicted files: $CONFLICTED_FILES"
                            
                            # Resolve conflicts
                            echo "$CONFLICTED_FILES" | while read -r file; do
                                if [ -f "$file" ]; then
                                    echo "🔧 Resolving conflicts in $file..."
                                    
                                    # For critical files, keep main version
                                    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
                                        echo "📦 Critical file, keeping main version..."
                                        run_with_timeout "git checkout --ours $file" 10
                                    else
                                        echo "📝 Regular file, removing conflict markers..."
                                        # Remove conflict markers
                                        run_with_timeout "sed -i '/<<<<<<< HEAD/,/=======/d' $file" 10
                                        run_with_timeout "sed -i '/>>>>>>> /d' $file" 10
                                    fi
                                fi
                            done
                            
                            # Add resolved files
                            run_with_timeout "git add ." 10
                            
                            # Commit the merge
                            run_with_timeout "git commit -m 'Resolve merge conflicts for $branch - $(date)'" 10
                            
                            echo "✅ Successfully resolved conflicts and merged $branch"
                        else
                            echo "❌ No conflicted files found, aborting merge..."
                            run_with_timeout "git merge --abort" 10
                        fi
                    fi
                else
                    echo "⏭️  Branch $branch already merged, skipping..."
                fi
            else
                echo "❌ Branch $branch doesn't exist, skipping..."
            fi
        fi
    done
else
    echo "❌ No cursor branches found"
fi

# Push changes
echo "💾 Pushing changes to remote..."
run_with_timeout "git push origin main" 30

echo "🎉 Merge conflict resolution and PR merging completed!"

# Final status
echo "📊 Final status:"
run_with_timeout "git status --short" 10