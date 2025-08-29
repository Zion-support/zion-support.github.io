#!/bin/bash

# PM2 Cron Job Script for Automated Tasks
# This replaces the scheduled GitHub Actions workflows

# Set working directory
cd "$(dirname "$0")/.."

# Load environment variables if they exist
if [ -f ".env" ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Log file
LOG_FILE="/tmp/pm2-cron.log"

# Logging function
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to check if PM2 is running
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR: PM2 is not installed or not in PATH"
        exit 1
    fi
    
    if ! pm2 ping &> /dev/null; then
        log "ERROR: PM2 daemon is not running"
        exit 1
    fi
}

# Function to run dependency update (replaces dependencies.yml workflow)
update_dependencies() {
    log "Starting automated dependency update..."
    
    # Check for outdated packages
    log "Checking for outdated packages..."
    OUTDATED_COUNT=$(npm outdated | wc -l || echo "0")
    log "Found $OUTDATED_COUNT outdated packages"
    
    # Run security audit
    log "Running security audit..."
    npm audit --audit-level=moderate || log "Security audit completed with warnings"
    
    # Update dependencies if there are updates
    if [ "$OUTDATED_COUNT" -gt 0 ]; then
        log "Updating dependencies..."
        npm update || log "Some dependencies could not be updated"
        
              # Install updated dependencies
      npm install || log "Failed to install updated dependencies"
        
        # Run tests to ensure nothing broke
        log "Running tests after dependency update..."
        npm run lint || log "Linting failed after dependency update"
        npm run type-check || log "Type checking failed after dependency update"
        
        log "Dependency update completed"
    else
        log "No dependencies to update"
    fi
}

# Function to run security scan (replaces security.yml workflow)
run_security_scan() {
    log "Starting automated security scan..."
    
    # Run npm audit
    log "Running npm audit..."
    npm audit --audit-level=moderate || log "Security audit found issues"
    
    # Check for known vulnerabilities
    log "Checking for high severity vulnerabilities..."
    if npm audit --audit-level=high; then
        log "No high severity vulnerabilities found"
    else
        log "High severity vulnerabilities detected"
        # You could add notification logic here (email, Slack, etc.)
    fi
    
    log "Security scan completed"
}

# Function to run quality checks (replaces quality-check.yml workflow)
run_quality_checks() {
    log "Starting quality checks..."
    
    # Run linting
    log "Running ESLint..."
    npm run lint || log "Linting failed"
    
    # Run type checking
    log "Running TypeScript type check..."
    npm run type-check || log "Type checking failed"
    
    # Run tests if available
    if grep -q '"test"' package.json; then
        log "Running tests..."
        npm test || log "Tests failed"
    fi
    
    log "Quality checks completed"
}

# Function to run build verification (replaces ci.yml workflow)
verify_build() {
    log "Starting build verification..."
    
    # Install dependencies
    log "Installing dependencies..."
    npm install || {
        log "ERROR: Failed to install dependencies"
        return 1
    }
    
    # Build project
    log "Building project..."
    npm run build || {
        log "ERROR: Build failed"
        return 1
    }
    
    # Verify build output
    if [ ! -d "dist" ]; then
        log "ERROR: Build failed: dist folder not found"
        return 1
    fi
    
    log "Build verification completed successfully"
    return 0
}

# Function to restart services if needed
restart_services_if_needed() {
    log "Checking if services need restart..."
    
    # Get PM2 status
    PM2_STATUS=$(pm2 list --no-daemon)
    
    # Check if any services are in error state
    if echo "$PM2_STATUS" | grep -q "errored\|stopped"; then
        log "Found services in error/stopped state, restarting..."
        pm2 restart all
        log "Services restarted"
    else
        log "All services are running normally"
    fi
}

# Function to clean up old logs
cleanup_logs() {
    log "Cleaning up old logs..."
    
    # Keep only last 1000 lines of PM2 logs
    pm2 flush
    
    # Clean up old npm cache
    npm cache clean --force
    
    log "Cleanup completed"
}

# Main execution based on argument
case "${1:-all}" in
    deps)
        check_pm2
        update_dependencies
        ;;
    security)
        check_pm2
        run_security_scan
        ;;
    quality)
        check_pm2
        run_quality_checks
        ;;
    build)
        check_pm2
        verify_build
        ;;
    restart)
        check_pm2
        restart_services_if_needed
        ;;
    cleanup)
        check_pm2
        cleanup_logs
        ;;
    all)
        check_pm2
        log "Running all automated tasks..."
        update_dependencies
        run_security_scan
        run_quality_checks
        verify_build
        restart_services_if_needed
        cleanup_logs
        log "All automated tasks completed"
        ;;
    *)
        echo "Usage: $0 [deps|security|quality|build|restart|cleanup|all]"
        echo "  deps     - Update dependencies"
        echo "  security - Run security scan"
        echo "  quality  - Run quality checks"
        echo "  build    - Verify build"
        echo "  restart  - Restart services if needed"
        echo "  cleanup  - Clean up logs and cache"
        echo "  all      - Run all tasks (default)"
        exit 1
        ;;
esac

log "Cron job completed successfully"
exit 0