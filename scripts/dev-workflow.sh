#!/bin/bash

# Zion Tech Group - Intelligent Development Workflow Script
# This script orchestrates the entire development process with PM2

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
PROJECT_ROOT=$(pwd)
LOGS_DIR="$PROJECT_ROOT/logs"
REPORTS_DIR="$PROJECT_ROOT/reports"
MONITORING_DIR="$PROJECT_ROOT/monitoring"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${PURPLE}[STEP]${NC} $1"
}

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN} $1${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Function to check prerequisites
check_prerequisites() {
    print_step "Checking prerequisites..."
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    # Check if ecosystem config exists
    if [ ! -f "ecosystem.config.js" ]; then
        print_error "ecosystem.config.js not found. Please run this script from the project root."
        exit 1
    fi
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 is not installed. Installing..."
        npm install -g pm2
    fi
    
    print_success "All prerequisites are met"
}

# Function to create necessary directories
create_directories() {
    print_step "Creating necessary directories..."
    
    local dirs=("$LOGS_DIR" "$REPORTS_DIR" "$MONITORING_DIR")
    
    for dir in "${dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            print_status "Created directory: $dir"
        fi
    done
    
    print_success "Directories created"
}

# Function to install dependencies
install_dependencies() {
    print_step "Installing dependencies..."
    
    # Install root dependencies
    print_status "Installing root dependencies..."
    npm install
    
    # Install server dependencies
    if [ -d "server" ]; then
        print_status "Installing server dependencies..."
        cd server && npm install && cd ..
    fi
    
    print_success "Dependencies installed"
}

# Function to run code quality checks
run_quality_checks() {
    print_step "Running code quality checks..."
    
    local quality_passed=true
    
    # TypeScript type checking
    print_status "Running TypeScript type checks..."
    if npm run type-check:all &> /dev/null; then
        print_success "TypeScript checks passed"
    else
        print_warning "TypeScript checks failed"
        quality_passed=false
    fi
    
    # ESLint linting
    print_status "Running ESLint..."
    if npm run lint:all &> /dev/null; then
        print_success "ESLint checks passed"
    else
        print_warning "ESLint checks failed"
        quality_passed=false
    fi
    
    # Run tests if available
    if [ -d "tests" ] || [ -d "__tests__" ]; then
        print_status "Running tests..."
        if npm test &> /dev/null; then
            print_success "Tests passed"
        else
            print_warning "Tests failed"
            quality_passed=false
        fi
    fi
    
    if [ "$quality_passed" = true ]; then
        print_success "All quality checks passed"
    else
        print_warning "Some quality checks failed, but continuing..."
    fi
}

# Function to start PM2 processes
start_pm2_processes() {
    print_step "Starting PM2 processes..."
    
    # Check if PM2 is already running
    if pm2 list | grep -q "online"; then
        print_status "PM2 processes are already running. Reloading..."
        pm2 reload all
    else
        print_status "Starting PM2 processes..."
        pm2 start ecosystem.config.js
    fi
    
    # Wait for processes to start
    sleep 5
    
    # Check status
    if pm2 list | grep -q "online"; then
        print_success "PM2 processes started successfully"
    else
        print_error "Failed to start PM2 processes"
        exit 1
    fi
}

# Function to start monitoring
start_monitoring() {
    print_step "Starting intelligent monitoring..."
    
    # Start PM2 monitoring in background
    pm2 monit &
    local monitor_pid=$!
    
    print_status "PM2 monitoring started (PID: $monitor_pid)"
    print_status "Press Ctrl+C to stop monitoring"
    
    # Wait for user interrupt
    trap "kill $monitor_pid 2>/dev/null; exit 0" INT
    wait $monitor_pid
}

# Function to run development build
run_dev_build() {
    print_step "Running development build..."
    
    # Start PM2 processes
    start_pm2_processes
    
    # Show status
    print_status "Current PM2 status:"
    pm2 status
    
    print_success "Development build is running"
    print_status "Frontend: http://localhost:3000"
    print_status "Backend: http://localhost:5000"
    print_status "Use 'pm2 logs' to view logs"
    print_status "Use 'pm2 monit' to open monitoring dashboard"
}

# Function to run production build
run_production_build() {
    print_step "Running production build..."
    
    # Run quality checks first
    run_quality_checks
    
    # Build frontend
    print_status "Building frontend..."
    npm run build
    
    # Build backend
    if [ -d "server" ]; then
        print_status "Building backend..."
        cd server && npm run build && cd ..
    fi
    
    # Generate build report
    generate_build_report
    
    print_success "Production build completed"
}

# Function to generate build report
generate_build_report() {
    print_step "Generating build report..."
    
    local build_info=$(cat <<EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "buildType": "production",
  "gitCommit": "$(git rev-parse HEAD 2>/dev/null || echo 'unknown')",
  "gitBranch": "$(git branch --show-current 2>/dev/null || echo 'unknown')",
  "nodeVersion": "$(node --version)",
  "npmVersion": "$(npm --version)"
}
EOF
)
    
    echo "$build_info" > "$REPORTS_DIR/build-report-$(date +%Y%m%d-%H%M%S).json"
    print_success "Build report generated"
}

