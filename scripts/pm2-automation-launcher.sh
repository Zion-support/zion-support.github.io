#!/bin/bash

# PM2 Automation Launcher for Zion Tech Group
# Comprehensive automation management script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Logging
LOG_DIR="$PROJECT_ROOT/logs"
LOG_FILE="$LOG_DIR/pm2-launcher.log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO") color=$GREEN ;;
        "WARN") color=$YELLOW ;;
        "ERROR") color=$RED ;;
        "DEBUG") color=$CYAN ;;
        *) color=$NC ;;
    esac
    
    echo -e "${color}[$timestamp] [$level] $message${NC}"
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first:"
        echo "  npm install -g pm2"
        exit 1
    fi
}

# Check if required dependencies are installed
check_dependencies() {
    log "INFO" "Checking dependencies..."
    
    # Check for chokidar (used in dev workflow)
    if ! npm list chokidar &> /dev/null; then
        log "WARN" "chokidar not found, installing..."
        npm install --save-dev chokidar
    fi
    
    log "INFO" "Dependencies check completed"
}

# Start PM2 ecosystem
start_ecosystem() {
    local env="${1:-development}"
    log "INFO" "Starting PM2 ecosystem in $env mode..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "ecosystem.config.js" ]; then
        pm2 start ecosystem.config.js --env "$env"
        log "INFO" "PM2 ecosystem started successfully"
        
        # Save PM2 configuration
        pm2 save
        
        # Show status
        pm2 status
    else
        log "ERROR" "ecosystem.config.js not found"
        exit 1
    fi
}

# Stop PM2 ecosystem
stop_ecosystem() {
    log "INFO" "Stopping PM2 ecosystem..."
    
    pm2 stop all
    log "INFO" "PM2 ecosystem stopped"
}

# Restart PM2 ecosystem
restart_ecosystem() {
    log "INFO" "Restarting PM2 ecosystem..."
    
    pm2 restart all
    log "INFO" "PM2 ecosystem restarted"
}

# Reload PM2 ecosystem (zero-downtime)
reload_ecosystem() {
    log "INFO" "Reloading PM2 ecosystem (zero-downtime)..."
    
    pm2 reload all
    log "INFO" "PM2 ecosystem reloaded"
}

# Delete PM2 ecosystem
delete_ecosystem() {
    log "INFO" "Deleting PM2 ecosystem..."
    
    pm2 delete all
    log "INFO" "PM2 ecosystem deleted"
}

# Start development workflow
start_dev_workflow() {
    log "INFO" "Starting development workflow..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-dev-workflow.js start
}

# Stop development workflow
stop_dev_workflow() {
    log "INFO" "Stopping development workflow..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-dev-workflow.js stop
}

# Deploy to environment
deploy_to_env() {
    local env="${1:-staging}"
    log "INFO" "Deploying to $env environment..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-deployment-automation.js deploy "$env"
}

# Rollback deployment
rollback_deployment() {
    local env="${1:-staging}"
    log "INFO" "Rolling back deployment in $env environment..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-deployment-automation.js rollback "$env"
}

# Show deployment status
show_deployment_status() {
    local env="${1:-staging}"
    log "INFO" "Showing deployment status for $env environment..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-deployment-automation.js status "$env"
}

# Show deployment history
show_deployment_history() {
    local limit="${1:-10}"
    log "INFO" "Showing last $limit deployments..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-deployment-automation.js history "$limit"
}

# Start intelligent automation manager
start_automation_manager() {
    log "INFO" "Starting intelligent automation manager..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-intelligent-manager.js start
}

# Show PM2 status
show_status() {
    log "INFO" "PM2 Status:"
    pm2 status
}

# Show PM2 logs
show_logs() {
    local app="${1:-all}"
    local lines="${2:-100}"
    
    log "INFO" "Showing logs for $app (last $lines lines):"
    pm2 logs "$app" --lines "$lines"
}

# Monitor specific app
monitor_app() {
    local app="$1"
    
    if [ -z "$app" ]; then
        log "ERROR" "Please specify an app name to monitor"
        exit 1
    fi
    
    log "INFO" "Starting monitoring for $app..."
    pm2 monit "$app"
}

# Scale app
scale_app() {
    local app="$1"
    local instances="$2"
    
    if [ -z "$app" ] || [ -z "$instances" ]; then
        log "ERROR" "Usage: scale <app-name> <instances>"
        exit 1
    fi
    
    log "INFO" "Scaling $app to $instances instances..."
    pm2 scale "$app" "$instances"
}

# Generate health report
generate_health_report() {
    log "INFO" "Generating health report..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-intelligent-manager.js health
}

# Cleanup old logs
cleanup_logs() {
    local days="${1:-7}"
    log "INFO" "Cleaning up logs older than $days days..."
    
    cd "$PROJECT_ROOT"
    node scripts/pm2-intelligent-manager.js cleanup "$days"
}

# Setup PM2 startup
setup_startup() {
    log "INFO" "Setting up PM2 startup script..."
    
    pm2 startup
    log "INFO" "PM2 startup script configured. Please run the generated command as root."
}

