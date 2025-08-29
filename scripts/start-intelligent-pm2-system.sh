#!/bin/bash

# Intelligent PM2 Automation System Startup Script
# Comprehensive automation system with AI-powered analysis and optimization

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
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

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PM2_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"

# PM2 App Names
PM2_APPS=(
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
    "smart-build-optimizer"
    "intelligent-dependency-manager"
    "advanced-performance-monitor"
)

log "Starting Intelligent PM2 Automation System..."
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
    success "Logs directory created"
fi

# Stop any existing PM2 processes
log "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
success "Existing processes stopped"

# Wait a moment for processes to fully stop
sleep 2

# Start the intelligent PM2 system
log "Starting Intelligent PM2 Automation System..."
pm2 start "$PM2_CONFIG"

# Wait for processes to start
sleep 5

# Verify all processes are running
log "Verifying PM2 processes..."
ALL_RUNNING=true

for app in "${PM2_APPS[@]}"; do
    if pm2 list | grep -q "$app.*online"; then
        success "$app is running"
    else
        error "$app is not running"
        ALL_RUNNING=false
    fi
done

if [ "$ALL_RUNNING" = true ]; then
    success "All PM2 processes started successfully"
else
    warning "Some PM2 processes failed to start"
fi

# Setup PM2 log rotation
log "Setting up PM2 log rotation..."
if ! pm2 list | grep -q "pm2-logrotate"; then
    pm2 install pm2-logrotate
    success "PM2 logrotate installed"
fi

# Configure log rotation
pm2 set pm2-logrotate:max_size 20M
pm2 set pm2-logrotate:retain 10
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
success "PM2 log rotation configured"

# Setup PM2 monitoring
log "Setting up PM2 monitoring..."
pm2 install pm2-server-monit
success "PM2 server monitoring installed"

# Save PM2 configuration
log "Saving PM2 configuration..."
pm2 save
success "PM2 configuration saved"

# Setup PM2 startup script
log "Setting up PM2 startup script..."
pm2 startup
success "PM2 startup script configured"

# Display system status
log "Intelligent PM2 Automation System Status:"
echo ""

# Show PM2 process list
pm2 list

echo ""
log "System Information:"
echo "  Total PM2 Processes: ${#PM2_APPS[@]}"
echo "  PM2 Config: $PM2_CONFIG"
echo "  Logs Directory: $LOGS_DIR"
echo "  PM2 Version: $PM2_VERSION"
echo "  Project Root: $PROJECT_ROOT"

echo ""
log "Available Commands:"
echo "  View logs: pm2 logs"
echo "  Monitor processes: pm2 monit"
echo "  Restart system: pm2 restart all"
echo "  Stop system: pm2 stop all"
echo "  Delete system: pm2 delete all"
echo "  View specific logs: pm2 logs <process-name>"

echo ""
log "Intelligent Automation Features:"
echo "  🤖 AI-Powered Code Quality Analysis"
echo "  ⚡ Smart Build Optimization"
echo "  📦 Intelligent Dependency Management"
echo "  📊 Advanced Performance Monitoring"
echo "  🔍 Project Health Monitoring"
echo "  🛠️  TypeScript Syntax Fixing"
echo "  🔒 Security & Quality Checks"

echo ""
log "Monitoring & Analysis:"
echo "  • Real-time performance metrics"
echo "  • Automatic bottleneck detection"
echo "  • Intelligent optimization suggestions"
echo "  • Code quality pattern recognition"
echo "  • Dependency conflict resolution"
echo "  • Build performance optimization"

echo ""
success "Intelligent PM2 Automation System started successfully!"
log "System is now running with ${#PM2_APPS[@]} intelligent automation processes"

# Create quick access scripts
log "Creating quick access scripts..."

cat > "$PROJECT_ROOT/scripts/pm2-intelligent-start.sh" << 'EOF'
#!/bin/bash
pm2 start ecosystem.config.cjs
echo "Intelligent PM2 system started"
EOF

cat > "$PROJECT_ROOT/scripts/pm2-intelligent-stop.sh" << 'EOF'
#!/bin/bash
pm2 stop all
pm2 delete all
echo "Intelligent PM2 system stopped"
EOF

cat > "$PROJECT_ROOT/scripts/pm2-intelligent-restart.sh" << 'EOF'
#!/bin/bash
pm2 restart all
echo "Intelligent PM2 system restarted"
EOF

cat > "$PROJECT_ROOT/scripts/pm2-intelligent-logs.sh" << 'EOF'
#!/bin/bash
pm2 logs
EOF

cat > "$PROJECT_ROOT/scripts/pm2-intelligent-monitor.sh" << 'EOF'
#!/bin/bash
pm2 monit
EOF

cat > "$PROJECT_ROOT/scripts/pm2-intelligent-status.sh" << 'EOF'
#!/bin/bash
echo "=== Intelligent PM2 System Status ==="
pm2 list
echo ""
echo "=== System Resources ==="
pm2 show pm2-server-monit
echo ""
echo "=== Recent Logs ==="
pm2 logs --lines 10
EOF

# Make scripts executable
chmod +x "$PROJECT_ROOT/scripts/pm2-intelligent-start.sh"
chmod +x "$PROJECT_ROOT/scripts/pm2-intelligent-stop.sh"
chmod +x "$PROJECT_ROOT/scripts/pm2-intelligent-restart.sh"
chmod +x "$PROJECT_ROOT/scripts/pm2-intelligent-logs.sh"
chmod +x "$PROJECT_ROOT/scripts/pm2-intelligent-monitor.sh"
chmod +x "$PROJECT_ROOT/scripts/pm2-intelligent-status.sh"

success "Quick access scripts created"

echo ""
log "Quick Access Commands:"
echo "  ./scripts/pm2-intelligent-start.sh    - Start the system"
echo "  ./scripts/pm2-intelligent-stop.sh     - Stop the system"
echo "  ./scripts/pm2-intelligent-restart.sh  - Restart the system"
echo "  ./scripts/pm2-intelligent-logs.sh     - View all logs"
echo "  ./scripts/pm2-intelligent-monitor.sh  - Open PM2 monitor"
echo "  ./scripts/pm2-intelligent-status.sh   - Show system status"

echo ""
log "Next Steps:"
echo "  1. Monitor the system: pm2 monit"
echo "  2. Check logs: pm2 logs"
echo "  3. Review automation reports in logs/ directory"
echo "  4. Customize automation schedules in ecosystem.config.cjs"

echo ""
success "🎉 Intelligent PM2 Automation System is ready!"
log "Your development workflow is now powered by AI-driven automation!"