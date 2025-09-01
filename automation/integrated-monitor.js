#!/usr/bin/env node

/**
 * Integrated Browser Error Monitor & Auto-Fixer
 * Combines real-time browser monitoring with automatic source code fixes
 * 
 * This script:
 * 1. Monitors browser console errors in real-time
 * 2. Automatically applies runtime fixes
 * 3. Triggers source code fixes for persistent issues
 * 4. Provides comprehensive reporting and analytics
 * 5. Integrates with PM2 for process management
 */
;
const BrowserErrorMonitor = require('./browser-error-monitor');
const BrowserErrorFixer = require('./browser-error-fixer');
const fs = require('fs').promises;
const path = require('path');
;
class IntegratedMonitor {
  constructor() {
    this.browserMonitor = new BrowserErrorMonitor();
    this.errorFixer = new BrowserErrorFixer();
    this.isRunning = false;
    this.fixCycleInterval = null;
    this.stats = {
      totalErrors: 0,
      runtimeFixes: 0,
      sourceCodeFixes: 0,
      failedFixes: 0,
      lastFixCycle: null,
      uptime: Date.now()
    };

  async initialize() {
    try {
      // console.log('🚀 Initializing Integrated Browser Error Monitor...');
      
      // Initialize browser monitor
      await this.browserMonitor.initialize();
      
      // Set up error handling for browser monitor
      this.browserMonitor.on('error', this.handleBrowserMonitorError.bind(this));
      
      // Set up fix cycle interval (every 10 minutes)
      this.fixCycleInterval = setInterval(async () => {
        await this.runFixCycle();
      }, 10 * 60 * 1000);
      
      // console.log('✅ Integrated Monitor initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Integrated Monitor:', error);
      return false;


  async start() {
    if (this.isRunning) {
      // console.log('⚠️  Integrated Monitor is already running');
      return;

    const initialized = await this.initialize();
    if (!initialized) {
      throw new Error('Failed to initialize Integrated Monitor');

    this.isRunning = true;
    // console.log('🚀 Integrated Browser Error Monitor started');
    
    // Start browser monitoring
    await this.browserMonitor.start();
    
    // Run initial fix cycle
    await this.runFixCycle();

  async stop() {
    this.isRunning = false;
    
    if (this.fixCycleInterval) {
      clearInterval(this.fixCycleInterval);

    if (this.browserMonitor) {
      await this.browserMonitor.stop();

    // console.log('🛑 Integrated Browser Error Monitor stopped');

  async restart() {
    // console.log('🔄 Restarting Integrated Browser Error Monitor...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.start();

  async handleBrowserMonitorError(error) {
    console.error('🔴 Browser Monitor Error:', error);
    
    // Attempt to recover
    try {
      await this.browserMonitor.restart();
    } catch (restartError) {
      console.error('❌ Failed to restart browser monitor:', restartError);


  async runFixCycle() {
    try {
      // console.log('🔧 Starting integrated fix cycle...');
      
      // Get recent errors from browser monitor
      const recentErrors = this.browserMonitor.errorLog.filter(error => {
        const errorTime = new Date(error.timestamp);
        const cutoffTime = new Date(Date.now() - 30 * 60 * 1000); // Last 30 minutes
        return errorTime > cutoffTime;
      });
      
      if (recentErrors.length === 0) {
        // console.log('✅ No recent errors to fix');
        return;

      // console.log(`🔍 Found ${recentErrors.length} recent errors to analyze`);
      
      // Run source code fixes
      const fixesApplied = await this.errorFixer.runFixCycle(recentErrors);
      
      // Update statistics
      this.stats.sourceCodeFixes += fixesApplied.length;
      this.stats.lastFixCycle = new Date().toISOString();
      
      // Generate comprehensive report
      await this.generateIntegratedReport(recentErrors, fixesApplied);
      
      // console.log(`✅ Fix cycle completed. Applied ${fixesApplied.length} source code fixes.`);
      
    } catch (error) {
      console.error('❌ Error during fix cycle:', error);
      this.stats.failedFixes++;


  async generateIntegratedReport(recentErrors, fixesApplied) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        stats: {
          ...this.stats,
          uptime: Date.now() - this.stats.uptime,
          recentErrorsCount: recentErrors.length,
          fixesAppliedCount: fixesApplied.length
        },
        recentErrors: recentErrors.slice(-20), // Last 20 errors
        fixesApplied: fixesApplied.slice(-20), // Last 20 fixes
        browserMonitorStats: this.browserMonitor.stats,
        summary: {
          totalErrors: this.stats.totalErrors,
          runtimeFixes: this.stats.runtimeFixes,
          sourceCodeFixes: this.stats.sourceCodeFixes,
          failedFixes: this.stats.failedFixes,
          successRate: this.stats.totalErrors > 0 ? 
            (((this.stats.runtimeFixes + this.stats.sourceCodeFixes) / this.stats.totalErrors) * 100).toFixed(2) : 100

      };
      
      const reportPath = path.join(this.browserMonitor.CONFIG.logDir, 'integrated-monitor-report.json');
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
      
      // console.log(`📄 Integrated report generated: ${reportPath}`);
    } catch (error) {
      console.error('❌ Failed to generate integrated report:', error);


  async getStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      browserMonitorStatus: this.browserMonitor ? this.browserMonitor.isRunning : false,
      lastFixCycle: this.stats.lastFixCycle,
      uptime: Date.now() - this.stats.uptime
    };

  async performHealthCheck() {
    try {
      // console.log('🔍 Performing integrated health check...');
      
      // Check browser monitor health
      const browserHealth = await this.browserMonitor.performHealthCheck();
      
      // Check fixer health
      const fixerHealth = this.errorFixer.fixesApplied.length > 0;
      
      // Overall health assessment
      const overallHealth = browserHealth && fixerHealth;
      
      // console.log(`📊 Integrated Health Check - Browser: ${browserHealth ? '✅' : '❌'}, Fixer: ${fixerHealth ? '✅' : '❌'}`);
      
      return overallHealth;
    } catch (error) {
      console.error('❌ Integrated health check failed:', error);
      return false;



// PM2 process management;
const integratedMonitor = new IntegratedMonitor();

// Handle process signals
process.on('SIGINT', async () => {
  // console.log('🛑 Received SIGINT, shutting down...');
  await integratedMonitor.stop();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  // console.log('🛑 Received SIGTERM, shutting down...');
  await integratedMonitor.stop();
  process.exit(0);
});

// Handle uncaught exceptions
process.on('uncaughtException', async (error) => {
  console.error('❌ Uncaught Exception:', error);
  await integratedMonitor.stop();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  await integratedMonitor.stop();
  process.exit(1);
});

// Start the integrated monitor
integratedMonitor.start().catch(async (error) => {
  console.error('❌ Failed to start integrated monitor:', error);
  await integratedMonitor.stop();
  process.exit(1);
});

module.exports = integratedMonitor;
}}}}}}}}}}}}}}}}}}}}}}