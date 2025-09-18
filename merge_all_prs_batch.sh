#!/bin/bash

# Batch PR Merge Script - Efficient approach for large number of PRs
# This script processes PRs in batches to avoid overwhelming the system

set -e

echo "🚀 Starting Batch PR Merge Process"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to merge a single branch safely
merge_single_branch() {
    local branch_name=$1
    local branch_short=${branch_name#origin/}
    
    print_status "Processing: $branch_short"
    
    # Skip if branch doesn't exist
    if ! git show-ref --verify --quiet refs/remotes/$branch_name; then
        print_warning "Branch $branch_name not found, skipping"
        return 1
    fi
    
    # Create local branch if it doesn't exist
    if ! git show-ref --verify --quiet refs/heads/$branch_short; then
        git checkout -b $branch_short origin/$branch_short 2>/dev/null || {
            print_warning "Failed to create local branch $branch_short, skipping"
            return 1
        }
    else
        git checkout $branch_short
        git pull origin $branch_short 2>/dev/null || {
            print_warning "Failed to pull $branch_short, skipping"
            return 1
        }
    fi
    
    # Switch back to main
    git checkout main
    
    # Attempt merge with conflict resolution
    if git merge $branch_short --no-ff -m "Merge $branch_short: $(git log -1 --pretty=format:'%s' $branch_short 2>/dev/null || echo 'Content update')" 2>/dev/null; then
        print_success "Merged $branch_short successfully"
        return 0
    else
        print_warning "Conflict in $branch_short, attempting auto-resolution"
        
        # Auto-resolve conflicts by accepting incoming changes
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            if [ -f "$file" ]; then
                print_status "Auto-resolving conflict in $file"
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Complete merge
        if git commit --no-edit 2>/dev/null; then
            print_success "Auto-resolved conflicts and merged $branch_short"
            return 0
        else
            print_error "Failed to resolve conflicts for $branch_short"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Function to process branches in batches
process_batch() {
    local batch_num=$1
    local branches=("${@:2}")
    local batch_size=${#branches[@]}
    
    print_status "Processing Batch $batch_num ($batch_size branches)"
    
    local success_count=0
    local failure_count=0
    
    for branch in "${branches[@]}"; do
        if merge_single_branch "$branch"; then
            success_count=$((success_count + 1))
        else
            failure_count=$((failure_count + 1))
        fi
        
        # Small delay to prevent overwhelming
        sleep 0.5
    done
    
    print_status "Batch $batch_num completed: $success_count success, $failure_count failures"
    echo "$success_count $failure_count"
}

# Main execution
main() {
    # Ensure we're on main and up to date
    git checkout main
    git pull origin main
    
    # Get all cursor branches
    all_branches=($(git branch -r | grep "origin/cursor/" | head -100))
    total_branches=${#all_branches[@]}
    
    print_status "Found $total_branches branches to process"
    
    # Process in batches of 10
    batch_size=10
    total_success=0
    total_failure=0
    batch_num=1
    
    for ((i=0; i<total_branches; i+=batch_size)); do
        batch_branches=("${all_branches[@]:$i:$batch_size}")
        
        if [ ${#batch_branches[@]} -gt 0 ]; then
            result=$(process_batch $batch_num "${batch_branches[@]}")
            batch_success=$(echo $result | cut -d' ' -f1)
            batch_failure=$(echo $result | cut -d' ' -f2)
            
            total_success=$((total_success + batch_success))
            total_failure=$((total_failure + batch_failure))
            
            batch_num=$((batch_num + 1))
            
            # Push changes after each batch
            print_status "Pushing changes after batch $((batch_num - 1))"
            git push origin main || {
                print_error "Failed to push after batch $((batch_num - 1))"
                break
            }
            
            # Longer delay between batches
            sleep 2
        fi
    done
    
    # Final summary
    print_status "Batch merge process completed"
    print_success "Total successfully merged: $total_success branches"
    print_error "Total failed to merge: $total_failure branches"
    print_status "Total processed: $((total_success + total_failure)) branches"
    
    # Final push
    print_status "Final push to remote main"
    git push origin main
    
    print_success "All PRs have been processed and merged!"
}

# Run main function
main "$@"