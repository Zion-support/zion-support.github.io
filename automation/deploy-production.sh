#!/bin/bash

# Production Deployment Script for Enhanced PM2 Automation System
# Zion Tech Group - PM2 Automation Platform

set -e  # Exit on any error

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENVIRONMENT="production"
DASHBOARD_PORT="3001"
PM2_APP_NAME="enhanced-automation"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local message="$1"
    local level="${2:-INFO}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [DEPLOY-$level] $message"
}

# Error handling
error_exit() {
    log "Deployment failed: $1" "ERROR"
    exit 1
}

# Check prerequisites
check_prerequisites() {
    log "Checking deployment prerequisites..."
    
    # Check if PM2 is installed
    if ! command -v pm2 > /dev/null 2>&1; then
        error_exit "PM2 is not installed. Please install PM2 first: npm install -g pm2"
    fi
    
    # Check if Node.js is available
    if ! command -v node > /dev/null 2>&1; then
        error_exit "Node.js is not installed or not in PATH"
    fi
    
    # Check if npm is available
    if ! command -v npm > /dev/null 2>&1; then
        error_exit "npm is not installed or not in PATH"
    fi
    
    # Check if we're in the right directory
    if [[ ! -f "$SCRIPT_DIR/start-enhanced-automation.js" ]]; then
        error_exit "Deployment script must be run from the automation directory"
    fi
    
    log "Prerequisites check passed" "SUCCESS"
}

# Install dependencies
install_dependencies() {
    log "Installing production dependencies..."
    
    cd "$SCRIPT_DIR"
    
    # Install dependencies
    if npm ci --only=production; then
        log "Dependencies installed successfully" "SUCCESS"
    else
        error_exit "Failed to install dependencies"
    fi
}

# Setup environment
setup_environment() {
    log "Setting up production environment..."
    
    # Set production environment
    export NODE_ENV="production"
    export DASHBOARD_PORT="$DASHBOARD_PORT"
    
    # Create production environment file if it doesn't exist
    if [[ ! -f "$SCRIPT_DIR/.env.production" ]]; then
        cat > "$SCRIPT_DIR/.env.production" << EOF
# Production Environment Configuration
NODE_ENV=production
DASHBOARD_PORT=$DASHBOARD_PORT
DASHBOARD_HOST=0.0.0.0

# Alerting Configuration
EMAIL_ENABLED=false
SLACK_ENABLED=false
WEBHOOK_ENABLED=false

# Security Configuration
SECURITY_ENABLED=true
AUTHENTICATION_REQUIRED=false

# Monitoring Configuration
METRICS_COLLECTION=true
LOG_AGGREGATION=true
PERFORMANCE_PROFILING=true

# Recovery Configuration
AUTO_RECOVERY=true
MAX_RETRIES=5
HEALTH_CHECK_INTERVAL=10000

# Maintenance Configuration
MAINTENANCE_ENABLED=true
LOG_ROTATION=true
METRICS_CLEANUP=true
EOF
        log "Production environment file created" "INFO"
    fi
    
    log "Environment setup completed" "SUCCESS"
}

# Stop existing processes
stop_existing_processes() {
    log "Stopping existing automation processes..."
    
    # Stop existing PM2 processes
    if pm2 list | grep -q "$PM2_APP_NAME"; then
        pm2 stop "$PM2_APP_NAME" || true
        pm2 delete "$PM2_APP_NAME" || true
        log "Existing processes stopped" "INFO"
    fi
    
    # Kill any processes using the dashboard port
    if lsof -ti:$DASHBOARD_PORT > /dev/null 2>&1; then
        lsof -ti:$DASHBOARD_PORT | xargs kill -9 || true
        log "Port $DASHBOARD_PORT cleared" "INFO"
    fi
}

# Deploy with PM2
deploy_with_pm2() {
    log "Deploying enhanced automation system with PM2..."
    
    cd "$SCRIPT_DIR"
    
    # Start the enhanced automation system
    pm2 start start-enhanced-automation.js \
        --name "$PM2_APP_NAME" \
        --env production \
        --max-memory-restart 1G \
        --restart-delay 5000 \
        --max-restarts 10 \
        --min-uptime 10000 \
        --log-date-format "YYYY-MM-DD HH:mm:ss Z" \
        --merge-logs \
        --log-file "$PROJECT_ROOT/logs/automation.log" \
        --error "$PROJECT_ROOT/logs/automation-error.log" \
        --out "$PROJECT_ROOT/logs/automation-out.log" \
        --pid "$PROJECT_ROOT/logs/automation.pid" \
        --cwd "$SCRIPT_DIR" \
        --interpreter node \
        --node-args="--max-old-space-size=2048" \
        --env-file .env.production || error_exit "Failed to start PM2 process"
    
    # Save PM2 configuration
    pm2 save || error_exit "Failed to save PM2 configuration"
    
    log "PM2 deployment completed successfully" "SUCCESS"
}

