#!/bin/bash

echo "🔧 Resolving Merge Conflicts and Syncing Repository..."

# Check current status
echo "📊 Current Git Status:"
git status

# Fetch latest changes
echo "📥 Fetching latest changes from origin..."
git fetch origin

# Check for diverged commits
echo "🔍 Checking for diverged commits..."
LOCAL_COMMITS=$(git rev-list --count HEAD..origin/main)
REMOTE_COMMITS=$(git rev-list --count origin/main..HEAD)

echo "Local commits ahead: $REMOTE_COMMITS"
echo "Remote commits ahead: $LOCAL_COMMITS"

if [ $LOCAL_COMMITS -gt 0 ] || [ $REMOTE_COMMITS -gt 0 ]; then
    echo "🔄 Diverged commits detected. Attempting to merge..."
    
    # Try to pull with merge strategy
    if git pull origin main --no-rebase; then
        echo "✅ Successfully merged remote changes"
    else
        echo "⚠️  Merge conflicts detected. Attempting to resolve..."
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "🔧 Resolving merge conflicts..."
            
            # List conflicted files
            echo "📁 Conflicted files:"
            git status --porcelain | grep "^UU"
            
            # Try to resolve common conflicts
            echo "🔄 Attempting to resolve conflicts..."
            
            # If there are still conflicts, abort and try rebase
            if ! git add . && git commit -m "Resolve merge conflicts"; then
                echo "🔄 Aborting merge and trying rebase..."
                git merge --abort
                git pull origin main --rebase
            fi
        fi
    fi
else
    echo "✅ Repository is up to date"
fi

# Final status check
echo "📊 Final Git Status:"
git status

# Check if we're now synchronized
if git status | grep -q "Your branch and 'origin/main' are up to date"; then
    echo "🎉 Repository successfully synchronized!"
else
    echo "⚠️  Repository still has issues that need manual attention"
fi

echo "✅ Merge conflict resolution script completed!"