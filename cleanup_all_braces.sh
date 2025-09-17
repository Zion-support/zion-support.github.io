#!/bin/bash

echo "Cleaning up all duplicate closing braces and syntax issues..."

# Function to clean up a file
cleanup_file() {
    local file="$1"
    echo "Cleaning: $file"
    
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
        
        echo "Cleaned: $file"
    fi
}

# Clean up all source files
echo "Cleaning up all source files..."
find src -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" | while read file; do
    cleanup_file "$file"
done

echo "All files cleaned up!"