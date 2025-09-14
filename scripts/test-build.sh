#!/bin/bash
set -e

echo "Testing build process locally..."

# Test the yarn-based build
echo "Testing yarn-based build..."
bash scripts/netlify-build.sh

echo "Yarn build test completed!"

# Uncomment to test npm-based build
# echo "Testing npm-based build..."
# bash scripts/netlify-build-npm.sh
# echo "NPM build test completed!"

echo "All build tests completed successfully!"