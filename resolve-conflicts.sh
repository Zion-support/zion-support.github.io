#!/bin/bash

# Script to automatically resolve merge conflicts
set -e

echo "🔧 Starting automatic merge conflict resolution..."

# Find all files with merge conflicts
CONFLICT_FILES=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" -l)

if [ -z "$CONFLICT_FILES" ]; then
    echo "✅ No merge conflicts found in source files"
    exit 0
fi

echo "📋 Found merge conflicts in:"
echo "$CONFLICT_FILES"
echo "---"

# Process each file
for file in $CONFLICT_FILES; do
    echo "🔧 Resolving conflicts in $file..."
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Strategy: Keep the "theirs" version (incoming changes) for most files
    # This is generally safer for feature branches
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in $file"
done

echo "🎉 All merge conflicts resolved!"
echo "📋 Files processed:"
echo "$CONFLICT_FILES"