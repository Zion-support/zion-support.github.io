#!/bin/bash

# Zion Tech Group - PM2 Intelligent Monitoring & Maintenance
# Advanced process monitoring with automatic maintenance capabilities

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
LOG_DIR="./logs"
PM2_CONFIG="ecosystem.config.js"
ALERT_THRESHOLD_CPU=80
ALERT_THRESHOLD_MEMORY=85
ALERT_THRESHOLD_RESTARTS=5
HEALTH_CHECK_INTERVAL=30
LOG_ROTATION_SIZE="100M"
MAX_LOG_FILES=10

echo -e "${BLUE}🔍 Zion Tech Group - PM2 Intelligent Monitor${NC}"
echo "=================================================="

# Function to check if PM2 is running
check_pm2_status() {
    if ! pm2 ping > /dev/null 2>&1; then
        echo -e "${RED}❌ PM2 daemon is not running${NC}"
        echo "Starting PM2 daemon..."
        pm2 resurrect || pm2 start ecosystem.config.js
    fi
}

# Function to get process statistics
get_process_stats() {
    local process_name=$1
    pm2 show "$process_name" --json 2>/dev/null | jq -r '.pm2_env | {name, status, pm_uptime, restart_time, cpu, memory, pm_id}' 2>/dev/null || echo "{}"
}

# Function to check process health
check_process_health() {
    local process_name=$1
    local stats=$(get_process_stats "$process_name")
    
    if [ "$stats" = "{}" ]; then
        echo -e "${RED}❌ Process $process_name not found${NC}"
        return 1
    fi
    
    local status=$(echo "$stats" | jq -r '.status // "unknown"')
    local restart_time=$(echo "$stats" | jq -r '.restart_time // 0')
    local cpu=$(echo "$stats" | jq -r '.cpu // 0')
    local memory=$(echo "$stats" | jq -r '.memory // 0')
    
    echo -e "${CYAN}📊 Process: $process_name${NC}"
    echo -e "  Status: $status"
    echo -e "  Restarts: $restart_time"
    echo -e "  CPU: ${cpu}%"
    echo -e "  Memory: ${memory}MB"
    
    # Check for issues
    if [ "$status" != "online" ]; then
        echo -e "${RED}  ⚠️  Process is not online${NC}"
        return 1
    fi
    
    if [ "$restart_time" -gt "$ALERT_THRESHOLD_RESTARTS" ]; then
        echo -e "${YELLOW}  ⚠️  High restart count${NC}"
    fi
    
    if (( $(echo "$cpu > $ALERT_THRESHOLD_CPU" | bc -l) )); then
        echo -e "${YELLOW}  ⚠️  High CPU usage${NC}"
    fi
    
    if (( $(echo "$memory > $ALERT_THRESHOLD_MEMORY" | bc -l) )); then
        echo -e "${YELLOW}  ⚠️  High memory usage${NC}"
    fi
    
    return 0
}

# Function to perform automatic maintenance
perform_maintenance() {
    echo -e "${BLUE}🔧 Performing automatic maintenance...${NC}"
    
    # Check for processes that need restart
    local processes=$(pm2 list --json | jq -r '.[] | select(.pm2_env.restart_time > 3) | .name' 2>/dev/null)
    
    if [ -n "$processes" ]; then
        echo -e "${YELLOW}🔄 Restarting processes with high restart count...${NC}"
        echo "$processes" | while read -r process; do
            if [ -n "$process" ]; then
                echo "Restarting $process..."
                pm2 restart "$process"
            fi
        done
    fi
    
    # Clean up old logs
    cleanup_logs
    
    # Check disk space
    check_disk_space
    
    echo -e "${GREEN}✅ Maintenance complete${NC}"
}

# Function to cleanup old logs
cleanup_logs() {
    echo -e "${BLUE}🧹 Cleaning up old logs...${NC}"
    
    # Rotate large log files
    find "$LOG_DIR" -name "*.log" -size +$LOG_ROTATION_SIZE -exec truncate -s 0 {} \; 2>/dev/null || true
    
    # Remove old log files (keep only MAX_LOG_FILES)
    if [ -d "$LOG_DIR" ]; then
        cd "$LOG_DIR"
        ls -t *.log 2>/dev/null | tail -n +$((MAX_LOG_FILES + 1)) | xargs rm -f 2>/dev/null || true
        cd - > /dev/null
    fi
    
    echo -e "${GREEN}✅ Log cleanup complete${NC}"
}

# Function to check disk space
check_disk_space() {
    local disk_usage=$(df . | awk 'NR==2 {print $5}' | sed 's/%//')
    
    if [ "$disk_usage" -gt 90 ]; then
        echo -e "${RED}⚠️  Disk usage is high: ${disk_usage}%${NC}"
        echo "Cleaning up temporary files..."
        
        # Clean npm cache
        npm cache clean --force 2>/dev/null || true
        
        # Clean build artifacts
        rm -rf node_modules/.cache 2>/dev/null || true
        rm -rf .next 2>/dev/null || true
        
        echo -e "${GREEN}✅ Disk cleanup complete${NC}"
    fi
}

# Function to monitor API endpoints
monitor_api_endpoints() {
    echo -e "${BLUE}🌐 Monitoring API endpoints...${NC}"
    
    local endpoints=("http://localhost:5000/api/health" "http://localhost:3000")
    
    for endpoint in "${endpoints[@]}"; do
        if curl -f -s "$endpoint" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ $endpoint is responding${NC}"
        else
            echo -e "${RED}❌ $endpoint is not responding${NC}"
        fi
    done
}

