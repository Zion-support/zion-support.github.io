#!/bin/bash

# Intelligent PM2 Automation System Startup Script
# This script sets up and starts the entire intelligent PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT=$(pwd)
PM2_CONFIG="ecosystem.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
SCRIPTS_DIR="$PROJECT_ROOT/scripts"

echo -e "${BLUE}🚀 Starting Intelligent PM2 Automation System...${NC}"

# Function to print status messages
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Check if we're in the project directory
if [[ ! -f "$PM2_CONFIG" ]]; then
    print_error "PM2 ecosystem config not found. Please run this script from the project root."
    exit 1
fi

# Create necessary directories
print_info "Creating necessary directories..."
mkdir -p "$LOGS_DIR"
mkdir -p "$SCRIPTS_DIR/automation"

# Check and install PM2 if not present
if ! command -v pm2 &> /dev/null; then
    print_info "PM2 not found. Installing PM2 globally..."
    npm install -g pm2
    print_status "PM2 installed successfully"
else
    print_status "PM2 is already installed"
fi

# Check PM2 version
PM2_VERSION=$(pm2 --version)
print_info "PM2 version: $PM2_VERSION"

# Stop and delete any existing PM2 processes
print_info "Stopping and cleaning up existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
print_status "Existing processes cleaned up"

# Install PM2 modules
print_info "Installing PM2 modules..."
pm2 install pm2-logrotate
pm2 install pm2-server-monit

# Configure PM2 log rotation
print_info "Configuring PM2 log rotation..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
print_status "Log rotation configured"

# Start all processes from ecosystem config
print_info "Starting intelligent PM2 automation system..."
pm2 start "$PM2_CONFIG"

# Wait a moment for processes to start
sleep 3

# Check process status
print_info "Checking process status..."
pm2 list

# Save PM2 configuration
print_info "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
print_info "Setting up PM2 startup script..."
pm2 startup

# Create quick access scripts
print_info "Creating quick access scripts..."

# Status script
cat > "$SCRIPTS_DIR/pm2-intelligent-status.sh" << 'EOF'
#!/bin/bash
echo "🔍 Intelligent PM2 System Status"
echo "================================="
pm2 list
echo ""
echo "📊 Performance Summary:"
pm2 monit --no-daemon &
sleep 5
kill %1 2>/dev/null || true
EOF

# Monitor script
cat > "$SCRIPTS_DIR/pm2-intelligent-monitor.sh" << 'EOF'
#!/bin/bash
echo "📊 Opening PM2 Monitor..."
pm2 monit
EOF

# Logs script
cat > "$SCRIPTS_DIR/pm2-intelligent-logs.sh" << 'EOF'
#!/bin/bash
echo "📝 PM2 Logs"
echo "==========="
pm2 logs --lines 50
EOF

# Restart script
cat > "$SCRIPTS_DIR/pm2-intelligent-restart.sh" << 'EOF'
#!/bin/bash
echo "🔄 Restarting Intelligent PM2 System..."
pm2 restart all
echo "✅ All processes restarted"
EOF

# Stop script
cat > "$SCRIPTS_DIR/pm2-intelligent-stop.sh" << 'EOF'
#!/bin/bash
echo "🛑 Stopping Intelligent PM2 System..."
pm2 stop all
echo "✅ All processes stopped"
EOF

# Make scripts executable
chmod +x "$SCRIPTS_DIR"/pm2-intelligent-*.sh

print_status "Quick access scripts created"

# Create logs directory structure
print_info "Setting up logs directory structure..."
mkdir -p "$LOGS_DIR/automation"
mkdir -p "$LOGS_DIR/performance"
mkdir -p "$LOGS_DIR/builds"
mkdir -p "$LOGS_DIR/security"

# Create initial log files
touch "$LOGS_DIR/ai-code-analyzer.log"
touch "$LOGS_DIR/smart-build-optimizer.log"
touch "$LOGS_DIR/intelligent-dependency-manager.log"
touch "$LOGS_DIR/advanced-performance-monitor.log"

print_status "Logs directory structure created"

# Display system information
echo ""
echo -e "${BLUE}📋 Intelligent PM2 System Information${NC}"
echo "=============================================="
echo "Project Root: $PROJECT_ROOT"
echo "PM2 Config: $PM2_CONFIG"
echo "Logs Directory: $LOGS_DIR"
echo "Scripts Directory: $SCRIPTS_DIR"
echo ""

# Display process information
echo -e "${BLUE}🔄 Running Processes${NC}"
echo "======================"
pm2 list --no-daemon

echo ""
echo -e "${BLUE}📊 Quick Access Commands${NC}"
echo "=============================="
echo "Status:     ./scripts/pm2-intelligent-status.sh"
echo "Monitor:    ./scripts/pm2-intelligent-monitor.sh"
echo "Logs:       ./scripts/pm2-intelligent-logs.sh"
echo "Restart:    ./scripts/pm2-intelligent-restart.sh"
echo "Stop:       ./scripts/pm2-intelligent-stop.sh"
echo ""

# Display automation schedule
echo -e "${BLUE}⏰ Automation Schedule${NC}"
echo "========================"
echo "AI Code Analyzer:        Every 20 minutes"
echo "Smart Build Optimizer:    Every 4 hours"
echo "Dependency Manager:       Every 6 hours"
echo "Performance Monitor:      Every 2 minutes"
echo "Console Error Fixer:      Every 15 minutes"
echo "Link Checker:            Every 30 minutes"
echo "Security Audit:          Every 4 hours"
echo "Quality Checks:          Every 3 hours"
echo ""

# Test the system
print_info "Testing intelligent automation system..."

# Wait for processes to fully initialize
sleep 5

# Check if all processes are running
RUNNING_PROCESSES=$(pm2 list --no-daemon | grep "online" | wc -l)
TOTAL_PROCESSES=$(pm2 list --no-daemon | grep -v "┌\|├\|└\|─" | grep -v "^$" | wc -l)

if [[ $RUNNING_PROCESSES -eq $TOTAL_PROCESSES ]]; then
    print_status "All processes are running successfully"
else
    print_warning "Some processes may not be running properly"
    pm2 list
fi

echo ""
echo -e "${GREEN}🎉 Intelligent PM2 Automation System Started Successfully!${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Monitor the system: ./scripts/pm2-intelligent-monitor.sh"
echo "2. Check logs: ./scripts/pm2-intelligent-logs.sh"
echo "3. View status: ./scripts/pm2-intelligent-status.sh"
echo ""
echo -e "${YELLOW}The system will automatically:${NC}"
echo "• Analyze code quality every 20 minutes"
echo "• Optimize builds every 4 hours"
echo "• Manage dependencies every 6 hours"
echo "• Monitor performance every 2 minutes"
echo "• Fix console errors every 15 minutes"
echo "• Check links every 30 minutes"
echo "• Audit security every 4 hours"
echo "• Run quality checks every 3 hours"
echo ""
echo -e "${GREEN}Your development workflow is now powered by intelligent automation! 🚀${NC}"