#!/bin/bash

# Intelligent Enhanced PM2 Automation System Startup Script
# This script starts the complete intelligent PM2 automation ecosystem with advanced features

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INTELLIGENT_ECOSYSTEM="$PROJECT_ROOT/ecosystem.intelligent-enhanced.cjs"
ORIGINAL_ECOSYSTEM="$PROJECT_ROOT/ecosystem.config.cjs"
BACKUP_ECOSYSTEM="$PROJECT_ROOT/ecosystem.config.backup.$(date +%s).cjs"

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        info "PM2 is already installed: $(pm2 --version)"
    fi
}

# Check Node.js and npm versions
check_dependencies() {
    log "Checking dependencies..."
    
    # Check Node.js version
    NODE_VERSION=$(node --version)
    info "Node.js version: $NODE_VERSION"
    
    # Check npm version
    NPM_VERSION=$(npm --version)
    info "NPM version: $NPM_VERSION"
    
    # Check if required directories exist
    if [ ! -d "$PROJECT_ROOT/logs" ]; then
        log "Creating logs directory..."
        mkdir -p "$PROJECT_ROOT/logs"
    fi
    
    if [ ! -d "$PROJECT_ROOT/scripts/automation" ]; then
        log "Creating automation scripts directory..."
        mkdir -p "$PROJECT_ROOT/scripts/automation"
    fi
    
    success "Dependencies check completed"
}

# Backup original ecosystem
backup_original_ecosystem() {
    if [ -f "$ORIGINAL_ECOSYSTEM" ]; then
        log "Backing up original ecosystem configuration..."
        cp "$ORIGINAL_ECOSYSTEM" "$BACKUP_ECOSYSTEM"
        success "Original ecosystem backed up to: $BACKUP_ECOSYSTEM"
    fi
}

# Setup intelligent ecosystem
setup_intelligent_ecosystem() {
    if [ ! -f "$INTELLIGENT_ECOSYSTEM" ]; then
        error "Intelligent ecosystem configuration not found: $INTELLIGENT_ECOSYSTEM"
        exit 1
    fi
    
    log "Setting up intelligent PM2 ecosystem..."
    
    # Create logs directory structure
    mkdir -p "$PROJECT_ROOT/logs/automation"
    mkdir -p "$PROJECT_ROOT/logs/performance"
    mkdir -p "$PROJECT_ROOT/logs/security"
    mkdir -p "$PROJECT_ROOT/logs/deployment"
    mkdir -p "$PROJECT_ROOT/logs/ai-learning"
    
    # Set proper permissions
    chmod +x "$PROJECT_ROOT/scripts/automation/"*.cjs 2>/dev/null || true
    
    success "Intelligent ecosystem setup completed"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all
        pm2 delete all
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
}

