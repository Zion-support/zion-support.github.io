#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Clean up any existing node_modules to prevent EEXIST errors
echo "Cleaning up existing node_modules..."
rm -rf node_modules

# Clean yarn cache to prevent conflicts
echo "Cleaning yarn cache..."
yarn cache clean

# Install dependencies with specific flags to handle EEXIST errors
echo "Installing dependencies..."
yarn install --frozen-lockfile --network-timeout 1000000 --ignore-engines

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"