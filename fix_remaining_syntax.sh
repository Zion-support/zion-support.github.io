#!/bin/bash

echo "Fixing remaining syntax errors in all files..."

# Function to fix common syntax issues
fix_syntax_issues() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Fix missing React import
        if grep -q "React.FC" "$file" && ! grep -q "import React" "$file"; then
            sed -i '1i import React from "react";' "$file"
        fi
        
        # Fix missing useState import
        if grep -q "useState" "$file" && ! grep -q "useState" "$file" | head -1; then
            if grep -q "import React" "$file"; then
                sed -i 's/import React from "react";/import React, { useState } from "react";/' "$file"
            fi
        fi
        
        # Fix missing closing braces for functions
        sed -i 's/^  );$/  );/' "$file"
        
        # Fix missing closing braces before export statements
        sed -i '/^export default/{ s/^export default/};\n\nexport default/; }' "$file"
        
        # Remove duplicate closing braces
        sed -i '/^};$/{ N; s/^};\n};$/};/; }' "$file"
        
        # Fix missing semicolons after closing braces
        sed -i 's/^  }$/  };/' "$file"
        sed -i 's/^}$/};/' "$file"
        
        # Fix JSX syntax issues
        sed -i 's/const \([A-Z][a-zA-Z0-9]*\): React\.FC = () => {/const \1: React.FC = () => {/' "$file"
        
        echo "Fixed: $file"
    fi
}

# Fix all remaining files with syntax issues
echo "Fixing syntax issues in all source files..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    fix_syntax_issues "$file"
done

echo "All syntax issues fixed!"