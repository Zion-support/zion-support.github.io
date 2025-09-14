#!/bin/bash
set -e

echo "Starting Netlify build process with npm..."

# Clean up any existing node_modules
echo "Cleaning up existing node_modules..."
rm -rf node_modules package-lock.json

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps --no-audit --no-fund

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"