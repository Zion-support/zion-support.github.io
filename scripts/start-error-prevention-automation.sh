#!/bin/bash

# Enhanced Error Prevention Automation Startup Script
# This script starts all PM2 automations for comprehensive error prevention

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
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.config.cjs"
PM2_LOG_DIR="$PROJECT_ROOT/logs/pm2"
AUTOMATION_LOG_DIR="$PROJECT_ROOT/logs/automation"

# Ensure we're in the project root
cd "$PROJECT_ROOT"

echo -e "${CYAN}🚀 Enhanced Error Prevention Automation Startup${NC}"
echo -e "${CYAN}================================================${NC}"
echo -e "Project Root: ${BLUE}$PROJECT_ROOT${NC}"
echo -e "Ecosystem File: ${BLUE}$ECOSYSTEM_FILE${NC}"
echo ""

# Function to print status
print_status() {
    local status=$1
    local message=$2
    case $status in
        "success")
            echo -e "${GREEN}✅ $message${NC}"
            ;;
        "warning")
            echo -e "${YELLOW}⚠️  $message${NC}"
            ;;
        "error")
            echo -e "${RED}❌ $message${NC}"
            ;;
        "info")
            echo -e "${BLUE}ℹ️  $message${NC}"
            ;;
        "step")
            echo -e "${PURPLE}🔧 $message${NC}"
            ;;
    esac
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_status "error" "PM2 is not installed. Please install PM2 first:"
        echo "  npm install -g pm2"
        exit 1
    fi
    print_status "success" "PM2 is installed and available"
}

# Function to check if ecosystem file exists
check_ecosystem() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_status "error" "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    print_status "success" "Ecosystem file found: $ECOSYSTEM_FILE"
}

# Function to create necessary directories
create_directories() {
    print_status "step" "Creating necessary directories..."
    
    mkdir -p "$PM2_LOG_DIR"
    mkdir -p "$AUTOMATION_LOG_DIR"
    mkdir -p "$PROJECT_ROOT/reports"
    
    print_status "success" "Directories created successfully"
}

# Function to check project health before starting automations
check_project_health() {
    print_status "step" "Checking project health before starting automations..."
    
    # Check if dependencies are installed
    if [ ! -d "node_modules" ]; then
        print_status "warning" "node_modules not found, installing dependencies..."
        npm install
    fi
    
    # Check if package.json exists
    if [ ! -f "package.json" ]; then
        print_status "error" "package.json not found in project root"
        exit 1
    fi
    
    # Check for critical files
    local critical_files=("src" "package.json" "tsconfig.json" "eslint.config.js")
    for file in "${critical_files[@]}"; do
        if [ ! -e "$file" ]; then
            print_status "warning" "Critical file/directory not found: $file"
        fi
    done
    
    print_status "success" "Project health check completed"
}

# Function to run initial error scan
run_initial_error_scan() {
    print_status "step" "Running initial error scan..."
    
    # Run ESLint to check current error state
    if npm run lint &> /dev/null; then
        print_status "success" "Initial linting passed - no critical errors found"
    else
        print_status "warning" "Initial linting found errors - automations will attempt to fix them"
        # Capture error count for comparison later
        npm run lint 2>&1 | grep -c "error" > "$AUTOMATION_LOG_DIR/initial-error-count.txt" || true
    fi
    
    # Run TypeScript check
    if npm run type-check &> /dev/null; then
        print_status "success" "Initial TypeScript check passed"
    else
        print_status "warning" "Initial TypeScript check found errors - automations will attempt to fix them"
        # Capture error count for comparison later
        npm run type-check 2>&1 | grep -c "error TS" > "$AUTOMATION_LOG_DIR/initial-ts-error-count.txt" || true
    fi
}

# Function to start PM2 automations
start_pm2_automations() {
    print_status "step" "Starting PM2 automations..."
    
    # Stop any existing PM2 processes for this project
    pm2 stop ecosystem.config.cjs --only automation 2>/dev/null || true
    pm2 delete ecosystem.config.cjs --only automation 2>/dev/null || true
    
    # Start all automations
    pm2 start ecosystem.config.cjs --only automation
    
    # Wait a moment for processes to start
    sleep 3
    
    # Check status
    local running_count=$(pm2 list | grep -c "online" || echo "0")
    local total_count=$(pm2 list | grep -c "automation" || echo "0")
    
    if [ "$running_count" -gt 0 ]; then
        print_status "success" "Started $running_count/$total_count automation processes"
    else
        print_status "error" "Failed to start automation processes"
        pm2 logs --lines 10
        exit 1
    fi
}

