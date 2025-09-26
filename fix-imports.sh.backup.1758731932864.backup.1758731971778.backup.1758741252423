#!/bin/bash

# Fix import paths in all TypeScript files
echo "Fixing import paths..."

# Find all .tsx and .ts files in the app directory and fix import paths
find app -name "*.tsx" -o -name "*.ts" | while read file; do
    # Fix SEO import paths
    sed -i "s|from '../../../components/SEO'|from '../../components/SEO'|g" "$file"
    sed -i "s|from '../../../components/ErrorBoundary'|from '../../components/ErrorBoundary'|g" "$file"
    sed -i "s|from '../../../components/LoadingSpinner'|from '../../components/LoadingSpinner'|g" "$file"
    
    # Fix other component import paths
    sed -i "s|from '../../../components/|from '../../components/|g" "$file"
    sed -i "s|from '../../../|from '../../|g" "$file"
    
    echo "Fixed imports in: $file"
done

# Remove merge conflict markers
echo "Removing merge conflict markers..."
find app -name "*.tsx" -o -name "*.ts" | while read file; do
    # Remove merge conflict markers
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Cleaned merge conflicts in: $file"
done

echo "Import path fixes completed!"