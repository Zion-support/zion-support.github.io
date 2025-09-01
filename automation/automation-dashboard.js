#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AutomationDashboard {
  constructor() {
    this.automationSystems = new Map();
    this.metrics = new Map();
    this.alerts = [];
    this.logFile = path.join(__dirname, 'logs', 'automation-dashboard.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.startMetricsCollection();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadAutomationSystems() {
    const systems = [
      { name: 'lint-monitor', path: 'lint-monitor.js', category: 'code-quality', status: 'available' },
      { name: 'lint-fixer', path: 'lint-error-fixer.js', category: 'code-quality', status: 'available' },
      { name: 'lint-manager', path: 'lint-automation-manager.js', category: 'code-quality', status: 'available' },
      { name: 'code-quality', path: 'code-quality-monitor.js', category: 'analysis', status: 'available' },
      { name: 'performance', path: 'performance-optimizer.js', category: 'optimization', status: 'available' },
      { name: 'content-generator', path: 'content-generator.js', category: 'generation', status: 'available' },
      { name: 'seo-optimizer', path: 'seo-optimizer.js', category: 'seo', status: 'available' },
      { name: 'security-scanner', path: 'security-scanner.js', category: 'security', status: 'available' },
      { name: 'test-generator', path: 'test-generator.js', category: 'testing', status: 'available' },
      { name: 'intelligent-orchestrator', path: 'intelligent-orchestrator.js', category: 'orchestration', status: 'available' },
      { name: 'automation-factory', path: 'automation-factory.js', category: 'factory', status: 'available' }
    ];

    for (const system of systems) {
      const systemPath = path.join(__dirname, system.path);
      if (fs.existsSync(systemPath)) {
        this.automationSystems.set(system.name, {
          ...system,
          path: systemPath,
          lastRun: null,
          successCount: 0,
          failureCount: 0,
          totalExecutionTime: 0,
          averageExecutionTime: 0,
          uptime: 0,
          isRunning: false
        });
      }
    }
  }

  startMetricsCollection() {
    // Collect metrics every 30 seconds
    setInterval(() => {
      this.collectMetrics();
    }, 30000);
    
    // Generate alerts every minute
    setInterval(() => {
      this.generateAlerts();
    }, 60000);
  }

  collectMetrics() {
    for (const [name, system] of this.automationSystems) {
      const metrics = {
        timestamp: new Date().toISOString(),
        isRunning: system.isRunning,
        lastRun: system.lastRun,
        successRate: system.successCount / (system.successCount + system.failureCount) || 0,
        averageExecutionTime: system.averageExecutionTime,
        uptime: system.uptime
      };
      this.metrics.set(name, metrics);
    }
  }

  generateAlerts() {
    for (const [name, system] of this.automationSystems) {
      if (system.failureCount > 5) {
        this.alerts.push({
          type: 'error',
          message: `High failure rate for ${name}: ${system.failureCount} failures`,
          timestamp: new Date().toISOString(),
          system: name
        });
      }
    }
  }

  getSystemStatus(name) {
    return this.automationSystems.get(name) || null;
  }

  getAllSystems() {
    return Array.from(this.automationSystems.values());
  }

  getMetrics(name) {
    return this.metrics.get(name) || null;
  }

  getAllMetrics() {
    return Array.from(this.metrics.values());
  }

  getAlerts() {
    return this.alerts;
  }

  start() {
    this.log('Automation Dashboard started');
    this.log(`Monitoring ${this.automationSystems.size} automation systems`);
    
    // Start monitoring loop
    setInterval(() => {
      this.updateSystemStatus();
    }, 10000);
  }

  updateSystemStatus() {
    for (const [name, system] of this.automationSystems) {
      // Check if system file exists and is accessible
      try {
        if (fs.existsSync(system.path)) {
          const stats = fs.statSync(system.path);
          system.lastModified = stats.mtime;
          system.isAccessible = true;
        } else {
          system.isAccessible = false;
        }
      } catch (error) {
        system.isAccessible = false;
        this.log(`Error checking system ${name}: ${error.message}`);
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalSystems: this.automationSystems.size,
      runningSystems: Array.from(this.automationSystems.values()).filter(s => s.isRunning).length,
      failedSystems: Array.from(this.automationSystems.values()).filter(s => s.failureCount > 0).length,
      systems: this.getAllSystems(),
      metrics: this.getAllMetrics(),
      alerts: this.getAlerts()
    };
    
    return report;
  }
}

// Export the class
module.exports = AutomationDashboard;

// If running directly, start the dashboard
if (require.main === module) {
  const dashboard = new AutomationDashboard();
  dashboard.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    dashboard.log('Shutting down Automation Dashboard...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    dashboard.log('Shutting down Automation Dashboard...');
    process.exit(0);
  });
}
