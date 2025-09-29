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