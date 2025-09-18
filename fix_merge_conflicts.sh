#!/bin/bash

    # and remove the HEAD section
# Script to fix merge conflicts by choosing HEAD version
echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts in src/ directory
find src/ -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | while read file; do
        in_head && !in_other { print }
        !in_head && !in_other { print }
        ' "$file" > "${file}.tmp"
        
        # Replace original with fixed version
        mv "${file}.tmp" "$file"
    fi
done

echo "Merge conflicts fixed!"