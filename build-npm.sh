#!/bin/bash
set -e

echo "Starting build process with npm..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf package-lock.json
rm -rf dist

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"