#!/bin/bash

# Mass merge script using git's built-in strategies
set -e

echo "🚀 Starting mass merge of cursor branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES branches..."

# Function to merge with automatic conflict resolution
mass_merge() {
    local branch="$1"
    
    echo "🔄 Mass merging $branch..."
    
    # Try merge with automatic conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Mass merge: $branch" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Successfully merged $branch"
        return 0
    fi
    
    # If merge fails, try with strategy
    if git merge -X ours --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Mass merge (ours): $branch" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Successfully merged $branch with ours strategy"
        return 0
    fi
    
    # Try with theirs strategy
    if git merge -X theirs --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Mass merge (theirs): $branch" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Successfully merged $branch with theirs strategy"
        return 0
    fi
    
    # Try with subtree strategy
    if git merge -X subtree --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Mass merge (subtree): $branch" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Successfully merged $branch with subtree strategy"
        return 0
    fi
    
    # If all strategies fail, abort
    git merge --abort 2>/dev/null || true
    FAILED_MERGES=$((FAILED_MERGES + 1))
    echo "❌ Failed to merge $branch"
    return 1
}

# Process branches
echo "🔄 Starting mass merge processing..."
echo "---"

CURRENT=0
for branch in $BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing: $branch"
    
    mass_merge "$branch"
    
    # Progress update every 50 branches
    if [ $((CURRENT % 50)) -eq 0 ]; then
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
        echo "💾 Pushing progress..."
        git push origin main || true
        echo "---"
    fi
done

# Final push
echo "💾 Pushing final results..."
git push origin main || true

# Summary
echo ""
echo "🎉 Mass merge completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Success rate: $(( (SUCCESSFUL_MERGES * 100) / (SUCCESSFUL_MERGES + FAILED_MERGES) ))%"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 Mass merge operation completed!"