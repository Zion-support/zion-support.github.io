#!/bin/bash

# Build script to handle NAPI/Sharp issues
set -e

echo "Starting build process..."

# Set environment variables to skip Sharp postinstall
export SHARP_IGNORE_GLOBAL_LIBVIPS=1
export SHARP_DIST_BASE_URL=https://github.com/lovell/sharp-libvips/releases/download/v1.2.0/

# Clean previous build
echo "Cleaning previous build..."
rm -rf dist .next node_modules/.cache

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"