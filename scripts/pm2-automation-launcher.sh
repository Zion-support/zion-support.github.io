#!/bin/bash

# PM2 Automation Launcher - Intelligent Automation Management
# This script provides comprehensive PM2 automation management with intelligent startup sequences

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.js"
PM2_MANAGER="$SCRIPT_DIR/pm2-intelligent-manager.js"
ENHANCED_ORCHESTRATOR="$AUTOMATION_DIR/pm2-enhanced-orchestrator.cjs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

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
        *) echo -e "${PURPLE}[$timestamp] [$level]${NC} $message" ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOGS_DIR/pm2-launcher.log"
}

# Check prerequisites
check_prerequisites() {
    log "INFO" "🔍 Checking prerequisites..."
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "❌ PM2 is not installed. Please install PM2 first:"
        log "ERROR" "   npm install -g pm2"
        exit 1
    fi
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "❌ Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if ecosystem config exists
    if [[ ! -f "$ECOSYSTEM_CONFIG" ]]; then
        log "ERROR" "❌ Ecosystem configuration not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Check if automation directory exists
    if [[ ! -d "$AUTOMATION_DIR" ]]; then
        log "ERROR" "❌ Automation directory not found: $AUTOMATION_DIR"
        exit 1
    fi
    
    # Create logs directory if it doesn't exist
    mkdir -p "$LOGS_DIR"
    
    log "INFO" "✅ All prerequisites satisfied"
}

# Install PM2 if not available
install_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "INFO" "📦 Installing PM2 globally..."
        npm install -g pm2
        
        if command -v pm2 &> /dev/null; then
            log "INFO" "✅ PM2 installed successfully"
        else
            log "ERROR" "❌ Failed to install PM2"
            exit 1
        fi
    else
        log "INFO" "✅ PM2 is already installed"
    fi
}

# Start PM2 ecosystem
start_ecosystem() {
    local env="${1:-production}"
    log "INFO" "🚀 Starting PM2 ecosystem in $env mode..."
    
    # Check if ecosystem is already running
    if pm2 list | grep -q "ecosystem"; then
        log "WARN" "⚠️ Ecosystem is already running, reloading instead..."
        pm2 reload ecosystem.config.js --env "$env"
    else
        pm2 start ecosystem.config.js --env "$env"
    fi
    
    if [[ $? -eq 0 ]]; then
        log "INFO" "✅ Ecosystem started successfully"
        
        # Wait a moment for processes to start
        sleep 3
        
        # Show status
        show_status
    else
        log "ERROR" "❌ Failed to start ecosystem"
        exit 1
    fi
}

# Stop PM2 ecosystem
stop_ecosystem() {
    log "INFO" "🛑 Stopping PM2 ecosystem..."
    
    if pm2 list | grep -q "ecosystem"; then
        pm2 stop ecosystem.config.js
        log "INFO" "✅ Ecosystem stopped successfully"
    else
        log "WARN" "⚠️ No ecosystem running to stop"
    fi
}

# Restart PM2 ecosystem
restart_ecosystem() {
    local env="${1:-production}"
    log "INFO" "🔄 Restarting PM2 ecosystem..."
    
    stop_ecosystem
    sleep 2
    start_ecosystem "$env"
}

# Show ecosystem status
show_status() {
    log "INFO" "📊 PM2 Ecosystem Status:"
    echo
    pm2 list
    echo
    
    # Show detailed status
    log "INFO" "📊 Detailed Status:"
    pm2 show ecosystem.config.js 2>/dev/null || true
}

# Run health check
run_health_check() {
    log "INFO" "🏥 Running health check..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" health
    else
        log "WARN" "⚠️ PM2 Manager not found, using basic health check"
        pm2 ping
        pm2 list
    fi
}

# Run performance analysis
run_performance_analysis() {
    log "INFO" "📊 Running performance analysis..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" performance
    else
        log "WARN" "⚠️ PM2 Manager not found, using basic performance check"
        pm2 monit --no-daemon &
        sleep 10
        pkill -f "pm2 monit" || true
    fi
}

# Start continuous monitoring
start_monitoring() {
    local interval="${1:-30000}"
    log "INFO" "👀 Starting continuous monitoring (${interval}ms intervals)..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" monitor "$interval"
    else
        log "WARN" "⚠️ PM2 Manager not found, using basic monitoring"
        pm2 monit
    fi
}

