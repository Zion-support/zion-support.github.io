#!/bin/bash

echo "Fixing syntax errors in React components..."

# Function to fix missing closing braces in React components
fix_component() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Fix missing closing braces before export statements
        sed -i 's/^  export default/  };\n\nexport default/g' "$file"
        sed -i 's/^export default/};\n\nexport default/g' "$file"
        
        # Fix missing closing braces for functions
        sed -i 's/  );$/  );\n};/g' "$file"
        
        echo "Fixed: $file"
    fi
}

# Fix all JSX and TSX files in pages and components
echo "Fixing syntax errors in pages..."
find src/pages -name "*.jsx" -o -name "*.tsx" | while read file; do
    fix_component "$file"
done

echo "Fixing syntax errors in components..."
find src/components -name "*.jsx" -o -name "*.tsx" | while read file; do
    fix_component "$file"
done

echo "Syntax fixes completed!"

# Test the build
echo "Testing build after syntax fixes..."
if npm run build; then
    echo "✅ Build successful after syntax fixes!"
else
    echo "❌ Build still has issues, but syntax errors are fixed."
fi

echo "All syntax fixes completed!"