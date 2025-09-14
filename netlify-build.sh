#!/bin/bash
set -e

echo "Starting Netlify build process with Yarn configuration..."

# Set environment variables for Netlify
export NODE_ENV=production
export NETLIFY=true
# Force use of Yarn
export NPM_CONFIG_PACKAGE_MANAGER=yarn
# Disable Next.js telemetry and force SWC fallback
export NEXT_TELEMETRY_DISABLED=1
export SWC_BINARY_PATH=""
export NEXT_SWC_BINARY_PATH=""
# Disable SWC completely to avoid download issues
export NEXT_SWC_DISABLED=1
# Use Terser for minification instead of SWC
export NEXT_MINIFY=terser

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
      echo "Attempt 1: Standard Yarn installation..."
      if yarn install --network-timeout 120000 --ignore-engines --ignore-optional; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    2)
      echo "Attempt 2: Yarn installation with specific resolutions..."
      # Force specific versions for problematic packages
      yarn add find-up@5.0.0 --exact --network-timeout 120000 --ignore-engines
      yarn add glob-parent@6.0.2 --exact --network-timeout 120000 --ignore-engines
      yarn add glob@10.4.5 --exact --network-timeout 120000 --ignore-engines
      # Ensure we have the correct Next.js version
      yarn add next@14.2.15 --exact --network-timeout 120000 --ignore-engines
      if yarn install --network-timeout 120000 --ignore-engines --ignore-optional; then
        echo "Dependencies installed successfully!"
        break
      fi
      ;;
    3)
      echo "Attempt 3: Last resort - clean install with fresh lockfile..."
      # Remove existing lockfile and do fresh install
      rm -f yarn.lock
      # Force Next.js version
      yarn add next@14.2.15 --exact --network-timeout 120000 --ignore-engines
      if yarn install --network-timeout 120000 --ignore-engines --ignore-optional; then
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

# Ensure TypeScript types are installed
echo "Ensuring TypeScript types are installed..."
yarn add --dev @types/node @types/react @types/react-dom typescript

# Verify Next.js version
echo "Verifying Next.js version..."
NEXT_VERSION=$(node -e "console.log(require('./node_modules/next/package.json').version)")
echo "Installed Next.js version: $NEXT_VERSION"

# Ensure we're using the correct version
if [[ "$NEXT_VERSION" != "14.2.15" ]]; then
  echo "Warning: Next.js version mismatch. Expected 14.2.15, got $NEXT_VERSION"
  echo "Attempting to fix version..."
  yarn add next@14.2.15 --exact --network-timeout 120000 --ignore-engines --no-cache
fi

# Build the project
echo "Building project..."

# Try different build approaches
build_success=false

# Approach 1: Standard build with Netlify config
echo "Attempting standard build with Netlify configuration..."
if [ -f "next.config.netlify.js" ]; then
  cp next.config.netlify.js next.config.js
fi

if yarn run build:netlify; then
  echo "Standard build successful!"
  build_success=true
else
  echo "Standard build failed, trying fallback approaches..."
fi

# Approach 2: Build with SWC completely disabled
if [ "$build_success" = false ]; then
  echo "Attempting build with SWC completely disabled..."
  export SWC_BINARY_PATH=""
  export NEXT_SWC_BINARY_PATH=""
  export NEXT_SWC_DISABLED=1
  export NEXT_MINIFY=terser
  export NEXT_TELEMETRY_DISABLED=1
  export NEXT_FORCE_SWC=1
  export NEXT_SWC_DISABLE=1
  export NEXT_PRIVATE_SKIP_SWC_DOWNLOAD=1
  
  if yarn run build:netlify; then
    echo "SWC disabled build successful!"
    build_success=true
  else
    echo "SWC fallback build failed, trying with fallback command..."
    # Use the fallback build command
    if yarn run build:fallback; then
      echo "Fallback build successful!"
      build_success=true
    else
      echo "Fallback build failed, trying with legacy provider..."
    fi
  fi
fi

# Approach 3: Build with legacy OpenSSL provider
if [ "$build_success" = false ]; then
  echo "Attempting build with legacy OpenSSL provider..."
  export NODE_OPTIONS="--max-old-space-size=8192 --openssl-legacy-provider"
  
  if yarn run build:fallback; then
    echo "Legacy provider build successful!"
    build_success=true
  else
    echo "Legacy provider build failed, trying npm fallback..."
  fi
fi

# Approach 4: Fallback to npm if yarn fails
if [ "$build_success" = false ]; then
  echo "Attempting build with npm fallback..."
  # Clear everything and use npm
  rm -rf node_modules
  rm -f yarn.lock
  rm -f package-lock.json
  
  # Install with npm
  if npm install --legacy-peer-deps --no-optional; then
    echo "NPM dependencies installed successfully!"
    
    # Try build with npm
    if npm run build:netlify; then
      echo "NPM build successful!"
      build_success=true
    else
      echo "NPM build failed!"
    fi
  else
    echo "NPM installation failed!"
  fi
fi

# Final check
if [ "$build_success" = false ]; then
  echo "All build attempts failed!"
  exit 1
fi

echo "Build completed successfully!"