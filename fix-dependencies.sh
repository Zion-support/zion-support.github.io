#!/bin/bash

echo "🔧 Fixing dependency issues for Netlify build..."

# Clear Yarn cache to fix ENOENT error
echo "📦 Clearing Yarn cache..."
yarn cache clean

# Remove node_modules and yarn.lock to start fresh
echo "🗑️ Removing existing node_modules and yarn.lock..."
rm -rf node_modules
rm -f yarn.lock

# Install dependencies fresh
echo "📥 Installing dependencies..."
yarn install

# Verify installation
echo "✅ Verifying installation..."
yarn check

echo "🎉 Dependency fix complete! You can now try building again."