#!/bin/bash

# Zion Automation Controller
# Master script to control all automation services

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPORTS_DIR="$PROJECT_ROOT/reports"
PID_DIR="$REPORTS_DIR"
LOG_FILE="$REPORTS_DIR/controller.log"

# Service definitions
services_monitor="continuous-error-monitor.js --daemon"
services_health="health-check.sh"
services_scheduled="scheduled-error-capture.sh"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging function
log() {
    local message="$1"
    local level="${2:-INFO}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [CONTROLLER-$level] $message" | tee -a "$LOG_FILE"
}

# Function to get service status
get_service_status() {
    local service_name="$1"
    local pid_file="$PID_DIR/${service_name}.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "running"
        else
            echo "stopped"
        fi
    else
        echo "stopped"
    fi
}

# Function to start a service
start_service() {
    local service_name="$1"
    local service_command="$2"
    local pid_file="$PID_DIR/${service_name}.pid"
    
    log "Starting service: $service_name"
    
    # Check if already running
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "Service $service_name is already running (PID: $pid)" "WARN"
            return 0
        else
            # Remove stale PID file
            rm -f "$pid_file"
        fi
    fi
    
    # Start service
    cd "$SCRIPT_DIR"
    if [ -n "$service_command" ]; then
        if [[ "$service_command" == *".js" ]]; then
            # Node.js service
            nohup node $service_command > "$REPORTS_DIR/${service_name}.log" 2>&1 &
            local pid=$!
        else
            # Shell script service
            nohup $service_command > "$REPORTS_DIR/${service_name}.log" 2>&1 &
            local pid=$!
        fi
        
        # Wait a moment and check if process started
        sleep 2
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "$pid" > "$pid_file"
            log "Service $service_name started successfully (PID: $pid)" "INFO"
        else
            log "Failed to start service $service_name" "ERROR"
            return 1
        fi
    else
        log "No command specified for service $service_name" "ERROR"
        return 1
    fi
}

# Function to stop a service
stop_service() {
    local service_name="$1"
    local pid_file="$PID_DIR/${service_name}.pid"
    
    log "Stopping service: $service_name"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            sleep 1
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                kill -9 "$pid"
                sleep 1
            fi
            
            rm -f "$pid_file"
            log "Service $service_name stopped" "INFO"
        else
            log "Service $service_name was not running" "WARN"
            rm -f "$pid_file"
        fi
    else
        log "Service $service_name was not running" "WARN"
    fi
}

# Function to restart a service
restart_service() {
    local service_name="$1"
    log "Restarting service: $service_name"
    stop_service "$service_name"
    sleep 2
    
    case "$service_name" in
        "monitor")
            start_service "$service_name" "$services_monitor"
            ;;
        "health")
            start_service "$service_name" "$services_health"
            ;;
        "scheduled")
            start_service "$service_name" "$services_scheduled"
            ;;
        *)
            log "Unknown service: $service_name" "ERROR"
            return 1
            ;;
    esac
}

