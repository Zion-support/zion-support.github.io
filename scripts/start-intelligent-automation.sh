#!/bin/bash

# Intelligent PM2 Automation Quick Start Script
# This script provides easy management of the new intelligent PM2 automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"

# Function to print colored output
print_header() {
    echo -e "${BLUE}${1}${NC}"
}

print_success() {
    echo -e "${GREEN}✅ ${1}${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  ${1}${NC}"
}

print_error() {
    echo -e "${RED}❌ ${1}${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  ${1}${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_success "PM2 is installed"
}

# Function to check required Node.js packages
check_dependencies() {
    print_info "Checking required Node.js packages..."
    
    local missing_packages=()
    
    if ! node -e "require('glob')" &> /dev/null; then
        missing_packages+=("glob")
    fi
    
    if ! node -e "require('chokidar')" &> /dev/null; then
        missing_packages+=("chokidar")
    fi
    
    if [ ${#missing_packages[@]} -gt 0 ]; then
        print_warning "Missing packages: ${missing_packages[*]}"
        print_info "Installing missing packages..."
        npm install "${missing_packages[@]}"
        print_success "Dependencies installed"
    else
        print_success "All required packages are available"
    fi
}

# Function to create necessary directories
create_directories() {
    print_info "Creating necessary directories..."
    
    local dirs=(
        "logs"
        "ai-quality-reports"
        "performance-reports"
        "dependency-reports"
        "error-prediction-reports"
        "build-optimization-reports"
        "testing-strategy-reports"
    )
    
    for dir in "${dirs[@]}"; do
        if [ ! -d "$PROJECT_ROOT/$dir" ]; then
            mkdir -p "$PROJECT_ROOT/$dir"
            print_info "Created directory: $dir"
        fi
    done
    
    print_success "Directories ready"
}

# Function to start all intelligent automations
start_intelligent_automations() {
    print_info "Starting all intelligent PM2 automations..."
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "Ecosystem config not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Start all intelligent automations
    pm2 start "$ECOSYSTEM_CONFIG" --only intelligentAutomation
    
    if [ $? -eq 0 ]; then
        print_success "All intelligent automations started successfully"
    else
        print_error "Failed to start intelligent automations"
        exit 1
    fi
}

# Function to start a specific automation
start_specific_automation() {
    local automation_name="$1"
    print_info "Starting specific automation: $automation_name"
    
    # Check if automation exists in ecosystem config
    if ! grep -q "name: '$automation_name'" "$ECOSYSTEM_CONFIG"; then
        print_error "Automation '$automation_name' not found in ecosystem config"
        exit 1
    fi
    
    # Start the specific automation
    pm2 start "$ECOSYSTEM_CONFIG" --only "$automation_name"
    
    if [ $? -eq 0 ]; then
        print_success "Automation '$automation_name' started successfully"
    else
        print_error "Failed to start automation '$automation_name'"
        exit 1
    fi
}

# Function to show status of intelligent automations
show_status() {
    print_info "Intelligent PM2 Automations Status:"
    echo ""
    
    # Show PM2 list filtered for intelligent automations
    pm2 list | grep -E "(ai-code-quality|intelligent-performance|smart-dependency|error-prediction|intelligent-build|smart-testing|intelligentAutomation)" || true
    
    echo ""
    print_info "Use 'pm2 monit' to monitor all processes"
}

# Function to show logs
show_logs() {
    print_info "Showing logs for intelligent automations..."
    echo ""
    echo "Press Ctrl+C to exit log view"
    echo ""
    
    # Show logs for all intelligent automations
    pm2 logs intelligentAutomation
}

# Function to show help
show_help() {
    echo "Intelligent PM2 Automation Quick Start Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start, start-all     Start all intelligent automations"
    echo "  start-ai-quality     Start AI Code Quality automation"
    echo "  start-performance    Start Intelligent Performance automation"
    echo "  start-dependency     Start Smart Dependency automation"
    echo "  start-error-pred     Start Error Prediction automation"
    echo "  start-build          Start Intelligent Build automation"
    echo "  start-testing        Start Smart Testing automation"
    echo "  stop                 Stop all intelligent automations"
    echo "  restart              Restart all intelligent automations"
    echo "  status               Show status of intelligent automations"
    echo "  logs                 Show logs for intelligent automations"
    echo "  monit                Open PM2 monitoring dashboard"
    echo "  help, -h, --help     Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start             # Start all intelligent automations"
    echo "  $0 start-ai-quality  # Start only AI Code Quality automation"
    echo "  $0 status            # Check status of all automations"
    echo "  $0 logs              # View logs for all automations"
    echo ""
    echo "For more information, see: INTELLIGENT_PM2_AUTOMATION_README.md"
}

# Main function
main() {
    print_header "🚀 Intelligent PM2 Automation Quick Start"
    echo ""
    
    # Check prerequisites
    check_pm2
    check_dependencies
    create_directories
    
    echo ""
    
    # Parse command
    case "${1:-start}" in
        "start"|"start-all")
            start_intelligent_automations
            show_status
            ;;
        "start-ai-quality")
            start_specific_automation "ai-code-quality"
            ;;
        "start-performance")
            start_specific_automation "intelligent-performance"
            ;;
        "start-dependency")
            start_specific_automation "smart-dependency"
            ;;
        "start-error-pred")
            start_specific_automation "error-prediction"
            ;;
        "start-build")
            start_specific_automation "intelligent-build"
            ;;
        "start-testing")
            start_specific_automation "smart-testing"
            ;;
        "stop")
            print_info "Stopping all intelligent automations..."
            pm2 stop intelligentAutomation
            print_success "All intelligent automations stopped"
            ;;
        "restart")
            print_info "Restarting all intelligent automations..."
            pm2 restart intelligentAutomation
            print_success "All intelligent automations restarted"
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs
            ;;
        "monit")
            print_info "Opening PM2 monitoring dashboard..."
            pm2 monit
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
    
    echo ""
    
    # Final messages for start commands
    if [[ "$1" =~ ^start ]]; then
        print_info "Intelligent automations are now running!"
        echo ""
        echo "📊 Monitor with: $0 status"
        echo "📋 View logs with: $0 logs"
        echo "🖥️  Open dashboard with: $0 monit"
        echo ""
        print_info "Reports will be generated in their respective directories:"
        echo "  • ai-quality-reports/"
        echo "  • performance-reports/"
        echo "  • dependency-reports/"
        echo "  • error-prediction-reports/"
        echo "  • build-optimization-reports/"
        echo "  • testing-strategy-reports/"
        echo ""
        print_info "Check INTELLIGENT_PM2_AUTOMATION_README.md for detailed information"
    fi
}

# Run main function with all arguments
main "$@"