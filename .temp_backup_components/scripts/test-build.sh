#!/bin/bash
set -e

echo "Testing build process locally..."

# Test the robust build script
echo "Testing robust build script..."
bash scripts/netlify-build-robust.sh

echo "Build test completed successfully!"