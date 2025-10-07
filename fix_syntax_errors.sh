#!/bin/bash

<<<<<<< HEAD
# Script to fix syntax errors in TypeScript/TSX files
echo "Fixing syntax errors in TypeScript/TSX files..."

# Find all .tsx and .ts files with syntax errors (excluding .backup files)
files_with_errors=$(find /workspace/src -name "*.tsx" -o -name "*.ts" | grep -v ".backup")

for file in $files_with_errors; do
    echo "Checking: $file"
    
    # Fix common import syntax errors
    sed -i 's/import, React, from '\''rea, c, t'\'';/import React from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useSta, t, e, useEffe, c, t } fr, o, m '\''rea, c, t'\'';/import React, { useState, useEffect } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useEffe, c, t } fr, o, m '\''rea, c, t'\'';/import React, { useEffect } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useSta, t, e } fr, o, m '\''rea, c, t'\'';/import React, { useState } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useRef } fr, o, m '\''rea, c, t'\'';/import React, { useRef } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useMemo } fr, o, m '\''rea, c, t'\'';/import React, { useMemo } from '\''react'\'';/g' "$file"
    sed -i 's/import, React, { useCallback } fr, o, m '\''rea, c, t'\'';/import React, { useCallback } from '\''react'\'';/g' "$file"
    
    # Fix other common syntax errors
    sed -i 's/interface, /interface /g' "$file"
    sed -i 's/const, /const /g' "$file"
    sed -i 's/let, /let /g' "$file"
    sed -i 's/var, /var /g' "$file"
    sed -i 's/function, /function /g' "$file"
    sed -i 's/export, /export /g' "$file"
    sed -i 's/import, /import /g' "$file"
    sed -i 's/from, /from /g' "$file"
    sed -i 's/class, /class /g' "$file"
    sed -i 's/type, /type /g' "$file"
    
    # Fix className syntax errors
    sed -i 's/classNam, e=/className=/g' "$file"
    sed -i 's/classNa, m, e=/className=/g' "$file"
    
    # Fix other common patterns
    sed -i 's/useSta, t, e/useState/g' "$file"
    sed -i 's/useEffe, c, t/useEffect/g' "$file"
    sed -i 's/useRef/useRef/g' "$file"
    sed -i 's/useMemo/useMemo/g' "$file"
    sed -i 's/useCallback/useCallback/g' "$file"
    
    # Fix React.FC syntax
    sed -i 's/Rea, c, t\.FC/React.FC/g' "$file"
    sed -i 's/React\.FC/React.FC/g' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
=======
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
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> .*/d' "$file"
    
    # 5. Fix common JSX issues
    # Remove any stray characters that might break JSX
    sed -i 's/[^\x00-\x7F]//g' "$file"
    
done

echo "Syntax error fixes completed for $count files."
echo "Note: Some complex syntax issues may require manual review."
>>>>>>> origin/fix-errors-and-merge-final
