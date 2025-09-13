#!/bin/bash
set -e

echo "Starting build process..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf dist

# Clean yarn cache
echo "Cleaning yarn cache..."
yarn cache clean

# Install dependencies with retry logic
echo "Installing dependencies..."
for i in {1..3}; do
  echo "Attempt $i of 3..."
  if yarn install --frozen-lockfile --network-timeout 100000 --no-cache --ignore-engines --ignore-platform; then
    echo "Dependencies installed successfully!"
    break
  else
    echo "Installation failed, cleaning and retrying..."
    rm -rf node_modules
    yarn cache clean
    if [ $i -eq 3 ]; then
      echo "All installation attempts failed!"
      exit 1
    fi
  fi
done

# Build the project
echo "Building project..."
yarn build

echo "Build completed successfully!"