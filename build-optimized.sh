#!/bin/bash
set -e

echo "🚀 Starting optimized build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out dist

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

# Type checking
echo "🔍 Running type checks..."
npm run type-check

# Linting
echo "🔧 Running linters..."
npm run lint:fix

# Build
echo "🏗️ Building application..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Test
echo "🧪 Running tests..."
npm run test:ci

echo "✅ Build completed successfully!"
