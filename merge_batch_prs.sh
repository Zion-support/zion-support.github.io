#!/bin/bash

# Batch PR Merge Script
# Merge specific batches of PRs

set -e

echo "🚀 Starting Batch PR Merge Process"
echo "================================="

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
    if git merge $branch_short --no-ff -m "Merge $branch_short: Batch content integration"; then
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
    
    # Batch branches to merge
    batch_branches=(
        "origin/cursor/add-new-services-and-advertise-them-2aff"
        "origin/cursor/add-new-services-and-advertise-them-2c0b"
        "origin/cursor/add-new-services-and-advertise-them-2d60"
        "origin/cursor/add-new-services-and-advertise-them-2e38"
        "origin/cursor/add-new-services-and-advertise-them-2ead"
        "origin/cursor/add-new-services-and-advertise-them-2eea"
        "origin/cursor/add-new-services-and-advertise-them-2f1e"
        "origin/cursor/add-new-services-and-advertise-them-3272"
        "origin/cursor/add-new-services-and-advertise-them-3275"
        "origin/cursor/add-new-services-and-advertise-them-33b5"
        "origin/cursor/add-new-services-and-advertise-them-3486"
        "origin/cursor/add-new-services-and-advertise-them-3727"
        "origin/cursor/add-new-services-and-advertise-them-37b4"
        "origin/cursor/add-new-services-and-advertise-them-37f7"
        "origin/cursor/add-new-services-and-advertise-them-3817"
        "origin/cursor/add-new-services-and-advertise-them-3845"
        "origin/cursor/add-new-services-and-advertise-them-3892"
        "origin/cursor/add-new-services-and-advertise-them-3955"
        "origin/cursor/add-new-services-and-advertise-them-39c4"
        "origin/cursor/add-new-services-and-advertise-them-3b44"
        "origin/cursor/add-new-services-and-advertise-them-403d"
        "origin/cursor/add-new-services-and-advertise-them-407b"
        "origin/cursor/add-new-services-and-advertise-them-4150"
        "origin/cursor/add-new-services-and-advertise-them-418b"
        "origin/cursor/add-new-services-and-advertise-them-43a3"
        "origin/cursor/add-new-services-and-advertise-them-44d5"
        "origin/cursor/add-new-services-and-advertise-them-44eb"
        "origin/cursor/add-new-services-and-advertise-them-465c"
        "origin/cursor/add-new-services-and-advertise-them-4cac"
        "origin/cursor/add-new-services-and-advertise-them-4ce1"
        "origin/cursor/add-new-services-and-advertise-them-4d46"
        "origin/cursor/add-new-services-and-advertise-them-4d88"
        "origin/cursor/add-new-services-and-advertise-them-4e16"
        "origin/cursor/add-new-services-and-advertise-them-4ec5"
        "origin/cursor/add-new-services-and-advertise-them-4f4f"
        "origin/cursor/add-new-services-and-advertise-them-505b"
        "origin/cursor/add-new-services-and-advertise-them-5120"
        "origin/cursor/add-new-services-and-advertise-them-5132"
        "origin/cursor/add-new-services-and-advertise-them-541b"
        "origin/cursor/add-new-services-and-advertise-them-585e"
        "origin/cursor/add-new-services-and-advertise-them-58e7"
        "origin/cursor/add-new-services-and-advertise-them-59c4"
        "origin/cursor/add-new-services-and-advertise-them-59e7"
        "origin/cursor/add-new-services-and-advertise-them-5f24"
        "origin/cursor/add-new-services-and-advertise-them-60c5"
        "origin/cursor/add-new-services-and-advertise-them-6197"
        "origin/cursor/add-new-services-and-advertise-them-61f3"
        "origin/cursor/add-new-services-and-advertise-them-6239"
        "origin/cursor/add-new-services-and-advertise-them-650b"
        "origin/cursor/add-new-services-and-advertise-them-65bc"
    )
    
    success_count=0
    failure_count=0
    
    for branch in "${batch_branches[@]}"; do
        if merge_branch "$branch"; then
            success_count=$((success_count + 1))
        else
            failure_count=$((failure_count + 1))
        fi
        
        # Push every 10 merges
        if [ $((success_count + failure_count)) -gt 0 ] && [ $((success_count + failure_count)) % 10 -eq 0 ]; then
            print_status "Pushing changes after $((success_count + failure_count)) merges"
            git push origin main
        fi
    done
    
    # Final push
    print_status "Pushing final merged changes to remote main"
    git push origin main
    
    # Summary
    print_status "Batch PRs merge completed"
    print_success "Successfully merged: $success_count branches"
    print_error "Failed to merge: $failure_count branches"
}

# Run main function
main "$@"