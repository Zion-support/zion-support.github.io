#!/bin/bash

# Continue merge script for processing more branches
set -e

echo "🚀 Continuing merge process with more branches..."
echo "⏰ Started at: $(date)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to safely merge a single branch
merge_single_branch() {
    local branch_name="$1"
    
    log_info "Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        log_warning "Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Try to merge
    if git merge "origin/$branch_name" --no-edit --no-ff 2>/dev/null; then
        log_success "Successfully merged $branch_name"
        return 0
    else
        log_warning "Merge conflict detected in $branch_name, resolving..."
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            log_info "Resolving merge conflicts in $branch_name..."
            
            # Auto-resolve conflicts
            git status --porcelain | while read status file; do
                if [[ "$status" =~ ^UU|^AA|^DD ]]; then
                    log_info "Resolving conflict in: $file"
                    
                    # For package files, prefer the newer version
                    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "pnpm-lock.yaml" ]]; then
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    # For config files, prefer main branch
                    elif [[ "$file" == *.toml || "$file" == *.json || "$file" == *.js || "$file" == *.ts ]]; then
                        git checkout --ours "$file" 2>/dev/null || true
                    # For documentation, prefer feature branch
                    elif [[ "$file" == *.md || "$file" == *.txt ]]; then
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    # For source files, prefer feature branch
                    elif [[ "$file" == src/* || "$file" == app/* || "$file" == pages/* ]]; then
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    else
                        # Default to main branch
                        git checkout --ours "$file" 2>/dev/null || true
                    fi
                fi
            done
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Commit the merge
            if git commit --no-edit 2>/dev/null; then
                log_success "Successfully resolved conflicts and merged $branch_name"
                return 0
            else
                log_error "Failed to commit merge for $branch_name"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            log_error "No conflicts found but merge failed for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Process more cursor branches
log_info "Processing more cursor branches..."
for branch in $(git branch -r | grep "cursor/" | grep -v "fix-netlify" | head -50 | tail -20 | sed 's/origin\///'); do
    merge_single_branch "$branch"
    sleep 0.5
done

# Process more codex branches
log_info "Processing more codex branches..."
for branch in $(git branch -r | grep "codex/" | head -50 | tail -20 | sed 's/origin\///'); do
    merge_single_branch "$branch"
    sleep 0.5
done

# Process more chore branches
log_info "Processing more chore branches..."
for branch in $(git branch -r | grep "chore/" | head -50 | tail -20 | sed 's/origin\///'); do
    merge_single_branch "$branch"
    sleep 0.5
done

# Process content branches
log_info "Processing content branches..."
for branch in $(git branch -r | grep "content/" | head -20 | sed 's/origin\///'); do
    merge_single_branch "$branch"
    sleep 0.5
done

# Process clean branches
log_info "Processing clean branches..."
for branch in $(git branch -r | grep "clean-" | head -20 | sed 's/origin\///'); do
    merge_single_branch "$branch"
    sleep 0.5
done

# Final commit and push
log_info "Committing final changes..."
git add . 2>/dev/null || true
git commit -m "Continue batch merge: processed additional branches - $(date)" 2>/dev/null || true

log_info "Pushing changes to origin/main..."
git push origin main 2>/dev/null || {
    log_warning "Failed to push changes, but local merge is complete"
}

log_success "🎉 Continue merge process completed!"
log_info "⏰ Completed at: $(date)"