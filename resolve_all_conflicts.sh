#!/bin/bash

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f18dd51d09966d9ccd305d811e0b1edfa245900
<<<<<<< HEAD
echo "🔧 Resolving ALL remaining merge conflicts..."
<<<<<<< HEAD
=======
=======
echo "Resolving all merge conflicts by accepting our version..."
>>>>>>> cursor/create-and-deploy-new-content-a12c
>>>>>>> cursor/create-and-deploy-new-content-8069

# Find all files with merge conflict markers
files_with_conflicts=$(grep -r -l "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.tsx" --include="*.jsx" --include="*.ts" --include="*.js" --include="*.css" --include="*.html" 2>/dev/null | grep -v node_modules | grep -v .git)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use git checkout --ours to resolve conflicts
    git checkout --ours "$file" 2>/dev/null || echo "Could not resolve $file with git checkout --ours"
    
    # If git checkout didn't work, try manual resolution
    if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file" 2>/dev/null; then
        echo "Manual resolution needed for $file"
        # Remove all conflict markers and keep the first version (HEAD)
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    fi
done

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
echo "🎉 All conflict resolution complete!"
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-df8e
=======
>>>>>>> 2f18dd51d09966d9ccd305d811e0b1edfa245900
echo "Resolving all merge conflicts by using main branch version..."

# Find all files with merge conflicts
conflicted_files=$(grep -r -l "<<<<<<< HEAD" src/ 2>/dev/null || true)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# For each conflicted file, resolve conflicts by using main branch version
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Use git checkout --theirs to resolve conflicts
    git checkout --theirs "$file" 2>/dev/null || {
        echo "Failed to resolve conflicts in $file, trying manual approach..."
        
        # Manual approach: remove conflict markers and keep the content after =======
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    }
    
    # Add the resolved file
    git add "$file"
done

<<<<<<< HEAD
<<<<<<< HEAD
echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-87a1
=======
echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-df8e
=======
echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-87a1
>>>>>>> 2f18dd51d09966d9ccd305d811e0b1edfa245900
<<<<<<< HEAD
=======
=======
echo "Conflict resolution complete!"
echo "Files processed: $(echo "$files_with_conflicts" | wc -l)"
>>>>>>> cursor/create-and-deploy-new-content-a12c
>>>>>>> cursor/create-and-deploy-new-content-8069
