#!/bin/bash

# Script to fix merge conflicts by choosing the HEAD version
echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts
find /workspace/src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing merge conflicts in: $file"
        
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Process the file to resolve conflicts
        awk '
        /^<<<<<<< HEAD/ { in_head = 1; next }
        /^=======/ { in_head = 0; in_other = 1; next }
        /^>>>>>>> / { in_other = 0; next }
        in_head { print; next }
        !in_other { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
    fi
done

echo "Merge conflicts fixed!"