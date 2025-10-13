#!/bin/bash

# Script to fix merge conflicts by keeping the HEAD version
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file line by line
    in_head=false
    in_other=false
    
    while IFS= read -r line; do
      if [[ "$line" == "<<<<<<< HEAD" ]]; then
        in_head=true
        in_other=false
        continue
      elif [[ "$line" == "=======" ]]; then
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