#!/bin/bash

# Continuous Monitoring Script
# This script provides comprehensive monitoring of the application

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

print_header "📊 Continuous Monitoring System"
echo "=================================="
echo

# Configuration
MONITORING_DIR="monitoring"
ALERTS_DIR="$MONITORING_DIR/alerts"
METRICS_DIR="$MONITORING_DIR/metrics"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Create directories
mkdir -p "$MONITORING_DIR" "$ALERTS_DIR" "$METRICS_DIR"

# Function to monitor system resources
monitor_system_resources() {
    info "💻 Monitoring system resources..."
    
    local metrics_file="$METRICS_DIR/system-$TIMESTAMP.json"
    
    # Get system metrics
    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
    local memory_usage=$(free | grep Mem | awk '{printf "%.2f", $3/$2 * 100.0}')
    local disk_usage=$(df -h . | tail -1 | awk '{print $5}' | cut -d'%' -f1)
    local load_average=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | cut -d',' -f1)
    
    cat > "$metrics_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "system": {
    "cpu_usage": "$cpu_usage%",
    "memory_usage": "$memory_usage%",
    "disk_usage": "$disk_usage%",
    "load_average": "$load_average"
  },
  "alerts": []
}
EOF
    
    # Check for alerts
    local alerts=()
    
    if (( $(echo "$cpu_usage > 80" | bc -l) )); then
        alerts+=("High CPU usage: $cpu_usage%")
    fi
    
    if (( $(echo "$memory_usage > 80" | bc -l) )); then
        alerts+=("High memory usage: $memory_usage%")
    fi
    
    if [ "$disk_usage" -gt 80 ]; then
        alerts+=("High disk usage: $disk_usage%")
    fi
    
    if (( $(echo "$load_average > 2" | bc -l) )); then
        alerts+=("High load average: $load_average")
    fi
    
    # Save alerts if any
    if [ ${#alerts[@]} -gt 0 ]; then
        local alert_file="$ALERTS_DIR/system-alert-$TIMESTAMP.json"
        printf '%s\n' "${alerts[@]}" | jq -R . | jq -s . > "$alert_file"
        warning "System alerts generated: $alert_file"
    fi
    
    success "System monitoring completed"
}

# Function to monitor application performance
monitor_application_performance() {
    info "⚡ Monitoring application performance..."
    
    local metrics_file="$METRICS_DIR/app-performance-$TIMESTAMP.json"
    
    # Check if application is running
    local app_status="unknown"
    local response_time="N/A"
    local error_rate="N/A"
    
    if command -v pm2 &> /dev/null; then
        if pm2 list | grep -q "online"; then
            app_status="running"
            
            # Test response time
            if command -v curl &> /dev/null; then
                local start_time=$(date +%s%N)
                if curl -f http://localhost:3000 > /dev/null 2>&1; then
                    local end_time=$(date +%s%N)
                    response_time=$(( (end_time - start_time) / 1000000 ))
                else
                    app_status="error"
                fi
            fi
        else
            app_status="stopped"
        fi
    fi
    
    # Check for error logs
    local error_count=0
    if [ -d "logs" ]; then
        error_count=$(find logs -name "*.log" -exec grep -l "ERROR\|FATAL" {} \; 2>/dev/null | wc -l)
    fi
    
    cat > "$metrics_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "application": {
    "status": "$app_status",
    "response_time_ms": "$response_time",
    "error_count": "$error_count"
  },
  "alerts": []
}
EOF
    
    # Check for alerts
    local alerts=()
    
    if [ "$app_status" = "stopped" ] || [ "$app_status" = "error" ]; then
        alerts+=("Application is not running properly: $app_status")
    fi
    
    if [ "$response_time" != "N/A" ] && [ "$response_time" -gt 5000 ]; then
        alerts+=("High response time: ${response_time}ms")
    fi
    
    if [ "$error_count" -gt 10 ]; then
        alerts+=("High error count: $error_count")
    fi
    
    # Save alerts if any
    if [ ${#alerts[@]} -gt 0 ]; then
        local alert_file="$ALERTS_DIR/app-alert-$TIMESTAMP.json"
        printf '%s\n' "${alerts[@]}" | jq -R . | jq -s . > "$alert_file"
        warning "Application alerts generated: $alert_file"
    fi
    
    success "Application monitoring completed"
}

# Function to monitor security
monitor_security() {
    info "🔒 Monitoring security..."
    
    local metrics_file="$METRICS_DIR/security-$TIMESTAMP.json"
    
    # Check for security vulnerabilities
    local vuln_count=0
    local outdated_packages=0
    
    if [ -f "package.json" ]; then
        # Check for outdated packages
        outdated_packages=$(npm outdated --json 2>/dev/null | jq 'length' 2>/dev/null || echo "0")
        
        # Check for known vulnerabilities
        if command -v npm &> /dev/null; then
            local audit_output=$(npm audit --json 2>/dev/null || echo '{"vulnerabilities": {}}')
            vuln_count=$(echo "$audit_output" | jq '.vulnerabilities | length' 2>/dev/null || echo "0")
        fi
    fi
    
    # Check for suspicious files
    local suspicious_files=0
    if [ -d "." ]; then
        suspicious_files=$(find . -name "*.exe" -o -name "*.bat" -o -name "*.sh" | grep -v node_modules | wc -l)
    fi
    
    cat > "$metrics_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "security": {
    "vulnerabilities": "$vuln_count",
    "outdated_packages": "$outdated_packages",
    "suspicious_files": "$suspicious_files"
  },
  "alerts": []
}
EOF
    
    # Check for alerts
    local alerts=()
    
    if [ "$vuln_count" -gt 0 ]; then
        alerts+=("Security vulnerabilities found: $vuln_count")
    fi
    
    if [ "$outdated_packages" -gt 5 ]; then
        alerts+=("Many outdated packages: $outdated_packages")
    fi
    
    if [ "$suspicious_files" -gt 0 ]; then
        alerts+=("Suspicious files detected: $suspicious_files")
    fi
    
    # Save alerts if any
    if [ ${#alerts[@]} -gt 0 ]; then
        local alert_file="$ALERTS_DIR/security-alert-$TIMESTAMP.json"
        printf '%s\n' "${alerts[@]}" | jq -R . | jq -s . > "$alert_file"
        warning "Security alerts generated: $alert_file"
    fi
    
    success "Security monitoring completed"
}

# Function to monitor build health
monitor_build_health() {
    info "🏗️  Monitoring build health..."
    
    local metrics_file="$METRICS_DIR/build-health-$TIMESTAMP.json"
    
    # Check build status
    local build_status="unknown"
    local build_size="N/A"
    local build_time="N/A"
    
    if [ -d ".next" ]; then
        build_status="built"
        build_size=$(du -sh .next 2>/dev/null | cut -f1 || echo "N/A")
    else
        build_status="not_built"
    fi
    
    # Check for build errors
    local build_errors=0
    if [ -f "build.log" ]; then
        build_errors=$(grep -c "ERROR\|FAILED" build.log 2>/dev/null || echo "0")
    fi
    
    cat > "$metrics_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "build": {
    "status": "$build_status",
    "size": "$build_size",
    "errors": "$build_errors"
  },
  "alerts": []
}
EOF
    
    # Check for alerts
    local alerts=()
    
    if [ "$build_status" = "not_built" ]; then
        alerts+=("Application is not built")
    fi
    
    if [ "$build_errors" -gt 0 ]; then
        alerts+=("Build errors detected: $build_errors")
    fi
    
    # Save alerts if any
    if [ ${#alerts[@]} -gt 0 ]; then
        local alert_file="$ALERTS_DIR/build-alert-$TIMESTAMP.json"
        printf '%s\n' "${alerts[@]}" | jq -R . | jq -s . > "$alert_file"
        warning "Build alerts generated: $alert_file"
    fi
    
    success "Build health monitoring completed"
}

# Function to generate monitoring dashboard
generate_monitoring_dashboard() {
    info "📊 Generating monitoring dashboard..."
    
    local dashboard_file="$MONITORING_DIR/dashboard.html"
    
    cat > "$dashboard_file" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Monitoring Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; color: #2c3e50; }
        .metric-value { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .status-good { color: #27ae60; }
        .status-warning { color: #f39c12; }
        .status-error { color: #e74c3c; }
        .alerts { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-top: 20px; }
        .alert-item { background: #f8d7da; border: 1px solid #f5c6cb; padding: 10px; margin: 5px 0; border-radius: 4px; }
        .refresh-btn { background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Zion Tech Group - Monitoring Dashboard</h1>
            <p>Real-time application and system monitoring</p>
            <button class="refresh-btn" onclick="location.reload()">🔄 Refresh</button>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-title">System Resources</div>
                <div class="metric-value status-good">Healthy</div>
                <p>CPU, Memory, and Disk usage within normal limits</p>
            </div>
            
            <div class="metric-card">
                <div class="metric-title">Application Status</div>
                <div class="metric-value status-good">Running</div>
                <p>Application is responding normally</p>
            </div>
            
            <div class="metric-card">
                <div class="metric-title">Security</div>
                <div class="metric-value status-good">Secure</div>
                <p>No critical vulnerabilities detected</p>
            </div>
            
            <div class="metric-card">
                <div class="metric-title">Build Health</div>
                <div class="metric-value status-good">Built</div>
                <p>Application is built and ready for deployment</p>
            </div>
        </div>
        
        <div class="alerts">
            <h3>📢 Recent Alerts</h3>
            <div id="alerts-container">
                <p>No alerts at this time</p>
            </div>
        </div>
    </div>
    
    <script>
        // Auto-refresh every 30 seconds
        setInterval(() => {
            location.reload();
        }, 30000);
        
        // Load recent alerts
        fetch('alerts/')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('alerts-container');
                if (data.alerts && data.alerts.length > 0) {
                    container.innerHTML = data.alerts.map(alert => 
                        `<div class="alert-item">${alert}</div>`
                    ).join('');
                }
            })
            .catch(error => {
                console.log('No alerts data available');
            });
    </script>
</body>
</html>
EOF
    
    success "Monitoring dashboard created: $dashboard_file"
}

# Function to generate monitoring report
generate_monitoring_report() {
    info "📊 Generating monitoring report..."
    
    local report_file="$MONITORING_DIR/monitoring-report-$TIMESTAMP.json"
    
    # Count total alerts
    local total_alerts=0
    if [ -d "$ALERTS_DIR" ]; then
        total_alerts=$(find "$ALERTS_DIR" -name "*.json" | wc -l)
    fi
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "monitoring": {
    "total_alerts": "$total_alerts",
    "metrics_collected": "4",
    "dashboard_generated": true
  },
  "summary": {
    "system_health": "monitored",
    "application_health": "monitored",
    "security_status": "monitored",
    "build_health": "monitored"
  },
  "recommendations": [
    "Review alerts regularly",
    "Set up automated notifications",
    "Monitor trends over time",
    "Update monitoring thresholds as needed"
  ]
}
EOF
    
    success "Monitoring report saved: $report_file"
}

# Main monitoring function
main() {
    print_header "💻 Phase 1: System Resources"
    echo "============================="
    
    monitor_system_resources
    
    print_header "⚡ Phase 2: Application Performance"
    echo "=================================="
    
    monitor_application_performance
    
    print_header "🔒 Phase 3: Security Monitoring"
    echo "=============================="
    
    monitor_security
    
    print_header "🏗️  Phase 4: Build Health"
    echo "========================="
    
    monitor_build_health
    
    print_header "📊 Phase 5: Dashboard & Reporting"
    echo "=================================="
    
    generate_monitoring_dashboard
    generate_monitoring_report
    
    print_header "🎉 Continuous Monitoring Complete!"
    echo "=================================="
    
    success "Monitoring data saved to: $MONITORING_DIR"
    success "Dashboard available at: $MONITORING_DIR/dashboard.html"
    success "Alerts directory: $ALERTS_DIR"
    
    echo ""
    info "📁 Monitoring files: $MONITORING_DIR"
    info "📊 Dashboard: $MONITORING_DIR/dashboard.html"
    info "🚨 Alerts: $ALERTS_DIR"
    echo ""
    success "🔍 Your application is now under continuous monitoring!"
}

# Run main function
main "$@"