#!/bin/bash

# Advanced Monitoring Script for Zion Tech Group App
# This script provides comprehensive monitoring, alerting, and health checks

set -e

# Configuration
LOG_DIR="monitoring/logs"
ALERT_DIR="monitoring/alerts"
METRICS_DIR="monitoring/metrics"
DASHBOARD_DIR="monitoring/dashboard"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create directories
mkdir -p "$LOG_DIR" "$ALERT_DIR" "$METRICS_DIR" "$DASHBOARD_DIR"

echo -e "${BLUE}🔍 Starting Advanced Monitoring System...${NC}"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/monitoring-$TIMESTAMP.log"
}

# Function to check application health
check_app_health() {
    log "Checking application health..."
    
    # Check if the app is running
    if pgrep -f "next" > /dev/null; then
        log "✅ Next.js application is running"
        APP_STATUS="healthy"
    else
        log "❌ Next.js application is not running"
        APP_STATUS="unhealthy"
    fi
    
    # Check build status
    if npm run build > /dev/null 2>&1; then
        log "✅ Application builds successfully"
        BUILD_STATUS="success"
    else
        log "❌ Application build failed"
        BUILD_STATUS="failed"
    fi
    
    # Check for syntax errors
    SYNTAX_ERRORS=$(npm run build 2>&1 | grep -c "Error:" || true)
    if [ "$SYNTAX_ERRORS" -eq 0 ]; then
        log "✅ No syntax errors found"
        SYNTAX_STATUS="clean"
    else
        log "❌ Found $SYNTAX_ERRORS syntax errors"
        SYNTAX_STATUS="errors"
    fi
}

# Function to check system resources
check_system_resources() {
    log "Checking system resources..."
    
    # CPU usage
    CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    log "CPU Usage: ${CPU_USAGE}%"
    
    # Memory usage
    MEMORY_USAGE=$(free | grep Mem | awk '{printf "%.2f", $3/$2 * 100.0}')
    log "Memory Usage: ${MEMORY_USAGE}%"
    
    # Disk usage
    DISK_USAGE=$(df -h / | awk 'NR==2{print $5}' | sed 's/%//')
    log "Disk Usage: ${DISK_USAGE}%"
    
    # Check if resources are within acceptable limits
    if (( $(echo "$CPU_USAGE > 80" | bc -l) )); then
        log "⚠️ High CPU usage detected: ${CPU_USAGE}%"
        echo "HIGH_CPU_USAGE" > "$ALERT_DIR/cpu-alert-$TIMESTAMP.txt"
    fi
    
    if (( $(echo "$MEMORY_USAGE > 80" | bc -l) )); then
        log "⚠️ High memory usage detected: ${MEMORY_USAGE}%"
        echo "HIGH_MEMORY_USAGE" > "$ALERT_DIR/memory-alert-$TIMESTAMP.txt"
    fi
    
    if [ "$DISK_USAGE" -gt 80 ]; then
        log "⚠️ High disk usage detected: ${DISK_USAGE}%"
        echo "HIGH_DISK_USAGE" > "$ALERT_DIR/disk-alert-$TIMESTAMP.txt"
    fi
}

# Function to check network connectivity
check_network() {
    log "Checking network connectivity..."
    
    # Check internet connectivity
    if ping -c 1 google.com > /dev/null 2>&1; then
        log "✅ Internet connectivity is working"
        NETWORK_STATUS="connected"
    else
        log "❌ Internet connectivity issues detected"
        NETWORK_STATUS="disconnected"
    fi
    
    # Check if the app is accessible locally
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        log "✅ Application is accessible on localhost:3000"
        APP_ACCESSIBLE="true"
    else
        log "❌ Application is not accessible on localhost:3000"
        APP_ACCESSIBLE="false"
    fi
}

