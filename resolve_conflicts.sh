#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages -name "*.tsx" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove conflict markers and choose HEAD version
    # This is a simple approach - remove everything between ======= and >>>>>>> 
    # and remove the <<<<<<< HEAD line
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/,/>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985/d' "$file"
    
    echo "Resolved conflicts in $file"
done

echo "Conflict resolution complete!"