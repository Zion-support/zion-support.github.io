>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
import fs from 'fs')
import path from 'path')
const { execSync } = require('child_process');
class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, "automation/logs/linting-automation.log");" this.lintReportFile = path.join(this.projectRoot, "automation/logs/lint-report.json"); this.lastLint = null; this.lintInterval = 60000; / 1 minute; this.isRunning = false; this.setupLogging();" this.log("Linting Automation started")} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile, logMessage); } async runLinting() { try {" this.log("Running linting check."); const startTime = Date.now(); / Run linting;" const lintOutput = execSync("npm run lint", { const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = {" timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0; };` this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) {"` this.log(`Linting failed: ${error.message}`); this.lastLint = {" timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount; }; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) {" this.log("Handling linting failure."); try { / Try to auto-fix linting issues;" this.log("Attempting to auto-fix linting issues."); "" const fixOutput = execSync("npm run lint: fix", { " this.log("Auto-fix applied"); / Run linting again to check if issues were resolved;" const recheckOutput = execSync("npm run lint", { " this.log("Linting issues resolved"); } catch (fixError) {"` this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError); } } async saveLintReport() { const report = {" lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig() fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2)); } getEslintConfig() { try {} catch (error) { / Ignore errors; } " const failureFile = path.join(this.projectRoot, "automation/logs/linting-failure-report.json"); fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2)); " this.log("Linting failure reported"); } async checkFileChanges() { try {} catch (error) {"` this.log(`File change check failed: ${error.message}`); } } getRecentFiles() { const recentFiles = []; } } catch (error) { / Ignore errors; } getFilesInDirectory(dir, fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); } } catch (error) { / Ignore errors; } async start() { this.isRunning = true;" this.log("Linting Automation started"); / Initial linting; await this.runLinting(); / Set up interval for regular linting; setInterval(async () => { / Handle graceful shutdown;" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); }); " process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}automation.start().catch(error => {"" console.error("Failed to start linting automation: ", error); process.exit(1);});='"`'"`
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
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    );
    fs.appendFileSync(this.logFile, logMessage)}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  async runLinting() {
    try {
      this.log('Running linting check...');
      const startTime = Date.now();
      // Run linting;
      const lintOutput = execSync('npm run lint', { 
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 60000;
      };);
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
      // Parse linting output to count errors and warnings;
      const output = error.stdout || error.stderr || ;';';
      const errorCount = (output.match(/error/g) || []).lengt;h;
      const warningCount = (output.match(/warning/g) || []).lengt;h;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
      const fixOutput = execSync('npm run lint:fix', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      ;};);
      const fixOutput = execSync('npm run "lint": fix', { 
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 120000;
      };);
      const fixOutput = execSync('npm run "lint": fix', { 



      const fixOutput = execSync('npm run "lint": fix', { 
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
      const fixOutput = execSync('npm run "lint": fix', { 

      const fixOutput = execSync('npm run "lint": fix', { 







"cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 120000
      });ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      this.log('Auto-fix applied');
      // Run linting again to check if issues were resolved;
      const recheckOutput = execSync('npm run lint', { 
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      ;};);
        "cwd": this.projectRoot;
        encoding: 'utf8'
        timeout: 60000;
      };);
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
   ; ;};
   };
>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
};ursor/migrate-github-actions-to-pm2-and-clean-up-5599
    fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));
  }
  getEslintConfig() {
    try {
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
      const configPath = path.join(this.projectRoot, 'eslint.config.js';);
      if () {
        return {) {
    ) {
        return {;
  }
          exists: true,
          path: configPath,
          size: fs.statSync(configPath).size
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
        return {}
          "exists": true;
          path: configPath;
          size: fs.statSync(configPath).size;
        }}
    } catch (error) {
      // Ignore errors;
    }
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
    return { exists: false ;}}
  async reportLintingFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
    



    
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
    

    


    return { exists: false ;}}
  async reportLintingFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};





    return { "exists": false }}
  async reportLintingFailure(error) {
    const failureReport = {
      "timestamp": new Date().toISOString()
      error: error.message;
      stack: error.stack;
      projectRoot: this.projectRoot;
   };
>>>>>>> main
    
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
      // Check for recently modified files that might need linting;
      const filesToCheck = this.getRecentFiles(;);
      if ( {
        this.log(`Found ${filesToCheck.length} recently modified files, running linting...`)) {
     {
        this.log(`Found ${filesToCheck.length} recently modified files, running linting...`);
  }
        await this.runLinting()}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
    const recentFiles = [];



    const recentFiles = [];
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
    const recentFiles = [];

    const recentFiles = [];







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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
  getFilesInDirectory(dir, fileList = []) {}
    try {}
      const files = fs.readdirSync(dir);,
      for (const file of, files) {}
        const filePath = path.join(dir, file);,
        const stat = fs.statSync(filePath);,
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
    return recentFiles}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    return recentFiles}
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
    return recentFiles}







