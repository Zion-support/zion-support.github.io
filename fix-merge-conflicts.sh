#!/bin/bash


echo "Fixing merge conflict markers..."

# Find and fix merge conflict markers in all relevant files
find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" \) -exec grep -l "
    fi
done

echo "Merge conflicts fixed!"
>>>>>>> origin/resolved-all-conflicts-final-1757174062
