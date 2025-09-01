#!/bin/bash

# Resolve All Merge Conflicts Script
# This script systematically resolves all merge conflicts by keeping the main branch version

set -e

echo "🚀 Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts in a specific file
resolve_file_conflicts() {
    local file=$1
    
    echo "  📄 Resolving conflicts in: $file"
    
    # Check if file exists and has conflicts
    if [ -f "$file" ]; then
        # For most files, keep the main version (ours)
        if git checkout --ours "$file" 2>/dev/null; then
            echo "    ✅ Kept main version of $file"
            git add "$file"
        else
            echo "    ⚠️  Could not resolve $file with main version, trying branch version"
            if git checkout --theirs "$file" 2>/dev/null; then
                echo "    ✅ Kept branch version of $file"
                git add "$file"
            else
                echo "    ❌ Failed to resolve $file, removing it"
                git rm "$file" 2>/dev/null || rm -f "$file"
            fi
        fi
    else
        echo "    ⚠️  File $file doesn't exist, skipping"
    fi
}

# Function to resolve all conflicts systematically
resolve_all_conflicts() {
    echo "🔧 Resolving all merge conflicts systematically..."
    
    # Get list of all conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    if [ -z "$conflicted_files" ]; then
        echo "✅ No conflicted files found"
        return 0
    fi
    
    echo "📊 Found $(echo "$conflicted_files" | wc -l) conflicted files to resolve"
    
    # Process each conflicted file
    for file in $conflicted_files; do
        resolve_file_conflicts "$file"
    done
    
    # Also handle added/deleted conflicts
    local added_conflicts=$(git diff --name-only --diff-filter=AA)
    local deleted_conflicts=$(git diff --name-only --diff-filter=DD)
    
    if [ -n "$added_conflicts" ]; then
        echo "📁 Resolving added file conflicts..."
        for file in $added_conflicts; do
            echo "  📄 Resolving added conflict in: $file"
            if git checkout --ours "$file" 2>/dev/null; then
                echo "    ✅ Kept main version of $file"
                git add "$file"
            else
                echo "    ⚠️  Could not resolve $file, keeping branch version"
                git add "$file"
            fi
        done
    fi
    
    if [ -n "$deleted_conflicts" ]; then
        echo "🗑️  Resolving deleted file conflicts..."
        for file in $deleted_conflicts; do
            echo "  📄 Resolving deleted conflict in: $file"
            # For deleted conflicts, usually keep the deletion
            git rm "$file" 2>/dev/null || echo "    ⚠️  Could not remove $file"
        done
    fi
}

# Function to handle special file types
handle_special_files() {
    echo "🔧 Handling special file types..."
    
    # Handle package files - keep main version
    if [ -f "package.json" ]; then
        echo "  📦 Resolving package.json conflicts"
        git checkout --ours package.json
        git add package.json
    fi
    
    if [ -f "yarn.lock" ]; then
        echo "  📦 Resolving yarn.lock conflicts"
        git checkout --ours yarn.lock
        git add yarn.lock
    fi
    
    if [ -f "package-lock.json" ]; then
        echo "  📦 Resolving package-lock.json conflicts"
        git checkout --ours package-lock.json
        git add package-lock.json
    fi
    
    # Handle config files - keep main version
    if [ -f "tsconfig.json" ]; then
        echo "  ⚙️  Resolving tsconfig.json conflicts"
        git checkout --ours tsconfig.json
        git add tsconfig.json
    fi
    
    if [ -f "tailwind.config.ts" ]; then
        echo "  ⚙️  Resolving tailwind.config.ts conflicts"
        git checkout --ours tailwind.config.ts
        git add tailwind.config.ts
    fi
    
    if [ -f "vite.config.ts" ]; then
        echo "  ⚙️  Resolving vite.config.ts conflicts"
        git checkout --ours vite.config.ts
        git add vite.config.ts
    fi
}

# Main conflict resolution process
echo "🔄 Starting conflict resolution process..."

# First, handle special files
handle_special_files

# Then resolve all other conflicts
resolve_all_conflicts

# Check if there are any remaining conflicts
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "⚠️  Some conflicts remain, attempting final resolution..."
    
    # Get remaining conflicted files
    local remaining_conflicts=$(git diff --name-only --diff-filter=U)
    
    for file in $remaining_conflicts; do
        echo "  🔧 Final resolution attempt for: $file"
        
        # Try to resolve by keeping main version
        if git checkout --ours "$file" 2>/dev/null; then
            echo "    ✅ Successfully resolved $file"
            git add "$file"
        else
            echo "    ❌ Could not resolve $file, removing it"
            git rm "$file" 2>/dev/null || rm -f "$file"
        fi
    done
fi

# Final check
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "❌ Some conflicts still remain after resolution attempts"
    echo "📋 Remaining conflicted files:"
    git diff --name-only --diff-filter=U
    return 1
else
    echo "✅ All conflicts have been resolved!"
    return 0
fi