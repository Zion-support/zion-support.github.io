#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorPreventionMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'error-prevention-monitor.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Ignore logging errors
    }
    console.log(logMessage.trim());
  }

  checkProjectHealth() {
    try {
      this.log('Checking project health...');
      
      // Check for corrupted files
      const corruptedFiles = this.findCorruptedFiles();
      if (corruptedFiles.length > 0) {
        this.log(`Found ${corruptedFiles.length} corrupted files`);
        this.triggerAutoFix();
      }
      
      // Check build status
      this.checkBuildStatus();
      
      this.log('Health check completed');
    } catch (error) {
      this.log(`Error during health check: ${error.message}`);
    }
  }

  findCorruptedFiles() {
    const corruptedFiles = [];
    const sourceDirs = ['src', 'pages', 'components'];
    
    sourceDirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.scanDirectory(dirPath, corruptedFiles);
      }
    });
    
    return corruptedFiles;
  }

  scanDirectory(dirPath, corruptedFiles) {
    try {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          this.scanDirectory(filePath, corruptedFiles);
        } else if (file.match(/\.(tsx?|jsx?)$/)) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('import') && content.includes('export') && content.includes('{')) {
              if (content.split('{').length !== content.split('}').length) {
                corruptedFiles.push(filePath);
              }
            }
          } catch (error) {
            corruptedFiles.push(filePath);
          }
        }
      });
    } catch (error) {
      // Directory access error
    }
  }

  triggerAutoFix() {
    this.log('Triggering auto-fix process...');
    try {
      execSync('bash start-simple-error-prevention.sh', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Auto-fix process completed');
    } catch (error) {
      this.log(`Auto-fix process failed: ${error.message}`);
    }
  }

  checkBuildStatus() {
    try {
      this.log('Checking build status...');
      execSync('yarn build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Build check passed');
    } catch (error) {
      this.log(`Build check failed: ${error.message}`);
      this.triggerAutoFix();
    }
  }

  run() {
    this.log('Error Prevention Monitor started');
    
    // Run initial health check
    this.checkProjectHealth();
    
    // Schedule periodic health checks
    setInterval(() => {
      this.checkProjectHealth();
    }, 15 * 60 * 1000); // Every 15 minutes
    
    this.log('Monitoring active - health checks every 15 minutes');
  }
}

// Start the monitor
const monitor = new ErrorPreventionMonitor();
monitor.run();
