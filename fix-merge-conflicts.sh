#!/bin/bash

# Script to fix all merge conflicts by choosing the HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find src -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by keeping HEAD version
    # Remove conflict markers and keep only the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /{
        /^<<<<<<< HEAD/d
        /^=======/,/^>>>>>>> /d
        /^>>>>>>> /d
    }' "$file"
done

echo "Merge conflicts fixed. Files with conflicts:"
echo "$files_with_conflicts"

# Verify no conflicts remain
remaining_conflicts=$(find src -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)
if [ -z "$remaining_conflicts" ]; then
    echo "✅ All merge conflicts resolved!"
else
    echo "❌ Still have conflicts in:"
    echo "$remaining_conflicts"
fi