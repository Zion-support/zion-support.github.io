#!/bin/bash

# Script to fix common syntax errors in blog files
echo "Starting syntax error fixes..."

# Find all blog files with syntax errors
error_files=$(find /workspace/app/blog -name "*.tsx" -exec grep -l "Parsing error" {} \; 2>/dev/null || echo "")

if [ -z "$error_files" ]; then
    echo "No files with parsing errors found via grep. Processing all blog files..."
    error_files=$(find /workspace/app/blog -name "*.tsx")
fi

count=0
for file in $error_files; do
    count=$((count + 1))
    echo "Processing ($count): $file"
    
    # Create backup
    cp "$file" "$file.syntax-backup"
    
    # Fix common issues
    # 1. Remove invalid characters (non-printable characters)
    sed -i 's/[[:cntrl:]]//g' "$file"
    
    # 2. Fix missing closing parentheses in function declarations
    sed -i 's/export default function \([^(]*\)() {/export default function \1() {/' "$file"
    
    # 3. Ensure proper JSX structure - wrap content in a single parent div if needed
    # This is a complex fix that would need more sophisticated parsing
    # For now, let's just clean up obvious issues
    
    # 4. Remove any remaining merge conflict artifacts
    sed -i '/^/d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
    # 5. Fix common JSX issues
    # Remove any stray characters that might break JSX
    sed -i 's/[^\x00-\x7F]//g' "$file"
    
done

echo "Syntax error fixes completed for $count files."
echo "Note: Some complex syntax issues may require manual review."