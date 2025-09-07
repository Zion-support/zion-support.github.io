#!/bin/bash

echo "Fixing all remaining merge conflicts..."

<<<<<<< HEAD
<<<<<<< HEAD
# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "\|    echo "Fixing conflicts in: $file"
    

    # Remove all merge conflict markers

/d' "$file"
=======

=======
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"


    
    # Remove everything from  (inclusive)
    # Keep everything after ======= until     sed -i '/^/d' "$file"
    
    # Remove the     sed -i '/^    
    # Remove any remaining ======= markers
    sed -i '/^=======$/d' "$file"
    
    echo "Fixed: $file"
  fi
=======
# Find all files with merge conflicts
files_with_conflicts=$(find ./app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -n "$files_with_conflicts" ]; then
    echo "Found files with merge conflicts:"
    echo "$files_with_conflicts"
=======
# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "
    echo "Fixing conflicts in: $file"
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
    
    # Remove all merge conflict markers

<<<<<<< HEAD
# Fix common syntax issues
echo "Fixing common syntax issues..."

# Fix files with malformed JSX structure
for file in $(find ./app -name "*.tsx" -o -name "*.ts"); do
    if grep -q "export const metadata" "$file" && ! grep -q "export default function" "$file"; then
        echo "Fixing metadata placement in: $file"
        # Move metadata to the top
        sed -i '1i export const metadata = {\n  title: "Service | Zion Tech Group",\n  description: "Professional services for your business needs."\n};\n' "$file"
    fi
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
    
    # Remove everything from 
    sed -i '/^
    
    # Remove any remaining  markers
    sed -i '/^$/d' "$file"
    
    echo "Fixed: $file"
  fi
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
done

echo "All merge conflicts fixed!"