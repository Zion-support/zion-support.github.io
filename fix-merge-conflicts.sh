#!/bin/bash

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "
echo "Found files with conflicts:"
echo "$files_with_conflicts"

# For each file, resolve conflicts by keeping our version (HEAD)
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Fixing conflicts in: $file"

        # Use sed to remove merge conflict markers and keep HEAD version
        sed -i '/^        sed -i '/^
        # Remove any remaining conflict markers
        sed -i '/^        sed -i '/^/d' "$file"
        sed -i '/^    fi
done

echo "Merge conflicts fixed!"