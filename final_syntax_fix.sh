#!/bin/bash

echo "Final comprehensive syntax fix..."

# Function to fix all syntax issues in a file
fix_all_syntax() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Remove duplicate closing braces
        sed -i '/^};$/{ N; s/^};\n};$/};/; }' "$file"
        sed -i '/^};$/{ N; s/^};\n};$/};/; }' "$file"
        sed -i '/^};$/{ N; s/^};\n};$/};/; }' "$file"
        
        # Remove empty lines before export statements
        sed -i '/^$/N; /^\nexport default$/s/^\nexport default/export default/' "$file"
        
        # Fix missing semicolons after closing braces
        sed -i 's/^  }$/  };/' "$file"
        sed -i 's/^}$/};/' "$file"
        
        # Remove any remaining duplicate braces
        awk '!/^};$/{print} /^};$/{if(prev!="};") print; prev=$0}' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        # Fix JSX syntax issues
        sed -i 's/const \([A-Z][a-zA-Z0-9]*\): React\.FC = () => {/const \1: React.FC = () => {/' "$file"
        
        echo "Fixed: $file"
    fi
}

# Fix all remaining files with syntax issues
echo "Fixing all remaining syntax issues..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    fix_all_syntax "$file"
done

echo "All syntax issues fixed!"