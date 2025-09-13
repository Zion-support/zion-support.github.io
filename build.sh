#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Check if we're in a Netlify environment
if [ "$NETLIFY" = "true" ]; then
  echo "Detected Netlify environment - using specialized build process..."
  
  # Use the specialized Netlify build script
  exec ./netlify-build.sh
  
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
if command -v yarn &> /dev/null && [ -f yarn.lock ]; then
  echo "Using Yarn to build..."
  yarn build
else
  echo "Using npm to build..."
  npm run build
fi

echo "Build completed successfully!"