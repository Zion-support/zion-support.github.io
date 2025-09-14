#!/bin/bash
set -e

echo "🚀 Starting Enhanced Netlify build process..."

# Function to log with colors
log() {
    echo -e "\033[1;34m[$(date +'%H:%M:%S')]\033[0m $1"
}

error() {
    echo -e "\033[1;31m[ERROR]\033[0m $1"
}

success() {
    echo -e "\033[1;32m[SUCCESS]\033[0m $1"
}

warning() {
    echo -e "\033[1;33m[WARNING]\033[0m $1"
}

# Step 1: Clean environment
log "Cleaning build environment..."
rm -rf node_modules
rm -f yarn.lock
rm -rf .next
rm -rf dist
rm -rf out

# Step 2: Clean caches
log "Cleaning caches..."
yarn cache clean || true
npm cache clean --force || true

# Step 3: Set environment variables for dependency resolution
log "Setting environment variables..."
export YARN_ENABLE_IMMUTABLE_INSTALLS=false
export NPM_CONFIG_LEGACY_PEER_DEPS=true
export NPM_CONFIG_FORCE=true
export NODE_OPTIONS="--max-old-space-size=6144"

# Step 4: Install dependencies with retry logic
log "Installing dependencies..."
install_dependencies() {
    local attempt=1
    local max_attempts=3
    
    while [ $attempt -le $max_attempts ]; do
        log "Installation attempt $attempt/$max_attempts"
        
        if yarn install --network-timeout 1000000 --ignore-engines --no-frozen-lockfile; then
            success "Dependencies installed successfully"
            return 0
        else
            warning "Installation attempt $attempt failed"
            if [ $attempt -lt $max_attempts ]; then
                log "Cleaning and retrying..."
                rm -rf node_modules
                yarn cache clean || true
            fi
            ((attempt++))
        fi
    done
    
    error "All installation attempts failed"
    return 1
}

install_dependencies

# Step 5: Verify critical dependencies
log "Verifying TailwindCSS installation..."
if [ -d "node_modules/tailwindcss" ]; then
    TAILWIND_VERSION=$(node -p "require('./node_modules/tailwindcss/package.json').version")
    success "TailwindCSS v$TAILWIND_VERSION installed"
else
    error "TailwindCSS not found in node_modules"
    exit 1
fi

# Step 6: Check for arg dependency conflicts
log "Checking for dependency conflicts..."
if [ -d "node_modules/tailwindcss/node_modules/arg" ]; then
    warning "Found nested arg dependency - this may cause conflicts"
    ARG_VERSION=$(node -p "require('./node_modules/tailwindcss/node_modules/arg/package.json').version")
    log "Nested arg version: $ARG_VERSION"
fi

# Step 7: Build the application
log "Building application..."
if npm run build; then
    success "Application built successfully"
else
    error "Build failed"
    exit 1
fi

# Step 8: Verify build output
log "Verifying build output..."
if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
    success "Build output verified - dist directory contains files"
    log "Build output size: $(du -sh dist | cut -f1)"
else
    error "Build output verification failed"
    exit 1
fi

success "🎉 Enhanced Netlify build completed successfully!"