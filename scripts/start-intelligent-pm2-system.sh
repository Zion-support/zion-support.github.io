#!/bin/bash

# Intelligent PM2 Automation System Startup Script
# Comprehensive automation system with AI-powered analysis and optimization

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="$PROJECT_ROOT/logs"
PM2_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"

# Core automation names
CORE_AUTOMATIONS=(
    "pm2-sync-automation"
    "pm2-sync-monitor"
)

# Enhanced automation names
ENHANCED_AUTOMATIONS=(
    "ci-automation"
    "security-automation"
    "test-automation"
    "link-checker-automation"
    "enhanced-testing"
    "enhanced-security"
    "enhanced-link-checker"
    "enhanced-ci-cd"
)

# NEW: Intelligent automation names
INTELLIGENT_AUTOMATIONS=(
    "ai-code-analyzer"
    "dependency-health-monitor"
    "smart-performance-optimizer"
)

# Master orchestrator
MASTER_ORCHESTRATOR="intelligent-workflow-orchestrator"

# Functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✓${NC} $1"
}

warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

error() {
    echo -e "${RED}✗${NC} $1"
}

info() {
    echo -e "${CYAN}ℹ${NC} $1"
}

highlight() {
    echo -e "${PURPLE}🔮${NC} $1"
}

check_dependencies() {
    log "Checking dependencies..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    # Check if git is installed
    if ! command -v git &> /dev/null; then
        error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    success "All dependencies are satisfied"
}

setup_environment() {
    log "Setting up environment..."
    
    # Create log directory
    mkdir -p "$LOG_DIR"
    
    # Create logs directory if it doesn't exist
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        success "Created log directory: $LOG_DIR"
    fi
    
    # Check if .env file exists
    if [ ! -f "$PROJECT_ROOT/.env" ]; then
        warning "No .env file found. Creating default .env file..."
        cat > "$PROJECT_ROOT/.env" << EOF
# Intelligent PM2 Automation Environment Variables
NODE_ENV=production
AUTOMATION_INTERVAL=30000
BUILD_INTERVAL=300000
TEST_INTERVAL=600000
SECURITY_INTERVAL=1800000
MONITOR_INTERVAL=60000
ANALYSIS_INTERVAL=300000
CHECK_INTERVAL=1800000
SECURITY_CHECK_INTERVAL=3600000
BUILD_ANALYSIS_INTERVAL=300000
EOF
        success "Created default .env file"
    fi
    
    # Install project dependencies
    if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
        log "Installing project dependencies..."
        cd "$PROJECT_ROOT"
        npm install
        success "Project dependencies installed"
    fi
    
    # Make automation scripts executable
    log "Setting up automation script permissions..."
    chmod +x "$PROJECT_ROOT/scripts/automation/"*.cjs
    success "Automation script permissions set"
}

setup_pm2_logrotate() {
    log "Setting up PM2 log rotation..."
    
    # Install pm2-logrotate if not already installed
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        success "PM2 logrotate installed"
    fi
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 7
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    
    success "PM2 log rotation configured"
}

start_intelligent_system() {
    log "Starting Intelligent PM2 Automation System..."
    
    # Stop any existing PM2 processes
    if pm2 list | grep -q "online"; then
        log "Stopping existing PM2 processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    # Start the PM2 system using ecosystem config
    log "Starting PM2 processes from ecosystem config..."
    pm2 start ecosystem.config.cjs
    
    # Wait for processes to start
    sleep 5
    
    # Verify core automations are running
    for automation in "${CORE_AUTOMATIONS[@]}"; do
        if pm2 list | grep -q "$automation.*online"; then
            success "$automation started successfully"
        else
            error "Failed to start $automation"
            pm2 logs "$automation" --lines 5
        fi
    done
    
    # Verify enhanced automations are running
    for automation in "${ENHANCED_AUTOMATIONS[@]}"; do
        if pm2 list | grep -q "$automation.*online"; then
            success "$automation started successfully"
        else
            warning "Failed to start $automation (may not be critical)"
        fi
    done
    
    # Verify intelligent automations are running
    for automation in "${INTELLIGENT_AUTOMATIONS[@]}"; do
        if pm2 list | grep -q "$automation.*online"; then
            success "$automation started successfully"
        else
            warning "Failed to start $automation (may not be critical)"
        fi
    done
    
    # Start master orchestrator separately
    log "Starting Master Workflow Orchestrator..."
    pm2 start "$PROJECT_ROOT/scripts/automation/intelligent-workflow-orchestrator.cjs" --name "$MASTER_ORCHESTRATOR"
    
    if pm2 list | grep -q "$MASTER_ORCHESTRATOR.*online"; then
        success "Master Workflow Orchestrator started successfully"
    else
        error "Failed to start Master Workflow Orchestrator"
        pm2 logs "$MASTER_ORCHESTRATOR" --lines 5
    fi
    
    success "Intelligent PM2 Automation System started successfully"
}

show_system_status() {
    log "Intelligent PM2 Automation System Status:"
    echo ""
    
    # Show PM2 process list
    pm2 list
    
    echo ""
    echo "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  PM2 Config: $PM2_CONFIG"
    echo "  Log Directory: $LOG_DIR"
    echo "  PM2 Version: $(pm2 --version)"
    echo ""
    
    # Show automation categories
    echo "Automation Categories:"
    echo "  🔧 Core Automations: ${#CORE_AUTOMATIONS[@]} processes"
    echo "  🚀 Enhanced Automations: ${#ENHANCED_AUTOMATIONS[@]} processes"
    echo "  🤖 Intelligent Automations: ${#INTELLIGENT_AUTOMATIONS[@]} processes"
    echo "  🎯 Master Orchestrator: 1 process"
    echo ""
    
    # Show recent logs
    echo "Recent System Activity:"
    pm2 logs --lines 3 --nostream
}

