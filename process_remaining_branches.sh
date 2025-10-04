#!/bin/bash

# Process remaining cursor branches
set -e

echo "🔄 Processing remaining cursor branches..."

# Get list of remaining cursor branches
BRANCHES=($(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's|origin/||' | head -20))

echo "📊 Found ${#BRANCHES[@]} branches to process"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in "${BRANCHES[@]}"; do
    echo "🔄 Processing: $branch"
    
    # Try to delete the remote branch (this will fail if it's already merged or protected)
    if git push origin --delete "$branch" 2>/dev/null; then
        echo "✅ Deleted remote branch: $branch"
        ((SUCCESS_COUNT++))
    else
        echo "⚠️ Could not delete $branch (may already be merged or protected)"
        ((FAILED_COUNT++))
    fi
done

echo "📈 Branch processing completed!"
echo "   ✅ Successfully processed: $SUCCESS_COUNT branches"
echo "   ❌ Failed to process: $FAILED_COUNT branches"

# Clean up any remaining local branches
echo "🧹 Cleaning up local branches..."
git branch -D $(git branch | grep "cursor/fix-errors-and-merge-to-main" | head -20) 2>/dev/null || true

echo "🎉 All remaining branches processed!"