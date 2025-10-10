#!/bin/bash

echo "=========================================="
echo "Fixing merge conflicts in source files only"
echo "=========================================="

# Find all files with merge conflicts excluding node_modules
CONFLICT_FILES=$(grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" --exclude-dir=node_modules | cut -d: -f1 | sort -u)

echo "Found $(echo "$CONFLICT_FILES" | wc -l) source files with merge conflicts"

# Fix each file
for file in $CONFLICT_FILES; do
    if [ -f "$file" ]; then
        echo "Fixing conflicts in: $file"
        
        # Remove merge conflict markers and keep the content after =======
        # This keeps the newer version (after =======)
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Clean up any remaining markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "=========================================="
echo "Checking for remaining conflicts in source files..."
echo "=========================================="

# Check if there are any remaining conflicts in source files
REMAINING_CONFLICTS=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" --exclude-dir=node_modules | wc -l)

if [ "$REMAINING_CONFLICTS" -eq 0 ]; then
    echo "✅ All source file merge conflicts resolved successfully!"
else
    echo "❌ Still have $REMAINING_CONFLICTS conflicts remaining in source files:"
    grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" --exclude-dir=node_modules | cut -d: -f1 | sort -u
fi

echo "=========================================="