#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class DependencyMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'automation/logs/dependency-monitor.log');
    this.reportFile = path.join(process.cwd(), 'automation/logs/dependency-report.json');
    this.lastCheck = null;
    this.dependencyCount = 0;
    this.devDependencyCount = 0;
    this.isInstalling = false;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkDependencies() {
    this.log('Checking dependencies...');
    
    try {
      // Read package.json
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      this.dependencyCount = Object.keys(packageJson.dependencies || {}).length;
      this.devDependencyCount = Object.keys(packageJson.devDependencies || {}).length;
      this.lastCheck = new Date();
      
      this.log(`Found ${this.dependencyCount} dependencies and ${this.devDependencyCount} dev dependencies`);
      
      // Check if node_modules exists and is complete
      const nodeModulesPath = path.join(process.cwd(), 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('node_modules directory missing, installing dependencies...');
        await this.installDependencies();
        return;
      }
      
      // Check for missing dependencies
      await this.checkMissingDependencies();
      
      // Generate dependency report
      const report = {
        timestamp: this.lastCheck.toISOString(),
        dependencyCount: this.dependencyCount,
        devDependencyCount: this.devDependencyCount,
        status: 'healthy',
        missingDependencies: [],
        outdatedPackages: []
      };
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`);
    }
  }

  async checkMissingDependencies() {
    try {
      this.log('Checking for missing dependencies...');
      
      // Try to require a few key dependencies to see if they're installed
      const keyDependencies = [
        'next',
        'react',
        'react-dom',
        'eslint',
        'typescript'
      ];
      
      const missingDeps = [];
      
      for (const dep of keyDependencies) {
        try {
          require.resolve(dep);
        } catch (error) {
          missingDeps.push(dep);
        }
      }
      
      if (missingDeps.length > 0) {
        this.log(`Missing dependencies detected: ${missingDeps.join(', ')}`);
        await this.installDependencies();
      } else {
        this.log('All key dependencies are present');
      }
      
    } catch (error) {
      this.log(`Error checking missing dependencies: ${error.message}`);
    }
  }

  async installDependencies() {
    if (this.isInstalling) {
      this.log('Dependency installation already in progress...');
      return;
    }
    
    this.isInstalling = true;
    this.log('Installing dependencies...');
    
    try {
      // Check if package-lock.json exists
      const lockFileExists = fs.existsSync(path.join(process.cwd(), 'package-lock.json'));
      
      if (lockFileExists) {
        this.log('Using npm ci for faster, reliable installs...');
        execSync('npm ci', { 
          stdio: 'pipe',
          timeout: 300000 // 5 minutes timeout
        });
      } else {
        this.log('Using npm install...');
        execSync('npm install', { 
          stdio: 'pipe',
          timeout: 300000 // 5 minutes timeout
        });
      }
      
      this.log('Dependencies installed successfully');
      
    } catch (error) {
      this.log(`Dependency installation failed: ${error.message}`);
      
      // Try to recover by clearing cache and retrying
      try {
        this.log('Clearing npm cache and retrying...');
        execSync('npm cache clean --force', { stdio: 'pipe' });
        execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
        execSync('npm install', { 
          stdio: 'pipe',
          timeout: 300000
        });
        this.log('Dependency installation recovered successfully');
      } catch (retryError) {
        this.log(`Dependency installation recovery failed: ${retryError.message}`);
      }
    } finally {
      this.isInstalling = false;
    }
  }

  startWatching() {
    this.log('Starting dependency monitor...');
    
    // Watch package.json and package-lock.json for changes
    const watcher = chokidar.watch(['package.json', 'package-lock.json'], {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', (filePath) => {
      this.log(`Dependency file changed: ${filePath}`);
      
      // Debounce multiple changes
      setTimeout(() => {
        this.checkDependencies();
      }, 2000);
    });

    watcher.on('error', (error) => {
      this.log(`Dependency watcher error: ${error.message}`);
    });

    // Run initial check
    setTimeout(() => this.checkDependencies(), 1000);

    this.log('Dependency monitor is now watching files...');
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('Shutting down dependency monitor...');
      watcher.close();
      process.exit(0);
    });
  }
}

// Start the monitor
const monitor = new DependencyMonitor();
monitor.startWatching();