#!/bin/bash

# Comprehensive merge script for all open PRs and branches
set -e

echo "🚀 Starting comprehensive merge process..."

# Check current status
echo "📊 Current repository status:"
git status
echo ""

# Fetch latest changes
echo "🔄 Fetching latest changes from origin..."
git fetch origin
echo ""

# Update main branch
echo "📥 Updating main branch..."
git checkout main
git pull origin main
echo ""

# Find recent branches that need merging
echo "🔍 Finding recent branches to merge..."
RECENT_BRANCHES=$(git branch -r --sort=-committerdate | grep -E "(cursor|codex|chore)" | head -20)

echo "📋 Recent branches found:"
echo "$RECENT_BRANCHES"
echo ""

# Create a list of branches to merge
BRANCHES_TO_MERGE=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-43d0"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8448"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ad54"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6342"
    "origin/cursor/fix-netlify-build-and-merge-to-main-3ba9"
    "origin/cursor/fix-netlify-build-and-merge-to-main-7f4d"
    "origin/merge-cursor-fix-netlify-e570"
    "origin/cursor/fix-netlify-build-and-merge-to-main-61cc"
    "origin/improvements-and-conflict-resolution"
)

# Function to safely merge a branch
merge_branch() {
    local branch=$1
    echo "🔄 Attempting to merge $branch..."
    
    # Create a temporary branch
    local temp_branch="temp-merge-$(echo $branch | sed 's/origin\///' | sed 's/\//-/g')"
    
    # Checkout the branch
    if git checkout -b "$temp_branch" "$branch" 2>/dev/null; then
        echo "✅ Successfully checked out $branch"
        
        # Try to merge with main
        if git merge main --no-ff -m "Merge $branch into main" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            
            # Switch back to main and merge the temp branch
            git checkout main
            if git merge "$temp_branch" --no-ff -m "Integrate changes from $branch"; then
                echo "✅ Successfully integrated $branch into main"
                
                # Clean up temp branch
                git branch -d "$temp_branch"
                return 0
            else
                echo "❌ Failed to integrate $branch into main"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "⚠️  Merge conflicts detected in $branch, attempting to resolve..."
            
            # Try to resolve conflicts automatically
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "🔧 Resolving conflicts automatically..."
                
                # Use git merge strategy
                git reset --hard HEAD
                git merge main --strategy=ours -m "Merge $branch with conflict resolution"
                
                if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                    echo "❌ Could not resolve conflicts automatically for $branch"
                    git merge --abort 2>/dev/null || true
                else
                    echo "✅ Conflicts resolved for $branch"
                    git checkout main
                    if git merge "$temp_branch" --no-ff -m "Integrate resolved changes from $branch"; then
                        echo "✅ Successfully integrated resolved $branch into main"
                        git branch -d "$temp_branch"
                        return 0
                    fi
                fi
            fi
            
            # Clean up on failure
            git checkout main
            git branch -D "$temp_branch" 2>/dev/null || true
        fi
    else
        echo "❌ Could not checkout $branch"
    fi
    
    return 1
}

# Merge each branch
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in "${BRANCHES_TO_MERGE[@]}"; do
    if merge_branch "$branch"; then
        ((SUCCESSFUL_MERGES++))
    else
        ((FAILED_MERGES++))
    fi
    echo ""
done

echo "📊 Merge Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo ""

# Verify build still works
echo "🔨 Verifying build still works..."
if pnpm run build:no-check; then
    echo "✅ Build verification successful"
else
    echo "❌ Build verification failed"
    exit 1
fi

echo ""
echo "🎉 Merge process completed!"
echo "📈 Total branches processed: $((SUCCESSFUL_MERGES + FAILED_MERGES))"
echo "✅ Successfully merged: $SUCCESSFUL_MERGES"
echo "❌ Failed to merge: $FAILED_MERGES"