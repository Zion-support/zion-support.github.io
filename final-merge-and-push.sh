#!/bin/bash

# Final Merge and Push Script
# Handles all remaining merges and pushes to main branch

set -e

echo "🚀 Starting final merge and push process..."
echo "⏰ Started at: $(date)"

# Function to log messages
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message"
}

# Check current status
log_message "🔍 Checking current git status..."
git status --porcelain

# Add all changes
log_message "📦 Adding all changes..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    log_message "ℹ️  No changes to commit"
else
    log_message "💾 Committing all changes..."
    git commit -m "Final merge: Resolve all conflicts and merge PRs into main - $(date)"
fi

# Get all unmerged branches
log_message "🔄 Getting all unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged main | head -50 | sed 's/origin\///')

log_message "📊 Found $(echo "$UNMERGED_BRANCHES" | wc -l) unmerged branches"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        log_message "⏭️  Skipping $branch (doesn't exist)"
        return 1
    fi
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        log_message "⏭️  Skipping $branch (already merged)"
        return 1
    fi
    
    # Fetch branch
    git fetch origin "$branch" 2>/dev/null || {
        log_message "❌ Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    }
    
    # Try merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Conflicts in $branch, resolving..."
        
        # Resolve conflicts by keeping newer version
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    log_message "🔧 Resolving conflicts in $file..."
                    # Remove conflict markers and keep newer version
