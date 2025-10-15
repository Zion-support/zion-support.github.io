#!/bin/bash

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -exec grep -l "/,/^>>>>>> cursor/d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"