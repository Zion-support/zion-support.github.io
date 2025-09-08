#!/bin/bash

# Enhanced PM2 Automation System Startup Script
# This script starts the complete intelligent PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PM2_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✓ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

error() {
    echo -e "${RED}✗ $1${NC}"
}

# Header
echo -e "${BLUE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                Enhanced PM2 Automation System               ║"
echo "║                    Intelligent Development                   ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

log "Starting Enhanced PM2 Automation System..."
log "Project Root: $PROJECT_ROOT"
log "PM2 Config: $PM2_CONFIG"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    warning "PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
    success "PM2 installed successfully"
fi

# Check PM2 version
PM2_VERSION=$(pm2 --version)
log "PM2 Version: $PM2_VERSION"

# Create logs directory
if [ ! -d "$LOGS_DIR" ]; then
    log "Creating logs directory..."
    mkdir -p "$LOGS_DIR"
    success "Logs directory created: $LOGS_DIR"
fi

# Stop any existing PM2 processes
if pm2 list | grep -q "online"; then
    log "Stopping existing PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    success "Existing PM2 processes stopped"
fi

# Install PM2 logrotate if not already installed
if ! pm2 list | grep -q "pm2-logrotate"; then
    log "Installing PM2 logrotate..."
    pm2 install pm2-logrotate
    success "PM2 logrotate installed"
    
    # Configure logrotate
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 7
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    success "PM2 log rotation configured"
fi

# Start the enhanced PM2 system
log "Starting Enhanced PM2 Automation System from ecosystem config..."
pm2 start "$PM2_CONFIG"

# Wait a moment for processes to start
sleep 5

# Verify all processes are running
log "Verifying PM2 processes status..."

# Check each automation process
declare -a processes=(
    "zion-app"
    "build-health-monitor"
    "code-quality-monitor"
    "dependency-monitor"
    "build-automation"
    "file-integrity-monitor"
    "project-health-monitor"
    "typescript-syntax-fixer"
    "dependency-manager"
    "project-health-dashboard"
    "ai-code-analyzer"
    "intelligent-build-optimizer"
    "smart-workflow-orchestrator"
)

all_running=true
for process in "${processes[@]}"; do
    if pm2 list | grep -q "$process.*online"; then
        success "$process is running"
    else
        error "$process is not running"
        all_running=false
    fi
done

if [ "$all_running" = true ]; then
    success "All PM2 automation processes are running successfully"
else
    warning "Some PM2 processes failed to start. Check logs for details."
fi

# Display system status
echo
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    System Status                            ${NC}"
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"

# Show PM2 process list
pm2 list

echo
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    System Information                       ${NC}"
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo "  Project Root: $PROJECT_ROOT"
echo "  PM2 Config: $PM2_CONFIG"
echo "  Logs Directory: $LOGS_DIR"
echo "  PM2 Version: $PM2_VERSION"
echo "  Total Processes: ${#processes[@]}"

echo
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    Available Commands                       ${NC}"
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo "  View logs: pm2 logs"
echo "  Monitor processes: pm2 monit"
echo "  Restart system: pm2 restart all"
echo "  Stop system: pm2 stop all"
echo "  Delete system: pm2 delete all"
echo "  View specific logs: pm2 logs <process-name>"
echo "  Restart specific process: pm2 restart <process-name>"

echo
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    New Intelligent Features                 ${NC}"
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo "  🤖 AI-Powered Code Quality Analyzer"
echo "     - ML-based code smell detection"
echo "     - Automatic refactoring suggestions"
echo "     - Performance bottleneck identification"
echo "     - Security vulnerability scanning"
echo
echo "  ⚡ Intelligent Build Optimizer"
echo "     - Dynamic bundle analysis and optimization"
echo "     - Automatic code splitting strategies"
echo "     - Tree shaking optimization"
echo "     - Build performance monitoring"
echo
echo "  🔄 Smart Development Workflow Orchestrator"
echo "     - Intelligent task scheduling and prioritization"
echo "     - Automated workflow execution"
echo "     - Context-aware task management"
echo "     - Team collaboration automation"

echo
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    Monitoring & Analytics                    ${NC}"
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo "  📊 Real-time performance monitoring"
echo "  📈 Automated workflow analytics"
echo "  🔍 Intelligent issue detection and resolution"
echo "  📋 Comprehensive reporting and recommendations"
echo "  🎯 Predictive maintenance and optimization"

echo
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}                    Next Steps                               ${NC}"
echo -e "${BLUE}══════════════════════════════════════════════════════════════${NC}"
echo "  1. Monitor system performance: pm2 monit"
echo "  2. Check automation logs: pm2 logs"
echo "  3. Review generated reports in logs/ directory"
echo "  4. Customize automation rules as needed"
echo "  5. Set up notifications for critical issues"

# Save startup script for easy access
cat > "$PROJECT_ROOT/scripts/enhanced-pm2-start.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 start ecosystem.config.cjs
EOF

cat > "$PROJECT_ROOT/scripts/enhanced-pm2-stop.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
EOF

cat > "$PROJECT_ROOT/scripts/enhanced-pm2-restart.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 restart all
EOF

cat > "$PROJECT_ROOT/scripts/enhanced-pm2-logs.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 logs
EOF

cat > "$PROJECT_ROOT/scripts/enhanced-pm2-monitor.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 monit
EOF

# Make scripts executable
chmod +x "$PROJECT_ROOT/scripts/enhanced-pm2-start.sh"
chmod +x "$PROJECT_ROOT/scripts/enhanced-pm2-stop.sh"
chmod +x "$PROJECT_ROOT/scripts/enhanced-pm2-restart.sh"
chmod +x "$PROJECT_ROOT/scripts/enhanced-pm2-logs.sh"
chmod +x "$PROJECT_ROOT/scripts/enhanced-pm2-monitor.sh"

success "Enhanced PM2 automation system startup scripts created"

echo
echo -e "${GREEN}🎉 Enhanced PM2 Automation System started successfully! 🎉${NC}"
echo
echo -e "${BLUE}The system is now running with ${#processes[@]} intelligent automation processes${NC}"
echo -e "${BLUE}that will continuously monitor, analyze, and optimize your development workflow.${NC}"
echo
echo -e "${YELLOW}Monitor the system with: pm2 monit${NC}"
echo -e "${YELLOW}View logs with: pm2 logs${NC}"
echo
echo -e "${BLUE}For more information, check the logs directory: $LOGS_DIR${NC}"