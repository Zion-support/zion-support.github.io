#!/bin/bash
set -e

echo "🚀 Starting Final Netlify Build Process..."

# Color functions
log() { echo -e "\033[1;34m[$(date +'%H:%M:%S')]\033[0m $1"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $1"; }
success() { echo -e "\033[1;32m[SUCCESS]\033[0m $1"; }
warning() { echo -e "\033[1;33m[WARNING]\033[0m $1"; }

# Step 1: Environment Setup
log "Setting up build environment..."
export YARN_ENABLE_IMMUTABLE_INSTALLS=false
export NPM_CONFIG_LEGACY_PEER_DEPS=true
export NPM_CONFIG_FORCE=true
export NODE_OPTIONS="--max-old-space-size=6144"
export CI=true
export NODE_ENV=production

# Step 2: Clean Environment
log "Cleaning build environment..."
rm -rf node_modules
rm -f yarn.lock
rm -rf .next
rm -rf dist
rm -rf out
rm -rf .yarn/cache

# Step 3: Cache Management
log "Managing caches..."
yarn cache clean || true
npm cache clean --force || true

# Step 4: Install Dependencies with Conflict Resolution
log "Installing dependencies with conflict resolution..."
install_with_retry() {
    local attempt=1
    local max_attempts=3
    
    while [ $attempt -le $max_attempts ]; do
        log "Installation attempt $attempt/$max_attempts"
        
        # Try different installation strategies
        case $attempt in
            1)
                log "Attempting Yarn installation with fresh lockfile..."
                if yarn install --network-timeout 1000000 --ignore-engines --no-frozen-lockfile; then
                    success "Yarn installation successful"
                    return 0
                fi
                ;;
            2)
                log "Attempting Yarn installation with legacy peer deps..."
                if yarn install --network-timeout 1000000 --ignore-engines --legacy-peer-deps; then
                    success "Yarn installation with legacy peer deps successful"
                    return 0
                fi
                ;;
            3)
                log "Attempting NPM installation as fallback..."
                if npm ci --legacy-peer-deps --force --timeout=1000000; then
                    success "NPM installation successful"
                    return 0
                fi
                ;;
        esac
        
        warning "Installation attempt $attempt failed"
        if [ $attempt -lt $max_attempts ]; then
            log "Cleaning and preparing for retry..."
            rm -rf node_modules
            yarn cache clean || true
            npm cache clean --force || true
        fi
        ((attempt++))
    done
    
    error "All installation attempts failed"
    return 1
}

install_with_retry

# Step 5: Dependency Verification
log "Verifying critical dependencies..."
verify_dependencies() {
    local deps=("tailwindcss" "next" "react" "react-dom")
    local missing_deps=()
    
    for dep in "${deps[@]}"; do
        if [ ! -d "node_modules/$dep" ]; then
            missing_deps+=("$dep")
        else
            local version=$(node -p "require('./node_modules/$dep/package.json').version" 2>/dev/null || echo "unknown")
            success "$dep v$version found"
        fi
    done
    
    if [ ${#missing_deps[@]} -gt 0 ]; then
        error "Missing dependencies: ${missing_deps[*]}"
        return 1
    fi
    
    return 0
}

verify_dependencies

# Step 6: TailwindCSS Conflict Check
log "Checking for TailwindCSS conflicts..."
if [ -d "node_modules/tailwindcss/node_modules/arg" ]; then
    warning "Found nested arg dependency in TailwindCSS"
    log "Attempting to resolve TailwindCSS conflicts..."
    
    # Try to resolve the conflict by reinstalling TailwindCSS
    npm uninstall tailwindcss || true
    npm install tailwindcss@^4.1.13 --legacy-peer-deps || true
fi

# Step 7: Build Process
log "Starting build process..."
build_with_retry() {
    local attempt=1
    local max_attempts=2
    
    while [ $attempt -le $max_attempts ]; do
        log "Build attempt $attempt/$max_attempts"
        
        if npm run build; then
            success "Build completed successfully"
            return 0
        else
            warning "Build attempt $attempt failed"
            if [ $attempt -lt $max_attempts ]; then
                log "Cleaning and retrying build..."
                rm -rf .next
                rm -rf dist
            fi
            ((attempt++))
        fi
    done
    
    error "All build attempts failed"
    return 1
}

build_with_retry

# Step 8: Build Verification
log "Verifying build output..."
if [ -d "dist" ] && [ "$(ls -A dist 2>/dev/null)" ]; then
    success "Build output verified"
    log "Build output size: $(du -sh dist | cut -f1)"
    log "Files in dist: $(find dist -type f | wc -l)"
else
    # Check if it's a Next.js build
    if [ -d ".next" ]; then
        success "Next.js build found in .next directory"
        log "Next.js build size: $(du -sh .next | cut -f1)"
    else
        error "No build output found in dist or .next directories"
        exit 1
    fi
fi

# Step 9: Final Checks
log "Running final checks..."
if [ -f "package.json" ]; then
    success "Package.json found"
fi

if [ -f "next.config.js" ] || [ -f "next.config.mjs" ] || [ -f "next.config.ts" ]; then
    success "Next.js configuration found"
fi

success "🎉 Final Netlify build completed successfully!"
log "Build environment: $NODE_ENV"
log "Node version: $(node --version)"
log "NPM version: $(npm --version)"
log "Yarn version: $(yarn --version 2>/dev/null || echo 'not available')"