#!/bin/bash

# Find all files with merge conflicts
files=$(find /workspace/src -name "*.tsx" -o -name "*.ts" | xargs grep -l "\|>>>>>>> cursor")

for file in $files; do
    echo "Cleaning up merge conflicts in: $file"

    # Create a backup
    cp "$file" "$file.backup"

    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^$/,/^>>>>>>> cursor/d' "$file"

    echo "Cleaned: $file"
done

echo "Merge conflict cleanup completed!"