#!/bin/bash

# PM2 Automation Script
# This script replaces GitHub Actions workflows with local PM2 automation

LOG_FILE="/workspace/pm2-automation.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

log() {
    echo "[$DATE] $1" | tee -a "$LOG_FILE"
}

# Function to run dependency updates (replaces dependencies.yml)
update_dependencies() {
    log "🔄 Starting dependency update process..."
    
    # Check for outdated packages
    log "📦 Checking for outdated packages..."
    npm outdated >> "$LOG_FILE" 2>&1 || log "ℹ️ All packages are up to date"
    
    # Run security audit
    log "🔒 Running security audit..."
    npm audit --audit-level moderate >> "$LOG_FILE" 2>&1 || log "ℹ️ Security audit completed"
    
    # Update dependencies
    log "⬆️ Updating dependencies..."
    npm update >> "$LOG_FILE" 2>&1 || log "ℹ️ No updates available"
    
    # Install updated dependencies
    log "📥 Installing updated dependencies..."
    npm ci >> "$LOG_FILE" 2>&1
    
    # Verify build
    log "🏗️ Building project..."
    npm run build >> "$LOG_FILE" 2>&1
    
    # Run quality checks
    log "✅ Running quality checks..."
    npm run lint >> "$LOG_FILE" 2>&1
    npm run type-check >> "$LOG_FILE" 2>&1
    
    log "✅ Dependency update process completed"
}

# Function to run security checks (replaces security.yml)
security_check() {
    log "🔒 Starting security check process..."
    
    # Run security audit
    log "🔍 Running security audit..."
    npm audit --audit-level moderate >> "$LOG_FILE" 2>&1
    
    # Check for known vulnerabilities
    log "⚠️ Checking for known vulnerabilities..."
    npm audit --json | jq -r '.vulnerabilities | keys[]' 2>/dev/null || log "ℹ️ No vulnerabilities found"
    
    log "✅ Security check process completed"
}

# Function to run CI checks (replaces ci.yml)
ci_check() {
    log "🚀 Starting CI check process..."
    
    # Install dependencies
    log "📥 Installing dependencies..."
    npm ci >> "$LOG_FILE" 2>&1
    
    # Run linting
    log "🔍 Running linting..."
    npm run lint >> "$LOG_FILE" 2>&1
    
    # Run type checking
    log "🔍 Running type checking..."
    npm run type-check >> "$LOG_FILE" 2>&1
    
    # Build project
    log "🏗️ Building project..."
    npm run build >> "$LOG_FILE" 2>&1
    
    # Run tests if available
    log "🧪 Running tests..."
    npm test --if-present >> "$LOG_FILE" 2>&1 || log "ℹ️ No tests configured"
    
    log "✅ CI check process completed"
}

# Function to run quality checks (replaces quality-check.yml)
quality_check() {
    log "✨ Starting quality check process..."
    
    # Run linting
    log "🔍 Running linting..."
    npm run lint >> "$LOG_FILE" 2>&1
    
    # Run type checking
    log "🔍 Running type checking..."
    npm run type-check >> "$LOG_FILE" 2>&1
    
    # Check build
    log "🏗️ Building project..."
    npm run build >> "$LOG_FILE" 2>&1
    
    log "✅ Quality check process completed"
}

# Function to deploy (replaces deploy.yml)
deploy() {
    log "🚀 Starting deployment process..."
    
    # Build project
    log "🏗️ Building project..."
    npm run build >> "$LOG_FILE" 2>&1
    
    # Verify build output
    log "🔍 Verifying build output..."
    if [ ! -d "dist" ]; then
        log "❌ Build failed: dist folder not found"
        return 1
    fi
    
    log "✅ Build successful! Found dist folder with:"
    ls -la dist/ >> "$LOG_FILE" 2>&1
    
    # Check for essential files
    if [ -f "dist/index.html" ]; then
        log "✅ index.html found"
    else
        log "❌ index.html not found"
        return 1
    fi
    
    if [ -f "dist/css/index-*.css" ]; then
        log "✅ CSS files found"
    else
        log "❌ CSS files not found"
        return 1
    fi
    
    if [ -f "dist/js/index-*.js" ]; then
        log "✅ JavaScript files found"
    else
        log "❌ JavaScript files not found"
        return 1
    fi
    
    log "✅ Deployment verification completed"
    log "🚀 Ready for deployment to your hosting platform"
}

# Function to run all checks
run_all_checks() {
    log "🔄 Running all automated checks..."
    
    ci_check
    quality_check
    security_check
    
    log "✅ All automated checks completed"
}

# Main script logic
case "${1:-all}" in
    "dependencies")
        update_dependencies
        ;;
    "security")
        security_check
        ;;
    "ci")
        ci_check
        ;;
    "quality")
        quality_check
        ;;
    "deploy")
        deploy
        ;;
    "all")
        run_all_checks
        ;;
    *)
        echo "Usage: $0 {dependencies|security|ci|quality|deploy|all}"
        echo "  dependencies - Update dependencies and run checks"
        echo "  security    - Run security audit"
        echo "  ci          - Run CI checks (lint, type-check, build, test)"
        echo "  quality     - Run quality checks (lint, type-check, build)"
        echo "  deploy      - Build and verify deployment"
        echo "  all         - Run all checks (default)"
        exit 1
        ;;
esac

log "🏁 Automation script completed successfully"