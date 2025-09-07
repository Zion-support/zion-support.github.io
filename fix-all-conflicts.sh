#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "\|    echo "Fixing conflicts in: $file"
    

    # Remove all merge conflict markers

/d' "$file"

    sed -i '/^/,/^/d' "$file"


    
    # Remove everything from  (inclusive)
    
    # Remove the     sed -i '/^    
    
    echo "Fixed: $file"
  fi
# Find all files with merge conflicts

if [ -n "$files_with_conflicts" ]; then
    echo "Found files with merge conflicts:"
    echo "$files_with_conflicts"
# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "
    echo "Fixing conflicts in: $file"
    
    # Remove all merge conflict markers

# Fix common syntax issues
echo "Fixing common syntax issues..."

# Fix files with malformed JSX structure
for file in $(find ./app -name "*.tsx" -o -name "*.ts"); do
    if grep -q "export const metadata" "$file" && ! grep -q "export default function" "$file"; then
        echo "Fixing metadata placement in: $file"
        # Move metadata to the top
        sed -i '1i export const metadata = {\n  title: "Service | Zion Tech Group",\n  description: "Professional services for your business needs."\n};\n' "$file"
    fi
    sed -i '/^/,/^/d' "$file"
# Fix common syntax issues
echo "Fixing common syntax issues..."

# Fix files with malformed JSX structure
for file in $(find ./app -name "*.tsx" -o -name "*.ts"); do
    if grep -q "export const metadata" "$file" && ! grep -q "export default function" "$file"; then
        echo "Fixing metadata placement in: $file"
        # Move metadata to the top
        sed -i '1i export const metadata = {\n  title: "Service | Zion Tech Group",\n  description: "Professional services for your business needs."\n};\n' "$file"
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
    
    # Remove everything from 
    sed -i '/^
    
    # Remove any remaining  markers
    sed -i '/^$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"
