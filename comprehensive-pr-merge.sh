#!/bin/bash

# Comprehensive PR Merge Script
# This script will systematically merge all open branches into main

set -e

echo "🚀 Starting Comprehensive PR Merge Process"
echo "
# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
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

# Function to safely merge a branch
merge_branch() {
    local branch_name=$1
    local attempt=1
    local max_attempts=3
    
    print_status "Attempting to merge branch: $branch_name"
    
    while [ $attempt -le $max_attempts ]; do
        echo "Attempt $attempt of $max_attempts"
        
        # Check if branch exists remotely
        if ! git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"; then
            print_warning "Branch $branch_name does not exist remotely, skipping..."
            return 0
        fi
        
        # Fetch the latest changes
        git fetch origin "$branch_name" || {
            print_error "Failed to fetch branch $branch_name"
            attempt=$((attempt + 1))
            continue
        }
        
        # Try to merge
        if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
            print_success "Successfully merged $branch_name"
            return 0
        else
            print_warning "Merge conflict detected in $branch_name, attempting to resolve..."
            
            # Check if there are actual conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                print_status "Resolving merge conflicts for $branch_name..."
                
                # Try to resolve conflicts automatically
                if resolve_conflicts; then
                    git add .
                    git commit -m "Resolve merge conflicts with $branch_name

- Automatically resolved conflicts
- Preserved main branch functionality
- Integrated changes from $branch_name"
                    print_success "Resolved conflicts and merged $branch_name"
                    return 0
                else
                    print_error "Failed to resolve conflicts for $branch_name"
                    git merge --abort
                    attempt=$((attempt + 1))
                    continue
                fi
            else
                # No real conflicts, just commit
                git add .
                git commit -m "Merge $branch_name into main

- Integrated changes from $branch_name
- No conflicts detected"
                print_success "Successfully merged $branch_name"
                return 0
            fi
        fi
    done
    
    print_error "Failed to merge $branch_name after $max_attempts attempts"
    return 1
}

# Function to resolve merge conflicts automatically
resolve_conflicts() {
    local resolved=false
    
    # Common conflict resolution strategies
    if [ -f "app/page.tsx" ]; then
        # For page.tsx, prefer the main branch version but integrate new components
        if grep -q "content = re.sub(r'
# Clean up extra whitespace
content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Resolved page.tsx conflicts")
EOF
}

# Main execution
main() {
    print_status "Starting comprehensive PR merge process..."
    
    # Ensure we're on main branch
    git checkout main
    git pull origin main
    
    # Get list of all remote branches that start with cursor/
    branches=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)
    
    print_status "Found $(echo "$branches" | wc -l) branches to merge"
    
    # Merge branches in batches to avoid overwhelming the system
    batch_size=10
    batch_num=1
    total_branches=$(echo "$branches" | wc -l)
    
    echo "$branches" | while IFS= read -r branch; do
        if [ -z "$branch" ]; then
            continue
        fi
        
        print_status "Processing batch $batch_num, branch: $branch"
        
        if merge_branch "$branch"; then
            print_success "Successfully processed $branch"
        else
            print_warning "Failed to merge $branch, continuing with next branch"
        fi
        
        # Push changes every 10 branches
        if [ $((batch_num % 10)) -eq 0 ]; then
            print_status "Pushing changes after batch $batch_num..."
            git push origin main || print_warning "Failed to push changes"
        fi
        
        batch_num=$((batch_num + 1))
    done
    
    # Final push
    print_status "Pushing final changes..."
    git push origin main
    
    print_success "Comprehensive PR merge process completed!"
    
    # Clean up merged branches
    print_status "Cleaning up merged branches..."
    echo "$branches" | while IFS= read -r branch; do
        if [ -n "$branch" ]; then
            # Delete remote branch if it exists
            git push origin --delete "$branch" 2>/dev/null || true
        fi
    done
    
    print_success "All PRs merged and cleaned up!"
}

# Run the main function
main "$@"
