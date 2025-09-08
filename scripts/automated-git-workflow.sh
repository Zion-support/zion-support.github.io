#!/bin/bash

# 🤖 Automated Git Workflow Script
# Intelligent Git automation with conflict resolution and repository management

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MAIN_BRANCH="main"
DEVELOP_BRANCH="develop"
AUTO_MERGE=${AUTO_MERGE:-true}
AUTO_PUSH=${AUTO_PUSH:-true}
CONFLICT_RESOLUTION=${CONFLICT_RESOLUTION:-intelligent}

# Logging functions
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

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        error "Not in a git repository"
        exit 1
    fi
}

# Get current branch
get_current_branch() {
    git branch --show-current
}

# Check if there are uncommitted changes
check_uncommitted_changes() {
    if ! git diff-index --quiet HEAD --; then
        warning "Uncommitted changes detected"
        return 1
    fi
    return 0
}

# Stash changes if needed
stash_changes() {
    if ! check_uncommitted_changes; then
        log "Stashing uncommitted changes..."
        git stash push -m "Auto-stash before sync $(date +'%Y-%m-%d %H:%M:%S')"
        return 0
    fi
    return 1
}

# Restore stashed changes
restore_stash() {
    if git stash list | grep -q "Auto-stash before sync"; then
        log "Restoring stashed changes..."
        git stash pop
    fi
}

# Fetch latest changes from remote
fetch_latest() {
    log "Fetching latest changes from remote..."
    git fetch --all --prune
    success "Latest changes fetched"
}

# Check for conflicts
check_conflicts() {
    local target_branch=$1
    local current_branch=$(get_current_branch)
    
    log "Checking for merge conflicts with $target_branch..."
    
    # Try to merge without committing
    if git merge --no-commit --no-ff "origin/$target_branch" 2>/dev/null; then
        # No conflicts, abort the merge
        git merge --abort
        return 0
    else
        # Conflicts detected, abort the merge
        git merge --abort
        return 1
    fi
}

# Resolve conflicts intelligently
resolve_conflicts() {
    local target_branch=$1
    local current_branch=$(get_current_branch)
    
    log "Resolving conflicts with $target_branch..."
    
    # Start the merge
    git merge --no-commit --no-ff "origin/$target_branch" || true
    
    # Get conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    if [ -z "$conflicted_files" ]; then
        success "No conflicts to resolve"
        return 0
    fi
    
    log "Resolving conflicts in: $conflicted_files"
    
    # Resolve conflicts for each file
    for file in $conflicted_files; do
        resolve_file_conflicts "$file"
    done
    
    # Add resolved files
    git add $conflicted_files
    
    success "Conflicts resolved"
}

# Resolve conflicts in a specific file
resolve_file_conflicts() {
    local file=$1
    local file_ext="${file##*.}"
    
    log "Resolving conflicts in $file..."
    
    case $file_ext in
        "json")
            resolve_json_conflicts "$file"
            ;;
        "js"|"jsx"|"ts"|"tsx")
            resolve_code_conflicts "$file"
            ;;
        "md")
            resolve_markdown_conflicts "$file"
            ;;
        *)
            resolve_generic_conflicts "$file"
            ;;
    esac
}

# Resolve JSON conflicts
resolve_json_conflicts() {
    local file=$1
    
    # For JSON files, prefer the more complete version or merge if possible
    log "Resolving JSON conflicts in $file..."
    
    # Simple strategy: use the version with more content
    local our_size=$(git show :1:"$file" | wc -c)
    local their_size=$(git show :3:"$file" | wc -c)
    
    if [ $our_size -gt $their_size ]; then
        git checkout --ours "$file"
    else
        git checkout --theirs "$file"
    fi
}

# Resolve code conflicts
resolve_code_conflicts() {
    local file=$1
    
    log "Resolving code conflicts in $file..."
    
    # For code files, prefer our changes if they're more substantial
    local our_lines=$(git show :1:"$file" | wc -l)
    local their_lines=$(git show :3:"$file" | wc -l)
    
    if [ $our_lines -gt $their_lines ]; then
        git checkout --ours "$file"
    else
        git checkout --theirs "$file"
    fi
}

# Resolve markdown conflicts
resolve_markdown_conflicts() {
    local file=$1
    
    log "Resolving markdown conflicts in $file..."
    
    # For markdown, merge content and remove duplicates
    git checkout --ours "$file"
    git checkout --theirs "$file" -- "$file.temp"
    
    # Merge content (simple approach)
    cat "$file" "$file.temp" | sort -u > "$file.merged"
    mv "$file.merged" "$file"
    rm -f "$file.temp"
}

# Resolve generic conflicts
resolve_generic_conflicts() {
    local file=$1
    
    log "Resolving generic conflicts in $file..."
    
    # Default strategy: prefer our changes
    git checkout --ours "$file"
}

# Merge changes
merge_changes() {
    local target_branch=$1
    local current_branch=$(get_current_branch)
    
    log "Merging changes from $target_branch into $current_branch..."
    
    if [ "$current_branch" != "$target_branch" ]; then
        git merge --no-ff "origin/$target_branch" -m "Merge $target_branch into $current_branch - $(date +'%Y-%m-%d %H:%M:%S')"
    else
        git merge --ff-only "origin/$target_branch"
    fi
    
    success "Changes merged successfully"
}

# Push changes
push_changes() {
    local current_branch=$(get_current_branch)
    
    if [ "$AUTO_PUSH" = "true" ]; then
        log "Pushing changes to remote..."
        git push origin "$current_branch"
        success "Changes pushed to remote"
    else
        info "Auto-push disabled, changes ready for manual push"
    fi
}

