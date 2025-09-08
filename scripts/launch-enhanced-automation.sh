#!/bin/bash

# Enhanced PM2 Automation Launcher
# Launches all intelligent PM2 automations with comprehensive monitoring

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT=$(pwd)
ECOSYSTEM_CONFIG="ecosystem-enhanced.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
PM2_LOG_DIR="$PROJECT_ROOT/logs/pm2"

# Ensure logs directory exists
mkdir -p "$LOGS_DIR"
mkdir -p "$PM2_LOG_DIR"

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
    log_success "PM2 is installed"
}

# Check if ecosystem config exists
check_config() {
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        log_error "Ecosystem config not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    log_success "Ecosystem config found: $ECOSYSTEM_CONFIG"
}

# Check system resources
check_system_resources() {
    log "Checking system resources..."
    
    # Check disk space
    DISK_USAGE=$(df -h . | awk 'NR==2 {print $5}' | sed 's/%//')
    if [ "$DISK_USAGE" -gt 90 ]; then
        log_warning "Disk usage is high: ${DISK_USAGE}%"
    else
        log_success "Disk usage: ${DISK_USAGE}%"
    fi
    
    # Check memory
    MEMORY_AVAILABLE=$(free -m | awk 'NR==2 {print $7}')
    if [ "$MEMORY_AVAILABLE" -lt 1000 ]; then
        log_warning "Available memory is low: ${MEMORY_AVAILABLE}MB"
    else
        log_success "Available memory: ${MEMORY_AVAILABLE}MB"
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version)
    log_success "Node.js version: $NODE_VERSION"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|errored\|stopped"; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        log_success "Stopped existing PM2 processes"
    else
        log "No existing PM2 processes found"
    fi
}

# Start enhanced automation processes
start_enhanced_automation() {
    log "Starting enhanced PM2 automation processes..."
    
    # Start with the enhanced ecosystem config
    pm2 start "$ECOSYSTEM_CONFIG"
    
    if [ $? -eq 0 ]; then
        log_success "Enhanced automation processes started successfully"
    else
        log_error "Failed to start enhanced automation processes"
        exit 1
    fi
}

