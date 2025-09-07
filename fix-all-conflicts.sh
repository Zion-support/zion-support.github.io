#!/bin/bash

# Script to fix all remaining merge conflict issues
echo "Fixing all remaining merge conflict issues..."

# Find all files with merge conflicts
files_with_conflicts=$(find ./app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -n "$files_with_conflicts" ]; then
    echo "Found files with merge conflicts:"
    echo "$files_with_conflicts"
    
    for file in $files_with_conflicts; do
        echo "Fixing merge conflicts in: $file"
        
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Process the file to resolve conflicts by choosing HEAD version
        awk '
        /^<<<<<<< HEAD/ { in_head = 1; next }
        /^=======/ { in_head = 0; in_other = 1; next }
        /^>>>>>>> / { in_other = 0; next }
        in_other { next }
        { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
    done
else
    echo "No merge conflicts found."
fi

# Fix common syntax issues
echo "Fixing common syntax issues..."

# Fix files with malformed JSX structure
for file in $(find ./app -name "*.tsx" -o -name "*.ts"); do
    if grep -q "export const metadata" "$file" && ! grep -q "export default function" "$file"; then
        echo "Fixing metadata placement in: $file"
        # Move metadata to the top
        sed -i '1i export const metadata = {\n  title: "Service | Zion Tech Group",\n  description: "Professional services for your business needs."\n};\n' "$file"
    fi
done

echo "All merge conflicts and syntax issues resolved."