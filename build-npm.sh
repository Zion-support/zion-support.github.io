#!/bin/bash
set -e

echo "Starting build process with npm..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf dist
rm -rf package-lock.json

# Clean npm cache completely
echo "Cleaning npm cache..."
npm cache clean --force

# Install dependencies with npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps --force

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"