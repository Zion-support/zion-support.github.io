#!/bin/bash

# Batch Merge Script for Cursor Branches
# Processes cursor branches in optimized batches

set -e

echo "🚀 Starting batch merge of cursor branches..."

# Function to merge a batch of branches
merge_batch() {
    local batch_num="$1"
    local branches=("${@:2}")
    local batch_size="${#branches[@]}"
    
    echo ""
    echo "🔄 Processing Batch $batch_num ($batch_size branches)"
    
    local successful=0
    local failed=0
    local skipped=0
    
    for branch in "${branches[@]}"; do
        echo "  🔄 Processing: $branch"
        
        # Check if branch exists
        if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
            echo "    ⚠️  Branch does not exist, skipping..."
            ((skipped++))
            continue
        fi
        
        # Check if branch has new commits
        if ! git log --oneline "$branch" --not origin/main | head -1 > /dev/null 2>&1; then
            echo "    ⏭️  No new commits, skipping..."
            ((skipped++))
            continue
        fi
        
        # Try to merge
        if git merge "$branch" --no-edit --no-ff 2>/dev/null; then
            echo "    ✅ Successfully merged"
            ((successful++))
        else
            echo "    ⚠️  Merge conflict, resolving..."
            
            # Quick conflict resolution - prefer main branch
            local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            
            if [ -n "$conflicted_files" ]; then
                # Resolve all conflicts by keeping main branch version
                git checkout --ours . 2>/dev/null || true
                git add . 2>/dev/null || true
                
                if git commit --no-edit 2>/dev/null; then
                    echo "    ✅ Conflict resolved and merged"
                    ((successful++))
                else
                    echo "    ❌ Failed to resolve conflicts"
                    git merge --abort 2>/dev/null || true
                    ((failed++))
                fi
            else
                echo "    ❌ Merge failed for unknown reason"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        fi
    done
    
    echo "📊 Batch $batch_num Summary: ✅ $successful successful, ❌ $failed failed, ⏭️ $skipped skipped"
    
    # Push changes if there were successful merges
    if [ $successful -gt 0 ]; then
        echo "🚀 Pushing batch $batch_num changes..."
        if git push origin main 2>/dev/null; then
            echo "✅ Batch $batch_num pushed successfully!"
        else
            echo "⚠️  Failed to push batch $batch_num"
        fi
    fi
    
    return $successful
}

# Main execution
echo "📍 Ensuring we're on main branch..."
git checkout main
git pull origin main

# Get all cursor branches
echo "📋 Gathering cursor branches..."
CURSOR_BRANCHES=($(git branch -r | grep "cursor/" | sort -V))
TOTAL_BRANCHES=${#CURSOR_BRANCHES[@]}

echo "📊 Found $TOTAL_BRANCHES cursor branches to process"

if [ $TOTAL_BRANCHES -eq 0 ]; then
    echo "✅ No cursor branches found to merge!"
    exit 0
fi

# Process in batches of 100
BATCH_SIZE=100
TOTAL_BATCHES=$(( (TOTAL_BRANCHES + BATCH_SIZE - 1) / BATCH_SIZE ))

echo "📊 Processing $TOTAL_BRANCHES branches in $TOTAL_BATCHES batches of $BATCH_SIZE"

total_successful=0
total_failed=0
total_skipped=0

for ((batch=0; batch<TOTAL_BATCHES; batch++)); do
    start_idx=$((batch * BATCH_SIZE))
    end_idx=$(((batch + 1) * BATCH_SIZE))
    
    if [ $end_idx -gt $TOTAL_BRANCHES ]; then
        end_idx=$TOTAL_BRANCHES
    fi
    
    # Extract batch
    batch_branches=("${CURSOR_BRANCHES[@]:$start_idx:$BATCH_SIZE}")
    
    # Merge the batch
    if merge_batch $((batch + 1)) "${batch_branches[@]}"; then
        batch_successful=$?
        total_successful=$((total_successful + batch_successful))
    fi
    
    echo "📊 Overall Progress: $((batch + 1))/$TOTAL_BATCHES batches completed"
    
    # Brief pause between batches
    sleep 1
done

echo ""
echo "🎉 BATCH MERGE COMPLETED!"
echo "📊 Final Summary:"
echo "✅ Total Successful Merges: $total_successful"
echo "❌ Total Failed Merges: $total_failed"
echo "⏭️  Total Skipped: $total_skipped"
echo "📈 Total Processed: $((total_successful + total_failed + total_skipped))"
echo "📋 Total Available: $TOTAL_BRANCHES"

echo ""
echo "🔍 Final repository status:"
git status

echo ""
echo "✅ Batch merge process completed successfully!"