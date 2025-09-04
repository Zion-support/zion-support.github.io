#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.monitoring = false;
    this.logFile = path.join(__dirname, 'logs', 'intelligent-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadAutomationSystems() {
    const systemTypes = {
      'lint-monitor': {
        file: 'lint-monitor.js',
        description: 'Continuous lint monitoring'
      },
      'error-fixer': {
        file: 'error-fixer-automation.js',
        description: 'Automated error fixing'
      },
      'security-scanner': {
        file: 'security-scanner.js',
        description: 'Security vulnerability scanning'
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

  startMonitoring(intervalMinutes = 10) {
    if (this.monitoring) {
      this.log('Monitoring already active', 'WARN');
      return;
    }

    this.monitoring = true;
    this.log(`Starting intelligent monitoring (every ${intervalMinutes} minutes)...`);

    // Run initial analysis
    this.runAllSystems();

    // Schedule periodic runs
    setInterval(() => {
      this.runAllSystems();
    }, intervalMinutes * 60 * 1000);

    this.log('Intelligent monitoring active. Press Ctrl+C to stop.');
  }

  stopMonitoring() {
    this.monitoring = false;
    this.log('Intelligent monitoring stopped');
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

    const reportFile = path.join(__dirname, 'logs', 'intelligent-orchestrator-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportFile}`);
    return report;
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
}

// CLI interface
const orchestrator = new IntelligentOrchestrator();
const command = process.argv[2];
const interval = parseInt(process.argv[3]) || 10;

switch (command) {
  case 'list':
    orchestrator.listSystems();
    break;
  case 'run':
    const systemName = process.argv[3];
    if (systemName) {
      orchestrator.runSystem(systemName);
    } else {
      orchestrator.runAllSystems();
    }
    break;
  case 'monitor':
    orchestrator.startMonitoring(interval);
    break;
  case 'report':
    orchestrator.generateReport();
    break;
  default:
    console.log('Usage:');
    console.log('  node intelligent-orchestrator.js list');
    console.log('  node intelligent-orchestrator.js run [system-name]');
    console.log('  node intelligent-orchestrator.js monitor [interval-minutes]');
    console.log('  node intelligent-orchestrator.js report');
    break;
}

module.exports = IntelligentOrchestrator;