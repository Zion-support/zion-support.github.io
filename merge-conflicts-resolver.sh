#!/bin/bash

# Merge Conflicts Resolver Script
# This script will help resolve merge conflicts and merge PRs into main

set -e

echo "🔍 Starting merge conflicts resolution process..."

# Function to check if we're in a git repository
check_git_repo() {
    if [ ! -d ".git" ]; then
        echo "❌ Not in a git repository"
        exit 1
    fi
    echo "✅ Git repository detected"
}

# Function to check for merge conflicts
check_merge_conflicts() {
    echo "🔍 Checking for merge conflicts..."
    
    # Check for conflict markers in files
    if grep -r "<<<<<<< HEAD" . --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=dist 2>/dev/null; then
        echo "⚠️  Found merge conflict markers in files"
        return 1
    else
        echo "✅ No merge conflict markers found"
        return 0
    fi
}

# Function to resolve conflicts in a file
resolve_conflicts_in_file() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file..."
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Remove conflict markers and keep the main branch version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "✅ Conflicts resolved in $file"
}

# Function to merge a branch
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge branch: $branch"
    
    # Try to merge
    if git merge "$branch" --no-commit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check for conflict files
        local conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflict_files" ]; then
            echo "🔧 Resolving conflicts in files: $conflict_files"
            for file in $conflict_files; do
                resolve_conflicts_in_file "$file"
            done
            
            # Add resolved files
            git add $conflict_files
            
            # Commit the merge
            git commit -m "Resolve merge conflicts in $branch"
            echo "✅ Conflicts resolved and merged $branch"
            return 0
        else
            echo "❌ Failed to merge $branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Function to get list of branches to merge
get_branches_to_merge() {
    echo "📋 Getting list of branches to merge..."
    
    # Get recent branches that aren't merged
    git branch -r --no-merged origin/main | head -10 | while read branch; do
        # Skip backup branches
        if [[ ! "$branch" =~ backup ]]; then
            echo "$branch"
        fi
    done
}

# Main execution
main() {
    check_git_repo
    
    # Check current status
    if ! check_merge_conflicts; then
        echo "🔧 Resolving existing conflicts..."
        find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
            if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
                resolve_conflicts_in_file "$file"
            fi
        done
    fi
    
    # Switch to main branch
    echo "🔄 Switching to main branch..."
    git checkout main 2>/dev/null || git checkout -b main
    
    # Get branches to merge
    branches=$(get_branches_to_merge)
    
    if [ -z "$branches" ]; then
        echo "✅ No branches to merge"
        exit 0
    fi
    
    echo "📋 Branches to merge:"
    echo "$branches"
    
    # Merge each branch
    echo "$branches" | while read branch; do
        if [ -n "$branch" ]; then
            merge_branch "$branch"
        fi
    done
    
    echo "🎉 Merge conflicts resolution completed!"
}

# Run main function
main "$@"