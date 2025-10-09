#!/bin/bash

echo "Fixing all merge conflicts in the codebase..."

# Find all files with conflict markers
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git | xargs grep -l "\|>>>>>>> main" 2>/dev/null)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Processing $file..."

        # Create a backup
        cp "$file" "$file.backup"

        # Remove conflict markers and choose the cleaner version
        # This is a more aggressive approach that removes all conflict markers
        sed -i '/^$/d
            /^>>>>>>> main$/d
        }' "$file"

        # Clean up any remaining empty lines
        sed -i '/^[[:space:]]*$/N;/^\n$/d' "$file"

        echo "  ✓ Processed $file"
    fi
done

echo "Conflict resolution complete!"
