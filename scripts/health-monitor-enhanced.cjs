#!/usr/bin/env node

/**
 * Enhanced Health Monitor
 * Monitors application health and performance
 */

const fs = require('fs');
const path = require('path');

console.log('🏥 Starting enhanced health monitoring...');

// Health Monitor configuration
const config = {
  outputDir: path.join(__dirname, '..', 'health-reports'),
  checks: {
    memoryUsage: true,
    cpuUsage: true,
    diskSpace: true,
    networkConnectivity: true,
    applicationHealth: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Check memory usage
function checkMemoryUsage() {
  const memUsage = process.memoryUsage();
  const memUsageMB = {
    rss: Math.round(memUsage.rss / 1024 / 1024),
    heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
    heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
    external: Math.round(memUsage.external / 1024 / 1024)
  };

  const issues = [];
  
  // Check for high memory usage
  if (memUsageMB.heapUsed > 100) {
    issues.push({
      type: 'high-memory-usage',
      severity: 'medium',
      message: `Heap usage is ${memUsageMB.heapUsed}MB (recommended: <100MB)`,
      value: memUsageMB.heapUsed
    });
  }

  return {
    usage: memUsageMB,
    issues: issues
  };
}

// Check disk space
function checkDiskSpace() {
  try {
    const stats = fs.statSync(__dirname);
    const issues = [];
    
    // This is a simplified check - in a real implementation,
    // you'd use a proper disk space checking library
    return {
      available: 'unknown',
      issues: issues
    };
  } catch (error) {
    return {
      available: 'unknown',
      issues: [{
        type: 'disk-space-check-failed',
        severity: 'low',
        message: 'Could not check disk space'
      }]
    };
  }
}

// Check application health
function checkApplicationHealth() {
  const issues = [];
  
  // Check for critical files
  const criticalFiles = [
    'package.json',
    'next.config.js',
    'tsconfig.json'
  ];
  
  criticalFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
      issues.push({
        type: 'missing-critical-file',
        severity: 'high',
        message: `Missing critical file: ${file}`,
        file: file
      });
    }
  });
  
  return {
    criticalFiles: criticalFiles.length,
    missingFiles: issues.length,
    issues: issues
  };
}

// Run health monitoring
function runHealthMonitoring() {
  const health = {
    timestamp: new Date().toISOString(),
    system: {
      platform: process.platform,
      nodeVersion: process.version,
      uptime: process.uptime()
    },
    memory: checkMemoryUsage(),
    disk: checkDiskSpace(),
    application: checkApplicationHealth(),
    summary: {
      totalIssues: 0,
      criticalIssues: 0,
      warnings: 0
    }
  };

  // Calculate summary
  const allIssues = [
    ...health.memory.issues,
    ...health.disk.issues,
    ...health.application.issues
  ];
  
  health.summary.totalIssues = allIssues.length;
  health.summary.criticalIssues = allIssues.filter(issue => issue.severity === 'high').length;
  health.summary.warnings = allIssues.filter(issue => issue.severity === 'medium' || issue.severity === 'low').length;

  return health;
}

// Save health report
function saveHealthReport(health) {
  const filename = `health-report-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(health, null, 2));
  console.log(`🏥 Health report saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 Health Monitoring Summary:`);
  console.log(`   Total Issues: ${health.summary.totalIssues}`);
  console.log(`   Critical Issues: ${health.summary.criticalIssues}`);
  console.log(`   Warnings: ${health.summary.warnings}`);
  console.log(`   Memory Usage: ${health.memory.usage.heapUsed}MB`);
  console.log(`   Uptime: ${Math.round(health.system.uptime)}s`);
}

// Main execution
try {
  const health = runHealthMonitoring();
  saveHealthReport(health);
  console.log('✅ Enhanced health monitoring completed');
} catch (error) {
  console.error('❌ Enhanced health monitoring failed:', error.message);
  process.exit(1);
}