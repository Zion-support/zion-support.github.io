#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentOrchestrator {
  constructor() {
    this.isRunning = false;
    this.processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'orchestrator.log');
    this.ensureLogDirectory();
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

  async runLint() {
    try {
      this.log('🔍 Running ESLint...');
      const result = execSync('npm run lint', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Lint completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Lint errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async fixLintErrors() {
    try {
      this.log('🔧 Attempting to fix lint errors...');
      const result = execSync('npm run lint -- --fix', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Lint errors fixed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed to fix lint errors: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('⚠️ Orchestrator is already running');
      return;
    }

    this.isRunning = true;
    this.log('🚀 Starting Intelligent Orchestrator...');

    // Initial lint check
    const initialResult = await this.runLint();
    if (!initialResult.success) {
      await this.fixLintErrors();
    }

    // Start monitoring processes
    this.startMonitoring();

    this.log('✅ Intelligent Orchestrator started successfully');
  }

  startMonitoring() {
    // Monitor for changes and run lint fixes
    setInterval(async () => {
      if (this.isRunning) {
        this.log('🔄 Running periodic lint check...');
        await this.runLint();
      }
    }, 5 * 60 * 1000); // Every 5 minutes
  }

  stop() {
    this.isRunning = false;
    this.log('🛑 Intelligent Orchestrator stopped');
  }

  status() {
    const status = this.isRunning ? 'Running' : 'Stopped';
    this.log(`📊 Status: ${status}`);
    return { running: this.isRunning };
  }
}

// CLI handling
const orchestrator = new IntelligentOrchestrator();
const command = process.argv[2];

switch (command) {
  case 'start':
    orchestrator.start();
    break;
  case 'stop':
    orchestrator.stop();
    process.exit(0);
    break;
  case 'status':
    orchestrator.status();
    process.exit(0);
    break;
  default:
    console.log('Usage: node intelligent-orchestrator.js [start|stop|status]');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  orchestrator.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  orchestrator.stop();
  process.exit(0);
});