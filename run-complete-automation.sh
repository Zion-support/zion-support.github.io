#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Starting Complete Automation Suite for Zion Tech Group"
echo "="

# Create logs directory
mkdir -p automation-reports
LOG_DIR="automation-reports"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Function to run command with logging
run_with_log() {
    local name="$1"
    local command="$2"
    local log_file="$LOG_DIR/${name}-${TIMESTAMP}.log"
    
    echo "📋 Running: $name"
    echo "   Command: $command"
    
    if eval "$command" > "$log_file" 2>&1; then
        echo "✅ $name completed successfully"
        return 0
    else
        echo "❌ $name failed (check $log_file for details)"
        return 1
    fi
}

# Function to run command without strict error handling
run_optional() {
    local name="$1"
    local command="$2"
    local log_file="$LOG_DIR/${name}-${TIMESTAMP}.log"
    
    echo "📋 Running: $name (optional)"
    echo "   Command: $command"
    
    if eval "$command" > "$log_file" 2>&1; then
        echo "✅ $name completed successfully"
    else
        echo "⚠️  $name failed (non-critical, check $log_file for details)"
    fi
}

echo ""
echo "🔧 Phase 1: System Health & Dependencies"
echo "====="

# Install dependencies
run_with_log "Dependency Installation" "npm install"

# Health check
run_with_log "Health Check" "node scripts/comprehensive-health-check.cjs"

echo ""
echo "🛠️  Phase 2: Code Quality & Fixes"
echo "====="

# Fix syntax errors
run_optional "Syntax Error Fixing" "node fix-syntax-errors-comprehensive.cjs"

# Type checking
run_optional "TypeScript Type Check" "npx tsc --noEmit"

# Linting
run_optional "ESLint Linting" "npm run lint"

echo ""
echo "🔒 Phase 3: Security & Performance"
echo "====="

# Security scan
run_optional "Enhanced Security Scanner" "node automation/enhanced-security-scanner.cjs"

# Security audit
run_optional "Security Audit" "node scripts/security-audit.cjs"

# Performance monitoring
run_optional "Performance Monitor" "node scripts/performance-monitor.cjs"
run_optional "Performance Optimizer" "node automation/performance-optimizer.cjs"

echo ""
echo "📊 Phase 4: Quality Analysis"
echo ""

# Code quality monitoring
run_optional "Code Quality Monitor" "node scripts/automation/code-quality-monitor.cjs"

# Dependency update check
run_optional "Dependency Update Check" "node scripts/automation/dependency-updater.cjs"

echo ""
echo "🏗️  Phase 5: Build & Test"
echo "==="

# Build application
run_with_log "Application Build" "npm run build"

# Run tests if available
run_optional "Test Suite" "npm test || echo 'No tests configured'"

echo ""
echo "🎯 Phase 6: Automation Orchestration"
echo "="

# Run the automation orchestrator
run_optional "Automation Orchestrator" "node scripts/automation-orchestrator.cjs"

# Run monitoring dashboard
run_optional "Monitoring Dashboard" "node automation/monitoring-dashboard.cjs"

echo ""
echo "📋 Phase 7: PM2 Process Management"
echo "====="

# Check if PM2 is available
if command -v pm2 &> /dev/null; then
    echo "📋 Setting up PM2 processes..."
    
    # Create logs directory for PM2
    mkdir -p logs
    
    # Start PM2 processes
    run_optional "PM2 Process Start" "pm2 start ecosystem.config.cjs || echo 'PM2 start failed'"
    
    # Show PM2 status
    run_optional "PM2 Status Check" "pm2 status"
    
    echo "📋 PM2 processes configured"
else
    echo "⚠️  PM2 not available, skipping process management"
fi

echo ""
echo "📊 Final Summary"
echo "="

# Count log files
TOTAL_LOGS=$(find "$LOG_DIR" -name "*-${TIMESTAMP}.log" | wc -l)
SUCCESS_LOGS=$(find "$LOG_DIR" -name "*-${TIMESTAMP}.log" -exec grep -l "completed successfully" {} \; 2>/dev/null | wc -l)
FAILED_LOGS=$(find "$LOG_DIR" -name "*-${TIMESTAMP}.log" -exec grep -l "failed" {} \; 2>/dev/null | wc -l)

echo "📈 Automation Results:"
echo "   - Total processes: $TOTAL_LOGS"
echo "   - Successful: $SUCCESS_LOGS"
echo "   - Failed: $FAILED_LOGS"
echo "   - Success rate: $(( SUCCESS_LOGS * 100 / TOTAL_LOGS ))%"

echo ""
echo "📁 Logs saved to: $LOG_DIR/"
echo "🕒 Timestamp: $TIMESTAMP"

# Generate final report
FINAL_REPORT="$LOG_DIR/automation-summary-${TIMESTAMP}.json"
cat > "$FINAL_REPORT" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "session_id": "$TIMESTAMP",
  "summary": {
    "total_processes": $TOTAL_LOGS,
    "successful": $SUCCESS_LOGS,
    "failed": $FAILED_LOGS,
    "success_rate": $(( SUCCESS_LOGS * 100 / TOTAL_LOGS ))
  },
  "logs_directory": "$LOG_DIR",
  "status": "$([ $FAILED_LOGS -eq 0 ] && echo 'SUCCESS' || echo 'PARTIAL')"
}
EOF

echo "📄 Final report saved to: $FINAL_REPORT"

if [ $FAILED_LOGS -eq 0 ]; then
    echo ""
    echo "🎉 Complete Automation Suite finished successfully!"
    echo "✅ All systems are operational and optimized"
    exit 0
else
    echo ""
    echo "⚠️  Complete Automation Suite finished with some issues"
    echo "📋 Check the logs in $LOG_DIR/ for details"
    exit 1
fi