# Save PM2 configuration
save_config() {
    log "INFO" "Saving PM2 configuration..."
    
    pm2 save
    log "INFO" "PM2 configuration saved"
}

# Run tests
run_tests() {
    log "INFO" "Running tests..."
    
    cd "$PROJECT_ROOT"
    npm test
}

# Run linting
run_linting() {
    log "INFO" "Running linting..."
    
    cd "$PROJECT_ROOT"
    npm run lint:all
}

# Fix linting issues
fix_linting() {
    log "INFO" "Fixing linting issues..."
    
    cd "$PROJECT_ROOT"
    npm run fix:all
}

# Build project
build_project() {
    local env="${1:-development}"
    log "INFO" "Building project for $env environment..."
    
    cd "$PROJECT_ROOT"
    
    if [ "$env" = "production" ]; then
        npm run build:hybrid
    else
        npm run build:hybrid
    fi
    
    log "INFO" "Project build completed"
}

# Install dependencies
install_dependencies() {
    log "INFO" "Installing dependencies..."
    
    cd "$PROJECT_ROOT"
    npm run install:all
}

# Show help
show_help() {
    cat << EOF
${CYAN}🚀 PM2 Automation Launcher - Zion Tech Group${NC}

${GREEN}Usage:${NC} $0 [command] [options]

${GREEN}Core PM2 Commands:${NC}
  start [env]           - Start PM2 ecosystem (default: development)
  stop                  - Stop all PM2 processes
  restart               - Restart all PM2 processes
  reload                - Reload all processes (zero-downtime)
  delete                - Delete all PM2 processes
  status                - Show PM2 status
  logs [app] [lines]    - Show logs (default: 100 lines)
  monit [app]           - Monitor specific app
  scale [app] [instances] - Scale app to N instances
  save                  - Save PM2 configuration
  startup               - Setup PM2 startup script

${GREEN}Development Workflow:${NC}
  dev:start             - Start development workflow
  dev:stop              - Stop development workflow

${GREEN}Deployment:${NC}
  deploy [env]          - Deploy to environment (default: staging)
  rollback [env]        - Rollback deployment
  deploy:status [env]   - Show deployment status
  deploy:history [limit] - Show deployment history

${GREEN}Automation:${NC}
  auto:start            - Start intelligent automation manager
  health                - Generate health report
  cleanup [days]        - Clean up old logs (default: 7 days)

${GREEN}Development:${NC}
  test                  - Run tests
  lint                  - Run linting
  lint:fix              - Fix linting issues
  build [env]           - Build project (default: development)
  install               - Install dependencies

${GREEN}Environments:${NC}
  development           - Development mode
  staging               - Staging mode
  production            - Production mode

${GREEN}Examples:${NC}
  $0 start production
  $0 dev:start
  $0 deploy staging
  $0 deploy:status production
  $0 logs zion-frontend-dev 50
  $0 scale zion-backend-dev 3
  $0 health
  $0 cleanup 14

${GREEN}Configuration:${NC}
  - ecosystem.config.js: PM2 ecosystem configuration
  - workflow.config.json: Development workflow configuration
  - All logs are stored in ./logs directory

${YELLOW}Note:${NC} Make sure PM2 is installed globally: npm install -g pm2
EOF
}

# Main function
main() {
    local command="$1"
    local arg1="$2"
    local arg2="$3"
    
    # Check PM2 installation
    check_pm2
    
    # Check dependencies
    check_dependencies
    
    case $command in
        # Core PM2 commands
        "start")
            start_ecosystem "$arg1"
            ;;
        "stop")
            stop_ecosystem
            ;;
        "restart")
            restart_ecosystem
            ;;
        "reload")
            reload_ecosystem
            ;;
        "delete")
            delete_ecosystem
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs "$arg1" "$arg2"
            ;;
        "monit")
            monitor_app "$arg1"
            ;;
        "scale")
            scale_app "$arg1" "$arg2"
            ;;
        "save")
            save_config
            ;;
        "startup")
            setup_startup
            ;;
        
        # Development workflow
        "dev:start")
            start_dev_workflow
            ;;
        "dev:stop")
            stop_dev_workflow
            ;;
        
        # Deployment
        "deploy")
            deploy_to_env "$arg1"
            ;;
        "rollback")
            rollback_deployment "$arg1"
            ;;
        "deploy:status")
            show_deployment_status "$arg1"
            ;;
        "deploy:history")
            show_deployment_history "$arg1"
            ;;
        
        # Automation
        "auto:start")
            start_automation_manager
            ;;
        "health")
            generate_health_report
            ;;
        "cleanup")
            cleanup_logs "$arg1"
            ;;
        
        # Development
        "test")
            run_tests
            ;;
        "lint")
            run_linting
            ;;
        "lint:fix")
            fix_linting
            ;;
        "build")
            build_project "$arg1"
            ;;
        "install")
            install_dependencies
            ;;
        
        # Help
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        
        # Unknown command
        *)
            log "ERROR" "Unknown command: $command"
            echo
            show_help
            exit 1
            ;;
    esac
}

# Handle script interruption
trap 'log "INFO" "Script interrupted"; exit 1' INT TERM

# Run main function with all arguments
main "$@"