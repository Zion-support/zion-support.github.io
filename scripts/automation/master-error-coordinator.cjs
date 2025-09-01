#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterErrorCoordinator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.startTime = Date.now();
    this.coordinationResults = [];
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [MasterErrorCoordinator] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'master-coordinator.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async runAutomation(scriptName, description) {
    this.log(`Running ${description}...`);
    
    try {
      const result = await this.runCommand(`node scripts/automation/${scriptName}`, { silent: true });
      
      const coordinationResult = {
        automation: scriptName,
        description,
        success: result.success,
        timestamp: new Date().toISOString(),
        output: result.output.substring(0, 500) // Truncate long outputs
      };
      
      this.coordinationResults.push(coordinationResult);
      
      if (result.success) {
        this.log(`${description} completed successfully`);
      } else {
        this.log(`${description} completed with errors: ${result.output.substring(0, 200)}`, 'WARN');
      }
      
      return coordinationResult;
    } catch (error) {
      this.log(`Error running ${description}: ${error.message}`, 'ERROR');
      return {
        automation: scriptName,
        description,
        success: false,
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async coordinateErrorFixing() {
    this.log('Starting Master Error Coordination...');
    
    // Define automation sequence with priorities
    const automations = [
      { script: 'enhanced-error-fixing-automation.cjs', description: 'Enhanced Error Fixing Automation' },
      { script: 'merge-conflict-resolver.cjs', description: 'Merge Conflict Resolver' },
      { script: 'file-extension-fixer.cjs', description: 'File Extension Fixer' },
      { script: 'import-error-fixer.cjs', description: 'Import Error Fixer' },
      { script: 'typescript-error-fixer.cjs', description: 'TypeScript Error Fixer' },
      { script: 'eslint-error-cleaner.cjs', description: 'ESLint Error Cleaner' },
      { script: 'jsx-error-fixer.cjs', description: 'JSX Error Fixer' }
    ];
    
    // Run automations in sequence
    for (const automation of automations) {
      await this.runAutomation(automation.script, automation.description);
      
      // Small delay between automations to prevent resource conflicts
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  async runHealthChecks() {
    this.log('Running health checks...');
    
    const healthChecks = [
      { command: 'npm run type-check', description: 'TypeScript Type Check' },
      { command: 'npm run lint', description: 'ESLint Check' },
      { command: 'npm run build', description: 'Build Check' }
    ];
    
    for (const check of healthChecks) {
      this.log(`Running ${check.description}...`);
      
      try {
        const result = await this.runCommand(check.command, { silent: true });
        
        const healthResult = {
          check: check.description,
          success: result.success,
          timestamp: new Date().toISOString(),
          output: result.output.substring(0, 300)
        };
        
        this.coordinationResults.push(healthResult);
        
        if (result.success) {
          this.log(`${check.description} passed`);
        } else {
          this.log(`${check.description} failed: ${result.output.substring(0, 200)}`, 'WARN');
        }
      } catch (error) {
        this.log(`Error running ${check.description}: ${error.message}`, 'ERROR');
      }
    }
  }

  async generateCoordinationReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const successfulAutomations = this.coordinationResults.filter(r => r.success).length;
    const totalAutomations = this.coordinationResults.length;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      coordinationResults: this.coordinationResults,
      summary: {
        totalAutomations,
        successfulAutomations,
        failedAutomations: totalAutomations - successfulAutomations,
        successRate: totalAutomations > 0 ? (successfulAutomations / totalAutomations * 100).toFixed(2) + '%' : '0%',
        overallSuccess: successfulAutomations === totalAutomations
      }
    };
    
    const reportFile = path.join(this.reportsDir, `master-coordination-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Coordination report generated: ${reportFile}`);
    this.log(`Success rate: ${report.summary.successRate} (${successfulAutomations}/${totalAutomations})`);
    
    return report;
  }

  async sendNotifications(report) {
    this.log('Sending coordination notifications...');
    
    // Create a summary notification
    const notification = {
      timestamp: new Date().toISOString(),
      type: 'master_coordination',
      summary: report.summary,
      details: report.coordinationResults.map(r => ({
        automation: r.automation || r.check,
        success: r.success,
        timestamp: r.timestamp
      }))
    };
    
    // Write notification to file
    const notificationFile = path.join(this.logsDir, 'coordination-notifications.json');
    const notifications = fs.existsSync(notificationFile) 
      ? JSON.parse(fs.readFileSync(notificationFile, 'utf8')) 
      : [];
    
    notifications.push(notification);
    fs.writeFileSync(notificationFile, JSON.stringify(notifications, null, 2));
    
    this.log('Coordination notifications sent');
  }

  async run() {
    this.log('Starting Master Error Coordinator...');
    
    try {
      // Run error fixing coordination
      await this.coordinateErrorFixing();
      
      // Run health checks
      await this.runHealthChecks();
      
      // Generate and send reports
      const report = await this.generateCoordinationReport();
      await this.sendNotifications(report);
      
      this.log('Master Error Coordinator completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Error in master coordinator: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const coordinator = new MasterErrorCoordinator();
  coordinator.run()
    .then(report => {
      console.log('Master Error Coordinator completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Master Error Coordinator failed:', error);
      process.exit(1);
    });
}

module.exports = MasterErrorCoordinator;