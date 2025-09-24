#!/bin/bash

# Efficient Batch Merge Script for Large Number of Branches
set -e

echo "🚀 Starting efficient batch merge of all branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
BATCH_SIZE=50

# Get all branches that need to be merged
echo "📊 Getting all branches to merge..."
ALL_BRANCHES=$(git branch -r | grep -E "(cursor|pr)" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Function to resolve conflicts quickly
resolve_conflicts_fast() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return 0
    fi
    
    # Quick conflict resolution - prefer incoming changes for most files
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx"|"src/App.tsx")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
}

# Function to merge a batch of branches
merge_batch() {
    local batch_branches="$1"
    local batch_num="$2"
    
    echo "🔄 Processing batch $batch_num..."
    
    for branch in $batch_branches; do
        echo "  📋 Processing: $branch"
        
        # Skip if branch doesn't exist or is already merged
        if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
            echo "    ⏭️  Branch doesn't exist, skipping..."
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        if git branch --merged main | grep -q "$branch"; then
            echo "    ⏭️  Already merged, skipping..."
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            echo "    ✅ Merged successfully"
            git commit -m "Merge $branch into main - $(date)" 2>/dev/null || true
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "    ⚠️  Conflicts detected, resolving..."
            
            # Quick conflict resolution
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            if [ -n "$CONFLICTED_FILES" ]; then
                for file in $CONFLICTED_FILES; do
                    resolve_conflicts_fast "$file"
                done
                
                git add . 2>/dev/null || true
                if git commit -m "Resolve conflicts for $branch - $(date)" 2>/dev/null; then
                    echo "    ✅ Conflicts resolved and merged"
                    SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                else
                    echo "    ❌ Failed to resolve conflicts"
                    git merge --abort 2>/dev/null || true
                    FAILED_MERGES=$((FAILED_MERGES + 1))
                fi
            else
                echo "    ❌ Merge failed, aborting..."
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        fi
    done
}

# Process branches in batches
echo "🔄 Starting batch processing..."
echo "---"

CURRENT_BATCH=1
BATCH_COUNT=0
CURRENT_BRANCHES=""

for branch in $ALL_BRANCHES; do
    CURRENT_BRANCHES="$CURRENT_BRANCHES $branch"
    BATCH_COUNT=$((BATCH_COUNT + 1))
    
    if [ $BATCH_COUNT -eq $BATCH_SIZE ]; then
        merge_batch "$CURRENT_BRANCHES" $CURRENT_BATCH
        CURRENT_BATCH=$((CURRENT_BATCH + 1))
        BATCH_COUNT=0
        CURRENT_BRANCHES=""
        
        # Push progress every batch
        echo "💾 Pushing progress..."
        git push origin main 2>/dev/null || true
        
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $SKIPPED_BRANCHES skipped"
        echo "---"
    fi
done

# Process remaining branches
if [ $BATCH_COUNT -gt 0 ]; then
    merge_batch "$CURRENT_BRANCHES" $CURRENT_BATCH
fi

# Final push
echo "💾 Final push to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Efficient batch merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 All branches have been processed!"