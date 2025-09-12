#!/bin/bash

# PRIORITY MERGE SCRIPT - Focus on most critical branches first
echo "🎯 PRIORITY MERGE SCRIPT - STARTING"
echo "===================================="

# Critical branches to merge first
PRIORITY_BRANCHES=(
    "comprehensive-merge-1757155808478"
    "lint-fixes-final"
    "fix-syntax-errors-and-merge"
    "automation-improvements-final"
    "cursor/automate-test-improve-and-merge-code-2197"
    "cursor/fix-syntax-push-and-merge-to-main-7224"
    "cursor/fix-syntax-push-and-merge-to-main-c0ad"
    "cursor/fix-syntax-push-and-merge-to-main-80b5"
    "cursor/fix-lint-push-and-merge-to-main-2c83"
    "cursor/fix-syntax-push-and-merge-to-main-3c0a"
)

# Function to safely execute git commands
safe_git() {
    timeout 60 git "$@" 2>/dev/null
    return $?
}

# Ensure we're on main
echo "🔄 Switching to main branch..."
safe_git checkout main
if [ $? -ne 0 ]; then
    echo "❌ Failed to switch to main"
    exit 1
fi

# Pull latest
echo "📥 Pulling latest changes..."
safe_git pull origin main

SUCCESS_COUNT=0
CONFLICT_COUNT=0

# Process each priority branch
for branch in "${PRIORITY_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing priority branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Create and checkout branch
    if safe_git checkout -b "$branch" "origin/$branch"; then
        echo "✅ Checked out: $branch"
        
        # Try to merge with main
        if safe_git merge main --no-edit; then
            echo "✅ Successfully merged: $branch"
            ((SUCCESS_COUNT++))
            
            # Push the merged branch
            safe_git push origin "$branch"
            
        else
            echo "⚠️  Merge conflict in: $branch"
            ((CONFLICT_COUNT++))
            
            # Try automatic conflict resolution
            echo "🔧 Attempting conflict resolution..."
            safe_git merge --abort
            
            # Try with strategy
            if safe_git merge main -X theirs --no-edit; then
                echo "✅ Auto-resolved conflicts: $branch"
                ((SUCCESS_COUNT++))
                safe_git push origin "$branch"
            else
                echo "❌ Manual resolution needed for: $branch"
                safe_git merge --abort
            fi
        fi
        
        # Return to main
        safe_git checkout main
        
        # Clean up
        safe_git branch -D "$branch" 2>/dev/null || true
        
    else
        echo "❌ Failed to checkout: $branch"
    fi
done

echo ""
echo "🎉 PRIORITY MERGE COMPLETED!"
echo "============================"
echo "Successfully merged: $SUCCESS_COUNT"
echo "Conflicts encountered: $CONFLICT_COUNT"
echo ""
echo "✅ Priority branches processed!"
echo "🚀 Ready for comprehensive merge!"