create_management_scripts() {
    log "Creating management scripts..."
    
    # Start script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-start.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 start ecosystem.config.cjs
pm2 start scripts/automation/intelligent-workflow-orchestrator.cjs --name intelligent-workflow-orchestrator
echo "Intelligent PM2 system started"
EOF

    # Stop script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-stop.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Intelligent PM2 system stopped"
EOF

    # Restart script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-restart.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 restart all
echo "Intelligent PM2 system restarted"
EOF

    # Status script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-status.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 list
echo ""
echo "System Health:"
if [ -f "logs/workflow-orchestration.json" ]; then
    cat logs/workflow-orchestration.json | jq -r '.summary' 2>/dev/null || echo "Report not available"
else
    echo "No orchestration report available"
fi
EOF

    # Logs script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-logs.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 logs
EOF

    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/intelligent-pm2-"*.sh
    
    success "Management scripts created"
}

show_usage_instructions() {
    echo ""
    echo "╔══════════════════════════════════════════════════════════════════════════════╗"
    echo "║                Intelligent PM2 Automation System                            ║"
    echo "║                                                                              ║"
    echo "║  🚀 System Started Successfully!                                            ║"
    echo "║                                                                              ║"
    echo "║  Available Commands:                                                        ║"
    echo "║    • View status: pm2 list                                                  ║"
    echo "║    • Monitor processes: pm2 monit                                           ║"
    echo "║    • View logs: pm2 logs                                                    ║"
    echo "║    • Restart system: pm2 restart all                                        ║"
    echo "║    • Stop system: pm2 stop all                                              ║"
    echo "║                                                                              ║"
    echo "║  Management Scripts:                                                         ║"
    echo "║    • Start: ./scripts/intelligent-pm2-start.sh                               ║"
    echo "║    • Stop: ./scripts/intelligent-pm2-stop.sh                                 ║"
    echo "║    • Restart: ./scripts/intelligent-pm2-restart.sh                           ║"
    echo "║    • Status: ./scripts/intelligent-pm2-status.sh                             ║"
    echo "║    • Logs: ./scripts/intelligent-pm2-logs.sh                                 ║"
    echo "║                                                                              ║"
    echo "║  Intelligent Features:                                                       ║"
    echo "║    • AI-Powered Code Quality Analysis                                        ║"
    echo "║    • Dependency Health Monitoring                                            ║"
    echo "║    • Smart Performance Optimization                                          ║"
    echo "║    • Cross-System Insights & Recommendations                                 ║"
    echo "║    • Automated Resource Allocation                                           ║"
    echo "║                                                                              ║"
    echo "║  Reports Location: logs/                                                     ║"
    echo "║    • workflow-orchestration.json - Master system report                      ║"
    echo "║    • ai-code-analysis.json - Code quality insights                           ║"
    echo "║    • dependency-health.json - Package health status                          ║"
    echo "║    • performance-analysis.json - Performance optimization data               ║"
    echo "║                                                                              ║"
    echo "╚══════════════════════════════════════════════════════════════════════════════╝"
    echo ""
    
    log "Use 'pm2 monit' to monitor the system in real-time"
    log "Use 'pm2 logs' to view system logs"
    log "Use './scripts/intelligent-pm2-status.sh' to check system health"
    log "Reports are generated in the logs/ directory"
}

stop_intelligent_system() {
    log "Stopping Intelligent PM2 Automation System..."
    
    pm2 stop all
    pm2 delete all
    success "Intelligent PM2 Automation System stopped"
}

restart_intelligent_system() {
    log "Restarting Intelligent PM2 Automation System..."
    
    pm2 restart all
    success "Intelligent PM2 Automation System restarted"
}

# Main execution
main() {
    echo "╔══════════════════════════════════════════════════════════════════════════════╗"
    echo "║                Intelligent PM2 Automation System                            ║"
    echo "║                                                                              ║"
    echo "║  🤖 AI-Powered Code Quality Analysis                                        ║"
    echo "║  📦 Intelligent Dependency Health Monitoring                                ║"
    echo "║  ⚡ Smart Performance Optimization                                           ║"
    echo "║  🎯 Cross-System Workflow Orchestration                                     ║"
    echo "║  🔒 Enhanced Security & Testing Automation                                  ║"
    echo "║                                                                              ║"
    echo "╚══════════════════════════════════════════════════════════════════════════════╝"
    echo ""
    
    log "Starting Intelligent PM2 Automation System setup..."
    
    # Check command line arguments
    case "${1:-start}" in
        "start")
            check_dependencies
            setup_environment
            setup_pm2_logrotate
            start_intelligent_system
            create_management_scripts
            show_system_status
            show_usage_instructions
            ;;
        "stop")
            stop_intelligent_system
            ;;
        "restart")
            restart_intelligent_system
            ;;
        "status")
            show_system_status
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status}"
            echo "  start   - Start the intelligent PM2 automation system"
            echo "  stop    - Stop all PM2 processes"
            echo "  restart - Restart all PM2 processes"
            echo "  status  - Show system status"
            exit 1
            ;;
    esac
}

# Run main function
main "$@"