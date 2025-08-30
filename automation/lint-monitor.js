#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(__filename);
class LintMonitor {
  constructor() {
    this.isRunning = false;
    this.watcher = null;
    this.errorCount = 0;
    this.lastCheck = null;
    this.logFile = path.join(__dirname, 'logs', 'lint-monitor.log');
<<<<<<< HEAD
    this.ensureLogDirectory();

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });


  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
<<<<<<< HEAD
    // // // // // console.log(message);
=======
    // // // // // // // // console.log(message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    fs.appendFileSync(this.logFile, logMessage);

=======
    this.ensureLogDirectory()}
  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async checkLintStatus() {
    try {
      this.log('🔍 Checking lint status...');
      const result = execSync('npm run lint', {
        encoding: 'utf8',
        stdio: 'pipe'
      });

      this.errorCount = 0;
      this.lastCheck = new Date();
      this.log('✅ Lint check passed - no errors found');
<<<<<<< HEAD
      return { success: true, errors: 0 }} catch (error) {
      const errorOutput = error.stdout || error.message;
=======
      return { success: true, errors: 0 };
    } catch (error) {
<<<<<<< HEAD
      const errorOutput = error.stdout || error.message;
      const errorLines = errorOutput.split('\n').filter(line =>
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      const errorLines = errorOutput.split('\n').filter(line => 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        line.includes('error') || line.includes('Error')
      );

      this.errorCount = errorLines.length;
      this.lastCheck = new Date();
      this.log(`❌ Lint check failed - ${this.errorCount} errors found`);
<<<<<<< HEAD

      return { success: false, errors: this.errorCount, output: errorOutput };


=======
      
      return { success: false, errors: this.errorCount, output: errorOutput }}
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async autoFix() {
    try {
      this.log('🔧 Attempting auto-fix...');
      const result = execSync('npm run lint -- --fix', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Auto-fix completed successfully');
      return true} catch (error) {
      this.log(`❌ Auto-fix failed: ${error.message}`);
<<<<<<< HEAD
      return false;


=======
      return false}
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  startContinuousMonitoring() {
    this.log('👀 Starting continuous lint monitoring...');

    // Check every 30 seconds
    const checkInterval = setInterval(async () => {
      if (!this.isRunning) {
        clearInterval(checkInterval);
<<<<<<< HEAD
        return;

=======
        return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      const status = await this.checkLintStatus();

      if (!status.success && status.errors > 0) {
        this.log(`🚨 Found ${status.errors} lint errors - attempting auto-fix...`);
        const fixed = await this.autoFix();

        if (fixed) {
          // Re-check after fix
          setTimeout(async () => {
<<<<<<< HEAD
            await this.checkLintStatus();
          }, 2000);


    }, 30000);
    // Store interval for cleanup
    this.checkInterval = checkInterval;

=======
            await this.checkLintStatus()}, 2000)}
      }
    }, 30000);
    // Store interval for cleanup
    this.checkInterval = checkInterval}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  startFileWatcher() {
    this.log('📁 Starting file watcher...');

    const watcher = chokidar.watch([
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}',
      'hooks/**/*.{js,jsx,ts,tsx}'
    ], {
      ignored: /(node_modules|\.git|\.next)/,
      persistent: true
    });
    let debounceTimer;
    watcher.on('change', (filePath) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(async () => {
        this.log(`📝 File changed: ${filePath}`);
        await this.handleFileChange(filePath)}, 2000)});
    this.watcher = watcher;
<<<<<<< HEAD
    this.log('✅ File watcher started');

