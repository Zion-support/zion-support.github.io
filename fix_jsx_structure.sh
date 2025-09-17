#!/bin/bash

# Script to fix JSX structure issues after merge conflict resolution
echo "Fixing JSX structure issues..."

# Find all files with JSX structure issues
files_with_issues=$(find src/ -name "*.tsx" -o -name "*.jsx" | head -20)

for file in $files_with_issues; do
    echo "Checking: $file"
    
    # Check if file has JSX structure issues
    if grep -q "motion\.div" "$file" && ! grep -q "framer-motion" "$file"; then
        echo "Fixing motion.div issues in: $file"
        
        # Replace motion.div with div
        sed -i 's/motion\.div/div/g' "$file"
        
        # Fix closing tags
        sed -i 's/<\/motion\.div>/<\/div>/g' "$file"
    fi
    
    # Check for duplicate closing tags
    if grep -q "}\s*}\s*}" "$file"; then
        echo "Fixing duplicate closing braces in: $file"
        sed -i 's/}\s*}\s*}/}/g' "$file"
    fi
    
    # Check for missing closing tags
    if grep -q "Expected closing" "$file" 2>/dev/null; then
        echo "File has JSX structure issues: $file"
    fi
done

echo "JSX structure fixes completed!"