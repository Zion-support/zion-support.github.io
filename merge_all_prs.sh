#!/bin/bash

# Comprehensive PR Merge Script
# This script will merge all open PRs into the main branch systematically

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Set GitHub token
export GH_TOKEN=ghs_v5EHCNRCCjgCQX6fSeu6jdZDz16uJb3AGWKD

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    
    print_status "Processing PR #$pr_number: $pr_title"
    
    # Get PR details
    local pr_details=$(gh pr view "$pr_number" --json headRefName,title,state)
    local branch_name=$(echo "$pr_details" | jq -r '.headRefName')
    local state=$(echo "$pr_details" | jq -r '.state')
    
    if [ "$state" != "OPEN" ]; then
        print_warning "PR #$pr_number is not open (state: $state), skipping..."
        return 0
    fi
    
    print_status "Branch: $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name"
    
    if [ $? -ne 0 ]; then
        print_error "Failed to fetch branch $branch_name"
        return 1
    fi
    
    # Try to merge the PR
    print_status "Attempting to merge PR #$pr_number..."
    
    # Use GitHub CLI to merge the PR
    gh pr merge "$pr_number" --merge --delete-branch
    
    if [ $? -eq 0 ]; then
        print_success "Successfully merged PR #$pr_number"
        return 0
    else
        print_warning "Failed to merge PR #$pr_number automatically, trying manual merge..."
        
        # Try manual merge
        git checkout main
        git pull origin main
        
        # Try to merge the branch
        git merge "origin/$branch_name" --no-edit
        
        if [ $? -eq 0 ]; then
            print_success "Successfully merged PR #$pr_number manually"
            git push origin main
            return 0
        else
            print_error "Failed to merge PR #$pr_number - conflicts detected"
            
            # Try to resolve conflicts automatically
            print_status "Attempting to resolve conflicts automatically..."
            
            # Use our automation to fix conflicts
            ./pm2-automation.sh quick-fix
            
            # Check if conflicts are resolved
            git status --porcelain | grep -q "^UU\|^AA\|^DD"
            if [ $? -ne 0 ]; then
                print_success "Conflicts resolved automatically"
                git add .
                git commit -m "Resolve merge conflicts for PR #$pr_number"
                git push origin main
                return 0
            else
                print_error "Could not resolve conflicts automatically for PR #$pr_number"
                git merge --abort
                return 1
            fi
        fi
    fi
}

<<<<<<< HEAD
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
=======
# Main execution
print_status "Starting systematic PR merge process..."

<<<<<<< HEAD
# Run the main function
main "$@"
=======
# Get list of open PRs
pr_list=$(gh pr list --state open --json number,title --jq '.[] | "\(.number)|\(.title)"')

if [ -z "$pr_list" ]; then
    print_warning "No open PRs found"
    exit 0
fi

# Count total PRs
total_prs=$(echo "$pr_list" | wc -l)
print_status "Found $total_prs open PRs to process"

# Process each PR
success_count=0
failed_count=0

while IFS= read -r pr_line; do
    if [ -n "$pr_line" ]; then
        pr_number=$(echo "$pr_line" | cut -d'|' -f1)
        pr_title=$(echo "$pr_line" | cut -d'|' -f2-)
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        
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

<<<<<<< HEAD
# Run the main function
main "$@"
=======
# Final status check
print_status "Checking final repository status..."
git status
git log --oneline -5
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
