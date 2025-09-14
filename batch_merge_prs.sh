#!/bin/bash

# Batch merge script for handling multiple PRs efficiently
set -e

echo "🚀 Starting batch PR merge process..."

# Get all cursor branches, sorted by creation date (most recent first)
BRANCHES=$(git branch -r | grep "cursor/" | grep -v "HEAD" | sed 's/origin\///' | sort -u)

echo "📋 Found $(echo "$BRANCHES" | wc -l) branches to process"

# Process in batches of 10
BATCH_SIZE=10
BATCH_NUM=1
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)
PROCESSED=0

# Counter for tracking
SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

echo "📊 Processing $TOTAL_BRANCHES branches in batches of $BATCH_SIZE"

# Process branches in batches
echo "$BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Calculate batch info
    PROCESSED=$((PROCESSED + 1))
    CURRENT_BATCH=$(((PROCESSED - 1) / BATCH_SIZE + 1))
    
    echo ""
    echo "🔄 [$PROCESSED/$TOTAL_BRANCHES] Processing branch: $branch (Batch $CURRENT_BATCH)"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  ✅ Branch exists locally"
    else
        echo "  📥 Fetching branch from remote..."
        if ! git fetch origin $branch:$branch 2>/dev/null; then
            echo "  ⚠️  Failed to fetch branch $branch, skipping..."
            continue
        fi
    fi
    
    # Switch to main
    git checkout main
    
    # Try to merge
    echo "  🔀 Attempting to merge $branch into main..."
    
    if git merge $branch --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "  ✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
    else
        echo "  ⚠️  Merge conflict detected in $branch"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        if [ -n "$CONFLICT_FILES" ]; then
            echo "  📝 Conflicted files: $CONFLICT_FILES"
            
            # Resolve conflicts by keeping our version (main branch)
            for file in $CONFLICT_FILES; do
                echo "  🔧 Resolving conflict in $file (keeping main version)"
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Commit the resolved merge
            if git commit -m "Merge $branch into main - conflicts resolved" --no-edit 2>/dev/null; then
                echo "  ✅ Successfully resolved conflicts and merged $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "  ❌ Failed to commit resolved merge for $branch"
                ERROR_COUNT=$((ERROR_COUNT + 1))
                
                # Abort the merge
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "  ❌ No conflict files found, aborting merge"
            git merge --abort 2>/dev/null || true
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
    fi
    
    # Clean up the local branch
    echo "  🧹 Cleaning up local branch $branch"
    git branch -D $branch 2>/dev/null || true
    
    echo "  ✅ Completed processing $branch"
    
    # Push changes every 5 successful merges
    if [ $((SUCCESS_COUNT % 5)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        echo "  📤 Pushing changes to remote..."
        git push origin main
    fi
done

echo ""
echo "📊 Batch Merge Process Summary:"
echo "  ✅ Successful merges: $SUCCESS_COUNT"
echo "  ⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "  ❌ Errors: $ERROR_COUNT"
echo "  📋 Total processed: $((SUCCESS_COUNT + CONFLICT_COUNT + ERROR_COUNT))"

# Final push
echo "  📤 Final push to remote..."
git push origin main

echo ""
echo "🎉 Batch PR merge process completed!"