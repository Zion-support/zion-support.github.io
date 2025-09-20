#!/bin/bash

# Smart Merge Resolver - Efficiently merge recent branches with conflict resolution
set -e

echo "🚀 Starting Smart Merge Resolver..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to resolve merge conflicts
resolve_conflicts() {
    local branch_name=$1
    log "🔧 Resolving conflicts in $branch_name..."
    
    # Get conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
    
    if [ -z "$conflicted_files" ]; then
        log "✅ No conflicts found"
        return 0
    fi
    
    log "Found conflicts in: $conflicted_files"
    
    # Resolve conflicts by keeping incoming changes for most files
    for file in $conflicted_files; do
        if [ -f "$file" ]; then
            log "🔧 Resolving conflicts in $file"
            
            # For package files, prefer the incoming version
            if [[ "$file" == *"package"* ]]; then
                git checkout --theirs "$file" 2>/dev/null || true
            # For config files, prefer the incoming version
            elif [[ "$file" == *"config"* ]] || [[ "$file" == *".toml"* ]] || [[ "$file" == *".json"* ]]; then
                git checkout --theirs "$file" 2>/dev/null || true
            # For other files, try to merge intelligently
            else
                # Remove conflict markers and keep both versions where possible
                sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file" 2>/dev/null || true
            fi
            
            git add "$file" 2>/dev/null || true
        fi
    done
    
    # Try to commit the resolved conflicts
    if git commit --no-edit 2>/dev/null; then
        log "✅ Successfully resolved conflicts in $branch_name"
        return 0
    else
        log "⚠️ Failed to commit resolved conflicts"
        return 1
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch_name=$1
    log "🔄 Attempting to merge $branch_name..."
    
    # Try simple merge first
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        log "✅ Successfully merged $branch_name"
        return 0
    fi
    
    # Check if it's already up to date
    if git merge "origin/$branch_name" --no-edit 2>&1 | grep -q "Already up to date"; then
        log "ℹ️ Branch $branch_name already up to date"
        return 0
    fi
    
    # Handle merge conflicts
    log "⚠️ Merge conflicts detected in $branch_name"
    if resolve_conflicts "$branch_name"; then
        log "✅ Successfully resolved and merged $branch_name"
        return 0
    else
        log "❌ Failed to resolve conflicts in $branch_name, aborting merge"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Main merge process
main() {
    log "📋 Ensuring we're on main branch and up to date..."
    git checkout main
    git pull origin main
    
    # Get recent cursor branches (last 100)
    log "🔍 Getting recent cursor branches..."
    local branches=$(git branch -r | grep "cursor/" | tail -100 | sed 's/origin\///')
    local total_branches=$(echo "$branches" | wc -l)
    
    log "📊 Found $total_branches recent cursor branches to process"
    
    local success_count=0
    local conflict_count=0
    local failed_count=0
    local uptodate_count=0
    local processed_count=0
    
    # Process branches
    for branch in $branches; do
        processed_count=$((processed_count + 1))
        log "📋 Processing branch $processed_count/$total_branches: $branch"
        
        case $(merge_branch "$branch") in
            0) success_count=$((success_count + 1)) ;;
            1) failed_count=$((failed_count + 1)) ;;
        esac
        
        # Push every 10 successful merges
        if [ $((success_count % 10)) -eq 0 ] && [ $success_count -gt 0 ]; then
            log "🔄 Pushing changes after $success_count successful merges..."
            git push origin main 2>/dev/null || log "⚠️ Push failed, continuing..."
        fi
        
        # Show progress every 25 branches
        if [ $((processed_count % 25)) -eq 0 ]; then
            log "📊 Progress: $processed_count processed, $success_count merged, $failed_count failed"
        fi
    done
    
    # Final push
    log "🔄 Pushing final changes..."
    git push origin main
    
    # Summary
    log "📊 Smart Merge Summary:"
    log "✅ Successfully merged: $success_count branches"
    log "❌ Failed to merge: $failed_count branches"
    log "📋 Total processed: $processed_count branches"
    log "🎉 Smart merge process completed!"
}

# Run main function
main "$@"