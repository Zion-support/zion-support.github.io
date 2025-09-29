#!/bin/bash

echo "Fixing anyany typos in the codebase..."

# Find all TypeScript/JavaScript files and fix anyany typos
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
        # Fix anyany -> any (with spaces)
        sed -i '' 's/anyany /any /g' "$file"
        # Fix anyany -> any (with newlines)
        sed -i '' 's/anyany$/any/g' "$file"
    fi
done

echo "anyany typos fixed!"
