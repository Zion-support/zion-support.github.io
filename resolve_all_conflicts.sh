#!/bin/bash

<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
=======
=======
echo "Resolving all merge conflicts by accepting our version..."
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
echo "Resolving all merge conflicts by accepting our version..."
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
echo "Resolving all merge conflicts by accepting our version..."
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
>>>>>>> origin/backup-main-20250918-004015
echo "Resolving all merge conflicts by accepting our version..."
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-4cdf
>>>>>>> cursor/create-and-deploy-new-content-39c9
>>>>>>> 8452eec82dbead09881ecc02125b309d82846988
echo "🔧 Resolving ALL remaining merge conflicts..."
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-04f4
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-1912
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-e4b8
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> a7d9dd3a70ff86f87fa115e469bc3b5277dcb081
>>>>>>> cursor/create-and-deploy-new-content-d9c7
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
>>>>>>> cursor/create-and-deploy-new-content-39c9
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> 8452eec82dbead09881ecc02125b309d82846988

# Accept our version for all conflicted files
git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        git checkout --ours "$file"
        git add "$file"
    fi
done

<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-04f4
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-e4b8
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-4cdf
>>>>>>> cursor/create-and-deploy-new-content-39c9
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> 8452eec82dbead09881ecc02125b309d82846988
echo "🎉 All conflict resolution complete!"
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

echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-87a1
>>>>>>> 2f18dd51d09966d9ccd305d811e0b1edfa245900
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-1912
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-04f4
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-079e
>>>>>>> cursor/create-and-deploy-new-content-e4b8
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-0dce
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-8069
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> cursor/create-and-deploy-new-content-3fd6
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-bec3
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
>>>>>>> cursor/create-and-deploy-new-content-d9c7
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
>>>>>>> cursor/create-and-deploy-new-content-39c9
>>>>>>> 79074ad98eccd23a739dfc8527c7f6ffbf7293ab
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
>>>>>>> 8452eec82dbead09881ecc02125b309d82846988
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
echo "🎉 All conflict resolution complete!"
=======
=======
echo "Resolving all merge conflicts by using main branch version..."

# Find all files with merge conflicts
=======
echo "All merge conflicts resolved!"
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
echo "Conflict resolution complete!"
echo "Files processed: $(echo "$files_with_conflicts" | wc -l)"
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
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
>>>>>>> origin/backup-main-20250918-004015