# Function to show real-time metrics
show_real_time_metrics() {
    echo -e "${BLUE}📈 Real-time Metrics${NC}"
    echo "=================="
    
    # Show PM2 status
    pm2 list
    
    # Show system resources
    echo -e "\n${CYAN}💻 System Resources${NC}"
    echo "=================="
    
    # CPU usage
    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    echo -e "CPU Usage: ${cpu_usage}%"
    
    # Memory usage
    local memory_info=$(free -m | awk 'NR==2{printf "Memory Usage: %s/%sMB (%.2f%%)\n", $3,$2,$3*100/$2 }')
    echo -e "$memory_info"
    
    # Disk usage
    local disk_usage=$(df -h . | awk 'NR==2{print $5}')
    echo -e "Disk Usage: $disk_usage"
    
    # Network connections
    local connections=$(netstat -an | grep :5000 | wc -l)
    echo -e "Active Connections (Port 5000): $connections"
}

# Function to generate health report
generate_health_report() {
    echo -e "${BLUE}📋 Generating Health Report...${NC}"
    
    local report_file="health-report-$(date +%Y%m%d-%H%M%S).txt"
    
    {
        echo "Zion Tech Group - PM2 Health Report"
        echo "Generated: $(date)"
        echo "=================================="
        echo ""
        
        echo "PM2 Status:"
        pm2 list
        echo ""
        
        echo "System Resources:"
        echo "CPU: $(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | awk -F'%' '{print $1}')%"
        echo "Memory: $(free -m | awk 'NR==2{printf "%s/%sMB (%.2f%%)", $3,$2,$3*100/$2 }')"
        echo "Disk: $(df -h . | awk 'NR==2{print $5}')"
        echo ""
        
        echo "Process Details:"
        pm2 show zion-frontend-dev 2>/dev/null || echo "Frontend process not found"
        echo ""
        pm2 show zion-backend-dev 2>/dev/null || echo "Backend process not found"
        echo ""
        
        echo "Recent Logs (last 10 lines):"
        echo "Frontend:"
        tail -n 10 "$LOG_DIR/frontend-error.log" 2>/dev/null || echo "No frontend error logs"
        echo ""
        echo "Backend:"
        tail -n 10 "$LOG_DIR/backend-error.log" 2>/dev/null || echo "No backend error logs"
        
    } > "$report_file"
    
    echo -e "${GREEN}✅ Health report saved to: $report_file${NC}"
}

# Function to setup monitoring
setup_monitoring() {
    echo -e "${BLUE}🔧 Setting up monitoring...${NC}"
    
    # Create logs directory if it doesn't exist
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
    fi
    
    # Setup log rotation
    if ! command -v logrotate &> /dev/null; then
        echo -e "${YELLOW}⚠️  logrotate not found, using basic log management${NC}"
    fi
    
    echo -e "${GREEN}✅ Monitoring setup complete${NC}"
}

# Function to show help
show_help() {
    echo -e "${BLUE}Zion Tech Group - PM2 Monitor Help${NC}"
    echo "=========================================="
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  -m, --monitor     Start continuous monitoring"
    echo "  -h, --health      Generate health report"
    echo "  -m, --maintenance Run automatic maintenance"
    echo "  -s, --status      Show current status"
    echo "  -a, --api         Monitor API endpoints"
    echo "  -r, --report      Generate detailed report"
    echo "  --help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 --monitor      # Start continuous monitoring"
    echo "  $0 --health       # Generate health report"
    echo "  $0 --maintenance  # Run maintenance tasks"
}

# Function to continuous monitoring
continuous_monitoring() {
    echo -e "${BLUE}🔄 Starting continuous monitoring...${NC}"
    echo "Press Ctrl+C to stop"
    echo ""
    
    while true; do
        clear
        show_real_time_metrics
        
        # Check process health
        echo -e "\n${CYAN}🔍 Process Health Check${NC}"
        echo "========================"
        check_process_health "zion-frontend-dev" || true
        check_process_health "zion-backend-dev" || true
        
        # Monitor API endpoints
        echo -e "\n${CYAN}🌐 API Health${NC}"
        echo "============="
        monitor_api_endpoints
        
        echo -e "\n${YELLOW}Next update in ${HEALTH_CHECK_INTERVAL} seconds...${NC}"
        sleep $HEALTH_CHECK_INTERVAL
    done
}

# Main execution
main() {
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}❌ PM2 is not installed${NC}"
        exit 1
    fi
    
    # Check if jq is available for JSON parsing
    if ! command -v jq &> /dev/null; then
        echo -e "${YELLOW}⚠️  jq not found, installing...${NC}"
        sudo apt-get update && sudo apt-get install -y jq || {
            echo -e "${RED}❌ Failed to install jq${NC}"
            exit 1
        }
    fi
    
    # Parse command line arguments
    case "${1:-}" in
        -m|--monitor)
            setup_monitoring
            continuous_monitoring
            ;;
        -h|--health)
            setup_monitoring
            check_pm2_status
            show_real_time_metrics
            ;;
        -m|--maintenance)
            setup_monitoring
            check_pm2_status
            perform_maintenance
            ;;
        -s|--status)
            check_pm2_status
            show_real_time_metrics
            ;;
        -a|--api)
            monitor_api_endpoints
            ;;
        -r|--report)
            setup_monitoring
            check_pm2_status
            generate_health_report
            ;;
        --help|-h)
            show_help
            ;;
        *)
            echo -e "${BLUE}🔍 Quick Status Check${NC}"
            echo "===================="
            check_pm2_status
            show_real_time_metrics
            echo ""
            echo -e "${YELLOW}Use '$0 --help' for more options${NC}"
            ;;
    esac
}

# Run main function
main "$@"