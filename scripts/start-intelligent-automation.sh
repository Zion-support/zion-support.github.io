#!/bin/bash

# 🧠 Intelligent PM2 Automation System - Quick Start Script
# Zion Tech Group - Intelligent Automation v2.0

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

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}🧠 Intelligent Automation System${NC}"
    echo -e "${PURPLE}================================${NC}"
    echo ""
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        if [ $? -eq 0 ]; then
            print_success "PM2 installed successfully"
        else
            print_error "Failed to install PM2. Please install manually: npm install -g pm2"
            exit 1
        fi
    else
        print_success "PM2 is already installed"
    fi
}

# Function to check if required dependencies are installed
check_dependencies() {
    print_status "Checking required dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    # Check if semver is installed
    if ! npm list semver &> /dev/null; then
        print_warning "semver package not found. Installing..."
        npm install semver
    fi
    
    print_success "Dependencies check completed"
}

# Function to start intelligent automations
start_automations() {
    print_status "Starting Intelligent Automation System..."
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "ecosystem.config.cjs not found at $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Start all automations
    cd "$PROJECT_ROOT"
    pm2 start ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "Intelligent Automation System started successfully!"
    else
        print_error "Failed to start automation system"
        exit 1
    fi
}

# Function to start specific automation
start_specific_automation() {
    local automation_name="$1"
    print_status "Starting $automation_name..."
    
    cd "$PROJECT_ROOT"
    pm2 start ecosystem.config.cjs --only "$automation_name"
    
    if [ $? -eq 0 ]; then
        print_success "$automation_name started successfully!"
    else
        print_error "Failed to start $automation_name"
        exit 1
    fi
}

# Function to stop all automations
stop_automations() {
    print_status "Stopping Intelligent Automation System..."
    
    cd "$PROJECT_ROOT"
    pm2 stop ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "All automations stopped successfully!"
    else
        print_error "Failed to stop automations"
        exit 1
    fi
}

# Function to restart all automations
restart_automations() {
    print_status "Restarting Intelligent Automation System..."
    
    cd "$PROJECT_ROOT"
    pm2 restart ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "All automations restarted successfully!"
    else
        print_error "Failed to restart automations"
        exit 1
    fi
}

# Function to show automation status
show_status() {
    print_status "Intelligent Automation System Status:"
    echo ""
    pm2 status
}

# Function to show automation logs
show_logs() {
    local automation_name="$1"
    if [ -z "$automation_name" ]; then
        print_status "Showing logs for all automations..."
        pm2 logs
    else
        print_status "Showing logs for $automation_name..."
        pm2 logs "$automation_name"
    fi
}

# Function to open PM2 monitoring interface
open_monitor() {
    print_status "Opening PM2 monitoring interface..."
    pm2 monit
}

# Function to generate health report
generate_health_report() {
    print_status "Generating health report..."
    
    # Create health report directory if it doesn't exist
    mkdir -p "$PROJECT_ROOT/health-reports"
    
    # Generate comprehensive health report
    local report_file="$PROJECT_ROOT/health-reports/health-report-$(date +%Y%m%d-%H%M%S).md"
    
    cat > "$report_file" << EOF
# 🧠 Intelligent Automation System Health Report

**Generated:** $(date)
**System:** Intelligent PM2 Automation v2.0

## 📊 System Status

\`\`\`
$(pm2 status)
\`\`\`

## 🔍 Automation Details

### Intelligent Code Analyzer
- **Status:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-code-analyzer") | .pm2_env.status // "Not Found"')
- **Uptime:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-code-analyzer") | .pm2_env.pm_uptime // "N/A"')

### Intelligent Dependency Manager
- **Status:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-dependency-manager") | .pm2_env.status // "Not Found"')
- **Uptime:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-dependency-manager") | .pm2_env.pm_uptime // "N/A"')

### Intelligent Performance Optimizer
- **Status:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-performance-optimizer") | .pm2_env.status // "Not Found"')
- **Uptime:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-performance-optimizer") | .pm2_env.pm_uptime // "Not Found"')

### Intelligent Automation Orchestrator
- **Status:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-automation-orchestrator") | .pm2_env.status // "Not Found"')
- **Uptime:** $(pm2 jlist | jq -r '.[] | select(.name=="intelligent-automation-orchestrator") | .pm2_env.pm_uptime // "Not Found"')

## 📁 Report Directories

- **Intelligent Analysis Reports:** \`intelligent-analysis-reports/\`
- **Dependency Analysis Reports:** \`dependency-analysis-reports/\`
- **Performance Optimization Reports:** \`performance-optimization-reports/\`
- **Orchestration Reports:** \`orchestration-reports/\`

## 🚀 Next Steps

1. Review automation reports for insights
2. Address any critical issues identified
3. Monitor automation performance
4. Share findings with development team

---

*Generated automatically by Intelligent Automation System*
EOF

    print_success "Health report generated: $report_file"
}

# Function to show help
show_help() {
    echo "🧠 Intelligent PM2 Automation System - Quick Start Script"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start                    Start all intelligent automations"
    echo "  start-code-analyzer      Start Intelligent Code Analyzer only"
    echo "  start-dependency-manager Start Intelligent Dependency Manager only"
    echo "  start-performance-opt    Start Intelligent Performance Optimizer only"
    echo "  start-orchestrator      Start Intelligent Automation Orchestrator only"
    echo "  stop                     Stop all automations"
    echo "  restart                  Restart all automations"
    echo "  status                   Show automation status"
    echo "  logs [AUTOMATION]        Show logs (all or specific automation)"
    echo "  monitor                  Open PM2 monitoring interface"
    echo "  health                   Generate health report"
    echo "  help                     Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                 # Start all automations"
    echo "  $0 logs                  # Show all logs"
    echo "  $0 logs intelligent-code-analyzer  # Show specific automation logs"
    echo "  $0 health               # Generate health report"
    echo ""
    echo "For more information, see: INTELLIGENT_AUTOMATION_README.md"
}

# Main script logic
main() {
    print_header
    
    # Check if we're in the right directory
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "This script must be run from the project root directory"
        print_error "Expected location: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Parse command line arguments
    case "${1:-start}" in
        "start")
            check_pm2
            check_dependencies
            start_automations
            show_status
            ;;
        "start-code-analyzer")
            check_pm2
            check_dependencies
            start_specific_automation "intelligent-code-analyzer"
            ;;
        "start-dependency-manager")
            check_pm2
            check_dependencies
            start_specific_automation "intelligent-dependency-manager"
            ;;
        "start-performance-opt")
            check_pm2
            check_dependencies
            start_specific_automation "intelligent-performance-optimizer"
            ;;
        "start-orchestrator")
            check_pm2
            check_dependencies
            start_specific_automation "intelligent-automation-orchestrator"
            ;;
        "stop")
            stop_automations
            ;;
        "restart")
            restart_automations
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs "$2"
            ;;
        "monitor")
            open_monitor
            ;;
        "health")
            generate_health_report
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
    print_success "Command completed successfully!"
    echo ""
    print_status "For more information, see: INTELLIGENT_AUTOMATION_README.md"
}

# Run main function with all arguments
main "$@"