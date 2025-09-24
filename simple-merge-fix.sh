#!/bin/bash

echo "🔧 Simple Merge Conflict Fix"

# Find and fix merge conflicts
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" \) -exec grep -l "" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '//,/>>>>>>> /c\
# Resolved merge conflict - kept HEAD version' "$file"
    
    # Clean up any remaining markers
    sed -i '//d' "$file"
    sed -i '//d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Fixed: $file"
done

echo "🎉 Merge conflict resolution completed"