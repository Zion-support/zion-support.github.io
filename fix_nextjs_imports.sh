#!/bin/bash

echo "Fixing Next.js imports in source files..."

# Find all files with next/ imports in src directory
files_with_nextjs=$(find src/ -name "*.jsx" -o -name "*.tsx" | xargs grep -l "next/" 2>/dev/null)

for file in $files_with_nextjs; do
    echo "Fixing $file..."
    
    # Replace next/link with react-router-dom
    sed -i 's/import Link from '\''next\/link'\'';/import { Link } from '\''react-router-dom'\'';/g' "$file"
    sed -i 's/import { Link } from '\''next\/link'\'';/import { Link } from '\''react-router-dom'\'';/g' "$file"
    
    # Replace next/image with regular img tag (we'll need to update usage manually)
    sed -i 's/import Image from '\''next\/image'\'';/\/\/ import Image from '\''next\/image'\''; \/\/ Replaced with img tag/g' "$file"
    
    # Replace next/head with react-helmet-async
    sed -i 's/import Head from '\''next\/head'\'';/import { Helmet } from '\''react-helmet-async'\'';/g' "$file"
    
    # Replace next/dynamic with React.lazy (simplified)
    sed -i 's/import dynamic from '\''next\/dynamic'\'';/\/\/ import dynamic from '\''next\/dynamic'\''; \/\/ Replaced with direct import/g' "$file"
    
    # Remove dynamic() wrapper calls
    sed -i 's/dynamic(() => import(/import /g' "$file"
    sed -i 's/, { ssr: false })//g' "$file"
    
    echo "Fixed $file"
done

echo "All Next.js imports fixed!"