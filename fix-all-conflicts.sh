#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
    # Remove all merge conflict markers
:fix-all-conflicts.sh
:backup-problematic-files/fix-all-conflicts.sh
:fix-all-conflicts.sh
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
<<<<<<< HEAD
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
=======

main

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
    
    sed -i '/^=======$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"