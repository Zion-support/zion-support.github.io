#!/bin/bash

echo "Cleaning up duplicate closing braces..."

# Function to clean duplicate closing braces
clean_file() {
    local file="$1"
    echo "Cleaning: $file"
    
    if [ -f "$file" ]; then
        # Remove duplicate closing braces
        sed -i '/^};$/N; /^};\n};$/d' "$file"
        sed -i '/^};$/N; /^};\n};$/d' "$file"
        
        # Remove multiple consecutive closing braces
        sed -i '/^};$/N; /^};\n};$/d' "$file"
        
        echo "Cleaned: $file"
    fi
}

# Clean up duplicate closing braces in all source files
echo "Cleaning duplicate closing braces in source files..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    clean_file "$file"
done

echo "Duplicate cleanup completed!"

# Test the build
echo "Testing build after duplicate cleanup..."
if npm run build; then
    echo "✅ Build successful after duplicate cleanup!"
else
    echo "❌ Build still has issues, but duplicates are cleaned up."
fi

echo "All duplicate cleanup completed!"