#!/bin/bash

echo "🔧 Comprehensive syntax fix for all TSX files..."

# Function to fix common syntax errors
fix_syntax_errors() {
    local file="$1"
    echo "🔧 Fixing syntax in: $file"
    
    # Fix common patterns
    sed -i 's/id: "/id="/g' "$file"
    sed -i 's/className: "/className="/g' "$file"
    sed -i 's/className = "/className="/g' "$file"
    sed -i 's/key: {/key={/g' "$file"
    sed -i 's/href: "/href="/g' "$file"
    sed -i 's/href="/href="/g' "$file"
    
    # Remove corrupted syntax patterns
    sed -i 's/",",$//g' "$file"
    sed -i 's/",",//g' "$file"
    sed -i 's/"";/"/g' "$file"
    sed -i 's/className= "/className="/g' "$file"
    sed -i 's/className= {/className={/g' "$file"
    
    # Fix malformed JSX attributes
    sed -i 's/className="\([^"]*\)""/className="\1"/g' "$file"
    sed -i 's/id="\([^"]*\)""/id="\1"/g' "$file"
    
    # Fix malformed closing tags
    sed -i 's/\/>";,"/\/>/g' "$file"
    sed -i 's/\/>";,/\/>/g' "$file"
    
    # Fix malformed opening tags
    sed -i 's/>";,"/>/g' "$file"
    sed -i 's/>";,/>/g' "$file"
    
    # Remove orphaned syntax
    sed -i '/^[[:space:]]*className: {,,$/d' "$file"
    sed -i '/^[[:space:]]*{,,$/d' "$file"
    
    echo "✅ Fixed: $file"
}

# Find all TSX files with syntax errors
find src -name "*.tsx" -type f | while read -r file; do
    # Check if file has syntax errors
    if grep -q 'id: \|className: \|key: \|href: \|",",\|"";' "$file"; then
        fix_syntax_errors "$file"
    fi
done

echo "🎉 Comprehensive syntax fix completed!"

# Check for remaining syntax errors
echo "📋 Checking for remaining syntax errors..."
remaining_errors=$(find src -name "*.tsx" -exec grep -l 'id: \|className: \|key: \|href: \|",",\|"";' {} \; 2>/dev/null | wc -l)

if [ "$remaining_errors" -eq 0 ]; then
    echo "✅ No remaining syntax errors found!"
else
    echo "⚠️  Still found syntax errors in $remaining_errors files"
    echo "Files with remaining errors:"
    find src -name "*.tsx" -exec grep -l 'id: \|className: \|key: \|href: \|",",\|"";' {} \; 2>/dev/null | head -10
fi