#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AppMonitor {
  constructor() {
    this.metrics = {
      timestamp: new Date().toISOString(),
      performance: {},
      health: {},
      errors: []
    };
  }

  checkPerformance() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        this.metrics.performance = {
          buildSize: stats.size,
          buildSizeMB: Math.round(stats.size / 1024 / 1024 * 100) / 100,
          lastModified: stats.mtime
        };
      }
    } catch (error) {
      this.metrics.errors.push(`Performance check error: ${error.message}`);
    }
  }

  checkHealth() {
    try {
      // Check if package.json exists
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJsonExists = fs.existsSync(packageJsonPath);
      
      // Check if node_modules exists
      const nodeModulesPath = path.join(process.cwd(), 'node_modules');
      const nodeModulesExists = fs.existsSync(nodeModulesPath);
      
      // Check if .next exists
      const nextDir = path.join(process.cwd(), '.next');
      const nextDirExists = fs.existsSync(nextDir);
      
      this.metrics.health = {
        packageJson: packageJsonExists,
        nodeModules: nodeModulesExists,
        buildDir: nextDirExists,
        overall: packageJsonExists && nodeModulesExists
      };
    } catch (error) {
      this.metrics.errors.push(`Health check error: ${error.message}`);
    }
  }

  checkDependencies() {
    try {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        this.metrics.dependencies = {
          total: Object.keys(dependencies).length,
          production: Object.keys(packageJson.dependencies || {}).length,
          development: Object.keys(packageJson.devDependencies || {}).length
        };
      }
    } catch (error) {
      this.metrics.errors.push(`Dependency check error: ${error.message}`);
    }
  }

  generateReport() {
    this.checkPerformance();
    this.checkHealth();
    this.checkDependencies();
    
    const reportPath = path.join(process.cwd(), 'app-monitoring-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    console.log('App monitoring report generated:', reportPath);
    
    return this.metrics;
  }
}

const monitor = new AppMonitor();
monitor.generateReport();
