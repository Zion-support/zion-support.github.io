#!/usr/bin/env node

/**
 * Error Fix Automation Orchestrator
 * Coordinates all error fixing automations and provides unified management
 * Runs as a PM2 process to ensure continuous error fixing
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const ErrorFixAutomation = require('./error-fix-automation.cjs');

class ErrorFixOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.automations = new Map();
    this.isRunning = false;
    this.lastRun = null;
    this.totalErrorsFixed = 0;
    this.totalRuns = 0;
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    // Initialize automations
    this.initializeAutomations();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] [ORCHESTRATOR] ${message}`);
  }

  initializeAutomations() {
    // Core error fixing automation
    this.automations.set('core-error-fixer', {
      name: 'Core Error Fixer',
      script: './scripts/automation/error-fix-automation.cjs',
      interval: 15 * 60 * 1000, // 15 minutes
      lastRun: null,
      enabled: true,
      priority: 'high'
    });

    // TypeScript syntax fixer
    this.automations.set('typescript-syntax-fixer', {
      name: 'TypeScript Syntax Fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      interval: 30 * 60 * 1000, // 30 minutes
      lastRun: null,
      enabled: true,
      priority: 'high'
    });

    // Import/export fixer
    this.automations.set('import-export-fixer', {
      name: 'Import/Export Fixer',
      script: './scripts/automation/import-export-fixer.cjs',
      interval: 45 * 60 * 1000, // 45 minutes
      lastRun: null,
      enabled: true,
      priority: 'medium'
    });

    // Code quality improver
    this.automations.set('code-quality-improver', {
      name: 'Code Quality Improver',
      script: './scripts/automation/code-quality-improver.cjs',
      interval: 60 * 60 * 1000, // 1 hour
      lastRun: null,
      enabled: true,
      priority: 'medium'
    });

    // Dependency conflict resolver
    this.automations.set('dependency-resolver', {
      name: 'Dependency Conflict Resolver',
      script: './scripts/automation/dependency-resolver.cjs',
      interval: 2 * 60 * 60 * 1000, // 2 hours
      lastRun: null,
      enabled: true,
      priority: 'low'
    });
  }

  async start() {
    this.log('🚀 Starting Error Fix Automation Orchestrator...');
    this.isRunning = true;
    
    // Start the main loop
    this.mainLoop();
    
    // Start health monitoring
    this.startHealthMonitoring();
    
    // Start performance monitoring
    this.startPerformanceMonitoring();
  }

  async mainLoop() {
    while (this.isRunning) {
      try {
        await this.runScheduledAutomations();
        await this.checkProjectHealth();
        await this.cleanupOldReports();
        
        // Wait for next cycle
        await this.sleep(60 * 1000); // Check every minute
      } catch (error) {
        this.log(`❌ Main loop error: ${error.message}`, 'ERROR');
        await this.sleep(5 * 60 * 1000); // Wait 5 minutes on error
      }
    }
  }

  async runScheduledAutomations() {
    const now = Date.now();
    
    for (const [id, automation] of this.automations) {
      if (!automation.enabled) continue;
      
      const shouldRun = !automation.lastRun || 
                       (now - automation.lastRun) >= automation.interval;
      
      if (shouldRun) {
        this.log(`🔄 Running ${automation.name}...`);
        
        try {
          await this.runAutomation(id, automation);
          automation.lastRun = now;
          this.totalRuns++;
          
          this.log(`✅ ${automation.name} completed successfully`);
        } catch (error) {
          this.log(`❌ ${automation.name} failed: ${error.message}`, 'ERROR');
          await this.handleAutomationFailure(id, automation, error);
        }
      }
    }
  }

  async runAutomation(id, automation) {
    return new Promise((resolve, reject) => {
      const child = spawn('node', [automation.script], {
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      let stdout = '';
      let stderr = '';
      
      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(new Error(`Automation failed with code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
      
      // Set timeout for automation
      setTimeout(() => {
        child.kill();
        reject(new Error('Automation timed out'));
      }, 10 * 60 * 1000); // 10 minute timeout
    });
  }

  async handleAutomationFailure(id, automation, error) {
    // Log the failure
    this.log(`Handling failure for ${automation.name}`, 'WARN');
    
    // Create failure report
    const failureReport = {
      timestamp: new Date().toISOString(),
      automation: automation.name,
      error: error.message,
      stack: error.stack,
      retryCount: automation.retryCount || 0
    };
    
    const reportPath = path.join(this.reportsDir, `automation-failure-${id}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(failureReport, null, 2));
    
    // Implement retry logic
    if (!automation.retryCount) automation.retryCount = 0;
    automation.retryCount++;
    
    if (automation.retryCount <= 3) {
      // Retry after exponential backoff
      const backoffTime = Math.min(5 * 60 * 1000 * Math.pow(2, automation.retryCount), 30 * 60 * 1000);
      this.log(`🔄 Retrying ${automation.name} in ${backoffTime / 1000} seconds...`);
      
      setTimeout(async () => {
        try {
          await this.runAutomation(id, automation);
          automation.retryCount = 0; // Reset retry count on success
        } catch (retryError) {
          this.log(`❌ Retry failed for ${automation.name}: ${retryError.message}`, 'ERROR');
        }
      }, backoffTime);
    } else {
      // Disable automation after too many failures
      this.log(`⚠️ Disabling ${automation.name} due to repeated failures`, 'WARN');
      automation.enabled = false;
      
      // Send alert
      await this.sendAlert(`Automation ${automation.name} has been disabled due to repeated failures`);
    }
  }

  async checkProjectHealth() {
    try {
      // Check TypeScript compilation
      const tsResult = execSync('npm run type-check 2>&1', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      // Check ESLint
      const lintResult = execSync('npm run lint 2>&1', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      // Generate health report
      const healthReport = {
        timestamp: new Date().toISOString(),
        typescript: {
          status: 'healthy',
          errors: 0,
          output: tsResult
        },
        eslint: {
          status: 'healthy',
          errors: 0,
          output: lintResult
        },
        automations: {
          total: this.automations.size,
          enabled: Array.from(this.automations.values()).filter(a => a.enabled).length,
          running: this.isRunning
        }
      };
      
      const reportPath = path.join(this.reportsDir, 'project-health-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
    } catch (error) {
      this.log(`⚠️ Project health check failed: ${error.message}`, 'WARN');
    }
  }

  async cleanupOldReports() {
    try {
      const files = fs.readdirSync(this.reportsDir);
      const now = Date.now();
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      
      for (const file of files) {
        const filePath = path.join(this.reportsDir, file);
        const stats = fs.statSync(filePath);
        
        if (now - stats.mtime.getTime() > maxAge) {
          fs.unlinkSync(filePath);
          this.log(`🗑️ Cleaned up old report: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Cleanup failed: ${error.message}`, 'WARN');
    }
  }

  startHealthMonitoring() {
    setInterval(() => {
      const memoryUsage = process.memoryUsage();
      const uptime = process.uptime();
      
      const healthMetrics = {
        timestamp: new Date().toISOString(),
        uptime: uptime,
        memory: {
          rss: memoryUsage.rss,
          heapUsed: memoryUsage.heapUsed,
          heapTotal: memoryUsage.heapTotal,
          external: memoryUsage.external
        },
        automations: {
          total: this.automations.size,
          enabled: Array.from(this.automations.values()).filter(a => a.enabled).length,
          lastRun: this.lastRun
        }
      };
      
      const metricsPath = path.join(this.reportsDir, 'orchestrator-health-metrics.json');
      fs.writeFileSync(metricsPath, JSON.stringify(healthMetrics, null, 2));
      
    }, 5 * 60 * 1000); // Every 5 minutes
  }

  startPerformanceMonitoring() {
    setInterval(() => {
      const performanceMetrics = {
        timestamp: new Date().toISOString(),
        totalRuns: this.totalRuns,
        totalErrorsFixed: this.totalErrorsFixed,
        averageRunTime: this.calculateAverageRunTime(),
        successRate: this.calculateSuccessRate()
      };
      
      const metricsPath = path.join(this.reportsDir, 'orchestrator-performance-metrics.json');
      fs.writeFileSync(metricsPath, JSON.stringify(performanceMetrics, null, 2));
      
    }, 15 * 60 * 1000); // Every 15 minutes
  }

  calculateAverageRunTime() {
    // Implementation would track individual run times
    return 0;
  }

  calculateSuccessRate() {
    // Implementation would track success/failure rates
    return 1.0;
  }

  async sendAlert(message) {
    // Implementation for sending alerts (email, Slack, etc.)
    this.log(`🚨 ALERT: ${message}`, 'ALERT');
    
    const alertReport = {
      timestamp: new Date().toISOString(),
      message: message,
      severity: 'high'
    };
    
    const alertPath = path.join(this.reportsDir, `alert-${Date.now()}.json`);
    fs.writeFileSync(alertPath, JSON.stringify(alertReport, null, 2));
  }

  async stop() {
    this.log('🛑 Stopping Error Fix Automation Orchestrator...');
    this.isRunning = false;
    
    // Generate final report
    await this.generateFinalReport();
    
    this.log('✅ Orchestrator stopped successfully');
  }

  async generateFinalReport() {
    const finalReport = {
      timestamp: new Date().toISOString(),
      status: 'stopped',
      totalRuns: this.totalRuns,
      totalErrorsFixed: this.totalErrorsFixed,
      automations: Array.from(this.automations.values()).map(a => ({
        name: a.name,
        enabled: a.enabled,
        lastRun: a.lastRun,
        retryCount: a.retryCount || 0
      }))
    };
    
    const reportPath = path.join(this.reportsDir, 'orchestrator-final-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // API methods for external control
  async enableAutomation(id) {
    if (this.automations.has(id)) {
      this.automations.get(id).enabled = true;
      this.log(`✅ Enabled automation: ${id}`);
      return true;
    }
    return false;
  }

  async disableAutomation(id) {
    if (this.automations.has(id)) {
      this.automations.get(id).enabled = false;
      this.log(`⚠️ Disabled automation: ${id}`);
      return true;
    }
    return false;
  }

  async runAutomationNow(id) {
    if (this.automations.has(id)) {
      const automation = this.automations.get(id);
      this.log(`🚀 Running ${automation.name} immediately...`);
      
      try {
        await this.runAutomation(id, automation);
        automation.lastRun = Date.now();
        this.log(`✅ ${automation.name} completed successfully`);
        return true;
      } catch (error) {
        this.log(`❌ ${automation.name} failed: ${error.message}`, 'ERROR');
        return false;
      }
    }
    return false;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      totalRuns: this.totalRuns,
      totalErrorsFixed: this.totalErrorsFixed,
      automations: Array.from(this.automations.entries()).map(([id, automation]) => ({
        id,
        name: automation.name,
        enabled: automation.enabled,
        lastRun: automation.lastRun,
        nextRun: automation.lastRun ? automation.lastRun + automation.interval : null,
        retryCount: automation.retryCount || 0
      }))
    };
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new ErrorFixOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await orchestrator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await orchestrator.stop();
    process.exit(0);
  });
  
  // Start the orchestrator
  orchestrator.start().catch(console.error);
}

module.exports = ErrorFixOrchestrator;