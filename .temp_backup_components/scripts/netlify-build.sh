#!/bin/bash

# Netlify build script with comprehensive error handling
set -e

echo "🚀 Starting Netlify build process..."

# Clean up any existing problematic files
echo "🧹 Cleaning up existing files..."
rm -rf node_modules/.yarn-integrity || true
rm -rf node_modules/.cache || true

# Remove any existing node_modules to ensure clean install
echo "🗑️ Removing existing node_modules..."
rm -rf node_modules || true

# Clear Yarn cache if it exists
echo "🧽 Clearing Yarn cache..."
yarn cache clean || true

# Install dependencies with specific flags to prevent EEXIST errors
echo "📦 Installing dependencies..."
yarn install \
  --frozen-lockfile \
  --network-timeout 1000000 \
  --prefer-offline \
  --no-emoji \
  --ignore-engines

# Verify installation
echo "✅ Verifying installation..."
if [ ! -d "node_modules" ]; then
  echo "❌ node_modules directory not found after installation"
  exit 1
fi

# Run the build
echo "🔨 Running build..."
npm run build

echo "🎉 Build completed successfully!"
