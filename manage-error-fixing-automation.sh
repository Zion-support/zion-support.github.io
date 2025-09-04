#!/bin/bash

# Error Fixing Automation Management Script
# This script provides easy management of the error fixing automation system

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ECOSYSTEM_FILE="ecosystem-error-fixing-automation.config.cjs"
LOG_DIR="$PROJECT_ROOT/automation/logs"
REPORTS_DIR="$PROJECT_ROOT/error-reports"

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Show help
show_help() {
    echo -e "${CYAN}🔧 Error Fixing Automation Management Tool${NC}"
    echo "=============================================="
    echo ""
    echo -e "${BLUE}Usage:${NC} $0 [COMMAND]"
    echo ""
    echo -e "${BLUE}Commands:${NC}"
    echo "  ${GREEN}start${NC}          - Start the error fixing automation system"
    echo "  ${GREEN}stop${NC}           - Stop the error fixing automation system"
    echo "  ${GREEN}restart${NC}        - Restart the error fixing automation system"
    echo "  ${GREEN}status${NC}         - Show status of all automation processes"
    echo "  ${GREEN}logs${NC}           - Show logs from all automation processes"
    echo "  ${GREEN}logs [app]${NC}     - Show logs from specific automation app"
    echo "  ${GREEN}monitor${NC}        - Open PM2 monitoring dashboard"
    echo "  ${GREEN}fix-now${NC}        - Run error fixing immediately"
    echo "  ${GREEN}reports${NC}        - Show recent error fixing reports"
    echo "  ${GREEN}clean${NC}          - Clean old logs and reports"
    echo "  ${GREEN}config${NC}         - Show automation configuration"
    echo "  ${GREEN}health${NC}         - Check system health"
    echo "  ${GREEN}help${NC}           - Show this help message"
    echo ""
    echo -e "${BLUE}Examples:${NC}"
    echo "  $0 start                    # Start automation system"
    echo "  $0 status                   # Check status"
    echo "  $0 logs enhanced-error-fixing-automation  # View specific logs"
    echo "  $0 fix-now                  # Run immediate error fixing"
    echo ""
}

# Start automation
start_automation() {
    log "Starting Error Fixing Automation System..."
    ./start-error-fixing-automation.sh
}

# Stop automation
stop_automation() {
    log "Stopping Error Fixing Automation System..."
    pm2 stop ecosystem-error-fixing-automation.config.cjs
    log "Automation system stopped"
}

# Restart automation
restart_automation() {
    log "Restarting Error Fixing Automation System..."
    pm2 restart ecosystem-error-fixing-automation.config.cjs
    log "Automation system restarted"
}

# Show status
show_status() {
    echo -e "${CYAN}📊 Error Fixing Automation Status${NC}"
    echo "=================================="
    pm2 status
    echo ""
    echo -e "${CYAN}📁 Log Files Location${NC}"
    echo "========================"
    echo "Logs: $LOG_DIR"
    echo "Reports: $REPORTS_DIR"
}

# Show logs
show_logs() {
    if [ -n "$1" ]; then
        echo -e "${CYAN}📋 Logs for $1${NC}"
        echo "====================="
        pm2 logs "$1" --lines 50
    else
        echo -e "${CYAN}📋 All Automation Logs${NC}"
        echo "====================="
        pm2 logs --lines 30
    fi
}

# Open monitor
open_monitor() {
    log "Opening PM2 monitoring dashboard..."
    pm2 monit
}

# Run immediate error fixing
run_immediate_fix() {
    log "Running immediate error fixing..."
    if [ -f "scripts/automation/enhanced-error-fixing-automation.cjs" ]; then
        node scripts/automation/enhanced-error-fixing-automation.cjs
        log "Immediate error fixing completed"
    else
        error "Enhanced error fixing script not found"
        exit 1
    fi
}

# Show reports
show_reports() {
    echo -e "${CYAN}📊 Recent Error Fixing Reports${NC}"
    echo "================================="
    
    if [ -d "$REPORTS_DIR" ]; then
        # Find the 5 most recent reports
        recent_reports=$(find "$REPORTS_DIR" -name "enhanced-error-fixing-report-*.json" -type f -printf '%T@ %p\n' | sort -nr | head -5 | cut -d' ' -f2-)
        
        if [ -n "$recent_reports" ]; then
            for report in $recent_reports; do
                echo ""
                echo -e "${BLUE}Report: $(basename "$report")${NC}"
                echo "----------------------------------------"
                
                # Extract key information from the report
                timestamp=$(jq -r '.timestamp' "$report" 2>/dev/null || echo "N/A")
                duration=$(jq -r '.duration' "$report" 2>/dev/null || echo "N/A")
                total_fixes=$(jq -r '.summary.totalFixes' "$report" 2>/dev/null || echo "N/A")
                success=$(jq -r '.summary.success' "$report" 2>/dev/null || echo "N/A")
                
                echo "Timestamp: $timestamp"
                echo "Duration: $duration"
                echo "Total Fixes: $total_fixes"
                echo "Success: $success"
                
                # Show first few fixes
                echo "Recent Fixes:"
                jq -r '.fixesApplied[0:3][] | "- \(.type): \(.description)"' "$report" 2>/dev/null | head -3 || echo "  No fixes applied"
            done
        else
            echo "No reports found"
        fi
    else
        echo "Reports directory not found"
    fi
}

