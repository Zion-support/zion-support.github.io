#!/bin/bash

# Batch Merge Script
# This script will merge all branches into main

echo "🚀 Starting Batch Merge Process..."

# Function to safely execute commands
safe_exec() {
    local cmd="$1"
    echo "Executing: $cmd"
    
    if eval "$cmd"; then
        echo "✅ Command succeeded: $cmd"
        return 0
    else
        echo "❌ Command failed: $cmd"
        return 1
    fi
}

# Main execution
main() {
    echo "📍 Current directory: $(pwd)"
    
    # Check if we're in a git repo
    if [ ! -d ".git" ]; then
        echo "❌ Not in a git repository"
        exit 1
    fi
    
    # Get current branch
    CURRENT_BRANCH=$(git branch --show-current)
    echo "📍 Current branch: $CURRENT_BRANCH"
    
    # Check status
    echo "📊 Git status:"
    git status --short
    
    # Check for merge conflicts
    echo "🔍 Checking for merge conflicts..."
    if git diff --name-only --diff-filter=U | grep -q .; then
        echo "⚠️  Found merge conflicts:"
        git diff --name-only --diff-filter=U
        
        echo "🔧 Resolving conflicts automatically..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        for file in $CONFLICTED_FILES; do
            echo "📝 Resolving: $file"
            
            # Create backup
            cp "$file" "$file.backup.$(date +%s)"
            
            # Use git checkout to take current branch version
            git checkout --ours "$file"
            
            # Add resolved file
            git add "$file"
        done
        
        # Commit resolved conflicts
        git commit -m "Resolve merge conflicts automatically"
        echo "✅ Conflicts resolved and committed"
    else
        echo "✅ No merge conflicts found"
    fi
    
    # Try to merge with main
    echo "🔄 Attempting to merge with main..."
    git fetch origin main
    
    if git merge origin/main --no-edit; then
        echo "✅ Successfully merged with main"
    else
        echo "⚠️  Merge conflicts during merge, resolving..."
        
        # Resolve conflicts again
        if git diff --name-only --diff-filter=U | grep -q .; then
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            for file in $CONFLICTED_FILES; do
                echo "📝 Resolving: $file"
                git checkout --ours "$file"
                git add "$file"
            done
            
            git commit -m "Resolve merge conflicts with main"
            echo "✅ Conflicts resolved and committed"
        fi
    fi
    
    # Push changes
    echo "📤 Pushing changes..."
    if git push origin "$CURRENT_BRANCH"; then
        echo "✅ Changes pushed successfully"
    else
        echo "❌ Failed to push changes"
        exit 1
    fi
    
    echo "🎉 Batch merge completed successfully!"
}

# Run main function
main "$@"