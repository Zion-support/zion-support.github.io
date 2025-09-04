#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const url = require('url');

class AutomationDashboard {
  constructor() {
    this.automationSystems = new Map();
    this.logFile = path.join(__dirname, 'logs', 'automation-dashboard.log');
    this.statusFile = path.join(__dirname, 'logs', 'automation-status.json');
    this.ensureLogDirectory();
    this.loadExistingSystems();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadExistingSystems() {
    const systemTypes = {
      'lint-monitor': {
        file: 'lint-monitor.js',
        description: 'Continuous lint monitoring'
      },
      'lint-fixer': {
        file: 'lint-error-fixer.js',
        description: 'Automated lint error fixing'
      },
      'lint-manager': {
        file: 'lint-automation-manager.js',
        description: 'Lint automation management'
      }
    };

    for (const [name, config] of Object.entries(systemTypes)) {
      const systemPath = path.join(__dirname, config.file);
      if (fs.existsSync(systemPath)) {
        this.automationSystems.set(name, {
          ...config,
          path: systemPath,
          status: 'available',
          lastRun: null,
          successCount: 0,
          errorCount: 0
        });
      }
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSystem(systemName, options = {}) {
    if (!this.automationSystems.has(systemName)) {
      this.log(`System "${systemName}" not found`, 'ERROR');
      return false;
    }

    const system = this.automationSystems.get(systemName);
    const startTime = Date.now();

    try {
      this.log(`Starting system: ${systemName}`);
      const result = execSync(`node ${system.path}`, { 
        encoding: 'utf8',
        cwd: __dirname 
      });
      
      const duration = Date.now() - startTime;
      system.successCount++;
      system.lastRun = new Date().toISOString();
      this.log(`System "${systemName}" completed successfully in ${duration}ms`);
      return true;
    } catch (error) {
      system.errorCount++;
      system.lastRun = new Date().toISOString();
      this.log(`System "${systemName}" failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runAllSystems() {
    this.log('Running all available systems...');
    const results = [];
    
    for (const [name, system] of this.automationSystems) {
      if (system.status === 'available') {
        const success = await this.runSystem(name);
        results.push({ name, success });
      }
    }
    
    this.log(`Completed running ${results.length} systems`);
    return results;
  }

  listSystems() {
    console.log('\nAvailable Automation Systems:');
    for (const [name, system] of this.automationSystems) {
      const lastRun = system.lastRun ? new Date(system.lastRun).toLocaleString() : 'Never';
      console.log(`\n${name}:`);
      console.log(`  Description: ${system.description}`);
      console.log(`  Status: ${system.status.toUpperCase()}`);
      console.log(`  Last Run: ${lastRun}`);
      console.log(`  Success Count: ${system.successCount}`);
      console.log(`  Error Count: ${system.errorCount}`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalSystems: this.automationSystems.size,
      availableSystems: Array.from(this.automationSystems.values()).filter(s => s.status === 'available').length,
      systems: Array.from(this.automationSystems.entries()).map(([name, system]) => ({
        name,
        description: system.description,
        status: system.status,
        lastRun: system.lastRun,
        successCount: system.successCount,
        errorCount: system.errorCount
      }))
    };

    const reportFile = path.join(__dirname, 'logs', 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportFile}`);
    return report;
  }
}

// CLI interface
const dashboard = new AutomationDashboard();
const command = process.argv[2];
const systemName = process.argv[3];

switch (command) {
  case 'list':
    dashboard.listSystems();
    break;
  case 'run':
    if (systemName) {
      dashboard.runSystem(systemName);
    } else {
      dashboard.runAllSystems();
    }
    break;
  case 'report':
    dashboard.generateReport();
    break;
  default:
    console.log('Usage:');
    console.log('  node automation-dashboard.js list');
    console.log('  node automation-dashboard.js run [system-name]');
    console.log('  node automation-dashboard.js report');
    break;
}

module.exports = AutomationDashboard;