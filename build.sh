#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Check if we're in a Netlify environment
if [ "$NETLIFY" = "true" ]; then
  echo "Detected Netlify environment - using optimized build process..."
  
  # For Netlify, use a more conservative approach
  echo "Installing dependencies with Netlify-optimized settings..."
  yarn install --frozen-lockfile --network-timeout 60000
  
else
  echo "Local development environment detected - using full cleanup process..."
  
  # Clean everything for local development
  echo "Cleaning previous installations..."
  rm -rf node_modules
  rm -rf .yarn-cache
  rm -rf dist

  # Clean yarn cache completely
  echo "Cleaning yarn cache..."
  yarn cache clean --all

  # Install dependencies with retry logic for local development
  echo "Installing dependencies..."
  for i in {1..3}; do
    echo "Attempt $i of 3..."
    if yarn install --network-timeout 100000; then
      echo "Dependencies installed successfully!"
      break
    else
      echo "Installation failed, cleaning and retrying..."
      rm -rf node_modules
      rm -rf .yarn-cache
      yarn cache clean --all
      if [ $i -eq 3 ]; then
        echo "All installation attempts failed!"
        exit 1
      fi
    fi
  done
fi

# Build the project
echo "Building project..."
pnpm run build

echo "Build completed successfully!"
fi