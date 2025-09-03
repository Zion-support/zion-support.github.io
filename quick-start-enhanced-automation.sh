#!/bin/bash

# Quick Start Enhanced PM2 Automation System
# This script quickly sets up and starts the enhanced automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${PURPLE}$1${NC}"
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

print_header "🚀 Quick Start Enhanced PM2 Automation System"
echo "========================================================"
echo

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    error "This script must be run from the project root directory"
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    info "Installing PM2 globally..."
    npm install -g pm2
    success "PM2 installed successfully"
else
    info "PM2 is already installed: $(pm2 --version)"
fi

# Check if ecosystem config exists
if [ ! -f "ecosystem.config.cjs" ]; then
    error "ecosystem.config.cjs not found. Please ensure the enhanced ecosystem configuration is in place."
    exit 1
fi

# Check if automation scripts exist
if [ ! -f "scripts/automation/git-automation-manager.cjs" ]; then
    error "Git automation manager not found. Please ensure all automation scripts are in place."
    exit 1
fi

# Create necessary directories
info "Setting up directories..."
mkdir -p logs reports backups quality-reports deployments
success "Directories created"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    info "Installing dependencies..."
    npm install --legacy-peer-deps
    success "Dependencies installed"
else
    info "Dependencies already installed"
fi

# Stop any existing PM2 processes
info "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
success "Existing processes stopped"

# Start the enhanced automation system
info "Starting enhanced PM2 automation system..."
pm2 start ecosystem.config.cjs

# Wait for processes to start
info "Waiting for processes to start..."
sleep 15

# Check system status
info "Checking system status..."
pm2 status

# Create management scripts
info "Creating management scripts..."

# Make the enhanced startup script executable
chmod +x start-enhanced-pm2-automation.sh

# Create quick access scripts
cat > quick-status.sh << 'EOF'
#!/bin/bash
echo "📊 Quick Status Check"
echo "===================="
pm2 status
echo ""
echo "🔍 Health Check:"
curl -s http://localhost:3000/health | jq . 2>/dev/null || echo "Health endpoint not accessible"
EOF

cat > quick-logs.sh << 'EOF'
#!/bin/bash
echo "📋 Recent Logs"
echo "=============="
echo ""
echo "🔍 Git Automation:"
pm2 logs git-automation-manager --lines 5 2>/dev/null || echo "No Git automation logs yet"
echo ""
echo "🎯 Code Quality:"
pm2 logs code-quality-automation --lines 5 2>/dev/null || echo "No quality automation logs yet"
echo ""
echo "🚀 Deployment Pipeline:"
pm2 logs intelligent-deployment-pipeline --lines 5 2>/dev/null || echo "No deployment logs yet"
EOF

cat > quick-restart.sh << 'EOF'
#!/bin/bash
echo "🔄 Quick Restart"
echo "================"
pm2 restart all
echo "✅ All processes restarted"
EOF

# Make scripts executable
chmod +x quick-*.sh

success "Management scripts created"

# Test health endpoints
info "Testing health endpoints..."
sleep 5

if curl -s http://localhost:3000/health > /dev/null 2>&1; then
    success "Health endpoint is accessible"
else
    warning "Health endpoint not accessible yet (may need more time to start)"
fi

# Display final status
echo
print_header "🎉 Enhanced PM2 Automation System is Running!"
echo "========================================================"
echo
success "Your enhanced automation system is now active!"
echo
info "Quick Commands:"
echo "  ./quick-status.sh          # Check system status"
echo "  ./quick-logs.sh            # View recent logs"
echo "  ./quick-restart.sh         # Restart all processes"
echo "  pm2 monit                  # Real-time monitoring"
echo "  pm2 logs                   # View all logs"
echo
info "Management Commands:"
echo "  ./start-enhanced-pm2-automation.sh  # Full system management"
echo "  ./check-automation.sh               # Detailed status"
echo "  ./automation-dashboard.sh           # Automation dashboard"
echo
info "Specialized Commands:"
echo "  ./git-automation.sh                 # Git automation info"
echo "  ./quality-automation.sh             # Code quality info"
echo "  ./view-logs.sh <process>            # View specific logs"
echo
info "Health Endpoints:"
echo "  http://localhost:3000/health              # Basic health"
echo "  http://localhost:3000/automation-status   # Automation status"
echo "  http://localhost:3000/quality-report      # Quality metrics"
echo
info "The system will automatically:"
echo "  ✅ Monitor and fix errors"
echo "  ✅ Manage Git operations"
echo "  ✅ Handle deployments intelligently"
echo "  ✅ Maintain code quality"
echo "  ✅ Optimize performance"
echo "  ✅ Monitor security"
echo "  ✅ Track repository health"
echo
info "Next Steps:"
echo "  1. Monitor the system: pm2 monit"
echo "  2. Check automation status: ./quick-status.sh"
echo "  3. View recent activity: ./quick-logs.sh"
echo "  4. Explore the dashboard: ./automation-dashboard.sh"
echo
success "🎯 Your development workflow is now fully automated!"
echo
info "For detailed documentation, see: ENHANCED-PM2-AUTOMATION-README.md"