#!/bin/bash

# Comprehensive script to merge all cursor branches into main
set -e

echo "🚀 Starting comprehensive branch merge process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1" 1>&2
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" 1>&2
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" 1>&2
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1" 1>&2
}

# Function to resolve merge conflicts automatically
resolve_conflicts() {
    local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
    
    if [ -z "$conflicted_files" ]; then
        return 0
    fi
    
    print_status "Resolving conflicts in: $conflicted_files"
    
    for file in $conflicted_files; do
        print_status "Processing conflict in: $file"
        
        # Handle different types of files
        if [[ "$file" == *"package.json"* ]] || [[ "$file" == *"package-lock.json"* ]] || [[ "$file" == *"pnpm-lock.yaml"* ]]; then
            print_status "Using main version for dependency file: $file"
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *".backup"* ]] || [[ "$file" == *"backup"* ]] || [[ "$file" == *"conflict_backup"* ]]; then
            print_status "Removing backup file: $file"
            git rm "$file" 2>/dev/null || rm -f "$file"
        elif [[ "$file" == *"README"* ]] || [[ "$file" == *".md"* ]]; then
            print_status "Using main version for documentation: $file"
            git checkout --ours "$file" 2>/dev/null || true
        else
            # For other files, try to use main version
            print_status "Using main version for: $file"
            git checkout --ours "$file" 2>/dev/null || true
        fi
        
        git add "$file" 2>/dev/null || true
    done
    
    return 0
}

# Function to merge a branch
merge_branch() {
    local branch_name=$1
    local remote_branch="origin/$branch_name"
    
    print_status "Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$remote_branch"; then
        print_warning "Branch $remote_branch not found, skipping"
        return 1
    fi
    
    # Try to merge
    print_status "Attempting to merge $remote_branch into main..."
    
    if git merge "$remote_branch" --no-ff -m "Merge branch $branch_name into main"; then
        print_success "Successfully merged $branch_name"
        return 0
    else
        print_warning "Merge conflict detected in $branch_name"
        
        # Try to resolve conflicts automatically
        if resolve_conflicts; then
            if git commit --no-edit 2>/dev/null; then
                print_success "Successfully resolved conflicts and merged $branch_name"
                return 0
            fi
        fi
        
        print_error "Failed to resolve conflicts for $branch_name"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Main execution
main() {
    print_status "Starting comprehensive branch merge process"
    
    # Ensure we're on main branch and it's up to date
    print_status "Switching to main branch..."
    git checkout main
    
    print_status "Pulling latest changes..."
    git pull origin main || true
    
    # Get all cursor branches
    print_status "Fetching all branches..."
    git fetch origin
    
    # Get list of cursor branches
    cursor_branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | sort -u)
    
    if [ -z "$cursor_branches" ]; then
        print_warning "No cursor branches found"
        return 0
    fi
    
    print_status "Found cursor branches:"
    echo "$cursor_branches" | while read -r branch; do
        echo "  - $branch"
    done
    
    # Merge each branch
    successful_merges=0
    failed_merges=0
    total_branches=$(echo "$cursor_branches" | wc -l)
    current=0
    
    echo "$cursor_branches" | while read -r branch; do
        current=$((current + 1))
        print_status "Processing branch $current of $total_branches: $branch"
        
        if merge_branch "$branch"; then
            successful_merges=$((successful_merges + 1))
        else
            failed_merges=$((failed_merges + 1))
        fi
        
        # Show progress
        print_status "Progress: $current/$total_branches branches processed"
    done
    
    # Push all changes
    print_status "Pushing all merged changes to origin..."
    git push origin main --force-with-lease
    
    print_success "Branch merge process completed!"
    print_status "Total branches processed: $total_branches"
    print_status "Successful merges: $successful_merges"
    print_status "Failed merges: $failed_merges"
}

# Run the main function
main "$@"