# Function to check dependencies
check_dependencies() {
    log "Checking dependencies..."
    
    # Check for outdated packages
    OUTDATED_COUNT=$(npm outdated --json | jq 'length' 2>/dev/null || echo "0")
    log "Outdated packages: $OUTDATED_COUNT"
    
    # Check for security vulnerabilities
    if npm audit --audit-level=moderate > /dev/null 2>&1; then
        log "✅ No moderate or high security vulnerabilities found"
        SECURITY_STATUS="secure"
    else
        log "⚠️ Security vulnerabilities detected"
        SECURITY_STATUS="vulnerable"
        npm audit --audit-level=moderate > "$ALERT_DIR/security-audit-$TIMESTAMP.txt"
    fi
}

# Function to generate performance metrics
generate_performance_metrics() {
    log "Generating performance metrics..."
    
    # Get build time
    BUILD_START=$(date +%s)
    npm run build > /dev/null 2>&1
    BUILD_END=$(date +%s)
    BUILD_TIME=$((BUILD_END - BUILD_START))
    
    # Get bundle size
    if [ -d ".next" ]; then
        BUNDLE_SIZE=$(du -sh .next | cut -f1)
    else
        BUNDLE_SIZE="N/A"
    fi
    
    # Create metrics JSON
    cat > "$METRICS_DIR/performance-$TIMESTAMP.json" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "app_status": "$APP_STATUS",
  "build_status": "$BUILD_STATUS",
  "syntax_status": "$SYNTAX_STATUS",
  "network_status": "$NETWORK_STATUS",
  "app_accessible": "$APP_ACCESSIBLE",
  "security_status": "$SECURITY_STATUS",
  "cpu_usage": "$CPU_USAGE",
  "memory_usage": "$MEMORY_USAGE",
  "disk_usage": "$DISK_USAGE",
  "outdated_packages": $OUTDATED_COUNT,
  "build_time_seconds": $BUILD_TIME,
  "bundle_size": "$BUNDLE_SIZE"
}
EOF
}

