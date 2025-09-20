#!/bin/bash

# Comprehensive Syntax Error Fix Script
# This script will fix all syntax errors introduced during merge conflicts

echo "🔧 Starting comprehensive syntax error fixes..."

# Find all TypeScript and JavaScript files with syntax errors
echo "Finding and fixing syntax errors in all files..."

find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    echo "Fixing syntax errors in: $file"
    
    # Create a backup
    cp "$file" "${file}.backup"
    
    # Fix common patterns:
    # 1. Remove extra semicolons after variable declarations
    sed -i 's/useState(false),;/useState(false);/g' "$file"
    sed -i 's/useState(0),;/useState(0);/g' "$file"
    sed -i 's/useState<number | null>(null),;/useState<number | null>(null);/g' "$file"
    
    # 2. Fix duplicate if statements
    sed -i 's/if (if (/if (/g' "$file"
    
    # 3. Remove extra semicolons from JSX elements
    sed -i 's/>;/>/g' "$file"
    sed -i 's/};/}/g' "$file"
    
    # 4. Fix function declarations
    sed -i 's/() => {;/() => {/g' "$file"
    sed -i 's/React.FC = () => {;/React.FC = () => {/g' "$file"
    
    # 5. Fix return statements
    sed -i 's/return (;/return (/g' "$file"
    
    # 6. Fix JSX attributes
    sed -i 's/className="[^"]*";/className="&"/g' "$file"
    sed -i 's/onClick={[^}]*};/onClick={&}/g' "$file"
    
    # 7. Fix object properties
    sed -i 's/const [^=]* = {;/const & = {/g' "$file"
    
    # 8. Fix array declarations
    sed -i 's/\[[^]]*\];/\[&\]/g' "$file"
    
    # 9. Fix conditional statements
    sed -i 's/if ([^)]*) {;/if (&) {/g' "$file"
    sed -i 's/else {;/else {/g' "$file"
    
    # 10. Fix comments
    sed -i 's/\/\/ [^;]*;/\//g' "$file"
    
    # 11. Fix string declarations
    sed -i 's/"[^"]*";/"/g' "$file"
    
    # 12. Fix template literals
    sed -i 's/`[^`]*`;/\`/g' "$file"
    
    # 13. Fix closing braces and parentheses
    sed -i 's/};/}/g' "$file"
    sed -i 's/);/)/g' "$file"
    
    # 14. Fix imports
    sed -i 's/import [^;]*;/import &/g' "$file"
    
    # 15. Fix exports
    sed -i 's/export [^;]*;/export &/g' "$file"
done

echo "✅ Comprehensive syntax error fixes completed!"