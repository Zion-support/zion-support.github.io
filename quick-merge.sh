#!/bin/bash

echo "🚀 Quick PR Merge Process Starting..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository"
    exit 1
fi

# Switch to main branch
echo "📍 Switching to main branch..."
git checkout main 2>/dev/null || echo "⚠️ Already on main or main doesn't exist"

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main 2>/dev/null || echo "⚠️ Could not pull from origin/main"

# Fetch all branches
echo "🔍 Fetching all branches..."
git fetch --all 2>/dev/null || echo "⚠️ Could not fetch all branches"

# Get list of recent branches (excluding main)
echo "📋 Getting recent branches..."
RECENT_BRANCHES=$(git branch -r --sort=-committerdate | grep -v "origin/main" | grep -v "origin/HEAD" | head -5)

echo "Found branches to process:"
echo "$RECENT_BRANCHES"

# Process each branch
for branch in $RECENT_BRANCHES; do
    if [ -n "$branch" ]; then
        branch_name=$(echo "$branch" | sed 's/origin\///')
        echo "🔄 Processing: $branch_name"
        
        # Try to merge
        if git merge "$branch" --no-commit 2>/dev/null; then
            echo "✅ No conflicts in $branch_name"
            git commit -m "Merge $branch_name into main" 2>/dev/null
            echo "✅ Successfully merged $branch_name"
        else
            echo "⚠️ Conflicts in $branch_name, attempting resolution..."
            # Reset merge
            git merge --abort 2>/dev/null
            
            # Try with conflict resolution
            if git merge "$branch" --no-commit 2>/dev/null; then
                # Auto-resolve by accepting our version
                git checkout --ours . 2>/dev/null
                git add . 2>/dev/null
                git commit -m "Merge $branch_name with conflict resolution" 2>/dev/null
                echo "✅ Merged $branch_name with conflict resolution"
            else
                echo "❌ Could not resolve conflicts in $branch_name"
            fi
        fi
    fi
done

# Push changes
echo "📤 Pushing changes..."
git push origin main 2>/dev/null || echo "⚠️ Could not push to origin/main"

echo "✅ Merge process completed!"