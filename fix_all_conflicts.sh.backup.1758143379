#!/bin/bash

# Script to fix all merge conflicts by accepting remote version
set -e

echo "Fixing all merge conflicts by accepting remote version..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# For each file with conflicts, accept the remote version
for file in $files_with_conflicts; do
    echo "Fixing conflicts in $file..."
    
    # Accept remote version (theirs)
    git checkout --theirs "$file" 2>/dev/null || {
        echo "Could not checkout theirs for $file, trying manual resolution..."
        
        # If checkout fails, manually resolve by removing conflict markers and keeping remote content
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    }
    
    # Add the resolved file
    git add "$file"
done

echo "All merge conflicts resolved!"