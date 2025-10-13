#!/bin/bash

echo "Fixing all syntax errors in page files..."

# Find all page.tsx files and fix common syntax errors
find /workspace/app -name "page.tsx" -type f | while read file; do
    echo "Fixing: $file"
    
    # Fix extra closing braces
    sed -i 's/^  };$/};/g' "$file"
    
    # Fix function declarations
    sed -i 's/const \([A-Za-z]*Page\): React\.FC = () {/const \1: React.FC = () => {/g' "$file"
    
    # Fix missing function declarations
    if ! grep -q "const.*React\.FC" "$file" && ! grep -q "function.*()" "$file"; then
        component_name=$(basename $(dirname "$file") | sed 's/-/ /g' | sed 's/\b\w/\U&/g' | sed 's/ //g')
        
        # Check if file starts with imports and then has return
        if head -10 "$file" | grep -q "import.*React" && head -10 "$file" | grep -q "return"; then
            # Add function declaration after imports
            sed -i '/import.*React/a\\nconst '"$component_name"'Page: React.FC = () => {' "$file"
        fi
    fi
    
    # Ensure proper export
    if ! tail -3 "$file" | grep -q "export default"; then
        component_name=$(basename $(dirname "$file") | sed 's/-/ /g' | sed 's/\b\w/\U&/g' | sed 's/ //g')
        echo "" >> "$file"
        echo "export default ${component_name}Page;" >> "$file"
    fi
done

echo "All syntax errors fixed!"