# Verify deployment
verify_deployment() {
    log "Verifying deployment..."
    
    # Wait for system to start
    sleep 5
    
    # Check if PM2 process is running
    if ! pm2 list | grep -q "$PM2_APP_NAME.*online"; then
        error_exit "PM2 process is not running"
    fi
    
    # Check if dashboard is accessible
    if ! curl -s "http://localhost:$DASHBOARD_PORT/health" > /dev/null; then
        error_exit "Dashboard is not accessible on port $DASHBOARD_PORT"
    fi
    
    # Check system health
    local health_response=$(curl -s "http://localhost:$DASHBOARD_PORT/health")
    if echo "$health_response" | grep -q '"status":"healthy"'; then
        log "System health check passed" "SUCCESS"
    else
        error_exit "System health check failed"
    fi
    
    log "Deployment verification completed successfully" "SUCCESS"
}

# Setup monitoring and logging
setup_monitoring() {
    log "Setting up monitoring and logging..."
    
    # Create logs directory
    mkdir -p "$PROJECT_ROOT/logs"
    
    # Create log rotation configuration
    if [[ ! -f "/etc/logrotate.d/zion-automation" ]]; then
        sudo tee /etc/logrotate.d/zion-automation > /dev/null << EOF
$PROJECT_ROOT/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 $(whoami) $(whoami)
    postrotate
        pm2 reloadLogs $PM2_APP_NAME
    endscript
}
EOF
        log "Log rotation configuration created" "INFO"
    fi
    
    # Setup PM2 startup script
    pm2 startup || log "PM2 startup script setup failed (may need sudo)" "WARNING"
    
    log "Monitoring setup completed" "SUCCESS"
}

# Display deployment information
display_deployment_info() {
    log "Deployment completed successfully!" "SUCCESS"
    echo
    echo -e "${GREEN}🚀 Enhanced PM2 Automation System Deployed${NC}"
    echo
    echo -e "${BLUE}Dashboard URL:${NC} http://localhost:$DASHBOARD_PORT"
    echo -e "${BLUE}PM2 App Name:${NC} $PM2_APP_NAME"
    echo -e "${BLUE}Environment:${NC} $ENVIRONMENT"
    echo -e "${BLUE}Logs Directory:${NC} $PROJECT_ROOT/logs"
    echo
    echo -e "${YELLOW}Useful Commands:${NC}"
    echo -e "  View logs: ${GREEN}pm2 logs $PM2_APP_NAME${NC}"
    echo -e "  Monitor: ${GREEN}pm2 monit${NC}"
    echo -e "  Status: ${GREEN}pm2 list${NC}"
    echo -e "  Restart: ${GREEN}pm2 restart $PM2_APP_NAME${NC}"
    echo -e "  Stop: ${GREEN}pm2 stop $PM2_APP_NAME${NC}"
    echo
    echo -e "${BLUE}Next Steps:${NC}"
    echo -e "  1. Access the dashboard at http://localhost:$DASHBOARD_PORT"
    echo -e "  2. Configure alerting channels (email, Slack, webhooks)"
    echo -e "  3. Set up external monitoring integrations"
    echo -e "  4. Configure process dependencies and recovery strategies"
    echo
}

# Main deployment function
main() {
    log "Starting production deployment of Enhanced PM2 Automation System..."
    
    # Check prerequisites
    check_prerequisites
    
    # Install dependencies
    install_dependencies
    
    # Setup environment
    setup_environment
    
    # Stop existing processes
    stop_existing_processes
    
    # Deploy with PM2
    deploy_with_pm2
    
    # Verify deployment
    verify_deployment
    
    # Setup monitoring
    setup_monitoring
    
    # Display deployment information
    display_deployment_info
    
    log "Production deployment completed successfully!" "SUCCESS"
}

# Run main function
main "$@"
