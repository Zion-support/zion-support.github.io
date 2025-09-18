#!/bin/bash

# Comprehensive PR Merge Script for Zion Tech Group
# This script handles bulk merging of open PRs with conflict resolution

set -e

echo "🚀 Starting comprehensive PR merge process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch_name="$1"
    local branch_ref="origin/$branch_name"
    
    print_status "Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/$branch_ref; then
        print_warning "Branch $branch_ref does not exist, skipping..."
        return 0  # Return 0 to continue processing other branches
    fi
    
    # Create a temporary branch for merging
    local temp_branch="merge-temp-$(date +%s)"
    
    print_status "Creating temporary branch: $temp_branch"
    git checkout -b "$temp_branch" main
    
    # Attempt to merge
    print_status "Attempting to merge $branch_ref into $temp_branch"
    
    if git merge "$branch_ref" --no-edit; then
        print_success "Successfully merged $branch_name"
        
        # Merge into main
        git checkout main
        if git merge "$temp_branch" --no-edit; then
            print_success "Successfully merged $branch_name into main"
            git branch -d "$temp_branch"
            return 0
        else
            print_error "Failed to merge $temp_branch into main"
            git merge --abort
            git checkout main
            git branch -d "$temp_branch"
            return 1
        fi
    else
        print_warning "Merge conflict detected for $branch_name, attempting resolution..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            print_status "Resolving conflicts for $branch_name"
            
            # Use our version for conflicts (keep main branch changes)
            git checkout --ours .
            git add .
            
            if git commit --no-edit; then
                print_success "Resolved conflicts for $branch_name"
                
                # Merge into main
                git checkout main
                if git merge "$temp_branch" --no-edit; then
                    print_success "Successfully merged $branch_name into main after conflict resolution"
                    git branch -d "$temp_branch"
                    return 0
                else
                    print_error "Failed to merge $temp_branch into main after conflict resolution"
                    git merge --abort
                    git checkout main
                    git branch -d "$temp_branch"
                    return 1
                fi
            else
                print_error "Failed to resolve conflicts for $branch_name"
                git merge --abort
                git checkout main
                git branch -d "$temp_branch"
                return 1
            fi
        else
            print_error "Unknown merge issue for $branch_name"
            git merge --abort
            git checkout main
            git branch -d "$temp_branch"
            return 1
        fi
    fi
}

# Function to clean up merged branches
cleanup_branches() {
    print_status "Cleaning up merged branches..."
    
    # Get list of merged branches
    local merged_branches=$(git branch -r --merged main | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/origin\///')
    
    for branch in $merged_branches; do
        if [[ $branch == cursor/* ]] || [[ $branch == feat/* ]] || [[ $branch == feature/* ]]; then
            print_status "Cleaning up merged branch: $branch"
            git push origin --delete "$branch" 2>/dev/null || true
        fi
    done
    
    print_success "Branch cleanup completed"
}

# Main execution
main() {
    print_status "Starting bulk PR merge process..."
    
    # Ensure we're on main branch
    git checkout main
    git pull origin main
    
    # List of priority branches to merge (most recent and important)
    local priority_branches=(
        "cursor/fix-netlify-build-and-merge-to-main-9360"
        "cursor/fix-netlify-build-and-merge-to-main-e609"
        "feature/content-2025-09-16"
        "cursor/fix-netlify-build-and-merge-to-main-ccbb"
        "cursor/fix-netlify-build-and-merge-to-main-e408"
        "cursor/fix-netlify-build-and-merge-to-main-f88d"
        "cursor/fix-netlify-build-and-merge-to-main-9226"
        "cursor/fix-netlify-build-and-merge-to-main-e838"
        "feat/clean-updates-content"
        "feature/ai-ops-post-and-homepage-promo"
        "performance-optimizations"
        "feat/new-content-sept-2025"
    )
    
    local success_count=0
    local total_count=${#priority_branches[@]}
    
    print_status "Processing $total_count priority branches..."
    
    for branch in "${priority_branches[@]}"; do
        echo "Processing branch: $branch"
        if merge_branch "$branch"; then
            ((success_count++))
            echo "Successfully processed: $branch"
        else
            echo "Failed to process: $branch"
        fi
        
        # Small delay to avoid overwhelming the system
        sleep 1
    done
    
    print_status "Merge process completed: $success_count/$total_count branches merged successfully"
    
    # Push changes to main
    print_status "Pushing changes to main branch..."
    if git push origin main; then
        print_success "Successfully pushed changes to main branch"
    else
        print_error "Failed to push changes to main branch"
        exit 1
    fi
    
    # Cleanup merged branches
    cleanup_branches
    
    print_success "Bulk PR merge process completed successfully!"
}

# Run main function
main "$@"