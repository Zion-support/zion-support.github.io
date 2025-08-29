#!/bin/bash

# PM2 Intelligent Automation Launcher
# Advanced process management and development workflow automation

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
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.config.js"
LOG_DIR="$PROJECT_ROOT/automation/logs"
BACKUP_DIR="$PROJECT_ROOT/automation/backups"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$BACKUP_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO") echo -e "${GREEN}[$timestamp] [INFO]${NC} $message" ;;
        "WARN") echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message" ;;
        "ERROR") echo -e "${RED}[$timestamp] [ERROR]${NC} $message" ;;
        "DEBUG") echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message" ;;
        *) echo -e "${CYAN}[$timestamp] [$level]${NC} $message" ;;
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/pm2-launcher.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first:"
        echo "  npm install -g pm2"
        exit 1
    fi
}

# Check if ecosystem file exists
check_ecosystem() {
    if [[ ! -f "$ECOSYSTEM_FILE" ]]; then
        log "ERROR" "Ecosystem configuration file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
}

# Check system resources
check_system_resources() {
    log "INFO" "Checking system resources..."
    
    # Check available memory
    local available_mem=$(free -m | awk 'NR==2{printf "%.0f", $7*100/$2}')
    if [[ $available_mem -lt 20 ]]; then
        log "WARN" "Low memory available: ${available_mem}%"
    else
        log "INFO" "Memory available: ${available_mem}%"
    fi
    
    # Check disk space
    local disk_usage=$(df -h / | awk 'NR==2{print $5}' | sed 's/%//')
    if [[ $disk_usage -gt 90 ]]; then
        log "WARN" "Disk usage is high: ${disk_usage}%"
    else
        log "INFO" "Disk usage: ${disk_usage}%"
    fi
    
    # Check Node.js version
    local node_version=$(node --version 2>/dev/null || echo "Not installed")
    log "INFO" "Node.js version: $node_version"
}

# Start all automation systems
start_all_automation() {
    log "INFO" "🚀 Starting all PM2 automation systems..."
    
    # Start PM2 ecosystem
    cd "$PROJECT_ROOT"
    pm2 start ecosystem.config.js
    
    # Start intelligent manager
    log "INFO" "Starting PM2 Intelligent Manager..."
    node scripts/pm2-intelligent-manager.js start &
    
    # Start development workflow
    log "INFO" "Starting Development Workflow..."
    node scripts/pm2-dev-workflow.js start &
    
    # Wait for processes to start
    sleep 5
    
    # Show status
    pm2 status
    
    log "INFO" "✅ All automation systems started successfully!"
}

# Stop all automation systems
stop_all_automation() {
    log "INFO" "🛑 Stopping all PM2 automation systems..."
    
    # Stop development workflow
    node scripts/pm2-dev-workflow.js stop 2>/dev/null || true
    
    # Stop intelligent manager
    pkill -f "pm2-intelligent-manager.js" 2>/dev/null || true
    
    # Stop PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    log "INFO" "✅ All automation systems stopped!"
}

# Restart all automation systems
restart_all_automation() {
    log "INFO" "🔄 Restarting all PM2 automation systems..."
    stop_all_automation
    sleep 2
    start_all_automation
}

# Show comprehensive status
show_status() {
    log "INFO" "📊 Showing comprehensive automation status..."
    
    echo -e "\n${CYAN}=== PM2 Process Status ===${NC}"
    pm2 status
    
    echo -e "\n${CYAN}=== System Resources ===${NC}"
    check_system_resources
    
    echo -e "\n${CYAN}=== Automation Logs ===${NC}"
    if [[ -d "$LOG_DIR" ]]; then
        echo "Recent log files:"
        ls -la "$LOG_DIR"/*.log 2>/dev/null | head -5 || echo "No log files found"
    fi
    
    echo -e "\n${CYAN}=== Recent Backups ===${NC}"
    if [[ -d "$BACKUP_DIR" ]]; then
        echo "Recent backups:"
        ls -la "$BACKUP_DIR"/*/ 2>/dev/null | head -3 || echo "No backups found"
    fi
}

# Run health check
run_health_check() {
    log "INFO" "🔍 Running comprehensive health check..."
    
    # Run PM2 intelligent manager health check
    if [[ -f "$PROJECT_ROOT/scripts/pm2-intelligent-manager.js" ]]; then
        node scripts/pm2-intelligent-manager.js health
    fi
    
    # Run development workflow quality check
    if [[ -f "$PROJECT_ROOT/scripts/pm2-dev-workflow.js" ]]; then
        node scripts/pm2-dev-workflow.js quality
    fi
    
    # Check PM2 process health
    local unhealthy_processes=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status != "online") | .name' 2>/dev/null || echo "")
    
    if [[ -n "$unhealthy_processes" ]]; then
        log "WARN" "Unhealthy processes detected:"
        echo "$unhealthy_processes"
    else
        log "INFO" "✅ All PM2 processes are healthy!"
    fi
}

