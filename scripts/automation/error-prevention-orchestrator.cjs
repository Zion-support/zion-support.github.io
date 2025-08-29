#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorPreventionOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'error-prevention-orchestrator-report.json');
    this.automations = [];
    this.status = {};
    this.metrics = {
      totalErrorsFixed: 0,
      totalPreventions: 0,
      totalChecks: 0,
      uptime: 0
    };
  }

  async run() {
    console.log('🎯 Starting Error Prevention Orchestrator...');
    
    try {
      await this.initializeAutomations();
      await this.startMonitoring();
      await this.runPeriodicChecks();
      await this.generateDashboard();
      
    } catch (error) {
      console.error('❌ Orchestrator failed:', error.message);
      await this.generateReport();
      process.exit(1);
    }
  }

  async initializeAutomations() {
    console.log('🔧 Initializing automation systems...');
    
    this.automations = [
      {
        name: 'comprehensive-error-prevention',
        script: './scripts/automation/comprehensive-error-prevention.cjs',
        interval: 600000, // 10 minutes
        priority: 'high',
        status: 'stopped'
      },
      {
        name: 'error-fixer',
        script: './scripts/automation/error-fixer.cjs',
        interval: 900000, // 15 minutes
        priority: 'high',
        status: 'stopped'
      },
      {
        name: 'console-error-fixer',
        script: './scripts/automation/console-error-fixer.cjs',
        interval: 900000, // 15 minutes
        priority: 'medium',
        status: 'stopped'
      },
      {
        name: 'intelligent-predictive-monitor',
        script: './scripts/automation/intelligent-predictive-monitor.cjs',
        interval: 300000, // 5 minutes
        priority: 'critical',
        status: 'stopped'
      },
      {
        name: 'quality-checks',
        script: './scripts/automation/quality-checks.cjs',
        interval: 10800000, // 3 hours
        priority: 'medium',
        status: 'stopped'
      },
      {
        name: 'security-audit',
        script: './scripts/automation/security-audit.cjs',
        interval: 14400000, // 4 hours
        priority: 'high',
        status: 'stopped'
      }
    ];

    // Start all automations
    for (const automation of this.automations) {
      await this.startAutomation(automation);
    }
  }

  async startAutomation(automation) {
    try {
      console.log(`🚀 Starting ${automation.name}...`);
      
      // Check if script exists
      if (!fs.existsSync(automation.script)) {
        console.warn(`⚠️ Script not found: ${automation.script}`);
        automation.status = 'error';
        return;
      }

      // Run the automation
      execSync(`node ${automation.script}`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      automation.status = 'running';
      automation.lastRun = new Date().toISOString();
      this.metrics.totalChecks++;

      console.log(`✅ ${automation.name} started successfully`);

    } catch (error) {
      console.error(`❌ Failed to start ${automation.name}:`, error.message);
      automation.status = 'error';
      automation.lastError = error.message;
    }
  }

  async startMonitoring() {
    console.log('📊 Starting monitoring system...');
    
    // Set up periodic status checks
    setInterval(async () => {
      await this.checkAutomationStatus();
      await this.updateMetrics();
    }, 30000); // Check every 30 seconds

    // Set up periodic automation runs
    for (const automation of this.automations) {
      setInterval(async () => {
        await this.runAutomation(automation);
      }, automation.interval);
    }
  }

  async checkAutomationStatus() {
    for (const automation of this.automations) {
      try {
        // Check if automation is still running
        const reportFile = this.getReportFile(automation.name);
        if (fs.existsSync(reportFile)) {
          const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
          automation.lastReport = report;
          automation.status = 'running';
        } else {
          automation.status = 'stopped';
        }
      } catch (error) {
        automation.status = 'error';
        automation.lastError = error.message;
      }
    }
  }

  async runAutomation(automation) {
    try {
      console.log(`🔄 Running ${automation.name}...`);
      
      execSync(`node ${automation.script}`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      automation.lastRun = new Date().toISOString();
      automation.status = 'running';
      this.metrics.totalChecks++;

      // Update metrics based on automation results
      await this.updateAutomationMetrics(automation);

    } catch (error) {
      console.error(`❌ ${automation.name} failed:`, error.message);
      automation.status = 'error';
      automation.lastError = error.message;
    }
  }

  async updateAutomationMetrics(automation) {
    const reportFile = this.getReportFile(automation.name);
    
    if (fs.existsSync(reportFile)) {
      try {
        const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
        
        if (report.totalErrorsFixed) {
          this.metrics.totalErrorsFixed += report.totalErrorsFixed;
        }
        
        if (report.totalFixes) {
          this.metrics.totalPreventions += report.totalFixes;
        }
        
        automation.lastReport = report;
      } catch (error) {
        console.warn(`⚠️ Could not read report for ${automation.name}:`, error.message);
      }
    }
  }

  async runPeriodicChecks() {
    console.log('🔍 Running periodic system checks...');
    
    // Run comprehensive checks every hour
    setInterval(async () => {
      await this.runSystemHealthCheck();
      await this.runPerformanceCheck();
      await this.runSecurityCheck();
    }, 3600000); // 1 hour
  }

  async runSystemHealthCheck() {
    console.log('🏥 Running system health check...');
    
    try {
      // Check TypeScript compilation
      execSync('npm run type-check', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Check build process
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes
      });
      
      this.status.systemHealth = 'healthy';
      console.log('✅ System health check passed');
      
    } catch (error) {
      this.status.systemHealth = 'unhealthy';
      console.error('❌ System health check failed:', error.message);
      
      // Trigger emergency error fixing
      await this.triggerEmergencyFix();
    }
  }

  async runPerformanceCheck() {
    console.log('⚡ Running performance check...');
    
    try {
      // Check bundle size
      const buildOutput = execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      }).toString();
      
      // Extract bundle size information
      const bundleSizeMatch = buildOutput.match(/dist\/.*\.js.*?(\d+(?:\.\d+)?)\s*KB/);
      if (bundleSizeMatch) {
        const bundleSize = parseFloat(bundleSizeMatch[1]);
        if (bundleSize > 1000) { // 1MB threshold
          this.status.performance = 'warning';
          console.warn('⚠️ Bundle size is large:', bundleSize, 'KB');
        } else {
          this.status.performance = 'good';
        }
      }
      
    } catch (error) {
      this.status.performance = 'error';
      console.error('❌ Performance check failed:', error.message);
    }
  }

  async runSecurityCheck() {
    console.log('🔒 Running security check...');
    
    try {
      execSync('npm audit --audit-level=moderate', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.status.security = 'secure';
      console.log('✅ Security check passed');
      
    } catch (error) {
      this.status.security = 'vulnerable';
      console.error('❌ Security vulnerabilities found');
      
      // Trigger security fix
      await this.triggerSecurityFix();
    }
  }

  async triggerEmergencyFix() {
    console.log('🚨 Triggering emergency error fix...');
    
    try {
      // Run error fixer immediately
      execSync('node ./scripts/automation/error-fixer.cjs', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Run comprehensive error prevention
      execSync('node ./scripts/automation/comprehensive-error-prevention.cjs', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      console.log('✅ Emergency fix completed');
      
    } catch (error) {
      console.error('❌ Emergency fix failed:', error.message);
    }
  }

  async triggerSecurityFix() {
    console.log('🔒 Triggering security fix...');
    
    try {
      execSync('npm audit fix', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      console.log('✅ Security fix completed');
      
    } catch (error) {
      console.error('❌ Security fix failed:', error.message);
    }
  }

  async generateDashboard() {
    console.log('📊 Generating dashboard...');
    
    const dashboard = {
      timestamp: new Date().toISOString(),
      uptime: this.metrics.uptime,
      automations: this.automations.map(auto => ({
        name: auto.name,
        status: auto.status,
        priority: auto.priority,
        lastRun: auto.lastRun,
        lastError: auto.lastError
      })),
      metrics: this.metrics,
      status: this.status,
      summary: {
        totalAutomations: this.automations.length,
        runningAutomations: this.automations.filter(a => a.status === 'running').length,
        errorAutomations: this.automations.filter(a => a.status === 'error').length,
        totalErrorsFixed: this.metrics.totalErrorsFixed,
        totalPreventions: this.metrics.totalPreventions
      }
    };

    const dashboardFile = path.join(this.projectRoot, 'error-prevention-dashboard.json');
    fs.writeFileSync(dashboardFile, JSON.stringify(dashboard, null, 2));
    
    console.log(`📄 Dashboard saved to ${dashboardFile}`);
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      orchestrator: {
        uptime: this.metrics.uptime,
        totalChecks: this.metrics.totalChecks,
        totalErrorsFixed: this.metrics.totalErrorsFixed,
        totalPreventions: this.metrics.totalPreventions
      },
      automations: this.automations,
      status: this.status,
      summary: `Orchestrator managed ${this.automations.length} automations, fixed ${this.metrics.totalErrorsFixed} errors, prevented ${this.metrics.totalPreventions} issues`
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📄 Report saved to ${this.reportFile}`);
  }

  getReportFile(automationName) {
    const reportMap = {
      'comprehensive-error-prevention': 'comprehensive-error-prevention-report.json',
      'error-fixer': 'error-fixer-report.json',
      'console-error-fixer': 'console-error-fixer-report.json',
      'intelligent-predictive-monitor': 'intelligent-predictive-monitor-report.json',
      'quality-checks': 'quality-checks-report.json',
      'security-audit': 'security-audit-report.json'
    };
    
    const fileName = reportMap[automationName] || `${automationName}-report.json`;
    return path.join(this.projectRoot, fileName);
  }

  async updateMetrics() {
    this.metrics.uptime += 30; // Increment by 30 seconds
  }
}

// Run the orchestrator
if (require.main === module) {
  const orchestrator = new ErrorPreventionOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = ErrorPreventionOrchestrator;