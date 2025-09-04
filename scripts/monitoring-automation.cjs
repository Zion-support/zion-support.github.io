#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Starting Application Monitoring...');

const monitoringReport = {
  timestamp: new Date().toISOString(),
  metrics: {},
  alerts: [],
  status: 'monitoring'
};

// Function to get file sizes
function getDirectorySize(dirPath) {
  let totalSize = 0;
  try {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        totalSize += getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
  } catch (error) {
    // Directory might not exist
  }
  return totalSize;
}

// Function to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Collect metrics
console.log('📋 Collecting metrics...');

// Build size
try {
  if (fs.existsSync('.next')) {
    const buildSize = getDirectorySize('.next');
    monitoringReport.metrics.buildSize = {
      bytes: buildSize,
      formatted: formatBytes(buildSize)
    };
    console.log('📦 Build size: ' + formatBytes(buildSize));
  }
} catch (error) {
  monitoringReport.alerts.push('Could not measure build size');
}

// Node modules size
try {
  if (fs.existsSync('node_modules')) {
    const nodeModulesSize = getDirectorySize('node_modules');
    monitoringReport.metrics.nodeModulesSize = {
      bytes: nodeModulesSize,
      formatted: formatBytes(nodeModulesSize)
    };
    console.log('📚 Node modules size: ' + formatBytes(nodeModulesSize));
  }
} catch (error) {
  monitoringReport.alerts.push('Could not measure node_modules size');
}

// Count files
try {
  const pagesDir = path.join(process.cwd(), 'pages');
  const componentsDir = path.join(process.cwd(), 'components');
  
  let pageCount = 0;
  let componentCount = 0;
  
  if (fs.existsSync(pagesDir)) {
    const pages = fs.readdirSync(pagesDir);
    pageCount = pages.filter(file => file.endsWith('.tsx') || file.endsWith('.jsx')).length;
  }
  
  if (fs.existsSync(componentsDir)) {
    const components = fs.readdirSync(componentsDir);
    componentCount = components.filter(file => file.endsWith('.tsx') || file.endsWith('.jsx')).length;
  }
  
  monitoringReport.metrics.fileCounts = {
    pages: pageCount,
    components: componentCount
  };
  
  console.log('📄 Pages: ' + pageCount + ', Components: ' + componentCount);
} catch (error) {
  monitoringReport.alerts.push('Could not count files');
}

// Save report
fs.writeFileSync('monitoring-report.json', JSON.stringify(monitoringReport, null, 2));
console.log('📄 Monitoring report saved to monitoring-report.json');

if (monitoringReport.alerts.length > 0) {
  console.log('⚠️  Alerts: ' + monitoringReport.alerts.length);
  monitoringReport.alerts.forEach(alert => console.log('   - ' + alert));
}

console.log('📊 Monitoring completed');
