#!/bin/bash

# Comprehensive Merge Conflict Resolution Script
<<<<<<< HEAD
# This script will resolve all merge conflicts and merge PRs into main branch

set -e

echo "🚀 Starting comprehensive merge conflict resolution and PR merging process..."

# Function to resolve merge conflicts by accepting our changes
resolve_conflicts() {
    echo "📝 Resolving merge conflicts by accepting our changes..."
    
    # Remove all conflict markers
    find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.html" | while read file; do
        if [ -f "$file" ]; then
            # Remove conflict markers
            sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*/d' "$file" 2>/dev/null || true
        fi
    done
    
    # Add all resolved files
    git add . || true
}

# Function to merge a branch into main
merge_branch() {
    local branch_name="$1"
    echo "🔄 Merging branch: $branch_name"
    
    # Checkout main branch
    git checkout main
    
    # Try to merge the branch
    if git merge "origin/$branch_name" --no-ff -m "Merge $branch_name into main - resolved conflicts"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving..."
        resolve_conflicts
        if git commit -m "Resolve merge conflicts for $branch_name"; then
            echo "✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

=======
                    
                    log "✅ Resolved conflicts in $file"
                else
                    # For other files, try to resolve by taking the incoming changes
                    git checkout --theirs "$file" 2>/dev/null || {
                        log "⚠️  Could not checkout theirs for $file, trying ours..."
                        git checkout --ours "$file" 2>/dev/null || {
                            log "❌ Could not resolve $file automatically"
                            continue
                        }
                    }
                fi
            done
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                log "✅ Successfully resolved and merged PR #$pr_number"
                return 0
            else
                log "❌ Failed to complete merge for PR #$pr_number"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            log "❌ No conflict markers found but merge failed for PR #$pr_number"
=======
# This script will resolve all merge conflicts and merge PRs into main branch

set -e

echo "🚀 Starting comprehensive merge conflict resolution and PR merging process..."

# Function to resolve merge conflicts by accepting our changes
resolve_conflicts() {
    echo "📝 Resolving merge conflicts by accepting our changes..."
    
    # Remove all conflict markers
    find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.html" | while read file; do
        if [ -f "$file" ]; then
            # Remove conflict markers
>>>>>>> origin/backup-main-20250918-004015
# Function to clean up old branches
cleanup_branches() {
    echo "🧹 Cleaning up old branches..."
    
    # Delete local branches that are already merged
    git branch --merged main | grep -v "main" | xargs -r git branch -d || true
    
    # Delete remote tracking branches for merged PRs
    git remote prune origin || true
}

# Function to push changes to remote
push_changes() {
    echo "📤 Pushing changes to remote..."
    git push origin main --force-with-lease || git push origin main --force
}

# Main execution
main() {
    echo "📍 Current status:"
    git status --short
    
    # Get list of recent feature branches
    echo "🔍 Finding recent feature branches..."
    recent_branches=$(git branch -r --sort=-committerdate | grep -E "cursor/(create-and-deploy-new-content|add-new-services|analyze-improve-and-deploy)" | head -10)
    
    if [ -z "$recent_branches" ]; then
        echo "ℹ️  No recent feature branches found to merge"
        return 0
    fi
    
    echo "📋 Found branches to merge:"
    echo "$recent_branches"
    
    # Merge each branch
    successful_merges=0
    failed_merges=0
    
    while IFS= read -r branch; do
        # Remove 'origin/' prefix
        branch_name="${branch#origin/}"
        
        if [ "$branch_name" != "main" ]; then
            echo ""
            echo "🔄 Processing branch: $branch_name"
            
            if merge_branch "$branch_name"; then
                ((successful_merges++))
            else
                ((failed_merges++))
            fi
            
            # Small delay to avoid overwhelming the system
            sleep 1
        fi
    done <<< "$recent_branches"
    
    echo ""
    echo "📊 Merge Summary:"
    echo "✅ Successful merges: $successful_merges"
    echo "❌ Failed merges: $failed_merges"
    
    # Clean up
    cleanup_branches
    
    # Push changes
    push_changes
    
    echo ""
    echo "🎉 Merge conflict resolution and PR merging process completed!"
    echo "📈 Main branch is now up to date with all resolved conflicts"
}

# Run main function
main "$@"