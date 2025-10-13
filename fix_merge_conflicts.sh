#!/bin/bash

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep the latest version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
}

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        fix_merge_conflicts "$file"
    fi
done

echo "Merge conflicts fixed!"
