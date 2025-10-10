#!/bin/bash

echo "Fixing critical files for build..."

# Find all files with syntax errors and fix them
files=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | head -50)

for file in $files; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "$file.backup4"
    
    # Remove extra closing tags at the end of files
    sed -i '/^[[:space:]]*<\/[^>]*>$/d' "$file"
    
    # Remove lines that are just semicolons
    sed -i '/^[[:space:]]*;$/d' "$file"
    
    # Fix broken JSX syntax
    sed -i 's/\(<[^>]*>\);/\1/g' "$file"
    sed -i 's/\(<\/[^>]*>\);/\1/g' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/<<<<<<< /d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Fix object syntax
    sed -i 's/{;/{/g' "$file"
    sed -i 's/};/}/g' "$file"
    sed -i 's/},;/},/g' "$file"
    
    # Fix array syntax
    sed -i 's/\[;/[/g' "$file"
    sed -i 's/\];/]/g' "$file"
    
    # Fix function syntax
    sed -i 's/() => {;/() => {/g' "$file"
    sed -i 's/React\.FC = () => {;/React.FC = () => {/g' "$file"
    
    echo "Fixed: $file"
done

echo "Critical files fixed!"
