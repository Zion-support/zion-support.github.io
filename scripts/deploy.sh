#!/bin/bash
set -e

echo "🚀 Starting deployment process..."

# Build optimized version
./scripts/build-optimized.sh

# Check build output
if [ ! -d ".next" ]; then
  echo "❌ Build failed - .next directory not found"
  exit 1
fi

# Run final checks
echo "🔍 Running final checks..."
npm run test:unit

echo "✅ Deployment ready!"
