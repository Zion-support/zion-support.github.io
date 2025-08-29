#!/bin/bash

# 🚀 Intelligent PM2 Automation Quick Start Script
# Zion Tech Group - PM2 Automation System

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_status "PM2 is installed and available"
}

# Function to check if required packages are installed
check_dependencies() {
    print_status "Checking required dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    # Check if glob and chokidar are installed
    if ! npm list glob &> /dev/null; then
        print_warning "glob package not found. Installing..."
        npm install glob
    fi
    
    if ! npm list chokidar &> /dev/null; then
        print_warning "chokidar package not found. Installing..."
        npm install chokidar
    fi
    
    print_status "Dependencies are satisfied"
}

# Function to create required directories
create_directories() {
    print_status "Creating required directories..."
    
    local dirs=(
        "logs"
        "ai-quality-reports"
        "performance-reports"
        "dependency-reports"
        "error-prediction-reports"
        "build-optimization-reports"
        "smart-testing-reports"
    )
    
    for dir in "${dirs[@]}"; do
        if [ ! -d "$PROJECT_ROOT/$dir" ]; then
            mkdir -p "$PROJECT_ROOT/$dir"
            print_status "Created directory: $dir"
        fi
    done
}

# Function to start intelligent automations
start_intelligent_automations() {
    print_status "Starting Intelligent PM2 Automations..."
    
    # Check if automations are already running
    if pm2 list | grep -q "intelligent"; then
        print_warning "Some intelligent automations are already running. Stopping them first..."
        pm2 stop intelligentAutomation 2>/dev/null || true
        pm2 delete intelligentAutomation 2>/dev/null || true
    fi
    
    # Start all intelligent automations
    cd "$PROJECT_ROOT"
    pm2 start ecosystem.config.cjs --only intelligentAutomation
    
    if [ $? -eq 0 ]; then
        print_status "✅ All intelligent automations started successfully!"
    else
        print_error "Failed to start intelligent automations"
        exit 1
    fi
}

# Function to start specific intelligent automation
start_specific_automation() {
    local automation_name="$1"
    
    print_status "Starting specific intelligent automation: $automation_name"
    
    cd "$PROJECT_ROOT"
    pm2 start ecosystem.config.cjs --only "$automation_name"
    
    if [ $? -eq 0 ]; then
        print_status "✅ $automation_name started successfully!"
    else
        print_error "Failed to start $automation_name"
        exit 1
    fi
}

# Function to show status
show_status() {
    print_header "Intelligent PM2 Automation Status"
    
    echo ""
    pm2 list | grep -E "(intelligent|ai-code-quality|intelligent-performance|smart-dependency|error-prediction|intelligent-build|smart-testing)" || echo "No intelligent automations found"
    
    echo ""
    print_status "Recent logs (last 10 lines):"
    pm2 logs --lines 10 intelligentAutomation 2>/dev/null || echo "No logs available yet"
}

# Function to show help
show_help() {
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start                    Start all intelligent automations"
    echo "  start-all               Start all intelligent automations (alias for start)"
    echo "  start-ai-quality       Start AI Code Quality automation only"
    echo "  start-performance      Start Intelligent Performance automation only"
    echo "  start-dependency       Start Smart Dependency automation only"
    echo "  start-error-prediction Start Error Prediction automation only"
    echo "  start-build            Start Intelligent Build automation only"
    echo "  start-testing          Start Smart Testing automation only"
    echo "  stop                   Stop all intelligent automations"
    echo "  restart                Restart all intelligent automations"
    echo "  status                 Show status of intelligent automations"
    echo "  logs                   Show logs of intelligent automations"
    echo "  monit                  Open PM2 monitoring interface"
    echo "  help                   Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start               # Start all intelligent automations"
    echo "  $0 start-ai-quality   # Start only AI Code Quality automation"
    echo "  $0 status             # Show status"
    echo "  $0 logs               # Show logs"
}

# Function to show logs
show_logs() {
    print_header "Intelligent PM2 Automation Logs"
    
    echo ""
    echo "Available intelligent automation processes:"
    echo "1. ai-code-quality"
    echo "2. intelligent-performance"
    echo "3. smart-dependency"
    echo "4. error-prediction"
    echo "5. intelligent-build"
    echo "6. smart-testing"
    echo ""
    
    read -p "Enter the number of the automation to view logs (or press Enter for all): " choice
    
    case $choice in
        1) pm2 logs ai-code-quality --lines 50 ;;
        2) pm2 logs intelligent-performance --lines 50 ;;
        3) pm2 logs smart-dependency --lines 50 ;;
        4) pm2 logs error-prediction --lines 50 ;;
        5) pm2 logs intelligent-build --lines 50 ;;
        6) pm2 logs smart-testing --lines 50 ;;
        *) pm2 logs intelligentAutomation --lines 50 ;;
    esac
}

# Main script logic
main() {
    print_header "🚀 Intelligent PM2 Automation Quick Start"
    echo ""
    
    # Check if we're in the right directory
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "ecosystem.config.cjs not found. Please run this script from the project root."
        exit 1
    fi
    
    # Check PM2 installation
    check_pm2
    
    # Check dependencies
    check_dependencies
    
    # Create required directories
    create_directories
    
    # Parse command line arguments
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
        "start-error-prediction")
            start_specific_automation "error-prediction"
            ;;
        "start-build")
            start_specific_automation "intelligent-build"
            ;;
        "start-testing")
            start_specific_automation "smart-testing"
            ;;
        "stop")
            print_status "Stopping all intelligent automations..."
            pm2 stop intelligentAutomation 2>/dev/null || true
            print_status "✅ All intelligent automations stopped"
            ;;
        "restart")
            print_status "Restarting all intelligent automations..."
            pm2 restart intelligentAutomation 2>/dev/null || true
            print_status "✅ All intelligent automations restarted"
            show_status
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs
            ;;
        "monit")
            print_status "Opening PM2 monitoring interface..."
            pm2 monit
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
    
    echo ""
    print_header "🎉 Intelligent PM2 Automation Setup Complete!"
    echo ""
    echo "Next steps:"
    echo "1. Monitor your automations: $0 status"
    echo "2. View logs: $0 logs"
    echo "3. Open monitoring: $0 monit"
    echo "4. Check reports in the generated directories"
    echo ""
    echo "For more information, see: INTELLIGENT_PM2_AUTOMATION_README.md"
}

# Run main function with all arguments
main "$@"