return recentFiles;
  }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  getFilesInDirectory(dir, fileList = []) {
    try {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if () {
          this.getFilesInDirectory(filePath, fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath)}
>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
if (stat.isDirectory()) {
          this.getFilesInDirectory(filePath, fileList);
        } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          fileList.push(filePath);
        }ursor/migrate-github-actions-to-pm2-and-clean-up-5599
      }
    } catch (error) {
      // Ignore errors;
    }
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
    
>>>>>>> main
    return fileList}}
    
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    return fileList}}
    
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
    return fileList}}
    
    return fileList}}
    
    return fileList}}
    
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
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
}
automation.start().catch(error => {}),
  _console.error('Failed to start linting "automation": ', error);',
  process.exit(1);
});,
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
;







;
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
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
}
// Start the linting automation;
const automation = new LintingAutomation;(;);
>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
// Start the linting automation
const automation = new LintingAutomation();ursor/migrate-github-actions-to-pm2-and-clean-up-5599
automation.start().catch(error => {
  console.error('Failed to start linting "automation": ', error);
  process.exit(1);
});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});


#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});

#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/linting-automation.js
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
#!/usr/bin/env node;  const fs = require('fs') const path = require('path') const { execSync } =  import fs from 'fs') import path from 'path') const { execSync } = require('child_process'); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 class LintingAutomation { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot,'automation/logs/linting-automation.log'); this.lintReportFile = path.join(this.projectRoot,'automation/logs/lint-report.json'); this.lastLint = null; this.lintInterval = 60000; this.isRunning = false; this.setupLogging(); this.log('Linting Automation started')} setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(message); fs.appendFileSync(this.logFile,logMessage)}   log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; console.log(logMessage.trim();); fs.appendFileSync(this.logFile,logMessage)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async runLinting() { try { this.log('Running linting check...'); const startTime = Date.now(); const lintOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const endTime = Date.now(); const lintTime = endTime - startTime; this.lastLint = { timestamp: new Date().toISOString() success: true; lintTime: lintTime; output: lintOutput; errors: 0; warnings: 0}; this.log(`Linting completed successfully in ${lintTime}ms`); await this.saveLintReport()} catch (error) { this.log(`Linting failed: ${error.message}`);  const output = error.stdout || error.stderr || ''; const errorCount = (output.match(/error/g) || []).length; const warningCount = (output.match(/warning/g) || []).length;  const output = error.stdout || error.stderr || ;';'; const errorCount = (output.match(/error/g) || []).lengt;h; const warningCount = (output.match(/warning/g) || []).lengt;h; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.lastLint = { timestamp: new Date().toISOString() success: false; error: error.message; output: output; errors: errorCount; warnings: warningCount}; await this.saveLintReport(); await this.handleLintingFailure(error)} } async handleLintingFailure(error) { this.log('Handling linting failure...'); try { this.log('Attempting to auto-fix linting issues...'); const fixOutput = execSync('npm run lint:fix',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 120000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 120000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Auto-fix applied'); const recheckOutput = execSync('npm run lint',{  cwd: this.projectRoot,encoding: 'utf8',timeout: 60000 });  cwd: this.projectRoot; encoding: 'utf8' timeout: 60000};); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 this.log('Linting issues resolved')} catch (fixError) { this.log(`Failed to fix linting issues: ${fixError.message}`); await this.reportLintingFailure(fixError)} } async saveLintReport() { const report = { lastLint: this.lastLint; projectRoot: this.projectRoot; eslintConfig: this.getEslintConfig()  };  }; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 fs.writeFileSync(this.lintReportFile,JSON.stringify(report,null,2))} getEslintConfig() { try {  const configPath = path.join(this.projectRoot,'eslint.config.js'); if (!fs.existsSync(configPath)) { return { exists: false,path: configPath }} return { exists: true,path: configPath,size: fs.statSync(configPath).size };  const configPath = path.join(this.projectRoot,'eslint.config.js';); if () { return {) { ) { return {} exists: true; path: configPath; size: fs.statSync(configPath).size}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { }  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString(),error: error.message,stack: error.stack,projectRoot: this.projectRoot };  return { exists: false }} async reportLintingFailure(error) { const failureReport = { timestamp: new Date().toISOString() error: error.message; stack: error.stack; projectRoot: this.projectRoot}; ursor/migrate-github-actions-to-pm2-and-clean-up-5599 const failureFile = path.join(this.projectRoot,'automation/logs/linting-failure-report.json'); fs.writeFileSync(failureFile,JSON.stringify(failureReport,null,2)); this.log('Linting failure reported')} async checkFileChanges() { try {  const filesToCheck = this.getRecentFiles(); if (filesToCheck.length > 0) { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`); await this.runLinting()}  const filesToCheck = this.getRecentFiles(;); if ( { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)) { { this.log(`Found ${filesToCheck.length} recently modified files,running linting...`)} await this.runLinting()} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } catch (error) { this.log(`File change check failed: ${error.message}`)} } getRecentFiles() { const recentFiles = [];  const cutoffTime = Date.now() - 60000; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) { const files = this.getFilesInDirectory(dirPath); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file); return stats.mtime.getTime() > cutoffTime} catch { return false} }))}  const cutoffTime = Date.now() - 600;0;0; try { const sourceDirs = ['pages','components','lib','hooks','utils']; for (const dir of sourceDirs) { const dirPath = path.join(this.projectRoot,dir;); if () { const files = this.getFilesInDirectory(dirPath) { ) { const files = this.getFilesInDirectory(dirPath}); recentFiles.push(...files.filter(file => { try { const stats = fs.statSync(file;); return stats.mtime.getTime() > cutoffTime} catch { return false} }))} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return recentFiles}  return recentFiles} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 getFilesInDirectory(dir,fileList = []) { try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir,file); const stat = fs.statSync(filePath);  if (stat.isDirectory()) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)}  if () { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} } } catch (error) { } return fileList) { ) { this.getFilesInDirectory(filePath,fileList)} else if (file.match(/\.(js|jsx|ts|tsx)$/)) { fileList.push(filePath)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 } } catch (error) { }  return fileList}  return fileList}} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 async start() { this.isRunning = true; this.log('Linting Automation started'); await this.runLinting(); setInterval(async () => {  if (this.isRunning) { await this.checkFileChanges()} },this.lintInterval)}  if ( { await this.checkFileChanges()} },this.lintInterval)) { { await this.checkFileChanges()} },this.lintInterval)} ursor/migrate-github-actions-to-pm2-and-clean-up-5599 process.on('SIGTERM',() => { this.log('Received SIGTERM,shutting down gracefully'); this.isRunning = false; process.exit(0)}); process.on('SIGINT',() => { this.log('Received SIGINT,shutting down gracefully'); this.isRunning = false; process.exit(0)})} }  const automation = new LintingAutomation();  const automation = new LintingAutomation;(;); ursor/migrate-github-actions-to-pm2-and-clean-up-5599 automation.start().catch(error => { console.error('Failed to start linting automation:',error); process.exit(1)});
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/linting-automation.js
