#!/usr/bin/env node

/**
 * PM2 Error Automation Orchestrator - Coordinates all error fixing and prevention systems
 * Manages the comprehensive error automation ecosystem
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2ErrorAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'pm2-error-automation-orchestrator-report.json');
    this.startTime = Date.now();
    this.automationStatus = new Map();
    this.initializeAutomationStatus();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] 🎯 ${message}`);
  }

  initializeAutomationStatus() {
    // Initialize status for all automation systems
    this.automationStatus.set('comprehensive-error-fixer', { status: 'idle', lastRun: null, success: false });
    this.automationStatus.set('intelligent-error-prevention', { status: 'idle', lastRun: null, success: false });
    this.automationStatus.set('console-error-fixer', { status: 'idle', lastRun: null, success: false });
    this.automationStatus.set('typescript-syntax-fixer', { status: 'idle', lastRun: null, success: false });
    this.automationStatus.set('ai-code-analyzer', { status: 'idle', lastRun: null, success: false });
  }

  async run() {
    this.log('🚀 Starting PM2 Error Automation Orchestrator...');
    
    try {
      await this.checkPM2Status();
      await this.orchestrateErrorFixing();
      await this.orchestrateErrorPrevention();
      await this.runMaintenanceTasks();
      await this.generateOrchestrationReport();
      
      this.log('✅ PM2 Error Automation Orchestrator completed successfully!');
      
    } catch (error) {
      this.log(`❌ Error in PM2 Error Automation Orchestrator: ${error.message}`);
      await this.generateOrchestrationReport();
    }
  }

  async checkPM2Status() {
    this.log('🔍 Checking PM2 status...');
    
    try {
      const pm2Status = execSync('pm2 status --json', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      const status = JSON.parse(pm2Status.toString());
      this.log(`📊 PM2 Status: ${status.length} processes running`);
      
      // Check if our automation processes are running
      for (const process of status) {
        if (this.automationStatus.has(process.name)) {
          this.automationStatus.get(process.name).status = process.pm2_env.status;
          this.automationStatus.get(process.name).lastRun = process.pm2_env.pm_uptime;
        }
      }
      
    } catch (error) {
      this.log(`⚠️  Could not check PM2 status: ${error.message}`);
    }
  }

  async orchestrateErrorFixing() {
    this.log('🔧 Orchestrating error fixing systems...');
    
    // Run comprehensive error fixer first
    await this.runAutomation('comprehensive-error-fixer', './scripts/automation/comprehensive-error-fixer.cjs');
    
    // Run console error fixer
    await this.runAutomation('console-error-fixer', './scripts/automation/console-error-fixer.cjs');
    
    // Run TypeScript syntax fixer
    await this.runAutomation('typescript-syntax-fixer', './scripts/automation/typescript-syntax-fixer.cjs');
    
    // Run AI code analyzer
    await this.runAutomation('ai-code-analyzer', './scripts/automation/ai-code-analyzer.cjs');
  }

  async orchestrateErrorPrevention() {
    this.log('🛡️  Orchestrating error prevention systems...');
    
    // Run intelligent error prevention
    await this.runAutomation('intelligent-error-prevention', './scripts/automation/intelligent-error-prevention.cjs');
    
    // Run quality checks
    await this.runAutomation('quality-checks', './scripts/automation/quality-checks.cjs');
    
    // Run continuous improvement
    await this.runAutomation('continuous-improvement', './scripts/automation/continuous-improvement.cjs');
  }

  async runAutomation(name, scriptPath) {
    this.log(`▶️  Running ${name}...`);
    
    try {
      this.automationStatus.get(name).status = 'running';
      this.automationStatus.get(name).lastRun = Date.now();
      
      const startTime = Date.now();
      execSync(`node ${scriptPath}`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      const duration = Date.now() - startTime;
      this.automationStatus.get(name).status = 'completed';
      this.automationStatus.get(name).success = true;
      
      this.log(`✅ ${name} completed successfully in ${duration}ms`);
      
    } catch (error) {
      this.automationStatus.get(name).status = 'failed';
      this.automationStatus.get(name).success = false;
      this.log(`❌ ${name} failed: ${error.message}`);
    }
  }

  async runMaintenanceTasks() {
    this.log('🔧 Running maintenance tasks...');
    
    try {
      // Clean up old reports
      await this.cleanupOldReports();
      
      // Check disk space
      await this.checkDiskSpace();
      
      // Validate automation scripts
      await this.validateAutomationScripts();
      
      // Update PM2 processes if needed
      await this.updatePM2Processes();
      
    } catch (error) {
      this.log(`⚠️  Error in maintenance tasks: ${error.message}`);
    }
  }

  async cleanupOldReports() {
    this.log('🧹 Cleaning up old reports...');
    
    const reportFiles = [
      'comprehensive-error-fixer-report.json',
      'intelligent-error-prevention-report.json',
      'console-error-fixer-report.json',
      'typescript-syntax-fixer-report.json',
      'ai-code-analyzer-report.json',
      'quality-checks-report.json',
      'continuous-improvement-report.json'
    ];
    
    for (const reportFile of reportFiles) {
      const reportPath = path.join(this.projectRoot, reportFile);
      if (fs.existsSync(reportPath)) {
        try {
          const stats = fs.statSync(reportPath);
          const ageInDays = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
          
          if (ageInDays > 7) { // Remove reports older than 7 days
            fs.unlinkSync(reportPath);
            this.log(`🗑️  Removed old report: ${reportFile}`);
          }
        } catch (error) {
          this.log(`⚠️  Could not remove ${reportFile}: ${error.message}`);
        }
      }
    }
  }

  async checkDiskSpace() {
    this.log('💾 Checking disk space...');
    
    try {
      const dfOutput = execSync('df -h .', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 10000 
      });
      
      const lines = dfOutput.toString().split('\n');
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        if (parts.length > 4) {
          const usedPercent = parseInt(parts[4].replace('%', ''));
          if (usedPercent > 90) {
            this.log(`⚠️  Disk usage is high: ${parts[4]} used`);
          } else {
            this.log(`✅ Disk usage is normal: ${parts[4]} used`);
          }
        }
      }
    } catch (error) {
      this.log(`⚠️  Could not check disk space: ${error.message}`);
    }
  }

  async validateAutomationScripts() {
    this.log('✅ Validating automation scripts...');
    
    const scripts = [
      './scripts/automation/comprehensive-error-fixer.cjs',
      './scripts/automation/intelligent-error-prevention.cjs',
      './scripts/automation/console-error-fixer.cjs',
      './scripts/automation/typescript-syntax-fixer.cjs',
      './scripts/automation/ai-code-analyzer.cjs'
    ];
    
    for (const script of scripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        try {
          // Try to require the script to validate syntax
          require(scriptPath);
          this.log(`✅ ${script} is valid`);
        } catch (error) {
          this.log(`❌ ${script} has syntax errors: ${error.message}`);
        }
      } else {
        this.log(`⚠️  ${script} not found`);
      }
    }
  }

  async updatePM2Processes() {
    this.log('🔄 Updating PM2 processes...');
    
    try {
      // Reload PM2 processes to pick up any changes
      execSync('pm2 reload all', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      this.log('✅ PM2 processes reloaded');
      
    } catch (error) {
      this.log(`⚠️  Could not reload PM2 processes: ${error.message}`);
    }
  }

  async generateOrchestrationReport() {
    this.log('📊 Generating orchestration report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      automationStatus: Object.fromEntries(this.automationStatus),
      summary: {
        totalAutomations: this.automationStatus.size,
        successful: Array.from(this.automationStatus.values()).filter(s => s.success).length,
        failed: Array.from(this.automationStatus.values()).filter(s => !s.success).length,
        running: Array.from(this.automationStatus.values()).filter(s => s.status === 'running').length
      },
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    this.log(`📊 Orchestration report generated: ${this.logFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check for failed automations
    for (const [name, status] of this.automationStatus) {
      if (status.status === 'failed') {
        recommendations.push(`Investigate and fix ${name} automation failures`);
      }
    }
    
    // Check for automations that haven't run recently
    const now = Date.now();
    for (const [name, status] of this.automationStatus) {
      if (status.lastRun && (now - status.lastRun) > 24 * 60 * 60 * 1000) { // 24 hours
        recommendations.push(`${name} hasn't run in over 24 hours - check PM2 configuration`);
      }
    }
    
    // General recommendations
    if (recommendations.length === 0) {
      recommendations.push('All automation systems are running smoothly');
      recommendations.push('Consider adding more automation scripts for comprehensive coverage');
    }
    
    return recommendations;
  }

  async startPM2Automation() {
    this.log('🚀 Starting PM2 automation ecosystem...');
    
    try {
      // Start the main automation processes
      const ecosystemFile = path.join(this.projectRoot, 'ecosystem.config.cjs');
      
      if (fs.existsSync(ecosystemFile)) {
        execSync('pm2 start ecosystem.config.cjs', { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 60000 
        });
        this.log('✅ PM2 automation ecosystem started');
      } else {
        this.log('⚠️  ecosystem.config.cjs not found - cannot start PM2 automation');
      }
      
    } catch (error) {
      this.log(`❌ Error starting PM2 automation: ${error.message}`);
    }
  }

  async stopPM2Automation() {
    this.log('🛑 Stopping PM2 automation ecosystem...');
    
    try {
      execSync('pm2 stop all', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log('✅ PM2 automation ecosystem stopped');
      
    } catch (error) {
      this.log(`❌ Error stopping PM2 automation: ${error.message}`);
    }
  }

  async restartPM2Automation() {
    this.log('🔄 Restarting PM2 automation ecosystem...');
    
    try {
      execSync('pm2 restart all', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('✅ PM2 automation ecosystem restarted');
      
    } catch (error) {
      this.log(`❌ Error restarting PM2 automation: ${error.message}`);
    }
  }
}

// Run the orchestrator
if (require.main === module) {
  const orchestrator = new PM2ErrorAutomationOrchestrator();
  
  // Check command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('start')) {
    orchestrator.startPM2Automation();
  } else if (args.includes('stop')) {
    orchestrator.stopPM2Automation();
  } else if (args.includes('restart')) {
    orchestrator.restartPM2Automation();
  } else {
    orchestrator.run().catch(console.error);
  }
}

module.exports = PM2ErrorAutomationOrchestrator;