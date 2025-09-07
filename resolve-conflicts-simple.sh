#!/bin/bash

echo "Resolving merge conflicts by keeping HEAD version..."

# Find and resolve conflicts in key files
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        echo "Resolving conflicts in: $file"
        
        # Create backup
        cp "$file" "$file.backup"
        
        # Remove conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
        
        # Clean up any remaining markers
        sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
        
        echo "✓ Resolved: $file"
    fi
done

echo "Conflict resolution completed!"