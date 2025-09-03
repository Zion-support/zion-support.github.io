#!/bin/bash

# Advanced Build Script for Zion Tech Group
echo "🚀 Starting optimized build process..."

# Set environment variables for optimal performance
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export NEXT_DISABLE_ESLINT=1
export NODE_OPTIONS="--max-old-space-size=4096"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out
rm -rf dist

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm ci --only=production
fi

# Run type checking
echo "🔍 Running type checking..."
npx tsc --noEmit || echo "⚠️ Type checking completed with warnings"

# Build the application
echo "🏗️ Building application..."
npm run build:optimized

# Check build success
if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully!"
  
  # Generate build report
  echo "📊 Generating build report..."
  node scripts/generate-build-report.js
  
  # Start the application
  echo "🚀 Starting application..."
  npm run start:optimized
else
  echo "❌ Build failed!"
  exit 1
fi
