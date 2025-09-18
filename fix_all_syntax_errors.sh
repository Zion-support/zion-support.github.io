#!/bin/bash

echo "Fixing all syntax errors in React components..."

# Function to fix syntax errors in a file
fix_file() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Fix missing closing braces for functions/components
        sed -i 's/^  );$/  );/' "$file"
        sed -i '/^  );$/{ N; s/^  );\n  export default/  );\n};\n\nexport default/; }' "$file"
        
        # Fix missing closing braces before export statements
        sed -i '/^export default/{ s/^export default/};\n\nexport default/; }' "$file"
        
        # Remove duplicate closing braces
        sed -i '/^};$/{ N; s/^};\n};$/};/; }' "$file"
        
        # Fix missing semicolons after closing braces
        sed -i 's/^  }$/  };/' "$file"
        sed -i 's/^}$/};/' "$file"
        
        echo "Fixed: $file"
    fi
}

# Fix all JSX and TSX files
echo "Fixing syntax errors in components..."
find src/components -name "*.jsx" -o -name "*.tsx" | while read file; do
    fix_file "$file"
done

echo "Fixing syntax errors in pages..."
find src/pages -name "*.jsx" -o -name "*.tsx" | while read file; do
    fix_file "$file"
done

echo "Fixing syntax errors in other directories..."
find src -name "*.jsx" -o -name "*.tsx" | grep -v -E "(components|pages)" | while read file; do
    fix_file "$file"
done

echo "All syntax errors fixed!"