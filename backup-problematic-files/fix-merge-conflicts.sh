#!/bin/bash

    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^

  fi

echo "Fixing merge conflicts by keeping HEAD version..."

# Find all files with merge conflicts
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.cjs" \) -exec grep -l "\|    echo "Processing: $file"
# Find all files with merge conflicts and fix them
find /workspace -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version (first version)
    
    
    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^    sed -i '/^    
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/^/,/^    
    # Remove any remaining conflict markers
    sed -i '/^/d; /^    
    echo "Fixed: $file"
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
  fi
  fi
done

echo "Merge conflicts fixed!"