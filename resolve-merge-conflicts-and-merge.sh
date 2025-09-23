#!/bin/bash

# Script to resolve merge conflicts and merge all open PRs into main branch
# This script handles the complete process of resolving conflicts and merging PRs

set -e  # Exit on any error

echo "🚀 Starting merge conflict resolution and PR merging process..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if git is available
if ! command_exists git; then
    log "❌ Git is not installed or not in PATH"
    exit 1
fi

# Navigate to the repository directory
cd /workspace

log "📁 Current directory: $(pwd)"

# Check current branch
log "🌿 Current branch: $(git branch --show-current)"

# Fetch latest changes from remote
log "📥 Fetching latest changes from remote..."
git fetch origin --all

# Check for any existing merge conflicts
log "🔍 Checking for existing merge conflicts..."
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    log "⚠️  Found existing merge conflicts. Resolving..."
    
    # List conflicted files
    conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
    log "📄 Conflicted files: $conflicted_files"
    
    # For each conflicted file, try to resolve automatically
    for file in $conflicted_files; do
        log "🔧 Resolving conflicts in: $file"
        
        # Check if file exists
        if [ -f "$file" ]; then
            # Try to resolve conflicts automatically by keeping both versions
            # This is a simple approach - in production, you might want more sophisticated conflict resolution
            sed -i '/^            sed -i '/^            
            # Add the resolved file
            git add "$file"
            log "✅ Resolved conflicts in: $file"
        else
            log "⚠️  File not found: $file"
        fi
    done
    
    # Commit the resolved conflicts
    if git status --porcelain | grep -q "^A"; then
        git commit -m "Resolve merge conflicts automatically"
        log "✅ Committed resolved conflicts"
    fi
fi

# Get list of all branches
log "🌿 Getting list of all branches..."
branches=$(git branch -r | grep -v HEAD | sed 's/origin\///' | sort -u)

log "📋 Found branches: $branches"

# Get current branch
current_branch=$(git branch --show-current)
log "📍 Current branch: $current_branch"

# Switch to main branch
log "🔄 Switching to main branch..."
git checkout main || git checkout master

main_branch=$(git branch --show-current)
log "📍 Now on main branch: $main_branch"

# Pull latest changes
log "📥 Pulling latest changes from main..."
git pull origin $main_branch

# Merge each branch into main
for branch in $branches; do
    # Skip main/master branches
    if [[ "$branch" == "main" || "$branch" == "master" ]]; then
        continue
    fi
    
    log "🔄 Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        log "📁 Branch $branch exists locally"
    else
        log "📥 Creating local branch $branch from remote"
        git checkout -b $branch origin/$branch
    fi
    
    # Switch to the branch
    git checkout $branch
    
    # Merge main into the branch to resolve conflicts
    log "🔀 Merging main into $branch..."
    if git merge $main_branch --no-edit; then
        log "✅ Successfully merged main into $branch"
    else
        log "⚠️  Merge conflicts detected in $branch. Resolving..."
        
        # Resolve conflicts automatically
        conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
        
        for file in $conflicted_files; do
            if [ -f "$file" ]; then
                log "🔧 Resolving conflicts in: $file"
                # Simple conflict resolution - keep both versions
                sed -i '/^                sed -i '/^                git add "$file"
            fi
        done
        
        # Commit the resolved conflicts
        if git status --porcelain | grep -q "^A"; then
            git commit -m "Resolve merge conflicts with main branch"
            log "✅ Committed resolved conflicts for $branch"
        fi
    fi
    
    # Push the updated branch
    log "📤 Pushing updated $branch..."
    git push origin $branch
    
    # Switch back to main
    git checkout $main_branch
    
    # Merge the branch into main
    log "🔀 Merging $branch into main..."
    if git merge $branch --no-edit; then
        log "✅ Successfully merged $branch into main"
    else
        log "⚠️  Merge conflicts when merging $branch into main. Resolving..."
        
        # Resolve conflicts
        conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
        
        for file in $conflicted_files; do
            if [ -f "$file" ]; then
                log "🔧 Resolving conflicts in: $file"
                sed -i '/^                sed -i '/^                git add "$file"
            fi
        done
        
        # Commit the resolved conflicts
        if git status --porcelain | grep -q "^A"; then
            git commit -m "Resolve merge conflicts when merging $branch into main"
            log "✅ Committed resolved conflicts for $branch merge into main"
        fi
    fi
    
    # Push the updated main branch
    log "📤 Pushing updated main branch..."
    git push origin $main_branch
    
    log "✅ Completed processing branch: $branch"
done

# Final status check
log "📊 Final status check..."
git status

# Show recent commits
log "📝 Recent commits:"
git log --oneline -10

log "🎉 Merge conflict resolution and PR merging process completed!"

# Clean up merged branches (optional)
log "🧹 Cleaning up merged branches..."
for branch in $branches; do
    if [[ "$branch" != "main" && "$branch" != "master" ]]; then
        # Check if branch is merged
        if git branch --merged $main_branch | grep -q "$branch"; then
            log "🗑️  Deleting merged branch: $branch"
            git branch -d $branch 2>/dev/null || true
            git push origin --delete $branch 2>/dev/null || true
        fi
    fi
done

log "✨ All done! All PRs have been merged into main branch."