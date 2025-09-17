#!/bin/bash

# Smart Batch Merge Script - Processes branches efficiently in small batches
set -e

echo "🚀 Starting Smart Batch Merge Process..."
echo "⏰ Started at: $(date)"

# Configuration
BATCH_SIZE=10
MAX_BATCHES=50
SUCCESS_THRESHOLD=5  # Stop if less than 5 successful merges in a batch

# Initialize counters
TOTAL_SUCCESSFUL=0
TOTAL_FAILED=0
BATCH_COUNT=0

# Function to get next batch of cursor branches
get_next_batch() {
    local offset=$((BATCH_COUNT * BATCH_SIZE))
    git branch -r | grep "origin/cursor/" | sed 's/origin\///' | tail -n +$((offset + 1)) | head -n $BATCH_SIZE
}

# Function to check if branch exists and can be merged
can_merge_branch() {
    local branch="$1"
    
    # Check if branch exists remotely
    if ! git ls-remote --heads origin "$branch" >/dev/null 2>&1; then
        return 1
    fi
    
    # Check if already merged (basic check)
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch with smart conflict resolution
merge_branch() {
    local branch="$1"
    
    echo "  🔄 Merging $branch..."
    
    # Fetch the branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        echo "    ❌ Failed to fetch $branch"
        return 1
    fi
    
    # Try fast-forward merge first
    if git merge --ff-only "origin/$branch" 2>/dev/null; then
        echo "    ✅ Fast-forward merged $branch"
        return 0
    fi
    
    # Try merge with automatic conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit -m "Merge $branch - $(date '+%Y-%m-%d %H:%M')" 2>/dev/null
        echo "    ✅ Successfully merged $branch"
        return 0
    fi
    
    # Handle conflicts with smart resolution
    echo "    ⚠️  Conflicts detected, resolving..."
    
    # Get conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null)
    
    if [ -n "$conflicted_files" ]; then
        # Smart conflict resolution based on file type
        for file in $conflicted_files; do
            if [ -f "$file" ]; then
                case "$file" in
                    "package.json"|"package-lock.json")
                        git checkout --ours "$file" 2>/dev/null || true
                        ;;
                    "netlify.toml"|"next.config.js"|"tsconfig.json")
                        git checkout --ours "$file" 2>/dev/null || true
                        ;;
                    *.tsx|*.ts|*.jsx|*.js)
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                        ;;
                    *)
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                        ;;
                esac
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Commit resolved conflicts
        if git commit -m "Resolve conflicts for $branch - $(date '+%Y-%m-%d %H:%M')" 2>/dev/null; then
            echo "    ✅ Resolved conflicts and merged $branch"
            return 0
        fi
    fi
    
    # If all else fails, abort
    git merge --abort 2>/dev/null || true
    echo "    ❌ Failed to merge $branch"
    return 1
}

# Main processing loop
main() {
    echo "🎯 Starting smart batch processing..."
    echo "📊 Configuration: Batch size=$BATCH_SIZE, Max batches=$MAX_BATCHES"
    echo "---"
    
    while [ $BATCH_COUNT -lt $MAX_BATCHES ]; do
        BATCH_COUNT=$((BATCH_COUNT + 1))
        echo ""
        echo "📦 Processing batch $BATCH_COUNT..."
        
        # Get next batch of branches
        local branches=$(get_next_batch)
        
        if [ -z "$branches" ]; then
            echo "✅ No more branches to process"
            break
        fi
        
        local batch_successful=0
        local batch_failed=0
        local batch_processed=0
        
        # Process each branch in the batch
        for branch in $branches; do
            if can_merge_branch "$branch"; then
                batch_processed=$((batch_processed + 1))
                if merge_branch "$branch"; then
                    batch_successful=$((batch_successful + 1))
                    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + 1))
                else
                    batch_failed=$((batch_failed + 1))
                    TOTAL_FAILED=$((TOTAL_FAILED + 1))
                fi
            else
                echo "  ⏭️  Skipping $branch (already merged or doesn't exist)"
            fi
        done
        
        echo "📊 Batch $BATCH_COUNT results: $batch_successful successful, $batch_failed failed, $batch_processed processed"
        
        # Check if we should continue
        if [ $batch_successful -lt $SUCCESS_THRESHOLD ] && [ $batch_processed -gt 0 ]; then
            echo "⚠️  Low success rate in this batch, stopping to prevent issues"
            break
        fi
        
        # Push changes every few batches
        if [ $((BATCH_COUNT % 5)) -eq 0 ]; then
            echo "💾 Pushing changes to remote..."
            git push origin main 2>/dev/null || echo "Push failed, continuing..."
        fi
        
        # Progress update
        echo "📊 Overall: $TOTAL_SUCCESSFUL successful, $TOTAL_FAILED failed"
        echo "---"
        
        # Small delay between batches
        sleep 1
    done
    
    # Final push
    echo ""
    echo "💾 Pushing final changes..."
    git push origin main 2>/dev/null || echo "Final push failed"
    
    # Summary
    echo ""
    echo "🎉 Smart batch merge completed!"
    echo "📊 Final Summary:"
    echo "   ✅ Total successful merges: $TOTAL_SUCCESSFUL"
    echo "   ❌ Total failed merges: $TOTAL_FAILED"
    echo "   📦 Batches processed: $BATCH_COUNT"
    echo "⏰ Completed at: $(date)"
    
    # Show recent commits
    echo ""
    echo "📝 Recent commits:"
    git log --oneline -10
    
    # Show remaining branches
    local remaining=$(git branch -r | grep "origin/cursor/" | wc -l)
    echo ""
    echo "📊 Remaining cursor branches: $remaining"
    
    if [ $TOTAL_SUCCESSFUL -gt 0 ]; then
        echo "✅ Successfully processed $TOTAL_SUCCESSFUL branches"
        exit 0
    else
        echo "ℹ️  No branches were merged in this run"
        exit 0
    fi
}

# Run main function
main "$@"