# Run quality checks
run_quality_checks() {
    log "Running quality checks..."
    
    local checks_passed=true
    
    # Lint check
    if command -v npm >/dev/null 2>&1; then
        if npm run lint >/dev/null 2>&1; then
            success "Lint check passed"
        else
            warning "Lint check failed"
            checks_passed=false
        fi
    fi
    
    # Type check
    if command -v npm >/dev/null 2>&1; then
        if npm run type-check >/dev/null 2>&1; then
            success "Type check passed"
        else
            warning "Type check failed"
            checks_passed=false
        fi
    fi
    
    if [ "$checks_passed" = "true" ]; then
        success "All quality checks passed"
        return 0
    else
        warning "Some quality checks failed"
        return 1
    fi
}

# Create pull request
create_pull_request() {
    local title=$1
    local description=$2
    local base_branch=${3:-$MAIN_BRANCH}
    local head_branch=$(get_current_branch)
    
    if [ "$head_branch" = "$base_branch" ]; then
        warning "Cannot create PR from $base_branch to itself"
        return 1
    fi
    
    log "Creating pull request: $title"
    
    # Check if GitHub CLI is available
    if command -v gh >/dev/null 2>&1; then
        gh pr create --title "$title" --body "$description" --base "$base_branch" --head "$head_branch"
        success "Pull request created"
    else
        warning "GitHub CLI not available, please create PR manually"
        info "PR: $head_branch -> $base_branch"
        info "Title: $title"
        info "Description: $description"
    fi
}

# Sync with main branch
sync_with_main() {
    local current_branch=$(get_current_branch)
    local had_stash=false
    
    log "Syncing with $MAIN_BRANCH branch..."
    
    # Stash changes if needed
    if stash_changes; then
        had_stash=true
    fi
    
    # Fetch latest changes
    fetch_latest
    
    # Check for conflicts
    if check_conflicts "$MAIN_BRANCH"; then
        log "No conflicts detected, proceeding with merge..."
        merge_changes "$MAIN_BRANCH"
    else
        log "Conflicts detected, resolving..."
        resolve_conflicts "$MAIN_BRANCH"
        merge_changes "$MAIN_BRANCH"
    fi
    
    # Push changes
    push_changes
    
    # Restore stashed changes
    if [ "$had_stash" = "true" ]; then
        restore_stash
    fi
    
    success "Sync with $MAIN_BRANCH completed"
}

# Sync with develop branch
sync_with_develop() {
    local current_branch=$(get_current_branch)
    local had_stash=false
    
    log "Syncing with $DEVELOP_BRANCH branch..."
    
    # Stash changes if needed
    if stash_changes; then
        had_stash=true
    fi
    
    # Fetch latest changes
    fetch_latest
    
    # Check for conflicts
    if check_conflicts "$DEVELOP_BRANCH"; then
        log "No conflicts detected, proceeding with merge..."
        merge_changes "$DEVELOP_BRANCH"
    else
        log "Conflicts detected, resolving..."
        resolve_conflicts "$DEVELOP_BRANCH"
        merge_changes "$DEVELOP_BRANCH"
    fi
    
    # Push changes
    push_changes
    
    # Restore stashed changes
    if [ "$had_stash" = "true" ]; then
        restore_stash
    fi
    
    success "Sync with $DEVELOP_BRANCH completed"
}

# Commit and push changes
commit_and_push() {
    local message=$1
    local current_branch=$(get_current_branch)
    
    if [ -z "$message" ]; then
        message="Automated commit - $(date +'%Y-%m-%d %H:%M:%S')"
    fi
    
    log "Committing and pushing changes..."
    
    # Add all changes
    git add .
    
    # Check if there are changes to commit
    if git diff --cached --quiet; then
        info "No changes to commit"
        return 0
    fi
    
    # Commit changes
    git commit -m "$message"
    success "Changes committed"
    
    # Push changes
    push_changes
    
    success "Commit and push completed"
}

# Main workflow function
main() {
    local command=${1:-sync}
    local arg1=$2
    local arg2=$3
    local arg3=$4
    
    log "🤖 Starting automated Git workflow..."
    
    # Check if we're in a git repository
    check_git_repo
    
    case $command in
        "sync")
            sync_with_main
            ;;
        "sync-develop")
            sync_with_develop
            ;;
        "commit")
            commit_and_push "$arg1"
            ;;
        "pr")
            create_pull_request "$arg1" "$arg2" "$arg3"
            ;;
        "quality")
            run_quality_checks
            ;;
        "status")
            git status
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Show help
show_help() {
    echo "🤖 Automated Git Workflow Script"
    echo ""
    echo "Usage: $0 [command] [arguments]"
    echo ""
    echo "Commands:"
    echo "  sync                    Sync with main branch (default)"
    echo "  sync-develop           Sync with develop branch"
    echo "  commit [message]       Commit and push changes"
    echo "  pr <title> [desc] [base] Create pull request"
    echo "  quality                Run quality checks"
    echo "  status                 Show git status"
    echo "  help                   Show this help"
    echo ""
    echo "Environment Variables:"
    echo "  AUTO_MERGE=true        Enable automatic merging (default: true)"
    echo "  AUTO_PUSH=true         Enable automatic pushing (default: true)"
    echo "  CONFLICT_RESOLUTION=intelligent  Conflict resolution strategy"
    echo ""
    echo "Examples:"
    echo "  $0 sync"
    echo "  $0 commit 'Fix bug in authentication'"
    echo "  $0 pr 'Add new feature' 'Description of the feature' main"
    echo "  $0 quality"
}

# Run main function with all arguments
main "$@"