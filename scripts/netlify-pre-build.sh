#!/bin/bash

# Netlify Pre-build Script
# This script runs before the main build to ensure clean dependency installation

set -e

echo "🚀 Starting Netlify pre-build process..."

# 1. Clean up any existing problematic files
echo "🧹 Cleaning up potential conflict sources..."
rm -rf node_modules/.cache
rm -rf .yarn/cache
rm -rf .yarn/install-state.gz

# 2. Ensure we have a clean yarn cache
echo "🗑️ Clearing yarn cache..."
yarn cache clean --all || true

# 3. Install dependencies with specific flags to prevent EEXIST errors
echo "📦 Installing dependencies with conflict prevention..."
yarn install \
  --frozen-lockfile \
  --network-timeout 1000000 \
  --prefer-offline \
  --ignore-engines \
  --ignore-platform \
  --no-optional || {
    echo "⚠️ First install attempt failed, trying with force flag..."
    yarn install --force --network-timeout 1000000
}

# 4. Verify critical dependencies are installed
echo "✅ Verifying critical dependencies..."
yarn list critters > /dev/null || echo "⚠️ critters not found in dependencies"
yarn list vite > /dev/null || echo "⚠️ vite not found in dependencies"

echo "🎉 Pre-build process completed successfully!"