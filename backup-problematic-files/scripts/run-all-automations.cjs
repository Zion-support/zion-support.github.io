<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
const logMessage = `[${timestamp}] ${message}\n`;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const logMessage = `[${timestamp}] ${message}\n`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, options = {}) {
    try {
<<<<<<< HEAD
      const { stdout, stderr } = await execAsync(command, {
        cwd: process.cwd(),
        timeout: 120000,
        ...options
=======
      const { stdout, stderr } = await execAsync(command, { 
        cwd: process.cwd(), 
        timeout: 120000, 
        ...options 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
<<<<<<< HEAD
      return {
        success: false,
        stdout: error.stdout || "",
        stderr: error.stderr || error.message
=======
      return { 
        success: false, 
        stdout: error.stdout || "", 
        stderr: error.stderr || error.message 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
    }
  }

  async runAutomation(scriptName, command) {
    this.log(`Running: ${scriptName}`);
    const result = await this.runCommand(command);
    
    if (result.success) {
      this.results.success.push({ script: scriptName, output: result.stdout });
      this.log(`✅ ${scriptName} completed successfully`);
    } else {
      this.results.failed.push({ script: scriptName, error: result.stderr });
      this.log(`❌ ${scriptName} failed: ${result.stderr}`);
    }
    
    return result;
  }

  async runAll() {
    this.log('🚀 Starting comprehensive automation run...');
    
    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Define all automation scripts to run
    const automations = [
      { name: 'Install Dependencies', command: 'npm install' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Lint Fix', command: 'npm run lint:fix' },
      { name: 'Build Application', command: 'npm run build' },
      { name: 'Test Smoke', command: 'npm run test:smoke' },
      { name: 'Security Audit', command: 'npm run security:audit' },
      { name: 'Performance Monitor', command: 'npm run perf:monitor' },
      { name: 'SEO Optimizer', command: 'npm run automation:seo' },
      { name: 'Health Check', command: 'npm run automation:health' },
      { name: 'Quick Improvements', command: 'node scripts/quick-app-improvements.cjs' },
      { name: 'Performance Improver', command: 'node scripts/performance-improver.cjs' },
      { name: 'Security Improver', command: 'node scripts/security-improver.cjs' },
      { name: 'Git Status', command: 'git status' },
      { name: 'Git Add', command: 'git add .' },
      { name: 'Git Commit', command: 'git commit -m "Automated improvements and fixes"' },
      { name: 'Git Push', command: 'git push origin main' }
    ];

    // Run each automation
    for (const automation of automations) {
      await this.runAutomation(automation.name, automation.command);
    }

    // Generate comprehensive report
    this.generateReport();
    
    this.log('🎉 Comprehensive automation run completed');
    this.log(`✅ Successful: ${this.results.success.length}`);
    this.log(`❌ Failed: ${this.results.failed.length}`);
    this.log(`⚠️ Warnings: ${this.results.warnings.length}`);

    return this.results;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.success.length + this.results.failed.length,
        successful: this.results.success.length,
        failed: this.results.failed.length,
        warnings: this.results.warnings.length
      },
      details: {
        successful: this.results.success,
        failed: this.results.failed,
        warnings: this.results.warnings
      }
    };

    const reportFile = path.join(__dirname, '..', 'automation', 'logs', 'comprehensive-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to ${reportFile}`);
    return report;
  }
}

// Handle command line arguments
if (require.main === module) {
  const runner = new RunAllAutomations();
  const command = process.argv[2];

  switch (command) {
    case "run":
      runner.runAll().catch(error => {
        console.error("Automation run failed: ", error);
        process.exit(1);
      });
      break;
    case "report":
      runner.generateReport();
      break;
    default:
      console.log("Usage: node run-all-automations.cjs [run|report]");
      process.exit(1);
  }
}

module.exports = RunAllAutomations;

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'all-automations-reports')
        "encoding"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "name"
        "script"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "message"
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
        "impact"
        "impact"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