# Function to deploy to production
deploy_production() {
    print_step "Deploying to production..."
    
    # Run production build
    run_production_build
    
    # Start production PM2 processes
    print_status "Starting production PM2 processes..."
    pm2 start ecosystem.config.js --env production
    
    print_success "Production deployment completed"
}

# Function to show current status
show_status() {
    print_step "Current Development Status..."
    
    echo ""
    print_status "PM2 Status:"
    pm2 status
    
    echo ""
    print_status "System Resources:"
    echo "Memory: $(free -h | awk 'NR==2{printf "%.1f%%", $3*100/$2 }')"
    echo "CPU Load: $(uptime | awk -F'load average:' '{ print $2 }')"
    
    echo ""
    print_status "Build Status:"
    if [ -d "dist" ]; then
        echo "Frontend: ✅ Built ($(du -sh dist | cut -f1))"
    else
        echo "Frontend: ❌ Not built"
    fi
    
    if [ -d "server/dist" ]; then
        echo "Backend: ✅ Built ($(du -sh server/dist | cut -f1))"
    else
        echo "Backend: ❌ Not built"
    fi
}

# Function to cleanup
cleanup() {
    print_step "Cleaning up..."
    
    # Stop PM2 processes
    print_status "Stopping PM2 processes..."
    pm2 stop all 2>/dev/null || true
    
    # Clean build directories
    print_status "Cleaning build directories..."
    rm -rf dist server/dist 2>/dev/null || true
    
    print_success "Cleanup completed"
}

# Function to restart everything
restart_all() {
    print_step "Restarting all services..."
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    
    # Wait a moment
    sleep 2
    
    # Start all processes
    start_pm2_processes
    
    print_success "All services restarted"
}

# Function to show logs
show_logs() {
    print_step "Showing recent logs..."
    
    local app_name=${1:-"all"}
    local lines=${2:-50}
    
    print_status "Showing last $lines lines for $app_name:"
    pm2 logs "$app_name" --lines "$lines"
}

# Function to show help
show_help() {
    cat << EOF
Zion Tech Group - Intelligent Development Workflow Script

Usage: $0 [COMMAND] [OPTIONS]

Commands:
  dev           Start development environment with PM2
  build         Run production build
  deploy        Deploy to production
  status        Show current development status
  logs [APP]    Show logs for specific app (default: all)
  restart       Restart all services
  cleanup       Clean up build files and stop PM2
  monitor       Start PM2 monitoring dashboard
  help          Show this help message

Options:
  -q, --quick   Skip quality checks for faster startup
  -f, --force   Force restart even if processes are running
  -v, --verbose Enable verbose output

Examples:
  $0 dev              # Start development environment
  $0 build            # Run production build
  $0 deploy           # Deploy to production
  $0 logs zion-frontend  # Show frontend logs
  $0 status          # Show current status
  $0 restart         # Restart all services

Development Workflow:
  1. $0 dev          # Start development environment
  2. Make code changes
  3. $0 build        # Test production build
  4. $0 deploy       # Deploy to production

Monitoring:
  - Use 'pm2 monit' to open monitoring dashboard
  - Use 'pm2 logs' to view real-time logs
  - Use 'pm2 status' to check process status
EOF
}

# Main execution
main() {
    local command=${1:-"help"}
    local quick_mode=false
    local force_mode=false
    local verbose_mode=false
    
    # Parse command line arguments
    shift
    while [[ $# -gt 0 ]]; do
        case $1 in
            -q|--quick)
                quick_mode=true
                shift
                ;;
            -f|--force)
                force_mode=true
                shift
                ;;
            -v|--verbose)
                verbose_mode=true
                shift
                ;;
            *)
                shift
                ;;
        esac
    done
    
    # Set verbose mode
    if [ "$verbose_mode" = true ]; then
        set -x
    fi
    
    print_header "Zion Tech Group Development Workflow"
    
    case $command in
        dev)
            check_prerequisites
            create_directories
            install_dependencies
            if [ "$quick_mode" = false ]; then
                run_quality_checks
            fi
            run_dev_build
            ;;
        build)
            check_prerequisites
            create_directories
            run_production_build
            ;;
        deploy)
            check_prerequisites
            create_directories
            deploy_production
            ;;
        status)
            show_status
            ;;
        logs)
            local app_name=${2:-"all"}
            local lines=${3:-50}
            show_logs "$app_name" "$lines"
            ;;
        restart)
            restart_all
            ;;
        cleanup)
            cleanup
            ;;
        monitor)
            start_monitoring
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
    
    print_success "Workflow completed successfully!"
}

# Run main function with all arguments
main "$@"