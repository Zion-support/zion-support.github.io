#!/bin/bash

# 🚀 Intelligent PM2 Automations Quick Start Script
# Zion Tech Group - Advanced Development Automation

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

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE} $1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_status "PM2 is already installed"
    fi
}

# Function to check if required dependencies are installed
check_dependencies() {
    print_status "Checking required dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    # Check for chokidar and glob
    if ! npm list chokidar &> /dev/null; then
        print_warning "chokidar not found. Installing..."
        npm install chokidar
    fi
    
    if ! npm list glob &> /dev/null; then
        print_warning "glob not found. Installing..."
        npm install glob
    fi
    
    print_success "Dependencies check completed"
}

# Function to create required directories
create_directories() {
    print_status "Creating required directories..."
    
    mkdir -p "$PROJECT_ROOT/logs"
    mkdir -p "$PROJECT_ROOT/ai-quality-reports"
    mkdir -p "$PROJECT_ROOT/dev-workflow-reports"
    mkdir -p "$PROJECT_ROOT/performance-reports"
    
    print_success "Directories created"
}

# Function to start intelligent automations
start_intelligent_automations() {
    print_header "Starting Intelligent PM2 Automations"
    
    check_pm2
    check_dependencies
    create_directories
    
    print_status "Starting intelligent automations..."
    
    # Start the intelligent automations
    pm2 start "$ECOSYSTEM_CONFIG" --only "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor"
    
    if [ $? -eq 0 ]; then
        print_success "Intelligent automations started successfully"
        print_status "Waiting for automations to initialize..."
        sleep 5
        
        # Show status
        pm2 status --only "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor"
        
        print_status "Automations are now running. Use 'npm run intelligent:status' to check status."
    else
        print_error "Failed to start intelligent automations"
        exit 1
    fi
}

# Function to stop intelligent automations
stop_intelligent_automations() {
    print_header "Stopping Intelligent PM2 Automations"
    
    print_status "Stopping intelligent automations..."
    
    pm2 stop "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor" 2>/dev/null || true
    pm2 delete "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor" 2>/dev/null || true
    
    print_success "Intelligent automations stopped"
}

# Function to restart intelligent automations
restart_intelligent_automations() {
    print_header "Restarting Intelligent PM2 Automations"
    
    stop_intelligent_automations
    sleep 2
    start_intelligent_automations
}

# Function to show status
show_status() {
    print_header "Intelligent PM2 Automations Status"
    
    pm2 status --only "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor" 2>/dev/null || {
        print_warning "No intelligent automations are currently running"
        return
    }
    
    echo ""
    print_status "Recent logs (last 10 lines):"
    pm2 logs --only "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor" --lines 10 2>/dev/null || print_warning "No logs available"
}

# Function to show logs
show_logs() {
    print_header "Intelligent PM2 Automations Logs"
    
    if [ -z "$1" ]; then
        print_status "Showing logs for all intelligent automations..."
        pm2 logs --only "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor"
    else
        print_status "Showing logs for $1..."
        pm2 logs "$1"
    fi
}

# Function to run quick health check
health_check() {
    print_header "Quick Health Check"
    
    # Check PM2 status
    print_status "Checking PM2 processes..."
    pm2 status --only "ai-code-quality,intelligent-dev-workflow,advanced-performance-monitor" 2>/dev/null || {
        print_error "No intelligent automations are running"
        return 1
    }
    
    # Check if report directories exist and have content
    print_status "Checking report directories..."
    
    if [ -d "$PROJECT_ROOT/ai-quality-reports" ] && [ "$(ls -A "$PROJECT_ROOT/ai-quality-reports" 2>/dev/null)" ]; then
        print_success "AI Quality reports directory: OK"
    else
        print_warning "AI Quality reports directory: Empty or missing"
    fi
    
    if [ -d "$PROJECT_ROOT/dev-workflow-reports" ] && [ "$(ls -A "$PROJECT_ROOT/dev-workflow-reports" 2>/dev/null)" ]; then
        print_success "Dev Workflow reports directory: OK"
    else
        print_warning "Dev Workflow reports directory: Empty or missing"
    fi
    
    if [ -d "$PROJECT_ROOT/performance-reports" ] && [ "$(ls -A "$PROJECT_ROOT/performance-reports" 2>/dev/null)" ]; then
        print_success "Performance reports directory: OK"
    else
        print_warning "Performance reports directory: Empty or missing"
    fi
    
    # Check logs directory
    if [ -d "$PROJECT_ROOT/logs" ] && [ "$(ls -A "$PROJECT_ROOT/logs" 2>/dev/null)" ]; then
        print_success "Logs directory: OK"
    else
        print_warning "Logs directory: Empty or missing"
    fi
    
    print_success "Health check completed"
}

# Function to show help
show_help() {
    print_header "Intelligent PM2 Automations Help"
    
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start intelligent automations"
    echo "  stop      Stop intelligent automations"
    echo "  restart   Restart intelligent automations"
    echo "  status    Show status of intelligent automations"
    echo "  logs      Show logs (use 'logs <process-name>' for specific process)"
    echo "  health    Run quick health check"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all intelligent automations"
    echo "  $0 status                   # Show status"
    echo "  $0 logs ai-code-quality     # Show logs for AI code quality automation"
    echo "  $0 health                   # Run health check"
    echo ""
    echo "Available processes:"
    echo "  - ai-code-quality"
    echo "  - intelligent-dev-workflow"
    echo "  - advanced-performance-monitor"
    echo ""
    echo "For more information, see INTELLIGENT_PM2_AUTOMATIONS_README.md"
}

# Function to run manual analysis
run_manual_analysis() {
    print_header "Running Manual Analysis"
    
    print_status "Running AI Code Quality analysis..."
    cd "$PROJECT_ROOT" && npm run quality:analyze
    
    print_status "Running Development Workflow analysis..."
    cd "$PROJECT_ROOT" && npm run workflow:analyze
    
    print_status "Running Performance monitoring..."
    cd "$PROJECT_ROOT" && npm run performance:monitor
    
    print_success "Manual analysis completed"
}

# Function to show reports
show_reports() {
    print_header "Intelligent Automation Reports"
    
    cd "$PROJECT_ROOT"
    
    print_status "AI Code Quality Summary:"
    if [ -f "ai-quality-reports/quality-summary.json" ]; then
        cat "ai-quality-reports/quality-summary.json" | jq '.' 2>/dev/null || cat "ai-quality-reports/quality-summary.json"
    else
        print_warning "No AI Code Quality reports found"
    fi
    
    echo ""
    print_status "Development Workflow Summary:"
    if [ -f "dev-workflow-reports/workflow-summary.json" ]; then
        cat "dev-workflow-reports/workflow-summary.json" | jq '.' 2>/dev/null || cat "dev-workflow-reports/workflow-summary.json"
    else
        print_warning "No Development Workflow reports found"
    fi
    
    echo ""
    print_status "Performance Summary:"
    if [ -f "performance-reports/performance-summary.json" ]; then
        cat "performance-reports/performance-summary.json" | jq '.' 2>/dev/null || cat "performance-reports/performance-summary.json"
    else
        print_warning "No Performance reports found"
    fi
}

# Main script logic
case "${1:-help}" in
    start)
        start_intelligent_automations
        ;;
    stop)
        stop_intelligent_automations
        ;;
    restart)
        restart_intelligent_automations
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs "$2"
        ;;
    health)
        health_check
        ;;
    analyze)
        run_manual_analysis
        ;;
    reports)
        show_reports
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac