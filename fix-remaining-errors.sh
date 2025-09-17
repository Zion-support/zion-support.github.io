#!/bin/bash

echo "🔧 Fixing remaining TypeScript errors..."

# Fix files with numeric identifiers (invalid component names)
find src -name "*.tsx" -exec grep -l "^[0-9]" {} \; | while read file; do
    echo "Fixing numeric identifier in: $file"
    # Rename the file to have a valid name
    dir=$(dirname "$file")
    basename=$(basename "$file")
    newname=$(echo "$basename" | sed 's/^[0-9]/Component/')
    if [ "$basename" != "$newname" ]; then
        mv "$file" "$dir/$newname"
        echo "Renamed to: $dir/$newname"
    fi
done

# Fix App.minimal.tsx and App_backup.tsx by removing them or fixing content
if [ -f "src/App.minimal.tsx" ]; then
    echo "Removing problematic App.minimal.tsx"
    rm "src/App.minimal.tsx"
fi

if [ -f "src/App_backup.tsx" ]; then
    echo "Fixing App_backup.tsx"
    # Remove any stray characters at the end
    sed -i '/^[[:space:]]*[,\]]*[[:space:]]*$/d' "src/App_backup.tsx"
    # Ensure file ends properly
    if [ -s "src/App_backup.tsx" ] && [ "$(tail -c1 "src/App_backup.tsx")" != "" ]; then
        echo "" >> "src/App_backup.tsx"
    fi
fi

# Fix any remaining files with stray characters
find src -name "*.tsx" -o -name "*.ts" | while read file; do
    # Remove lines that are just stray characters
    sed -i '/^[[:space:]]*[,\]]*[[:space:]]*$/d' "$file"
    # Remove stray characters at the beginning of lines
    sed -i 's/^[[:space:]]*[,\]]*[[:space:]]*//' "$file"
done

echo "✅ Fixed remaining TypeScript errors"