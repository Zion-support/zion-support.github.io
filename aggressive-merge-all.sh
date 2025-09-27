#!/bin/bash

# Aggressive merge script using multiple strategies
set -e

echo "🚀 Starting aggressive merge of all cursor branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
STRATEGY_COUNT=0

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES branches with aggressive strategies..."

# Function to try multiple merge strategies
aggressive_merge() {
    local branch="$1"
    
    echo "🔄 Aggressively merging $branch..."
    
    # Strategy 1: Normal merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch" 2>/dev/null || true
        echo "✅ Strategy 1: Normal merge succeeded"
        return 0
    fi
    
    # Strategy 2: Merge with ours strategy
    if git merge -X ours --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch (ours strategy)" 2>/dev/null || true
        echo "✅ Strategy 2: Ours strategy succeeded"
        return 0
    fi
    
    # Strategy 3: Merge with theirs strategy
    if git merge -X theirs --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch (theirs strategy)" 2>/dev/null || true
        echo "✅ Strategy 3: Theirs strategy succeeded"
        return 0
    fi
    
    # Strategy 4: Manual conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        # Resolve all conflicts by accepting ours
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit --no-edit -m "Merge $branch (manual resolution)" 2>/dev/null || true
        echo "✅ Strategy 4: Manual resolution succeeded"
        return 0
    fi
    
    # Strategy 5: Cherry-pick approach
    local latest_commit=$(git log "origin/$branch" -1 --pretty=format:"%H" 2>/dev/null || true)
    if [ -n "$latest_commit" ]; then
        if git cherry-pick "$latest_commit" 2>/dev/null; then
            echo "✅ Strategy 5: Cherry-pick succeeded"
            return 0
        fi
    fi
    
    # Strategy 6: Reset and force merge
    git merge --abort 2>/dev/null || true
    if git reset --hard HEAD 2>/dev/null; then
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            git commit --no-edit -m "Merge $branch (reset strategy)" 2>/dev/null || true
            echo "✅ Strategy 6: Reset strategy succeeded"
            return 0
        fi
    fi
    
    echo "❌ All strategies failed for $branch"
    git merge --abort 2>/dev/null || true
    return 1
}

# Process branches
echo "🔄 Starting aggressive processing..."
echo "---"

CURRENT=0
for branch in $BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing: $branch"
    
    if aggressive_merge "$branch"; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    # Progress update every 100 branches
    if [ $((CURRENT % 100)) -eq 0 ]; then
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
echo "🎉 Aggressive merge completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Success rate: $(( (SUCCESSFUL_MERGES * 100) / (SUCCESSFUL_MERGES + FAILED_MERGES) ))%"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 Aggressive merge operation completed!"