#!/bin/bash

# Zion PM2 Intelligent Management Script
# Comprehensive PM2 automation management system

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
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_NAME="zion-app"
LOG_DIR="$SCRIPT_DIR/logs"
AUTOMATION_DIR="$SCRIPT_DIR/automation"

# Ensure logs directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/pm2-manager.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first:"
        echo "  npm install -g pm2"
        exit 1
    fi
}

# Check if ecosystem config exists
check_ecosystem() {
    if [[ ! -f "$SCRIPT_DIR/ecosystem.config.js" ]]; then
        log "ERROR" "ecosystem.config.js not found in $SCRIPT_DIR"
        exit 1
    fi
}

# Show help
show_help() {
    echo -e "${CYAN}Zion PM2 Intelligent Management Script${NC}"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start [env]     Start PM2 processes (dev/staging/prod)"
    echo "  stop            Stop all PM2 processes"
    echo "  restart         Restart all PM2 processes"
    echo "  reload          Reload all PM2 processes"
    echo "  status          Show PM2 process status"
    echo "  logs [app]      Show PM2 logs (specific app or all)"
    echo "  monit           Open PM2 monitoring dashboard"
    echo "  deploy [env]    Deploy to environment (dev/staging/prod)"
    echo "  rollback        Rollback last deployment"
    echo "  automation      Manage automation processes"
    echo "  health          Run health checks"
    echo "  performance     Run performance analysis"
    echo "  backup          Backup PM2 configuration"
    echo "  restore         Restore PM2 configuration"
    echo "  cleanup         Clean up old logs and processes"
    echo "  update          Update PM2 and dependencies"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start dev          # Start development environment"
    echo "  $0 deploy production  # Deploy to production"
    echo "  $0 automation start   # Start automation processes"
    echo "  $0 health check       # Run health checks"
}

# Start PM2 processes
start_pm2() {
    local environment="${1:-development}"
    
    log "INFO" "Starting PM2 processes for $environment environment..."
    
    case $environment in
        "dev"|"development")
            pm2 start ecosystem.config.js --env development
            log "SUCCESS" "Development environment started"
            ;;
        "staging")
            pm2 start ecosystem.config.js --env production
            log "SUCCESS" "Staging environment started"
            ;;
        "prod"|"production")
            pm2 start ecosystem.config.js --env production
            log "SUCCESS" "Production environment started"
            ;;
        *)
            log "ERROR" "Invalid environment: $environment"
            log "INFO" "Valid environments: dev, staging, prod"
            exit 1
            ;;
    esac
    
    pm2 save
    log "INFO" "PM2 configuration saved"
}

# Stop PM2 processes
stop_pm2() {
    log "INFO" "Stopping all PM2 processes..."
    pm2 stop ecosystem.config.js
    log "SUCCESS" "All PM2 processes stopped"
}

# Restart PM2 processes
restart_pm2() {
    log "INFO" "Restarting all PM2 processes..."
    pm2 restart ecosystem.config.js
    log "SUCCESS" "All PM2 processes restarted"
}

# Reload PM2 processes
reload_pm2() {
    log "INFO" "Reloading all PM2 processes..."
    pm2 reload ecosystem.config.js
    log "SUCCESS" "All PM2 processes reloaded"
}

# Show PM2 status
show_status() {
    log "INFO" "PM2 Process Status:"
    echo ""
    pm2 status
}

# Show PM2 logs
show_logs() {
    local app="$1"
    
    if [[ -n "$app" ]]; then
        log "INFO" "Showing logs for $app..."
        pm2 logs "$app"
    else
        log "INFO" "Showing all PM2 logs..."
        pm2 logs
    fi
}

# Open PM2 monitoring
open_monit() {
    log "INFO" "Opening PM2 monitoring dashboard..."
    pm2 monit
}

# Deploy to environment
deploy_to() {
    local environment="$1"
    
    if [[ -z "$environment" ]]; then
        log "ERROR" "Environment not specified"
        log "INFO" "Usage: $0 deploy [dev|staging|prod]"
        exit 1
    fi
    
    log "INFO" "Deploying to $environment environment..."
    
    case $environment in
        "dev"|"development")
            npm run deploy:dev
            ;;
        "staging")
            npm run deploy:staging
            ;;
        "prod"|"production")
            npm run deploy:prod
            ;;
        *)
            log "ERROR" "Invalid environment: $environment"
            exit 1
            ;;
    esac
    
    log "SUCCESS" "Deployment to $environment completed"
}

# Rollback deployment
rollback_deployment() {
    log "INFO" "Rolling back last deployment..."
    npm run deploy:rollback
    log "SUCCESS" "Rollback completed"
}

