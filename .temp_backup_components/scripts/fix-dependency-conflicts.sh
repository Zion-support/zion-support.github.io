#!/bin/bash
set -e

echo "Fixing dependency conflicts..."

# Remove problematic lock files
echo "Removing lock files..."
rm -f yarn.lock package-lock.json

# Clean caches
echo "Cleaning caches..."
yarn cache clean || true
npm cache clean --force || true

# Remove node_modules
echo "Removing node_modules..."
rm -rf node_modules

# Check for conflicting Tailwind versions
echo "Checking for Tailwind CSS conflicts..."
if grep -q "tailwindcss.*4\." package.json; then
    echo "Found Tailwind CSS v4, removing v3 to prevent conflicts..."
    npm uninstall tailwindcss || true
    npm install tailwindcss@^3.4.17 --save-dev
fi

# Install dependencies with conflict resolution
echo "Installing dependencies with conflict resolution..."
yarn install --network-timeout 1000000 --ignore-engines --no-frozen-lockfile || npm install --legacy-peer-deps

echo "Dependency conflicts fixed!"