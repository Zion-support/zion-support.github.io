#!/bin/bash
set -e

echo "Starting Netlify build process with npm..."

# Clean up any existing node_modules and lock files
echo "Cleaning up existing files..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Set environment variables
export NODE_ENV="production"
export NPM_CONFIG_INCLUDE="dev"
export NPM_CONFIG_LEGACY_PEER_DEPS="true"

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps --no-optional --prefer-offline

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"