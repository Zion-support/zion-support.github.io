#!/bin/bash
set -e

echo "Starting robust Netlify build process..."

# Function to retry yarn install with different strategies
retry_yarn_install() {
    local attempt=1
    local max_attempts=3
    
    while [ $attempt -le $max_attempts ]; do
        echo "Yarn install attempt $attempt of $max_attempts..."
        
        case $attempt in
            1)
                echo "Attempt 1: Standard install with frozen lockfile"
                yarn install --frozen-lockfile --network-timeout 1000000 --ignore-engines --force
                ;;
            2)
                echo "Attempt 2: Install without frozen lockfile"
                yarn install --network-timeout 1000000 --ignore-engines --force
                ;;
            3)
                echo "Attempt 3: Clean install with fresh resolution"
                rm -f yarn.lock
                yarn install --network-timeout 1000000 --ignore-engines
                ;;
        esac
        
        if [ $? -eq 0 ]; then
            echo "Yarn install successful on attempt $attempt"
            return 0
        else
            echo "Yarn install failed on attempt $attempt"
            if [ $attempt -lt $max_attempts ]; then
                echo "Cleaning up and retrying..."
                rm -rf node_modules
                yarn cache clean --all
            fi
        fi
        
        attempt=$((attempt + 1))
    done
    
    echo "All yarn install attempts failed"
    return 1
}

# Clean up any existing node_modules
echo "Cleaning up existing node_modules..."
rm -rf node_modules

# Clean yarn cache
echo "Cleaning yarn cache..."
yarn cache clean --all

# Try yarn install with retry logic
if ! retry_yarn_install; then
    echo "Yarn install failed after all attempts. Trying npm as fallback..."
    rm -rf node_modules yarn.lock
    npm install --legacy-peer-deps
fi

# Build the application
echo "Building application..."
npm run build

echo "Build completed successfully!"