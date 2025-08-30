#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.dashboardPath = path.join(this.projectRoot, 'automation-dashboard.json');
    this.automations = this.initializeAutomations();
    this.status = 'idle';
    this.lastRun = null;
    this.stats = {
      totalRuns: 0,
      successfulFixes: 0,
      errorsFixed: 0,
      warningsFixed: 0,
      totalErrors: 0,
      totalWarnings: 0
    };
  }

  initializeAutomations() {
    return {
      'enhanced-error-fixer': {
        name: 'Enhanced Error Fixer',
        script: './scripts/automation/enhanced-error-fixer.cjs',
        description: 'Automatically fixes common TypeScript and ESLint errors',
        schedule: '*/15 * * * *', // Every 15 minutes
        lastRun: null,
        status: 'idle',
        priority: 'high'
      },
      'comprehensive-error-automation': {
        name: 'Comprehensive Error Automation',
        script: './scripts/automation/comprehensive-error-automation.cjs',
        description: 'Intelligent error analysis and resolution',
        schedule: '0 */2 * * *', // Every 2 hours
        lastRun: null,
        status: 'idle',
        priority: 'medium'
      },
      'console-error-fixer': {
        name: 'Console Error Fixer',
        script: './scripts/automation/console-error-fixer.cjs',
        description: 'Fixes console and runtime errors',
        schedule: '*/10 * * * *', // Every 10 minutes
        lastRun: null,
        status: 'idle',
        priority: 'high'
      },
      'typescript-syntax-fixer': {
        name: 'TypeScript Syntax Fixer',
        script: './scripts/automation/typescript-syntax-fixer.cjs',
        description: 'Fixes TypeScript syntax and type errors',
        schedule: '*/30 * * * *', // Every 30 minutes
        lastRun: null,
        status: 'idle',
        priority: 'medium'
      },
      'smart-dependency-manager': {
        name: 'Smart Dependency Manager',
        script: './scripts/automation/smart-dependency-manager.cjs',
        description: 'Manages and updates dependencies',
        schedule: '0 */6 * * *', // Every 6 hours
        lastRun: null,
        status: 'idle',
        priority: 'low'
      }
    };
  }

  async start() {
    console.log('🚀 Starting Automation Dashboard...');
    
    try {
      // Load existing dashboard state
      await this.loadDashboard();
      
      // Start monitoring
      await this.startMonitoring();
      
      // Run initial health check
      await this.runHealthCheck();
      
      console.log('✅ Automation Dashboard started successfully');
      
    } catch (error) {
      console.error('❌ Failed to start Automation Dashboard:', error);
    }
  }

  async startMonitoring() {
    console.log('📊 Starting automation monitoring...');
    
    // Monitor PM2 processes
    setInterval(async () => {
      await this.monitorPM2Processes();
    }, 30000); // Every 30 seconds
    
    // Check automation schedules
    setInterval(async () => {
      await this.checkSchedules();
    }, 60000); // Every minute
    
    // Generate periodic reports
    setInterval(async () => {
      await this.generatePeriodicReport();
    }, 300000); // Every 5 minutes
  }

  async monitorPM2Processes() {
    try {
      const pm2List = execSync('pm2 list --json', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      const processes = JSON.parse(pm2List);
      
      for (const process of processes) {
        if (this.automations[process.name]) {
          this.automations[process.name].status = process.pm2_env.status;
          this.automations[process.name].lastRun = new Date().toISOString();
        }
      }
      
      await this.saveDashboard();
      
    } catch (error) {
      console.warn('Warning: Could not monitor PM2 processes:', error.message);
    }
  }

  async checkSchedules() {
    const now = new Date();
    
    for (const [key, automation] of Object.entries(this.automations)) {
      if (this.shouldRunAutomation(automation, now)) {
        await this.runAutomation(key, automation);
      }
    }
  }

  shouldRunAutomation(automation, now) {
    if (automation.status === 'running') return false;
    
    const lastRun = automation.lastRun ? new Date(automation.lastRun) : null;
    if (!lastRun) return true;
    
    // Simple schedule checking (can be enhanced with cron parsing)
    const timeSinceLastRun = now - lastRun;
    const scheduleMinutes = this.parseSchedule(automation.schedule);
    
    return timeSinceLastRun >= scheduleMinutes * 60 * 1000;
  }

  parseSchedule(schedule) {
    // Simple schedule parsing (can be enhanced)
    if (schedule.includes('*/15')) return 15;
    if (schedule.includes('*/10')) return 10;
    if (schedule.includes('*/30')) return 30;
    if (schedule.includes('*/2')) return 120;
    if (schedule.includes('*/6')) return 360;
    return 60; // Default to 1 hour
  }

  async runAutomation(key, automation) {
    console.log(`🚀 Running automation: ${automation.name}`);
    
    try {
      automation.status = 'running';
      automation.lastRun = new Date().toISOString();
      this.status = 'running';
      
      await this.saveDashboard();
      
      // Run the automation script
      const output = execSync(`node ${automation.script}`, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 300000 // 5 minutes timeout
      });
      
      // Parse output for statistics
      this.parseAutomationOutput(output, automation);
      
      automation.status = 'completed';
      this.status = 'idle';
      this.stats.totalRuns++;
      
      console.log(`✅ Automation completed: ${automation.name}`);
      
    } catch (error) {
      console.error(`❌ Automation failed: ${automation.name}`, error.message);
      automation.status = 'failed';
      this.status = 'error';
    }
    
    await this.saveDashboard();
  }

  parseAutomationOutput(output, automation) {
    // Parse common output patterns to extract statistics
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('Fixed') && line.includes('issues')) {
        const match = line.match(/Fixed\s+(\d+)\s+issues/);
        if (match) {
          this.stats.successfulFixes += parseInt(match[1]);
        }
      }
      
      if (line.includes('errors') && line.includes('fixed')) {
        const match = line.match(/(\d+)\s+errors\s+fixed/);
        if (match) {
          this.stats.errorsFixed += parseInt(match[1]);
        }
      }
      
      if (line.includes('warnings') && line.includes('fixed')) {
        const match = line.match(/(\d+)\s+warnings\s+fixed/);
        if (match) {
          this.stats.warningsFixed += parseInt(match[1]);
        }
      }
    }
  }

  async runHealthCheck() {
    console.log('🏥 Running health check...');
    
    try {
      // Check if all automation scripts exist
      for (const [key, automation] of Object.entries(this.automations)) {
        if (!fs.existsSync(automation.script)) {
          console.warn(`⚠️ Automation script not found: ${automation.script}`);
          automation.status = 'error';
        }
      }
      
      // Check PM2 status
      const pm2Status = execSync('pm2 ping', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      if (pm2Status.includes('pong')) {
        console.log('✅ PM2 is running');
      } else {
        console.warn('⚠️ PM2 is not responding');
      }
      
      // Check current error count
      await this.updateErrorCounts();
      
      await this.saveDashboard();
      
    } catch (error) {
      console.error('❌ Health check failed:', error.message);
    }
  }

  async updateErrorCounts() {
    try {
      const lintOutput = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      const errors = (lintOutput.match(/error/g) || []).length;
      const warnings = (lintOutput.match(/warning/g) || []).length;
      
      this.stats.totalErrors = errors;
      this.stats.totalWarnings = warnings;
      
    } catch (error) {
      console.warn('Warning: Could not update error counts:', error.message);
    }
  }

  async generatePeriodicReport() {
    const report = {
      timestamp: new Date().toISOString(),
      dashboard: {
        status: this.status,
        lastRun: this.lastRun,
        automations: this.automations
      },
      statistics: this.stats,
      summary: this.generateSummary()
    };
    
    try {
      const reportPath = path.join(this.projectRoot, `automation-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Periodic report generated: ${reportPath}`);
    } catch (error) {
      console.error('Failed to generate periodic report:', error.message);
    }
  }

  generateSummary() {
    const activeAutomations = Object.values(this.automations).filter(a => a.status === 'running').length;
    const completedAutomations = Object.values(this.automations).filter(a => a.status === 'completed').length;
    const failedAutomations = Object.values(this.automations).filter(a => a.status === 'failed').length;
    
    return {
      activeAutomations,
      completedAutomations,
      failedAutomations,
      totalAutomations: Object.keys(this.automations).length,
      errorReduction: this.stats.totalErrors > 0 ? 
        Math.round((this.stats.errorsFixed / this.stats.totalErrors) * 100) : 0
    };
  }

  async loadDashboard() {
    try {
      if (fs.existsSync(this.dashboardPath)) {
        const data = fs.readFileSync(this.dashboardPath, 'utf8');
        const dashboard = JSON.parse(data);
        
        // Merge with current state
        this.automations = { ...this.automations, ...dashboard.automations };
        this.stats = { ...this.stats, ...dashboard.stats };
        this.lastRun = dashboard.lastRun;
        
        console.log('📊 Dashboard state loaded');
      }
    } catch (error) {
      console.warn('Warning: Could not load dashboard state:', error.message);
    }
  }

  async saveDashboard() {
    try {
      const dashboard = {
        timestamp: new Date().toISOString(),
        automations: this.automations,
        stats: this.stats,
        lastRun: this.lastRun
      };
      
      fs.writeFileSync(this.dashboardPath, JSON.stringify(dashboard, null, 2));
    } catch (error) {
      console.error('Failed to save dashboard state:', error.message);
    }
  }

  // Public methods for external control
  async getStatus() {
    return {
      status: this.status,
      automations: this.automations,
      stats: this.stats,
      lastRun: this.lastRun
    };
  }

  async runAutomationNow(automationKey) {
    const automation = this.automations[automationKey];
    if (automation) {
      await this.runAutomation(automationKey, automation);
      return { success: true, message: `Automation ${automation.name} started` };
    } else {
      return { success: false, message: `Automation ${automationKey} not found` };
    }
  }

  async stopAutomation(automationKey) {
    const automation = this.automations[automationKey];
    if (automation && automation.status === 'running') {
      automation.status = 'stopped';
      await this.saveDashboard();
      return { success: true, message: `Automation ${automation.name} stopped` };
    } else {
      return { success: false, message: `Automation ${automationKey} not running` };
    }
  }
}

// Run the dashboard
if (require.main === module) {
  const dashboard = new AutomationDashboard();
  dashboard.start().catch(console.error);
}

module.exports = AutomationDashboard;