# Start intelligent PM2 system
start_intelligent_system() {
    log "Starting Intelligent Enhanced PM2 Automation System..."
    
    # Start the intelligent ecosystem
    pm2 start "$INTELLIGENT_ECOSYSTEM"
    
    # Wait for processes to start
    sleep 8
    
    # Check if processes started successfully
    local failed_processes=()
    local running_processes=()
    
    while IFS= read -r line; do
        if [[ $line =~ ^[[:space:]]*([0-9]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+) ]]; then
            local id="${BASH_REMATCH[1]}"
            local name="${BASH_REMATCH[2]}"
            local status="${BASH_REMATCH[6]}"
            
            if [ "$status" = "online" ]; then
                running_processes+=("$name")
            else
                failed_processes+=("$name")
            fi
        fi
    done < <(pm2 list)
    
    # Report results
    if [ ${#running_processes[@]} -gt 0 ]; then
        success "Successfully started ${#running_processes[@]} intelligent processes:"
        for process in "${running_processes[@]}"; do
            echo "  - $process"
        done
    fi
    
    if [ ${#failed_processes[@]} -gt 0 ]; then
        warning "Failed to start ${#failed_processes[@]} processes:"
        for process in "${failed_processes[@]}"; do
            echo "  - $process"
        done
    fi
    
    return ${#failed_processes[@]}
}

# Setup PM2 logrotate with enhanced configuration
setup_pm2_logrotate() {
    log "Setting up enhanced PM2 log rotation..."
    
    # Install pm2-logrotate if not already installed
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        success "PM2 logrotate installed"
    fi
    
    # Configure enhanced log rotation
    pm2 set pm2-logrotate:max_size 50M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    pm2 set pm2-logrotate:workerInterval 30
    pm2 set pm2-logrotate:rotateInterval 0 0 * * *
    pm2 set pm2-logrotate:rotateModule true
    
    success "Enhanced PM2 log rotation configured"
}

# Setup PM2 monitoring with advanced features
setup_pm2_monitoring() {
    log "Setting up advanced PM2 monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    # Install additional PM2 modules
    pm2 install pm2-server-monit
    pm2 install pm2-webshell
    
    success "Advanced PM2 monitoring configured"
}

# Create intelligent management scripts
create_intelligent_management_scripts() {
    log "Creating intelligent management scripts..."
    
    # Enhanced start script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-start.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Start Script
cd "$(dirname "$0")/.."
pm2 start ecosystem.intelligent-enhanced.cjs
echo "Intelligent PM2 system started"
pm2 list
EOF
    
    # Enhanced stop script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-stop.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Stop Script
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Intelligent PM2 system stopped"
EOF
    
    # Enhanced restart script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-restart.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Restart Script
cd "$(dirname "$0")/.."
pm2 restart all
echo "Intelligent PM2 system restarted"
pm2 list
EOF
    
    # Enhanced logs script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-logs.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Logs Script
cd "$(dirname "$0")/.."
pm2 logs --lines 100
EOF
    
    # Enhanced monitor script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-monitor.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Monitor Script
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # AI Learning status script
    cat > "$PROJECT_ROOT/scripts/ai-learning-status.sh" << 'EOF'
#!/bin/bash
# AI Learning Status Script
cd "$(dirname "$0")/.."
echo "🤖 AI Learning Status"
echo "======"
if [ -f "logs/ai-learning-data.json" ]; then
    echo "Learning data file exists"
    echo "Last updated: $(jq -r '.lastUpdated' logs/ai-learning-data.json 2>/dev/null || echo 'Unknown')"
    echo "Patterns learned: $(jq -r '.patterns | keys | length' logs/ai-learning-data.json 2>/dev/null || echo '0')"
else
    echo "No learning data found"
fi
EOF
    
    # Deployment status script
    cat > "$PROJECT_ROOT/scripts/deployment-status.sh" << 'EOF'
#!/bin/bash
# Deployment Status Script
cd "$(dirname "$0")/.."
echo "🚀 Deployment Status"
echo "====="
if [ -f "logs/deployment-data.json" ]; then
    echo "Deployment data file exists"
    echo "Last deployment: $(jq -r '.lastDeployment.timestamp' logs/deployment-data.json 2>/dev/null || echo 'Unknown')"
    echo "Total deployments: $(jq -r '.deployments | length' logs/deployment-data.json 2>/dev/null || echo '0')"
    echo "Successful deployments: $(jq -r '.deployments | map(select(.success == true)) | length' logs/deployment-data.json 2>/dev/null || echo '0')"
else
    echo "No deployment data found"
fi
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/intelligent-pm2-"*.sh
    chmod +x "$PROJECT_ROOT/scripts/ai-learning-status.sh"
    chmod +x "$PROJECT_ROOT/scripts/deployment-status.sh"
    
    success "Intelligent management scripts created"
}

# Display intelligent system status
display_intelligent_system_status() {
    log "Intelligent Enhanced PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Intelligent Ecosystem: $INTELLIGENT_ECOSYSTEM"
    echo "  Original Ecosystem: $ORIGINAL_ECOSYSTEM"
    echo "  Backup Ecosystem: $BACKUP_ECOSYSTEM"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    
    echo
    info "Available Commands:"
    echo "  View logs: pm2 logs"
    echo "  Monitor processes: pm2 monit"
    echo "  Restart system: pm2 restart all"
    echo "  Stop system: pm2 stop all"
    echo "  Delete system: pm2 delete all"
    echo "  Save configuration: pm2 save"
    echo "  Setup startup: pm2 startup"
    
    echo
    info "Intelligent Management Scripts:"
    echo "  Start: ./scripts/intelligent-pm2-start.sh"
    echo "  Stop: ./scripts/intelligent-pm2-stop.sh"
    echo "  Restart: ./scripts/intelligent-pm2-restart.sh"
    echo "  Logs: ./scripts/intelligent-pm2-logs.sh"
    echo "  Monitor: ./scripts/intelligent-pm2-monitor.sh"
    echo "  AI Status: ./scripts/ai-learning-status.sh"
    echo "  Deployment Status: ./scripts/deployment-status.sh"
    
    echo
    info "Log Files Location: $PROJECT_ROOT/logs/"
    echo "  - AI Code Analyzer: logs/ai-intelligent-code-analyzer.log"
    echo "  - Git Workflow: logs/intelligent-git-workflow.log"
    echo "  - Deployment: logs/smart-deployment-merge.log"
    echo "  - Performance: logs/advanced-performance-optimizer.log"
    echo "  - Security: logs/smart-security-automation.log"
    echo "  - Testing: logs/intelligent-testing-automation.log"
    echo "  - Monitoring: logs/advanced-monitoring-alerting.log"
    echo "  - And many more intelligent automations..."
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Intelligent Enhanced PM2 Automation System Startup${NC}"
    echo "==="
    echo
    
    # Check prerequisites
    check_pm2
    check_dependencies
    
    # Setup system
    backup_original_ecosystem
    setup_intelligent_ecosystem
    
    # Stop existing processes
    stop_existing_processes
    
    # Start intelligent system
    if start_intelligent_system; then
        success "Intelligent Enhanced PM2 system started successfully"
    else
        warning "Some processes failed to start. Check logs for details."
    fi
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_intelligent_management_scripts
    
    # Display status
    display_intelligent_system_status
    
    echo
    success "Intelligent Enhanced PM2 Automation System is now running!"
    echo
    info "🤖 AI-Powered Features:"
    echo "  - Intelligent code analysis and pattern recognition"
    echo "  - AI-powered conflict resolution"
    echo "  - Smart deployment decisions"
    echo "  - Predictive error prevention"
    echo "  - Learning from past deployments"
    echo
    info "🔄 Automated Workflows:"
    echo "  - Git workflow automation with smart merging"
    echo "  - Automated deployment with quality gates"
    echo "  - Continuous performance optimization"
    echo "  - Intelligent dependency management"
    echo "  - Smart security automation"
    echo
    info "📊 Monitoring & Analytics:"
    echo "  - Advanced performance monitoring"
    echo "  - Predictive alerting system"
    echo "  - Comprehensive health checks"
    echo "  - AI learning data tracking"
    echo "  - Deployment analytics"
    echo
    info "Next steps:"
    echo "  1. Monitor the system: pm2 monit"
    echo "  2. Check AI learning: ./scripts/ai-learning-status.sh"
    echo "  3. View deployment status: ./scripts/deployment-status.sh"
    echo "  4. Check logs: pm2 logs"
    echo "  5. Use intelligent management scripts in scripts/ directory"
    echo
    info "The system will automatically:"
    echo "  - Analyze code with AI and learn patterns"
    echo "  - Manage Git workflows intelligently"
    echo "  - Deploy with smart quality gates"
    echo "  - Optimize performance continuously"
    echo "  - Prevent errors proactively"
    echo "  - Monitor and alert intelligently"
    echo
}

# Run main function
main "$@"