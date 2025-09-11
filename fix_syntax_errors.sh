#!/bin/bash

# Script to fix syntax errors caused by merge conflict resolution
echo "Fixing syntax errors in files..."

# Find files with malformed import statements in the middle
files_with_errors=$(find src/ -name "*.tsx" -o -name "*.ts" | xargs grep -l "import.*react-helmet-async" 2>/dev/null)

for file in $files_with_errors; do
    echo "Fixing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove malformed import statements that appear after the main component
    # This removes lines that start with "import" after the first closing brace and parenthesis
    awk '
    BEGIN { in_component = 0; found_closing = 0 }
    /^[[:space:]]*\);[[:space:]]*$/ { found_closing = 1; print; next }
    found_closing && /^[[:space:]]*import/ { next }
    { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    echo "Fixed: $file"
done

echo "Syntax error fixing completed."