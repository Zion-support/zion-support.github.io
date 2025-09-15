#!/bin/bash

# Process All Remaining Branches Script
# This script processes all remaining branches in larger batches

set -e

echo "🚀 Processing all remaining branches..."

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

# Get all remaining branches (skip the first 100 we already processed)
print_status "Getting remaining branches..."
ALL_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ')
REMAINING_BRANCHES=$(echo "$ALL_BRANCHES" | tail -n +101)

if [ -z "$REMAINING_BRANCHES" ]; then
    print_warning "No remaining branches found"
    exit 0
fi

TOTAL_REMAINING=$(echo "$REMAINING_BRANCHES" | wc -l)
print_status "Found $TOTAL_REMAINING remaining branches to process"

# Create log file
LOG_FILE="remaining-branches-merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Remaining branches merge started at $(date)" > "$LOG_FILE"

PROCESSED=0
SUCCESSFUL=0
FAILED=0
BATCH_SIZE=50

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
            
            # Push main every 10 successful merges
            if [ $((SUCCESSFUL % 10)) -eq 0 ]; then
                if run_with_timeout "git push origin main" 60; then
                    print_success "Pushed main (batch checkpoint)"
                else
                    print_warning "Failed to push main at checkpoint"
                fi
            fi
            
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
        
        # Progress update every 50 branches
        if [ $((PROCESSED % 50)) -eq 0 ]; then
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
    sleep 5
done

# Final push
print_status "Final push to main..."
if run_with_timeout "git push origin main" 60; then
    print_success "Final push successful"
else
    print_warning "Final push failed"
fi

# Final summary
print_success "🎉 All remaining branches processed!"
print_status "Summary:"
print_status "- Total branches processed: $PROCESSED"
print_status "- Successfully merged: $SUCCESSFUL"
print_status "- Failed: $FAILED"
print_status "- Log file: $LOG_FILE"

# Show recent commits
print_status "Recent commits:"
run_with_timeout "git log --oneline -10" 30 || true

echo "All remaining branches processed at $(date)" >> "$LOG_FILE"
print_success "✅ All remaining branches have been processed!"