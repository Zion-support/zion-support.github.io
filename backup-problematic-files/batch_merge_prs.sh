#!/bin/bash

# Batch PR Merge Script
# This script will merge multiple PRs efficiently

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# List of branches to merge (most recent first)
BRANCHES=(
    "origin/cursor/enhance-pm2-automations-for-development-and-deployment-17a8"
    "origin/cursor/add-new-services-and-advertise-them-2e38"
    "origin/cursor/fix-lint-push-and-merge-to-main-7269"
    "origin/cursor/fix-errors-and-automate-with-pm2-0532"
    "origin/cursor/website-audit-content-update-and-deployment-ae19"
    "origin/cursor/analyze-improve-and-deploy-application-07c5"
    "origin/cursor/resolve-conflicts-and-merge-to-main-c25f"
    "origin/cursor/fix-errors-and-automate-with-pm2-80da"
)

log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    local conflicts=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicts; do
        log "Resolving conflicts in $file"
        
        # For most files, take our version (main branch)
        if [[ "$file" == *.json ]] || [[ "$file" == *.js ]] || [[ "$file" == *.cjs ]]; then
            git checkout --ours "$file" || true
        else
            # For other files, try to merge intelligently
            git checkout --theirs "$file" || git checkout --ours "$file" || true
        fi
        
        git add "$file" || true
    done
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local branch_name=$(basename "$branch")
    
    log "Merging branch: $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name" || {
        warning "Failed to fetch $branch_name, skipping..."
        return 1
    }
    
    # Attempt merge
    if git merge "$branch" --no-ff -m "Merge: $branch_name"; then
        success "Successfully merged $branch_name"
        return 0
    else
        warning "Merge conflict in $branch_name, attempting to resolve..."
        
        # Try to resolve conflicts
        if resolve_conflicts; then
            if git commit -m "Resolve conflicts and merge $branch_name"; then
                success "Resolved conflicts and merged $branch_name"
                return 0
            fi
        fi
        
        error "Could not resolve conflicts for $branch_name, aborting merge"
        git merge --abort || true
        return 1
    fi
}

# Main execution
main() {
    log "Starting batch PR merge process"
    
    # Ensure we're on main branch
    git checkout main || {
        error "Failed to checkout main branch"
        exit 1
    }
    
    # Pull latest changes
    git pull origin main || {
        error "Failed to pull latest changes from main"
        exit 1
    }
    
    local success_count=0
    local total_count=${#BRANCHES[@]}
    
    # Process each branch
    for branch in "${BRANCHES[@]}"; do
        if merge_branch "$branch"; then
            success_count=$((success_count + 1))
        fi
        
        # Small delay
        sleep 1
    done
    
    # Summary
    log "=== BATCH MERGE SUMMARY ==="
    log "Total branches processed: $total_count"
    log "Successfully merged: $success_count"
    
    # Push changes
    if [[ $success_count -gt 0 ]]; then
        log "Pushing merged changes to main branch"
        git push origin main || {
            error "Failed to push changes to main branch"
        }
    fi
    
    success "Batch merge process completed!"
}

# Run the main function
main "$@"