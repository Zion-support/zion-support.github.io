#!/usr/bin/env bash
set -euo pipefail

# Comprehensive PR merge script for zion.app
# This script fetches open PRs from GitHub and merges them into main

echo "=== Starting comprehensive PR merge process ==="

# Configuration
REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"
GITHUB_API="https://api.github.com/repos/$REPO_OWNER/$REPO_NAME"
MAIN_BRANCH="main"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1" >&2
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" >&2
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" >&2
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

# Function to check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not in a git repository!"
        exit 1
    fi
}

# Function to ensure we're on main branch
ensure_main_branch() {
    local current_branch=$(git rev-parse --abbrev-ref HEAD)
    if [ "$current_branch" != "$MAIN_BRANCH" ]; then
        print_status "Switching to $MAIN_BRANCH branch..."
        git checkout "$MAIN_BRANCH"
    fi
}

# Function to sync main branch
sync_main() {
    print_status "Syncing $MAIN_BRANCH branch with origin..."
    git fetch origin
    git pull --ff-only origin "$MAIN_BRANCH"
    print_success "Main branch synced successfully"
}

# Function to fetch all PR refs
fetch_pr_refs() {
    print_status "Fetching all PR references..."
    git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*"
    print_success "PR references fetched"
}

# Function to get open PRs from GitHub API
get_open_prs() {
    print_status "Fetching open PRs from GitHub API..."
    
    # Get the first page of open PRs (up to 100)
    local pr_data
    if ! pr_data=$(curl -s -H "Accept: application/vnd.github+json" \
        "$GITHUB_API/pulls?state=open&per_page=100&sort=created&direction=desc"); then
        print_error "Failed to fetch PRs from GitHub API"
        return 1
    fi
    
    # Extract PR numbers and titles
    echo "$pr_data" | jq -r '.[] | "\(.number)\t\(.head.ref)\t\(.title)"' | while IFS=$'\t' read -r pr_number pr_branch pr_title; do
        echo "$pr_number:$pr_branch:$pr_title"
    done
}

# Function to merge a single PR
merge_pr() {
    local pr_number="$1"
    local pr_branch="$2"
    local pr_title="$3"
    
    print_status "Processing PR #$pr_number: $pr_title"
    
    # Check if PR ref exists locally
    if ! git show-ref --verify --quiet "refs/remotes/origin/pr/$pr_number"; then
        print_warning "PR #$pr_number ref not found locally, skipping..."
        return 1
    fi
    
    # Create a temporary branch for the merge
    local merge_branch="merge-pr-$pr_number"
    git checkout -B "$merge_branch" "$MAIN_BRANCH"
    
    # Attempt to merge with conflict resolution strategy
    print_status "Merging PR #$pr_number into temporary branch..."
    
    if git merge -m "Merge PR #$pr_number: $pr_title" -X theirs "origin/pr/$pr_number" 2>/dev/null; then
        print_success "PR #$pr_number merged cleanly"
    else
        print_warning "Conflicts detected in PR #$pr_number, attempting auto-resolution..."
        
        # Auto-resolve common conflicts
        # Keep main's lockfiles to avoid dependency resolution issues
        git checkout --ours -- package-lock.json 2>/dev/null || true
        git checkout --ours -- yarn.lock 2>/dev/null || true
        git checkout --ours -- pnpm-lock.yaml 2>/dev/null || true
        
        # Accept PR changes for generated files
        git checkout --theirs -- dist/** 2>/dev/null || true
        git checkout --theirs -- build/** 2>/dev/null || true
        git checkout --theirs -- out/** 2>/dev/null || true
        
        # Stage all changes
        git add -A
        
        # Try to commit the merge
        if git commit -m "Auto-resolve conflicts for PR #$pr_number: $pr_title" 2>/dev/null; then
            print_success "Auto-resolved conflicts for PR #$pr_number"
        else
            print_error "Could not auto-resolve conflicts for PR #$pr_number"
            git merge --abort 2>/dev/null || true
            git checkout "$MAIN_BRANCH"
            git branch -D "$merge_branch" 2>/dev/null || true
            return 1
        fi
    fi
    
    # Merge the temporary branch into main
    print_status "Integrating PR #$pr_number into main..."
    git checkout "$MAIN_BRANCH"
    
    if git merge --no-ff -m "Merge PR #$pr_number: $pr_title" "$merge_branch"; then
        print_success "PR #$pr_number successfully integrated into main"
        
        # Push to origin
        print_status "Pushing changes to origin..."
        if git push origin "$MAIN_BRANCH"; then
            print_success "Changes pushed to origin successfully"
        else
            print_error "Failed to push changes to origin"
            return 1
        fi
        
        # Clean up temporary branch
        git branch -D "$merge_branch"
        return 0
    else
        print_error "Failed to integrate PR #$pr_number into main"
        git branch -D "$merge_branch"
        return 1
    fi
}

# Function to process all open PRs
process_all_prs() {
    print_status "Processing all open PRs..."
    
    local prs
    if ! prs=$(get_open_prs); then
        print_error "Failed to fetch open PRs"
        return 1
    fi
    
    local success_count=0
    local total_count=0
    local failed_prs=()
    
    while IFS=':' read -r pr_number pr_branch pr_title; do
        if [ -n "$pr_number" ]; then
            total_count=$((total_count + 1))
            print_status "Processing PR #$pr_number ($total_count of $(echo "$prs" | wc -l))"
            
            if merge_pr "$pr_number" "$pr_branch" "$pr_title"; then
                success_count=$((success_count + 1))
            else
                failed_prs+=("$pr_number")
            fi
        fi
    done <<< "$prs"
    
    # Summary
    print_status "=== Merge Summary ==="
    print_success "Successfully merged: $success_count PRs"
    if [ ${#failed_prs[@]} -gt 0 ]; then
        print_warning "Failed to merge: ${#failed_prs[@]} PRs"
        print_warning "Failed PRs: ${failed_prs[*]}"
    fi
    print_status "Total processed: $total_count PRs"
}

# Main execution
main() {
    print_status "Starting comprehensive PR merge process for $REPO_OWNER/$REPO_NAME"
    
    # Pre-flight checks
    check_git_repo
    ensure_main_branch
    sync_main
    fetch_pr_refs
    
    # Process all PRs
    process_all_prs
    
    print_success "PR merge process completed!"
}

# Run main function
main "$@"=======
# Run main function
main "$@"
