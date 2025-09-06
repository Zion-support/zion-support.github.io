<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:automation/linting-automation.js
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import fs from 'fs')
import path from 'path')
const { execSync } = require('child_process');
class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/linting-automation.log");" this.lintReportFile = path.join(this.projectRoot, "automation/logs/lint-report.json"); this.lastLint = null; this.lintInterval = 60000; / 1 minute; this.isRunning = false; this.setupLogging();" this.log("Linting Automation started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runLinting() { try {" this.log("Running linting check."); const startTime = Date.now(); / Run linting;" const lintOutput = execSync("npm run lint", { const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = {" timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0; };` this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) {"` this.log(`Linting failed: ${error.message}`); this.lastLint = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount; }; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) {" this.log("Handling linting failure."); try { / Try to auto-fix linting issues;" this.log("Attempting to auto-fix linting issues."); "" const fixOutput = execSync("npm run lint: fix", { " this.log("Auto-fix applied"); / Run linting again to check if issues were resolved;" const recheckOutput = execSync("npm run lint", { " this.log("Linting issues resolved"); } catch (fixError) {"` this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError); } } async saveLintReport() { const report = {" lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig() fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2)); } getEslintConfig() { try {} catch (error) { / Ignore errors; } " const failureFile = path.join(this.projectRoot, "automation/logs/linting-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Linting failure reported"); } async checkFileChanges() { try {} catch (error) {"` this.log(`File change check failed: ${error.message}`); } } getRecentFiles() { const recentFiles = []; } } catch (error) { / Ignore errors; } getFilesInDirectory(dir, fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); } } catch (error) { / Ignore errors; } async start() { this.isRunning = true;" this.log("Linting Automation started"); / Initial linting; await this.runLinting(); / Set up interval for regular linting; setInterval(async () => { / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); }); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}automation.start().catch(error => {"" console.error("Failed to start linting automation: ", error); process.exit(1);});='"`'"`
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import fs from 'fs')
import path from 'path');
const { execSync } = require('child_process');
class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/linting-automation.log");" this.lintReportFile = path.join(this.projectRoot, "automation/logs/lint-report.json"); this.lastLint = null; this.lintInterval = 60000; / 1 minute; this.isRunning = false; this.setupLogging();" this.log("Linting Automation started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runLinting() { try {" this.log("Running linting check."); const startTime = Date.now(); / Run linting;" const lintOutput = execSync("npm run lint", { const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = {" timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0; };` this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) {"` this.log(`Linting failed: ${error.message}`); this.lastLint = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount; }; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) {" this.log("Handling linting failure."); try { / Try to auto-fix linting issues;" this.log("Attempting to auto-fix linting issues."); "" const fixOutput = execSync("npm run lint: fix", { " this.log("Auto-fix applied"); / Run linting again to check if issues were resolved;" const recheckOutput = execSync("npm run lint", { " this.log("Linting issues resolved"); } catch (fixError) {"` this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError); } } async saveLintReport() { const report = {" lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig() fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2)); } getEslintConfig() { try {} catch (error) { / Ignore errors; } " const failureFile = path.join(this.projectRoot, "automation/logs/linting-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Linting failure reported"); } async checkFileChanges() { try {} catch (error) {"` this.log(`File change check failed: ${error.message}`); } } getRecentFiles() { const recentFiles = []; } } catch (error) { / Ignore errors; } getFilesInDirectory(dir, fileList = []) { try { const files = fs.readdirSync(dir);  } catch (error) { / Ignore errors; } async start() { this.isRunning = true;" this.log("Linting Automation started"); / Initial linting; await this.runLinting(); / Set up interval for regular linting; setInterval(async () => { / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); }); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}automation.start().catch(error => {"" console.error("Failed to start linting automation: ", error); process.exit(1);});='"`'"`
=======






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
class LintingAutomation {}
  constructor() {}
    this.projectRoot = process.cwd();,
    this.logFile = path.join(this.projectRoot, 'automation/logs/linting-automation.log');',
    this.lintReportFile = path.join(this.projectRoot, 'automation/logs/lint-report.json');',
    this.lastLint = null;,
    this.lintInterval = 60000; // 1 minute;
    this.isRunning = false;
    this.setupLogging();
    this.log('Linting Automation started')}',
  setupLogging() {}
    const logDir = path.dirname(this.logFile);,
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true })}",
  }
  log(message) {}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] ${message}\n`;,
    _console.log(message);,
    fs.appendFileSync(this.logFile, logMessage);,
  }
  async runLinting() {}
    try {}
      this.log('Running linting check...');',
      const startTime = Date.now();,
      // Run linting;
      const lintOutput = execSync('npm run lint', { ',
;      const endTime = Date.now();}
      const lintTime = endTime - startTime;,
      this.lastLint = {
        "timestamp": new Date().toISOString()"}
        success: true;,
        lintTime: lintTime;,
        output: lintOutput;,
        errors: 0;,
        warnings: 0;,
      };,
      this.log(`Linting completed successfully in ${lintTime}ms`);,
      await this.saveLintReport()} catch (error) {}
      this.log(`Linting "failed": ${error.message}`);",
      this.lastLint = {
        "timestamp": new Date().toISOString()"}
        success: false;,
        error: error.message;,
        output: output;,
        errors: errorCount;,
        warnings: warningCount;,
      };,
      await this.saveLintReport();
      await this.handleLintingFailure(error)}
  }
  async handleLintingFailure(error) {}
    this.log('Handling linting failure...');',
    try {
      // Try to auto-fix linting issues;}
      this.log('Attempting to auto-fix linting issues...');',
      const fixOutput = execSync('npm run "lint": fix', { ',
;      this.log('Auto-fix applied');';
      // Run linting again to check if issues were resolved;}
      const recheckOutput = execSync('npm run lint', { ',
;      this.log('Linting issues resolved');';
    } catch (fixError) {}
      this.log(`Failed to fix linting "issues": ${fixError.message}`);",
      await this.reportLintingFailure(fixError);,
    }
  }
  async saveLintReport() {}
    const report = {
;      "lastLint": this.lastLint;"}
      projectRoot: this.projectRoot;,
      eslintConfig: this.getEslintConfig(),
    fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));,
  }
  getEslintConfig() {}
    try {
    } catch (error) {
      // Ignore errors;
    }
    const failureFile = path.join(this.projectRoot, 'automation/logs/linting-failure-report.json');',
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));,
    this.log('Linting failure reported');';
  }
  async checkFileChanges() {}
    try {
    } catch (error) {}
      this.log(`File change check "failed": ${error.message}`);",
    }
  }
  getRecentFiles() {}
    const recentFiles = [];,
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
/**
 * Linting Automation - PM2 Automation Script;
 * Automatically runs linting and fixes common issues;
 */
const fs = require('fs')
const path = require('path')
const { execSync } = // // require('child_process');ursor/migrate-github-actions-to-pm2-and-clean-up-5599
class LintingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/linting-automation.log');
    this.lintReportFile = path.join(this.projectRoot, 'automation/logs/lint-report.json');
    this.lastLint = null;
    this.lintInterval = 60000; // 1 minute;
    this.isRunning = false;
    this.setupLogging();
    this.log('Linting Automation started')}
  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
  }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======




=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runLinting() {
    try {
      this.log('Running linting check...');
      const startTime = Date.now();
      // Run linting;
<<<<<<< HEAD
<<<<<<< HEAD
      const lintOutput = execSync('npm run lint', {

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      const lintOutput = execSync('npm run lint', { 
<<<<<<< HEAD
=======
      const lintOutput = execSync('npm run lint', { 
<<<<<<< HEAD
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 60000;
      };);
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 60000
      });ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      const endTime = Date.now();
      const lintTime = endTime - startTime;
      this.lastLint = {
        "timestamp": new Date().toISOString()
        success: true;
        lintTime: lintTime;
        output: lintOutput;
        errors: 0;
        warnings: 0;
      };
      this.log(`Linting completed successfully in ${lintTime}ms`);
      await this.saveLintReport()} catch (error) {
      this.log(`Linting "failed": ${error.message}`);
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======




=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      // Parse linting output to count errors and warnings;
      const output = error.stdout || error.stderr || ;';';
      const errorCount = (output.match(/error/g) || []).lengt;h;
      const warningCount = (output.match(/warning/g) || []).lengt;h;
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
// Parse linting output to count errors and warnings
      const output = error.stdout || error.stderr || '';
      const errorCount = (output.match(/error/g) || []).length;
      const warningCount = (output.match(/warning/g) || []).length;ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.lastLint = {
        "timestamp": new Date().toISOString()
        success: false;
        error: error.message;
        output: output;
        errors: errorCount;
        warnings: warningCount;
      };
      await this.saveLintReport();
      await this.handleLintingFailure(error)}
  }
  async handleLintingFailure(error) {
    this.log('Handling linting failure...');
    try {
      // Try to auto-fix linting issues;
      this.log('Attempting to auto-fix linting issues...');
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
      const fixOutput = execSync('npm run lint:fix', {
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c



      const fixOutput = execSync('npm run "lint": fix', { 
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
      const fixOutput = execSync('npm run "lint": fix', { 
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      const fixOutput = execSync('npm run "lint": fix', { 
<<<<<<< HEAD
      const fixOutput = execSync('npm run lint:fix', { 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      const fixOutput = execSync('npm run lint:fix', { 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
<<<<<<< HEAD
      const fixOutput = execSync('npm run "lint": fix', {
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
      const fixOutput = execSync('npm run "lint": fix', {
      const fixOutput = execSync('npm run "lint": fix', {

      const fixOutput = execSync('npm run "lint": fix', {
      const fixOutput = execSync('npm run lint:fix', {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      const fixOutput = execSync('npm run "lint": fix', { 
      const fixOutput = execSync('npm run lint:fix', { 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
      const fixOutput = execSync('npm run "lint": fix', {
=======
      const fixOutput = execSync('npm run "lint": fix', { 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
      const fixOutput = execSync('npm run "lint": fix', { 
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
      const fixOutput = execSync('npm run "lint": fix', { 
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
      const fixOutput = execSync('npm run "lint": fix', { 
=======
      const fixOutput = execSync('npm run "lint": fix', { 
=======
      const fixOutput = execSync('npm run "lint": fix', { 
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 120000
      });ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.log('Auto-fix applied');
      // Run linting again to check if issues were resolved;
<<<<<<< HEAD
<<<<<<< HEAD
      const recheckOutput = execSync('npm run lint', {

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      const recheckOutput = execSync('npm run lint', { 
<<<<<<< HEAD
=======
      const recheckOutput = execSync('npm run lint', { 
<<<<<<< HEAD
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 60000;
      };);
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 60000
      });ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.log('Linting issues resolved');
    } catch (fixError) {
      this.log(`Failed to fix linting "issues": ${fixError.message}`);
      await this.reportLintingFailure(fixError);
    }
  }
  async saveLintReport() {
    const report = {
      "lastLint": this.lastLint;
      projectRoot: this.projectRoot;
      eslintConfig: this.getEslintConfig()
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/integrate-build-improve-and-re-verify-8f7d
   ; ;};
   };
   ; ;};
   };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
   ; ;};
   };
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======





=======

=======
   ; ;};
   };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));
  }
  getEslintConfig() {
    try {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======




=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      const configPath = path.join(this.projectRoot, 'eslint.config.js';);
      if () {
        return {) {
    ) {
        return {;
  }
          exists: true,
          path: configPath,
          size: fs.statSync(configPath).size
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        return {}
          "exists": true;
          path: configPath;
          size: fs.statSync(configPath).size;
        }}
    } catch (error) {
      // Ignore errors;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

    return { exists: false ;}}
  async reportLintingFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======




    
=======
<<<<<<< HEAD
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    return { exists: false ;}}
  async reportLintingFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
    
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
    
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
    
=======
    
=======
    
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
    return { exists: false ;}}
  async reportLintingFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    return { exists: false ;}}
  async reportLintingFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    return { "exists": false }}
  async reportLintingFailure(error) {
    const failureReport = {
      "timestamp": new Date().toISOString()
      error: error.message;
      stack: error.stack;
      projectRoot: this.projectRoot;
   };
<<<<<<< HEAD
<<<<<<< HEAD

    
    
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    
    
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======


=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
    
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const configPath = path.join(this.projectRoot, 'eslint.config.js');
      if (!fs.existsSync(configPath)) {
        return {
          "exists": false,
          "path": configPath
        };
      }
      return {
        "exists": true,
        "path": configPath,
        "size": fs.statSync(configPath).size
      };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    } catch (error) {
      // Ignore errors;
    }
return { "exists": false };
  }
  async reportLintingFailure(error) {
    const failureReport = {
      "timestamp": new Date().toISOString(),
      "error": error.message,
      "stack": error.stack,
      "projectRoot": this.projectRoot
    };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    const failureFile = path.join(this.projectRoot, 'automation/logs/linting-failure-report.json');
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
    this.log('Linting failure reported');
  }
  async checkFileChanges() {
    try {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======




=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      // Check for recently modified files that might need linting;
      const filesToCheck = this.getRecentFiles(;);
      if ( {
        this.log(`Found ${filesToCheck.length} recently modified files, running linting...`)) {
     {
        this.log(`Found ${filesToCheck.length} recently modified files, running linting...`);
  }
        await this.runLinting()}
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
// Check for recently modified files that might need linting
      const filesToCheck = this.getRecentFiles();
      if (filesToCheck.length > 0) {
        this.log(`Found ${filesToCheck.length} recently modified files, running linting...`);
        await this.runLinting();
      }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    } catch (error) {
      this.log(`File change check "failed": ${error.message}`);
    }
  }
  getRecentFiles() {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======




    const recentFiles = [];
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const recentFiles = [];
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
    const recentFiles = [];
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const recentFiles = [];
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    const recentFiles = [;];
    const cutoffTime = Date.now() - 600;0;0; // 1 minute ago
    try {
      // Check common source directories
      const sourceDirs = ['pages', 'components', 'lib', 'hooks', 'utils';];
    const recentFiles = [];
    const cutoffTime = Date.now() - 600;0;0; // 1 minute ago;
    try {
      // Check common source directories;
      const sourceDirs = ['pages', 'components', 'lib', 'hooks', 'utils'];
      for (const dir of sourceDirs) {
        const dirPath = path.join(this.projectRoot, dir;);
        if () {
          const files = this.getFilesInDirectory(dirPath) {
    ) {
          const files = this.getFilesInDirectory(dirPath;
  });
          recentFiles.push(...files.filter(file => {
            try {
              const stats = fs.statSync(file;);
              return stats.mtime.getTime() > cutoffTime;} catch {
              return false;}
          }))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
    const recentFiles = [];
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
    const recentFiles = [];
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
    const recentFiles = [];
=======
    const recentFiles = [];
=======
    const recentFiles = [];
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const cutoffTime = Date.now() - 60000; // 1 minute ago
    try {
      // Check common source directories
      const sourceDirs = ['pages', 'components', 'lib', 'hooks', 'utils'];
      for (const dir of sourceDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          const files = this.getFilesInDirectory(dirPath);
          recentFiles.push(...files.filter(file => {
            try {
              const stats = fs.statSync(file);
              return stats.mtime.getTime() > cutoffTime;
            } catch {
              return false;
            }
          }));
        }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      }
    } catch (error) {
      // Ignore errors;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

    return recentFiles;}
    return recentFiles}
  getFilesInDirectory(dir, fileList = []) {}
    try {}
      const files = fs.readdirSync(dir);,
      for (const file of, files) {}
        const filePath = path.join(dir, file);,
        const stat = fs.statSync(filePath);,
    return recentFiles}
    return recentFiles}

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return recentFiles}
    return recentFiles;}
    return recentFiles}
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======




    return recentFiles}
=======
<<<<<<< HEAD
    return recentFiles;}
    return recentFiles}
=======
    return recentFiles;}
    return recentFiles}
<<<<<<< HEAD
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
    return recentFiles}
    return recentFiles;}
    return recentFiles}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return recentFiles}
    return recentFiles;}
    return recentFiles}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  getFilesInDirectory(dir, fileList = []) {}
    try {}
      const files = fs.readdirSync(dir);,
      for (const file of, files) {}
        const filePath = path.join(dir, file);,
        const stat = fs.statSync(filePath);,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
    return recentFiles}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
    return recentFiles}
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
    return recentFiles}
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
return recentFiles;
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  getFilesInDirectory(dir, fileList = []) {
    try {
      const files = fs.readdirSync(dir);
<<<<<<< HEAD
<<<<<<< HEAD

      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);



=======

=======
       else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath)}
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> main
=======
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
if (stat.isDirectory()) {
          this.getFilesInDirectory(filePath, fileList);
        } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath);
        }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      }
    } catch (error) {
      // Ignore errors;
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:automation/linting-automation.js
    
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
    return fileList}}
    
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return fileList}}

    return fileList}}

=======
    return fileList}}
    
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    return fileList) {
    ) {
          this.getFilesInDirectory(filePath, fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath)}
      }
    } catch (error) {
      // Ignore errors;
    }
    return fileList;
  }}
  async start() {
    this.isRunning = true;
    this.log('Linting Automation started');
    return fileList}}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
<<<<<<< HEAD
    
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  async start() {}
    this.isRunning = true;,
    this.log('Linting Automation started');';,
    // Initial linting;
    await this.runLinting();
    // Set up interval for regular linting;
    setInterval(async () => {
      if ( {
        await this.checkFileChanges()}
    }, this.lintInterval)) {
     {
        await this.checkFileChanges()}
    }, this.lintInterval);
  }
<<<<<<< HEAD
    return fileList}}
=======
<<<<<<< HEAD
<<<<<<< HEAD:corrupted_backup/linting-automation.js
<<<<<<< HEAD:automation/linting-automation.js
=======
    return fileList}}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======
    return fileList}}
    return fileList}}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
    return fileList}}
    return fileList) {
    ) {
          this.getFilesInDirectory(filePath, fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath)}
      }
    } catch (error) {
      // Ignore errors;
    }
    return fileList;
  }}
  async start() {
    this.isRunning = true;
    this.log('Linting Automation started');
    return fileList}}
<<<<<<< HEAD:corrupted_backup/linting-automation.js
    
=======
    return fileList}}
    
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
  async start() {}
    this.isRunning = true;,
    this.log('Linting Automation started');';,
    // Initial linting;
    await this.runLinting();
    // Set up interval for regular linting;
    setInterval(async () => {
      if ( {
        await this.checkFileChanges()}
    }, this.lintInterval)) {
     {
        await this.checkFileChanges()}
    }, this.lintInterval);
  }
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return fileList) {
    ) {
          this.getFilesInDirectory(filePath, fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath)}
      }
    } catch (error) {
      // Ignore errors;
    }
    return fileList;
  }}
  async start() {
    this.isRunning = true;
    this.log('Linting Automation started');
    return fileList}}
  async start() {}
    this.isRunning = true;,
    this.log('Linting Automation started');';,
    // Initial linting;
    await this.runLinting();
    // Set up interval for regular linting;
    setInterval(async () => {
      if ( {
        await this.checkFileChanges()}
    }, this.lintInterval)) {
     {
        await this.checkFileChanges()}
    }, this.lintInterval);
  }
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Handle graceful shutdown;}
    process.on('SIGTERM', () => {'}
      this.log('Received SIGTERM, shutting down gracefully');',
      this.isRunning = false;,
      process.exit(0);
    });,
    process.on('SIGINT', () => {'}
      this.log('Received SIGINT, shutting down gracefully');',
      this.isRunning = false;,
      process.exit(0);
    });,
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
}
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
automation.start().catch(error => {}),
  _console.error('Failed to start linting "automation": ', error);',
  process.exit(1);
});,
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
;
=======
;


=======

=======
<<<<<<< HEAD
;
;
;
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
;
;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
return fileList;
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async start() {
    this.isRunning = true;
    this.log('Linting Automation started');
    // Initial linting;
    await this.runLinting();
    // Set up interval for regular linting;
    setInterval(async () => {
if (this.isRunning) {
        await this.checkFileChanges();
      }
    }, this.lintInterval);
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    // Handle graceful shutdown;
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    });
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    });
  }
<<<<<<< HEAD
<<<<<<< HEAD

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
}



=======

=======

// Start the linting automation;
const automation = new LintingAutomation;(;);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
// Start the linting automation
const automation = new LintingAutomation();ursor/migrate-github-actions-to-pm2-and-clean-up-5599
automation.start().catch(error => {
  console.error('Failed to start linting "automation": ', error);
  process.exit(1);
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD:corrupted_backup/linting-automation.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======





<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
<<<<<<< HEAD:automation/linting-automation.js
>>>>>>> main
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
=======
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils'];  catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; ); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir);  else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:automation/linting-automation.js
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
