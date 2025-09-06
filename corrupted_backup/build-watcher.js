<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/build-watcher.js
=======
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath);  this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) {  return} this.isBuilding = true; const buildStartTime = Date.now();  try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; } catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1;  await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() {  try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() {  try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() {  try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); } catch (error) {  throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() {  try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run();  setTimeout(async () => { if (this.isRunning) {  await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() {  setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() {  try { await this.runTypeCheck(); } catch (error) {  await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() {  this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport();  process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class BuildWatcher {
  constructor() {
    this.projectRoot = process.cwd();
    this.buildReport = {
      "timestamp": new Date().toISOString(),
      "duration": 0,
      "buildAttempts": [],
      "fileChanges": [],
      "buildSuccess": false,
      "lastBuildTime": null,
      "totalBuilds": 0,
      "successfulBuilds": 0,
      "failedBuilds": 0};
    this.startTime = Date.now();
    this.isRunning = false;
    this.watchPatterns = ['src/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      '*.{json,config.js,config.ts}',
    ];
    this.ignoredPatterns = ['node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.log',
      'error-reports/**',
    ];
    this.buildDebounceTime = 5000; // 5 seconds
    this.buildTimeout = 300000; // 5 minutes
    this.lastBuildTime = 0;
    this.buildQueue = [];
    this.isBuilding = false;
  }
  async start() {
    console.log(' Starting Build Watcher...');
    this.isRunning = true;
    // Create logs directory
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
<<<<<<< HEAD
      fs.mkdirSync(logsDir, { recursive: true });
    }
      const watcher = fs.watch(
        dir,
        { "recursive": true },
        (eventType, filename) => {
          if (filename && this.shouldWatchFile(filename)) {
            this.handleFileChange(eventType, path.join(dir, filename));
          }
        }
      );
      console.log(` Watching "directory": ${dir}`);
    } catch (error) {
      console.error(`Error watching directory ${dir}:`, error);
    }
  }
  watchFile(filePath) {
    try {
      const watcher = fs.watch(filePath, (eventType, filename) => {
        this.handleFileChange(eventType, filePath);
      });
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/build-watcher.js
    } catch (error) {
      console.log(' Type check failed');
      throw new Error(`Type check failed: ${error.message}`);
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/build-watcher.js
      console.log(' Type check passed');
    } catch (error) {
      console.log(' Type check failed');
      throw new Error(`Type check "failed": ${error.message}`);
    }
  }
  async runLintCheck() {
    console.log(' Running lint check...');
    try {
      execSync('npx eslint . --max-warnings 0', {
        "encoding": 'utf8',
        "cwd": this.projectRoot,
        "stdio": 'pipe',
        "timeout": 60000, // 1 minute timeout
      });
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/build-watcher.js
      console.log(' Lint check passed');
=======
<<<<<<< HEAD
      console.log('✅ Lint check passed');
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/build-watcher.js
    } catch (error) {
      console.log(' Lint check failed');
      throw new Error(`Lint check failed: ${error.message}`);
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/build-watcher.js
      console.log(' Lint check passed');
    } catch (error) {
      console.log(' Lint check failed');
      throw new Error(`Lint check "failed": ${error.message}`);
    }
  }
  async runNextBuild() {
    console.log(' Running Next.js build...');
    try {
<<<<<<< HEAD
      execSync('npx next build', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: this.buildTimeout
      });
      console.log(' Next.js build completed');
    } catch (error) {
      console.log(' Next.js build failed');
      throw new Error(`Next.js build failed: ${error.message}`);
    }
  }
  startPeriodicHealthChecks() {
    console.log(' Starting periodic health checks...');
    // Check every 30 minutes
<<<<<<< HEAD
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
      }
    }, 30 * 60 * 1000);
  }
