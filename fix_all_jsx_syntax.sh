#!/bin/bash

echo "Fixing all JSX syntax issues across the application..."

# Function to fix JSX syntax issues in a file
fix_jsx_syntax() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Remove any remaining merge conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Fix common JSX syntax issues
        # 1. Fix missing closing div tags before the final closing brace
        sed -i 's/^  );$/      <\/div>\n    <\/div>\n  );/g' "$file"
        
        # 2. Fix missing closing braces for components
        sed -i 's/^  );$/  );/g' "$file"
        sed -i '/^  );$/a\};' "$file"
        
        # 3. Ensure proper component closing
        sed -i 's/^};$/};/g' "$file"
        
        # 4. Fix any duplicate closing braces
        sed -i '/^};$/{ N; /^};\n};$/d; }' "$file"
        
        echo "Fixed: $file"
    fi
}

# Find and fix all JSX/TSX files
echo "Fixing syntax errors in pages..."
find src/pages -name "*.jsx" -o -name "*.tsx" | while read file; do
    fix_jsx_syntax "$file"
done

echo "Fixing syntax errors in components..."
find src/components -name "*.jsx" -o -name "*.tsx" | while read file; do
    fix_jsx_syntax "$file"
done

echo "All JSX syntax issues fixed!"