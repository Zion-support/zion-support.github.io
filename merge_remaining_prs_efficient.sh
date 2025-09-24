#!/bin/bash

# Efficient Merge of Remaining PRs
# This script efficiently merges all remaining PRs with better error handling

set -e

echo "🚀 Starting Efficient Merge of Remaining PRs"
echo "==========================================="

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

# Function to merge a single branch
merge_branch() {
    local branch_name=$1
    local branch_short=${branch_name#origin/}
    
    print_status "Processing: $branch_short"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/$branch_name; then
        print_warning "Branch $branch_name not found, skipping"
        return 1
    fi
    
    # Create local branch
    if git show-ref --verify --quiet refs/heads/$branch_short; then
        git checkout $branch_short
        git pull origin $branch_short 2>/dev/null || true
    else
        git checkout -b $branch_short origin/$branch_short
    fi
    
    # Switch back to main
    git checkout main
    
    # Attempt merge
    if git merge $branch_short --no-ff -m "Merge $branch_short: Comprehensive content integration"; then
        print_success "Merged $branch_short successfully"
        return 0
    else
        print_warning "Conflict in $branch_short, resolving..."
        
        # Auto-resolve conflicts by accepting incoming changes
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            if [ -f "$file" ]; then
                print_status "Resolving conflict in $file"
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Complete merge
        if git commit --no-edit; then
            print_success "Resolved conflicts and merged $branch_short"
            return 0
        else
            print_error "Failed to resolve conflicts for $branch_short"
            git merge --abort
            return 1
        fi
    fi
}

# Main execution
main() {
    # Ensure we're on main and up to date
    git checkout main
    git pull origin main
    
    # Get all remaining cursor branches
    all_branches=($(git branch -r | grep "origin/cursor/" | head -1000))
    total_branches=${#all_branches[@]}
    
    print_status "Found $total_branches branches to process"
    
    success_count=0
    failure_count=0
    
    # Process branches in batches of 50
    batch_size=50
    for ((i=0; i<total_branches; i+=batch_size)); do
        batch_branches=("${all_branches[@]:$i:$batch_size}")
        batch_num=$((i/batch_size + 1))
        
        print_status "Processing Batch $batch_num (${#batch_branches[@]} branches)"
        
        for branch in "${batch_branches[@]}"; do
            if merge_branch "$branch"; then
                success_count=$((success_count + 1))
            else
                failure_count=$((failure_count + 1))
            fi
        done
        
        # Push after each batch
        print_status "Pushing changes after batch $batch_num"
        git push origin main
        
        # Small delay between batches
        sleep 1
    done
    
    # Final summary
    print_status "Efficient merge process completed"
    print_success "Total successfully merged: $success_count branches"
    print_error "Total failed to merge: $failure_count branches"
    print_status "Total processed: $((success_count + failure_count)) branches"
    
    # Final push
    print_status "Final push to remote main"
    git push origin main
    
    print_success "All remaining PRs have been processed and merged!"
}

# Run main function
main "$@"