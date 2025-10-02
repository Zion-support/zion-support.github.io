#!/bin/bash

# Zion Tech Group - Deployment Script
# This script builds and prepares the application for deployment

set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile || npm ci || npm install

# Run build
echo "🔨 Building application..."
pnpm build || npm run build || vite build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful! Output in dist/ directory"
    
    # Show build stats
    echo "📊 Build statistics:"
    du -sh dist/
    echo "Files in dist/:"
    ls -la dist/
    
    echo "🎉 Deployment preparation complete!"
    echo "📁 Ready to deploy from: $(pwd)/dist/"
else
    echo "❌ Build failed! No dist/ directory found."
    exit 1
fi