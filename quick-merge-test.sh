#!/bin/bash

# Quick test to merge one branch and see how it works
set -e

echo "🧪 Quick test: merging one branch..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="quick-test-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Test branch - use one that actually has commits ahead
TEST_BRANCH="cursor/analyze-improve-and-deploy-ziontechgroup-app-5d49"

echo "🔄 Testing merge with branch: $TEST_BRANCH"

# Check if branch has changes
COMMITS_AHEAD=$(git log --oneline main..origin/$TEST_BRANCH | wc -l)
FILES_CHANGED=$(git diff --name-only main..origin/$TEST_BRANCH | wc -l)

echo "📊 Branch $TEST_BRANCH:"
echo "   Commits ahead: $COMMITS_AHEAD"
echo "   Files changed: $FILES_CHANGED"

if [ "$COMMITS_AHEAD" -gt 0 ] && [ "$FILES_CHANGED" -gt 0 ]; then
    echo "✅ Branch has meaningful changes, attempting merge..."
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$TEST_BRANCH" 2>/dev/null; then
        echo "✅ Successfully merged $TEST_BRANCH"
        git commit -m "Test merge $TEST_BRANCH into main - $(date)"
        echo "🎉 Merge successful!"
    else
        echo "⚠️  Merge conflicts detected, checking conflicted files..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            echo "🔧 Attempting to resolve conflicts..."
            
            # Simple conflict resolution - keep main version for now
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "📝 Resolving conflicts in $file..."
                    # Create backup
                    cp "$file" "${file}.backup.$(date +%s)"
                    
                    # Remove conflict markers (keep main version)
                    sed -i '/                    
                    echo "✅ Resolved conflicts in $file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $TEST_BRANCH - $(date)"
            
            echo "🎉 Successfully resolved conflicts and merged $TEST_BRANCH"
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
        fi
    fi
else
    echo "⏭️  Branch has no meaningful changes, skipping..."
fi

echo ""
echo "📊 Test completed!"
echo "🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"