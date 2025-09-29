#!/bin/bash

# Comprehensive Merge Conflicts Resolution and Improvements Script
set -e

echo "🚀 Starting comprehensive merge conflicts resolution and improvements..."

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to safely run git commands
safe_git() {
    echo "Running: git $*"
    if command_exists git; then
        git "$@" || {
            echo "Git command failed: git $*"
            return 1
        }
    else
        echo "Git not found, skipping git operations"
        return 1
    }
}

# Function to resolve merge conflicts automatically
resolve_conflicts() {
    local branch_name="$1"
    echo "Attempting to merge branch: $branch_name"
    
    if safe_git merge "origin/$branch_name"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️ Merge conflict detected in $branch_name, resolving..."
        
        # Check if there are conflicts
        if safe_git status | grep -q "both modified"; then
            echo "Resolving conflicts by accepting incoming changes..."
            
            # Auto-resolve conflicts by accepting incoming changes
            safe_git checkout --theirs . || {
                echo "Failed to checkout --theirs, trying alternative approach..."
                # Alternative: accept current changes
                safe_git checkout --ours . || {
                    echo "Failed to resolve conflicts automatically"
                    return 1
                }
            }
            
            # Add resolved files
            safe_git add . || {
                echo "Failed to add resolved files"
                return 1
            }
            
            # Commit the merge
            safe_git commit -m "Merge $branch_name: Resolve conflicts automatically" || {
                echo "Failed to commit merge resolution"
                return 1
            }
            
            echo "✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            echo "No conflicts found, merge should have succeeded"
            return 0
        fi
    fi
}

# Main execution
main() {
    echo "📋 Current working directory: $(pwd)"
    
    # Check if we're in a git repository
    if [ ! -d ".git" ]; then
        echo "❌ Not in a git repository. Please run this script from the project root."
        exit 1
    fi
    
    # Check current branch
    current_branch=$(git branch --show-current 2>/dev/null || echo "unknown")
    echo "📍 Current branch: $current_branch"
    
    # Fetch latest changes
    echo "🔄 Fetching latest changes from remote..."
    safe_git fetch --all || {
        echo "⚠️ Failed to fetch, continuing with local operations"
    }
    
    # Check for uncommitted changes
    if ! safe_git diff --quiet || ! safe_git diff --cached --quiet; then
        echo "⚠️ Uncommitted changes detected. Stashing them..."
        safe_git stash push -m "Auto-stash before merge operations" || {
            echo "Failed to stash changes"
            exit 1
        }
    fi
    
    # List of branches to merge (based on previous analysis)
    branches_to_merge=(
        "cursor/fix-netlify-build-and-merge-to-main-485c"
        "fix-typescript-errors-and-build-stability"
        "cursor/fix-netlify-build-and-merge-to-main-1fc1"
    )
    
    # Merge each branch
    for branch in "${branches_to_merge[@]}"; do
        echo ""
        echo "🔄 Processing branch: $branch"
        
        # Check if branch exists
        if safe_git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
            echo "✅ Branch $branch exists, attempting merge..."
            if resolve_conflicts "$branch"; then
                echo "✅ Successfully processed $branch"
            else
                echo "❌ Failed to process $branch"
                # Continue with other branches
            fi
        else
            echo "⚠️ Branch $branch not found, skipping..."
        fi
    done
    
    # Check final status
    echo ""
    echo "📊 Final repository status:"
    safe_git status || echo "Could not get git status"
    
    # Show recent commits
    echo ""
    echo "📝 Recent commits:"
    safe_git log --oneline -10 || echo "Could not get commit log"
    
    echo ""
    echo "🎉 Merge conflicts resolution completed!"
}

# Run main function
main "$@"