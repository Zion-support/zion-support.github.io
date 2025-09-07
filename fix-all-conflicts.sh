#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
<<<<<<< HEAD
  if [ -f "$file" ] && grep -q "
    echo "Fixing conflicts in: $file"
    
    # Remove all merge conflict markers

=======
  if [ -f "$file" ] && grep -q "\|    echo "Fixing conflicts in: $file"
    

    # Remove all merge conflict markers

/d' "$file"
=======

=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"


    
<<<<<<< HEAD
    # Remove everything from 
    sed -i '/^
    
    # Remove any remaining  markers
    sed -i '/^$/d' "$file"
=======
    # Remove everything from  (inclusive)
    # Keep everything after ======= until     sed -i '/^/d' "$file"
    
    # Remove the     sed -i '/^    
    # Remove any remaining ======= markers
    sed -i '/^=======$/d' "$file"
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"