#!/bin/bash

# CI Script to replace GitHub Actions CI workflow
# This script performs the same tasks as the CI workflow

set -e

echo "🚀 Starting CI process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Lint
echo "🔍 Running linting..."
npm run lint

# Type check
echo "✅ Running type check..."
npm run type-check

# Build project
echo "🏗️ Building project..."
npm run build

# Verify build output
echo "🔍 Verifying build output..."
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist folder not found"
    exit 1
fi

echo "✅ Build successful! Found dist folder with:"
ls -la dist/

# Check for essential files
if [ -f "dist/index.html" ]; then
    echo "✓ index.html found"
else
    echo "✗ index.html not found"
    exit 1
fi

if [ -f "dist/css/index-*.css" ] || [ -f "dist/assets/index-*.css" ]; then
    echo "✓ CSS files found"
else
    echo "✗ CSS files not found"
    exit 1
fi

if [ -f "dist/js/index-*.js" ] || [ -f "dist/assets/index-*.js" ]; then
    echo "✓ JavaScript files found"
else
    echo "✗ JavaScript files not found"
    exit 1
fi

echo "🎉 CI process completed successfully!"