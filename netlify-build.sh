#!/bin/bash

# Netlify build script with fallback options
set -e

echo "Starting Netlify build process..."

# Clean previous installations
echo "Cleaning previous installations..."
rm -rf node_modules .yarn-cache .npm-cache

# Try Yarn first
echo "Attempting Yarn installation..."
if yarn --version > /dev/null 2>&1; then
    echo "Yarn found, attempting installation..."
    yarn cache clean || true
    if yarn install --network-timeout 100000 --no-cache --ignore-engines --ignore-optional; then
        echo "Yarn installation successful"
        # Fix rollup native binary issue
        echo "Fixing rollup native binary..."
        yarn add @rollup/rollup-linux-x64-gnu --dev || true
        yarn build
        exit 0
    else
        echo "Yarn installation failed, falling back to npm..."
    fi
else
    echo "Yarn not found, using npm..."
fi

# Fallback to npm
echo "Using npm as fallback..."
npm cache clean --force || true
# Generate package-lock.json if it doesn't exist
if [ ! -f package-lock.json ]; then
    echo "Generating package-lock.json..."
    npm install --package-lock-only --no-optional --no-audit --no-fund
fi
npm ci --no-optional --no-audit --no-fund
# Fix rollup native binary issue
echo "Fixing rollup native binary..."
npm install @rollup/rollup-linux-x64-gnu --save-dev || true
npm run build

echo "Build completed successfully"