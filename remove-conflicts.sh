#!/bin/bash

echo "Removing all merge conflict markers..."

# Remove conflict markers from all files
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" \) -exec sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' {} \;

echo "Conflict markers removed!"

# Count remaining conflicts
remaining=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" \) -exec grep -l "<<<<<<< HEAD" {} \; 2>/dev/null | wc -l)

echo "Remaining conflicts: $remaining"