#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Clean up any existing node_modules to prevent EEXIST errors
echo "Cleaning up existing node_modules..."
rm -rf node_modules

# Clean yarn cache to prevent conflicts
echo "Cleaning yarn cache..."
yarn cache clean

# Remove yarn.lock to force fresh resolution
echo "Removing yarn.lock for fresh dependency resolution..."
rm -f yarn.lock

# Clear npm cache as well
echo "Clearing npm cache..."
npm cache clean --force

# Try yarn install with retry logic
echo "Installing dependencies with fresh resolution..."
for i in {1..3}; do
    echo "Attempt $i of 3..."
    if yarn install --network-timeout 1000000 --ignore-engines --no-frozen-lockfile --verbose; then
        echo "Yarn install successful on attempt $i"
        break
    else
        echo "Yarn install failed on attempt $i"
        if [ $i -eq 3 ]; then
            echo "All yarn attempts failed, trying npm as fallback..."
            rm -rf node_modules
            npm install --legacy-peer-deps --no-audit --no-fund
            break
        fi
        echo "Retrying in 5 seconds..."
        sleep 5
    fi
done

# Verify installation
echo "Verifying installation..."
if command -v yarn >/dev/null 2>&1; then
    yarn check --integrity || echo "Warning: Integrity check failed, but continuing..."
else
    npm ls --depth=0 || echo "Warning: Some packages may have issues, but continuing..."
fi

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"