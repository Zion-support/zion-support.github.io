#!/bin/bash

# Smart Branch Cleanup Script
# This script intelligently processes branches and cleans up the repository

set -e

echo "🚀 Starting smart branch cleanup process..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Function to run commands with timeout
run_with_timeout() {
    local cmd="$1"
    local timeout="${2:-30}"
    
    if timeout $timeout bash -c "$cmd" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

# First, let's clean up old/duplicate branches
print_status "Cleaning up old and duplicate branches..."

# Get branches that are likely duplicates or old
OLD_BRANCHES=$(git branch -r | grep -E "(autobot|automation/git-sync|cursor/check-fix-push-and-merge)" | head -50)

if [ -n "$OLD_BRANCHES" ]; then
    print_status "Found old branches to clean up..."
    
    for branch in $OLD_BRANCHES; do
        BRANCH_NAME=$(echo "$branch" | sed 's/origin\///')
        print_status "Cleaning up old branch: $BRANCH_NAME"
        
        # Try to delete the remote branch
        if run_with_timeout "git push origin --delete $BRANCH_NAME" 30; then
            print_success "Deleted old branch: $BRANCH_NAME"
        else
            print_warning "Could not delete old branch: $BRANCH_NAME"
        fi
    done
fi

# Now let's process the most recent branches (likely to be the most important)
print_status "Processing most recent branches..."

# Get recent branches (last 200)
RECENT_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | grep -v 'autobot' | grep -v 'automation/git-sync' | head -200 | sed 's/origin\///' | tr -d ' ')

if [ -z "$RECENT_BRANCHES" ]; then
    print_warning "No recent branches found to process"
    exit 0
fi

TOTAL_RECENT=$(echo "$RECENT_BRANCHES" | wc -l)
print_status "Found $TOTAL_RECENT recent branches to process"

# Create log file
LOG_FILE="smart-cleanup-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Smart cleanup started at $(date)" > "$LOG_FILE"

PROCESSED=0
SUCCESSFUL=0
FAILED=0

# Process recent branches
for branch in $RECENT_BRANCHES; do
    PROCESSED=$((PROCESSED + 1))
    print_status "[$PROCESSED/$TOTAL_RECENT] Processing: $branch"
    
    # Try to merge the branch directly into main
    if run_with_timeout "git merge origin/$branch --no-edit" 60; then
        print_success "Successfully merged $branch"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        echo "SUCCESS: $branch" >> "$LOG_FILE"
        
        # Push main every 20 successful merges
        if [ $((SUCCESSFUL % 20)) -eq 0 ]; then
            if run_with_timeout "git push origin main" 60; then
                print_success "Pushed main (checkpoint)"
            else
                print_warning "Failed to push main at checkpoint"
            fi
        fi
        
    else
        print_warning "Merge conflicts in $branch, attempting resolution..."
        
        # Check for conflicts
        CONFLICT_FILES=$(run_with_timeout "git diff --name-only --diff-filter=U" 10 2>/dev/null || echo "")
        
        if [ -n "$CONFLICT_FILES" ]; then
            # Resolve conflicts by taking our version
            for file in $CONFLICT_FILES; do
                run_with_timeout "git checkout --ours $file" 10 || true
                run_with_timeout "git add $file" 10 || true
            done
            
            # Commit resolution
            if run_with_timeout "git commit -m 'Resolved conflicts in $branch'" 30; then
                print_success "Resolved conflicts in $branch"
                SUCCESSFUL=$((SUCCESSFUL + 1))
                echo "SUCCESS (resolved): $branch" >> "$LOG_FILE"
            else
                print_error "Failed to commit resolution for $branch"
                run_with_timeout "git merge --abort" 10 || true
                FAILED=$((FAILED + 1))
                echo "FAILED (commit): $branch" >> "$LOG_FILE"
            fi
        else
            print_error "No conflicts found but merge failed for $branch"
            run_with_timeout "git merge --abort" 10 || true
            FAILED=$((FAILED + 1))
            echo "FAILED (no conflicts): $branch" >> "$LOG_FILE"
        fi
    fi
    
    # Progress update every 25 branches
    if [ $((PROCESSED % 25)) -eq 0 ]; then
        print_status "Progress: $PROCESSED/$TOTAL_RECENT processed, $SUCCESSFUL successful, $FAILED failed"
    fi
done

# Final push
print_status "Final push to main..."
if run_with_timeout "git push origin main" 60; then
    print_success "Final push successful"
else
    print_warning "Final push failed"
fi

# Clean up merged branches
print_status "Cleaning up merged branches..."
CLEANED=0
for branch in $RECENT_BRANCHES; do
    # Check if branch is merged
    if git branch -r --merged main | grep -q "origin/$branch"; then
        if run_with_timeout "git push origin --delete $branch" 30; then
            CLEANED=$((CLEANED + 1))
            print_success "Cleaned up merged branch: $branch"
        fi
    fi
done

# Final summary
print_success "🎉 Smart cleanup completed!"
print_status "Summary:"
print_status "- Branches processed: $PROCESSED"
print_status "- Successfully merged: $SUCCESSFUL"
print_status "- Failed: $FAILED"
print_status "- Branches cleaned up: $CLEANED"
print_status "- Log file: $LOG_FILE"

# Show repository status
print_status "Repository status:"
run_with_timeout "git status" 30 || true

# Show branch count
TOTAL_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | wc -l)
print_status "Remaining remote branches: $TOTAL_BRANCHES"

echo "Smart cleanup completed at $(date)" >> "$LOG_FILE"
print_success "✅ Smart branch cleanup completed!"