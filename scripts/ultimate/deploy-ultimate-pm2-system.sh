#!/bin/bash

# Ultimate PM2 System Deployment Script
# Deploys and manages the ultimate intelligent PM2 ecosystem

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="/workspace"
LOG_DIR="$PROJECT_ROOT/logs"
ECOSYSTEM_FILE="ecosystem.ultimate-intelligent-v4.cjs"
BACKUP_DIR="$PROJECT_ROOT/pm2-backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Functions
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    mkdir -p "$LOG_DIR"
    mkdir -p "$BACKUP_DIR"
    mkdir -p "$PROJECT_ROOT/scripts/ultimate"
    mkdir -p "$PROJECT_ROOT/ai-reports"
    mkdir -p "$PROJECT_ROOT/scaling-reports"
    mkdir -p "$PROJECT_ROOT/collaboration-reports"
    mkdir -p "$PROJECT_ROOT/security-reports"
    log "Directories created successfully"
}

# Backup current PM2 configuration
backup_current_config() {
    log "Backing up current PM2 configuration..."
    
    if [ -f "$PROJECT_ROOT/$ECOSYSTEM_FILE" ]; then
        cp "$PROJECT_ROOT/$ECOSYSTEM_FILE" "$BACKUP_DIR/ecosystem.backup.$TIMESTAMP.cjs"
        log "Current ecosystem file backed up"
    fi
    
    # Backup PM2 process list
    pm2 jlist > "$BACKUP_DIR/pm2-processes.$TIMESTAMP.json" 2>/dev/null || true
    log "PM2 process list backed up"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    # Install PM2 if not already installed
    if ! command -v pm2 &> /dev/null; then
        log "Installing PM2..."
        npm install -g pm2
    fi
    
    # Install project dependencies
    log "Installing project dependencies..."
    npm install
    
    # Install PM2 modules
    log "Installing PM2 modules..."
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    
    log "Dependencies installed successfully"
}

# Validate ecosystem file
validate_ecosystem() {
    log "Validating ecosystem file..."
    
    if [ ! -f "$PROJECT_ROOT/$ECOSYSTEM_FILE" ]; then
        error "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    
    # Basic syntax check
    node -c "$PROJECT_ROOT/$ECOSYSTEM_FILE" || {
        error "Ecosystem file has syntax errors"
        exit 1
    }
    
    log "Ecosystem file validation passed"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    # Get list of processes
    local processes=$(pm2 jlist 2>/dev/null | jq -r '.[].name' 2>/dev/null || echo "")
    
    if [ -n "$processes" ]; then
        log "Found existing processes, stopping them..."
        pm2 stop all || true
        pm2 delete all || true
        log "Existing processes stopped"
    else
        log "No existing processes found"
    fi
}

# Deploy ultimate PM2 system
deploy_ultimate_system() {
    log "Deploying Ultimate PM2 System..."
    
    # Start the ultimate ecosystem
    pm2 start "$PROJECT_ROOT/$ECOSYSTEM_FILE" --update-env
    
    # Wait for processes to start
    sleep 10
    
    # Check process status
    local failed_processes=$(pm2 jlist 2>/dev/null | jq -r '.[] | select(.pm2_env.status != "online") | .name' 2>/dev/null || echo "")
    
    if [ -n "$failed_processes" ]; then
        warn "Some processes failed to start: $failed_processes"
        pm2 logs --lines 50
    else
        log "All processes started successfully"
    fi
}

# Configure PM2 startup
configure_startup() {
    log "Configuring PM2 startup..."
    
    # Save current PM2 configuration
    pm2 save
    
    # Generate startup script
    pm2 startup systemd -u $(whoami) --hp $HOME || true
    
    log "PM2 startup configured"
}

# Run health checks
run_health_checks() {
    log "Running health checks..."
    
    # Wait for processes to stabilize
    sleep 30
    
    # Check process status
    local total_processes=$(pm2 jlist 2>/dev/null | jq '. | length' 2>/dev/null || echo "0")
    local online_processes=$(pm2 jlist 2>/dev/null | jq '[.[] | select(.pm2_env.status == "online")] | length' 2>/dev/null || echo "0")
    
    log "Process Status: $online_processes/$total_processes online"
    
    if [ "$online_processes" -eq "$total_processes" ] && [ "$total_processes" -gt 0 ]; then
        log "✅ All processes are healthy"
    else
        warn "⚠️ Some processes may not be healthy"
        pm2 status
    fi
    
    # Check system resources
    local memory_usage=$(free | grep Mem | awk '{printf "%.1f", $3/$2 * 100.0}')
    local disk_usage=$(df -h / | awk 'NR==2{print $5}' | sed 's/%//')
    
    log "System Resources: Memory: ${memory_usage}%, Disk: ${disk_usage}%"
    
    if (( $(echo "$memory_usage > 90" | bc -l) )); then
        warn "⚠️ High memory usage detected: ${memory_usage}%"
    fi
    
    if [ "$disk_usage" -gt 90 ]; then
        warn "⚠️ High disk usage detected: ${disk_usage}%"
    fi
}

