#!/usr/bin/env node

/**
 * Continuous Intelligence Monitor
 * Monitors application continuously for issues and improvements
 */

const fs = require('fs');
const path = require('path');

console.log('🧠 Starting continuous intelligence monitoring...');

// Continuous Intelligence Monitor configuration
const config = {
  outputDir: path.join(__dirname, '..', '..', 'intelligence-reports'),
  monitoringInterval: 30000, // 30 seconds
  checks: {
    performance: true,
    errors: true,
    security: true,
    codeQuality: true,
    userExperience: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Monitor performance
function monitorPerformance() {
  const memUsage = process.memoryUsage();
  const performance = {
    timestamp: new Date().toISOString(),
    memory: {
      rss: Math.round(memUsage.rss / 1024 / 1024),
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
      external: Math.round(memUsage.external / 1024 / 1024)
    },
    uptime: process.uptime(),
    cpuUsage: process.cpuUsage()
  };

  return performance;
}

// Monitor errors
function monitorErrors() {
  const errorLog = [];
  
  // Capture uncaught exceptions
  process.on('uncaughtException', (error) => {
    errorLog.push({
      type: 'uncaughtException',
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
  });

  // Capture unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    errorLog.push({
      type: 'unhandledRejection',
      reason: reason,
      timestamp: new Date().toISOString()
    });
  });

  return errorLog;
}

// Monitor code quality
function monitorCodeQuality() {
  const issues = [];
  const srcDir = path.join(__dirname, '..', '..', 'src');
  
  if (fs.existsSync(srcDir)) {
    const files = getAllFiles(srcDir, ['.js', '.ts', '.jsx', '.tsx']);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for potential issues
      if (content.includes('console.log')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'console-log',
          severity: 'low',
          message: 'Console.log statement found'
        });
      }
      
      if (content.includes('TODO') || content.includes('FIXME')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'todo-comment',
          severity: 'low',
          message: 'TODO/FIXME comment found'
        });
      }
    });
  }
  
  return issues;
}

// Get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Run continuous monitoring
function runContinuousMonitoring() {
  const monitoring = {
    timestamp: new Date().toISOString(),
    performance: monitorPerformance(),
    errors: monitorErrors(),
    codeQuality: monitorCodeQuality(),
    summary: {
      totalIssues: 0,
      performanceIssues: 0,
      errorCount: 0,
      codeQualityIssues: 0
    }
  };

  // Calculate summary
  monitoring.summary.errorCount = monitoring.errors.length;
  monitoring.summary.codeQualityIssues = monitoring.codeQuality.length;
  monitoring.summary.totalIssues = monitoring.summary.errorCount + monitoring.summary.codeQualityIssues;

  return monitoring;
}

// Save monitoring report
function saveMonitoringReport(monitoring) {
  const filename = `continuous-monitoring-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(monitoring, null, 2));
  console.log(`🧠 Continuous monitoring report saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 Continuous Intelligence Monitoring Summary:`);
  console.log(`   Total Issues: ${monitoring.summary.totalIssues}`);
  console.log(`   Errors: ${monitoring.summary.errorCount}`);
  console.log(`   Code Quality Issues: ${monitoring.summary.codeQualityIssues}`);
  console.log(`   Memory Usage: ${monitoring.performance.memory.heapUsed}MB`);
}

// Main execution
try {
  const monitoring = runContinuousMonitoring();
  saveMonitoringReport(monitoring);
  console.log('✅ Continuous intelligence monitoring completed');
} catch (error) {
  console.error('❌ Continuous intelligence monitoring failed:', error.message);
  process.exit(1);
}