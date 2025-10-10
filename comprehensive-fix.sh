#!/bin/bash

echo "Starting comprehensive fix for all TypeScript/React files..."

# Find all problematic files
files=$(find /workspace -name "*.tsx" -o -name "*.ts" | grep -E "(app/|components/)" | head -100)

for file in $files; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "$file.backup3"
    
    # Remove all semicolons that are causing issues
    sed -i 's/;$/ /g' "$file"
    
    # Fix specific patterns
    sed -i 's/const \([a-zA-Z_][a-zA-Z0-9_]*\): React\.FC = () => {;/const \1: React.FC = () => {/g' "$file"
    sed -i 's/const \([a-zA-Z_][a-zA-Z0-9_]*\) = \[;/const \1 = [/g' "$file"
    sed -i 's/{;/{/g' "$file"
    sed -i 's/};/}/g' "$file"
    sed -i 's/},;/},/g' "$file"
    sed -i 's/];/]/g' "$file"
    sed -i 's/);/)/g' "$file"
    sed -i 's/};/}/g' "$file"
    
    # Remove empty lines with just semicolons
    sed -i '/^[[:space:]]*;$/d' "$file"
    
    # Fix JSX syntax
    sed -i 's/<\([^>]*\)>;/\1>/g' "$file"
    sed -i 's/<\/\([^>]*\)>;/\1>/g' "$file"
    
    echo "Fixed: $file"
done

echo "Comprehensive fix completed!"
