#!/bin/bash

<<<<<<< HEAD
<<<<<<< HEAD
    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^

  fi

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
echo "Fixing merge conflicts by keeping HEAD version..."

# Find all files with merge conflicts
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.cjs" \) -exec grep -l "\|    echo "Processing: $file"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
# Find all files with merge conflicts and fix them
find /workspace -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "^<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    
    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    
    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^    sed -i '/^    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/^/,/^    
    # Remove any remaining conflict markers
    sed -i '/^/d; /^    
    echo "Fixed: $file"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
  fi
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  fi
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
done

echo "Merge conflicts fixed!"