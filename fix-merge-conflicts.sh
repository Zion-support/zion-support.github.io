#!/bin/bash

echo "Fixing all merge conflicts..."

# Find all files with merge conflicts
CONFLICT_FILES=$(find /workspace -name "*.json" -o -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with conflicts:"
echo "$CONFLICT_FILES"

# Fix each file
for file in $CONFLICT_FILES; do
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/<<<<<<< /d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"