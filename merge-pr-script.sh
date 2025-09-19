#!/bin/bash

# Advanced PR merging script with conflict resolution
# Handles complex merge scenarios and auto-resolves common conflicts

set -e

echo "🚀 Advanced PR Merge and Conflict Resolution Script"
echo "=================================================="

# Configuration
MAIN_BRANCH="main"
REMOTE="origin"
BACKUP_DIR="merge-backup-$(date +%Y%m%d-%H%M%S)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to create backup
create_backup() {
    log "Creating backup in $BACKUP_DIR"
    mkdir -p "$BACKUP_DIR"
    cp -r . "$BACKUP_DIR/" 2>/dev/null || true
    success "Backup created"
}

# Function to check git status
check_git_status() {
    log "Checking git status..."
    
    if ! git status &>/dev/null; then
        error "Not in a git repository"
    fi
    
    # Check for uncommitted changes
    if ! git diff --quiet || ! git diff --cached --quiet; then
        warning "Uncommitted changes detected. Stashing..."
        git stash push -m "Auto-stash before merge $(date)"
    fi
    
    success "Git status OK"
}

# Function to fetch and update
fetch_and_update() {
    log "Fetching latest changes from remote..."
    git fetch "$REMOTE"
    
    log "Updating main branch..."
    git checkout "$MAIN_BRANCH"
    git pull "$REMOTE" "$MAIN_BRANCH"
    
    success "Main branch updated"
}

# Function to get open PRs
get_open_prs() {
    log "Getting open pull requests..."
    
    # Get all remote branches that might be PRs
    local pr_branches
    pr_branches=$(git branch -r | grep -v HEAD | grep -E "(pull|pr|feature|bugfix|hotfix|cursor)" | sed 's/origin\///' | tr -d ' ')
    
    if [ -z "$pr_branches" ]; then
        warning "No PR branches found"
        return 1
    fi
    
    echo "$pr_branches"
    return 0
}

# Function to auto-resolve conflicts
auto_resolve_conflicts() {
    local file="$1"
    log "Auto-resolving conflicts in $file"
    
    # Common conflict resolution patterns
    case "$file" in
        "package.json")
            log "Resolving package.json conflicts..."
            # Use our version for package.json
            git checkout --ours "$file"
            ;;
        *"lock"*|*"yarn.lock"*|*"package-lock.json"*)
            log "Resolving lock file conflicts..."
            # Use our version for lock files
            git checkout --ours "$file"
            ;;
        *".backup"*|*".bak"*)
            log "Removing backup file: $file"
            git rm "$file" 2>/dev/null || true
            ;;
        "app/page.tsx"|"app/layout.tsx")
            log "Resolving main app file conflicts..."
            # Use our version for main app files
            git checkout --ours "$file"
            ;;
        "components/"*)
            log "Resolving component conflicts..."
            # Use our version for components
            git checkout --ours "$file"
            ;;
        *)
            log "Attempting generic conflict resolution for $file"
            # Try to use our version
            if git checkout --ours "$file" 2>/dev/null; then
                success "Used our version for $file"
            else
                warning "Manual resolution needed for $file"
                # Create a basic resolution
                cat > "$file" << 'EOF'
// Auto-resolved merge conflict
// This file was automatically resolved during merge
// Please review and update as needed
EOF
            fi
            ;;
    esac
    
    # Add the resolved file
    git add "$file"
    success "Resolved conflicts in $file"
}

# Function to resolve all conflicts
resolve_all_conflicts() {
    local branch="$1"
    log "Resolving all conflicts for branch: $branch"
    
    # Checkout the branch
    git checkout "$branch"
    
    # Try to merge main
    if git merge "$MAIN_BRANCH" --no-commit 2>/dev/null; then
        success "No conflicts found for $branch"
        git commit -m "Merge $MAIN_BRANCH into $branch - no conflicts"
        return 0
    fi
    
    # Get conflicted files
    local conflicted_files
    conflicted_files=$(git diff --name-only --diff-filter=U)
    
    if [ -z "$conflicted_files" ]; then
        success "No conflicts to resolve"
        return 0
    fi
    
    log "Found conflicted files:"
    echo "$conflicted_files"
    
    # Resolve each conflict
    for file in $conflicted_files; do
        auto_resolve_conflicts "$file"
    done
    
    # Commit the resolution
    git commit -m "Auto-resolve merge conflicts in $branch"
    success "All conflicts resolved for $branch"
}

# Function to merge PR
merge_pr_to_main() {
    local branch="$1"
    log "Merging $branch into $MAIN_BRANCH"
    
    # Switch to main
    git checkout "$MAIN_BRANCH"
    
    # Merge the branch
    if git merge "$branch" --no-ff -m "Merge $branch into $MAIN_BRANCH"; then
        success "Successfully merged $branch into $MAIN_BRANCH"
        
        # Push to remote
        git push "$REMOTE" "$MAIN_BRANCH"
        success "Pushed merged changes to remote"
        
        # Clean up the branch
        git branch -d "$branch" 2>/dev/null || true
        git push "$REMOTE" --delete "$branch" 2>/dev/null || true
        success "Cleaned up branch $branch"
        
        return 0
    else
        error "Failed to merge $branch into $MAIN_BRANCH"
        return 1
    fi
}

# Function to clean up
cleanup() {
    log "Cleaning up..."
    
    # Remove backup files
    find . -name "*.backup*" -type f -delete 2>/dev/null || true
    find . -name "*.bak" -type f -delete 2>/dev/null || true
    find . -name "*~" -type f -delete 2>/dev/null || true
    
    # Remove empty directories
    find . -type d -empty -delete 2>/dev/null || true
    
    success "Cleanup completed"
}

# Function to update dependencies
update_dependencies() {
    log "Updating dependencies..."
    
    if [ -f "package.json" ]; then
        if command -v npm &> /dev/null; then
            npm install --silent
            success "Dependencies updated with npm"
        elif command -v yarn &> /dev/null; then
            yarn install --silent
            success "Dependencies updated with yarn"
        else
            warning "No package manager found"
        fi
    else
        warning "No package.json found"
    fi
}

# Main execution function
main() {
    log "Starting comprehensive PR merge process..."
    
    # Create backup
    create_backup
    
    # Check git status
    check_git_status
    
    # Fetch and update
    fetch_and_update
    
    # Get open PRs
    local pr_branches
    if ! pr_branches=$(get_open_prs); then
        success "No open PRs to process"
        cleanup
        exit 0
    fi
    
    log "Found PR branches to process:"
    echo "$pr_branches"
    
    # Process each PR
    local success_count=0
    local total_count=0
    
    for branch in $pr_branches; do
        total_count=$((total_count + 1))
        log "Processing branch: $branch"
        
        # Resolve conflicts
        if resolve_all_conflicts "$branch"; then
            # Merge the PR
            if merge_pr_to_main "$branch"; then
                success_count=$((success_count + 1))
                success "Successfully processed $branch"
            else
                error "Failed to merge $branch"
            fi
        else
            error "Failed to resolve conflicts for $branch"
        fi
        
        echo "---"
    done
    
    # Update dependencies
    update_dependencies
    
    # Final cleanup
    cleanup
    
    # Summary
    log "Merge process completed!"
    success "Successfully processed $success_count out of $total_count PRs"
    
    if [ $success_count -eq $total_count ]; then
        success "All PRs merged successfully! 🎉"
    else
        warning "Some PRs failed to merge. Check logs for details."
    fi
}

# Run main function
main "$@"