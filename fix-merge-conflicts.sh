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
      elif [[ "$line" == ">>>>>>>"* ]]; then
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
=======
<<<<<<< HEAD
# Script to fix common merge conflict patterns

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
=======
echo "Fixing merge conflicts and syntax errors..."

# Find all files with merge conflict markers
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version (first part)
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/=======/,/>>>>>>> cursor/d' "$file"
    
<<<<<<< HEAD
    # Clean up any remaining merge conflict markers
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
>>>>>>> origin/cursor/ad-creation-and-management-f267
  fi
done

echo "Merge conflicts fixed!"
<<<<<<< HEAD
=======
=======
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^=======$/d' "$file"
  fi
done

echo "Merge conflicts fixed. Checking for syntax errors..."

# Fix common syntax errors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if [ -f "$file" ]; then
    # Fix unterminated string literals (basic fix)
    sed -i 's/"[^"]*$/"\n/g' "$file"
    
    # Fix missing closing braces (basic fix)
    sed -i 's/^[[:space:]]*}[[:space:]]*$//g' "$file"
  fi
done

echo "Basic fixes applied. Manual review may be needed for complex issues."
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
