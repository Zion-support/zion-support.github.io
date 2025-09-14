#!/bin/bash

# Fix Netlify Build Issues Script
# This script addresses the PostCSS conflict and cache corruption issues

echo "🔧 Fixing Netlify build issues..."

# 1. Clean all caches and lock files
echo "🧹 Cleaning caches and lock files..."
rm -rf node_modules
rm -rf yarn.lock
rm -rf package-lock.json
rm -rf .yarn
rm -rf .cache

# 2. Clear yarn cache
echo "🗑️ Clearing yarn cache..."
yarn cache clean --all

# 3. Reinstall dependencies
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# 4. Verify PostCSS version compatibility
echo "🔍 Checking PostCSS compatibility..."
POSTCSS_VERSION=$(node -e "console.log(require('./node_modules/postcss/package.json').version)")
NEXT_VERSION=$(node -e "console.log(require('./node_modules/next/package.json').version)")
echo "PostCSS version: $POSTCSS_VERSION"
echo "Next.js version: $NEXT_VERSION"

# 5. Test build
echo "🏗️ Testing build..."
yarn build:netlify

echo "✅ Build fix completed!"