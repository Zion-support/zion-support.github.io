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
      console.log(`👀 Watching "file": ${filePath}`);
    } catch (error) {
      console.error(`Error watching file ${filePath}:`, error);
    }
  }
  shouldWatchFile(filename) {
    if (!filename) return false;
    // Check if file matches watch patterns
    const matchesPattern = this.watchPatterns.some(pattern => {
      const regex = this.patternToRegex(pattern);
      return regex.test(filename);
    });
    if (!matchesPattern) return false;
    // Check if file is ignored
    const isIgnored = this.ignoredPatterns.some(pattern => {
      const regex = this.patternToRegex(pattern);
      return regex.test(filename);
    });
    return !isIgnored;
  }
    } catch (error) {
      const buildDuration = Date.now() - buildStartTime;
      this.buildReport.buildAttempts.push({
        "timestamp": new Date().toISOString(),
        "duration": buildDuration,
        "success": false,
        "type": 'full_build',
        "error": error.message});
      this.buildReport.buildSuccess = false;
      this.buildReport.totalBuilds += 1;
      this.buildReport.failedBuilds += 1;
      console.log(` Build failed after ${buildDuration}"ms": `, error.message);
      // Trigger error fixer on build failure
      await this.triggerErrorFixer();
    } finally {
      this.isBuilding = false;
    }
  }
  async runTypeCheck() {
    console.log(' Running type check...');
    try {
      execSync('npx tsc --noEmit', {
        "encoding": 'utf8',
        "cwd": this.projectRoot,
        "stdio": 'pipe',
        "timeout": 60000, // 1 minute timeout
      });
    } catch (error) {
      console.log(' Type check failed');
      throw new Error(`Type check failed: ${error.message}`);
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
    } catch (error) {
      console.log(' Lint check failed');
      throw new Error(`Lint check failed: ${error.message}`);
    } catch (error) {
      console.log(' Lint check failed');
      throw new Error(`Lint check "failed": ${error.message}`);
    }
  }
  async runNextBuild() {
    console.log(' Running Next.js build...');
    try {
    }
  }
  startPeriodicHealthChecks() {
    console.log(' Starting periodic health checks...');
    // Check every 30 minutes
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/build-watcher.js