# Run optimization
run_optimization() {
    log "INFO" "🚀 Running automatic optimization..."
    
    if [[ -f "$PROJECT_ROOT/scripts/pm2-intelligent-manager.js" ]]; then
        node scripts/pm2-intelligent-manager.js optimize
    else
        log "ERROR" "PM2 Intelligent Manager not found"
    fi
}

# Generate comprehensive report
generate_report() {
    log "INFO" "📊 Generating comprehensive automation report..."
    
    local report_file="$LOG_DIR/automation-report-$(date +%Y%m%d-%H%M%S).json"
    
    # Collect PM2 status
    local pm2_status=$(pm2 jlist 2>/dev/null || echo "[]")
    
    # Collect system info
    local system_info=$(cat <<EOF
{
  "timestamp": "$(date -Iseconds)",
  "system": {
    "memory": "$(free -h | grep Mem | awk '{print $2 " / " $3}')",
    "disk": "$(df -h / | tail -1 | awk '{print $5}')",
    "load": "$(uptime | awk -F'load average:' '{print $2}')"
  },
  "pm2": {
    "processes": $(echo "$pm2_status" | jq 'length'),
    "online": $(echo "$pm2_status" | jq '[.[] | select(.pm2_env.status == "online")] | length'),
    "offline": $(echo "$pm2_status" | jq '[.[] | select(.pm2_env.status != "online")] | length')
  }
}
EOF
)
    
    echo "$system_info" > "$report_file"
    log "INFO" "Report generated: $report_file"
}

# Create backup
create_backup() {
    log "INFO" "💾 Creating system backup..."
    
    local backup_name="pm2-backup-$(date +%Y%m%d-%H%M%S)"
    local backup_path="$BACKUP_DIR/$backup_name"
    
    mkdir -p "$backup_path"
    
    # Backup PM2 processes
    pm2 save > "$backup_path/pm2-save.txt" 2>/dev/null || true
    
    # Backup ecosystem config
    cp "$ECOSYSTEM_FILE" "$backup_path/" 2>/dev/null || true
    
    # Backup logs
    if [[ -d "$LOG_DIR" ]]; then
        cp -r "$LOG_DIR" "$backup_path/" 2>/dev/null || true
    fi
    
    # Backup package files
    cp "$PROJECT_ROOT/package.json" "$backup_path/" 2>/dev/null || true
    cp "$PROJECT_ROOT/package-lock.json" "$backup_path/" 2>/dev/null || true
    
    log "INFO" "✅ Backup created: $backup_path"
}

# Cleanup old files
cleanup_old_files() {
    log "INFO" "🧹 Cleaning up old files..."
    
    # Clean PM2 logs
    pm2 flush 2>/dev/null || true
    
    # Clean old automation logs (older than 7 days)
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    # Clean old backups (keep last 10)
    if [[ -d "$BACKUP_DIR" ]]; then
        cd "$BACKUP_DIR"
        ls -t | tail -n +11 | xargs -r rm -rf 2>/dev/null || true
    fi
    
    log "INFO" "✅ Cleanup completed!"
}

# Show help
show_help() {
    echo -e "${CYAN}PM2 Intelligent Automation Launcher${NC}"
    echo "Advanced process management and development workflow automation"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo -e "  ${GREEN}start${NC}     - Start all automation systems"
    echo -e "  ${GREEN}stop${NC}      - Stop all automation systems"
    echo -e "  ${GREEN}restart${NC}   - Restart all automation systems"
    echo -e "  ${GREEN}status${NC}    - Show comprehensive status"
    echo -e "  ${GREEN}health${NC}    - Run health check"
    echo -e "  ${GREEN}optimize${NC}  - Run automatic optimization"
    echo -e "  ${GREEN}report${NC}    - Generate comprehensive report"
    echo -e "  ${GREEN}backup${NC}    - Create system backup"
    echo -e "  ${GREEN}cleanup${NC}   - Clean up old files"
    echo -e "  ${GREEN}help${NC}      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start all automation"
    echo "  $0 status         # Show current status"
    echo "  $0 health         # Run health check"
    echo "  $0 optimize       # Run optimization"
    echo ""
    echo "For more information, check the automation logs in: $LOG_DIR"
}

# Main function
main() {
    local command="${1:-help}"
    
    # Check prerequisites
    check_pm2
    check_ecosystem
    
    case "$command" in
        "start")
            start_all_automation
            ;;
        "stop")
            stop_all_automation
            ;;
        "restart")
            restart_all_automation
            ;;
        "status")
            show_status
            ;;
        "health")
            run_health_check
            ;;
        "optimize")
            run_optimization
            ;;
        "report")
            generate_report
            ;;
        "backup")
            create_backup
            ;;
        "cleanup")
            cleanup_old_files
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Handle signals
trap 'log "INFO" "Received interrupt signal, shutting down..."; exit 0' INT TERM

# Run main function
main "$@"