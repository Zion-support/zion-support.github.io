#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Check if we're in a Netlify environment
if [ "$NETLIFY" = "true" ]; then
  echo "Detected Netlify environment - using optimized build process..."

  echo "Installing dependencies with Netlify-optimized settings (npm ci if lockfile exists)..."
  if [ -f package-lock.json ]; then
    npm ci --no-fund --no-audit --prefer-offline --cache .npm-cache
  else
    npm install --no-fund --no-audit --prefer-offline --cache .npm-cache
  fi

else
  echo "Local development environment detected - using full cleanup process..."

  echo "Cleaning previous installations..."
  rm -rf node_modules
  rm -rf dist
  rm -rf .npm-cache

  echo "Cleaning npm cache..."
  npm cache clean --force >/dev/null 2>&1 || true

  echo "Installing dependencies (with retry logic)..."
  for i in {1..3}; do
    echo "Attempt $i of 3..."
    if [ -f package-lock.json ]; then
      npm ci --no-fund --no-audit --prefer-offline --cache .npm-cache && success=1 || success=0
    else
      npm install --no-fund --no-audit --prefer-offline --cache .npm-cache && success=1 || success=0
    fi
    if [ "$success" = "1" ]; then
      echo "Dependencies installed successfully!"
      break
    else
      echo "Installation failed, cleaning and retrying..."
      rm -rf node_modules
      rm -rf .npm-cache
      npm cache clean --force >/dev/null 2>&1 || true
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