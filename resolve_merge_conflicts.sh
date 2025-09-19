#!/bin/bash

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
CONFLICT_FILES=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -z "$CONFLICT_FILES" ]; then
    echo "No merge conflicts found in TypeScript/JavaScript files."
    exit 0
fi

echo "Found merge conflicts in:"
echo "$CONFLICT_FILES"

# Resolve common merge conflict patterns
for file in $CONFLICT_FILES; do
    echo "Processing $file..."
    
    # Fix common import conflicts - prefer the non-.jsx version
    sed -i 's/<<<<<<< HEAD$//g' "$file"
    sed -i 's/=======$//g' "$file"
    sed -i 's/>>>>>>> .*$//g' "$file"
    
    # Remove duplicate import lines that might be created
    awk '!seen[$0]++' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
    
    echo "Processed $file"
done

echo "Merge conflict resolution completed."