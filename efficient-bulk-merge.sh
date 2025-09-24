#!/bin/bash

# Efficient Bulk Merge Script
# This script processes branches in a more efficient way

set -e

echo "🚀 Starting efficient bulk merge process..."

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

# Get a sample of branches to process (first 100)
print_status "Getting sample of branches to process..."
SAMPLE_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | head -100 | sed 's/origin\///' | tr -d ' ')

if [ -z "$SAMPLE_BRANCHES" ]; then
    print_warning "No branches found to process"
    exit 0
fi

TOTAL_BRANCHES=$(echo "$SAMPLE_BRANCHES" | wc -l)
print_status "Processing $TOTAL_BRANCHES sample branches..."

# Create log file
LOG_FILE="efficient-merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Efficient merge started at $(date)" > "$LOG_FILE"

PROCESSED=0
SUCCESSFUL=0
FAILED=0

# Process each branch
for branch in $SAMPLE_BRANCHES; do
    PROCESSED=$((PROCESSED + 1))
    print_status "[$PROCESSED/$TOTAL_BRANCHES] Processing: $branch"
    
    # Try to merge the branch directly into main
    if run_with_timeout "git merge origin/$branch --no-edit" 60; then
        print_success "Successfully merged $branch"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        echo "SUCCESS: $branch" >> "$LOG_FILE"
        
        # Push main
        if run_with_timeout "git push origin main" 60; then
            print_success "Pushed main with $branch"
        else
            print_warning "Failed to push main after merging $branch"
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
                
                # Push
                run_with_timeout "git push origin main" 60 || true
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
    
    # Progress update every 10 branches
    if [ $((PROCESSED % 10)) -eq 0 ]; then
        print_status "Progress: $PROCESSED/$TOTAL_BRANCHES processed, $SUCCESSFUL successful, $FAILED failed"
    fi
done

# Final summary
print_success "🎉 Sample merge completed!"
print_status "Summary:"
print_status "- Branches processed: $PROCESSED"
print_status "- Successfully merged: $SUCCESSFUL"
print_status "- Failed: $FAILED"
print_status "- Log file: $LOG_FILE"

echo "Sample merge completed at $(date)" >> "$LOG_FILE"
print_success "✅ Sample merge process completed!"