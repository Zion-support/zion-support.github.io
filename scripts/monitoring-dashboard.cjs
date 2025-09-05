#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class MonitoringDashboard {
  constructor() {
    this.data = {
      timestamp: new Date().toISOString(),
      system: {
        platform: process.platform,
        nodeVersion: process.version,
        memory: process.memoryUsage()
      },
      project: {
        hasPackageJson: fs.existsSync('package.json'),
        hasNodeModules: fs.existsSync('node_modules'),
        hasTsConfig: fs.existsSync('tsconfig.json')
      }
    };
  }

  generateReport() {
    const report = `# Monitoring Dashboard Report

## System Information
- Platform: ${this.data.system.platform}
- Node Version: ${this.data.system.nodeVersion}
- Memory Usage: ${Math.round(this.data.system.memory.heapUsed / 1024 / 1024)}MB

## Project Status
- Package.json: ${this.data.project.hasPackageJson ? '✅' : '❌'}
- Node Modules: ${this.data.project.hasNodeModules ? '✅' : '❌'}
- TypeScript Config: ${this.data.project.hasTsConfig ? '✅' : '❌'}

## Generated: ${this.data.timestamp}
`;

    fs.writeFileSync('monitoring-dashboard.md', report);
    console.log('📊 Monitoring dashboard generated');
  }
}

if (require.main === module) {
  const dashboard = new MonitoringDashboard();
  dashboard.generateReport();
}

module.exports = MonitoringDashboard;
