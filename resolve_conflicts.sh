#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.jsx" --include="*.tsx" --include="*.js" --include="*.ts" | cut -d: -f1 | sort | uniq)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

for file in $files_with_conflicts; do
    echo "Resolving conflicts in $file"
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Process the file to resolve conflicts by keeping HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace original file with resolved version
    mv "$temp_file" "$file"
    
    echo "Resolved conflicts in $file"
done

echo "All merge conflicts resolved!"