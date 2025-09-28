#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
# This removes all merge conflict markers and keeps the HEAD version

echo "Resolving merge conflicts in TypeScript files..."

# Find all TypeScript files with merge conflicts
files=$(find /workspace/src -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD")

for file in $files; do
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace original with processed file
    mv "$temp_file" "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflicts resolved!"