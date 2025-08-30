#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationController {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'master-automation-report.json');
    this.startTime = Date.now();
    this.automations = [];
    this.status = {};
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async run() {
    this.log('🚀 Starting Master Automation Controller...');
    
    try {
      // Initialize automation status
      await this.initializeAutomations();
      
      // Run all automations
      await this.runAllAutomations();
      
      // Generate master report
      await this.generateMasterReport();
      
      this.log('✅ Master automation controller completed successfully');
      
    } catch (error) {
      this.log(`Error during execution: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  async initializeAutomations() {
    this.log('🔧 Initializing automation systems...');
    
    this.automations = [
      {
        name: 'comprehensive-error-fixer',
        script: './scripts/automation/comprehensive-error-fixer.cjs',
        description: 'Fixes TypeScript and JSX syntax errors',
        priority: 'high',
        interval: '0 */4 * * *' // Every 4 hours
      },
      {
        name: 'project-health-monitor',
        script: './scripts/automation/project-health-monitor.cjs',
        description: 'Monitors overall project health and quality',
        priority: 'medium',
        interval: '0 */2 * * *' // Every 2 hours
      }
    ];
    
    this.log(`Initialized ${this.automations.length} automation systems`);
  }

  async runAllAutomations() {
    this.log('🔄 Running all automation systems...');
    
    for (const automation of this.automations) {
      try {
        this.log(`Running ${automation.name}...`);
        await this.runAutomation(automation);
        this.status[automation.name] = 'completed';
      } catch (error) {
        this.log(`Failed to run ${automation.name}: ${error.message}`, 'error');
        this.status[automation.name] = 'failed';
      }
    }
  }

  async runAutomation(automation) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      const child = spawn('node', [automation.script], {
        stdio: 'pipe',
        cwd: this.projectRoot
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
        const duration = Date.now() - startTime;
        
        if (code === 0) {
          this.log(`✅ ${automation.name} completed successfully in ${duration}ms`);
          resolve({ success: true, duration, stdout, stderr });
        } else {
          this.log(`❌ ${automation.name} failed with exit code ${code}`, 'error');
          reject(new Error(`Exit code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
      
      // Set timeout for automation
      setTimeout(() => {
        child.kill();
        reject(new Error('Automation timed out'));
      }, 300000); // 5 minutes timeout
    });
  }

  async generateMasterReport() {
    this.log('📊 Generating master automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      automations: this.automations.map(auto => ({
        name: auto.name,
        description: auto.description,
        priority: auto.priority,
        interval: auto.interval,
        status: this.status[auto.name] || 'unknown'
      })),
      summary: {
        total: this.automations.length,
        completed: Object.values(this.status).filter(s => s === 'completed').length,
        failed: Object.values(this.status).filter(s => s === 'failed').length
      },
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Master report saved to ${this.reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    const failedCount = Object.values(this.status).filter(s => s === 'failed').length;
    if (failedCount > 0) {
      recommendations.push(`Investigate ${failedCount} failed automation(s)`);
    }
    
    const completedCount = Object.values(this.status).filter(s => s === 'completed').length;
    if (completedCount === this.automations.length) {
      recommendations.push('All automations completed successfully - project is healthy');
    }
    
    if (this.status['comprehensive-error-fixer'] === 'completed') {
      recommendations.push('Error fixing completed - check TypeScript compilation');
    }
    
    if (this.status['project-health-monitor'] === 'completed') {
      recommendations.push('Health monitoring completed - review health report');
    }
    
    return recommendations;
  }
}

// Run the master controller
const controller = new MasterAutomationController();
controller.run().catch(console.error);