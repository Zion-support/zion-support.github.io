#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "/!d; /^/d; /^
    
    # Remove any remaining conflict markers
    sed -i '/^/d; /^
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
