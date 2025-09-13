#!/bin/bash

# Merge Recent PRs Script
# Focus on the most recent and important PRs

set -e

echo "🚀 Starting Recent PRs Merge Process"
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

# Function to safely merge a branch
safe_merge() {
    local branch_name=$1
    local branch_short=${branch_name#origin/}
    
    print_status "Processing: $branch_short"
    
    # Create local branch if it doesn't exist
    if ! git show-ref --verify --quiet refs/heads/$branch_short; then
        git checkout -b $branch_short origin/$branch_short
    else
        git checkout $branch_short
        git pull origin $branch_short
    fi
    
    # Switch back to main
    git checkout main
    
    # Attempt merge
    if git merge $branch_short --no-ff -m "Merge $branch_short: $(git log -1 --pretty=format:'%s' $branch_short)"; then
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
    
    # List of recent branches to merge (most recent first)
    recent_branches=(
        "origin/cursor/website-improvements-2025"
        "origin/cursor/create-and-deploy-new-content-baa1"
        "origin/cursor/create-and-deploy-new-content-2ed6"
        "origin/cursor/create-and-deploy-new-content-fe8f"
        "origin/cursor/create-and-deploy-new-content-0454"
        "origin/cursor/create-and-deploy-new-content-bb7c"
        "origin/cursor/create-and-deploy-new-content-6c02"
        "origin/cursor/create-and-deploy-new-content-8a84"
        "origin/cursor/create-and-deploy-new-content-585c"
        "origin/cursor/create-and-deploy-new-content-7d26"
        "origin/cursor/create-and-deploy-new-content-44a0"
        "origin/cursor/create-and-deploy-new-content-9e4d"
        "origin/cursor/create-and-deploy-new-content-2917"
        "origin/cursor/create-and-deploy-new-content-a2eb"
        "origin/cursor/create-and-deploy-new-content-6292"
        "origin/cursor/create-and-deploy-new-content-c18b"
        "origin/cursor/create-and-deploy-new-content-1ed3"
        "origin/cursor/create-and-deploy-new-content-2a6f"
        "origin/cursor/create-and-deploy-new-content-b843"
    )
    
    success_count=0
    failure_count=0
    
    for branch in "${recent_branches[@]}"; do
        if git show-ref --verify --quiet refs/remotes/$branch; then
            if safe_merge "$branch"; then
                success_count=$((success_count + 1))
            else
                failure_count=$((failure_count + 1))
            fi
        else
            print_warning "Branch $branch not found, skipping"
        fi
    done
    
    # Push all changes
    print_status "Pushing merged changes to remote main"
    git push origin main
    
    # Summary
    print_status "Recent PRs merge completed"
    print_success "Successfully merged: $success_count branches"
    print_error "Failed to merge: $failure_count branches"
}

# Run main function
main "$@"