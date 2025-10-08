#!/bin/bash

# Script to fix merge conflicts by choosing HEAD version and cleaning up markers

echo "Fixing merge conflicts in TypeScript/React files..."

# Find all files with merge conflicts
files=$(find /workspace -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files; do
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"