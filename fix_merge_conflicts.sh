#!/bin/bash

  if grep -q "" "$file"; then
# Find all files with merge conflicts and fix them by keeping HEAD version
find app/services -name "*.tsx" -exec grep -l "/ { in_head = 0; in_other = 1; next }
    /^    in_head || (!in_head && !in_other) { print }
    /^    in_head || (!in_head && !in_other) { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
done

echo "Merge conflicts fixed!"
