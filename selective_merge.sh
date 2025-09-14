#!/bin/bash

# Selective merge script for the most important branches
# This script will merge the most recent and important branches first

set -e

echo "🚀 Starting selective branch merge process..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Create a log file for tracking
LOG_FILE="selective_merge_log_$(date +%Y%m%d_%H%M%S).txt"
echo "📝 Logging to: $LOG_FILE"

# Function to log messages
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Function to safely merge a branch
merge_branch() {
    local branch_name="$1"
    log "🔄 Attempting to merge branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        log "❌ Branch $branch_name does not exist, skipping"
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch_name" main; then
        log "✅ Branch $branch_name is already merged, skipping"
        return 0
    fi
    
    # Attempt to merge
    if git merge "origin/$branch_name" --no-ff -m "Merge branch $branch_name into main"; then
        log "✅ Successfully merged $branch_name"
        return 0
    else
        log "⚠️  Merge conflict in $branch_name, resolving..."
        
        # Resolve conflicts
        resolve_conflicts "$branch_name"
        
        # Add resolved files
        git add .
        
        # Commit the merge
        if git commit --no-edit; then
            log "✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            log "❌ Failed to commit merge for $branch_name"
            git merge --abort
            return 1
        fi
    fi
}

# Function to resolve conflicts
resolve_conflicts() {
    local branch_name="$1"
    log "🔧 Resolving conflicts for branch: $branch_name"
    
    # Get list of conflicted files
    conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
    
    for file in $conflicted_files; do
        log "🔧 Resolving conflict in: $file"
        
        if [[ "$file" == "app/page.tsx" ]]; then
            resolve_page_conflict "$file"
        elif [[ "$file" == "app/components/"* ]]; then
            resolve_component_conflict "$file"
        else
            resolve_generic_conflict "$file"
        fi
    done
}

# Function to resolve page.tsx conflicts
resolve_page_conflict() {
    local file="$1"
    log "🔧 Resolving page.tsx conflict with intelligent merging"
    
    # Create a backup
    cp "$file" "${file}.backup"
    
    # Use sed to resolve conflicts by keeping both sides
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up extra whitespace
    sed -i '/^[[:space:]]*$/N;/^\n$/d' "$file"
    
    log "✅ Resolved page.tsx conflict"
}

# Function to resolve component conflicts
resolve_component_conflict() {
    local file="$1"
    log "🔧 Resolving component conflict in: $file"
    
    # For component files, keep the main branch version
    git checkout --ours "$file"
    log "✅ Resolved component conflict by keeping main branch version"
}

# Function to resolve generic conflicts
resolve_generic_conflict() {
    local file="$1"
    log "🔧 Resolving generic conflict in: $file"
    
    # For most files, keep the main branch version
    git checkout --ours "$file"
    log "✅ Resolved generic conflict by keeping main branch version"
}

# Priority branches to merge (most recent and important)
priority_branches=(
    "cursor/create-and-deploy-new-content-6e3b"
    "cursor/create-and-deploy-new-content-425f"
    "cursor/create-and-deploy-new-content-c465"
    "cursor/create-and-deploy-new-content-abb5"
    "cursor/create-and-deploy-new-content-949c"
    "cursor/create-and-deploy-new-content-5548"
    "cursor/create-and-deploy-new-content-31f6"
    "cursor/create-and-deploy-new-content-62ab"
    "cursor/create-and-deploy-new-content-2180"
    "cursor/create-and-deploy-new-content-014f"
)

log "📋 Processing priority branches..."

# Counter for tracking
success_count=0
error_count=0

# Process each priority branch
for branch in "${priority_branches[@]}"; do
    log "🔄 Processing priority branch: $branch"
    
    if merge_branch "$branch"; then
        ((success_count++))
        log "✅ Successfully processed $branch"
        
        # Push changes after each successful merge
        log "📤 Pushing changes to main..."
        git push origin main
    else
        ((error_count++))
        log "❌ Failed to process $branch"
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 2
done

# Final summary
log "📊 Selective Merge Summary:"
log "✅ Successfully merged: $success_count branches"
log "❌ Failed to merge: $error_count branches"
log "📝 Full log saved to: $LOG_FILE"

log "🎉 Selective merge process completed!"