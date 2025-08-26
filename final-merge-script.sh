#!/bin/bash

# Final merge script for remaining cursor branches
set -e

echo "🚀 Starting final merge process for remaining cursor branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=5
LOG_FILE="final-merge-log-$(date +%Y%m%d-%H%M%S).txt"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log_message() {
    local message="$1"
    local color="${2:-$NC}"
    echo -e "$(date '+%Y-%m-%d %H:%M:%S') - ${color}${message}${NC}" | tee -a "$LOG_FILE"
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        log_message "🔧 Resolving conflicts in $file..." "$YELLOW"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
        
        # Remove conflict markers
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
        sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        
        log_message "✅ Resolved conflicts in $file" "$GREEN"
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..." "$BLUE"
    
    # Fetch the branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        log_message "❌ Failed to fetch branch $branch" "$RED"
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch" "$GREEN"
        git commit -m "Merge $branch into main - $(date)" 2>/dev/null || true
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..." "$YELLOW"
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            log_message "📋 Conflicted files: $conflicted_files" "$BLUE"
            
            # Resolve conflicts
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Add resolved files and commit
            git add . 2>/dev/null || true
            if git commit -m "Resolve merge conflicts for $branch - $(date)" 2>/dev/null; then
                log_message "✅ Successfully resolved conflicts and merged $branch" "$GREEN"
                return 0
            else
                log_message "❌ Failed to commit resolved conflicts" "$RED"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..." "$RED"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Main processing
log_message "🔄 Starting to process remaining cursor branches..." "$BLUE"

# Get all cursor branches
git fetch --all
git branch -r | grep "origin/cursor/" | sed 's/origin\///' > /tmp/final_cursor_branches.txt

# Remove already merged branches
while IFS= read -r branch; do
    if git branch --merged main | grep -q "$branch"; then
        log_message "⏭️  Skipping $branch (already merged)" "$YELLOW"
        sed -i "/^$branch$/d" /tmp/final_cursor_branches.txt
    fi
done < /tmp/final_cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/final_cursor_branches.txt)
log_message "📊 Total remaining branches to process: $TOTAL_BRANCHES" "$BLUE"

if [ "$TOTAL_BRANCHES" -eq 0 ]; then
    log_message "🎉 All branches have been processed!" "$GREEN"
    exit 0
fi

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
PROCESSED=0

# Process branches
while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    log_message "📋 Processing branch $PROCESSED/$TOTAL_BRANCHES: $branch" "$BLUE"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    # Progress update
    log_message "📊 Progress: $PROCESSED/$TOTAL_BRANCHES, ✅ $SUCCESSFUL_MERGES, ❌ $FAILED_MERGES" "$BLUE"
    
    # Push changes periodically
    if [ $((PROCESSED % BATCH_SIZE)) -eq 0 ]; then
        log_message "💾 Pushing batch changes to remote..." "$BLUE"
        if git push origin main 2>/dev/null; then
            log_message "🚀 Completed batch $((PROCESSED / BATCH_SIZE))" "$GREEN"
        else
            log_message "⚠️  Failed to push changes, continuing..." "$YELLOW"
        fi
    fi
    
    # Small delay
    sleep 1
    
done < /tmp/final_cursor_branches.txt

# Final push
log_message "💾 Pushing final changes to remote..." "$BLUE"
if git push origin main 2>/dev/null; then
    log_message "✅ Final push successful" "$GREEN"
else
    log_message "⚠️  Final push failed" "$YELLOW"
fi

# Cleanup
rm -f /tmp/final_cursor_branches.txt

# Summary
log_message "🎉 Final merge process completed!" "$GREEN"
log_message "📊 Final Summary:" "$BLUE"
log_message "   📋 Total branches processed: $PROCESSED" "$BLUE"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES" "$GREEN"
log_message "   ❌ Failed merges: $FAILED_MERGES" "$RED"
log_message "📝 Log file: $LOG_FILE" "$BLUE"
log_message "⏰ Completed at: $(date)" "$GREEN"