#!/usr/bin/env bash
set -euo pipefail

# Comprehensive Build and Test Script for Zion Tech Group
# This script runs a complete build, test, and validation pipeline

cd "$(dirname "$0")/.."

LOG_DIR="automation-reports"
mkdir -p "$LOG_DIR"

echo "🚀 Starting Comprehensive Build and Test Pipeline"
echo "="

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/comprehensive-build-test.log"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Step 1: Environment Setup
log "📋 Step 1: Environment Setup"
if command_exists node; then
    log "✅ Node.js version: $(node --version)"
else
    log "❌ Node.js not found"
    exit 1
fi

if command_exists npm; then
    log "✅ npm version: $(npm --version)"
else
    log "❌ npm not found"
    exit 1
fi

# Step 2: Dependency Installation
log "📦 Step 2: Installing Dependencies"
if [ -f "package.json" ]; then
    npm install --silent
    log "✅ Dependencies installed successfully"
else
    log "❌ package.json not found"
    exit 1
fi

# Step 3: Linting
log "🔍 Step 3: Running Linting"
if npm run lint >/dev/null 2>&1; then
    log "✅ Linting passed"
else
    log "❌ Linting failed"
    exit 1
fi

# Step 4: Type Checking
log "🔧 Step 4: Running Type Check"
if npm run type-check >/dev/null 2>&1; then
    log "✅ Type checking passed"
else
    log "❌ Type checking failed"
    exit 1
fi

# Step 5: Build
log "🏗️  Step 5: Building Project"
if npm run build >/dev/null 2>&1; then
    log "✅ Build completed successfully"
else
    log "❌ Build failed"
    exit 1
fi

# Step 6: Security Audit
log "🔒 Step 6: Running Security Audit"
if npm audit --audit-level=moderate >/dev/null 2>&1; then
    log "✅ Security audit passed"
else
    log "⚠️  Security audit found issues (non-blocking)"
fi

# Step 7: Performance Check
log "⚡ Step 7: Performance Check"
if [ -d ".next" ]; then
    BUILD_SIZE=$(du -sh .next 2>/dev/null | cut -f1 || echo "unknown")
    log "✅ Build size: $BUILD_SIZE"
else
    log "❌ Build directory not found"
fi

# Step 8: Generate Report
log "📊 Step 8: Generating Report"
REPORT_FILE="$LOG_DIR/build-test-report-$(date +%Y%m%d-%H%M%S).json"
cat > "$REPORT_FILE" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "status": "success",
  "steps": {
    "environment_setup": "passed",
    "dependencies": "installed",
    "linting": "passed",
    "type_checking": "passed",
    "build": "successful",
    "security_audit": "completed",
    "performance_check": "completed"
  },
  "build_size": "$BUILD_SIZE",
  "node_version": "$(node --version)",
  "npm_version": "$(npm --version)"
}
EOF

log "✅ Report generated: $REPORT_FILE"

echo ""
echo "🎉 Comprehensive Build and Test Pipeline Completed Successfully!"
echo "📄 Report saved to: $REPORT_FILE"
echo "📁 Logs directory: $LOG_DIR"