# Function to show status
show_status() {
    log "📊 Automation Services Status" "INFO"
    echo ""
    
    # Monitor service
    local monitor_status=$(get_service_status "monitor")
    local monitor_pid_file="$PID_DIR/monitor.pid"
    local monitor_pid="N/A"
    
    if [ "$monitor_status" = "running" ] && [ -f "$monitor_pid_file" ]; then
        monitor_pid=$(cat "$monitor_pid_file")
    fi
    
    case "$monitor_status" in
        "running")
            echo -e "  ${GREEN}●${NC} monitor: ${GREEN}RUNNING${NC} (PID: $monitor_pid)"
            ;;
        "stopped")
            echo -e "  ${RED}●${NC} monitor: ${RED}STOPPED${NC}"
            ;;
        *)
            echo -e "  ${YELLOW}●${NC} monitor: ${YELLOW}UNKNOWN${NC}"
            ;;
    esac
    
    # Health service
    local health_status=$(get_service_status "health")
    local health_pid_file="$PID_DIR/health.pid"
    local health_pid="N/A"
    
    if [ "$health_status" = "running" ] && [ -f "$health_pid_file" ]; then
        health_pid=$(cat "$health_pid_file")
    fi
    
    case "$health_status" in
        "running")
            echo -e "  ${GREEN}●${NC} health: ${GREEN}RUNNING${NC} (PID: $health_pid)"
            ;;
        "stopped")
            echo -e "  ${RED}●${NC} health: ${RED}STOPPED${NC}"
            ;;
        *)
            echo -e "  ${YELLOW}●${NC} health: ${YELLOW}UNKNOWN${NC}"
            ;;
    esac
    
    # Scheduled service
    echo -e "  ${CYAN}●${NC} scheduled: ${CYAN}CRON-BASED${NC}"
    
    echo ""
    
    # Show recent reports
    echo "Recent Reports:"
    if [ -d "$REPORTS_DIR" ]; then
        local reports=$(find "$REPORTS_DIR" -name "*.json" -type f -mtime -1 2>/dev/null | head -5)
        if [ -n "$reports" ]; then
            echo "$reports" | while read -r report; do
                local basename=$(basename "$report")
                echo "  📄 $basename"
            done
        else
            echo "  No recent reports"
        fi
    fi
    
    echo ""
    
    # Show recent logs
    echo "Recent Logs:"
    if [ -d "$REPORTS_DIR" ]; then
        local logs=$(find "$REPORTS_DIR" -name "*.log" -type f -mtime -1 2>/dev/null | head -5)
        if [ -n "$logs" ]; then
            echo "$logs" | while read -r log; do
                local basename=$(basename "$log")
                echo "  📝 $basename"
            done
        else
            echo "  No recent logs"
        fi
    fi
}

# Function to start all services
start_all() {
    log "🚀 Starting all automation services..." "INFO"
    
    start_service "monitor" "$services_monitor"
    start_service "health" "$services_health"
    start_service "scheduled" "$services_scheduled"
    
    log "✅ All services started" "INFO"
}

# Function to stop all services
stop_all() {
    log "🛑 Stopping all automation services..." "INFO"
    
    stop_service "monitor"
    stop_service "health"
    stop_service "scheduled"
    
    log "✅ All services stopped" "INFO"
}

# Function to restart all services
restart_all() {
    log "🔄 Restarting all automation services..." "INFO"
    
    restart_service "monitor"
    restart_service "health"
    restart_service "scheduled"
    
    log "✅ All services restarted" "INFO"
}

# Function to install cron jobs
install_cron() {
    log "📅 Installing cron jobs..." "INFO"
    
    # Create temporary crontab
    local temp_cron=$(mktemp)
    
    # Add Zion-specific cron jobs
    cat > "$temp_cron" << 'EOF'
# Zion Console Error Capture Cron Jobs
# Business hours: every 15 minutes
*/15 9-18 * * 1-5 /var/www/zion.app/automation/scheduled-error-capture.sh >> /var/www/zion.app/reports/cron.log 2>&1

# Off-hours: hourly
0 * * * * /var/www/zion.app/automation/scheduled-error-capture.sh >> /var/www/zion.app/reports/cron.log 2>&1

# Daily comprehensive capture at 2 AM
0 2 * * * /var/www/zion.app/automation/scheduled-error-capture.sh --comprehensive >> /var/www/zion.app/reports/cron.log 2>&1

# Weekly cleanup on Sundays
0 3 * * 0 find /var/www/zion.app/reports -name "*.json" -mtime +30 -delete >> /var/www/zion.app/reports/cleanup.log 2>&1
0 4 * * 0 find /var/www/zion.app/reports -name "*.log" -mtime +7 -exec gzip {} \; >> /var/www/zion.app/reports/cleanup.log 2>&1

# Health check every 30 minutes
*/30 * * * * /var/www/zion.app/automation/health-check.sh >> /var/www/zion.app/reports/health.log 2>&1
EOF

    # Install cron jobs
    if crontab "$temp_cron"; then
        log "✅ Cron jobs installed successfully" "INFO"
    else
        log "❌ Failed to install cron jobs" "ERROR"
        rm -f "$temp_cron"
        return 1
    fi
    
    rm -f "$temp_cron"
}