# Verify all processes are running
verify_processes() {
    log "Verifying all automation processes..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check process status
    local failed_processes=()
    local total_processes=0
    local running_processes=0
    
    while IFS= read -r line; do
        if [[ $line =~ ^[0-9]+ ]]; then
            total_processes=$((total_processes + 1))
            if [[ $line =~ online ]]; then
                running_processes=$((running_processes + 1))
            else
                process_name=$(echo "$line" | awk '{print $2}')
                failed_processes+=("$process_name")
            fi
        fi
    done < <(pm2 status --no-daemon)
    
    log "Process verification complete:"
    log "  Total processes: $total_processes"
    log "  Running processes: $running_processes"
    
    if [ ${#failed_processes[@]} -gt 0 ]; then
        log_warning "Failed processes: ${failed_processes[*]}"
        return 1
    else
        log_success "All processes are running successfully"
        return 0
    fi
}

# Start monitoring dashboard
start_monitoring() {
    log "Starting PM2 monitoring..."
    
    # Start PM2 monit in background
    pm2 monit > "$PM2_LOG_DIR/monit.log" 2>&1 &
    MONIT_PID=$!
    
    log_success "PM2 monitoring started (PID: $MONIT_PID)"
    log "Monitoring logs: $PM2_LOG_DIR/monit.log"
}

# Generate automation summary
generate_summary() {
    log "Generating automation summary..."
    
    local summary_file="$LOGS_DIR/automation-summary-$(date +%Y%m%d-%H%M%S).md"
    
    cat > "$summary_file" << EOF
# Enhanced PM2 Automation Summary

Generated: $(date)

## System Information
- Project Root: $PROJECT_ROOT
- Ecosystem Config: $ECOSYSTEM_CONFIG
- Node.js Version: $(node --version)
- PM2 Version: $(pm2 --version)

## Process Status
$(pm2 status --no-daemon)

## Automation Features

### AI-Powered Automations
- **AI Code Optimizer**: Runs every 30 minutes
  - Analyzes code complexity and performance
  - Automatically fixes common issues
  - Generates optimization recommendations

- **Smart Test Automation**: Runs every 2 hours
  - Identifies untested components
  - Generates missing tests automatically
  - Analyzes test coverage and quality

- **Intelligent Deployment**: Runs on demand
  - Pre/post-deployment health checks
  - Automatic rollback on failure
  - Performance monitoring and validation

### Enhanced Monitoring
- **Project Health Monitor**: Runs every 10 minutes
- **Health Dashboard**: Runs every 5 minutes
- **TypeScript Syntax Fixer**: Runs every 15 minutes
- **Dependency Manager**: Runs every 4 hours
- **Security Automation**: Runs every 6 hours
- **Testing Automation**: Runs every 3 hours
- **CI/CD Automation**: Runs every hour
- **Link Checker**: Runs every 8 hours

### Legacy Automations
- Build Health Monitor
- Code Quality Monitor
- Dependency Monitor
- Build Automation
- File Integrity Monitor

## Log Files
- Main logs: $LOGS_DIR/
- PM2 logs: $PM2_LOG_DIR/
- Process-specific logs: $LOGS_DIR/[process-name].log

## Next Steps
1. Monitor logs for any issues
2. Check automation reports in logs directory
3. Use 'pm2 monit' for real-time monitoring
4. Use 'pm2 logs' to view all process logs

## Commands
- View status: pm2 status
- View logs: pm2 logs
- Monitor: pm2 monit
- Restart: pm2 restart all
- Stop: pm2 stop all
EOF

    log_success "Automation summary generated: $summary_file"
}

# Health check function
health_check() {
    log "Performing health check..."
    
    local health_file="$LOGS_DIR/health-check-$(date +%Y%m%d-%H%M%S).json"
    
    # Collect health metrics
    local health_data=$(cat << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "system": {
    "disk_usage": "$(df -h . | awk 'NR==2 {print $5}')",
    "memory_available": "$(free -m | awk 'NR==2 {print $7}')MB",
    "node_version": "$(node --version)",
    "pm2_version": "$(pm2 --version)"
  },
  "processes": {
    "total": $(pm2 list | grep -c "^[0-9]"),
    "online": $(pm2 list | grep -c "online"),
    "errored": $(pm2 list | grep -c "errored"),
    "stopped": $(pm2 list | grep -c "stopped")
  },
  "automation_status": "running"
}
EOF
)
    
    echo "$health_data" > "$health_file"
    log_success "Health check completed: $health_file"
}

# Main execution
main() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                Enhanced PM2 Automation Launcher             ║"
    echo "║                                                              ║"
    echo "║  This script will launch intelligent PM2 automations that   ║"
    echo "║  continuously monitor and improve your application.         ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    log "Starting enhanced PM2 automation setup..."
    
    # Pre-flight checks
    check_pm2
    check_config
    check_system_resources
    
    # Stop existing processes
    stop_existing_processes
    
    # Start enhanced automation
    start_enhanced_automation
    
    # Verify processes
    if verify_processes; then
        log_success "All automation processes are running successfully!"
        
        # Start monitoring
        start_monitoring
        
        # Generate summary
        generate_summary
        
        # Perform health check
        health_check
        
        echo -e "${GREEN}"
        echo "╔══════════════════════════════════════════════════════════════╗"
        echo "║                    SETUP COMPLETE!                          ║"
        echo "╠══════════════════════════════════════════════════════════════╣"
        echo "║  Your enhanced PM2 automations are now running!            ║"
        echo "║                                                              ║"
        echo "║  Commands:                                                   ║"
        echo "║    • pm2 status     - View process status                   ║"
        echo "║    • pm2 logs       - View all logs                        ║"
        echo "║    • pm2 monit      - Real-time monitoring                  ║"
        echo "║    • pm2 restart all - Restart all processes               ║"
        echo "║                                                              ║"
        echo "║  Logs are available in: $LOGS_DIR                          ║"
        echo "╚══════════════════════════════════════════════════════════════╝"
        echo -e "${NC}"
        
    else
        log_error "Some automation processes failed to start properly"
        log "Check the logs for more details:"
        log "  pm2 logs"
        log "  pm2 status"
        exit 1
    fi
}

# Error handling
trap 'log_error "Script interrupted. Cleaning up..."; pm2 stop all 2>/dev/null || true; exit 1' INT TERM

# Run main function
main "$@"