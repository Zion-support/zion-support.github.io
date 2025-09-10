#!/bin/bash

<<<<<<< HEAD
echo "Fixing merge conflicts in the codebase..."

# Find all TypeScript/JavaScript files with merge conflicts
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "^        # and everything between  and 
        awk '
        /^
        /^/ { in_head = 0; in_other = 1; next }
        /^
        in_head { print }
        !in_head && !in_other { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        echo "Fixed conflicts in $file"
    fi
done

echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
=======
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "" {} \;)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from  to  (inclusive)
    # Remove lines from  to     sed -i '//,//d' "$file"
    sed -i '//,/    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