# Generate comprehensive report
generate_report() {
    log "INFO" "📊 Generating comprehensive report..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" report
    else
        log "WARN" "⚠️ PM2 Manager not found, generating basic report"
        
        local report_file="$LOGS_DIR/basic-report-$(date +%Y%m%d-%H%M%S).json"
        {
            echo "{"
            echo "  \"timestamp\": \"$(date -Iseconds)\","
            echo "  \"pm2_status\": \"$(pm2 ping 2>&1 | head -1)\","
            echo "  \"processes\": $(pm2 jlist 2>/dev/null || echo '[]'),"
            echo "  \"logs\": \"$(pm2 logs --lines 10 2>&1 | tail -10 | jq -R -s . 2>/dev/null || echo '[]')\""
            echo "}"
        } > "$report_file"
        
        log "INFO" "📊 Basic report generated: $report_file"
    fi
}

# Start enhanced orchestrator
start_orchestrator() {
    log "INFO" "🎭 Starting enhanced orchestrator..."
    
    if [[ -f "$ENHANCED_ORCHESTRATOR" ]]; then
        node "$ENHANCED_ORCHESTRATOR" monitor &
        local orchestrator_pid=$!
        echo "$orchestrator_pid" > "$LOGS_DIR/orchestrator.pid"
        log "INFO" "✅ Enhanced orchestrator started (PID: $orchestrator_pid)"
    else
        log "WARN" "⚠️ Enhanced orchestrator not found"
    fi
}

# Stop enhanced orchestrator
stop_orchestrator() {
    log "INFO" "🛑 Stopping enhanced orchestrator..."
    
    local pid_file="$LOGS_DIR/orchestrator.pid"
    if [[ -f "$pid_file" ]]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log "INFO" "✅ Enhanced orchestrator stopped (PID: $pid)"
        else
            log "WARN" "⚠️ Enhanced orchestrator process not found"
        fi
        rm -f "$pid_file"
    else
        log "WARN" "⚠️ No orchestrator PID file found"
    fi
}

# Cleanup function
cleanup() {
    log "INFO" "🧹 Running cleanup..."
    
    # Flush PM2 logs
    pm2 flush 2>/dev/null || true
    
    # Clean up old log files (keep last 7 days)
    find "$LOGS_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    log "INFO" "✅ Cleanup completed"
}

# Show help
show_help() {
    cat << EOF

🚀 PM2 Automation Launcher - Intelligent Automation Management

Usage: $0 [command] [options]

Commands:
  start [env]           - Start ecosystem (production|development)
  stop                  - Stop ecosystem
  restart [env]         - Restart ecosystem
  status                - Show ecosystem status
  health                - Run health check
  performance           - Run performance analysis
  monitor [interval]    - Start continuous monitoring
  report                - Generate comprehensive report
  orchestrator          - Start enhanced orchestrator
  stop-orchestrator     - Stop enhanced orchestrator
  cleanup               - Run cleanup operations
  install               - Install PM2 if not available
  help                  - Show this help

Environment Options:
  production            - Production environment (default)
  development           - Development environment

Examples:
  $0 start production
  $0 start development
  $0 monitor 60000
  $0 health
  $0 performance
  $0 orchestrator
  $0 cleanup

Features:
  ✅ Intelligent ecosystem management
  ✅ Environment-specific configurations
  ✅ Health monitoring and auto-recovery
  ✅ Performance analysis and optimization
  ✅ Enhanced orchestrator integration
  ✅ Comprehensive reporting
  ✅ Automatic cleanup and maintenance

EOF
}

# Main execution
main() {
    local command="$1"
    local option="$2"
    
    # Ensure we're in the project root
    cd "$PROJECT_ROOT"
    
    case "$command" in
        "start")
            check_prerequisites
            start_ecosystem "$option"
            ;;
        "stop")
            check_prerequisites
            stop_ecosystem
            ;;
        "restart")
            check_prerequisites
            restart_ecosystem "$option"
            ;;
        "status")
            check_prerequisites
            show_status
            ;;
        "health")
            check_prerequisites
            run_health_check
            ;;
        "performance")
            check_prerequisites
            run_performance_analysis
            ;;
        "monitor")
            check_prerequisites
            start_monitoring "$option"
            ;;
        "report")
            check_prerequisites
            generate_report
            ;;
        "orchestrator")
            check_prerequisites
            start_orchestrator
            ;;
        "stop-orchestrator")
            stop_orchestrator
            ;;
        "cleanup")
            check_prerequisites
            cleanup
            ;;
        "install")
            install_pm2
            ;;
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        *)
            log "ERROR" "❌ Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Handle script interruption
trap 'log "WARN" "🛑 Script interrupted"; exit 1' INT TERM

# Run main function with all arguments
main "$@"