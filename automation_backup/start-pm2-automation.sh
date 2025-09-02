#!/bin/bash

# PM2 Automation Startup Script for Zion App
# This script starts all automation components and monitors their health

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_CONFIG="$SCRIPT_DIR/ecosystem.config.cjs"
LOG_DIR="$SCRIPT_DIR/logs"
PM2_LOG_DIR="$HOME/.pm2/logs"

# Environment variables
export NODE_ENV=${NODE_ENV:-production}
export NETLIFY_SITE_ID=${NETLIFY_SITE_ID}
export NETLIFY_TOKEN=${NETLIFY_TOKEN}

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
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

check_requirements() {
    log_info "Checking system requirements..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    REQUIRED_VERSION="16.0.0"
    
    if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
        log_error "Node.js version $NODE_VERSION is too old. Required: $REQUIRED_VERSION or higher."
        exit 1
    fi
    
    log_success "Node.js version $NODE_VERSION is compatible"
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log_info "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        log_success "PM2 installed successfully"
    else
        PM2_VERSION=$(pm2 --version)
        log_success "PM2 version $PM2_VERSION is available"
    fi
    
    # Check if required environment variables are set
    if [ -z "$NETLIFY_SITE_ID" ]; then
        log_warning "NETLIFY_SITE_ID environment variable is not set"
        log_info "Please set NETLIFY_SITE_ID to enable Netlify integration"
    fi
    
    if [ -z "$NETLIFY_TOKEN" ]; then
        log_warning "NETLIFY_TOKEN environment variable is not set"
        log_info "Please set NETLIFY_TOKEN to enable Netlify integration"
    fi
}

setup_directories() {
    log_info "Setting up directories..."
    
    # Create log directories
    mkdir -p "$LOG_DIR"
    mkdir -p "$PM2_LOG_DIR"
    
    # Set proper permissions
    chmod 755 "$LOG_DIR"
    
    log_success "Directories created successfully"
}

install_dependencies() {
    log_info "Installing automation dependencies..."
    
    cd "$SCRIPT_DIR"
    
    if [ -f "package.json" ]; then
        npm install
        log_success "Dependencies installed successfully"
    else
        log_warning "No package.json found in automation directory"
    fi
    
    cd "$PROJECT_ROOT"
}

