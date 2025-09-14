#!/bin/bash
set -e

echo "Starting robust Netlify build process..."

# Function to try yarn install with different configurations
try_yarn_install() {
    local attempt=$1
    local flags=$2
    
    echo "Yarn install attempt $attempt with flags: $flags"
    
    # Clean up
    rm -rf node_modules
    yarn cache clean
    
    # Set environment variables
    export YARN_CACHE_FOLDER="/opt/buildhome/.yarn_cache"
    export YARN_ENABLE_IMMUTABLE_INSTALLS="false"
    
    # Try yarn install
    if yarn install $flags; then
        echo "Yarn install successful on attempt $attempt"
        return 0
    else
        echo "Yarn install failed on attempt $attempt"
        return 1
    fi
}

# Function to try npm install
try_npm_install() {
    echo "Trying npm install as fallback..."
    
    # Clean up
    rm -rf node_modules
    rm -f package-lock.json
    npm cache clean --force
    
    # Set environment variables
    export NODE_ENV="production"
    export NPM_CONFIG_INCLUDE="dev"
    export NPM_CONFIG_LEGACY_PEER_DEPS="true"
    
    # Try npm install
    if npm install --legacy-peer-deps --no-optional --prefer-offline; then
        echo "NPM install successful"
        return 0
    else
        echo "NPM install failed"
        return 1
    fi
}

# Try different yarn configurations
echo "Attempting yarn installs..."

# Attempt 1: Standard frozen lockfile
if try_yarn_install 1 "--frozen-lockfile --network-timeout 1000000 --ignore-engines --prefer-offline --no-optional"; then
    echo "Yarn install successful with standard flags"
elif try_yarn_install 2 "--network-timeout 1000000 --ignore-engines --prefer-offline --no-optional"; then
    echo "Yarn install successful without frozen lockfile"
elif try_yarn_install 3 "--network-timeout 1000000 --ignore-engines --prefer-offline"; then
    echo "Yarn install successful with optional dependencies"
elif try_yarn_install 4 "--network-timeout 1000000 --ignore-engines"; then
    echo "Yarn install successful with online packages"
else
    echo "All yarn attempts failed, trying npm..."
    if try_npm_install; then
        echo "NPM install successful"
    else
        echo "All installation methods failed"
        exit 1
    fi
fi

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"