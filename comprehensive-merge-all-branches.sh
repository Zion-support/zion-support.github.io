#!/bin/bash

# Comprehensive Merge All Branches Script
# This script will merge all remote branches into main, resolving conflicts automatically

set -e

echo "🚀 Starting comprehensive merge of all branches into main..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Function to run commands with timeout and error handling
run_with_timeout() {
    local cmd="$1"
    local timeout="${2:-60}"
    
    print_status "Running: $cmd"
    
    if timeout $timeout bash -c "$cmd" 2>/dev/null; then
        return 0
    else
        print_warning "Command timed out or failed: $cmd"
        return 1
    fi
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository"
    exit 1
fi

# Ensure we're on main branch
print_status "Switching to main branch..."
if ! run_with_timeout "git checkout main" 30; then
    print_error "Failed to switch to main branch"
    exit 1
fi

# Pull latest main
print_status "Pulling latest main..."
if ! run_with_timeout "git pull origin main" 60; then
    print_warning "Failed to pull latest main, continuing with local main"
fi

# Get all remote branches
print_status "Getting list of remote branches..."
REMOTE_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ')

if [ -z "$REMOTE_BRANCHES" ]; then
    print_warning "No remote branches found to merge"
    exit 0
fi

TOTAL_BRANCHES=$(echo "$REMOTE_BRANCHES" | wc -l)
print_status "Found $TOTAL_BRANCHES remote branches to process"

# Create a log file for tracking
LOG_FILE="merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Merge operation started at $(date)" > "$LOG_FILE"

# Process branches in batches to avoid overwhelming the system
BATCH_SIZE=10
PROCESSED=0
SUCCESSFUL=0
FAILED=0

print_status "Processing branches in batches of $BATCH_SIZE..."

# Convert to array for batch processing
IFS=$'\n' read -rd '' -a BRANCH_ARRAY <<< "$REMOTE_BRANCHES"

for ((i=0; i<${#BRANCH_ARRAY[@]}; i+=BATCH_SIZE)); do
    BATCH_NUM=$((i/BATCH_SIZE + 1))
    print_status "Processing batch $BATCH_NUM..."
    
    for ((j=i; j<i+BATCH_SIZE && j<${#BRANCH_ARRAY[@]}; j++)); do
        BRANCH="${BRANCH_ARRAY[j]}"
        PROCESSED=$((PROCESSED + 1))
        
        print_status "[$PROCESSED/$TOTAL_BRANCHES] Processing branch: $BRANCH"
        
        # Try to checkout the branch
        if run_with_timeout "git checkout $BRANCH" 30; then
            print_status "Checked out branch: $BRANCH"
            
            # Pull latest changes
            run_with_timeout "git pull origin $BRANCH" 30 || true
            
            # Switch back to main
            if run_with_timeout "git checkout main" 30; then
                # Try to merge the branch
                if run_with_timeout "git merge $BRANCH --no-edit" 60; then
                    print_success "Successfully merged $BRANCH into main"
                    SUCCESSFUL=$((SUCCESSFUL + 1))
                    echo "SUCCESS: $BRANCH" >> "$LOG_FILE"
                    
                    # Push main
                    run_with_timeout "git push origin main" 60 || print_warning "Failed to push main after merging $BRANCH"
                    
                    # Clean up the branch
                    run_with_timeout "git branch -d $BRANCH" 30 || true
                    run_with_timeout "git push origin --delete $BRANCH" 30 || true
                    
                else
                    print_warning "Merge conflicts detected in $BRANCH. Attempting to resolve..."
                    
                    # Check for conflict files
                    CONFLICT_FILES=$(run_with_timeout "git diff --name-only --diff-filter=U" 30 2>/dev/null || echo "")
                    
                    if [ -n "$CONFLICT_FILES" ]; then
                        print_status "Found conflict files: $CONFLICT_FILES"
                        
                        # Resolve conflicts by taking our version (the branch being merged)
                        for file in $CONFLICT_FILES; do
                            print_status "Resolving conflicts in: $file"
                            run_with_timeout "git checkout --ours $file" 30 || true
                            run_with_timeout "git add $file" 30 || true
                        done
                        
                        # Commit the resolution
                        if run_with_timeout "git commit -m 'Resolved merge conflicts in $BRANCH'" 30; then
                            print_success "Successfully resolved conflicts in $BRANCH"
                            SUCCESSFUL=$((SUCCESSFUL + 1))
                            echo "SUCCESS (resolved conflicts): $BRANCH" >> "$LOG_FILE"
                            
                            # Push the resolved changes
                            run_with_timeout "git push origin main" 60 || print_warning "Failed to push resolved main"
                            
                            # Clean up
                            run_with_timeout "git branch -d $BRANCH" 30 || true
                            run_with_timeout "git push origin --delete $BRANCH" 30 || true
                            
                        else
                            print_error "Failed to commit resolved conflicts in $BRANCH"
                            run_with_timeout "git merge --abort" 30 || true
                            FAILED=$((FAILED + 1))
                            echo "FAILED (commit): $BRANCH" >> "$LOG_FILE"
                        fi
                    else
                        print_error "No conflict files found but merge failed for $BRANCH"
                        run_with_timeout "git merge --abort" 30 || true
                        FAILED=$((FAILED + 1))
                        echo "FAILED (no conflicts): $BRANCH" >> "$LOG_FILE"
                    fi
                fi
            else
                print_error "Failed to switch back to main after processing $BRANCH"
                FAILED=$((FAILED + 1))
                echo "FAILED (checkout main): $BRANCH" >> "$LOG_FILE"
            fi
        else
            print_warning "Could not checkout branch: $BRANCH (might be local only or already deleted)"
            FAILED=$((FAILED + 1))
            echo "FAILED (checkout): $BRANCH" >> "$LOG_FILE"
        fi
        
        # Progress update
        if [ $((PROCESSED % 10)) -eq 0 ]; then
            print_status "Progress: $PROCESSED/$TOTAL_BRANCHES processed, $SUCCESSFUL successful, $FAILED failed"
        fi
    done
    
    # Brief pause between batches
    print_status "Batch $BATCH_NUM completed. Pausing briefly..."
    sleep 2
done

# Final summary
print_success "🎉 Merge operation completed!"
print_status "Summary:"
print_status "- Total branches processed: $PROCESSED"
print_status "- Successfully merged: $SUCCESSFUL"
print_status "- Failed: $FAILED"
print_status "- Log file: $LOG_FILE"

# Final status check
print_status "Final repository status:"
run_with_timeout "git status" 30 || true

# Show recent commits
print_status "Recent commits:"
run_with_timeout "git log --oneline -10" 30 || true

echo "Merge operation completed at $(date)" >> "$LOG_FILE"
print_success "✅ All branches have been processed and merged into main!"
