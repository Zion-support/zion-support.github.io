#!/bin/bash

# Enhanced Build Optimization Script
set -e

echo "🚀 Starting enhanced build optimization..."

# Function to safely run commands
safe_run() {
    echo "Running: $*"
    "$@" || {
        echo "Command failed: $*"
        return 1
    }
}

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.vite/

# Install dependencies
echo "📦 Installing dependencies..."
safe_run pnpm install

# Run type checking
echo "🔍 Running TypeScript type checking..."
safe_run pnpm run type-check

# Run linting with fix
echo "🔧 Running ESLint with auto-fix..."
safe_run pnpm run lint:fix

# Build the application
echo "🏗️ Building application..."
safe_run pnpm run build:no-check

# Check build output
echo "📊 Checking build output..."
if [ -d "dist" ]; then
    echo "✅ Build successful! Dist directory created."
    echo "📁 Build contents:"
    ls -la dist/
    
    # Check for critical files
    if [ -f "dist/index.html" ]; then
        echo "✅ index.html found"
    else
        echo "❌ index.html missing"
        exit 1
    fi
    
    if [ -d "dist/assets" ]; then
        echo "✅ Assets directory found"
        echo "📦 Asset files:"
        ls -la dist/assets/
    else
        echo "❌ Assets directory missing"
        exit 1
    fi
else
    echo "❌ Build failed! Dist directory not created."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
safe_run pnpm run test:ci

# Analyze bundle
echo "📈 Analyzing bundle..."
safe_run pnpm run analyze

echo "🎉 Enhanced build optimization completed successfully!"
echo "📊 Build Summary:"
echo "- TypeScript: ✅"
echo "- Linting: ✅"
echo "- Build: ✅"
echo "- Tests: ✅"
echo "- Bundle Analysis: ✅"
