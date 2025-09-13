#!/bin/bash
set -e

echo "Starting build process..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf dist

# Clean yarn cache completely and remove all cache directories
echo "Cleaning yarn cache..."
yarn cache clean --all
rm -rf ~/.yarn/cache
rm -rf ~/.yarn/v6
rm -rf ~/.yarn/berry

# Remove yarn.lock if it exists to force fresh resolution
echo "Backing up yarn.lock..."
if [ -f yarn.lock ]; then
  cp yarn.lock yarn.lock.backup
fi

# Install dependencies with retry logic and additional cache clearing
echo "Installing dependencies..."
for i in {1..3}; do
  echo "Attempt $i of 3..."
  
  # Clear cache before each attempt
  yarn cache clean --all
  rm -rf ~/.yarn/cache
  rm -rf ~/.yarn/v6
  rm -rf ~/.yarn/berry
  
  if yarn install --frozen-lockfile --network-timeout 100000 --ignore-engines --ignore-platform --force --no-cache; then
    echo "Dependencies installed successfully!"
    break
  else
    echo "Installation failed, cleaning and retrying..."
    rm -rf node_modules
    rm -rf .yarn-cache
    yarn cache clean --all
    rm -rf ~/.yarn/cache
    rm -rf ~/.yarn/v6
    rm -rf ~/.yarn/berry
    
    if [ $i -eq 3 ]; then
      echo "All installation attempts failed!"
      # Restore yarn.lock if we backed it up
      if [ -f yarn.lock.backup ]; then
        mv yarn.lock.backup yarn.lock
      fi
      exit 1
    fi
  fi
done

# Build the project
echo "Building project..."
yarn build

echo "Build completed successfully!"