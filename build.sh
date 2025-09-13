#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Check if we're in a Netlify environment
if [ "$NETLIFY" = "true" ]; then
  echo "Detected Netlify environment - using optimized build process..."
  
  # Clear any corrupted cache and ensure clean state
  echo "Clearing potential corrupted cache..."
  rm -rf node_modules/.cache
  rm -rf .yarn-cache
  rm -rf node_modules
  
  # Clear Yarn cache to avoid corrupted find-up package issue
  echo "Clearing Yarn cache..."
  yarn cache clean --all
  
  # For Netlify, use a more conservative approach with cache clearing
  echo "Installing dependencies with Netlify-optimized settings..."
  
  # Try installation with retry logic for Netlify
  for i in {1..3}; do
    echo "Installation attempt $i of 3..."
    if yarn install --frozen-lockfile --network-timeout 60000 --prefer-offline --no-cache --ignore-engines; then
      echo "Dependencies installed successfully!"
      break
    else
      echo "Installation failed, cleaning and retrying..."
      rm -rf node_modules
      yarn cache clean --all
      if [ $i -eq 3 ]; then
        echo "All installation attempts failed! Trying without frozen lockfile..."
        yarn install --network-timeout 60000 --prefer-offline --no-cache --ignore-engines
      fi
    fi
  done
  
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
yarn build

echo "Build completed successfully!"