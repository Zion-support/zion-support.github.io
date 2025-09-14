#!/bin/bash

# Continue Merge Process Script
# This script continues merging remaining branches efficiently

set -e

echo "🚀 Continuing merge process for remaining branches..."

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

# Get remaining branches (focus on recent ones first)
print_status "Getting remaining branches to process..."
REMAINING_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | grep -v 'autobot' | grep -v 'automation/git-sync' | grep -v 'backup-main' | head -500 | sed 's/origin\///' | tr -d ' ')

if [ -z "$REMAINING_BRANCHES" ]; then
    print_warning "No remaining branches found to process"
    exit 0
fi

TOTAL_REMAINING=$(echo "$REMAINING_BRANCHES" | wc -l)
print_status "Found $TOTAL_REMAINING remaining branches to process"

# Create log file
LOG_FILE="continue-merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Continue merge started at $(date)" > "$LOG_FILE"

PROCESSED=0
SUCCESSFUL=0
FAILED=0

# Process branches in batches
BATCH_SIZE=25
print_status "Processing in batches of $BATCH_SIZE..."

# Convert to array for batch processing
IFS=$'\n' read -rd '' -a BRANCH_ARRAY <<< "$REMAINING_BRANCHES"

for ((i=0; i<${#BRANCH_ARRAY[@]}; i+=BATCH_SIZE)); do
    BATCH_NUM=$((i/BATCH_SIZE + 1))
    print_status "Processing batch $BATCH_NUM..."
    
    for ((j=i; j<i+BATCH_SIZE && j<${#BRANCH_ARRAY[@]}; j++)); do
        BRANCH="${BRANCH_ARRAY[j]}"
        PROCESSED=$((PROCESSED + 1))
        
        print_status "[$PROCESSED/$TOTAL_REMAINING] Processing: $BRANCH"
        
        # Try to merge the branch directly into main
        if run_with_timeout "git merge origin/$BRANCH --no-edit" 60; then
            print_success "Successfully merged $BRANCH"
            SUCCESSFUL=$((SUCCESSFUL + 1))
            echo "SUCCESS: $BRANCH" >> "$LOG_FILE"
            
        else
            print_warning "Merge conflicts in $BRANCH, attempting resolution..."
            
            # Check for conflicts
            CONFLICT_FILES=$(run_with_timeout "git diff --name-only --diff-filter=U" 10 2>/dev/null || echo "")
            
            if [ -n "$CONFLICT_FILES" ]; then
                # Resolve conflicts by taking our version
                for file in $CONFLICT_FILES; do
                    run_with_timeout "git checkout --ours $file" 10 || true
                    run_with_timeout "git add $file" 10 || true
                done
                
                # Commit resolution
                if run_with_timeout "git commit -m 'Resolved conflicts in $BRANCH'" 30; then
                    print_success "Resolved conflicts in $BRANCH"
                    SUCCESSFUL=$((SUCCESSFUL + 1))
                    echo "SUCCESS (resolved): $BRANCH" >> "$LOG_FILE"
                else
                    print_error "Failed to commit resolution for $BRANCH"
                    run_with_timeout "git merge --abort" 10 || true
                    FAILED=$((FAILED + 1))
                    echo "FAILED (commit): $BRANCH" >> "$LOG_FILE"
                fi
            else
                print_error "No conflicts found but merge failed for $BRANCH"
                run_with_timeout "git merge --abort" 10 || true
                FAILED=$((FAILED + 1))
                echo "FAILED (no conflicts): $BRANCH" >> "$LOG_FILE"
            fi
        fi
        
        # Progress update every 25 branches
        if [ $((PROCESSED % 25)) -eq 0 ]; then
            print_status "Progress: $PROCESSED/$TOTAL_REMAINING processed, $SUCCESSFUL successful, $FAILED failed"
        fi
    done
    
    # Push main after each batch
    print_status "Pushing main after batch $BATCH_NUM..."
    if run_with_timeout "git push origin main" 60; then
        print_success "Successfully pushed main after batch $BATCH_NUM"
    else
        print_warning "Failed to push main after batch $BATCH_NUM"
    fi
    
    # Brief pause between batches
    print_status "Batch $BATCH_NUM completed. Pausing briefly..."
    sleep 3
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
for branch in $REMAINING_BRANCHES; do
    # Check if branch is merged
    if git branch -r --merged main | grep -q "origin/$branch"; then
        if run_with_timeout "git push origin --delete $branch" 30; then
            CLEANED=$((CLEANED + 1))
            print_success "Cleaned up merged branch: $branch"
        fi
    fi
done

# Final summary
print_success "🎉 Continue merge process completed!"
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

echo "Continue merge completed at $(date)" >> "$LOG_FILE"
print_success "✅ Continue merge process completed!"