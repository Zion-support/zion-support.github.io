#!/bin/bash

# Comprehensive PR Merge Script for Zion Tech Group
# This script will merge all open PRs systematically

set -e

echo "🚀 Starting Comprehensive PR Merge Process"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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
    
    print_status "Processing branch: $branch_short"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch_short; then
        print_warning "Branch $branch_short already exists locally, switching to it"
        git checkout $branch_short
        git pull origin $branch_short
    else
        print_status "Creating local branch $branch_short from origin/$branch_short"
        git checkout -b $branch_short origin/$branch_short
    fi
    
    # Switch back to main
    git checkout main
    
    # Try to merge the branch
    print_status "Attempting to merge $branch_short into main"
    
    if git merge $branch_short --no-ff -m "Merge $branch_short into main"; then
        print_success "Successfully merged $branch_short"
        return 0
    else
        print_warning "Merge conflict detected for $branch_short, attempting to resolve"
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            print_status "Resolving conflicts for $branch_short"
            
            # Try to resolve conflicts automatically
            # For most cases, we'll accept the incoming changes
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                print_status "Resolving conflict in $file"
                # Accept the incoming version (theirs) for most conflicts
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Try to complete the merge
            if git commit --no-edit; then
                print_success "Successfully resolved conflicts and merged $branch_short"
                return 0
            else
                print_error "Failed to resolve conflicts for $branch_short"
                git merge --abort
                return 1
            fi
        else
            print_error "Unknown merge issue for $branch_short"
            git merge --abort
            return 1
        fi
    fi
}

# Function to get all cursor branches
get_cursor_branches() {
    git branch -r | grep "origin/cursor/" | grep -v "origin/cursor/create-and-deploy-new-content-dbbb" | head -50
}

# Main execution
main() {
    print_status "Starting comprehensive PR merge process"
    
    # Ensure we're on main branch
    git checkout main
    git pull origin main
    
    # Get list of branches to merge
    branches=$(get_cursor_branches)
    total_branches=$(echo "$branches" | wc -l)
    
    print_status "Found $total_branches branches to process"
    
    # Counter for tracking
    success_count=0
    failure_count=0
    processed_count=0
    
    # Process each branch
    while IFS= read -r branch; do
        if [ -n "$branch" ]; then
            processed_count=$((processed_count + 1))
            print_status "Processing $processed_count/$total_branches: $branch"
            
            if merge_branch "$branch"; then
                success_count=$((success_count + 1))
                print_success "Branch $branch merged successfully"
            else
                failure_count=$((failure_count + 1))
                print_error "Failed to merge branch $branch"
            fi
            
            # Small delay to prevent overwhelming the system
            sleep 1
        fi
    done <<< "$branches"
    
    # Summary
    print_status "Merge process completed"
    print_success "Successfully merged: $success_count branches"
    print_error "Failed to merge: $failure_count branches"
    print_status "Total processed: $processed_count branches"
    
    # Push changes to remote
    print_status "Pushing merged changes to remote main"
    if git push origin main; then
        print_success "Successfully pushed all changes to remote main"
    else
        print_error "Failed to push changes to remote main"
        exit 1
    fi
    
    # Clean up local branches
    print_status "Cleaning up local branches"
    git branch | grep -v "main" | xargs -r git branch -D
    
    print_success "Comprehensive PR merge process completed!"
}

# Run main function
main "$@"