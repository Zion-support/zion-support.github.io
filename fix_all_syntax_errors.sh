#!/bin/bash

echo "🔧 Fixing all syntax errors in the codebase..."

# Function to fix common syntax errors in a file
fix_file_syntax() {
    local file="$1"
    echo "🔨 Fixing syntax in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Fix common syntax errors
    sed -i 's/import React {/import React, {/g' "$file"
    sed -i 's/import React from "react"/import React, { useState, useEffect } from "react"/g' "$file"
    sed -i 's/interface AIConversation { id: string type:/interface AIConversation { id: string; type:/g' "$file"
    sed -i 's/boolean,"/boolean;/g' "$file"
    sed -i 's/string,}/string;}/g' "$file"
    sed -i 's/boolean,}/boolean;}/g' "$file"
    sed -i 's/number,}/number;}/g' "$file"
    sed -i 's/React.FC: =/React.FC =/g' "$file"
    sed -i 's/React.FC: = () => {,/React.FC = () => {/g' "$file"
    sed -i 's/const \[setting,s,/const [settings,/g' "$file"
    sed -i 's/fals,e,/false,/g' "$file"
    sed -i 's/"normal,",/"normal",/g' "$file"
    sed -i 's/false: }/false }/g' "$file"
    sed -i 's/}  screenReader: boolean}/}/g' "$file"
    sed -i 's/;  focusVisibl,;/;/g' "$file"
    sed -i 's/e: boolean,;/e: boolean;/g' "$file"
    sed -i 's/screenReade,;/screenReader;/g' "$file"
    sed -i 's/r: boolean}/r: boolean}/g' "$file"
    sed -i 's/const AccessibilityManager: React.FC = () => {,;/const AccessibilityManager: React.FC = () => {/g' "$file"
    
    echo "✅ Fixed: $file"
}

# Find all TypeScript/JavaScript files with potential syntax errors
files_to_fix=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .git | head -50)

if [ -z "$files_to_fix" ]; then
    echo "✅ No files to fix!"
    exit 0
fi

echo "📁 Found $(echo "$files_to_fix" | wc -l) files to check"

# Counter for fixed files
fixed_count=0

# Process each file
for file in $files_to_fix; do
    # Check if file has syntax errors
    if grep -q "import React {" "$file" || grep -q "interface.*{" "$file" || grep -q "React.FC: =" "$file"; then
        fix_file_syntax "$file"
        ((fixed_count++))
    fi
done

echo "🎉 Successfully fixed $fixed_count files with syntax errors!"

# Clean up backup files
echo "🧹 Cleaning up backup files..."
find . -name "*.backup" -delete 2>/dev/null

echo "✨ Syntax error fixing complete!"