check_automation_scripts() {
    log_info "Checking automation scripts..."
    
    local missing_scripts=()
    
    # Check for required automation scripts
    local required_scripts=(
        "netlify-build-monitor.js"
        "netlify-build-automation.js"
        "build-health-monitor.js"
        "code-quality-monitor.js"
        "dependency-monitor.js"
        "build-automation.js"
        "file-integrity-monitor.js"
        "performance-optimizer.js"
        "lint-monitor.js"
        "intelligent-orchestrator.js"
        "automation-dashboard.js"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$SCRIPT_DIR/$script" ]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -eq 0 ]; then
        log_success "All automation scripts are present"
    else
        log_warning "Missing automation scripts: ${missing_scripts[*]}"
        log_info "Some automation features may not work properly"
    fi
}

stop_existing_processes() {
    log_info "Stopping existing PM2 processes..."
    
    # Stop all PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Kill any remaining PM2 processes
    pkill -f "pm2" 2>/dev/null || true
    
    log_success "Existing processes stopped"
}

start_automation_system() {
    log_info "Starting PM2 automation system..."
    
    cd "$SCRIPT_DIR"
    
    # Start all automation processes
    pm2 start ecosystem.config.cjs
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    cd "$PROJECT_ROOT"
    
    log_success "PM2 automation system started successfully"
}

wait_for_startup() {
    log_info "Waiting for automation system to stabilize..."
    
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if pm2 status | grep -q "online"; then
            log_success "Automation system is online"
            return 0
        fi
        
        log_info "Waiting for processes to come online... (attempt $attempt/$max_attempts)"
        sleep 2
        ((attempt++))
    done
    
    log_error "Automation system failed to start within expected time"
    return 1
}

check_automation_health() {
    log_info "Checking automation system health..."
    
    # Get PM2 status
    local status_output=$(pm2 status)
    
    # Count online processes
    local online_count=$(echo "$status_output" | grep -c "online" || echo "0")
    local total_count=$(echo "$status_output" | grep -c "automation\|monitor\|orchestrator" || echo "0")
    
    if [ "$online_count" -eq "$total_count" ] && [ "$total_count" -gt 0 ]; then
        log_success "All automation processes are online ($online_count/$total_count)"
        return 0
    else
        log_warning "Some automation processes may not be running properly ($online_count/$total_count)"
        return 1
    fi
}

show_status() {
    log_info "PM2 Automation System Status:"
    echo ""
    
    # Show PM2 status
    pm2 status
    
    echo ""
    log_info "Recent logs (last 10 lines):"
    
    # Show recent logs for key processes
    local key_processes=(
        "netlify-build-monitor"
        "netlify-build-automation"
        "intelligent-orchestrator"
        "automation-dashboard"
    )
    
    for process in "${key_processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            echo ""
            log_info "Logs for $process:"
            pm2 logs "$process" --lines 5 --nostream 2>/dev/null || echo "No logs available"
        fi
    done
}

setup_monitoring() {
    log_info "Setting up monitoring..."
    
    # Create monitoring script
    cat > "$SCRIPT_DIR/monitor-automation.sh" << 'EOF'
#!/bin/bash

# Automation Monitoring Script
# Run this script to check the health of all automation processes

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"

echo "=== PM2 Automation System Health Check ==="
echo "Timestamp: $(date)"
echo ""

# Check PM2 status
echo "PM2 Process Status:"
pm2 status
echo ""

# Check log files
echo "Recent Log Activity:"
for log_file in "$LOG_DIR"/*.log; do
    if [ -f "$log_file" ]; then
        filename=$(basename "$log_file")
        echo "--- $filename ---"
        tail -5 "$log_file" 2>/dev/null || echo "No recent logs"
        echo ""
    fi
done

# Check system resources
echo "System Resources:"
echo "Memory usage: $(free -h | grep Mem | awk '{print $3"/"$2}')"
echo "Disk usage: $(df -h . | tail -1 | awk '{print $5}')"
echo "CPU load: $(uptime | awk -F'load average:' '{print $2}')"
EOF
    
    chmod +x "$SCRIPT_DIR/monitor-automation.sh"
    
    # Create health check cron job
    (crontab -l 2>/dev/null; echo "*/5 * * * * $SCRIPT_DIR/monitor-automation.sh >> $LOG_DIR/health-check.log 2>&1") | crontab -
    
    log_success "Monitoring setup completed"
}

create_control_scripts() {
    log_info "Creating control scripts..."
    
    # Create restart script
    cat > "$SCRIPT_DIR/restart-automation.sh" << 'EOF'
#!/bin/bash

# Restart PM2 Automation System
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Restarting PM2 automation system..."
cd "$SCRIPT_DIR"

pm2 restart all
pm2 save

echo "Automation system restarted successfully"
EOF
    
    chmod +x "$SCRIPT_DIR/restart-automation.sh"
    
    # Create stop script
    cat > "$SCRIPT_DIR/stop-automation.sh" << 'EOF'
#!/bin/bash

# Stop PM2 Automation System
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Stopping PM2 automation system..."
cd "$SCRIPT_DIR"

pm2 stop all
pm2 save

echo "Automation system stopped successfully"
EOF
    
    chmod +x "$SCRIPT_DIR/stop-automation.sh"
    
    # Create logs script
    cat > "$SCRIPT_DIR/show-logs.sh" << 'EOF'
#!/bin/bash

# Show PM2 Automation Logs
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "PM2 Automation Logs:"
echo "===================="

# Show PM2 logs
pm2 logs --lines 50

echo ""
echo "Log files location: $SCRIPT_DIR/logs/"
EOF
    
    chmod +x "$SCRIPT_DIR/show-logs.sh"
    
    log_success "Control scripts created"
}

show_usage() {
    echo "PM2 Automation System for Zion App"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  start     Start the automation system (default)"
    echo "  stop      Stop the automation system"
    echo "  restart   Restart the automation system"
    echo "  status    Show system status"
    echo "  logs      Show recent logs"
    echo "  monitor   Run health check"
    echo "  help      Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  NETLIFY_SITE_ID    Netlify site ID for build monitoring"
    echo "  NETLIFY_TOKEN      Netlify API token for build automation"
    echo "  NODE_ENV           Node.js environment (default: production)"
    echo ""
    echo "Examples:"
    echo "  $0 start           # Start automation system"
    echo "  $0 status          # Check system status"
    echo "  $0 logs            # View recent logs"
}

main() {
    case "${1:-start}" in
        start)
            log_info "Starting PM2 Automation System for Zion App..."
            
            check_requirements
            setup_directories
            install_dependencies
            check_automation_scripts
            stop_existing_processes
            start_automation_system
            wait_for_startup
            check_automation_health
            setup_monitoring
            create_control_scripts
            show_status
            
            log_success "PM2 Automation System started successfully!"
            log_info "Use 'pm2 monit' to monitor processes in real-time"
            log_info "Use '$0 status' to check system status"
            log_info "Use '$0 logs' to view recent logs"
            ;;
            
        stop)
            log_info "Stopping PM2 Automation System..."
            stop_existing_processes
            log_success "Automation system stopped"
            ;;
            
        restart)
            log_info "Restarting PM2 Automation System..."
            stop_existing_processes
            start_automation_system
            wait_for_startup
            check_automation_health
            show_status
            log_success "Automation system restarted"
            ;;
            
        status)
            show_status
            ;;
            
        logs)
            log_info "Recent PM2 logs:"
            pm2 logs --lines 50
            ;;
            
        monitor)
            if [ -f "$SCRIPT_DIR/monitor-automation.sh" ]; then
                "$SCRIPT_DIR/monitor-automation.sh"
            else
                log_error "Monitoring script not found"
            fi
            ;;
            
        help|--help|-h)
            show_usage
            ;;
            
        *)
            log_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
