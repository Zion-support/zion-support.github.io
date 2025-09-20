#!/bin/bash

# Fix Syntax Errors Script
# This script will fix common syntax errors introduced during merge conflicts

echo "🔧 Starting syntax error fixes..."

# Find all TypeScript and JavaScript files with syntax errors
echo "Finding files with syntax errors..."

# Fix common patterns:
# 1. Extra semicolons after function declarations
# 2. Extra semicolons after return statements
# 3. Extra semicolons after JSX elements

find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    echo "Fixing syntax errors in: $file"
    
    # Fix function declarations with extra semicolons
    sed -i 's/() => {;/() => {/g' "$file"
    sed -i 's/() => {;/() => {/g' "$file"
    sed -i 's/React.FC = () => {;/React.FC = () => {/g' "$file"
    
    # Fix return statements with extra semicolons
    sed -i 's/return (;/return (/g' "$file"
    
    # Fix JSX elements with extra semicolons at the end
    sed -i 's/>;/>/g' "$file"
    
    # Fix closing tags with extra semicolons
    sed -i 's/<\/[^>]*>;/<\/&>/g' "$file"
    
    # Fix JSX attributes with extra semicolons
    sed -i 's/className="[^"]*";/className="&"/g' "$file"
    sed -i 's/onClick={[^}]*};/onClick={&}/g' "$file"
    
    # Fix JSX expressions with extra semicolons
    sed -i 's/{[^}]*};/{&}/g' "$file"
    
    # Fix closing braces with extra semicolons
    sed -i 's/};/}/g' "$file"
    
    # Fix conditional statements with extra semicolons
    sed -i 's/if ([^)]*) {;/if (&) {/g' "$file"
    sed -i 's/else {;/else {/g' "$file"
    
    # Fix object properties with extra semicolons
    sed -i 's/const [^=]* = {;/const & = {/g' "$file"
    
    # Fix array elements with extra semicolons
    sed -i 's/\[[^]]*\];/\[&\]/g' "$file"
done

echo "✅ Syntax error fixes completed!"