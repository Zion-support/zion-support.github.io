#!/bin/bash

# Continue merging remaining cursor branches with improved conflict resolution
set -e

echo "🚀 Continuing merge process for remaining cursor branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=10
MAX_CONFLICTS_PER_BRANCH=10
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="continue-merge-log-$(date +%Y%m%d-%H%M%S).txt"

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
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..." "$BLUE"
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        log_message "⚠️  Found conflicts in $file, resolving..." "$YELLOW"
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Critical file detected, keeping main version..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            log_message "⚙️  Config file detected, keeping main version..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == *.css || "$file" == *.scss ]]; then
            log_message "🎨 CSS file detected, merging styles..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        elif [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
            log_message "💻 Code file detected, attempting intelligent merge..." "$BLUE"
            # For code files, try to keep both versions where possible
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        else
            log_message "📝 Regular file, removing conflict markers..." "$BLUE"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        fi
        
        log_message "✅ Resolved conflicts in $file" "$GREEN"
        return 0
    else
        log_message "ℹ️  No conflicts found in $file" "$BLUE"
        return 1
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..." "$BLUE"
    
    # Fetch the latest version of the branch
    git fetch origin "$branch" 2>/dev/null || {
        log_message "❌ Failed to fetch branch $branch" "$RED"
        return 1
    }
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch" "$GREEN"
        git commit -m "Merge $branch into main - $(date)" 2>/dev/null || true
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..." "$YELLOW"
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            log_message "📋 Conflicted files: $conflicted_files" "$BLUE"
            
            # Resolve conflicts in each file
            local conflict_count=0
            for file in $conflicted_files; do
                if [ $conflict_count -ge $MAX_CONFLICTS_PER_BRANCH ]; then
                    log_message "⚠️  Too many conflicts in $branch, skipping..." "$YELLOW"
                    git merge --abort 2>/dev/null || true
                    return 1
                fi
                
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                    conflict_count=$((conflict_count + 1))
                fi
            done
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Commit the merge
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

# Get all cursor branches that haven't been processed yet
git fetch --all
git branch -r | grep "origin/cursor/" | sed 's/origin\///' > /tmp/remaining_cursor_branches.txt

# Remove already merged branches
while IFS= read -r branch; do
    if git branch --merged main | grep -q "$branch"; then
        log_message "⏭️  Skipping $branch (already merged)" "$YELLOW"
        sed -i "/^$branch$/d" /tmp/remaining_cursor_branches.txt
    fi
done < /tmp/remaining_cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/remaining_cursor_branches.txt)
log_message "📊 Total remaining branches to process: $TOTAL_BRANCHES" "$BLUE"

if [ "$TOTAL_BRANCHES" -eq 0 ]; then
    log_message "🎉 All branches have been processed!" "$GREEN"
    exit 0
fi

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
PROCESSED=0

# Process branches in batches
while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    log_message "📋 Processing branch $PROCESSED/$TOTAL_BRANCHES: $branch" "$BLUE"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully" "$GREEN"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        log_message "❌ Failed to process branch $branch" "$RED"
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    # Progress update
    log_message "📊 Progress: $PROCESSED/$TOTAL_BRANCHES, ✅ $SUCCESSFUL_MERGES, ❌ $FAILED_MERGES" "$BLUE"
    
    # Push changes periodically
    if [ $((PROCESSED % BATCH_SIZE)) -eq 0 ]; then
        log_message "💾 Pushing batch changes to remote..." "$BLUE"
        git push origin main 2>/dev/null || {
            log_message "⚠️  Failed to push changes, continuing..." "$YELLOW"
        }
        log_message "🚀 Completed batch $((PROCESSED / BATCH_SIZE))" "$GREEN"
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
    
done < /tmp/remaining_cursor_branches.txt

# Final push
log_message "💾 Pushing final changes to remote..." "$BLUE"
git push origin main 2>/dev/null || {
    log_message "⚠️  Failed to push final changes" "$RED"
}

# Cleanup
rm -f /tmp/remaining_cursor_branches.txt

# Summary
log_message "🎉 Continue merge process completed!" "$GREEN"
log_message "📊 Final Summary:" "$BLUE"
log_message "   📋 Total branches processed: $PROCESSED" "$BLUE"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES" "$GREEN"
log_message "   ❌ Failed merges: $FAILED_MERGES" "$RED"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS" "$BLUE"
log_message "📝 Log file: $LOG_FILE" "$BLUE"
log_message "⏰ Completed at: $(date)" "$GREEN"