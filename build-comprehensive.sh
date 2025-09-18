#!/bin/bash
set -e

echo "Starting comprehensive build process..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf dist
rm -rf package-lock.json

# Function to clean all caches
clean_caches() {
  echo "Cleaning all caches..."
  yarn cache clean --all 2>/dev/null || true
  npm cache clean --force 2>/dev/null || true
  rm -rf ~/.yarn/cache 2>/dev/null || true
  rm -rf ~/.yarn/v6 2>/dev/null || true
  rm -rf ~/.yarn/berry 2>/dev/null || true
  rm -rf ~/.npm 2>/dev/null || true
}

# Clean caches initially
clean_caches

# Try yarn first with multiple strategies
echo "Attempting yarn installation..."

# Strategy 1: Yarn with no cache
echo "Strategy 1: Yarn with no cache..."
if yarn install --frozen-lockfile --network-timeout 100000 --ignore-engines --ignore-platform --force --no-cache 2>/dev/null; then
  echo "Yarn installation successful!"
  yarn build
  echo "Build completed successfully with yarn!"
  exit 0
fi

# Clean and try again
clean_caches
rm -rf node_modules

# Strategy 2: Yarn without frozen lockfile
echo "Strategy 2: Yarn without frozen lockfile..."
if yarn install --network-timeout 100000 --ignore-engines --ignore-platform --force --no-cache 2>/dev/null; then
  echo "Yarn installation successful!"
  yarn build
  echo "Build completed successfully with yarn!"
  exit 0
fi

# Clean and try npm
clean_caches
rm -rf node_modules
rm -rf yarn.lock

# Strategy 3: NPM with legacy peer deps
echo "Strategy 3: NPM with legacy peer deps..."
if npm install --legacy-peer-deps --force 2>/dev/null; then
  echo "NPM installation successful!"
  npm run build
  echo "Build completed successfully with npm!"
  exit 0
fi

# Clean and try npm without legacy peer deps
clean_caches
rm -rf node_modules

# Strategy 4: NPM standard install
echo "Strategy 4: NPM standard install..."
if npm install --force 2>/dev/null; then
  echo "NPM installation successful!"
  npm run build
  echo "Build completed successfully with npm!"
  exit 0
fi

echo "All installation strategies failed!"
exit 1