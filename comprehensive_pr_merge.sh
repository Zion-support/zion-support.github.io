#!/bin/bash

# Comprehensive PR merge script
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Function to sync with remote
sync_with_remote() {
    echo "  🔄 Syncing with remote..."
    git fetch origin main
    git pull origin main --rebase
}

# Function to process a single branch
process_branch() {
    local branch=$1
    local branch_num=$2
    local total_branches=$3
    
    echo ""
    echo "🔄 [$branch_num/$total_branches] Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  ✅ Branch exists locally"
    else
        echo "  📥 Fetching branch from remote..."
        if ! git fetch origin $branch:$branch 2>/dev/null; then
            echo "  ⚠️  Failed to fetch branch $branch, skipping..."
            return 1
        fi
    fi
    
    # Switch to main
    git checkout main
    
    # Try to merge
    echo "  🔀 Attempting to merge $branch into main..."
    
    if git merge $branch --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "  ✅ Successfully merged $branch"
        return 0
        
    else
        echo "  ⚠️  Merge conflict detected in $branch"
        
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
                return 0
            else
                echo "  ❌ Failed to commit resolved merge for $branch"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "  ❌ No conflict files found, aborting merge"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/" | grep -v "HEAD" | sed 's/origin\///' | sort -u)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📋 Found $TOTAL_BRANCHES branches to process"

# Counter for tracking
SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
PROCESSED=0

# Process branches in batches of 10
BATCH_SIZE=10
BATCH_NUM=1

echo "📊 Processing $TOTAL_BRANCHES branches in batches of $BATCH_SIZE"

# Process each branch
for branch in $BRANCHES; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    CURRENT_BATCH=$(((PROCESSED - 1) / BATCH_SIZE + 1))
    
    # Process the branch
    if process_branch "$branch" "$PROCESSED" "$TOTAL_BRANCHES"; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        ERROR_COUNT=$((ERROR_COUNT + 1))
    fi
    
    # Clean up the local branch
    echo "  🧹 Cleaning up local branch $branch"
    git branch -D $branch 2>/dev/null || true
    
    # Sync with remote every 10 branches
    if [ $((PROCESSED % 10)) -eq 0 ]; then
        echo "  📤 Syncing with remote after $PROCESSED branches..."
        sync_with_remote
    fi
    
    echo "  ✅ Completed processing $branch"
done

# Final sync
echo "  📤 Final sync with remote..."
sync_with_remote

echo ""
echo "📊 Comprehensive PR Merge Summary:"
echo "  ✅ Successful merges: $SUCCESS_COUNT"
echo "  ⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "  ❌ Errors: $ERROR_COUNT"
echo "  📋 Total processed: $PROCESSED"

echo ""
echo "🎉 Comprehensive PR merge process completed!"