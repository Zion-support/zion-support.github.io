#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Clean up any existing node_modules to prevent EEXIST errors
echo "Cleaning up existing node_modules..."
rm -rf node_modules

# Clean yarn cache to prevent conflicts
echo "Cleaning yarn cache..."
yarn cache clean

# Set environment variables to handle file system conflicts
export YARN_CACHE_FOLDER="/opt/buildhome/.yarn_cache"
export YARN_ENABLE_IMMUTABLE_INSTALLS="false"

# Install dependencies with specific flags to handle EEXIST errors
echo "Installing dependencies..."
yarn install --frozen-lockfile --network-timeout 1000000 --ignore-engines --prefer-offline --no-optional

# If the first install fails, try with different flags
if [ $? -ne 0 ]; then
    echo "First install failed, trying alternative approach..."
    rm -rf node_modules
    yarn install --network-timeout 1000000 --ignore-engines --no-frozen-lockfile --prefer-offline
fi

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"