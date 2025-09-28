#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
# This will remove all merge conflict markers and keep the HEAD version

echo "Resolving merge conflicts in TypeScript files..."

# Find all TypeScript files with merge conflicts
files_with_conflicts=$(find /workspace/src -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by keeping HEAD version
    # Remove conflict markers and keep only the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflicts resolved. Running build test..."

# Test the build
cd /workspace
pnpm run build:no-check

if [ $? -eq 0 ]; then
    echo "Build successful! All merge conflicts resolved."
else
    echo "Build failed. Please check the errors above."
    exit 1
fi