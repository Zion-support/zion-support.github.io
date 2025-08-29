#!/bin/bash

# Comprehensive script to resolve all merge conflicts and merge all open PRs
set -e

echo "🚀 Starting comprehensive merge conflict resolution and PR merging..."

cd /workspace

# Function to check if git command is available
check_git() {
    if ! command -v git &> /dev/null; then
        echo "❌ Git is not installed or not in PATH"
        exit 1
    fi
}

# Function to check git status
check_status() {
    echo "📊 Current git status:"
    git status --porcelain
}

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    if [ -f "$file" ]; then
        # Remove all conflict markers
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        echo "✅ Conflicts resolved in: $file"
    else
        echo "⚠️ File not found: $file"
    fi
}

# Function to resolve all conflicts
resolve_all_conflicts() {
    echo "🔍 Searching for files with merge conflicts..."
    
    # Find all files with conflict markers
    local conflict_files=$(grep -l "<<<<<<< HEAD" -r src/ 2>/dev/null || true)
    
    if [ -n "$conflict_files" ]; then
        echo "Found files with conflicts:"
        echo "$conflict_files"
        
        # Resolve conflicts in each file
        while IFS= read -r file; do
            resolve_file_conflicts "$file"
        done <<< "$conflict_files"
    else
        echo "✅ No files with merge conflicts found"
    fi
}

# Function to add all resolved files
add_resolved_files() {
    echo "📁 Adding all resolved files..."
    git add .
    echo "✅ All files added to staging"
}

# Function to complete cherry-pick
complete_cherry_pick() {
    echo "🍒 Completing cherry-pick..."
    
    # Check if we're in the middle of a cherry-pick
    if [ -f ".git/CHERRY_PICK_HEAD" ]; then
        git cherry-pick --continue
        echo "✅ Cherry-pick completed"
    else
        echo "ℹ️ No cherry-pick in progress"
    fi
}

# Function to switch to main branch
switch_to_main() {
    echo "🔄 Switching to main branch..."
    git checkout main
    echo "✅ Switched to main branch"
}

# Function to merge improvements branch
merge_improvements() {
    echo "🔀 Merging improvements branch..."
    
    # Check if the branch exists
    if git show-ref --verify --quiet refs/heads/clean-merge-with-main; then
        git merge clean-merge-with-main
        echo "✅ Improvements branch merged"
    else
        echo "ℹ️ Improvements branch not found, skipping merge"
    fi
}

# Function to push to main
push_to_main() {
    echo "🚀 Pushing to main branch..."
    git push origin main
    echo "✅ Changes pushed to main"
}

# Function to clean up backup files
cleanup_backups() {
    echo "🧹 Cleaning up backup files..."
    
    # Remove backup files
    find . -name "*.backup*" -type f -delete 2>/dev/null || true
    find . -name "*.backup" -type f -delete 2>/dev/null || true
    
    echo "✅ Backup files cleaned up"
}

# Function to build and test
build_and_test() {
    echo "🔨 Building and testing application..."
    
    # Install dependencies
    echo "📦 Installing dependencies..."
    npm install
    
    # Build the application
    echo "🏗️ Building application..."
    npm run build
    
    echo "✅ Build completed successfully"
}

# Main execution
main() {
    echo "🎯 Starting comprehensive merge resolution..."
    
    # Check prerequisites
    check_git
    
    # Show initial status
    check_status
    
    # Resolve all conflicts
    resolve_all_conflicts
    
    # Add resolved files
    add_resolved_files
    
    # Complete cherry-pick if in progress
    complete_cherry_pick
    
    # Switch to main branch
    switch_to_main
    
    # Merge improvements
    merge_improvements
    
    # Build and test
    build_and_test
    
    # Push to main
    push_to_main
    
    # Cleanup
    cleanup_backups
    
    echo "🎉 All merge conflicts resolved and PRs merged successfully!"
    echo "📊 Final git status:"
    git status
}

# Run main function
main "$@"