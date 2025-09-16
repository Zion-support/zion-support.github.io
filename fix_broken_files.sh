#!/bin/bash

# Script to fix broken JSX/TSX files
echo "Fixing broken files..."

# Find all JSX/TSX files that might be broken
files=$(find ./src -name "*.jsx" -o -name "*.tsx" | head -20)

for file in $files; do
    echo "Checking $file..."
    
    # Check if file has syntax issues
    if ! node -c "$file" 2>/dev/null; then
        echo "Fixing $file..."
        
        # Create backup
        cp "$file" "$file.backup"
        
        # Read the file and fix common issues
        content=$(cat "$file")
        
        # Check if it's missing React import
        if ! echo "$content" | grep -q "import React"; then
            content="import React from \"react\";

$content"
        fi
        
        # Check if it's missing function declaration
        if ! echo "$content" | grep -q "const.*=.*=>"; then
            # Extract component name from filename
            component_name=$(basename "$file" | sed 's/\.[^.]*$//' | sed 's/^./\U&/')
            content="const $component_name = () => {
  return (
$content
  );
};

export default $component_name;"
        fi
        
        # Write the fixed content
        echo "$content" > "$file"
        
        echo "Fixed $file"
    fi
done

echo "File fixing complete!"