#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'build-monitor.log');
    this.lastBuildTime = null;
    this.lastBuildStatus = null;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkBuildStatus() {
    try {
      this.log('Checking build status...');
      const startTime = Date.now();
      
      const { stdout, stderr } = await execAsync('npm run build', { 
        cwd: this.projectRoot,
        timeout: 120000 // 2 minutes timeout
      });
      
      const buildTime = Date.now() - startTime;
      const success = !stderr || !stderr.includes('Error:');
      
      this.lastBuildTime = buildTime;
      this.lastBuildStatus = success ? 'success' : 'failed';
      
      if (success) {
        this.log(`Build successful in ${buildTime}ms`);
        return {
          status: 'success',
          buildTime,
          output: stdout,
          error: null
        };
      } else {
        this.log(`Build failed in ${buildTime}ms: ${stderr}`);
        return {
          status: 'failed',
          buildTime,
          output: stdout,
          error: stderr
        };
      }
    } catch (error) {
      const buildTime = Date.now() - (this.lastBuildTime || Date.now());
      this.log(`Build check failed: ${error.message}`);
      this.lastBuildStatus = 'failed';
      
      return {
        status: 'failed',
        buildTime,
        output: null,
        error: error.message
      };
    }
  }

  async checkBuildArtifacts() {
    try {
      const artifacts = [];
      const buildDir = path.join(this.projectRoot, '.next');
      const outDir = path.join(this.projectRoot, 'out');
      
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        artifacts.push({
          name: '.next',
          path: buildDir,
          size: this.getDirectorySize(buildDir),
          lastModified: stats.mtime
        });
      }
      
      if (fs.existsSync(outDir)) {
        const stats = fs.statSync(outDir);
        artifacts.push({
          name: 'out',
          path: outDir,
          size: this.getDirectorySize(outDir),
          lastModified: stats.mtime
        });
      }
      
      return artifacts;
    } catch (error) {
      this.log(`Error checking build artifacts: ${error.message}`);
      return [];
    }
  }

  getDirectorySize(dirPath) {
    try {
      const { stdout } = execAsync(`du -sh "${dirPath}" 2>/dev/null | cut -f1`).catch(() => ({ stdout: '0' }));
      return stdout.trim();
    } catch {
      return '0';
    }
  }

  async checkDependencies() {
    try {
      this.log('Checking dependencies...');
      
      // Check if node_modules exists and is not empty
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        return {
          status: 'missing',
          message: 'node_modules directory not found'
        };
      }
      
      // Check package-lock.json
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (!fs.existsSync(packageLockPath)) {
        return {
          status: 'warning',
          message: 'package-lock.json not found'
        };
      }
      
      // Check for outdated packages
      const { stdout } = await execAsync('npm outdated --json', { 
        cwd: this.projectRoot,
        timeout: 30000 
      }).catch(() => ({ stdout: '{}' }));
      
      const outdated = JSON.parse(stdout);
      const outdatedCount = Object.keys(outdated).length;
      
      if (outdatedCount > 0) {
        return {
          status: 'warning',
          message: `${outdatedCount} packages are outdated`,
          outdated
        };
      }
      
      return {
        status: 'ok',
        message: 'All dependencies are up to date'
      };
    } catch (error) {
      this.log(`Error checking dependencies: ${error.message}`);
      return {
        status: 'error',
        message: error.message
      };
    }
  }

  async runBuildCheck() {
    this.log('Starting build monitoring cycle...');
    
    const buildResult = await this.checkBuildStatus();
    const artifacts = await this.checkBuildArtifacts();
    const dependencies = await this.checkDependencies();
    
    const report = {
      timestamp: new Date().toISOString(),
      build: buildResult,
      artifacts,
      dependencies,
      summary: {
        buildStatus: buildResult.status,
        hasArtifacts: artifacts.length > 0,
        dependencyStatus: dependencies.status,
        overallHealth: buildResult.status === 'success' && dependencies.status !== 'error' ? 'healthy' : 'issues'
      }
    };
    
    // Save report
    const reportFile = path.join(this.projectRoot, 'build-monitor-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Build monitoring cycle completed. Status: ${report.summary.overallHealth}`);
    
    return report;
  }

  async start() {
    this.log('Build Monitor started');
    
    // Run initial check
    await this.runBuildCheck();
    
    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.runBuildCheck();
    }, 15 * 60 * 1000); // Every 15 minutes
  }
}

// Start the monitor if this script is run directly
if (require.main === module) {
  const monitor = new BuildMonitor();
  monitor.start().catch(error => {
    console.error('Build Monitor failed to start:', error);
    process.exit(1);
  });
}

module.exports = BuildMonitor;