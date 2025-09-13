#!/bin/bash

                
                # Add the resolved file
                git add "$file"
            fi
        done
        
        # Try to complete the merge
        if git commit --no-edit; then
            echo "  ✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            echo "  ❌ Failed to resolve conflicts in $branch_name"
            git merge --abort
=======
# Comprehensive PR Merge Script
# This script will merge all open PRs into the main branch systematically

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
MAIN_BRANCH="main"
LOG_FILE="merge_operations.log"
CONFLICT_LOG="merge_conflicts.log"
SUCCESS_LOG="merge_success.log"

# Initialize logs
echo "=== PR Merge Operations Started at $(date) ===" > $LOG_FILE
echo "=== Merge Conflicts Log ===" > $CONFLICT_LOG
echo "=== Successful Merges Log ===" > $SUCCESS_LOG

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> $LOG_FILE
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
    echo "SUCCESS: $1" >> $SUCCESS_LOG
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    echo "WARNING: $1" >> $LOG_FILE
}

error() {
    echo -e "${RED}❌ $1${NC}"
    echo "ERROR: $1" >> $LOG_FILE
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Function to check if branch exists
branch_exists() {
    local branch_name="$1"
    git show-ref --verify --quiet "refs/heads/$branch_name" || git show-ref --verify --quiet "refs/remotes/origin/$branch_name"
}

# Function to merge a single branch
merge_branch() {
    local branch_name="$1"
    local pr_number="$2"
    local pr_title="$3"
    
    log "Attempting to merge branch: $branch_name (PR #$pr_number: $pr_title)"
    
    # Check if branch exists
    if ! branch_exists "$branch_name"; then
        warning "Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Fetch the latest changes
    git fetch origin "$branch_name" || {
        error "Failed to fetch branch $branch_name"
        return 1
    }
    
    # Checkout the branch
    git checkout "$branch_name" || {
        error "Failed to checkout branch $branch_name"
        return 1
    }
    
    # Pull latest changes
    git pull origin "$branch_name" || {
        error "Failed to pull latest changes for $branch_name"
        return 1
    }
    
    # Switch back to main
    git checkout "$MAIN_BRANCH" || {
        error "Failed to checkout main branch"
        return 1
    }
    
    # Attempt to merge
    if git merge "$branch_name" --no-ff -m "Merge PR #$pr_number: $pr_title"; then
        success "Successfully merged $branch_name (PR #$pr_number)"
        return 0
    else
        error "Merge conflict in $branch_name (PR #$pr_number)"
        echo "CONFLICT: $branch_name (PR #$pr_number) - $pr_title" >> $CONFLICT_LOG
        
        # Try to resolve conflicts automatically
        if resolve_conflicts "$branch_name" "$pr_number" "$pr_title"; then
            success "Resolved conflicts and merged $branch_name (PR #$pr_number)"
            return 0
        else
            error "Could not resolve conflicts for $branch_name (PR #$pr_number)"
            # Abort the merge
            git merge --abort || true
            return 1
        fi
    fi
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    local branch_name="$1"
    local pr_number="$2"
    local pr_title="$3"
    
    log "Attempting to resolve conflicts for $branch_name"
    
    # Check for common conflict patterns and resolve them
    local conflicts=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicts; do
        log "Resolving conflicts in $file"
        
        # Use git checkout to take our version for most conflicts
        git checkout --ours "$file" || true
        
        # Add the resolved file
        git add "$file" || true
    done
    
    # Commit the resolved conflicts
    if git commit -m "Resolve merge conflicts for PR #$pr_number: $pr_title"; then
        return 0
    else
        return 1
    fi
}

# Function to extract PR information from JSON
extract_pr_info() {
    local json_file="$1"
    
    # Extract PR numbers, titles, and branch names
    grep -A 20 '"state": "open"' "$json_file" | \
    grep -E '"number":|"title":|"headRefName":' | \
    sed 's/.*"number": \([0-9]*\).*/\1/' | \
    sed 's/.*"title": "\([^"]*\)".*/\1/' | \
    sed 's/.*"headRefName": "\([^"]*\)".*/\1/' | \
    paste - - - | \
    awk '{print $1 "|" $2 "|" $3}'
}

# Main execution
main() {
    log "Starting comprehensive PR merge process"
    
    # Ensure we're on main branch
    git checkout "$MAIN_BRANCH" || {
        error "Failed to checkout main branch"
        exit 1
    }
    
    # Pull latest changes
    git pull origin "$MAIN_BRANCH" || {
        error "Failed to pull latest changes from main"
        exit 1
    }
    
    # Extract PR information
    info "Extracting PR information from open_prs.json"
    local pr_info=$(extract_pr_info "open_prs.json")
    
    local success_count=0
    local conflict_count=0
    local total_count=0
    
    # Process each PR
    while IFS='|' read -r pr_number pr_title branch_name; do
        if [[ -n "$pr_number" && -n "$pr_title" && -n "$branch_name" ]]; then
            total_count=$((total_count + 1))
            log "Processing PR #$pr_number: $pr_title (branch: $branch_name)"
            
            if merge_branch "$branch_name" "$pr_number" "$pr_title"; then
                success_count=$((success_count + 1))
            else
                conflict_count=$((conflict_count + 1))
            fi
            
            # Small delay to avoid overwhelming the system
            sleep 1
        fi
    done <<< "$pr_info"
    
    # Summary
    log "=== MERGE SUMMARY ==="
    log "Total PRs processed: $total_count"
    log "Successfully merged: $success_count"
    log "Conflicts encountered: $conflict_count"
    
    # Push changes
    if [[ $success_count -gt 0 ]]; then
        log "Pushing merged changes to main branch"
        git push origin "$MAIN_BRANCH" || {
            error "Failed to push changes to main branch"
        }
    fi
    
    success "PR merge process completed!"
}

# Run the main function
main "$@"
