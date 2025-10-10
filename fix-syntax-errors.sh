#!/bin/bash

# Script to fix syntax errors after merge conflict resolution
echo "Starting syntax error fixes..."

# Find all TypeScript/JavaScript files
files=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \) -not -path "*/node_modules/*")

total_files=$(echo "$files" | wc -l)
echo "Found $total_files files to process"

count=0
for file in $files; do
    count=$((count + 1))
    echo "Processing file $count/$total_files: $file"
    
    # Create a backup
    cp "$file" "$file.backup2"
    
    # Fix common syntax issues
    # Remove semicolons after opening braces and before closing braces
    sed -i 's/{\s*;/{/g' "$file"
    sed -i 's/;\s*}/}/g' "$file"
    
    # Fix semicolons after function declarations
    sed -i 's/React\.FC = () => {;/React.FC = () => {/g' "$file"
    sed -i 's/React\.FC = () => {;/React.FC = () => {/g' "$file"
    
    # Fix semicolons after const declarations
    sed -i 's/const \([a-zA-Z_][a-zA-Z0-9_]*\): React\.FC = () => {;/const \1: React.FC = () => {/g' "$file"
    
    # Fix semicolons in object properties
    sed -i 's/icon: \([a-zA-Z_][a-zA-Z0-9_]*\),;/icon: \1,/g' "$file"
    sed -i 's/title: '\''[^'\'']*'\'',;/title: '\''[^'\'']*'\'',/g' "$file"
    sed -i 's/description: '\''[^'\'']*'\'',;/description: '\''[^'\'']*'\'',/g' "$file"
    
    # Fix semicolons in array elements
    sed -i 's/benefits: \[/benefits: [/g' "$file"
    sed -i 's/'\''[^'\'']*'\'',;/'\''[^'\'']*'\'',/g' "$file"
    
    # Remove standalone semicolons on their own lines
    sed -i '/^[[:space:]]*;$/d' "$file"
    
    # Fix semicolons after closing braces
    sed -i 's/}\s*;/}/g' "$file"
    
    # Fix semicolons in JSX attributes
    sed -i 's/className="[^"]*",;/className="[^"]*"/g' "$file"
    sed -i 's/size="[^"]*",;/size="[^"]*"/g' "$file"
    sed -i 's/text="[^"]*",;/text="[^"]*"/g' "$file"
    
    # Fix semicolons in return statements
    sed -i 's/return (;/return (/g' "$file"
    
    # Fix semicolons in JSX elements
    sed -i 's/<\([a-zA-Z][a-zA-Z0-9]*\)[^>]*>,;/<\1[^>]*>/g' "$file"
    sed -i 's/<\/\([a-zA-Z][a-zA-Z0-9]*\)>,;/<\/\1>/g' "$file"
    
    # Clean up any remaining double semicolons
    sed -i 's/;;/;/g' "$file"
    
    # Clean up any remaining semicolons before closing braces
    sed -i 's/;\s*}/}/g' "$file"
    
    # Clean up any remaining semicolons after opening braces
    sed -i 's/{\s*;/{/g' "$file"
done

echo "Syntax error fixes completed!"
echo "Processed $count files"