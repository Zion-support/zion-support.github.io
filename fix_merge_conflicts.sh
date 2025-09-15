#!/bin/bash

# Script to automatically resolve merge conflicts by keeping the first version
# This removes all merge conflict markers and keeps the content before the first =======

find src -name "*.jsx" -o -name "*.js" -o -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file line by line
    in_conflict=false
    conflict_level=0
    
    while IFS= read -r line; do
      if [[ "$line" =~ ^"<<<<<<< HEAD" ]]; then
        in_conflict=true
        conflict_level=1
        continue
      elif [[ "$line" =~ ^"=======" ]]; then
        if [[ $in_conflict == true && $conflict_level == 1 ]]; then
          conflict_level=2
          continue
        fi
      elif [[ "$line" =~ ^">>>>>>> " ]]; then
        if [[ $in_conflict == true ]]; then
          in_conflict=false
          conflict_level=0
          continue
        fi
      fi
      
      # Only write lines that are not in conflict or are in the first part (before =======)
      if [[ $in_conflict == false ]] || [[ $in_conflict == true && $conflict_level == 1 ]]; then
        echo "$line" >> "$temp_file"
      fi
    done < "$file"
    
    # Replace the original file with the fixed version
    mv "$temp_file" "$file"
  fi
done

echo "Merge conflicts resolved!"