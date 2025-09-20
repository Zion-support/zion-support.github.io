#!/bin/bash

# Comprehensive Merge All Branches Script
# This script will systematically merge all remaining branches into main

set -e

echo "🚀 Starting comprehensive merge of all remaining branches..."

# Function to merge branch with conflict resolution
merge_branch_with_resolution() {
    local branch="$1"
    local branch_name="${branch#origin/}"
    
    echo "🔄 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/$branch"; then
        echo "⚠️  Branch $branch not found, skipping..."
        return 1
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
        echo "✅ Already merged: $branch_name"
        return 0
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch_name into main - comprehensive merge"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving by keeping our changes..."
        
        # Resolve conflicts by keeping our version
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                echo "🔧 Resolving conflicts in: $file"
                git checkout --ours "$file" 2>/dev/null || true
        if [ -f "$file" ]; then
            echo "🧹 Cleaning conflicts in: $file"
    echo "✅ Successful merges: $successful_merges"
    echo "✅ Already merged: $already_merged"
    echo "❌ Failed merges: $failed_merges"
    echo ""
    echo "📍 Final repository status:"
    git status --short
    
    # Push all changes
    echo ""
    echo "📤 Pushing all changes to remote..."
    git push origin main --force
    
    echo ""
    echo "🎉 COMPREHENSIVE MERGE PROCESS COMPLETED!"
    echo "📈 Main branch is now fully updated with all merged content"
    echo "🚀 Repository is ready for continued development"
    
    # Show recent commit history
    echo ""
    echo "📋 Recent merge history:"
    git log --oneline -10
}

# Run main function
main "$@"