#!/bin/bash

# Batch Merge Script - Handle branches in smaller batches
set -e

echo "🚀 Starting Batch Merge Process"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[$(date '+%H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to merge a single branch with conflict resolution
merge_single_branch() {
    local branch=$1
    print_status "Merging $branch..."
    
    # Fetch the branch
    if ! git fetch origin "$branch"; then
        print_warning "Could not fetch $branch, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        print_success "Merged $branch successfully"
        return 0
    fi
    
    # Handle conflicts
    print_warning "Conflicts in $branch, resolving..."
    
    # Resolve conflicts by keeping main branch version for most files
    git checkout --ours . 2>/dev/null || true
    git add . 2>/dev/null || true
    
    # Commit the merge
    if git commit -m "Merge $branch with conflict resolution" 2>/dev/null; then
        print_success "Resolved conflicts and merged $branch"
        return 0
    fi
    
    # If still failing, abort and skip
    git merge --abort 2>/dev/null || true
    print_warning "Failed to merge $branch, skipping..."
    return 1
}

# Get branches in smaller batches
get_branch_batch() {
    local start=$1
    local count=$2
    
    git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | sed -n "${start},$(($start + $count - 1))p"
}

# Main batch processing
process_batches() {
    local batch_size=5
    local batch_num=1
    local start=1
    
    while true; do
        print_status "Processing batch $batch_num (branches $start to $((start + batch_size - 1)))"
        
        local branches=$(get_branch_batch $start $batch_size)
        
        if [ -z "$branches" ]; then
            print_success "No more branches to process"
            break
        fi
        
        local batch_success=0
        local batch_total=0
        
        echo "$branches" | while IFS= read -r branch; do
            if [ -n "$branch" ]; then
                batch_total=$((batch_total + 1))
                if merge_single_branch "$branch"; then
                    batch_success=$((batch_success + 1))
                fi
            fi
        done
        
        print_status "Batch $batch_num completed: $batch_success/$batch_total successful"
        
        # Push after each batch
        if git push origin main; then
            print_success "Pushed batch $batch_num changes"
        else
            print_warning "Failed to push batch $batch_num"
        fi
        
        start=$((start + batch_size))
        batch_num=$((batch_num + 1))
        
        # Safety check - don't process more than 50 batches
        if [ $batch_num -gt 50 ]; then
            print_warning "Reached batch limit, stopping"
            break
        fi
    done
}

# Start processing
print_status "Starting batch merge process..."
git checkout main
git pull origin main

process_batches

print_success "Batch merge process completed!"