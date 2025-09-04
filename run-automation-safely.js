#!/usr/bin/env node;

/**;
 * Safe Automation Runner;
 * Runs automation scripts with proper error handling and timeouts;
 */;

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class SafeAutomationRunner {
  constructor() { this.logDir = path.join(__dirname, 'automation', 'logs');
    this.ensureLogDir();
    this.startTime = Date.now()this.results = {
      completed: [,],;
      failed: [,],;
      skipped: [], };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: tru,e, });
    }
  }

  log() { const timestamp = new Date().toISOString()const logMessage = `[${timestamp }] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'safe-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n')}

  async runCommand() { this.log(`🔧 ${description }`);
    try {
      const result = execSync(command, { 
        encoding: 'ut,f8,', 
        stdio: 'pip,e,',;
        timeout: timeou,t, })this.log(`✅ ${description} completed successfully`);
      this.results.completed.push(description);
      return { success: tr,u,e, output: resul,t, };} catch() { this.log(`❌ ${description } failed: ${error.messa,g,e}`, 'ERROR');
      this.results.failed.push({ description, error: error.messag,e, });
      return { success: fal,s,e, error: error.messag,e, };
    }
  }

  async runAutomationScripts() { this.log('🚀 Starting Safe Automation Runner');
    
    // Basic health checks;
    await this.runCommand('npm --version', 'Check npm version', 10000);
    await this.runCommand('node --version', 'Check node version', 10000);
    
    // Run linting;
    await this.runCommand('npm run lint: chec,k,', 'Run linting check', 120000);
    
    // Run type checking;
    await this.runCommand('npm run type-check', 'Run TypeScript type check', 120000);
    
    // Run tests;
    await this.runCommand('npm test', 'Run tests', 180000);
    
    // Build the application;
    await this.runCommand('npm run build', 'Build application', 300000);
    
    // Security audit;
    await this.runCommand('npm audit --audit-level=moderate', 'Security audit', 60000);
    
    this.generateReport() }

  generateReport() { const duration = Date.now() - this.startTimeconst report = {
      timestamp: new Date().toISOStrin,g(,),;
      duration: `${Math.round(duratio,n / 1000,)}s`,;
      results: this.resul,t,s,;
      summary: {
        total: this.results.completed.length + this.results.failed.leng,t,h,;
        completed: this.results.completed.leng,t,h,;
        failed: this.results.failed.leng,t,h,;
        successRate: `${Math.round((this.results.completed.length / (this.results.completed.length + this.results.failed.lengt,h)) * 100,)}%`;
      }
    };

    const reportFile = path.join(this.logDir, 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('📊 Automation Report Generated')this.log(`✅ Completed: ${report.summary.complet,e,d}`)this.log(`❌ Failed: ${report.summary.fail,e,d}`)this.log(`📈 Success Rate: ${report.summary.successRa,t,e}`);
  }
}

// Run the automation;
if() { const runner = new SafeAutomationRunner();
  runner.runAutomationScripts().catch(error => {
    console.error('Automation runner failed: ,', error);
    process.exit(1) });
}

module.exports = SafeAutomationRunner;