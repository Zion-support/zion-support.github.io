#!/bin/bash
set -e

echo "Starting Netlify build process with npm..."

# Clean up any existing node_modules to prevent EEXIST errors
echo "Cleaning up existing node_modules..."
rm -rf node_modules

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Remove lock files to force fresh resolution
echo "Removing lock files for fresh dependency resolution..."
rm -f yarn.lock package-lock.json

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps --no-audit --no-fund

# Verify installation
echo "Verifying installation..."
npm ls --depth=0 || echo "Warning: Some packages may have issues, but continuing..."

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"