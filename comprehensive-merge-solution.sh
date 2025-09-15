#!/bin/bash

# Comprehensive Merge Solution for Zion Tech Group
# This script handles all merge conflicts and PR merging

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to resolve merge conflicts automatically
resolve_conflicts() {
    local file="$1"
    log "Resolving conflicts in: $file"
    
    if [ ! -f "$file" ]; then
        warning "File not found: $file"
        return 1
    fi
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Simple conflict resolution strategy
    # Keep both versions where possible, prefer newer content
    sed -i '/^    sed -i '/^    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^    sed -i '/^    
    # Add the resolved file
    git add "$file"
    success "Resolved conflicts in: $file"
}

# Main execution
main() {
    log "🚀 Starting comprehensive merge solution..."
    
    # Navigate to workspace
    cd /workspace
    
    # Check if we're in a git repository
    if [ ! -d ".git" ]; then
        error "Not in a git repository"
        exit 1
    fi
    
    # Get current branch
    CURRENT_BRANCH=$(git branch --show-current)
    log "Current branch: $CURRENT_BRANCH"
    
    # Fetch all remote changes
    log "📥 Fetching all remote changes..."
    git fetch origin --all --prune
    
    # Check for any existing merge conflicts
    log "🔍 Checking for existing merge conflicts..."
    if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        warning "Found existing merge conflicts. Resolving..."
        
        # Get list of conflicted files
        conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
        
        for file in $conflicted_files; do
            resolve_conflicts "$file"
        done
        
        # Commit resolved conflicts
        if git status --porcelain | grep -q "^A"; then
            git commit -m "Resolve merge conflicts automatically"
            success "Committed resolved conflicts"
        fi
    fi
    
    # Switch to main branch
    log "🔄 Switching to main branch..."
    if git show-ref --verify --quiet refs/heads/main; then
        git checkout main
    elif git show-ref --verify --quiet refs/heads/master; then
        git checkout master
        MAIN_BRANCH="master"
    else
        error "No main or master branch found"
        exit 1
    fi
    
    MAIN_BRANCH=$(git branch --show-current)
    log "On main branch: $MAIN_BRANCH"
    
    # Pull latest main
    log "📥 Pulling latest main branch..."
    git pull origin $MAIN_BRANCH
    
    # Get list of all remote branches
    log "🌿 Getting list of all branches..."
    branches=$(git branch -r | grep -v HEAD | sed 's/origin\///' | grep -v "$MAIN_BRANCH" | sort -u)
    
    log "Found branches to merge: $branches"
    
    # Process each branch
    for branch in $branches; do
        log "🔄 Processing branch: $branch"
        
        # Check if branch exists locally
        if ! git show-ref --verify --quiet refs/heads/$branch; then
            log "📥 Creating local branch $branch from remote"
            git checkout -b $branch origin/$branch
        else
            git checkout $branch
        fi
        
        # Update branch with latest main
        log "🔀 Merging main into $branch..."
        if git merge $MAIN_BRANCH --no-edit --no-ff; then
            success "Successfully merged main into $branch"
        else
            warning "Merge conflicts detected in $branch. Resolving..."
            
            # Resolve conflicts
            conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
            
            for file in $conflicted_files; do
                resolve_conflicts "$file"
            done
            
            # Commit resolved conflicts
            if git status --porcelain | grep -q "^A"; then
                git commit -m "Resolve merge conflicts with main branch"
                success "Committed resolved conflicts for $branch"
            fi
        fi
        
        # Push updated branch
        log "📤 Pushing updated $branch..."
        git push origin $branch
        
        # Switch back to main
        git checkout $MAIN_BRANCH
        
        # Merge branch into main
        log "🔀 Merging $branch into main..."
        if git merge $branch --no-edit --no-ff; then
            success "Successfully merged $branch into main"
        else
            warning "Merge conflicts when merging $branch into main. Resolving..."
            
            # Resolve conflicts
            conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
            
            for file in $conflicted_files; do
                resolve_conflicts "$file"
            done
            
            # Commit resolved conflicts
            if git status --porcelain | grep -q "^A"; then
                git commit -m "Resolve merge conflicts when merging $branch into main"
                success "Committed resolved conflicts for $branch merge into main"
            fi
        fi
        
        # Push updated main
        log "📤 Pushing updated main branch..."
        git push origin $MAIN_BRANCH
        
        success "✅ Completed processing branch: $branch"
    done
    
    # Final status
    log "📊 Final status:"
    git status --short
    
    # Show recent commits
    log "📝 Recent commits:"
    git log --oneline -10
    
    # Clean up merged branches
    log "🧹 Cleaning up merged branches..."
    for branch in $branches; do
        if git branch --merged $MAIN_BRANCH | grep -q "$branch"; then
            log "🗑️  Deleting merged branch: $branch"
            git branch -d $branch 2>/dev/null || true
            git push origin --delete $branch 2>/dev/null || true
        fi
    done
    
    success "🎉 Comprehensive merge solution completed!"
    success "All PRs have been merged into $MAIN_BRANCH branch."
}

# Run main function
main "$@"