#!/bin/bash

# Script to fix merge conflicts by keeping the incoming changes (after =======)

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -l "^<<<<<<<" $(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js") 2>/dev/null | head -20)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Use sed to remove merge conflict markers and keep incoming changes
        # This removes everything from <<<<<<< to ======= and keeps what's after ======= until >>>>>>>
        sed -i '/^<<<<<<</,/^=======/d; /^>>>>>>/d' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "Merge conflict resolution completed!"