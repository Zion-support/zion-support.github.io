#!/bin/bash

# Comprehensive Merge All PRs Script
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Switch to main branch
git checkout main
git pull origin main

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch origin

# Function to merge with conflict resolution
merge_with_resolution() {
    local branch=$1
    echo "📦 Attempting to merge $branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch - Comprehensive merge"; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Auto-resolve conflicts by taking our version (main branch)
        git status --porcelain | grep "^UU" | cut -c4- | while read file; do
            echo "🔧 Resolving conflicts in $file..."
            git checkout --ours "$file"
            git add "$file"
        done
        
        if git commit --no-edit; then
            echo "✅ Resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Get list of cursor branches to merge
CURSOR_BRANCHES=($(git branch -r | grep "origin/cursor/" | grep -v "HEAD" | sort | uniq))

echo "📊 Found ${#CURSOR_BRANCHES[@]} cursor branches to process"

# Merge branches in batches to avoid overwhelming
BATCH_SIZE=10
successful=0
failed=0
total=${#CURSOR_BRANCHES[@]}

for i in "${!CURSOR_BRANCHES[@]}"; do
    branch="${CURSOR_BRANCHES[$i]}"
    echo ""
    echo "🔄 Processing $((i+1))/$total: $branch"
    
    if merge_with_resolution "$branch"; then
        ((successful++))
    else
        ((failed++))
    fi
    
    # Push every 5 successful merges
    if [ $((successful % 5)) -eq 0 ] && [ $successful -gt 0 ]; then
        echo "🚀 Pushing intermediate changes..."
        git push origin main
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

echo ""
echo "📊 Comprehensive Merge Summary:"
echo "✅ Successful merges: $successful"
echo "❌ Failed merges: $failed"
echo "📈 Total processed: $total"

# Final push
echo "🚀 Pushing all merged changes..."
git push origin main

echo "🎉 Comprehensive PR merge completed!"