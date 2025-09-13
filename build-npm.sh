#!/bin/bash
set -e

echo "Starting build process with npm..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf package-lock.json
rm -rf dist

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps --no-audit --no-fund

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"