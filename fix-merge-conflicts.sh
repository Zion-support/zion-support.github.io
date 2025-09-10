#!/bin/bash

echo "Fixing merge conflicts in source files..."

# Find all TypeScript/JavaScript files with merge conflicts
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "^        # and everything between  and 
        awk '
        /^
        /^/ { in_head = 0; in_other = 1; next }
        /^
        in_head { print }
        !in_head && !in_other { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        echo "Fixed conflicts in $file"
    fi
done

echo "Merge conflict resolution complete!"