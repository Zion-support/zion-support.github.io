#!/bin/bash
set -e

echo "Regenerating yarn.lock file with updated resolutions..."

# Clean everything
rm -rf node_modules
rm -f yarn.lock
yarn cache clean --all

# Install with new resolutions
yarn install

echo "Yarn lockfile regenerated successfully!"
echo "Please commit the new yarn.lock file to your repository."