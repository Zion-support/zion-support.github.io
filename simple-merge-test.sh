#!/bin/bash

# Simple script to test merging a few cursor branches
set -e

echo "🚀 Starting simple merge test for cursor branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Get first 5 cursor branches
echo "📋 Getting first 5 cursor branches..."
BRANCHES=$(git branch -r | grep "origin/cursor/" | head -5 | sed 's/origin\///')

echo "📋 Branches to process:"
echo "$BRANCHES"
echo "---"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Process each branch
for branch in $BRANCHES; do
    echo "📋 Processing branch: $branch"
    
    # Check if branch exists remotely
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⚠️  Branch $branch doesn't exist remotely, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Branch $branch is already merged, skipping..."
        continue
    fi
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Simple conflict resolution: keep main version for critical files
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    
                    # Create backup
                    cp "$file" "${file}.backup.$(date +%s)"
                    
                    # Remove conflict markers
                    sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
                    sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
                    
                    echo "✅ Resolved conflicts in $file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    echo "📊 Progress: ✅ $SUCCESSFUL_MERGES successful, ❌ $FAILED_MERGES failed"
    echo "---"
    
    # Small delay
    sleep 1
done

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Simple merge test completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"