# Generate deployment report
generate_report() {
    log "Generating deployment report..."
    
    local report_file="$PROJECT_ROOT/deployment-report-$TIMESTAMP.json"
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "deployment": {
    "ecosystem_file": "$ECOSYSTEM_FILE",
    "project_root": "$PROJECT_ROOT",
    "backup_created": true,
    "backup_location": "$BACKUP_DIR/ecosystem.backup.$TIMESTAMP.cjs"
  },
  "processes": $(pm2 jlist 2>/dev/null || echo "[]"),
  "system": {
    "memory_usage": "$(free | grep Mem | awk '{printf "%.1f", $3/$2 * 100.0}')%",
    "disk_usage": "$(df -h / | awk 'NR==2{print $5}')",
    "uptime": "$(uptime -p)",
    "load_average": "$(uptime | awk -F'load average:' '{print $2}')"
  },
  "status": "deployed"
}
EOF
    
    log "Deployment report saved to: $report_file"
}

# Main deployment function
main() {
    log "🚀 Starting Ultimate PM2 System Deployment"
    log "=========================================="
    
    # Check if running as root
    if [ "$EUID" -eq 0 ]; then
        warn "Running as root. Consider using a non-root user for better security."
    fi
    
    # Check Node.js version
    local node_version=$(node --version 2>/dev/null || echo "not installed")
    log "Node.js version: $node_version"
    
    if [ "$node_version" = "not installed" ]; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check PM2 version
    local pm2_version=$(pm2 --version 2>/dev/null || echo "not installed")
    log "PM2 version: $pm2_version"
    
    # Execute deployment steps
    create_directories
    backup_current_config
    install_dependencies
    validate_ecosystem
    stop_existing_processes
    deploy_ultimate_system
    configure_startup
    run_health_checks
    generate_report
    
    log "🎉 Ultimate PM2 System Deployment Completed Successfully!"
    log "========================================================"
    
    # Display final status
    info "Final Status:"
    pm2 status
    
    info "Useful Commands:"
    echo "  pm2 status                    - Check process status"
    echo "  pm2 logs                     - View all logs"
    echo "  pm2 logs <process-name>      - View specific process logs"
    echo "  pm2 restart <process-name>   - Restart specific process"
    echo "  pm2 restart all              - Restart all processes"
    echo "  pm2 stop all                 - Stop all processes"
    echo "  pm2 delete all               - Delete all processes"
    echo "  pm2 monit                    - Monitor processes in real-time"
    echo "  pm2 reload all               - Reload all processes"
    
    info "Log Files Location: $LOG_DIR"
    info "Backup Location: $BACKUP_DIR"
    
    log "Deployment completed at $(date)"
}

# Handle script arguments
case "${1:-deploy}" in
    "deploy")
        main
        ;;
    "status")
        pm2 status
        ;;
    "logs")
        pm2 logs --lines 100
        ;;
    "restart")
        pm2 restart all
        ;;
    "stop")
        pm2 stop all
        ;;
    "start")
        pm2 start "$PROJECT_ROOT/$ECOSYSTEM_FILE" --update-env
        ;;
    "backup")
        backup_current_config
        ;;
    "health")
        run_health_checks
        ;;
    "help"|"-h"|"--help")
        echo "Ultimate PM2 System Deployment Script"
        echo ""
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  deploy    - Deploy the ultimate PM2 system (default)"
        echo "  status    - Show PM2 process status"
        echo "  logs      - Show PM2 logs"
        echo "  restart   - Restart all processes"
        echo "  stop      - Stop all processes"
        echo "  start     - Start all processes"
        echo "  backup    - Backup current configuration"
        echo "  health    - Run health checks"
        echo "  help      - Show this help message"
        ;;
    *)
        error "Unknown command: $1"
        echo "Use '$0 help' for available commands"
        exit 1
        ;;
esac