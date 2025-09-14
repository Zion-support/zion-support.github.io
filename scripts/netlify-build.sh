#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Clean up any existing node_modules to prevent EEXIST errors
echo "Cleaning up existing node_modules..."
rm -rf node_modules

# Clean yarn cache to prevent conflicts
echo "Cleaning yarn cache..."
yarn cache clean

# Remove yarn.lock to force fresh dependency resolution
echo "Removing yarn.lock for fresh dependency resolution..."
rm -f yarn.lock

# Set environment variables to handle dependency conflicts
export YARN_ENABLE_IMMUTABLE_INSTALLS=false
export NPM_CONFIG_LEGACY_PEER_DEPS=true
export NPM_CONFIG_FORCE=true

# Install dependencies with specific flags to handle EEXIST errors
echo "Installing dependencies..."
yarn install --network-timeout 1000000 --ignore-engines --no-frozen-lockfile

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"