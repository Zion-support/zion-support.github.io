#!/bin/bash

echo "Fixing Target icon imports..."

# Find all files that import Target from lucide-react and remove it
find app -name "*.tsx" -exec grep -l "Target" {} \; | while read file; do
    echo "Fixing Target import in: $file"
    
    # Remove Target from the import statement
    sed -i 's/, Target//g' "$file"
    sed -i 's/Target, //g' "$file"
    sed -i 's/Target as TargetIcon//g' "$file"
    sed -i 's/, Target as TargetIcon//g' "$file"
    sed -i 's/Target as TargetIcon, //g' "$file"
done

echo "Target icon imports fixed!"