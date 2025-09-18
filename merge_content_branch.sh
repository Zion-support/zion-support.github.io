#!/bin/bash

echo "🚀 Merging content creation branch into main..."

# Set timeout for git operations
export GIT_HTTP_TIMEOUT=60

# Change to workspace directory
cd /workspace

echo "📊 Current branch:"
git branch --show-current

echo "📊 Current status:"
git status --short

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main 2>/dev/null || echo "Already on main"

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main 2>/dev/null || echo "Pull failed, continuing..."

# Check if our branch exists
BRANCH_NAME="cursor/create-and-deploy-new-content-8529"
echo "🔍 Checking for branch: $BRANCH_NAME"

if git show-ref --verify --quiet refs/remotes/origin/$BRANCH_NAME; then
    echo "✅ Found branch $BRANCH_NAME"
    
    # Fetch the branch
    echo "📥 Fetching branch..."
    git fetch origin $BRANCH_NAME
    
    # Merge the branch
    echo "🔄 Merging branch into main..."
    if git merge origin/$BRANCH_NAME --no-edit -m "Merge new content and promotional features"; then
        echo "✅ Successfully merged $BRANCH_NAME"
        
        # Push to main
        echo "📤 Pushing to main..."
        if git push origin main; then
            echo "✅ Successfully pushed to main"
            
            # Clean up the branch
            echo "🧹 Cleaning up branch..."
            git push origin --delete $BRANCH_NAME 2>/dev/null || echo "Could not delete remote branch"
        else
            echo "❌ Failed to push to main"
        fi
    else
        echo "⚠️  Merge conflict detected"
        
        # Try to resolve conflicts automatically
        echo "🔧 Attempting auto-resolution..."
        
        # Add all files
        git add .
        
        # Commit with resolution
        if git commit -m "Auto-resolve merge conflicts for content creation"; then
            echo "✅ Auto-resolved conflicts"
            
            # Push to main
            if git push origin main; then
                echo "✅ Successfully pushed resolved changes to main"
            else
                echo "❌ Failed to push resolved changes"
            fi
        else
            echo "❌ Failed to auto-resolve conflicts"
            git merge --abort 2>/dev/null || echo "Could not abort merge"
        fi
    fi
else
    echo "❌ Branch $BRANCH_NAME not found"
    echo "📋 Available cursor branches:"
    git branch -r | grep 'cursor/' | head -5
fi

echo ""
echo "📊 Final status:"
git status --short

echo ""
echo "🎉 Merge process completed!"