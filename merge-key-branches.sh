#!/bin/bash

# Script to merge key branches into main
set -e

echo "🚀 Starting key branch merge process..."

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

# Key branches to merge (prioritized list)
KEY_BRANCHES=(
    "origin/clean-main"
    "origin/clean-main-2"
    "origin/clean-main-integration"
    "origin/comprehensive-improvements-final"
    "origin/comprehensive-improvements-final-v2"
    "origin/clean-improvements-main"
    "origin/clean-merge-main"
    "origin/clean-merge-final"
    "origin/comprehensive-merge-all-prs"
    "origin/comprehensive-merge-all-prs-final"
)

# Function to merge a branch
merge_branch() {
    local branch_name=$1
    
    print_status "Processing branch: ${branch_name}"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/${branch_name}; then
        print_warning "Branch ${branch_name} not found, skipping..."
        return 1
    fi
    
    # Fetch the latest changes
    print_status "Fetching latest changes..."
    git fetch origin
    
    # Try to merge the branch
    print_status "Attempting to merge ${branch_name} into main..."
    
    if git merge ${branch_name} --no-ff -m "Merge ${branch_name} into main"; then
        print_success "Successfully merged ${branch_name}"
        return 0
    else
        print_warning "Merge conflict detected in ${branch_name}"
        
        # Try to resolve conflicts automatically
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            print_status "Resolving merge conflicts automatically..."
            
            for file in $conflicted_files; do
                print_status "Resolving conflicts in ${file}..."
                
                # Use main version for most files
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Complete the merge
            if git commit --no-edit; then
                print_success "Successfully resolved conflicts and merged ${branch_name}"
                return 0
            else
                print_error "Failed to resolve conflicts for ${branch_name}"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            print_error "Failed to merge ${branch_name}"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Main execution
main() {
    print_status "Starting key branch merge process"
    
    # Ensure we're on main branch
    print_status "Switching to main branch..."
    git checkout main
    git pull origin main || true
    
    successful_merges=0
    failed_merges=0
    
    # Merge each key branch
    for branch in "${KEY_BRANCHES[@]}"; do
        if merge_branch "$branch"; then
            ((successful_merges++))
        else
            ((failed_merges++))
        fi
    done
    
    # Push all changes
    print_status "Pushing all merged changes to origin..."
    git push origin main --force-with-lease
    
    print_success "Key branch merge process completed!"
    print_status "Successful merges: ${successful_merges}"
    print_status "Failed merges: ${failed_merges}"
}

# Run the main function
main "$@"