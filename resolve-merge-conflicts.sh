#!/bin/bash

echo "Resolving merge conflicts by accepting remote changes..."

# Find all files with merge conflicts
    sed -i '/^[a-f0-9]*$/d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflicts resolved. Backup files created with .backup extension."
echo "Please review the changes before committing."