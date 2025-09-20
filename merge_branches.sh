#!/bin/bash

# Script to systematically merge branches into main
# This will handle conflicts and merge branches one by one

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to merge a single branch
merge_branch() {
    local branch_name="$1"
    local branch_ref="origin/$branch_name"
    
    log "Attempting to merge branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_ref"; then
        warning "Branch $branch_ref does not exist, skipping"
        return 1
    fi
    
    # Try to merge
    if git merge --no-ff "$branch_ref" -m "Merge branch '$branch_name' into main"; then
        log "Successfully merged $branch_name"
        return 0
    else
        error "Failed to merge $branch_name due to conflicts"
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            warning "Resolving conflicts for $branch_name"
            
            # Auto-resolve simple conflicts
            git status --porcelain | while read status file; do
                case "$status" in
                    "UU"|"AA")
                        warning "Conflict in $file - attempting auto-resolution"
                        # Try to resolve by taking the incoming version for most files
                        if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.jsx ]] || [[ "$file" == *.js ]]; then
                            git checkout --theirs "$file" 2>/dev/null || true
                        else
                            git checkout --ours "$file" 2>/dev/null || true
                        fi
                        git add "$file" 2>/dev/null || true
                        ;;
                    "DD")
                        warning "Deleted file $file - removing"
                        git rm "$file" 2>/dev/null || true
                        ;;
                esac
            done
            
            # Try to commit the resolution
            if git commit --no-edit; then
                log "Successfully resolved conflicts for $branch_name"
                return 0
            else
                error "Could not resolve conflicts for $branch_name, aborting merge"
                git merge --abort
                return 1
            fi
        else
            error "Unknown merge failure for $branch_name"
            git merge --abort
            return 1
        fi
    fi
}

# Get list of branches to merge
get_branches_to_merge() {
    # Get recent branches (last 50) that are not main
    git branch -r | grep -E "(cursor|codex)" | grep -v "main" | head -50
}

# Main execution
main() {
    log "Starting branch merging process"
    
    # Ensure we're on main branch
    git checkout main
    
    # Pull latest changes
    log "Pulling latest changes from origin/main"
    git pull origin main
    
    # Get branches to merge
    branches=$(get_branches_to_merge)
    
    if [ -z "$branches" ]; then
        log "No branches found to merge"
        return 0
    fi
}

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch="$1"
    echo "Attempting to merge $branch..."
    
    log "Found branches to merge:"
    echo "$branches"
    
    # Counter for statistics
    success_count=0
    failure_count=0
    total_count=$(echo "$branches" | wc -l)
    
    # Merge each branch
    while IFS= read -r branch; do
        branch_name=$(echo "$branch" | sed 's/origin\///')
        log "Processing branch $branch_name ($((success_count + failure_count + 1))/$total_count)"
        
        if merge_branch "$branch_name"; then
            ((success_count++))
        else
            ((failure_count++))
        fi
        
        # Add a small delay to avoid overwhelming the system
        sleep 1
        
    done <<< "$branches"
    
    # Final statistics
    log "Merge process completed!"
    log "Successfully merged: $success_count branches"
    log "Failed to merge: $failure_count branches"
    log "Total processed: $total_count branches"
    
    # Push changes
    log "Pushing changes to origin/main"
    git push origin main
}

# Run main function
main "$@"
