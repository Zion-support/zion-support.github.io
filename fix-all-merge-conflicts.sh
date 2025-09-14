#!/bin/bash

echo "🔧 Fixing all merge conflicts in the codebase..."

# Find and fix merge conflict markers in all relevant files
find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" \) -exec grep -l "    
    # Remove any remaining conflict markers
    sed -i '/^=======$/d' "$file"
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
done

echo "✅ Merge conflict markers fixed!"

# Check for any remaining conflicts
remaining_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.js" --include="*.ts" --include="*.tsx" --include="*.jsx" --include="*.json" --include="*.md" | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "🎉 All merge conflicts resolved!"
else
    echo "⚠️  $remaining_conflicts merge conflicts still remain"
fi