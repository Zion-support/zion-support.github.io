#!/bin/bash

# Complete Merge All Branches Script
# This script will systematically merge ALL unmerged branches

set -e

echo "🚀 Starting Complete Merge of ALL Branches..."
echo "📊 Started at: $(date)"
echo "=================================================="

# Configuration
BATCH_SIZE=50
LOG_FILE="complete-merge-$(date +%Y%m%d-%H%M%S).log"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to log messages
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

# Function to resolve conflicts in a file
resolve_conflicts_in_file() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return 1
    fi
    
        
        log_message "✅ Resolved conflicts in $file"
        return 0
    fi
    
    return 1
}

# Function to merge a single branch
merge_single_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Check if branch exists remotely
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        log_message "❌ Branch $branch does not exist remotely, skipping..."
        return 1
    fi
    
    # Fetch the branch
    if ! git fetch origin "$branch"; then
        log_message "❌ Failed to fetch $branch, skipping..."
        return 1
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log_message "⏭️  Branch $branch is already merged, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch (no conflicts)"
        git commit -m "feat: Merge $branch

Automatically merged branch with latest content and improvements.
This merge includes new features, content updates, and enhancements."
        return 0
    else
        log_message "⚠️  Conflicts detected in $branch, resolving..."
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            log_message "📋 Conflicted files: $conflicted_files"
            
            # Resolve conflicts in each file
            local all_resolved=true
            for file in $conflicted_files; do
                if ! resolve_conflicts_in_file "$file"; then
                    all_resolved=false
                fi
            done
            
            if [ "$all_resolved" = true ]; then
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "feat: Merge $branch (conflicts resolved)

Successfully merged branch with automatic conflict resolution.
This merge includes new features, content updates, and enhancements."
                
                log_message "✅ Successfully merged $branch with resolved conflicts"
                CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
                return 0
            else
                log_message "❌ Failed to resolve all conflicts in $branch"
                git merge --abort
                return 1
            fi
        else
            log_message "❌ No conflicted files found, but merge failed"
            git merge --abort
            return 1
        fi
    fi
}

# Get ALL unmerged branches
log_message "📋 Getting list of ALL unmerged branches..."
ALL_BRANCHES=$(git branch -r --no-merged main | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

log_message "📊 Total unmerged branches to process: $TOTAL_BRANCHES"
log_message "📊 Batch size: $BATCH_SIZE"
log_message "=================================================="

# Process branches in batches
echo "$ALL_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    log_message "📋 Processing branch $TOTAL_PROCESSED/$TOTAL_BRANCHES: $branch"
    
    # Try to merge the branch
    if merge_single_branch "$branch"; then
        log_message "✅ Successfully processed $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        log_message "❌ Failed to process $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    # Progress update
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $SKIPPED_BRANCHES skipped"
    
    # Push every 50 branches
    if [ $((TOTAL_PROCESSED % 50)) -eq 0 ]; then
        log_message "💾 Pushing progress to remote..."
        if git push origin main --force-with-lease; then
            log_message "✅ Successfully pushed changes"
        else
            log_message "⚠️  Failed to push, continuing..."
        fi
    fi
    
    # Add a small delay to prevent overwhelming the system
    sleep 0.05
done

# Final push
log_message "💾 Final push to remote..."
if git push origin main --force-with-lease; then
    log_message "✅ Successfully pushed all changes"
else
    log_message "⚠️  Failed to push final changes"
fi

# Final summary
echo ""
log_message "🎉 Complete merge process completed!"
log_message "📊 Final Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📦 Total processed: $TOTAL_PROCESSED"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

echo ""
echo "🎯 All branches have been processed! Check the log file for detailed information."
echo "📝 Log file: $LOG_FILE"