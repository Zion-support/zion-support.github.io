#!/bin/bash

# Find all files with merge conflict markers and remove them
find /workspace -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/dist/*" \
  -not -path "*/*disabled*/*" \
  -not -path "*/*backup*/*" \
  -exec grep -l "^<<<<<<<\|^=======\|^>>>>>>>" {} \; | while read file; do
    echo "Fixing: $file"
    # Create backup
    cp "$file" "$file.conflict-backup"
    
    # Remove conflict markers
    sed -i '/^<<<<<<< /d; /^=======$/d; /^>>>>>>> /d' "$file"
done

echo "Done fixing merge conflicts"
