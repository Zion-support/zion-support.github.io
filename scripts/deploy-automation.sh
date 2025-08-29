#!/bin/bash

# Deploy Automation Script - Replaces GitHub Actions Deploy workflow
# This script handles the deployment process

set -e

echo "🚀 Starting deployment automation..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build project
echo "🏗️ Building project..."
npm run build

# Verify build output
echo "🔍 Verifying build output..."
if [ ! -d dist ]; then
  echo "❌ Build failed: dist folder not found"
  exit 1
fi

echo "✅ Build successful! Found dist folder with:"
ls -la dist/

# Check for essential files
if [ -f dist/index.html ]; then
  echo "✓ index.html found"
else
  echo "✗ index.html not found"
  exit 1
fi

if [ -f dist/css/index-*.css ]; then
  echo "✓ CSS files found"
else
  echo "✗ CSS files not found"
  exit 1
fi

if [ -f dist/js/index-*.js ]; then
  echo "✓ JavaScript files found"
else
  echo "✗ JavaScript files not found"
  exit 1
fi

# Deploy to production using PM2
echo "🚀 Deploying to production..."
pm2 reload ecosystem.config.js --env production

echo "✅ Deployment completed successfully!"
echo "Build completed at $(date)"
echo "Application is now running in production mode"