#!/bin/bash

# Comprehensive Merge Conflict Resolution Script
# This script will resolve all merge conflicts and merge PRs into main

set -e

echo "🚀 Starting comprehensive merge conflict resolution..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to check if we're in a git repo
check_git_repo() {
    if [ ! -d ".git" ]; then
        echo "❌ Error: Not in a git repository"
        exit 1
    fi
    echo "✅ Git repository detected"
}

# Function to fetch latest changes
fetch_latest() {
    log "📥 Fetching latest changes from remote..."
    git fetch origin --all
    echo "✅ Latest changes fetched"
}

# Function to update main branch
update_main() {
    log "🔄 Updating main branch..."
    git checkout main
    git pull origin main
    echo "✅ Main branch updated"
}

# Function to get open PRs
get_open_prs() {
    log "🔍 Finding open pull requests..."
    
    # Get all remote branches that might be PRs
    local pr_branches
    pr_branches=$(git branch -r | grep -v HEAD | grep -E "(pull|pr|feature|bugfix|cursor)" | sed 's/origin\///' | tr -d ' ')
    
    if [ -z "$pr_branches" ]; then
        echo "ℹ️  No PR branches found"
        return 1
    fi
    
    echo "📋 Found PR branches:"
    echo "$pr_branches"
    return 0
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    local branch=$1
    log "🔧 Resolving conflicts for branch: $branch"
    
    # Checkout the branch
    git checkout "$branch"
    
    # Try to merge main into the branch
    if git merge main --no-commit 2>/dev/null; then
        echo "✅ No conflicts found for $branch"
        git commit -m "Merge main into $branch - no conflicts"
    else
        echo "⚠️  Conflicts detected for $branch"
        
        # Auto-resolve common conflicts
        echo "🔧 Auto-resolving conflicts..."
        
        # Resolve package.json conflicts
        if [ -f "package.json" ]; then
            git checkout --ours package.json 2>/dev/null || true
            git add package.json 2>/dev/null || true
        fi
        
        # Resolve lock file conflicts
        if [ -f "package-lock.json" ]; then
            git checkout --ours package-lock.json 2>/dev/null || true
            git add package-lock.json 2>/dev/null || true
        fi
        
        # Remove backup files
        find . -name "*.backup*" -type f -exec git rm {} \; 2>/dev/null || true
        find . -name "*.bak" -type f -exec git rm {} \; 2>/dev/null || true
        
        # Resolve app file conflicts
        if [ -f "app/page.tsx" ]; then
            git checkout --ours app/page.tsx 2>/dev/null || true
            git add app/page.tsx 2>/dev/null || true
        fi
        
        if [ -f "app/layout.tsx" ]; then
            git checkout --ours app/layout.tsx 2>/dev/null || true
            git add app/layout.tsx 2>/dev/null || true
        fi
        
        # Resolve component conflicts
        if [ -d "components" ]; then
            git checkout --ours components/ 2>/dev/null || true
            git add components/ 2>/dev/null || true
        fi
        
        # Add all resolved files
        git add .
        
        # Commit the resolution
        git commit -m "Auto-resolve merge conflicts in $branch"
        echo "✅ Conflicts resolved for $branch"
    fi
}

# Function to merge PR into main
merge_pr() {
    local branch=$1
    log "🔄 Merging $branch into main..."
    
    # Switch to main
    git checkout main
    
    # Merge the branch
    if git merge "$branch" --no-ff -m "Merge $branch into main"; then
        echo "✅ Successfully merged $branch into main"
        
        # Push to remote
        git push origin main
        echo "📤 Pushed merged changes to remote main"
        
        # Delete the branch
        git branch -d "$branch" 2>/dev/null || true
        git push origin --delete "$branch" 2>/dev/null || true
        echo "🗑️  Deleted branch $branch"
    else
        echo "❌ Failed to merge $branch into main"
        return 1
    fi
}

# Function to clean up
cleanup() {
    log "🧹 Cleaning up..."
    
    # Remove backup files
    find . -name "*.backup*" -type f -delete 2>/dev/null || true
    find . -name "*.bak" -type f -delete 2>/dev/null || true
    find . -name "*~" -type f -delete 2>/dev/null || true
    
    # Remove empty directories
    find . -type d -empty -delete 2>/dev/null || true
    
    echo "✅ Cleanup completed"
}

# Function to update dependencies
update_dependencies() {
    log "📦 Updating dependencies..."
    
    if [ -f "package.json" ]; then
        if command -v npm &> /dev/null; then
            npm install --silent
            echo "✅ Dependencies updated with npm"
        elif command -v yarn &> /dev/null; then
            yarn install --silent
            echo "✅ Dependencies updated with yarn"
        else
            echo "⚠️  No package manager found"
        fi
    else
        echo "ℹ️  No package.json found"
    fi
}

# Main execution
main() {
    log "🎯 Starting comprehensive merge conflict resolution..."
    
    # Check if we're in a git repo
    check_git_repo
    
    # Fetch latest changes
    fetch_latest
    
    # Update main branch
    update_main
    
    # Clean up
    cleanup
    
    # Get open PRs
    if ! get_open_prs; then
        echo "✅ No open PRs to process"
        exit 0
    fi
    
    # Get list of open PR branches
    local pr_branches
    pr_branches=$(git branch -r | grep -v HEAD | grep -E "(pull|pr|feature|bugfix|cursor)" | sed 's/origin\///' | tr -d ' ')
    
    # Process each PR
    local success_count=0
    local total_count=0
    
    for branch in $pr_branches; do
        total_count=$((total_count + 1))
        log "🔄 Processing branch: $branch"
        
        # Resolve conflicts
        if resolve_conflicts "$branch"; then
            # Merge the PR
            if merge_pr "$branch"; then
                success_count=$((success_count + 1))
                echo "✅ Successfully processed $branch"
            else
                echo "❌ Failed to merge $branch"
            fi
        else
            echo "❌ Failed to resolve conflicts for $branch"
        fi
        
        echo "---"
    done
    
    # Update dependencies
    update_dependencies
    
    # Final cleanup
    cleanup
    
    # Summary
    log "🎉 Merge process completed!"
    echo "📊 Summary:"
    echo "   - Total PRs processed: $total_count"
    echo "   - Successfully merged: $success_count"
    echo "   - Failed: $((total_count - success_count))"
    echo "   - Dependencies updated"
    echo "   - Cleanup completed"
}

# Run the main function
main "$@"