=======
    this.log('✅ File watcher started')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async handleFileChange(filePath) {
    this.log(`🔍 Checking file: ${filePath}`);

    try {
      // Check if the specific file has lint issues
      const result = execSync(`npx eslint "${filePath}"`, {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ File ${filePath} passed lint check`)} catch (error) {
      this.log(`❌ Lint issues found in ${filePath}`);

      // Try to auto-fix the specific file
      try {
        execSync(`npx eslint "${filePath}" --fix`, {
          encoding: 'utf8',
          stdio: 'pipe'
        });
<<<<<<< HEAD
        this.log(`✅ Auto-fixed issues in ${filePath}`);
      } catch (fixError) {
        this.log(`❌ Failed to auto-fix ${filePath}: ${fixError.message}`);



  async start() {
    if (this.isRunning) {
      this.log('⚠️ Monitor is already running');
      return;

=======
        this.log(`✅ Auto-fixed issues in ${filePath}`)} catch (fixError) {
        this.log(`❌ Failed to auto-fix ${filePath}: ${fixError.message}`)}
    }
  }
  async start() {
    if (this.isRunning) {
      this.log('⚠️ Monitor is already running');
      return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    this.isRunning = true;
    this.log('🚀 Starting Lint Monitor...');
    // Initial check
    await this.checkLintStatus();
    // Start continuous monitoring
    this.startContinuousMonitoring();
    // Start file watcher
    this.startFileWatcher();
<<<<<<< HEAD
    this.log('✅ Lint Monitor started successfully');

=======
    this.log('✅ Lint Monitor started successfully')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  stop() {
    this.isRunning = false;

    if (this.checkInterval) {
      clearInterval(this.checkInterval);
<<<<<<< HEAD
      this.checkInterval = null;

    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;

    this.log('🛑 Lint Monitor stopped');

=======
      this.checkInterval = null}
    
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null}
    
    this.log('🛑 Lint Monitor stopped')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  status() {
    const status = {
  running: this.isRunning,
      errorCount: this.errorCount,
      lastCheck: this.lastCheck,
<<<<<<< HEAD
      uptime: this.isRunning ? Date.now() - (this.lastCheck?.getTime() || Date.now()) : 0
    };

    this.log(`📊 Status: ${status.running ? 'Running' : 'Stopped'}`);
    this.log(`📊 Error Count: ${status.errorCount}`);
    this.log(`📊 Last Check: ${status.lastCheck?.toISOString() || 'Never'}`);

    return status;

=======
  uptime: this.isRunning ? Date.now() - (this.lastCheck?.getTime() || Date.now()) : 0
    






};
    
    this.log(`📊 Status: ${status.running ? 'Running' : 'Stopped'}`);
    this.log(`📊 Error Count: ${status.errorCount}`);
    this.log(`📊 Last Check: ${status.lastCheck?.toISOString() || 'Never'}`);
    
    return status}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  getStats() {
    const stats = {
  totalChecks: 0,
      totalErrors: 0,
      autoFixes: 0,
  filesWatched: 0
    






};
    try {
      const lines = logContent.split('\n');

      stats.totalChecks = lines.filter(line => line.includes('Checking lint status')).length;
      stats.totalErrors = lines.filter(line => line.includes('errors found')).length;
      stats.autoFixes = lines.filter(line => line.includes('Auto-fix completed')).length;
<<<<<<< HEAD
      stats.filesWatched = lines.filter(line => line.includes('File changed')).length;
    } catch (error) {
      this.log('❌ Could not read stats from log file');

    return stats;


=======
      stats.filesWatched = lines.filter(line => line.includes('File changed')).length} catch (error) {
      this.log('❌ Could not read stats from log file')}
    return stats}
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// CLI handling
const monitor = new LintMonitor();
const command = process.argv[2];
switch (command) {
  case 'start':
    monitor.start();
    break;
  case 'stop':
    monitor.stop();
    process.exit(0);
    break;
  case 'status':
    monitor.status();
    process.exit(0);
    break;
  case 'stats':
    const stats = monitor.getStats();
<<<<<<< HEAD
    // // // // // console.log('📊 Monitor Statistics:');
    // // // // // console.log(`- Total Checks: ${stats.totalChecks}`);
    // // // // // console.log(`- Total Errors: ${stats.totalErrors}`);
    // // // // // console.log(`- Auto Fixes: ${stats.autoFixes}`);
    // // // // // console.log(`- Files Watched: ${stats.filesWatched}`);
    process.exit(0);
    break;
  default:
<<<<<<< HEAD
    // // // // // console.log('Usage: node lint-monitor.js [start|stop|status|stats]');
=======
    // // // // // // // // console.log('📊 Monitor Statistics:');
    // // // // // // // // console.log(`- Total Checks: ${stats.totalChecks}`);
    // // // // // // // // console.log(`- Total Errors: ${stats.totalErrors}`);
    // // // // // // // // console.log(`- Auto Fixes: ${stats.autoFixes}`);
    // // // // // // // // console.log(`- Files Watched: ${stats.filesWatched}`);
    process.exit(0);
    break;
  default:
    // // // // // // // // console.log('Usage: node lint-monitor.js [start|stop|status|stats]');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    process.exit(1);

=======
    console.log('Usage: node lint-monitor.js [start|stop|status|stats]');
    process.exit(1)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// Graceful shutdown
process.on('SIGINT', () => {
  monitor.stop();
  process.exit(0)});
process.on('SIGTERM', () => {
  monitor.stop();
<<<<<<< HEAD
  process.exit(0);
});
}}}}}}}}}}}}}}}}}}}}}}}}}}
=======
  process.exit(0)});
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
