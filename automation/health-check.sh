#!/bin/bash

# Zion Automation Health Check Script
# Monitors the health of all automation components

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPORTS_DIR="$PROJECT_ROOT/reports"
PID_DIR="$REPORTS_DIR"
LOG_FILE="$REPORTS_DIR/health.log"
STATUS_FILE="$REPORTS_DIR/health-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Health check status
health_overall="healthy"
health_monitor_daemon="unknown"
health_reports_directory="unknown"
health_dependencies="unknown"
health_disk_space="unknown"
health_memory_usage="unknown"
health_log_files="unknown"

# Logging function
log() {
    local message="$1"
    local level="${2:-INFO}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Check monitor daemon status
check_monitor_daemon() {
    local pid_file="$PID_DIR/monitor.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            health_monitor_daemon="healthy"
            log "Monitor daemon is running (PID: $pid)" "INFO"
        else
            health_monitor_daemon="unhealthy"
            log "Monitor daemon PID file exists but process is not running" "WARN"
            rm -f "$pid_file"
        fi
    else
        health_monitor_daemon="unknown"
        log "Monitor daemon PID file not found" "WARN"
    fi
}

# Check reports directory
check_reports_directory() {
    if [ -d "$REPORTS_DIR" ]; then
        health_reports_directory="healthy"
        log "Reports directory exists and is accessible" "INFO"
    else
        health_reports_directory="unhealthy"
        log "Reports directory does not exist or is not accessible" "ERROR"
        health_overall="unhealthy"
    fi
}

# Check dependencies
check_dependencies() {
    if command -v node > /dev/null 2>&1; then
        health_dependencies="healthy"
        log "Node.js is available" "INFO"
    else
        health_dependencies="unhealthy"
        log "Node.js is not available" "ERROR"
        health_overall="unhealthy"
    fi
}

# Check disk space
check_disk_space() {
    local available_space=$(df "$PROJECT_ROOT" | awk 'NR==2 {print $4}')
    local available_mb=$((available_space / 1024))
    
    if [ "$available_mb" -gt 1000 ]; then
        health_disk_space="healthy"
        log "Sufficient disk space available (${available_mb}MB)" "INFO"
    else
        health_disk_space="unhealthy"
        log "Low disk space (${available_mb}MB)" "WARN"
        health_overall="unhealthy"
    fi
}

# Check memory usage
check_memory_usage() {
    if command -v free > /dev/null 2>&1; then
        local available_mem=$(free -m | awk 'NR==2 {print $7}')
        if [ "$available_mem" -gt 500 ]; then
            health_memory_usage="healthy"
            log "Sufficient memory available (${available_mem}MB)" "INFO"
        else
            health_memory_usage="unhealthy"
            log "Low memory available (${available_mem}MB)" "WARN"
            health_overall="unhealthy"
        fi
    else
        health_memory_usage="unknown"
        log "Cannot check memory usage (free command not available)" "WARN"
    fi
}

# Check log files
check_log_files() {
    local log_files=("$REPORTS_DIR"/*.log)
    local total_size=0
    
    for log_file in "${log_files[@]}"; do
        if [ -f "$log_file" ]; then
            local size=$(stat -f%z "$log_file" 2>/dev/null || stat -c%s "$log_file" 2>/dev/null || echo 0)
            total_size=$((total_size + size))
        fi
    done
    
    local total_mb=$((total_size / 1024 / 1024))
    
    if [ "$total_mb" -lt 100 ]; then
        health_log_files="healthy"
        log "Log files are manageable (${total_mb}MB total)" "INFO"
    else
        health_log_files="unhealthy"
        log "Log files are large (${total_mb}MB total), consider cleanup" "WARN"
        health_overall="unhealthy"
    fi
}

# Generate health report
generate_health_report() {
    local timestamp=$(date -Iseconds)
    
    cat > "$STATUS_FILE" << EOF
{
  "timestamp": "$timestamp",
  "overall_status": "$health_overall",
  "components": {
    "monitor_daemon": "$health_monitor_daemon",
    "reports_directory": "$health_reports_directory",
    "dependencies": "$health_dependencies",
    "disk_space": "$health_disk_space",
    "memory_usage": "$health_memory_usage",
    "log_files": "$health_log_files"
  },
  "summary": {
    "healthy_components": 0,
    "unhealthy_components": 0,
    "unknown_components": 0
  }
}
EOF

    # Count components by status
    local healthy=0
    local unhealthy=0
    local unknown=0
    
    for status in "$health_monitor_daemon" "$health_reports_directory" "$health_dependencies" "$health_disk_space" "$health_memory_usage" "$health_log_files"; do
        case "$status" in
            "healthy") ((healthy++)) ;;
            "unhealthy") ((unhealthy++)) ;;
            *) ((unknown++)) ;;
        esac
    done
    
    # Update summary in JSON
    sed -i.bak "s/\"healthy_components\": 0/\"healthy_components\": $healthy/" "$STATUS_FILE"
    sed -i.bak "s/\"unhealthy_components\": 0/\"unhealthy_components\": $unhealthy/" "$STATUS_FILE"
    sed -i.bak "s/\"unknown_components\": 0/\"unknown_components\": $unknown/" "$STATUS_FILE"
    rm -f "$STATUS_FILE.bak"
    
    log "Health report generated: $STATUS_FILE" "INFO"
    
    # Display summary
    echo ""
    echo -e "${BLUE}📊 Health Check Summary${NC}"
    echo -e "  Overall Status: ${health_overall == "healthy" ? GREEN : RED}${health_overall^^}${NC}"
    echo -e "  Healthy: ${GREEN}$healthy${NC}"
    echo -e "  Unhealthy: ${RED}$unhealthy${NC}"
    echo -e "  Unknown: ${YELLOW}$unknown${NC}"
    echo ""
    
    # Alert if unhealthy
    if [ "$health_overall" != "healthy" ]; then
        log "⚠️  System health issues detected!" "WARN"
        exit 1
    else
        log "✅ All systems healthy" "INFO"
        exit 0
    fi
}

# Main function
main() {
    log "🔍 Starting health check..." "INFO"
    
    # Ensure reports directory exists
    mkdir -p "$REPORTS_DIR"
    
    # Run all health checks
    check_monitor_daemon
    check_reports_directory
    check_dependencies
    check_disk_space
    check_memory_usage
    check_log_files
    
    # Generate and display report
    generate_health_report
}

# Run main function
main "$@"
