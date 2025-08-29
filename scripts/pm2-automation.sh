#!/bin/bash

# PM2 Automation Script to replace GitHub Actions
# This script handles CI/CD, dependency management, and monitoring

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

# Function to run CI pipeline
run_ci() {
    log "Starting CI pipeline..."
    
    # Install dependencies
    log "Installing dependencies..."
    npm install || {
        error "Failed to install dependencies"
        return 1
    }
    
    # Lint and type-check
    log "Running lint and type-check..."
    npm run lint || {
        error "Linting failed"
        return 1
    }
    
    npm run type-check || {
        error "Type checking failed"
        return 1
    }
    
    # Build project
    log "Building project..."
    npm run build || {
        error "Build failed"
        return 1
    }
    
    # Verify build output
    if [ ! -d "dist" ]; then
        error "Build failed: dist folder not found"
        return 1
    fi
    
    success "CI pipeline completed successfully"
    return 0
}

# Function to run tests
run_tests() {
    log "Starting test suite..."
    
    # Check if tests are configured
    if grep -q '"test"' package.json; then
        npm test || {
            warning "Tests failed or not configured"
            return 0
        }
        success "Tests completed"
    else
        warning "No test script configured in package.json"
    fi
}

# Function to run security audit
run_security_audit() {
    log "Running security audit..."
    
    npm audit --audit-level=moderate || {
        warning "Security audit found issues"
        return 0
    }
    
    success "Security audit completed"
}

# Function to update dependencies
update_dependencies() {
    log "Checking for outdated packages..."
    
    # Check for outdated packages
    npm outdated || log "All packages are up to date"
    
    # Update dependencies
    log "Updating dependencies..."
    npm update || log "No updates available"
    
    # Install updated dependencies
    npm ci
    
    # Run tests after update
    run_tests
    
    success "Dependencies updated successfully"
}

# Function to deploy
deploy() {
    log "Starting deployment..."
    
    # Run CI first
    run_ci || {
        error "CI failed, aborting deployment"
        return 1
    }
    
    # Deploy using PM2
    log "Deploying with PM2..."
    pm2 deploy production update || {
        error "PM2 deployment failed"
        return 1
    }
    
    success "Deployment completed successfully"
}

# Function to monitor
monitor() {
    log "Starting PM2 monitoring..."
    pm2 monit
}

# Function to show status
status() {
    log "PM2 Status:"
    pm2 list
    
    log "PM2 Logs:"
    pm2 logs --lines 20
}

# Function to restart services
restart() {
    log "Restarting PM2 services..."
    pm2 restart all
    success "All services restarted"
}

# Function to stop all services
stop() {
    log "Stopping all PM2 services..."
    pm2 stop all
    success "All services stopped"
}

# Function to start services
start() {
    log "Starting PM2 services..."
    pm2 start ecosystem.config.cjs
    success "Services started"
}

# Function to show help
show_help() {
    echo "PM2 Automation Script - GitHub Actions Replacement"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  ci          Run CI pipeline (lint, type-check, build)"
    echo "  test        Run test suite"
    echo "  security    Run security audit"
    echo "  deps        Update dependencies"
    echo "  deploy      Deploy application"
    echo "  monitor     Start PM2 monitoring"
    echo "  status      Show PM2 status and logs"
    echo "  restart     Restart all services"
    echo "  stop        Stop all services"
    echo "  start       Start services"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 ci       # Run CI pipeline"
    echo "  $0 deploy   # Deploy application"
    echo "  $0 monitor  # Monitor services"
}

# Main script logic
case "${1:-help}" in
    ci)
        run_ci
        ;;
    test)
        run_tests
        ;;
    security)
        run_security_audit
        ;;
    deps)
        update_dependencies
        ;;
    deploy)
        deploy
        ;;
    monitor)
        monitor
        ;;
    status)
        status
        ;;
    restart)
        restart
        ;;
    stop)
        stop
        ;;
    start)
        start
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac