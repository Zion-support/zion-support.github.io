#!/bin/bash

# PM2 Manager Script for bolt.new.zion.app
# This script replaces GitHub Actions with local PM2 automation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem.config.js"
LOGS_DIR="logs"

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Please install it first: npm install -g pm2"
        exit 1
    fi
}

# Create logs directory if it doesn't exist
setup_logs() {
    if [ ! -d "$LOGS_DIR" ]; then
        log "Creating logs directory..."
        mkdir -p "$LOGS_DIR"
    fi
}

# Start all services
start_all() {
    log "Starting all PM2 services..."
    setup_logs
    
    # Start development server
    pm2 start ecosystem.config.js --only dev-server
    log "✅ Development server started"
    
    # Start backend if it exists
    if [ -d "server" ]; then
        pm2 start ecosystem.config.js --only dev-backend
        log "✅ Backend server started"
    else
        warning "Backend directory not found, skipping backend server"
    fi
    
    # Start other services
    pm2 start ecosystem.config.js --only lint-service
    pm2 start ecosystem.config.js --only type-check-service
    pm2 start ecosystem.config.js --only security-audit
    pm2 start ecosystem.config.js --only health-check
    
    log "✅ All services started successfully"
    pm2 status
}

# Stop all services
stop_all() {
    log "Stopping all PM2 services..."
    pm2 stop all
    log "✅ All services stopped"
}

# Restart all services
restart_all() {
    log "Restarting all PM2 services..."
    pm2 restart all
    log "✅ All services restarted"
}

# Reload all services
reload_all() {
    log "Reloading all PM2 services..."
    pm2 reload all
    log "✅ All services reloaded"
}

# Show status
status() {
    log "PM2 Status:"
    pm2 status
}

# Show logs
logs() {
    local service=${1:-all}
    log "Showing logs for: $service"
    pm2 logs $service
}

# Monitor
monitor() {
    log "Starting PM2 monitor..."
    pm2 monit
}

# Clean up
cleanup() {
    log "Cleaning up PM2 processes..."
    pm2 delete all
    pm2 kill
    log "✅ PM2 cleanup completed"
}

# Build and deploy
build_deploy() {
    log "Building and deploying application..."
    
    # Install dependencies
    log "Installing dependencies..."
    npm install
    
    # Build the application
    log "Building application..."
    npm run build
    
    # Start production server
    log "Starting production server..."
    pm2 start ecosystem.config.js --only production-server
    
    log "✅ Build and deployment completed"
}

# Run specific service
run_service() {
    local service=$1
    if [ -z "$service" ]; then
        error "Please specify a service name"
        echo "Available services: dev-server, dev-backend, build-watcher, production-server, lint-service, type-check-service, security-audit, health-check"
        exit 1
    fi
    
    log "Starting service: $service"
    pm2 start ecosystem.config.js --only $service
    log "✅ Service $service started"
}

# Show help
show_help() {
    echo "PM2 Manager Script for bolt.new.zion.app"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start all services"
    echo "  stop        Stop all services"
    echo "  restart     Restart all services"
    echo "  reload      Reload all services"
    echo "  status      Show status of all services"
    echo "  logs [SERVICE] Show logs (all or specific service)"
    echo "  monitor     Start PM2 monitor"
    echo "  build       Build and deploy application"
    echo "  run SERVICE Run specific service"
    echo "  cleanup     Clean up all PM2 processes"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all services"
    echo "  $0 run dev-server           # Start only development server"
    echo "  $0 logs dev-server          # Show logs for development server"
    echo "  $0 build                    # Build and deploy"
}

# Main execution
main() {
    check_pm2
    
    case "${1:-help}" in
        start)
            start_all
            ;;
        stop)
            stop_all
            ;;
        restart)
            restart_all
            ;;
        reload)
            reload_all
            ;;
        status)
            status
            ;;
        logs)
            logs "$2"
            ;;
        monitor)
            monitor
            ;;
        build)
            build_deploy
            ;;
        run)
            run_service "$2"
            ;;
        cleanup)
            cleanup
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"