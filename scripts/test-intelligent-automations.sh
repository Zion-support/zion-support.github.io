#!/bin/bash

# 🧠 Intelligent PM2 Automations Test Script
# This script allows you to test all the new intelligent PM2 automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project root
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Logging functions
log() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

info() {
    echo -e "${CYAN}[INFO]${NC} $1"
}

# Header
echo -e "${PURPLE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                Intelligent PM2 Automations                  ║"
echo "║                        Test Script                          ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check if we're in the right directory
if [[ ! -f "$PROJECT_ROOT/package.json" ]]; then
    error "This script must be run from the project root directory"
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check if PM2 is available
if ! command -v pm2 &> /dev/null; then
    warning "PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Function to test individual automation
test_automation() {
    local name="$1"
    local script="$2"
    local description="$3"
    
    log "Testing $name..."
    echo "Description: $description"
    echo "Script: $script"
    echo "----------------------------------------"
    
    if [[ -f "$script" ]]; then
        cd "$PROJECT_ROOT"
        
        # Create report directory if it doesn't exist
        local report_dir=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')"-reports"
        mkdir -p "$report_dir"
        
        # Run the automation
        if timeout 300 node "$script"; then
            success "$name completed successfully"
            
            # Check for reports
            if [[ -d "$report_dir" ]] && [[ "$(ls -A "$report_dir" 2>/dev/null)" ]]; then
                info "Reports generated in: $report_dir/"
                ls -la "$report_dir/" | head -5
            fi
        else
            error "$name failed or timed out"
        fi
        
        echo ""
    else
        error "Script not found: $script"
    fi
}

# Function to test all automations
test_all_automations() {
    log "Testing all intelligent PM2 automations..."
    echo ""
    
    # Test each automation
    test_automation "AI Code Quality Analyzer" \
        "scripts/automation/ai-code-quality-analyzer.cjs" \
        "Intelligent code analysis and quality improvement"
    
    test_automation "Smart Performance Optimizer" \
        "scripts/automation/smart-performance-optimizer.cjs" \
        "Build performance and bundle optimization"
    
    test_automation "Intelligent Dependency Manager" \
        "scripts/automation/intelligent-dependency-manager.cjs" \
        "Smart dependency management and updates"
    
    test_automation "Advanced Error Prediction" \
        "scripts/automation/advanced-error-prediction.cjs" \
        "Proactive error detection and prevention"
    
    test_automation "Smart Build Optimizer" \
        "scripts/automation/smart-build-optimizer.cjs" \
        "Build process optimization and configuration analysis"
    
    test_automation "Intelligent Resource Monitor" \
        "scripts/automation/intelligent-resource-monitor.cjs" \
        "Real-time system resource monitoring and alerting"
    
    success "All automation tests completed!"
}

# Function to start PM2 with all automations
start_pm2_automations() {
    log "Starting PM2 with all intelligent automations..."
    
    if [[ -f "$PROJECT_ROOT/ecosystem.config.cjs" ]]; then
        cd "$PROJECT_ROOT"
        
        # Stop any existing PM2 processes
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        
        # Start all automations
        pm2 start ecosystem.config.cjs
        
        # Show status
        pm2 list
        
        success "PM2 automations started successfully!"
        info "Use 'pm2 monit' to monitor all processes"
        info "Use 'pm2 logs' to view logs"
    else
        error "ecosystem.config.cjs not found"
        exit 1
    fi
}

# Function to show PM2 status
show_pm2_status() {
    log "PM2 Status:"
    pm2 list
    
    echo ""
    log "Resource Usage:"
    pm2 monit --no-daemon &
    sleep 5
    kill %1 2>/dev/null || true
}

# Function to show help
show_help() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  test-all          Test all intelligent automations individually"
    echo "  test-ai-quality   Test AI Code Quality Analyzer only"
    echo "  test-performance  Test Smart Performance Optimizer only"
    echo "  test-deps         Test Intelligent Dependency Manager only"
    echo "  test-errors       Test Advanced Error Prediction only"
    echo "  test-build        Test Smart Build Optimizer only"
    echo "  test-resources    Test Intelligent Resource Monitor only"
    echo "  start-pm2         Start PM2 with all automations"
    echo "  status            Show PM2 status and resource usage"
    echo "  help              Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 test-all           # Test all automations"
    echo "  $0 test-ai-quality    # Test only AI quality analyzer"
    echo "  $0 start-pm2          # Start PM2 with all automations"
    echo "  $0 status             # Show PM2 status"
}

# Main script logic
case "${1:-help}" in
    "test-all")
        test_all_automations
        ;;
    "test-ai-quality")
        test_automation "AI Code Quality Analyzer" \
            "scripts/automation/ai-code-quality-analyzer.cjs" \
            "Intelligent code analysis and quality improvement"
        ;;
    "test-performance")
        test_automation "Smart Performance Optimizer" \
            "scripts/automation/smart-performance-optimizer.cjs" \
            "Build performance and bundle optimization"
        ;;
    "test-deps")
        test_automation "Intelligent Dependency Manager" \
            "scripts/automation/intelligent-dependency-manager.cjs" \
            "Smart dependency management and updates"
        ;;
    "test-errors")
        test_automation "Advanced Error Prediction" \
            "scripts/automation/advanced-error-prediction.cjs" \
            "Proactive error detection and prevention"
        ;;
    "test-build")
        test_automation "Smart Build Optimizer" \
            "scripts/automation/smart-build-optimizer.cjs" \
            "Build process optimization and configuration analysis"
        ;;
    "test-resources")
        test_automation "Intelligent Resource Monitor" \
            "scripts/automation/intelligent-resource-monitor.cjs" \
            "Real-time system resource monitoring and alerting"
        ;;
    "start-pm2")
        start_pm2_automations
        ;;
    "status")
        show_pm2_status
        ;;
    "help"|*)
        show_help
        ;;
esac

echo ""
echo -e "${PURPLE}╔══════════════════════════════════════════════════════════════╗"
echo "║                    Test Script Complete                        ║"
echo "╚══════════════════════════════════════════════════════════════╝${NC}"