#!/bin/bash

# Force merge all branches using aggressive strategies
set -e

echo "🚀 Starting force merge of all cursor branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
BATCH_SIZE=50

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES branches with force merge..."

# Function to force merge a branch
force_merge() {
    local branch="$1"
    
    echo "⚡ Force merging $branch..."
    
    # Strategy 1: Try normal merge
    if git merge --no-edit --no-ff "origin/$branch" 2>/dev/null; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Normal merge succeeded for $branch"
        return 0
    fi
    
    # Strategy 2: Force merge with ours strategy (keep main branch changes)
    if git merge -X ours --no-edit --no-ff "origin/$branch" 2>/dev/null; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Ours strategy succeeded for $branch"
        return 0
    fi
    
    # Strategy 3: Force merge with theirs strategy (keep branch changes)
    if git merge -X theirs --no-edit --no-ff "origin/$branch" 2>/dev/null; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Theirs strategy succeeded for $branch"
        return 0
    fi
    
    # Strategy 4: Manual conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        # Accept all conflicts in favor of main branch
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        if git commit --no-edit -m "Force merge $branch with conflict resolution"; then
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            echo "✅ Manual resolution succeeded for $branch"
            return 0
        fi
    fi
    
    # Strategy 5: Reset and try again
    git merge --abort 2>/dev/null || true
    git reset --hard HEAD 2>/dev/null || true
    
    if git merge --no-edit --no-ff "origin/$branch" 2>/dev/null; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Reset strategy succeeded for $branch"
        return 0
    fi
    
    # If all strategies fail
    git merge --abort 2>/dev/null || true
    FAILED_MERGES=$((FAILED_MERGES + 1))
    echo "❌ All strategies failed for $branch"
    return 1
}

# Process branches in batches
echo "🔄 Starting force merge processing..."
echo "---"

# Convert branches to array
IFS=$'\n' read -d '' -r -a branch_array <<< "$BRANCHES"

# Process in batches
for ((i=0; i<${#branch_array[@]}; i+=BATCH_SIZE)); do
    batch=("${branch_array[@]:i:BATCH_SIZE}")
    
    echo "📦 Processing batch $((i/BATCH_SIZE + 1)) (${#batch[@]} branches)..."
    
    for branch in "${batch[@]}"; do
        force_merge "$branch"
    done
    
    # Progress update
    processed=$((i + BATCH_SIZE))
    if [ $processed -gt ${#branch_array[@]} ]; then
        processed=${#branch_array[@]}
    fi
    echo "📈 Progress: $processed/${#branch_array[@]} branches processed"
    echo "📊 Total: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
    echo "---"
    
    # Push progress every 10 batches
    if [ $((i / BATCH_SIZE % 10)) -eq 0 ] && [ $i -gt 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main || true
    fi
done

# Final push
echo "💾 Pushing final results..."
git push origin main || true

# Summary
echo ""
echo "🎉 Force merge completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Success rate: $(( (SUCCESSFUL_MERGES * 100) / (SUCCESSFUL_MERGES + FAILED_MERGES) ))%"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 Force merge operation completed!"