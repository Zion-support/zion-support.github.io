#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class BuildMonitor {
  constructor() {
    this.isRunning = false;
    this.checkInterval = parseInt(process.env.BUILD_CHECK_INTERVAL) || 300000; // 5 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.lastBuildTime = null;
    this.buildHistory = [];
    this.maxBuildHistory = 10;
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async checkBuildStatus() {
    try {
      this.log('info', 'Checking build status...');
      
      // Check if .next directory exists and is recent
      const nextDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(nextDir)) {
        const stats = fs.statSync(nextDir);
        const age = Date.now() - stats.mtime.getTime();
        const maxAge = 30 * 60 * 1000; // 30 minutes
        
        if (age > maxAge) {
          this.log('warn', 'Build is stale, triggering rebuild...');
          await this.triggerBuild();
        } else {
          this.log('info', 'Build is fresh');
        }
      } else {
        this.log('warn', 'No build found, triggering build...');
        await this.triggerBuild();
      }
      
      return true;
    } catch (error) {
      this.log('error', `Build check failed: ${error.message}`);
      return false;
    }
  }

  async triggerBuild() {
    try {
      this.log('info', 'Triggering build...');
      const startTime = Date.now();
      
      // Clean previous build
      await execAsync('npm run clean');
      
      // Run build
      const { stdout, stderr } = await execAsync('npm run build');
      
      const buildTime = Date.now() - startTime;
      const buildResult = {
        timestamp: new Date().toISOString(),
        duration: buildTime,
        success: !stderr.includes('error') && !stdout.includes('error'),
        output: stdout,
        errors: stderr
      };
      
      this.buildHistory.push(buildResult);
      if (this.buildHistory.length > this.maxBuildHistory) {
        this.buildHistory.shift();
      }
      
      if (buildResult.success) {
        this.log('info', `Build completed successfully in ${buildTime}ms`);
        this.lastBuildTime = new Date();
      } else {
        this.log('error', `Build failed: ${stderr}`);
        await this.handleBuildFailure(buildResult);
      }
      
      return buildResult.success;
    } catch (error) {
      this.log('error', `Build trigger failed: ${error.message}`);
      return false;
    }
  }

  async handleBuildFailure(buildResult) {
    try {
      this.log('info', 'Handling build failure...');
      
      // Analyze common build errors
      const errors = buildResult.errors.toLowerCase();
      
      if (errors.includes('typescript') || errors.includes('ts')) {
        this.log('info', 'TypeScript errors detected, running type check...');
        await execAsync('npm run type-check');
      }
      
      if (errors.includes('eslint') || errors.includes('lint')) {
        this.log('info', 'Linting errors detected, running lint fix...');
        await execAsync('npm run lint:fix');
      }
      
      if (errors.includes('dependency') || errors.includes('module not found')) {
        this.log('info', 'Dependency issues detected, reinstalling...');
        await execAsync('npm install');
      }
      
      // Try to fix common syntax errors
      await this.fixCommonSyntaxErrors();
      
      // Retry build
      this.log('info', 'Retrying build after fixes...');
      const retryResult = await this.triggerBuild();
      
      if (!retryResult) {
        this.log('error', 'Build retry failed, manual intervention required');
        await this.notifyBuildFailure(buildResult);
      }
      
    } catch (error) {
      this.log('error', `Build failure handling failed: ${error.message}`);
    }
  }

  async fixCommonSyntaxErrors() {
    try {
      this.log('info', 'Fixing common syntax errors...');
      
      const filesToCheck = [
        'utils/api.ts',
        'utils/validation.ts',
        'utils/supabase/client.ts',
        'utils/serviceFinder.ts',
        'utils/testing-system.tsx',
        'utils/next-link-shim.tsx'
      ];
      
      for (const file of filesToCheck) {
        if (fs.existsSync(file)) {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;
          
          // Fix common issues
          if (content.includes("'") && !content.includes("'")) {
            content = content.replace(/'/g, "'");
            modified = true;
          }
          
          if (content.includes('"') && !content.includes('"')) {
            content = content.replace(/"/g, '"');
            modified = true;
          }
          
          // Fix missing semicolons
          if (content.includes('export const') && !content.includes(';')) {
            content = content.replace(/(export const[^;]+)/g, '$1;');
            modified = true;
          }
          
          // Fix missing closing braces
          const openBraces = (content.match(/\{/g) || []).length;
          const closeBraces = (content.match(/\}/g) || []).length;
          if (openBraces > closeBraces) {
            content += '}'.repeat(openBraces - closeBraces);
            modified = true;
          }
          
          if (modified) {
            fs.writeFileSync(file, content);
            this.log('info', `Fixed syntax errors in ${file}`);
          }
        }
      }
      
    } catch (error) {
      this.log('error', `Syntax error fixing failed: ${error.message}`);
    }
  }

  async notifyBuildFailure(buildResult) {
    try {
      this.log('info', 'Notifying about build failure...');
      
      // Create failure report
      const report = {
        timestamp: buildResult.timestamp,
        duration: buildResult.duration,
        errors: buildResult.errors,
        output: buildResult.output,
        suggestions: this.generateBuildSuggestions(buildResult.errors)
      };
      
      const reportPath = path.join(__dirname, 'logs', 'build-failure-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('error', `Build failure report saved to ${reportPath}`);
      
    } catch (error) {
      this.log('error', `Build failure notification failed: ${error.message}`);
    }
  }

  generateBuildSuggestions(errors) {
    const suggestions = [];
    const errorText = errors.toLowerCase();
    
    if (errorText.includes('typescript')) {
      suggestions.push('Run "npm run type-check" to identify TypeScript errors');
      suggestions.push('Check for missing type annotations');
    }
    
    if (errorText.includes('eslint')) {
      suggestions.push('Run "npm run lint:fix" to auto-fix linting issues');
      suggestions.push('Check for unused variables and imports');
    }
    
    if (errorText.includes('module not found')) {
      suggestions.push('Run "npm install" to install missing dependencies');
      suggestions.push('Check import paths and file locations');
    }
    
    if (errorText.includes('syntax')) {
      suggestions.push('Check for missing semicolons and brackets');
      suggestions.push('Validate JSX syntax in React components');
    }
    
    return suggestions;
  }

  async getBuildStats() {
    const stats = {
      lastBuildTime: this.lastBuildTime,
      totalBuilds: this.buildHistory.length,
      successfulBuilds: this.buildHistory.filter(b => b.success).length,
      failedBuilds: this.buildHistory.filter(b => !b.success).length,
      averageBuildTime: this.buildHistory.reduce((sum, b) => sum + b.duration, 0) / this.buildHistory.length || 0
    };
    
    return stats;
  }

  async start() {
    if (this.isRunning) {
      this.log('warn', 'Build monitor is already running');
      return;
    }
    
    this.isRunning = true;
    this.log('info', 'Starting build monitor...');
    
    // Create logs directory
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Initial build check
    await this.checkBuildStatus();
    
    // Set up monitoring interval
    this.monitorIntervalId = setInterval(async () => {
      await this.checkBuildStatus();
    }, this.checkInterval);
    
    this.log('info', `Build monitor started with ${this.checkInterval}ms interval`);
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'Build monitor is not running');
      return;
    }
    
    this.isRunning = false;
    
    if (this.monitorIntervalId) {
      clearInterval(this.monitorIntervalId);
    }
    
    this.log('info', 'Build monitor stopped');
  }
}

// Handle command line arguments
const monitor = new BuildMonitor();

if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      monitor.start().catch(console.error);
      break;
    case 'stop':
      monitor.stop().catch(console.error);
      break;
    case 'status':
      console.log(`Build monitor running: ${monitor.isRunning}`);
      break;
    case 'check':
      monitor.checkBuildStatus().catch(console.error);
      break;
    case 'build':
      monitor.triggerBuild().catch(console.error);
      break;
    case 'stats':
      monitor.getBuildStats().then(stats => {
        console.log('Build Statistics:', JSON.stringify(stats, null, 2));
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node build-monitor.js [start|stop|status|check|build|stats]');
  }
}

module.exports = BuildMonitor;