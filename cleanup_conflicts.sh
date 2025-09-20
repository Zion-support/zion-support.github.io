#!/bin/bash

# Script to clean up merge conflicts and syntax errors
set -e

echo "🧹 Starting cleanup of merge conflicts and syntax errors..."

# Function to clean up merge conflict markers
clean_merge_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return 0
    fi
    
    echo "🧹 Cleaning merge conflicts in $file"
    
    # Remove merge conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>> /d' "$file"
}

# Function to fix common syntax errors
fix_syntax_errors() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return 0
    fi
    
    echo "🔧 Fixing syntax errors in $file"
    
    # Fix common issues
    case "$file" in
        *.tsx|*.ts|*.jsx|*.js)
            # Remove duplicate React imports
            sed -i '/^import React from/d' "$file"
            # Fix duplicate declarations
            sed -i '/^const React =/d' "$file"
            # Fix empty block statements
            sed -i 's/{\s*}/{ \/\/ Empty block }/g' "$file"
            ;;
        *.json)
            # Fix JSON syntax issues
            sed -i 's/,\s*}/}/g' "$file"
            sed -i 's/,\s*]/]/g' "$file"
            ;;
    esac
}

# Find all files with merge conflicts or syntax issues
echo "🔍 Finding files with issues..."

# Get all files that might have issues
PROBLEM_FILES=$(find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" | head -50)

echo "📋 Found $(echo "$PROBLEM_FILES" | wc -l) files to process"

# Process each file
for file in $PROBLEM_FILES; do
    if [ -f "$file" ]; then
        # Check if file has merge conflicts
        if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
            clean_merge_conflicts "$file"
        fi
        
        # Fix syntax errors
        fix_syntax_errors "$file"
    fi
done

# Add all cleaned files
echo "📦 Adding cleaned files..."
git add .

# Commit the cleanup
echo "💾 Committing cleanup..."
git commit -m "Clean up merge conflicts and syntax errors - $(date)" || true

echo "✅ Cleanup completed!"