#!/bin/bash

echo "Fixing all remaining Next.js imports..."

# Fix pages directory
find pages/ -name "*.jsx" -o -name "*.tsx" | while read file; do
    if grep -q "next/" "$file"; then
        echo "Fixing $file..."
        
        # Replace next/head with react-helmet-async
        sed -i 's/import Head from '\''next\/head'\'';/import { Helmet } from '\''react-helmet-async'\'';/g' "$file"
        sed -i 's/import { Head } from '\''next\/head'\'';/import { Helmet } from '\''react-helmet-async'\'';/g' "$file"
        
        # Replace next/link with react-router-dom
        sed -i 's/import Link from '\''next\/link'\'';/import { Link } from '\''react-router-dom'\'';/g' "$file"
        sed -i 's/import { Link } from '\''next\/link'\'';/import { Link } from '\''react-router-dom'\'';/g' "$file"
        
        # Replace next/image with regular img
        sed -i 's/import Image from '\''next\/image'\'';/\/\/ import Image from '\''next\/image'\''; \/\/ Replaced with img tag/g' "$file"
        
        # Replace next/dynamic
        sed -i 's/import dynamic from '\''next\/dynamic'\'';/\/\/ import dynamic from '\''next\/dynamic'\''; \/\/ Replaced with direct import/g' "$file"
        
        # Remove dynamic() wrapper calls
        sed -i 's/dynamic(() => import(/import /g' "$file"
        sed -i 's/, { ssr: false })//g' "$file"
        
        echo "Fixed $file"
    fi
done

echo "All Next.js imports fixed!"