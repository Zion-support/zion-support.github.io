#!/bin/bash

echo "🚀 Starting Netlify build process..."

# Clean any existing build artifacts
echo "🧹 Cleaning previous build..."
rm -rf dist node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --include=dev

# Check if Vite is available
echo "🔍 Checking if Vite is available..."
if ! npx vite --version > /dev/null 2>&1; then
    echo "❌ Vite is not available. Please check installation."
    exit 1
fi

echo "✅ Vite is available"

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build output exists
if [ ! -d "dist" ]; then
    echo "❌ Build output directory 'dist' not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output: dist"

# List build contents
echo "📄 Built files:"
ls -la dist/

echo "🎉 Netlify build process completed!"