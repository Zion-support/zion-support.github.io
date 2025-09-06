#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousTypeCheck {
  constructor() {
    this.workspacePath = process.cwd();
    this.logFile = path.join(this.workspacePath, 'automation/logs/continuous-type-check.log');
    this.ensureLogDirectory();
    this.lastCheck = null;
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
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runTypeCheck() {
    try {
      this.log('Running continuous type check...');
      const result = execSync('npm run type-check 2>&1', { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 5
      });
      
      this.log('Type check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Type check failed: ${error.message}`, 'ERROR');
      
      // Try to auto-fix common type issues
      if (process.env.AUTO_FIX === 'true') {
        this.log('Attempting type error auto-fix...');
        await this.autoFixTypeErrors(error.stdout || error.message);
      }
      
      return { success: false, output: error.stdout || error.message };
    }
  }

  async autoFixTypeErrors(errorOutput) {
    try {
      // Parse type errors and attempt fixes
      const lines = errorOutput.split('\n');
      const typeErrors = [];
      
      for (const line of lines) {
        if (line.includes('error TS') && line.includes('.tsx') || line.includes('.ts')) {
          const match = line.match(/^(.+?)\((\d+),(\d+)\): error TS(\d+): (.+)$/);
          if (match) {
            typeErrors.push({
              file: match[1],
              line: parseInt(match[2]),
              column: parseInt(match[3]),
              code: match[4],
              message: match[5]
            });
          }
        }
      }
      
      // Fix common type errors
      for (const error of typeErrors) {
        await this.fixTypeError(error);
      }
      
      this.log(`Attempted to fix ${typeErrors.length} type errors`);
    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async fixTypeError(error) {
    try {
      const filePath = path.join(this.workspacePath, error.file);
      if (!fs.existsSync(filePath)) return;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common TypeScript errors
      switch (error.code) {
        case '2304': // Cannot find name
          if (error.message.includes('any')) {
            content = content.replace(/:\s*any/g, ': unknown');
            modified = true;
          }
          break;
        case '7006': // Parameter implicitly has an 'any' type
          const lines = content.split('\n');
          if (lines[error.line - 1]) {
            lines[error.line - 1] = lines[error.line - 1].replace(/\(([^)]*)\)/g, '($1: any)');
            content = lines.join('\n');
            modified = true;
          }
          break;
        case '2339': // Property does not exist on type
          if (error.message.includes('any')) {
            content = content.replace(/:\s*any/g, ': unknown');
            modified = true;
          }
          break;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed type error in ${error.file}:${error.line}`);
      }
    } catch (error) {
      this.log(`Failed to fix type error in ${error.file}: ${error.message}`, 'WARN');
    }
  }

  async monitor() {
    this.log('Starting continuous type checking...');
    
    while (true) {
      try {
        await this.runTypeCheck();
        this.lastCheck = new Date();
        
        // Wait for next check
        await new Promise(resolve => setTimeout(resolve, parseInt(process.env.TYPE_CHECK_INTERVAL) || 600000));
      } catch (error) {
        this.log(`Monitor error: ${error.message}`, 'ERROR');
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute on error
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const typeCheck = new ContinuousTypeCheck();
  typeCheck.monitor().catch(console.error);
}

module.exports = ContinuousTypeCheck;