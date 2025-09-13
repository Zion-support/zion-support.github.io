#!/bin/bash

# Efficient PR merge script focusing on recent and important branches
set -e

echo "🚀 Starting efficient PR merge process..."
echo "📊 Processing cursor branches efficiently..."
echo "⏰ Started at: $(date)"
echo "---"

# Create backup
BACKUP_BRANCH="backup-efficient-merge-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Get recent cursor branches (last 100)
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | head -100)

echo "📋 Processing most recent 100 cursor branches..."

for branch in $RECENT_BRANCHES; do
    # Remove 'origin/' prefix
    branch_name=${branch#origin/}
    
    echo "📋 Processing: $branch_name"
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch_name"; then
        echo "⏭️  Already merged: $branch_name"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        echo "✅ Merged: $branch_name"
        git commit -m "Merge $branch_name - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Conflicts in: $branch_name"
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "🔧 Resolving conflicts in: $CONFLICTED_FILES"
            
            # Simple conflict resolution: keep main branch version
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "📝 Resolving $file"
                    # Remove conflict markers and keep main version
