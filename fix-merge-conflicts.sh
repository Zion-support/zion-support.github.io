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
  fi
done

echo "Merge conflicts fixed!"
=======
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflict markers
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
    echo "Fixing $file..."
    
    # Remove conflict markers and keep the content after =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "Fixed $file"
done

echo "All merge conflicts fixed!"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
