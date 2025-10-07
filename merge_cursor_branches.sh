#!/bin/bash

# Script to merge cursor branches into main
# This script will attempt to merge cursor branches and handle conflicts

set -e

echo "🚀 Starting cursor branch merge process..."

# Get the list of cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | head -50)

# Counter for processed branches
processed=0
merged=0
conflicts=0
already_merged=0

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "📋 Processing branch: $branch"
    
    # Checkout the branch
    if git checkout "$branch" 2>/dev/null; then
        echo "✅ Checked out $branch"
        
        # Try to merge with main
        if git merge main --no-edit 2>/dev/null; then
            echo "✅ Successfully merged $branch with main"
            merged=$((merged + 1))
            
            # Merge into main
            git checkout main
            if git merge "$branch" --no-edit 2>/dev/null; then
                echo "✅ Successfully merged $branch into main"
            else
                echo "⚠️  Could not merge $branch into main (already up to date)"
                already_merged=$((already_merged + 1))
            fi
        else
            echo "❌ Merge conflict in $branch"
            conflicts=$((conflicts + 1))
            
            # Reset the merge
            git merge --abort 2>/dev/null || true
        fi
        
        processed=$((processed + 1))
    else
        echo "❌ Could not checkout $branch"
    fi
    
    echo "---"
}

# Process each branch
for branch in $CURSOR_BRANCHES; do
    merge_branch "$branch"
done

echo "📊 Merge Summary:"
echo "   Processed: $processed"
echo "   Successfully merged: $merged"
echo "   Already up to date: $already_merged"
echo "   Conflicts: $conflicts"

# Push changes to remote
echo "🚀 Pushing changes to remote..."
git push origin main

echo "✅ Merge process completed!"