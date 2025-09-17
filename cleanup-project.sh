#!/bin/bash

echo "🧹 Starting comprehensive project cleanup..."

# Remove all backup files
echo "📁 Removing backup files..."
find . -name "*.backup*" -type f -delete
find . -name "*.js.jsx" -type f -delete
find . -name "*.jsx.backup*" -type f -delete

# Remove duplicate components
echo "🔄 Removing duplicate components..."
find src/components -name "*.jsx" -not -name "*.tsx" -delete
find src/components -name "*.js" -not -name "*.ts" -delete

# Clean up pages directory
echo "📄 Cleaning pages directory..."
find src/pages -name "*.jsx" -not -name "*.tsx" -delete
find src/pages -name "*.js" -not -name "*.ts" -delete

# Remove empty directories
echo "🗂️ Removing empty directories..."
find . -type d -empty -delete

# Clean up root directory
echo "🏠 Cleaning root directory..."
find . -maxdepth 1 -name "*.backup*" -delete
find . -maxdepth 1 -name "*.js.jsx" -delete

echo "✅ Cleanup completed!"
echo "📊 Project structure cleaned up"