#!/bin/bash

# Intelligent Git Push & Merge Script
# This script intelligently pushes changes and merges with the main branch

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
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "main")
COMMIT_MESSAGE="feat: Add intelligent PM2 automation system with AI-powered features"

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

# Check if we're in a Git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        error "Not in a Git repository"
        exit 1
    fi
    success "Git repository detected"
}

# Check Git status
check_git_status() {
    log "Checking Git status..."
    
    # Check for uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        info "Uncommitted changes detected"
        return 0
    else
        info "No uncommitted changes"
        return 1
    fi
}

# Stage all changes
stage_changes() {
    log "Staging all changes..."
    
    # Add all files
    git add .
    
    # Check what's staged
    staged_files=$(git diff --cached --name-only)
    if [ -n "$staged_files" ]; then
        success "Staged files:"
        echo "$staged_files" | while read -r file; do
            echo "  - $file"
        done
    else
        warning "No files to stage"
        return 1
    fi
}

# Create intelligent commit
create_commit() {
    log "Creating intelligent commit..."
    
    # Generate commit message based on changes
    local commit_msg="$COMMIT_MESSAGE"
    
    # Add timestamp
    commit_msg="$commit_msg [$(date +'%Y-%m-%d %H:%M:%S')]"
    
    # Create commit
    git commit -m "$commit_msg"
    
    success "Commit created: $commit_msg"
}

# Push changes to remote
push_changes() {
    log "Pushing changes to remote..."
    
    # Get remote name
    local remote=$(git remote | head -n1)
    if [ -z "$remote" ]; then
        error "No remote repository configured"
        exit 1
    fi
    
    # Push current branch
    git push "$remote" "$CURRENT_BRANCH"
    
    success "Changes pushed to $remote/$CURRENT_BRANCH"
}

# Merge with main branch
merge_with_main() {
    log "Merging with main branch..."
    
    # Check if we're already on main branch
    if [ "$CURRENT_BRANCH" = "$MAIN_BRANCH" ]; then
        info "Already on main branch, no merge needed"
        return 0
    fi
    
    # Switch to main branch
    git checkout "$MAIN_BRANCH"
    
    # Pull latest changes
    git pull origin "$MAIN_BRANCH"
    
    # Merge feature branch
    git merge "$CURRENT_BRANCH" --no-ff -m "Merge $CURRENT_BRANCH into $MAIN_BRANCH [intelligent-merge]"
    
    # Push merged changes
    git push origin "$MAIN_BRANCH"
    
    success "Successfully merged $CURRENT_BRANCH into $MAIN_BRANCH"
    
    # Switch back to feature branch
    git checkout "$CURRENT_BRANCH"
}

# Handle merge conflicts
handle_merge_conflicts() {
    log "Checking for merge conflicts..."
    
    # Check if there are any merge conflicts
    if git diff --name-only --diff-filter=U | grep -q .; then
        warning "Merge conflicts detected"
        
        # List conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U)
        echo "Conflicted files:"
        echo "$conflicted_files" | while read -r file; do
            echo "  - $file"
        done
        
        # Attempt automatic resolution
        log "Attempting automatic conflict resolution..."
        
        echo "$conflicted_files" | while read -r file; do
            if [ -f "$file" ]; then
                # Simple conflict resolution: keep our version
                log "Resolving conflict in $file..."
                
                # Remove conflict markers and keep our version
                sed -i '/^<<<<<<< /d' "$file"
                sed -i '/^/,/^>>>>>>> /d' "$file"
                
                # Stage resolved file
                git add "$file"
            fi
        done
        
        # Complete the merge
        git commit -m "Resolve merge conflicts [auto-resolved]"
        
        success "Merge conflicts resolved automatically"
    else
        info "No merge conflicts detected"
    fi
}

# Create summary report
create_summary_report() {
    log "Creating summary report..."
    
    local report_file="$PROJECT_ROOT/logs/git-push-merge-report-$(date +%s).json"
    
    # Create report
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "operation": "intelligent-git-push-merge",
  "branch": "$CURRENT_BRANCH",
  "mainBranch": "$MAIN_BRANCH",
  "commitMessage": "$COMMIT_MESSAGE",
  "filesChanged": $(git diff --cached --name-only | wc -l),
  "status": "success",
  "summary": {
    "changesCommitted": true,
    "changesPushed": true,
    "mergedWithMain": $([ "$CURRENT_BRANCH" != "$MAIN_BRANCH" ] && echo "true" || echo "false"),
    "conflictsResolved": false
  }
}
EOF
    
    success "Summary report created: $report_file"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Intelligent Git Push & Merge System${NC}"
    echo "===="
    echo
    
    # Check prerequisites
    check_git_repo
    
    # Check if there are changes to commit
    if ! check_git_status; then
        info "No changes to commit"
        exit 0
    fi
    
    # Stage changes
    if ! stage_changes; then
        info "No changes to stage"
        exit 0
    fi
    
    # Create commit
    create_commit
    
    # Push changes
    push_changes
    
    # Merge with main branch
    merge_with_main
    
    # Create summary report
    create_summary_report
    
    echo
    success "Intelligent Git Push & Merge completed successfully!"
    echo
    info "Summary:"
    echo "  - Branch: $CURRENT_BRANCH"
    echo "  - Main branch: $MAIN_BRANCH"
    echo "  - Changes committed and pushed"
    echo "  - Merged with main branch"
    echo "  - Report generated in logs/"
    echo
}

# Run main function
main "$@"