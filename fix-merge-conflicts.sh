#!/bin/bash

echo "Fixing merge conflicts in source files..."

# Find all TypeScript/JavaScript files with merge conflicts
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "^<<<<<<< HEAD" "$file"; then
        echo "Processing $file..."
        
        # Create a backup
        cp "$file" "$file.merge-backup"
        
        # Remove merge conflict markers and keep HEAD version
        # This removes everything between <<<<<<< HEAD and =======
        # and everything between ======= and >>>>>>> branch-name
        awk '
        /^<<<<<<< HEAD/ { in_head = 1; next }
        /^=======/ { in_head = 0; in_other = 1; next }
        /^>>>>>>> / { in_other = 0; next }
        in_head { print }
        !in_head && !in_other { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        echo "Fixed conflicts in $file"
    fi
done

echo "Merge conflict resolution complete!"