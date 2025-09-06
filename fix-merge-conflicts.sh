#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts have been resolved!"