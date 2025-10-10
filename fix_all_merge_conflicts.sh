#!/bin/bash

echo "=========================================="
echo "Fixing all merge conflicts in the codebase"
echo "=========================================="

# Find all files with merge conflicts
CONFLICT_FILES=$(grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" | cut -d: -f1 | sort -u)

echo "Found $(echo "$CONFLICT_FILES" | wc -l) files with merge conflicts"

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
echo "Checking for remaining conflicts..."
echo "=========================================="

# Check if there are any remaining conflicts
REMAINING_CONFLICTS=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" | wc -l)

if [ "$REMAINING_CONFLICTS" -eq 0 ]; then
    echo "✅ All merge conflicts resolved successfully!"
else
    echo "❌ Still have $REMAINING_CONFLICTS conflicts remaining:"
    grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" | cut -d: -f1 | sort -u
fi

echo "=========================================="