#!/bin/bash

# Targeted PR Merge Script
# Focuses on the most important branches first

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Priority branches to merge first
PRIORITY_BRANCHES=(
    "cursor/enhance-app-with-new-services-and-futuristic-design"
    "cursor/enhance-app-with-micro-saas-and-futuristic-design"
    "cursor/enhance-app-with-futuristic-design"
    "cursor/website-audit-and-enhancement"
    "cursor/enhance-zion-services-2025"
    "cursor/enhance-zion-services-2026"
    "cursor/enhance-zion-services-with-new-micro-saas-solutions"
    "cursor/enhance-services-2025-v2"
    "cursor/enhance-services-with-new-micro-saas"
    "cursor/enhance-services-with-new-micro-saas-solutions"
)

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    print_status "Attempting to merge: $branch"
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        print_warning "Branch $branch no longer exists, skipping"
        return 1
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-commit --no-ff; then
        # No conflicts, commit the merge
        git commit -m "Merge $branch - Automated merge"
        print_status "✅ Successfully merged: $branch"
        return 0
    else
        # Has conflicts, try to resolve
        print_warning "Conflicts detected in: $branch"
        
        # Simple conflict resolution strategy
        local conflict_files=$(git diff --name-only --diff-filter=U)
        
        for file in $conflict_files; do
            print_status "Resolving conflicts in: $file"
            
            # Use our version for package files
            if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]] || [[ "$file" == "yarn.lock" ]]; then
                git checkout --ours "$file"
                git add "$file"
            # Use their version for new files
            elif [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.jsx ]] || [[ "$file" == *.js ]]; then
                git checkout --theirs "$file"
                git add "$file"
            # Default to their version
            else
                git checkout --theirs "$file"
                git add "$file"
            fi
        done
        
        # Check if all conflicts are resolved
        if [ -z "$(git diff --name-only --diff-filter=U)" ]; then
            git commit -m "Merge $branch - Resolved conflicts automatically"
            print_status "✅ Successfully merged with conflict resolution: $branch"
            return 0
        else
            print_error "Failed to resolve all conflicts in: $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Main execution
main() {
    print_header "Starting Targeted PR Merge"
    
    # Fetch latest changes
    print_status "Fetching latest changes..."
    git fetch origin --prune
    
    # Create backup branch
    local backup_branch="merge-backup-$(date +%Y%m%d-%H%M%S)"
    print_status "Creating backup branch: $backup_branch"
    git checkout -b "$backup_branch"
    git push origin "$backup_branch"
    git checkout main
    
    local successful=0
    local failed=0
    
    # Merge priority branches
    for branch in "${PRIORITY_BRANCHES[@]}"; do
        if merge_branch "$branch"; then
            successful=$((successful + 1))
        else
            failed=$((failed + 1))
        fi
    done
    
    print_header "Merge Summary"
    print_status "Successful merges: $successful"
    print_status "Failed merges: $failed"
    print_status "Total processed: $((successful + failed))"
    
    # Push changes
    print_status "Pushing changes to main..."
    git push origin main
    
    print_header "Targeted PR Merge Completed"
}

main "$@"