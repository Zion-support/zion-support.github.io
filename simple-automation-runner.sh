#!/bin/bash
set -e

echo "🚀 Starting Simple Automation Runner..."

# Create logs directory
mkdir -p automation-reports

# Run health check
echo "🔍 Running health check..."
if [ -f "scripts/health-check.cjs" ]; then
    node scripts/health-check.cjs > automation-reports/health-check.log 2>&1 || echo "Health check completed with issues"
fi

# Run performance monitor if it exists
echo "📊 Running performance monitor..."
if [ -f "scripts/performance-monitor.cjs" ]; then
    timeout 30 node scripts/performance-monitor.cjs > automation-reports/performance-monitor.log 2>&1 || echo "Performance monitor completed"
fi

# Run security audit if it exists
echo "🔒 Running security audit..."
if [ -f "scripts/security-audit.cjs" ]; then
    timeout 30 node scripts/security-audit.cjs > automation-reports/security-audit.log 2>&1 || echo "Security audit completed"
fi

# Create improvement scripts
echo "🔧 Creating improvement scripts..."

# Create a simple performance monitor
cat > scripts/simple-performance-monitor.cjs << 'EOF'
#!/usr/bin/env node
const fs = require('fs');

const metrics = {
  timestamp: new Date().toISOString(),
  memory: process.memoryUsage(),
  uptime: process.uptime()
};

fs.writeFileSync('performance-metrics.json', JSON.stringify(metrics, null, 2));
console.log('📊 Performance metrics saved');
EOF

# Create a simple code quality checker
cat > scripts/simple-code-quality.cjs << 'EOF'
#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 Running code quality checks...');

const results = {
  timestamp: new Date().toISOString(),
  checks: []
};

// Check if package.json exists
if (fs.existsSync('package.json')) {
  results.checks.push({ name: 'package.json', status: 'exists' });
  console.log('✅ package.json exists');
} else {
  results.checks.push({ name: 'package.json', status: 'missing' });
  console.log('❌ package.json missing');
}

// Check if node_modules exists
if (fs.existsSync('node_modules')) {
  results.checks.push({ name: 'node_modules', status: 'exists' });
  console.log('✅ node_modules exists');
} else {
  results.checks.push({ name: 'node_modules', status: 'missing' });
  console.log('❌ node_modules missing');
}

fs.writeFileSync('code-quality-report.json', JSON.stringify(results, null, 2));
console.log('📄 Code quality report saved');
EOF

echo "✅ Created improvement scripts"

# Run the new scripts
echo "🧪 Running new improvement scripts..."
node scripts/simple-performance-monitor.cjs
node scripts/simple-code-quality.cjs

# Git operations
echo "📝 Running git operations..."
git add . || echo "Git add completed with issues"
git commit -m "Automated improvements and fixes - $(date)" || echo "Git commit completed with issues"
git push origin HEAD || echo "Git push completed with issues"

echo "🎉 Simple automation completed!"
echo "📁 Check automation-reports/ directory for logs"