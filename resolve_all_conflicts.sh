#!/bin/bash

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
echo "Resolving all merge conflicts by accepting our version..."
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
=======
>>>>>>> cursor/create-and-deploy-new-content-3fd6
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
=======
>>>>>>> cursor/create-and-deploy-new-content-e4b8
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f18dd51d09966d9ccd305d811e0b1edfa245900
<<<<<<< HEAD
echo "🔧 Resolving ALL remaining merge conflicts..."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
=======
echo "Resolving all merge conflicts by accepting our version..."
>>>>>>> cursor/create-and-deploy-new-content-a12c
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-079e
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-0dce
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-04f4
=======
>>>>>>> cursor/create-and-deploy-new-content-0dce
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
=======
echo "Resolving all merge conflicts by accepting our version..."
>>>>>>> cursor/create-and-deploy-new-content-a12c
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
echo "Resolving all merge conflicts by accepting our version..."
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c

# Accept our version for all conflicted files
git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        git checkout --ours "$file"
        git add "$file"
    fi
done

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
=======
>>>>>>> cursor/create-and-deploy-new-content-3fd6
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3a26
=======
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-04f4
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3fd6
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
echo "Conflict resolution complete!"
echo "Files processed: $(echo "$files_with_conflicts" | wc -l)"
>>>>>>> cursor/create-and-deploy-new-content-a12c
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-079e
=======
>>>>>>> cursor/create-and-deploy-new-content-3fd6
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-8069
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-04f4
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
=======
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
=======
# For files that were deleted by us but modified by them, keep them deleted
git status --porcelain | grep "^DU" | awk '{print $2}' | while read file; do
    echo "Keeping deleted: $file"
    git rm "$file"
done

# For files that were added by them but not by us, remove them
git status --porcelain | grep "^AU" | awk '{print $2}' | while read file; do
    echo "Removing added file: $file"
    git rm "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by accepting our clean version"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
