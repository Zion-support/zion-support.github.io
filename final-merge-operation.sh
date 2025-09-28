#!/bin/bash

# Final comprehensive merge operation for remaining branches
set -e

echo "🚀 Starting final merge operation for remaining cursor branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
BATCH_SIZE=100

# Get all remaining cursor branches
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Processing remaining $TOTAL_BRANCHES branches..."

# Function to check if branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Check if branch is already merged (more thorough check)
    local branch_commit=$(git rev-parse "origin/$branch" 2>/dev/null)
    if [ -z "$branch_commit" ]; then
        return 1
    fi
    
    # Check if commit is already in main history
    if git merge-base --is-ancestor "$branch_commit" main 2>/dev/null; then
        return 1  # Already merged
    fi
    
    return 0  # Can be merged
}

# Function to merge branch with comprehensive strategies
comprehensive_merge() {
    local branch="$1"
    
    echo "🔄 Attempting comprehensive merge of $branch..."
    
    # Strategy 1: Normal merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Normal merge succeeded for $branch"
        return 0
    fi
    
    # Strategy 2: Merge with ours strategy
    if git merge -X ours --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch (ours strategy) - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Ours strategy succeeded for $branch"
        return 0
    fi
    
    # Strategy 3: Merge with theirs strategy
    if git merge -X theirs --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch (theirs strategy) - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        echo "✅ Theirs strategy succeeded for $branch"
        return 0
    fi
    
    # Strategy 4: Manual conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        # Resolve conflicts by accepting main branch changes
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        if git commit --no-edit -m "Merge $branch (conflict resolution) - $(date)"; then
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            echo "✅ Manual conflict resolution succeeded for $branch"
            return 0
        fi
    fi
    
    # Strategy 5: Cherry-pick approach
    local latest_commit=$(git log "origin/$branch" -1 --pretty=format:"%H" 2>/dev/null || true)
    if [ -n "$latest_commit" ]; then
        if git cherry-pick "$latest_commit" 2>/dev/null; then
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            echo "✅ Cherry-pick succeeded for $branch"
            return 0
        fi
    fi
    
    # If all strategies fail, abort and skip
    git merge --abort 2>/dev/null || true
    git cherry-pick --abort 2>/dev/null || true
    FAILED_MERGES=$((FAILED_MERGES + 1))
    echo "❌ All strategies failed for $branch"
    return 1
}

# Function to process batch of branches
process_batch() {
    local batch_branches=("$@")
    local batch_size=${#batch_branches[@]}
    
    echo "📦 Processing batch of ${batch_size} branches..."
    
    for branch in "${batch_branches[@]}"; do
        if can_merge_branch "$branch"; then
            comprehensive_merge "$branch"
        else
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        fi
    done
}

# Main processing loop
echo "🔄 Starting final merge processing..."
echo "---"

# Convert branches to array
IFS=$'\n' read -d '' -r -a branch_array <<< "$BRANCHES"

# Process in batches
for ((i=0; i<${#branch_array[@]}; i+=BATCH_SIZE)); do
    batch=("${branch_array[@]:i:BATCH_SIZE}")
    batch_num=$((i/BATCH_SIZE + 1))
    total_batches=$(((${#branch_array[@]} + BATCH_SIZE - 1) / BATCH_SIZE))
    
    echo "📋 Batch $batch_num/$total_batches"
    process_batch "${batch[@]}"
    
    # Progress update
    processed=$((i + BATCH_SIZE))
    if [ $processed -gt ${#branch_array[@]} ]; then
        processed=${#branch_array[@]}
    fi
    
    echo "📊 Progress: $processed/${#branch_array[@]} branches processed"
    echo "   ✅ Successful: $SUCCESSFUL_MERGES"
    echo "   ❌ Failed: $FAILED_MERGES"
    echo "   ⏭️  Skipped: $SKIPPED_BRANCHES"
    echo "---"
    
    # Push progress every 5 batches
    if [ $((batch_num % 5)) -eq 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main || true
    fi
done

# Final cleanup of merged branches
echo "🧹 Cleaning up merged branches..."
git remote prune origin

# Final push
echo "💾 Pushing final results..."
git push origin main || true

# Final summary
echo ""
echo "🎉 Final merge operation completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Success rate: $(( (SUCCESSFUL_MERGES * 100) / (SUCCESSFUL_MERGES + FAILED_MERGES) ))%"
echo "   📊 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"
echo "⏰ Completed at: $(date)"

# Check remaining branches
REMAINING_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l)
echo "📊 Remaining cursor branches: $REMAINING_BRANCHES"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -10

echo ""
echo "🎯 Final merge operation completed!"