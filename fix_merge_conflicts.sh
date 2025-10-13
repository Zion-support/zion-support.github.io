#!/bin/bash

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."

# Find files with merge conflicts
conflict_files=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$conflict_files"

# Process each file
for file in $conflict_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git to resolve conflicts by choosing the newer version (after =======)
    # This is a simple approach - in practice you might want more sophisticated resolution
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/website-audit-and-update-with-deployment-3210/d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts have been resolved."
echo "Please review the changes and test the build."