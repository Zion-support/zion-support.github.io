#!/bin/bash

# Find all files with merge conflict markers and fix them
find /workspace/app -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "^[<>=]{7}" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep only the content after the last =======
    # This is a simple approach - we'll keep the content after the last ======= marker
    awk '/^=======$/ {flag=1; next} flag' "$file" > "$file.tmp"
    
    # If the temp file is not empty, use it, otherwise restore from backup
    if [ -s "$file.tmp" ]; then
      mv "$file.tmp" "$file"
    else
      # If no content after =======, try to keep content before <<<<<<< HEAD
      awk '/^<<<<<<< HEAD/ {flag=1; next} /^=======/ {flag=0; next} flag' "$file.backup" > "$file.tmp"
      if [ -s "$file.tmp" ]; then
        mv "$file.tmp" "$file"
      else
        # If still empty, restore backup
        mv "$file.backup" "$file"
      fi
    fi
    
    # Clean up temp files
    rm -f "$file.tmp" "$file.backup"
  fi
done

echo "Merge conflict fixing completed!"