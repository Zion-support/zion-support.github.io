#!/bin/bash

# Priority PR Merge Script
# Focus on the most important and recent PRs

set -e

echo "🚀 Starting Priority PR Merge Process"
echo "===================================="

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
        git pull origin $branch_short
    else
        git checkout -b $branch_short origin/$branch_short
    fi
    
    # Switch back to main
    git checkout main
    
    # Attempt merge
    if git merge $branch_short --no-ff -m "Merge $branch_short: Priority content integration"; then
        print_success "Merged $branch_short successfully"
        return 0
    else
        print_warning "Conflict in $branch_short, resolving..."
        
        # Auto-resolve conflicts
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
    # Ensure we're on main
    git checkout main
    git pull origin main
    
    # Priority branches to merge (most important first)
    priority_branches=(
        "origin/cursor/add-and-advertise-new-services-then-build-6afb"
        "origin/cursor/add-and-advertise-new-services-then-build-6d14"
        "origin/cursor/add-and-advertise-new-services-then-build-7683"
        "origin/cursor/add-and-advertise-new-services-then-build-99f7"
        "origin/cursor/add-and-advertise-new-services-then-build-b3c7"
        "origin/cursor/add-and-advertise-new-services-then-build-bb33"
        "origin/cursor/add-and-advertise-new-services-then-build-da38"
        "origin/cursor/add-new-services-and-advertise-them-0a0a"
        "origin/cursor/add-new-services-and-advertise-them-0a1b"
        "origin/cursor/add-new-services-and-advertise-them-0a2c"
        "origin/cursor/add-new-services-and-advertise-them-0a3d"
        "origin/cursor/add-new-services-and-advertise-them-0a4e"
        "origin/cursor/add-new-services-and-advertise-them-0a5f"
        "origin/cursor/add-new-services-and-advertise-them-0a6g"
        "origin/cursor/add-new-services-and-advertise-them-0a7h"
        "origin/cursor/add-new-services-and-advertise-them-0a8i"
        "origin/cursor/add-new-services-and-advertise-them-0a9j"
        "origin/cursor/add-new-services-and-advertise-them-0aak"
        "origin/cursor/add-new-services-and-advertise-them-0abl"
        "origin/cursor/add-new-services-and-advertise-them-0acm"
    )
    
    success_count=0
    failure_count=0
    
    for branch in "${priority_branches[@]}"; do
        if merge_branch "$branch"; then
            success_count=$((success_count + 1))
        else
            failure_count=$((failure_count + 1))
        fi
        
        # Push every 5 merges
        if [ $((success_count + failure_count)) -gt 0 ] && [ $((success_count + failure_count)) % 5 -eq 0 ]; then
            print_status "Pushing changes after $((success_count + failure_count)) merges"
            git push origin main
        fi
    done
    
    # Final push
    print_status "Pushing final merged changes to remote main"
    git push origin main
    
    # Summary
    print_status "Priority PRs merge completed"
    print_success "Successfully merged: $success_count branches"
    print_error "Failed to merge: $failure_count branches"
}

# Run main function
main "$@"