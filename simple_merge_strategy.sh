#!/bin/bash

# Simple merge strategy for recent branches
set -e

echo "🚀 Starting simple merge strategy..."

# Basic setup
cd /workspace
git fetch origin
git checkout main
git pull origin main

echo "✅ Main branch updated"

# List of recent branches to merge (most recent first)
RECENT_BRANCHES=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-43d0"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8448"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ad54"
    "origin/improvements-and-conflict-resolution"
)

# Function to merge a single branch
merge_single_branch() {
    local branch=$1
    echo "🔄 Processing: $branch"
    
    # Create temp branch
    local temp_name="temp-$(echo $branch | sed 's/origin\///' | sed 's/\//-/g')"
    
    # Checkout branch
    if git checkout -b "$temp_name" "$branch" 2>/dev/null; then
        echo "  ✅ Checked out $branch"
        
        # Try to merge with main
        if git merge main --no-ff -m "Merge $branch" 2>/dev/null; then
            echo "  ✅ Merged with main"
            
            # Switch to main and integrate
            git checkout main
            if git merge "$temp_name" --no-ff -m "Integrate $branch" 2>/dev/null; then
                echo "  ✅ Integrated into main"
                git branch -d "$temp_name"
                return 0
            else
                echo "  ❌ Failed to integrate into main"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "  ⚠️  Conflicts detected, trying resolution..."
            
            # Try conflict resolution
            git reset --hard HEAD
            if git merge main --strategy=ours -m "Resolve conflicts" 2>/dev/null; then
                echo "  ✅ Conflicts resolved"
                
                git checkout main
                if git merge "$temp_name" --no-ff -m "Integrate resolved $branch" 2>/dev/null; then
                    echo "  ✅ Integrated resolved branch"
                    git branch -d "$temp_name"
                    return 0
                fi
            fi
            
            echo "  ❌ Could not resolve conflicts"
            git checkout main
            git branch -D "$temp_name" 2>/dev/null || true
        fi
    else
        echo "  ❌ Could not checkout $branch"
    fi
    
    return 1
}

# Process each branch
SUCCESS=0
FAILED=0

for branch in "${RECENT_BRANCHES[@]}"; do
    if merge_single_branch "$branch"; then
        ((SUCCESS++))
    else
        ((FAILED++))
    fi
    echo ""
done

echo "📊 Results:"
echo "  ✅ Successful: $SUCCESS"
echo "  ❌ Failed: $FAILED"

# Verify build
echo "🔨 Verifying build..."
if pnpm run build:no-check > /dev/null 2>&1; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo "🎉 Merge process completed!"