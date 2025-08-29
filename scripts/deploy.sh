#!/bin/bash

# Deploy Script to replace GitHub Actions deploy workflow
# This script performs the same tasks as the deploy workflow

set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

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
if [ ! -f "dist/index.html" ]; then
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

echo "🚀 Deploying to production..."
echo "Build completed successfully at $(date)"
echo "Ready for deployment to your hosting platform"

# Add your deployment commands here
# Examples:
# - AWS S3: aws s3 sync dist/ s3://your-bucket-name/
# - Netlify: npx netlify-cli deploy --prod --dir=dist
# - Vercel: npx vercel --prod --cwd=dist
# - Custom script: ./scripts/deploy.sh

echo "✅ Deployment process completed"