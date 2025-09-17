#!/bin/bash

echo "🚀 Starting comprehensive merge of all unmerged branches into main..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    # Skip if branch has too many commits (likely complex conflicts)
    local commit_count=$(git log --oneline main.."origin/$branch" 2>/dev/null | wc -l)
    if [ "$commit_count" -gt 200 ]; then
        log_message "⚠️  Skipping $branch - too many commits ($commit_count)"
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try different merge strategies
    local merge_success=false
    
    # Strategy 1: Try regular merge
    log_message "  📋 Trying regular merge..."
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch (regular merge)"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        merge_success=true
    else
        log_message "⚠️  Regular merge failed, trying alternative strategies..."
        
        # Strategy 2: Try with recursive strategy
        git merge --abort
        log_message "  📋 Trying recursive merge strategy..."
        if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X theirs 2>/dev/null; then
            log_message "✅ Successfully merged $branch (recursive strategy)"
            git commit -m "Merge $branch into main using recursive strategy - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            merge_success=true
        else
            # Strategy 3: Try with ours strategy
            git merge --abort
            log_message "  📋 Trying ours strategy..."
            if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X ours 2>/dev/null; then
                log_message "✅ Successfully merged $branch (ours strategy)"
                git commit -m "Merge $branch into main using ours strategy - $(date)"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                merge_success=true
            else
                log_message "❌ All merge strategies failed for $branch"
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        fi
    fi
    
    if [ "$merge_success" = true ]; then
        log_message "✅ Branch $branch merged successfully"
        return 0
    else
        return 1
    fi
}

# Get all unmerged branches, prioritizing cursor branches
log_message "📋 Getting list of unmerged branches..."
CURSOR_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | sort)
OTHER_BRANCHES=$(git branch -r --no-merged main | grep -v "origin/cursor/" | sed 's/origin\///' | sort)

# Combine branches with cursor branches first
ALL_BRANCHES="$CURSOR_BRANCHES $OTHER_BRANCHES"

log_message "📋 Processing cursor branches first, then other branches"
log_message "🔍 Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches"
log_message "🔍 Found $(echo "$OTHER_BRANCHES" | wc -l) other branches"
log_message "---"

# Main processing loop with progress tracking
log_message "🔄 Starting branch processing..."
log_message "---"

# Process branches in batches to avoid overwhelming the system
BATCH_SIZE=50
CURRENT_BATCH=0

for branch in $ALL_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    CURRENT_BATCH=$((CURRENT_BATCH + 1))
    
    log_message "📋 Processing branch: $branch (${TOTAL_PROCESSED}/$(echo "$ALL_BRANCHES" | wc -l))"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        log_message "⏭️  Skipping $branch (already merged, doesn't exist, or too complex)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
    log_message "📈 Success rate: $((SUCCESSFUL_MERGES * 100 / TOTAL_PROCESSED))%"
    log_message "---"
    
    # Push changes periodically to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Batch processing - take a break every batch
    if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
        log_message "🔄 Completed batch $((TOTAL_PROCESSED / BATCH_SIZE)). Taking a short break..."
        sleep 5
        CURRENT_BATCH=0
        
        # Force push every few batches to ensure remote is updated
        if [ $((TOTAL_PROCESSED % (BATCH_SIZE * 5))) -eq 0 ]; then
            log_message "💾 Force pushing to remote..."
            git push origin main --force-with-lease
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
log_message "🎉 Comprehensive merge process completed!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📈 Total processed: $TOTAL_PROCESSED"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
log_message "🧹 Cleanup recommendations:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
log_message "   4. Consider cleaning up old feature branches"
log_message "   5. Run tests to ensure everything works: npm test"