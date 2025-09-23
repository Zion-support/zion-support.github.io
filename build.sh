#!/bin/bash
set -e

echo "Starting build process..."

# Check if we're in a Netlify environment
if [ "$NETLIFY" = "true" ]; then
  echo "Detected Netlify environment - using optimized build process..."
  echo "Installing dependencies with npm ci (Netlify)..."
  if [ -f package-lock.json ]; then
    npm ci --no-audit --no-fund --prefer-offline
  else
    npm install --no-audit --no-fund --prefer-offline
  fi
  
else
  echo "Local development environment detected - using full cleanup process..."
  
  # Clean everything for local development
  echo "Cleaning previous installations..."
  rm -rf node_modules
  rm -rf .yarn-cache
  rm -rf dist

  # Clean yarn cache completely
  echo "Ensuring Corepack is enabled..."
  corepack enable >/dev/null 2>&1 || true

  # Install dependencies with retry logic for local development
  echo "Installing dependencies (npm) with retry..."
  for i in {1..3}; do
    echo "Attempt $i of 3..."
    if [ -f package-lock.json ]; then
      npm ci --no-audit --no-fund --prefer-offline && success=1 || success=0
    else
      npm install --no-audit --no-fund --prefer-offline && success=1 || success=0
    fi
    if [ "$success" = "1" ]; then
      echo "Dependencies installed successfully!"
      break
    else
      echo "Installation failed, cleaning and retrying..."
      rm -rf node_modules
      if [ $i -eq 3 ]; then
        echo "All installation attempts failed!"
        exit 1
      fi
    fi
  done
fi

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"