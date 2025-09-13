#!/bin/bash
set -e

echo "Starting Netlify build process with find-up fix..."

# Set environment variables for Netlify
export NODE_ENV=production
export NETLIFY=true

# Clear all caches and corrupted packages
echo "Clearing all caches and corrupted packages..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf ~/.yarn/cache/v6/npm-find-up-*
rm -rf ~/.yarn/cache/v6/npm-glob-parent-*
rm -rf ~/.yarn/cache/v6/npm-glob-*
rm -rf ~/.yarn/cache/v6/npm-eslint-*

# Clean Yarn cache completely
echo "Cleaning Yarn cache..."
yarn cache clean --all

# Create a fresh yarn.lock if needed
echo "Ensuring fresh dependency resolution..."
if [ -f yarn.lock ]; then
  cp yarn.lock yarn.lock.backup
fi

# Install dependencies with Yarn (no pnpm)
echo "Installing dependencies with Yarn..."
for attempt in {1..3}; do
  echo "Installation attempt $attempt of 3..."
  
  # Clear node_modules before each attempt
  rm -rf node_modules
  
  # Try different installation strategies
  case $attempt in
    1)
      echo "Attempt 1: Standard Yarn installation..."
      if yarn install --network-timeout 120000 --ignore-engines --ignore-optional --no-cache; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    2)
      echo "Attempt 2: Yarn installation with specific resolutions..."
      # Force specific versions for problematic packages
      yarn add find-up@5.0.0 --exact --network-timeout 120000 --ignore-engines --no-cache
      yarn add glob-parent@6.0.2 --exact --network-timeout 120000 --ignore-engines --no-cache
      yarn add glob@10.4.5 --exact --network-timeout 120000 --ignore-engines --no-cache
      if yarn install --network-timeout 120000 --ignore-engines --ignore-optional --no-cache; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    3)
      echo "Attempt 3: Last resort - clean install with fresh lockfile..."
      # Remove existing lockfile and do fresh install
      rm -f yarn.lock
      if yarn install --network-timeout 120000 --ignore-engines --ignore-optional --no-cache; then
        echo "Dependencies installed successfully!"
        break
      else
        echo "All installation attempts failed!"
        exit 1
      fi
      ;;
  esac
  
  # Clean up before next attempt
  rm -rf node_modules
  yarn cache clean --all
  rm -rf ~/.yarn/cache/v6/npm-find-up-*
  rm -rf ~/.yarn/cache/v6/npm-glob-parent-*
  rm -rf ~/.yarn/cache/v6/npm-glob-*
  rm -rf ~/.yarn/cache/v6/npm-eslint-*
done

# Verify installation
echo "Verifying installation..."
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found!"
  exit 1
fi

# Check for find-up package specifically
if [ ! -d "node_modules/find-up" ]; then
  echo "find-up package not found in node_modules!"
  echo "Attempting to install find-up manually..."
  yarn add find-up@5.0.0 --exact --network-timeout 120000 --ignore-engines --no-cache
fi

# Build the project
echo "Building project..."
yarn build

echo "Build completed successfully!"