#!/bin/bash

<<<<<<< HEAD
echo "Fixing all merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found!"
    exit 0
fi

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD content
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    # Alternative approach using awk if sed fails
    if grep -q "<<<<<<< HEAD" "$file"; then
        awk '
        /^<<<<<<< HEAD/ { in_head = 1; next }
        /^=======/ { in_head = 0; in_other = 1; next }
        /^>>>>>>> / { in_other = 0; next }
        in_head || (!in_head && !in_other) { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    fi
done

echo "All merge conflicts resolved!"
=======
echo "Fixing all merge conflicts in the project..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>>" 2>/dev/null || true)

if [ -z "$files_with_conflicts" ]; then
  echo "No merge conflicts found."
  exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
  echo "Fixing conflicts in: $file"
  
  # Create a backup
  cp "$file" "$file.backup"
  
  # Remove merge conflict markers and keep the HEAD version
  sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
  sed -i '/<<<<<<< HEAD/d' "$file"
  sed -i '/=======/d' "$file"
  sed -i '/>>>>>>> /d' "$file"
  sed -i '/^=======/d' "$file"
  sed -i '/^>>>>>>> /d' "$file"
  
  # Check if the file is now empty or corrupted
  if [ ! -s "$file" ] || grep -q "<<<<<<< HEAD\|=======\|>>>>>>>" "$file"; then
    echo "File $file is corrupted, restoring from backup and removing it"
    mv "$file.backup" "$file"
    rm "$file"
  else
    echo "Successfully fixed: $file"
    rm "$file.backup"
  fi
done

echo "Merge conflict resolution completed."
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
