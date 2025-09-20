#!/bin/bash
# Clean build script
echo "🧹 Cleaning build artifacts..."

# Remove build directories
rm -rf .next out node_modules/.cache

# Clean npm cache
npm cache clean --force

# Reinstall dependencies
echo "📦 Reinstalling dependencies..."
npm ci --legacy-peer-deps

# Run fresh build
echo "🔨 Running fresh build..."
npm run build

echo "✅ Clean build completed!"
