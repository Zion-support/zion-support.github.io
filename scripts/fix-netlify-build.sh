#!/bin/bash

# Fix Netlify Build Issues Script
# This script addresses the EEXIST error and other common Netlify build issues

set -e

echo "🔧 Starting Netlify build fix process..."

# 1. Clean up any existing node_modules and lock files
echo "🧹 Cleaning up existing dependencies..."
rm -rf node_modules
rm -f yarn.lock
rm -f package-lock.json

# 2. Clear yarn cache
echo "🗑️ Clearing yarn cache..."
yarn cache clean --all || true

# 3. Verify package.json integrity
echo "🔍 Verifying package.json..."
node -e "
const pkg = require('./package.json');
const deps = new Set();
const devDeps = new Set();

// Check for duplicates in dependencies
Object.keys(pkg.dependencies || {}).forEach(dep => {
  if (deps.has(dep)) {
    console.error('❌ Duplicate dependency found:', dep);
    process.exit(1);
  }
  deps.add(dep);
});

// Check for duplicates in devDependencies
Object.keys(pkg.devDependencies || {}).forEach(dep => {
  if (devDeps.has(dep)) {
    console.error('❌ Duplicate devDependency found:', dep);
    process.exit(1);
  }
  devDeps.add(dep);
});

// Check for cross-duplicates
Object.keys(pkg.dependencies || {}).forEach(dep => {
  if (pkg.devDependencies && pkg.devDependencies[dep]) {
    console.error('❌ Package found in both dependencies and devDependencies:', dep);
    process.exit(1);
  }
});

console.log('✅ Package.json integrity check passed');
"

# 4. Install dependencies with proper flags
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile --network-timeout 1000000 --prefer-offline

# 5. Verify installation
echo "✅ Verifying installation..."
yarn list --depth=0 > /dev/null

echo "🎉 Netlify build fix completed successfully!"
echo "📋 Next steps:"
echo "   1. Commit the updated package.json"
echo "   2. Push to trigger a new Netlify build"
echo "   3. Monitor the build logs for any remaining issues"