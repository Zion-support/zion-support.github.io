#!/bin/bash

# Simple Merge Script for Resolving Conflicts and Merging PRs
set -e

echo "🚀 Starting Simple Merge Process..."

# Create backup
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH" || echo "⚠️  Could not push backup branch"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file..."
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Remove conflict markers - keep main branch version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "✅ Conflicts resolved in $file"
}

# Function to merge a branch
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch branch
    if ! git fetch origin "$branch"; then
        echo "❌ Failed to fetch branch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)" || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch"
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Add resolved files and commit
            git add .
            git commit -m "Resolve merge conflicts for $branch - $(date)" || true
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, aborting merge"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get recent cursor branches (last 50)
echo "📋 Processing recent cursor branches..."
RECENT_BRANCHES=$(git branch -r | grep "origin/cursor/" | grep -v "backup" | head -50)

for branch in $RECENT_BRANCHES; do
    # Remove 'origin/' prefix
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo ""
    echo "=========================================="
    echo "🔄 Processing branch: $branch_name"
    echo "=========================================="
    
    if merge_branch "$branch_name"; then
        echo "✅ Branch $branch_name processed successfully"
    else
        echo "❌ Branch $branch_name processing failed"
    fi
    
    echo "=========================================="
    
    # Push changes every 10 successful merges
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main || echo "⚠️  Could not push progress"
    fi
    
    sleep 1
done

# Final push
echo "💾 Pushing final changes..."
git push origin main || echo "⚠️  Could not push final changes"

# Summary
echo ""
echo "🎉 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"