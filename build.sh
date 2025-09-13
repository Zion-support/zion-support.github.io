#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Check if we're in a Netlify environment
if [ "$NETLIFY" = "true" ]; then
  echo "Detected Netlify environment - using specialized build process..."
  
  # Use the specialized Netlify build script
  exec ./netlify-build.sh
  
else
  echo "Local development environment detected - using full cleanup process..."
  
  # Clean everything for local development
  echo "Cleaning previous installations..."
  rm -rf node_modules
  rm -rf .pnpm-store
  rm -rf dist

  # Clean pnpm cache completely
  echo "Cleaning pnpm cache..."
  pnpm store prune

  # Install dependencies with retry logic
  echo "Installing dependencies..."
  for i in {1..3}; do
    echo "Attempt $i of 3..."
    if pnpm install --frozen-lockfile; then
      echo "Dependencies installed successfully!"
      break
    else
      echo "Installation failed, cleaning and retrying..."
      rm -rf node_modules
      pnpm store prune
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