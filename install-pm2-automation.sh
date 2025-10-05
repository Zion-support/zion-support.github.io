#!/bin/bash

# Zion Tech Group - PM2 Automation Installation Script
# This script installs and configures the entire PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

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
    echo -e "${CYAN}    echo -e "${CYAN} $1${NC}"
    echo -e "${CYAN}}

# Function to check if running as root
check_root() {
    if [ "$EUID" -eq 0 ]; then
        print_warning "Running as root. This is not recommended for development."
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
}

# Function to check system requirements
check_requirements() {
    print_step "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        print_status "Visit: https://nodejs.org/"
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check Git
    if ! command -v git &> /dev/null; then
        print_warning "Git is not installed. Some features may not work properly."
    fi
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    print_success "System requirements met"
}

# Function to install PM2
install_pm2() {
    print_step "Installing PM2..."
    
    if command -v pm2 &> /dev/null; then
        print_status "PM2 is already installed"
        pm2 --version
    else
        print_status "Installing PM2 globally..."
        npm install -g pm2
        
        if [ $? -eq 0 ]; then
            print_success "PM2 installed successfully"
            pm2 --version
        else
            print_error "Failed to install PM2"
            exit 1
        fi
    fi
}

# Function to create necessary directories
create_directories() {
    print_step "Creating necessary directories..."
    
    local dirs=("logs" "reports" "monitoring" "alerts" "metrics")
    
    for dir in "${dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            print_status "Created directory: $dir"
        else
            print_status "Directory already exists: $dir"
        fi
    done
    
    print_success "Directories created"
}

# Function to install project dependencies
install_dependencies() {
    print_step "Installing project dependencies..."
    
    # Install root dependencies
    print_status "Installing root dependencies..."
    npm install
    
    # Install server dependencies if they exist
    if [ -d "server" ]; then
        print_status "Installing server dependencies..."
        cd server && npm install && cd ..
    fi
    
    print_success "Dependencies installed"
}

# Function to make scripts executable
make_scripts_executable() {
    print_step "Making scripts executable..."
    
    if [ -d "scripts" ]; then
        chmod +x scripts/*.sh 2>/dev/null || true
        print_success "Scripts made executable"
    else
        print_warning "Scripts directory not found"
    fi
}

# Function to setup PM2 startup script
setup_pm2_startup() {
    print_step "Setting up PM2 startup script..."
    
    read -p "Setup PM2 to start automatically on system reboot? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Setting up PM2 startup script..."
        pm2 startup
        
        if [ $? -eq 0 ]; then
            print_success "PM2 startup script configured"
            print_status "PM2 will automatically start on system reboot"
        else
            print_warning "Failed to setup PM2 startup script"
        fi
    else
        print_status "Skipping PM2 startup script setup"
    fi
}

# Function to test the installation
test_installation() {
    print_step "Testing the installation..."
    
    # Test PM2
    if pm2 --version &> /dev/null; then
        print_success "PM2 is working correctly"
    else
        print_error "PM2 is not working correctly"
        return 1
    fi
    
    # Test ecosystem config
    if [ -f "ecosystem.config.js" ]; then
        print_success "Ecosystem configuration found"
    else
        print_error "Ecosystem configuration not found"
        return 1
    fi
    
    # Test scripts
    if [ -f "scripts/pm2-manager.js" ]; then
        print_success "PM2 manager script found"
    else
        print_error "PM2 manager script not found"
        return 1
    fi
    
    print_success "Installation test passed"
}

# Function to show next steps
show_next_steps() {
    print_step "Installation completed successfully!"
    
    echo ""
    echo -e "${CYAN}🎯 Next Steps:${NC}"
    echo ""
    echo "1. Start development environment:"
    echo "   ${GREEN}./scripts/dev-workflow.sh dev${NC}"
    echo ""
    echo "2. Start monitoring:"
    echo "   ${GREEN}node scripts/pm2-monitor.js start${NC}"
    echo ""
    echo "3. Check PM2 status:"
    echo "   ${GREEN}pm2 status${NC}"
    echo ""
    echo "4. Open monitoring dashboard:"
    echo "   ${GREEN}pm2 monit${NC}"
    echo ""
    echo "5. View logs:"
    echo "   ${GREEN}pm2 logs${NC}"
    echo ""
    echo -e "${CYAN}📚 Documentation:${NC}"
    echo "   Read PM2_AUTOMATION_README.md for detailed usage instructions"
    echo ""
    echo -e "${CYAN}🚀 Quick Start:${NC}"
    echo "   ./scripts/dev-workflow.sh dev"
    echo ""
}

# Function to show help
show_help() {
    cat << EOF
Zion Tech Group - PM2 Automation Installation Script

Usage: $0 [OPTIONS]

Options:
  -h, --help     Show this help message
  -s, --startup  Automatically setup PM2 startup script
  -t, --test     Run installation tests after setup
  -v, --verbose  Enable verbose output

Examples:
  $0              # Standard installation
  $0 -s          # Installation with startup script setup
  $0 -t          # Installation with testing
  $0 -s -t       # Full installation with startup and testing

This script will:
1. Check system requirements
2. Install PM2 globally
3. Create necessary directories
4. Install project dependencies
5. Make scripts executable
6. Optionally setup PM2 startup script
7. Optionally run installation tests
EOF
}

# Main execution
main() {
    local setup_startup=false
    local run_tests=false
    local verbose_mode=false
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_help
                exit 0
                ;;
            -s|--startup)
                setup_startup=true
                shift
                ;;
            -t|--test)
                run_tests=true
                shift
                ;;
            -v|--verbose)
                verbose_mode=true
                shift
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    # Set verbose mode
    if [ "$verbose_mode" = true ]; then
        set -x
    fi
    
    print_header "Zion Tech Group PM2 Automation Installation"
    
    # Run installation steps
    check_root
    check_requirements
    install_pm2
    create_directories
    install_dependencies
    make_scripts_executable
    
    # Optional steps
    if [ "$setup_startup" = true ]; then
        setup_pm2_startup
    fi
    
    if [ "$run_tests" = true ]; then
        test_installation
    fi
    
    # Show next steps
    show_next_steps
}

# Run main function with all arguments
main "$@"