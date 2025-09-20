#!/bin/bash

# Script to fix all syntax errors in the codebase
echo "Fixing all syntax errors..."

# Fix common syntax patterns
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    echo "Fixing syntax in: $file"
    
    # Fix common syntax issues
    sed -i 's/;,/;/g' "$file" 2>/dev/null || true
    sed -i 's/,$/;/g' "$file" 2>/dev/null || true
    sed -i 's/export const metadata: Metadata = {,/export const metadata: Metadata = {/g' "$file" 2>/dev/null || true
    sed -i 's/import React from "react",/import React from "react";/g' "$file" 2>/dev/null || true
    sed -i 's/import \* as React from "react",/import * as React from "react";/g' "$file" 2>/dev/null || true
    sed -i 's/const switch: React.FC = () => {,/const Switch: React.FC = () => {/g' "$file" 2>/dev/null || true
    sed -i 's/return (,/return (/g' "$file" 2>/dev/null || true
    sed -i 's/isLoading;/isLoading,/g' "$file" 2>/dev/null || true
    sed -i 's/import { fetchWithRetry,  }/import { fetchWithRetry }/g' "$file" 2>/dev/null || true
    sed -i 's/id: string;,/id: string;/g' "$file" 2>/dev/null || true
    sed -i 's/name: string;,/name: string;/g' "$file" 2>/dev/null || true
    
    # Fix JSX syntax issues
    sed -i 's/<JsonLd data={/JsonLd data={/g' "$file" 2>/dev/null || true
    sed -i 's/} \/>/} \/>/g' "$file" 2>/dev/null || true
done

echo "Syntax fixes completed!"