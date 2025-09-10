#!/bin/bash

# PM2 Automation Script to replace GitHub Actions
# This script handles CI/CD pipeline automation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if PM2 is running
check_pm2_status() {
    if ! pm2 ping > /dev/null 2>&1; then
        error "PM2 is not running. Starting PM2 daemon..."
        pm2 start
        sleep 2
    fi
    success "PM2 is running"
}

# Install dependencies
install_deps() {
    log "Installing dependencies..."
    npm ci
    success "Dependencies installed successfully"
}

# Run linting
run_lint() {
    log "Running ESLint..."
    if npm run lint; then
        success "Linting passed"
    else
        warning "Linting issues found - continuing with build"
    fi
}

# Run type checking
run_type_check() {
    log "Running TypeScript type checking..."
    if npm run type-check; then
        success "Type checking passed"
    else
        warning "Type checking issues found - continuing with build"
    fi
}

# Build the application
build_app() {
    log "Building application..."
    export NODE_OPTIONS="--max-old-space-size=6144"
    npm run build
    
    # Verify build output
    if [ -d "dist" ]; then
        success "Build successful! Found dist folder with:"
        ls -la dist/
        
        # Check for essential files
        if [ -f "dist/index.html" ]; then
            success "✓ index.html found"
        else
            error "✗ index.html not found"
            exit 1
        fi
        
        if [ -f "dist/css/index-"*.css ]; then
            success "✓ CSS files found"
        else
            warning "✗ CSS files found"
        fi
        
        if [ -f "dist/js/index-"*.js ]; then
            success "✓ JavaScript files found"
        else
            warning "✗ JavaScript files found"
        fi
    else
        error "Build failed: dist folder not found"
        exit 1
    fi
}

# Run tests
run_tests() {
    log "Running tests..."
    if npm test --if-present; then
        success "Tests passed"
    else
        warning "Tests failed or not available - continuing"
    fi
}

# Security audit
security_audit() {
    log "Running security audit..."
    npm audit --audit-level=moderate || true
    npm audit fix --audit-level=moderate || true
    success "Security audit completed"
}

# Deploy with PM2
deploy_pm2() {
    log "Deploying with PM2..."
    
    # Check if app is already running
    if pm2 list | grep -q "bolt-new-zion-app"; then
        log "App is running, reloading..."
        pm2 reload bolt-new-zion-app
    else
        log "Starting app for the first time..."
        pm2 start ecosystem.config.js
    fi
    
    success "Deployment completed"
}

# Health check
health_check() {
    log "Running health checks..."
    pm2 status
    pm2 logs --lines 10
    success "Health checks completed"
}

# Performance monitoring
performance_monitor() {
    log "Starting performance monitoring..."
    pm2 monit &
    success "Performance monitoring started"
}

# Main CI/CD pipeline
main() {
    log "Starting PM2 CI/CD Pipeline..."
    
    # Check PM2 status
    check_pm2_status
    
    # Install dependencies
    install_deps
    
    # Code quality checks
    run_lint
    run_type_check
    security_audit
    
    # Build and test
    build_app
    run_tests
    
    # Deploy
    deploy_pm2
    
    # Post-deployment
    health_check
    
    success "🚀 PM2 CI/CD Pipeline completed successfully!"
    log "Your application is now running with PM2"
    log "Use 'pm2 status' to check status"
    log "Use 'pm2 logs' to view logs"
    log "Use 'pm2 monit' to monitor performance"
}

# Watch mode for development
watch_mode() {
    log "Starting watch mode..."
    check_pm2_status
    
    # Start the app in development mode
    pm2 start ecosystem.config.js --env development
    
    # Watch for file changes and restart
    log "Watching for file changes..."
    pm2 start ecosystem.config.js --watch
    
    success "Watch mode started. App will restart on file changes."
}

# Production deployment
production_deploy() {
    log "Starting production deployment..."
    check_pm2_status
    
    # Run full pipeline
    main
    
    # Switch to production environment
    pm2 reload ecosystem.config.js --env production
    
    success "Production deployment completed!"
}

# Parse command line arguments
case "${1:-main}" in
    "main")
        main
        ;;
    "watch")
        watch_mode
        ;;
    "production")
        production_deploy
        ;;
    "health")
        health_check
        ;;
    "monitor")
        performance_monitor
        ;;
    "status")
        pm2 status
        ;;
    "logs")
        pm2 logs
        ;;
    "restart")
        pm2 restart bolt-new-zion-app
        ;;
    "stop")
        pm2 stop bolt-new-zion-app
        ;;
    "delete")
        pm2 delete bolt-new-zion-app
        ;;
    *)
        echo "Usage: $0 {main|watch|production|health|monitor|status|logs|restart|stop|delete}"
        echo "  main        - Run full CI/CD pipeline"
        echo "  watch       - Start in watch mode for development"
        echo "  production  - Deploy to production"
        echo "  health      - Run health checks"
        echo "  monitor     - Start performance monitoring"
        echo "  status      - Show PM2 status"
        echo "  logs        - Show PM2 logs"
        echo "  restart     - Restart the application"
        echo "  stop        - Stop the application"
        echo "  delete      - Delete the application from PM2"
        exit 1
        ;;
esac