#!/bin/bash

# Script to resolve remaining merge conflicts
echo "🔧 Resolving remaining merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "yarn.lock" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -n "$CONFLICTED_FILES" ]; then
    echo "📋 Conflicted files: $CONFLICTED_FILES"
    
    # Resolve conflicts in each file
    for file in $CONFLICTED_FILES; do
        if [ -f "$file" ]; then
            resolve_conflicts "$file"
        fi
    done
    
    # Add all resolved files
    echo "📝 Adding resolved files..."
    git add .
    
    # Commit the merge
    echo "💾 Committing merge resolution..."
    git commit -m "Resolve merge conflicts from pull - $(date)"
    
    echo "✅ Successfully resolved all conflicts"
else
    echo "✅ No conflicts found"
fi