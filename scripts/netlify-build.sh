#!/bin/bash

# Force npm usage and prevent Yarn detection
# This script ensures Netlify uses npm instead of Yarn

set -e

echo "=== FORCING NPM USAGE ==="
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Remove any Yarn-related files that might exist
echo "=== REMOVING YARN FILES ==="
rm -rf .yarn .yarnrc .yarnrc.yml yarn.lock 2>/dev/null || true

# Force npm configuration
echo "=== CONFIGURING NPM ==="
npm config set ignore-scripts true

# Clean npm cache and install dependencies
echo "=== INSTALLING DEPENDENCIES WITH NPM ==="
npm cache clean --force
npm ci --ignore-scripts --omit=optional

# Build the project
echo "=== BUILDING PROJECT ==="
npm run build:netlify

echo "=== BUILD COMPLETE ==="
ls -la dist/
