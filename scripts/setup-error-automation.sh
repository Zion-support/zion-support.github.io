#!/bin/bash

# Setup Error Automation System
# This script sets up PM2-based error monitoring and automation

set -e

echo "🚀 Setting up Error Automation System..."

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

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        success "PM2 is already installed"
    fi
}

# Create necessary directories
setup_directories() {
    log "Creating necessary directories..."
    
    mkdir -p automation/logs
    mkdir -p automation/reports
    mkdir -p scripts
    
    success "Directories created"
}

# Install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        success "Dependencies installed"
    else
        error "package.json not found"
        exit 1
    fi
}

# Setup PM2 log rotation
setup_log_rotation() {
    log "Setting up PM2 log rotation..."
    
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval "0 0 * * *"
    
    success "Log rotation configured"
}

# Start PM2 services
start_services() {
    log "Starting PM2 error automation services..."
    
    # Start the error monitoring ecosystem
    pm2 start ecosystem.error-monitoring.cjs
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 to start on system boot
    pm2 startup || warning "Could not setup PM2 startup (may need sudo)"
    
    success "PM2 services started"
}

# Run initial error checks
run_initial_checks() {
    log "Running initial error checks..."
    
    # Run linting
    if npm run lint:check 2>/dev/null; then
        success "Linting passed"
    else
        warning "Linting issues found, attempting to fix..."
        npm run lint:fix || warning "Could not auto-fix all linting issues"
    fi
    
    # Run type checking
    if npm run type-check 2>/dev/null; then
        success "Type checking passed"
    else
        warning "Type checking issues found"
    fi
    
    # Run build test
    if npm run build 2>/dev/null; then
        success "Build test passed"
    else
        warning "Build issues found"
    fi
}

# Setup git hooks
setup_git_hooks() {
    log "Setting up git hooks..."
    
    # Create pre-commit hook
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running pre-commit checks..."

# Run linting
if ! npm run lint:check; then
    echo "❌ Linting failed. Please fix the issues before committing."
    exit 1
fi

# Run type checking
if ! npm run type-check; then
    echo "❌ Type checking failed. Please fix the issues before committing."
    exit 1
fi

echo "✅ Pre-commit checks passed"
EOF

    chmod +x .git/hooks/pre-commit
    
    success "Git hooks configured"
}

# Create monitoring script
create_monitoring_script() {
    log "Creating monitoring script..."
    
    cat > scripts/monitor-automation.sh << 'EOF'
#!/bin/bash

echo "🔍 PM2 Error Automation Monitor"
echo "================================"

# Show PM2 status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "📋 Recent Logs:"
pm2 logs --lines 20

echo ""
echo "💾 Memory Usage:"
pm2 monit --no-interaction | grep -E "(App Name|Memory|CPU)" || echo "PM2 monit not available"

echo ""
echo "🔄 Restart Counts:"
pm2 jlist | jq -r '.[] | "\(.name): \(.pm2_env.restart_time) restarts"' 2>/dev/null || echo "jq not available for detailed stats"
EOF

    chmod +x scripts/monitor-automation.sh
    
    success "Monitoring script created"
}

# Create maintenance script
create_maintenance_script() {
    log "Creating maintenance script..."
    
    cat > scripts/maintain-automation.sh << 'EOF'
#!/bin/bash

echo "🔧 PM2 Error Automation Maintenance"
echo "==================================="

# Restart all services
echo "🔄 Restarting all services..."
pm2 restart all

# Clean old logs
echo "🧹 Cleaning old logs..."
find automation/logs -name "*.log" -mtime +7 -delete 2>/dev/null || true

# Generate report
echo "📊 Generating report..."
node scripts/pm2-error-automation-manager.cjs report

# Show status
echo "📈 Current Status:"
pm2 status

echo "✅ Maintenance completed"
EOF

    chmod +x scripts/maintain-automation.sh
    
    success "Maintenance script created"
}

# Main setup function
main() {
    log "Starting error automation setup..."
    
    check_pm2
    setup_directories
    install_dependencies
    setup_log_rotation
    run_initial_checks
    setup_git_hooks
    create_monitoring_script
    create_maintenance_script
    start_services
    
    echo ""
    success "🎉 Error Automation System setup completed!"
    echo ""
    echo "📋 Available commands:"
    echo "  pm2 status                    - Check PM2 status"
    echo "  pm2 logs                      - View logs"
    echo "  pm2 restart all               - Restart all services"
    echo "  ./scripts/monitor-automation.sh - Monitor system"
    echo "  ./scripts/maintain-automation.sh - Run maintenance"
    echo "  node scripts/pm2-error-automation-manager.cjs status - Detailed status"
    echo ""
    echo "🔧 Management commands:"
    echo "  node scripts/pm2-error-automation-manager.cjs start    - Start all services"
    echo "  node scripts/pm2-error-automation-manager.cjs stop     - Stop all services"
    echo "  node scripts/pm2-error-automation-manager.cjs restart  - Restart all services"
    echo "  node scripts/pm2-error-automation-manager.cjs logs     - View logs"
    echo "  node scripts/pm2-error-automation-manager.cjs report   - Generate report"
    echo ""
    echo "📁 Logs location: automation/logs/"
    echo "📊 Reports location: automation/logs/"
    echo ""
    warning "Note: Some services may take a few minutes to fully initialize"
}

# Run main function
main "$@"