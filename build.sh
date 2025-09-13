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

  # Remove yarn.lock if it exists to force fresh resolution
  echo "Backing up yarn.lock..."
  if [ -f yarn.lock ]; then
    cp yarn.lock yarn.lock.backup
  fi

  # Install dependencies with retry logic and glob-parent fix
  echo "Installing dependencies..."
  for i in {1..3}; do
    echo "Attempt $i of 3..."
    if yarn install --frozen-lockfile --network-timeout 100000 --ignore-engines --ignore-platform --force; then
      echo "Dependencies installed successfully!"
      break
    else
      echo "Installation failed, cleaning and retrying..."
      rm -rf node_modules
      rm -rf .yarn-cache
      yarn cache clean --all
      
      # Fix for glob-parent LICENSE file issue
      echo "Applying glob-parent fix..."
      yarn cache clean --all
      rm -rf ~/.yarn/cache/v6/npm-glob-parent-*
      
      if [ $i -eq 3 ]; then
        echo "All yarn installation attempts failed! Trying npm as fallback..."
        # Restore yarn.lock if we backed it up
        if [ -f yarn.lock.backup ]; then
          mv yarn.lock.backup yarn.lock
        fi
        
        # Try npm as fallback
        echo "Attempting npm installation..."
        rm -rf node_modules
        rm -rf package-lock.json
        npm cache clean --force
        
        if npm install --legacy-peer-deps; then
          echo "Dependencies installed successfully with npm!"
          break
        else
          echo "Both yarn and npm installation failed!"
          exit 1
        fi
      fi
    fi
  done
fi

# Build the project
echo "Building project..."
yarn build

echo "Build completed successfully!"