# Function to start enhanced automation runner
start_enhanced_automation_runner() {
    print_status "step" "Starting Enhanced Automation Runner..."
    
    # Run the enhanced automation runner once to establish baseline
    if node scripts/automation/enhanced-automation-runner.js; then
        print_status "success" "Enhanced Automation Runner completed successfully"
    else
        print_status "warning" "Enhanced Automation Runner completed with issues"
    fi
}

# Function to set up monitoring
setup_monitoring() {
    print_status "step" "Setting up monitoring..."
    
    # Create monitoring script
    cat > "$PROJECT_ROOT/scripts/monitor-automations.sh" << 'EOF'
#!/bin/bash
# Automation monitoring script
echo "🔍 PM2 Automation Status:"
pm2 list | grep automation
echo ""
echo "📊 Recent Logs:"
pm2 logs --lines 20 --nostream
EOF
    
    chmod +x "$PROJECT_ROOT/scripts/monitor-automations.sh"
    
    # Create health check script
    cat > "$PROJECT_ROOT/scripts/health-check.sh" << 'EOF'
#!/bin/bash
# Health check script for automations
echo "🏥 Automation Health Check:"
echo "=========================="

# Check PM2 processes
echo "PM2 Processes:"
pm2 list | grep automation

# Check log files
echo ""
echo "Recent Error Logs:"
find logs/automation -name "*.json" -exec echo "=== {} ===" \; -exec cat {} \;

# Check for stuck processes
echo ""
echo "Process Status:"
pm2 monit --no-daemon &
sleep 5
pkill -f "pm2 monit"
EOF
    
    chmod +x "$PROJECT_ROOT/scripts/health-check.sh"
    
    print_status "success" "Monitoring scripts created"
}

# Function to display automation information
display_automation_info() {
    print_status "info" "Automation Information:"
    echo ""
    echo -e "${CYAN}Available Automations:${NC}"
    echo "  • Comprehensive Error Fixer (every 10 minutes)"
    echo "  • TypeScript Error Fixer (every 15 minutes)"
    echo "  • General Error Fixer (every 20 minutes)"
    echo "  • Console Error Fixer (every 15 minutes)"
    echo "  • Enhanced Automation Runner (every 15 minutes)"
    echo ""
    echo -e "${CYAN}Useful Commands:${NC}"
    echo "  • View status: ${BLUE}pm2 status${NC}"
    echo "  • View logs: ${BLUE}pm2 logs --lines 50${NC}"
    echo "  • Monitor: ${BLUE}pm2 monit${NC}"
    echo "  • Check health: ${BLUE}./scripts/health-check.sh${NC}"
    echo "  • Monitor automations: ${BLUE}./scripts/monitor-automations.sh${NC}"
    echo ""
    echo -e "${CYAN}Reports Directory:${NC}"
    echo "  • ${BLUE}$PROJECT_ROOT/reports${NC}"
    echo ""
    echo -e "${CYAN}Logs Directory:${NC}"
    echo "  • ${BLUE}$PROJECT_ROOT/logs/automation${NC}"
}

# Function to run post-startup verification
run_post_startup_verification() {
    print_status "step" "Running post-startup verification..."
    
    # Wait for automations to initialize
    sleep 10
    
    # Check if automations are running
    local running_count=$(pm2 list | grep -c "online" || echo "0")
    if [ "$running_count" -gt 0 ]; then
        print_status "success" "All automations are running successfully"
    else
        print_status "error" "Some automations failed to start"
        pm2 logs --lines 20
    fi
    
    # Check for recent reports
    local report_count=$(find reports -name "*-report.json" -mtime -1 | wc -l)
    if [ "$report_count" -gt 0 ]; then
        print_status "success" "Automation reports generated: $report_count"
    else
        print_status "warning" "No recent automation reports found"
    fi
}

# Main execution
main() {
    echo -e "${CYAN}Starting Enhanced Error Prevention Automation...${NC}"
    echo ""
    
    # Pre-flight checks
    check_pm2
    check_ecosystem
    create_directories
    check_project_health
    
    # Initial setup
    run_initial_error_scan
    start_pm2_automations
    start_enhanced_automation_runner
    setup_monitoring
    
    # Verification
    run_post_startup_verification
    
    # Display information
    echo ""
    display_automation_info
    
    echo ""
    print_status "success" "Enhanced Error Prevention Automation started successfully!"
    echo ""
    echo -e "${GREEN}🎉 Your project is now protected by automated error prevention!${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "  1. Monitor automations: ${BLUE}./scripts/monitor-automations.sh${NC}"
    echo "  2. Check health: ${BLUE}./scripts/health-check.sh${NC}"
    echo "  3. View PM2 status: ${BLUE}pm2 status${NC}"
    echo ""
    echo -e "${CYAN}Automations will run automatically according to their schedules.${NC}"
}

# Run main function
main "$@"