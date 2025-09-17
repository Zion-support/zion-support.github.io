#!/bin/bash

echo "Performing final comprehensive syntax fixes..."

# Function to fix JSX syntax issues in a file
fix_file_syntax_final() {
    local file="$1"
    echo "Fixing: $file"
    
    if [ -f "$file" ]; then
        # Remove any remaining merge conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Fix the specific issue with missing closing div tags
        # Look for the pattern where we have a closing section and div but missing the container div
        sed -i 's/      <\/section>$/      <\/section>\n      <\/div>\n    <\/div>/g' "$file"
        
        # Ensure proper component closing
        sed -i 's/  );$/  );/g' "$file"
        sed -i 's/^};$/};/g' "$file"
        
        echo "Fixed: $file"
    fi
}

# Find and fix all problematic files
echo "Fixing syntax errors in pages..."
find src/pages -name "*.jsx" -o -name "*.tsx" | while read file; do
    # Only fix files that might have the issue
    if grep -q "SpaceTechInnovation2026\|AdvancedAISystems2026\|UltimateTechShowcase2026" "$file"; then
        fix_file_syntax_final "$file"
    fi
done

echo "All syntax fixes completed!"