# Function to remove cron jobs
remove_cron() {
    log "🗑️  Removing Zion cron jobs..." "INFO"
    
    # Get current crontab
    local current_cron=$(crontab -l 2>/dev/null || echo "")
    
    if [ -n "$current_cron" ]; then
        # Remove Zion-specific lines
        local filtered_cron=$(echo "$current_cron" | grep -v "zion.app" | grep -v "Zion Console Error Capture")
        
        # Install filtered crontab
        if echo "$filtered_cron" | crontab -; then
            log "✅ Cron jobs removed successfully" "INFO"
        else
            log "❌ Failed to remove cron jobs" "ERROR"
            return 1
        fi
    else
        log "No cron jobs found to remove" "INFO"
    fi
}

# Function to show help
show_help() {
    echo -e "${BLUE}Zion Automation Controller${NC}"
    echo -e "${BLUE}========================${NC}"
    echo ""
    echo "Usage: $0 [command] [service]"
    echo ""
    echo "Commands:"
    echo "  start [service]     Start service(s)"
    echo "  stop [service]      Stop service(s)"
    echo "  restart [service]   Restart service(s)"
    echo "  status              Show service status"
    echo "  install-cron        Install cron jobs"
    echo "  remove-cron         Remove cron jobs"
    echo "  help                Show this help"
    echo ""
    echo "Services:"
    echo "  monitor             Continuous error monitor daemon"
    echo "  health              Health check service"
    echo "  scheduled           Scheduled error capture (cron)"
    echo "  all                 All services"
    echo ""
    echo "Examples:"
    echo "  $0 start all              # Start all services"
    echo "  $0 start monitor          # Start monitor service"
    echo "  $0 status                 # Show status"
    echo "  $0 install-cron           # Install cron jobs"
}

# Main execution
main() {
    local command="$1"
    local service="$2"
    
    # Ensure reports directory exists
    mkdir -p "$REPORTS_DIR"
    
    case "$command" in
        "start")
            if [ -z "$service" ] || [ "$service" = "all" ]; then
                start_all
            else
                case "$service" in
                    "monitor")
                        start_service "$service" "$services_monitor"
                        ;;
                    "health")
                        start_service "$service" "$services_health"
                        ;;
                    "scheduled")
                        start_service "$service" "$services_scheduled"
                        ;;
                    *)
                        log "Unknown service: $service" "ERROR"
                        exit 1
                        ;;
                esac
            fi
            ;;
            
        "stop")
            if [ -z "$service" ] || [ "$service" = "all" ]; then
                stop_all
            else
                case "$service" in
                    "monitor"|"health"|"scheduled")
                        stop_service "$service"
                        ;;
                    *)
                        log "Unknown service: $service" "ERROR"
                        exit 1
                        ;;
                esac
            fi
            ;;
            
        "restart")
            if [ -z "$service" ] || [ "$service" = "all" ]; then
                restart_all
            else
                case "$service" in
                    "monitor"|"health"|"scheduled")
                        restart_service "$service"
                        ;;
                    *)
                        log "Unknown service: $service" "ERROR"
                        exit 1
                        ;;
                esac
            fi
            ;;
            
        "status")
            show_status
            ;;
            
        "install-cron")
            install_cron
            ;;
            
        "remove-cron")
            remove_cron
            ;;
            
        "help"|"--help"|"-h")
            show_help
            ;;
            
        *)
            log "Unknown command: $command" "ERROR"
            show_help
            exit 1
            ;;
    esac
}

# Handle signals
trap 'log "Received interrupt signal, shutting down..." "WARN"; exit 0' INT TERM

# Run main function
main "$@"
