#!/bin/bash

<<<<<<< HEAD
# Script to fix merge conflicts by keeping the HEAD version
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if grep -q "" ]]; then
        in_head=false
        in_other=true
        continue
        in_head=false
        in_other=false
        continue
      fi
      
      if [[ "$in_head" == true ]]; then
        echo "$line" >> "$temp_file"
      elif [[ "$in_other" == false ]]; then
        echo "$line" >> "$temp_file"
      fi
    done < "$file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version (first part)
    sed -i '//,//!d' "$file"
    sed -i '//,/    
=======
# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  fi
done

echo "Merge conflicts fixed!"