# Manage automation processes
manage_automation() {
    local action="$1"
    
    case $action in
        "start")
            log "INFO" "Starting automation processes..."
            npm run automation:start
            log "SUCCESS" "Automation processes started"
            ;;
        "stop")
            log "INFO" "Stopping automation processes..."
            npm run automation:stop
            log "SUCCESS" "Automation processes stopped"
            ;;
        "restart")
            log "INFO" "Restarting automation processes..."
            npm run automation:restart
            log "SUCCESS" "Automation processes restarted"
            ;;
        "logs")
            log "INFO" "Showing automation logs..."
            npm run automation:logs
            ;;
        *)
            log "ERROR" "Invalid automation action: $action"
            log "INFO" "Valid actions: start, stop, restart, logs"
            exit 1
            ;;
    esac
}

# Run health checks
run_health_checks() {
    local action="$1"
    
    case $action in
        "check")
            log "INFO" "Running health checks..."
            npm run health:check
            ;;
        "start")
            log "INFO" "Starting health monitor..."
            pm2 start automation/health-monitor.js --name "zion-health-monitor"
            log "SUCCESS" "Health monitor started"
            ;;
        "stop")
            log "INFO" "Stopping health monitor..."
            pm2 stop zion-health-monitor
            log "SUCCESS" "Health monitor stopped"
            ;;
        *)
            log "ERROR" "Invalid health action: $action"
            log "INFO" "Valid actions: check, start, stop"
            exit 1
            ;;
    esac
}

# Run performance analysis
run_performance_analysis() {
    local action="$1"
    
    case $action in
        "analyze")
            log "INFO" "Running performance analysis..."
            npm run performance:analyze
            ;;
        "start")
            log "INFO" "Starting performance monitor..."
            pm2 start automation/performance-monitor.js --name "zion-performance-monitor"
            log "SUCCESS" "Performance monitor started"
            ;;
        "stop")
            log "INFO" "Stopping performance monitor..."
            pm2 stop zion-performance-monitor
            log "SUCCESS" "Performance monitor stopped"
            ;;
        *)
            log "ERROR" "Invalid performance action: $action"
            log "INFO" "Valid actions: analyze, start, stop"
            exit 1
            ;;
    esac
}

# Backup PM2 configuration
backup_pm2() {
    local backup_dir="$LOG_DIR/backups"
    local timestamp=$(date '+%Y%m%d_%H%M%S')
    local backup_file="$backup_dir/pm2_backup_$timestamp.json"
    
    mkdir -p "$backup_dir"
    
    log "INFO" "Creating PM2 configuration backup..."
    pm2 save
    cp ~/.pm2/dump.pm2 "$backup_file"
    
    if [[ -f "$backup_file" ]]; then
        log "SUCCESS" "Backup created: $backup_file"
    else
        log "ERROR" "Backup failed"
        exit 1
    fi
}

# Restore PM2 configuration
restore_pm2() {
    local backup_file="$1"
    
    if [[ -z "$backup_file" ]]; then
        log "ERROR" "Backup file not specified"
        log "INFO" "Usage: $0 restore [backup_file]"
        exit 1
    fi
    
    if [[ ! -f "$backup_file" ]]; then
        log "ERROR" "Backup file not found: $backup_file"
        exit 1
    fi
    
    log "INFO" "Restoring PM2 configuration from $backup_file..."
    pm2 kill
    pm2 resurrect "$backup_file"
    log "SUCCESS" "PM2 configuration restored"
}

# Clean up old logs and processes
cleanup_pm2() {
    log "INFO" "Cleaning up PM2 environment..."
    
    # Remove old log files (keep last 7 days)
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    # Clean PM2 logs
    pm2 flush
    
    # Remove old PM2 processes
    pm2 delete all 2>/dev/null || true
    
    log "SUCCESS" "Cleanup completed"
}

# Update PM2 and dependencies
update_pm2() {
    log "INFO" "Updating PM2..."
    npm update -g pm2
    
    log "INFO" "Updating project dependencies..."
    npm update
    
    if [[ -d "server" ]]; then
        log "INFO" "Updating server dependencies..."
        cd server && npm update && cd ..
    fi
    
    log "SUCCESS" "Updates completed"
}

# Main function
main() {
    local command="$1"
    local option="$2"
    
    # Check prerequisites
    check_pm2
    check_ecosystem
    
    case $command in
        "start")
            start_pm2 "$option"
            ;;
        "stop")
            stop_pm2
            ;;
        "restart")
            restart_pm2
            ;;
        "reload")
            reload_pm2
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs "$option"
            ;;
        "monit")
            open_monit
            ;;
        "deploy")
            deploy_to "$option"
            ;;
        "rollback")
            rollback_deployment
            ;;
        "automation")
            manage_automation "$option"
            ;;
        "health")
            run_health_checks "$option"
            ;;
        "performance")
            run_performance_analysis "$option"
            ;;
        "backup")
            backup_pm2
            ;;
        "restore")
            restore_pm2 "$option"
            ;;
        "cleanup")
            cleanup_pm2
            ;;
        "update")
            update_pm2
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        "")
            show_help
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"