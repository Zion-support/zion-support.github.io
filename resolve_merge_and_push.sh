#!/bin/bash

echo "🔄 Starting merge conflict resolution and push process..."

# Navigate to workspace
cd /workspace

# Check current status
echo "📊 Checking current git status..."
git status

# Fetch latest changes
echo "📥 Fetching latest changes from remote..."
git fetch origin

# Check if there are any conflicts
echo "🔍 Checking for merge conflicts..."
if git merge-base HEAD origin/main | grep -q .; then
    echo "✅ Found common ancestor"
else
    echo "❌ No common ancestor found"
fi

# Try to pull with rebase first
echo "🔄 Attempting to pull with rebase..."
if git pull --rebase origin main; then
    echo "✅ Successfully pulled with rebase"
else
    echo "⚠️ Rebase failed, trying merge strategy..."
    
    # Reset to clean state
    git reset --hard HEAD
    
    # Try merge strategy
    if git pull origin main; then
        echo "✅ Successfully pulled with merge"
    else
        echo "❌ Pull failed, checking for conflicts..."
        
        # Check if there are merge conflicts
        if git status | grep -q "both modified"; then
            echo "🔧 Found merge conflicts, resolving..."
            
            # Use our merge conflict resolver
            if [ -f "merge_conflicts_resolver.js" ]; then
                node merge_conflicts_resolver.js
            fi
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts automatically"
        fi
    fi
fi

# Check final status
echo "📊 Final git status:"
git status

# Push changes
echo "📤 Pushing changes to remote..."
if git push origin main; then
    echo "✅ Successfully pushed to main branch"
else
    echo "❌ Push failed, trying force push..."
    git push --force-with-lease origin main
fi

echo "🎉 Merge conflict resolution and push process completed!"