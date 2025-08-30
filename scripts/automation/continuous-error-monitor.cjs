#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ContinuousErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.monitoring = false;
    this.checkInterval = 120000; // 2 minutes
    this.errorThreshold = 5; // Number of errors before triggering fix
    this.consecutiveErrors = 0;
    this.lastErrorCount = 0;
    this.results = {
      checksPerformed: 0,
      errorsDetected: 0,
      fixesTriggered: 0,
      lastCheck: null,
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Continuous Error Monitor: ${message}`);
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log('Monitoring already active');
      return;
    }
    
    this.monitoring = true;
    this.log('Starting continuous error monitoring...');
    
    // Initial check
    await this.performErrorCheck();
    
    // Set up continuous monitoring
    this.monitoringInterval = setInterval(async () => {
      if (this.monitoring) {
        await this.performErrorCheck();
      }
    }, this.checkInterval);
    
    this.log(`Monitoring active with ${this.checkInterval / 1000}s intervals`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log('Monitoring not active');
      return;
    }
    
    this.monitoring = false;
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    
    this.log('Continuous error monitoring stopped');
  }

  async performErrorCheck() {
    this.log('Performing error check...');
    this.results.lastCheck = new Date().toISOString();
    this.results.checksPerformed++;
    
    try {
      const errorCount = await this.getCurrentErrorCount();
      this.log(`Current error count: ${errorCount}`);
      
      if (errorCount > 0) {
        this.results.errorsDetected += errorCount;
        this.consecutiveErrors++;
        
        // Check if we should trigger automatic fixes
        if (this.shouldTriggerFix(errorCount)) {
          await this.triggerAutomaticFix();
        }
      } else {
        this.consecutiveErrors = 0;
        this.log('No errors detected - system is healthy');
      }
      
      this.lastErrorCount = errorCount;
      
    } catch (error) {
      this.log(`Error check failed: ${error.message}`);
      this.consecutiveErrors++;
    }
  }

  async getCurrentErrorCount() {
    let totalErrors = 0;
    
    try {
      // Check ESLint errors
      try {
        execSync('npm run lint', { stdio: 'pipe' });
      } catch (error) {
        const output = error.stdout || error.stderr || '';
        const eslintErrors = this.countESLintErrors(output);
        totalErrors += eslintErrors;
      }
      
      // Check TypeScript errors
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
      } catch (error) {
        const output = error.stdout || error.stderr || '';
        const tsErrors = this.countTypeScriptErrors(output);
        totalErrors += tsErrors;
      }
      
      // Check build errors
      try {
        execSync('npm run build', { stdio: 'pipe' });
      } catch (error) {
        const output = error.stdout || error.stderr || '';
        const buildErrors = this.countBuildErrors(output);
        totalErrors += buildErrors;
      }
      
    } catch (error) {
      this.log(`Failed to get error count: ${error.message}`);
    }
    
    return totalErrors;
  }

  countESLintErrors(output) {
    const lines = output.split('\n');
    return lines.filter(line => line.includes('error')).length;
  }

  countTypeScriptErrors(output) {
    const lines = output.split('\n');
    return lines.filter(line => line.includes('error') || line.includes('Error')).length;
  }

  countBuildErrors(output) {
    const lines = output.split('\n');
    return lines.filter(line => line.includes('error') || line.includes('Error') || line.includes('failed')).length;
  }

  shouldTriggerFix(errorCount) {
    // Trigger fix if:
    // 1. Error count is above threshold
    // 2. Error count has increased since last check
    // 3. We've had consecutive errors
    return errorCount >= this.errorThreshold || 
           errorCount > this.lastErrorCount || 
           this.consecutiveErrors >= 3;
  }

  async triggerAutomaticFix() {
    this.log('Triggering automatic error fix...');
    this.results.fixesTriggered++;
    
    try {
      // Run the error prevention orchestrator
      const orchestratorPath = path.join(this.projectRoot, 'scripts', 'automation', 'error-prevention-orchestrator.cjs');
      
      if (fs.existsSync(orchestratorPath)) {
        this.log('Running error prevention orchestrator...');
        
        const result = await this.runOrchestrator();
        if (result.success) {
          this.log('Automatic fix completed successfully');
          this.consecutiveErrors = 0;
        } else {
          this.log('Automatic fix failed');
        }
      } else {
        this.log('Error prevention orchestrator not found, running individual fixers...');
        await this.runIndividualFixers();
      }
      
    } catch (error) {
      this.log(`Failed to trigger automatic fix: ${error.message}`);
    }
  }

  async runOrchestrator() {
    return new Promise((resolve) => {
      const child = spawn('node', ['scripts/automation/error-prevention-orchestrator.cjs'], {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      let output = '';
      let errorOutput = '';
      
      child.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      child.on('close', (code) => {
        resolve({
          success: code === 0,
          output,
          errorOutput,
          exitCode: code
        });
      });
      
      // Set timeout
      setTimeout(() => {
        child.kill();
        resolve({
          success: false,
          output,
          errorOutput,
          timeout: true
        });
      }, 600000); // 10 minutes timeout
    });
  }

  async runIndividualFixers() {
    const fixers = [
      'syntax-error-fixer',
      'eslint-error-fixer',
      'typescript-error-fixer'
    ];
    
    for (const fixer of fixers) {
      try {
        const fixerPath = path.join(this.projectRoot, 'scripts', 'automation', `${fixer}.cjs`);
        if (fs.existsSync(fixerPath)) {
          this.log(`Running ${fixer}...`);
          execSync(`node ${fixerPath}`, { 
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
        }
      } catch (error) {
        this.log(`Failed to run ${fixer}: ${error.message}`);
      }
    }
  }

  async generateMonitoringReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      monitoringStatus: {
        active: this.monitoring,
        checkInterval: this.checkInterval,
        errorThreshold: this.errorThreshold
      },
      results: this.results,
      currentState: {
        consecutiveErrors: this.consecutiveErrors,
        lastErrorCount: this.lastErrorCount
      },
      summary: {
        checksPerMinute: Math.round((this.results.checksPerformed / (this.results.duration / 60000)) * 100) / 100,
        errorDetectionRate: this.results.errorsDetected > 0 ? `${Math.round((this.results.fixesTriggered / this.results.errorsDetected) * 100)}%` : '0%',
        uptime: `${Math.round(this.results.duration / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'continuous-error-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Monitoring report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Continuous Error Monitor...');
    
    try {
      // Start monitoring
      await this.startMonitoring();
      
      // Keep the process running
      this.results.success = true;
      
      // Generate initial report
      await this.generateMonitoringReport();
      
      this.log('Continuous Error Monitor is now running. Press Ctrl+C to stop.');
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        this.log('Received shutdown signal...');
        await this.stopMonitoring();
        await this.generateMonitoringReport();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        this.log('Received termination signal...');
        await this.stopMonitoring();
        await this.generateMonitoringReport();
        process.exit(0);
      });
      
      // Keep alive
      return new Promise(() => {});
      
    } catch (error) {
      this.log(`Continuous Error Monitor failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }
  {/* Removed stray closing brace */}

// Run the monitor if called directly
if (require.main === module) {
  const monitor = new ContinuousErrorMonitor();
  monitor.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = ContinuousErrorMonitor;