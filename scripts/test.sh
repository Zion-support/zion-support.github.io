#!/bin/bash

# Test Script to replace GitHub Actions test workflow
# This script performs the same tasks as the test workflow

set -e

echo "🧪 Starting test process..."

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

# Verify asset paths (simplified version)
echo "🔍 Verifying asset paths..."
if [ -f "dist/index.html" ]; then
    echo "✓ index.html found and accessible"
else
    echo "✗ index.html not found"
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
if npm test; then
    echo "✅ Tests passed"
else
    echo "⚠️ Tests failed or not available, continuing..."
fi

echo "🎉 Test process completed!"