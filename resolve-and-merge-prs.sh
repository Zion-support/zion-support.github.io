#!/bin/bash

# Comprehensive PR Resolution and Merge Script
# This script will resolve merge conflicts and merge all open PRs into main

set -e

echo "🚀 Starting comprehensive PR resolution and merge process..."

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

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository. Please run this script from the repository root."
    exit 1
fi

# Ensure we're on the main branch
print_status "Switching to main branch..."
git checkout main
git pull origin main

# Get list of all branches
print_status "Fetching all branches..."
git fetch --all

# Get list of remote branches (potential PRs)
print_status "Getting list of remote branches..."
REMOTE_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ')

if [ -z "$REMOTE_BRANCHES" ]; then
    print_warning "No remote branches found to merge."
    exit 0
fi

print_status "Found remote branches:"
echo "$REMOTE_BRANCHES"

# Process each branch
for branch in $REMOTE_BRANCHES; do
    print_status "Processing branch: $branch"
    
    # Checkout the branch
    if git checkout "$branch" 2>/dev/null; then
        print_status "Checked out branch: $branch"
    else
        print_warning "Could not checkout branch: $branch (might be local only)"
        continue
    fi
    
    # Pull latest changes
    git pull origin "$branch" 2>/dev/null || true
    
    # Try to merge main into the branch
    print_status "Attempting to merge main into $branch..."
    if git merge main --no-edit 2>/dev/null; then
        print_success "Successfully merged main into $branch"
        
        # Push the updated branch
        git push origin "$branch" 2>/dev/null || print_warning "Could not push $branch"
        
        # Switch back to main
        git checkout main
        
        # Merge the branch into main
        print_status "Merging $branch into main..."
        if git merge "$branch" --no-edit 2>/dev/null; then
            print_success "Successfully merged $branch into main"
            
            # Push main
            git push origin main 2>/dev/null || print_warning "Could not push main"
            
            # Delete the branch
            print_status "Deleting branch: $branch"
            git branch -d "$branch" 2>/dev/null || print_warning "Could not delete local branch $branch"
            git push origin --delete "$branch" 2>/dev/null || print_warning "Could not delete remote branch $branch"
        else
            print_error "Failed to merge $branch into main"
            # Reset to previous state
            git merge --abort 2>/dev/null || true
        fi
    else
        print_warning "Merge conflicts detected in $branch. Attempting to resolve..."
        
        # Check for conflict markers
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICT_FILES" ]; then
            print_status "Found conflict files: $CONFLICT_FILES"
            
            # Try to resolve conflicts automatically
            for file in $CONFLICT_FILES; do
                print_status "Resolving conflicts in: $file"
                
                # Use git checkout to take the version from the branch (ours)
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Commit the resolved conflicts
            if git commit -m "Resolved merge conflicts in $branch" 2>/dev/null; then
                print_success "Successfully resolved conflicts in $branch"
                
                # Push the resolved branch
                git push origin "$branch" 2>/dev/null || print_warning "Could not push resolved $branch"
                
                # Switch back to main and merge
                git checkout main
                if git merge "$branch" --no-edit 2>/dev/null; then
                    print_success "Successfully merged resolved $branch into main"
                    git push origin main 2>/dev/null || print_warning "Could not push main"
                    
                    # Clean up
                    git branch -d "$branch" 2>/dev/null || true
                    git push origin --delete "$branch" 2>/dev/null || true
                else
                    print_error "Failed to merge resolved $branch into main"
                    git merge --abort 2>/dev/null || true
                fi
            else
                print_error "Failed to commit resolved conflicts in $branch"
                git merge --abort 2>/dev/null || true
            fi
        else
            print_error "No conflict files found but merge failed for $branch"
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    print_status "Completed processing branch: $branch"
    echo "----------------------------------------"
done

print_success "Completed processing all branches!"

# Final status check
print_status "Final repository status:"
git status

print_success "🎉 PR resolution and merge process completed!"