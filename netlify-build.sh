#!/bin/bash
set -e

echo "Starting Netlify build process with Yarn configuration..."

# Set environment variables for Netlify
export NODE_ENV=production
export NETLIFY=true
# Force use of Yarn
export NPM_CONFIG_PACKAGE_MANAGER=yarn

# Clear all caches and corrupted packages
echo "Clearing all caches and corrupted packages..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf pnpm-lock.yaml
rm -rf ~/.yarn/cache/v6/npm-find-up-*
rm -rf ~/.yarn/cache/v6/npm-glob-parent-*
rm -rf ~/.yarn/cache/v6/npm-glob-*
rm -rf ~/.yarn/cache/v6/npm-eslint-*

# Clean Yarn cache completely
echo "Cleaning Yarn cache..."
yarn cache clean

# Install dependencies with Yarn
echo "Installing dependencies with Yarn..."
for attempt in {1..3}; do
  echo "Installation attempt $attempt of 3..."
  
  # Clear node_modules before each attempt
  rm -rf node_modules
  
  # Try different installation strategies
  case $attempt in
    1)
      echo "Attempt 1: Standard installation with frozen lockfile..."
      if yarn install --frozen-lockfile; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    2)
      echo "Attempt 2: Installation without frozen lockfile..."
      if yarn install; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    3)
      echo "Attempt 3: Installation with force flag..."
      if yarn install --force; then
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
  yarn cache clean
done

# Verify installation
echo "Verifying installation..."
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found!"
  exit 1
fi

# Build the project
echo "Building project..."
yarn build

echo "Build completed successfully!"