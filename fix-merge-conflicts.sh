#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts by keeping HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts by keeping HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
done

echo "Merge conflicts resolved!"