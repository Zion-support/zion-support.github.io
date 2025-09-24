#!/bin/bash
set -e

echo "Starting Netlify build process with pnpm..."

# Set environment variables for Netlify
export NODE_ENV=production
export NETLIFY=true

# Clear all caches and corrupted packages
echo "Clearing all caches and corrupted packages..."
rm -rf node_modules
rm -rf .pnpm-store

# Clean pnpm cache completely
echo "Cleaning pnpm cache..."
pnpm store prune

# Install dependencies with pnpm
echo "Installing dependencies with pnpm..."
for attempt in {1..3}; do
  echo "Installation attempt $attempt of 3..."
  
  # Clear node_modules before each attempt
  rm -rf node_modules
  
  # Try different installation strategies
  case $attempt in
    1)
      echo "Attempt 1: Standard installation with frozen lockfile..."
      if pnpm install --frozen-lockfile; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    2)
      echo "Attempt 2: Installation without frozen lockfile..."
      if pnpm install; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    3)
      echo "Attempt 3: Installation with force flag..."
      if pnpm install --force; then
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
  pnpm store prune
done

# Verify installation
echo "Verifying installation..."
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found!"
  exit 1
fi

# Build the project
echo "Building project..."
pnpm run build

echo "Build completed successfully!"