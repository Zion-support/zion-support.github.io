#!/bin/bash

# Smart PR Merge Script
# This script will merge the most important PRs systematically

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Priority branches to merge (most important first)
PRIORITY_BRANCHES=(
    "origin/cursor/enhance-pm2-automations-for-development-and-deployment-17a8"
    "origin/cursor/add-new-services-and-advertise-them-2e38"
    "origin/cursor/fix-lint-push-and-merge-to-main-7269"
    "origin/cursor/fix-errors-and-automate-with-pm2-0532"
    "origin/cursor/website-audit-content-update-and-deployment-ae19"
    "origin/cursor/analyze-improve-and-deploy-application-07c5"
    "origin/cursor/resolve-conflicts-and-merge-to-main-c25f"
    "origin/cursor/fix-errors-and-automate-with-pm2-80da"
    "origin/cursor/migrate-ci-to-pm2-and-clean-up-github-actions-d197"
    "origin/cursor/fix-lint-push-and-merge-to-main-1acd"
    "origin/cursor/fix-syntax-push-and-merge-to-main-d01e"
    "origin/cursor/website-audit-content-update-and-deployment-ae19"
    "origin/cursor/analyze-improve-and-deploy-application-07c5"
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

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local conflicts=$(git diff --name-only --diff-filter=U)
    local resolved=0
    
    for file in $conflicts; do
        log "Resolving conflicts in $file"
        
        # Strategy: Take main branch version for config files, theirs for new features
        if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]] || [[ "$file" == "next.config.js" ]] || [[ "$file" == "eslint.config.js" ]]; then
            git checkout --ours "$file" || true
        elif [[ "$file" == *.cjs ]] || [[ "$file" == *.js ]] && [[ "$file" == scripts/* ]]; then
            # For script files, take the newer version
            git checkout --theirs "$file" || git checkout --ours "$file" || true
        else
            # For other files, try to merge intelligently
            git checkout --theirs "$file" || git checkout --ours "$file" || true
        fi
        
        git add "$file" || true
        resolved=$((resolved + 1))
    done
    
    log "Resolved $resolved conflicts"
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local branch_name=$(basename "$branch")
    
    log "Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        warning "Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Fetch the branch
    git fetch origin "${branch_name#origin/}" || {
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
    log "Starting smart PR merge process"
    
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
    local total_count=${#PRIORITY_BRANCHES[@]}
    local failed_branches=()
    
    # Process each priority branch
    for branch in "${PRIORITY_BRANCHES[@]}"; do
        if merge_branch "$branch"; then
            success_count=$((success_count + 1))
        else
            failed_branches+=("$branch")
        fi
        
        # Small delay between merges
        sleep 2
    done
    
    # Summary
    log "=== SMART MERGE SUMMARY ==="
    log "Total priority branches processed: $total_count"
    log "Successfully merged: $success_count"
    log "Failed to merge: ${#failed_branches[@]}"
    
    if [[ ${#failed_branches[@]} -gt 0 ]]; then
        warning "Failed branches:"
        for branch in "${failed_branches[@]}"; do
            warning "  - $branch"
        done
    fi
    
    # Push changes
    if [[ $success_count -gt 0 ]]; then
        log "Pushing merged changes to main branch"
        git push origin main || {
            error "Failed to push changes to main branch"
        }
    fi
    
    success "Smart merge process completed!"
}

# Run the main function
main "$@"