# Function to generate HTML dashboard
generate_dashboard() {
    log "Generating monitoring dashboard..."
    
    cat > "$DASHBOARD_DIR/index.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Monitoring Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #1a1a1a; color: #fff; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 30px; }
        .status-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .status-card { background: #2a2a2a; padding: 20px; border-radius: 8px; border-left: 4px solid #4CAF50; }
        .status-card.warning { border-left-color: #FF9800; }
        .status-card.error { border-left-color: #F44336; }
        .metric { display: flex; justify-content: space-between; margin: 10px 0; }
        .metric-value { font-weight: bold; }
        .timestamp { color: #888; font-size: 0.9em; }
        .refresh-btn { background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
        .refresh-btn:hover { background: #45a049; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 Zion Tech Group - Monitoring Dashboard</h1>
            <p class="timestamp">Last updated: <span id="timestamp"></span></p>
            <button class="refresh-btn" onclick="location.reload()">Refresh</button>
        </div>
        
        <div class="status-grid" id="statusGrid">
            <!-- Status cards will be populated by JavaScript -->
        </div>
    </div>

    <script>
        // Load the latest metrics
        async function loadMetrics() {
            try {
                const response = await fetch('/api/metrics/latest');
                const data = await response.json();
                updateDashboard(data);
            } catch (error) {
                console.error('Error loading metrics:', error);
                // Fallback to static data
                updateDashboard({
                    app_status: 'unknown',
                    build_status: 'unknown',
                    network_status: 'unknown',
                    cpu_usage: 'N/A',
                    memory_usage: 'N/A',
                    disk_usage: 'N/A'
                });
            }
        }

        function updateDashboard(data) {
            const grid = document.getElementById('statusGrid');
            const timestamp = document.getElementById('timestamp');
            
            timestamp.textContent = new Date().toLocaleString();
            
            const statusCards = [
                {
                    title: 'Application Status',
                    status: data.app_status,
                    class: data.app_status === 'healthy' ? 'status-card' : 'status-card error'
                },
                {
                    title: 'Build Status',
                    status: data.build_status,
                    class: data.build_status === 'success' ? 'status-card' : 'status-card error'
                },
                {
                    title: 'Network Status',
                    status: data.network_status,
                    class: data.network_status === 'connected' ? 'status-card' : 'status-card error'
                },
                {
                    title: 'System Resources',
                    status: 'CPU: ' + data.cpu_usage + '% | Memory: ' + data.memory_usage + '% | Disk: ' + data.disk_usage + '%',
                    class: 'status-card'
                }
            ];

            grid.innerHTML = statusCards.map(card => `
                <div class="${card.class}">
                    <h3>${card.title}</h3>
                    <p>${card.status}</p>
                </div>
            `).join('');
        }

        // Load metrics on page load
        loadMetrics();
        
        // Auto-refresh every 30 seconds
        setInterval(loadMetrics, 30000);
    </script>
</body>
</html>
EOF
}

# Function to send alerts
send_alerts() {
    log "Checking for alerts..."
    
    ALERT_COUNT=$(find "$ALERT_DIR" -name "*.txt" -mmin -5 | wc -l)
    
    if [ "$ALERT_COUNT" -gt 0 ]; then
        log "⚠️ $ALERT_COUNT new alerts detected"
        
        # Create alert summary
        cat > "$ALERT_DIR/alert-summary-$TIMESTAMP.txt" << EOF
Zion Tech Group - Alert Summary
Generated: $(date)
Total Alerts: $ALERT_COUNT

Recent Alerts:
$(find "$ALERT_DIR" -name "*.txt" -mmin -5 -exec basename {} \; | head -10)
EOF
        
        # In a real implementation, you would send alerts via email, Slack, etc.
        log "Alert summary created: $ALERT_DIR/alert-summary-$TIMESTAMP.txt"
    else
        log "✅ No new alerts"
    fi
}

# Function to cleanup old files
cleanup_old_files() {
    log "Cleaning up old monitoring files..."
    
    # Keep only last 7 days of logs
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    find "$ALERT_DIR" -name "*.txt" -mtime +7 -delete 2>/dev/null || true
    find "$METRICS_DIR" -name "*.json" -mtime +7 -delete 2>/dev/null || true
    
    log "✅ Cleanup completed"
}

# Main execution
main() {
    log "Starting comprehensive monitoring check..."
    
    check_app_health
    check_system_resources
    check_network
    check_dependencies
    generate_performance_metrics
    generate_dashboard
    send_alerts
    cleanup_old_files
    
    log "✅ Monitoring check completed successfully"
    
    # Print summary
    echo -e "\n${GREEN}📊 Monitoring Summary:${NC}"
    echo -e "Application Status: $APP_STATUS"
    echo -e "Build Status: $BUILD_STATUS"
    echo -e "Network Status: $NETWORK_STATUS"
    echo -e "Security Status: $SECURITY_STATUS"
    echo -e "CPU Usage: ${CPU_USAGE}%"
    echo -e "Memory Usage: ${MEMORY_USAGE}%"
    echo -e "Disk Usage: ${DISK_USAGE}%"
    echo -e "Outdated Packages: $OUTDATED_COUNT"
    echo -e "Build Time: ${BUILD_TIME}s"
    echo -e "Bundle Size: $BUNDLE_SIZE"
    
    echo -e "\n${BLUE}📁 Files generated:${NC}"
    echo -e "Logs: $LOG_DIR/monitoring-$TIMESTAMP.log"
    echo -e "Metrics: $METRICS_DIR/performance-$TIMESTAMP.json"
    echo -e "Dashboard: $DASHBOARD_DIR/index.html"
    
    if [ "$ALERT_COUNT" -gt 0 ]; then
        echo -e "Alerts: $ALERT_DIR/alert-summary-$TIMESTAMP.txt"
    fi
}

# Run main function
main "$@"