# Clean old logs and reports
clean_old_files() {
    log "Cleaning old logs and reports..."
    
    # Clean logs older than 30 days
    if [ -d "$LOG_DIR" ]; then
        find "$LOG_DIR" -name "*.log" -type f -mtime +30 -delete
        log "Cleaned old log files"
    fi
    
    # Clean reports older than 7 days
    if [ -d "$REPORTS_DIR" ]; then
        find "$REPORTS_DIR" -name "*.json" -type f -mtime +7 -delete
        log "Cleaned old report files"
    fi
    
    log "Cleanup completed"
}

# Show configuration
show_config() {
    echo -e "${CYAN}⚙️  Error Fixing Automation Configuration${NC}"
    echo "========================================="
    echo ""
    
    if [ -f "$ECOSYSTEM_FILE" ]; then
        echo -e "${BLUE}Ecosystem File:${NC} $ECOSYSTEM_FILE"
        echo ""
        
        # Extract app configurations
        apps=$(node -e "
            const config = require('./$ECOSYSTEM_FILE');
            config.apps.forEach((app, index) => {
                console.log(\`\${index + 1}. \${app.name}\`);
                console.log(\`   Script: \${app.script}\`);
                console.log(\`   Cron: \${app.cron_restart || 'N/A'}\`);
                console.log(\`   Memory: \${app.max_memory_restart}\`);
                console.log('');
            });
        ")
        echo "$apps"
    else
        error "Ecosystem configuration file not found"
    fi
}

# Check system health
check_health() {
    echo -e "${CYAN}🏥 Error Fixing Automation Health Check${NC}"
    echo "====================================="
    echo ""
    
    # Check PM2 status
    echo -e "${BLUE}PM2 Status:${NC}"
    if command -v pm2 &> /dev/null; then
        echo "✅ PM2 is installed"
        
        # Check if processes are running
        running_processes=$(pm2 list | grep -c "online" || echo "0")
        echo "📊 Running processes: $running_processes"
        
        if [ "$running_processes" -gt 0 ]; then
            echo "✅ Automation processes are running"
        else
            echo "❌ No automation processes are running"
        fi
    else
        echo "❌ PM2 is not installed"
    fi
    
    echo ""
    
    # Check directories
    echo -e "${BLUE}Directory Status:${NC}"
    if [ -d "$LOG_DIR" ]; then
        echo "✅ Log directory exists: $LOG_DIR"
    else
        echo "❌ Log directory missing: $LOG_DIR"
    fi
    
    if [ -d "$REPORTS_DIR" ]; then
        echo "✅ Reports directory exists: $REPORTS_DIR"
    else
        echo "❌ Reports directory missing: $REPORTS_DIR"
    fi
    
    echo ""
    
    # Check key files
    echo -e "${BLUE}File Status:${NC}"
    if [ -f "$ECOSYSTEM_FILE" ]; then
        echo "✅ Ecosystem config exists: $ECOSYSTEM_FILE"
    else
        echo "❌ Ecosystem config missing: $ECOSYSTEM_FILE"
    fi
    
    if [ -f "scripts/automation/enhanced-error-fixing-automation.cjs" ]; then
        echo "✅ Enhanced error fixing script exists"
    else
        echo "❌ Enhanced error fixing script missing"
    fi
    
    echo ""
    
    # Check recent activity
    echo -e "${BLUE}Recent Activity:${NC}"
    if [ -d "$REPORTS_DIR" ]; then
        latest_report=$(find "$REPORTS_DIR" -name "enhanced-error-fixing-report-*.json" -type f -printf '%T@ %p\n' | sort -nr | head -1 | cut -d' ' -f2-)
        
        if [ -n "$latest_report" ]; then
            report_time=$(stat -c %Y "$latest_report")
            current_time=$(date +%s)
            time_diff=$((current_time - report_time))
            
            if [ $time_diff -lt 3600 ]; then
                echo "✅ Recent activity detected (within last hour)"
            elif [ $time_diff -lt 86400 ]; then
                echo "⚠️  Activity detected (within last 24 hours)"
            else
                echo "❌ No recent activity detected"
            fi
        else
            echo "❌ No reports found"
        fi
    fi
}

# Main execution
main() {
    case "${1:-help}" in
        start)
            start_automation
            ;;
        stop)
            stop_automation
            ;;
        restart)
            restart_automation
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs "$2"
            ;;
        monitor)
            open_monitor
            ;;
        fix-now)
            run_immediate_fix
            ;;
        reports)
            show_reports
            ;;
        clean)
            clean_old_files
            ;;
        config)
            show_config
            ;;
        health)
            check_health
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run main function
main "$@"