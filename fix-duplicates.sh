#!/bin/bash

# Script to fix duplicate variable declarations
echo "Fixing duplicate variable declarations..."

find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q "const stats" "$file" && grep -q "const stats" "$file" && [ $(grep -c "const stats" "$file") -gt 1 ]; then
    echo "Fixing duplicates in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to remove duplicates
    in_first_section=true
    skip_duplicate=false
    
    while IFS= read -r line; do
      if [[ "$line" =~ ^[[:space:]]*const[[:space:]]+(stats|testimonials|benefits|features|capabilities)[[:space:]]*=[[:space:]]*\[ ]]; then
        if [[ "$in_first_section" == true ]]; then
          echo "$line" >> "$temp_file"
          in_first_section=false
        else
          skip_duplicate=true
        fi
      elif [[ "$line" =~ ^[[:space:]]*\];[[:space:]]*$ ]] && [[ "$skip_duplicate" == true ]]; then
        skip_duplicate=false
        # Skip this line (end of duplicate section)
      elif [[ "$skip_duplicate" == false ]]; then
        echo "$line" >> "$temp_file"
      fi
    done < "$file"
    
    # Replace the original file
    mv "$temp_file" "$file"
  fi
done

echo "Duplicate declarations fixed!"