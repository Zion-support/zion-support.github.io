#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
    echo "Fixing conflicts in: $file"
    
<<<<<<< HEAD
    # Create a backup
    cp "$file" "$file.backup"
=======
    # Remove all merge conflict markers
<<<<<<< HEAD:backup-problematic-files/fix-all-conflicts.sh
<<<<<<< HEAD:fix-all-conflicts.sh
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358:fix-all-conflicts.sh
<<<<<<< HEAD
    sed -i '/<<<<<<< HEAD/,/>>>>>>>/d' "$file"
    sed -i '/=======/d' "$file"
=======
<<<<<<< HEAD:backup-problematic-files/fix-all-conflicts.sh
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:backup-problematic-files/fix-all-conflicts.sh
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358:fix-all-conflicts.sh
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
    
    # Remove everything from <<<<<<< HEAD to ======= (inclusive)
    # Keep everything after ======= until >>>>>>> 
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    
    # Remove the >>>>>>> markers
    sed -i '/^>>>>>>> /d' "$file"
    
    # Remove any remaining ======= markers
    sed -i '/^=======$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"