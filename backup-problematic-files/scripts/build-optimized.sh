#!/bin/bash
set -e

echo "🚀 Starting optimized build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean:all

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run type checking
echo "🔍 Running type check..."
npm run type-check:fast

# Run linting
echo "🔍 Running linting..."
npm run lint:fix

# Build application
echo "🏗️  Building application..."
npm run build:optimized

# Run tests
echo "🧪 Running tests..."
npm run test:unit

echo "✅ Build completed successfully!"
