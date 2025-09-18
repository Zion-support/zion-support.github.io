#!/bin/bash

echo "Starting cleanup of merge conflict markers and syntax errors..."

# Function to clean merge conflicts in a file
clean_file() {
    local file="$1"
    echo "Cleaning: $file"
    
    if [ -f "$file" ]; then
        # Remove merge conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        echo "Cleaned: $file"
    fi
}

# Clean up merge conflicts in all source files
echo "Cleaning merge conflicts in source files..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    clean_file "$file"
done

# Clean up merge conflicts in utils
echo "Cleaning merge conflicts in utils..."
find src/utils -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    clean_file "$file"
done

# Clean up merge conflicts in pages
echo "Cleaning merge conflicts in pages..."
find src/pages -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    clean_file "$file"
done

# Clean up merge conflicts in components
echo "Cleaning merge conflicts in components..."
find src/components -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    clean_file "$file"
done

echo "Merge conflict cleanup completed!"

# Now let's fix some common syntax issues
echo "Fixing common syntax issues..."

# Fix files with obvious syntax errors by removing problematic lines
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    if [ -f "$file" ]; then
        # Remove lines that start with just numbers (likely corrupted)
        sed -i '/^[0-9]\+$/d' "$file"
        
        # Remove empty lines with just spaces
        sed -i '/^[[:space:]]*$/d' "$file"
        
        # Remove lines with just punctuation
        sed -i '/^[[:punct:]]*$/d' "$file"
    fi
done

echo "Syntax cleanup completed!"

# Test the build
echo "Testing build after cleanup..."
if npm run build; then
    echo "✅ Build successful after cleanup!"
else
    echo "❌ Build still has issues, but conflicts are cleaned up."
fi

echo "Cleanup process completed!"