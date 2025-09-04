#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class LintErrorFixer {
  constructor() {
    this.isRunning = false;
    this.logFile = path.join(__dirname, 'logs', 'lint-fixer.log');
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
      this.log('⚠️ Lint Error Fixer is already running');
      return;
    }

    this.isRunning = true;
    this.log('🚀 Starting Lint Error Fixer...');

    // Initial lint check and fix
    const initialResult = await this.runLint();
    if (!initialResult.success) {
      await this.fixLintErrors();
    }

    this.log('✅ Lint Error Fixer started successfully');
  }

  stop() {
    this.isRunning = false;
    this.log('🛑 Lint Error Fixer stopped');
  }

  status() {
    const status = this.isRunning ? 'Running' : 'Stopped';
    this.log(`📊 Status: ${status}`);
    return { running: this.isRunning };
  }
}

// CLI handling
const fixer = new LintErrorFixer();
const command = process.argv[2];

switch (command) {
  case 'start':
    fixer.start();
    break;
  case 'stop':
    fixer.stop();
    process.exit(0);
    break;
  case 'status':
    fixer.status();
    process.exit(0);
    break;
  default:
    console.log('Usage: node lint-error-fixer.js [start|stop|status]');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  fixer.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  fixer.stop();
  process.exit(0);
});