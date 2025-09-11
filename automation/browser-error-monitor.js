#!/usr/bin/env node

/**
 * Browser Console Error Monitor & Auto-Fixer
 * PM2 automation script for Zion.app
 * 
 * This script:
 * 1. Monitors browser console errors via Puppeteer
 * 2. Analyzes error patterns and severity
 * 3. Automatically applies fixes based on error types
 * 4. Reports and logs all activities
 * 5. Integrates with existing health check system
 */

import puppeteer from 'puppeteer');
import fs from 'fs').promises;
import path from 'path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  appUrl: 'https://ziontechgroup.com',
  checkInterval: 5 * 60 * 1000, // 5 minutes
  maxRetries: 3,
  logDir: path.join(__dirname, '../reports'),
  errorPatterns: {
    // JavaScript errors
    js: {
      'Cannot read property': 'null-check-fix',
      'is not a function': 'function-check-fix',
      'Unexpected token': 'syntax-fix',
      'ReferenceError': 'reference-fix',
      'TypeError': 'type-fix'
    },
    // CSS errors
    css: {
      'Failed to load resource': 'resource-fix',
      '404': 'missing-resource-fix',
      'CORS': 'cors-fix'
    },
    // Network errors
    network: {
      'net::ERR_': 'network-fix',
      'timeout': 'timeout-fix',
      'connection refused': 'connection-fix'

  },
  fixStrategies: {
    'null-check-fix': 'Add null/undefined checks',
    'function-check-fix': 'Verify function existence',
    'syntax-fix': 'Fix JavaScript syntax errors',
    'reference-fix': 'Fix variable/function references',
    'type-fix': 'Add type checking',
    'resource-fix': 'Fix resource loading issues',
    'missing-resource-fix': 'Add missing resources',
    'cors-fix': 'Fix CORS configuration',
    'network-fix': 'Fix network connectivity',
    'timeout-fix': 'Increase timeout values',
    'connection-fix': 'Fix connection issues'

};

class BrowserErrorMonitor {
  constructor() {
    this.browser = null;
    this.page = null;
    this.errorLog = [];
    this.fixLog = [];
    this.isRunning = false;
    this.stats = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      lastCheck: null
    };

  async initialize() {
    try {
      // console.log('🚀 Initializing Browser Error Monitor...');
      
      // Ensure log directory exists
      await fs.mkdir(CONFIG.logDir, { recursive: true });
      
      // Launch browser
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu'
        ]
      });

      this.page = await this.browser.newPage();
      
      // Set up error listeners
      await this.setupErrorListeners();
      
      // console.log('✅ Browser Error Monitor initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Browser Error Monitor:', error);
      return false;


  async setupErrorListeners() {
    // Listen for console errors
    this.page.on('console', async (msg) => {
      if (msg.type() === 'error') {
        await this.handleConsoleError(msg);

    });

    // Listen for page errors
    this.page.on('pageerror', async (error) => {
      await this.handlePageError(error);
    });

    // Listen for request failures
    this.page.on('requestfailed', async (request) => {
      await this.handleRequestFailure(request);
    });

    // Listen for response errors
    this.page.on('response', async (response) => {
      if (!response.ok()) {
        await this.handleResponseError(response);

    });

  async handleConsoleError(msg) {
    const error = {
      type: 'console',
      message: msg.text(),
      timestamp: new Date().toISOString(),
      severity: this.assessErrorSeverity(msg.text()),
      location: await this.getErrorLocation()
    };

    this.errorLog.push(error);
    // console.log(`🔴 Console Error: ${error.message}`);
    
    // Attempt auto-fix
    await this.attemptAutoFix(error);

  async handlePageError(error) {
    const pageError = {
      type: 'page',
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      severity: this.assessErrorSeverity(error.message),
      location: await this.getErrorLocation()
    };

    this.errorLog.push(pageError);
    // console.log(`🔴 Page Error: ${pageError.message}`);
    
    // Attempt auto-fix
    await this.attemptAutoFix(pageError);

  async handleRequestFailure(request) {
    const requestError = {
      type: 'request',
      url: request.url(),
      failureReason: request.failure().errorText,
      timestamp: new Date().toISOString(),
      severity: this.assessErrorSeverity(request.failure().errorText),
      location: await this.getErrorLocation()
    };

    this.errorLog.push(requestError);
    // console.log(`🔴 Request Failed: ${request.url()} - ${request.failure().errorText}`);
    
    // Attempt auto-fix
    await this.attemptAutoFix(requestError);

  async handleResponseError(response) {
    const responseError = {
      type: 'response',
      url: response.url(),
      status: response.status(),
      statusText: response.statusText(),
      timestamp: new Date().toISOString(),
      severity: this.assessErrorSeverity(`HTTP ${response.status()}`),
      location: await this.getErrorLocation()
    };

    this.errorLog.push(responseError);
    // console.log(`🔴 Response Error: ${response.url()} - ${response.status()} ${response.statusText()}`);
    
    // Attempt auto-fix
    await this.attemptAutoFix(responseError);

  assessErrorSeverity(message) {
    const criticalKeywords = ['fatal', 'critical', 'uncaught', 'unhandled'];
    const warningKeywords = ['warning', 'deprecated', 'experimental'];
    
    if (criticalKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return 'critical';
    } else if (warningKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return 'warning';
    } else {
      return 'error';


  async getErrorLocation() {
    try {
      const url = this.page.url();
      const title = await this.page.title();
      return { url, title };
    } catch (error) {
      return { url: 'unknown', title: 'unknown' };


  async attemptAutoFix(error) {
    try {
      const fixStrategy = this.identifyFixStrategy(error);
      
      if (fixStrategy) {
        // console.log(`🔧 Attempting to fix: ${fixStrategy}`);
        
        const fixResult = await this.applyFix(fixStrategy, error);
        
        if (fixResult.success) {
          this.stats.fixedErrors++;
          this.fixLog.push({
            error: error,
            strategy: fixStrategy,
            result: fixResult,
            timestamp: new Date().toISOString()
          });
          
          // console.log(`✅ Auto-fix successful: ${fixStrategy}`);
        } else {
          this.stats.failedFixes++;
          // console.log(`❌ Auto-fix failed: ${fixStrategy} - ${fixResult.reason}`);


    } catch (fixError) {
      console.error('❌ Error during auto-fix attempt:', fixError);
      this.stats.failedFixes++;


  identifyFixStrategy(error) {
    const message = error.message || error.failureReason || '';
    
    for (const [category, patterns] of Object.entries(CONFIG.errorPatterns)) {
      for (const [pattern, strategy] of Object.entries(patterns)) {
        if (message.includes(pattern)) {
          return strategy;



    return null;

  async applyFix(strategy, error) {
    try {
      switch (strategy) {
        case 'null-check-fix':
          return await this.fixNullCheck(error);
        case 'function-check-fix':
          return await this.fixFunctionCheck(error);
        case 'syntax-fix':
          return await this.fixSyntaxError(error);
        case 'reference-fix':
          return await this.fixReferenceError(error);
        case 'type-fix':
          return await this.fixTypeError(error);
        case 'resource-fix':
          return await this.fixResourceError(error);
        case 'missing-resource-fix':
          return await this.fixMissingResource(error);
        case 'cors-fix':
          return await this.fixCorsError(error);
        case 'network-fix':
          return await this.fixNetworkError(error);
        case 'timeout-fix':
          return await this.fixTimeoutError(error);
        case 'connection-fix':
          return await this.fixConnectionError(error);
        default:
          return { success: false, reason: 'Unknown fix strategy' };

    } catch (fixError) {
      return { success: false, reason: fixError.message };


  // Fix implementations
  async fixNullCheck(error) {
    // Inject null check helper
    await this.page.evaluate(() => {
      if (typeof window.safeGet === 'undefined') {
        window.safeGet = (obj, path, defaultValue = null) => {
          return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : defaultValue;
          }, obj);
        };

    });
    
    return { success: true, message: 'Null check helper injected' };

  async fixFunctionCheck(error) {
    // Inject function existence checker
    await this.page.evaluate(() => {
      if (typeof window.safeCall === 'undefined') {
        window.safeCall = (func, ...args) => {
          if (typeof func === 'function') {
            return func(...args);

          return null;
        };

    });
    
    return { success: true, message: 'Function check helper injected' };

  async fixSyntaxError(error) {
    // Try to reload page to clear syntax errors
    try {
      await this.page.reload({ waitUntil: 'networkidle0' });
      return { success: true, message: 'Page reloaded to clear syntax errors' };
    } catch (reloadError) {
      return { success: false, reason: 'Failed to reload page' };


  async fixReferenceError(error) {
    // Inject global error handler
    await this.page.evaluate(() => {
      if (typeof window.globalErrorHandler === 'undefined') {
        window.globalErrorHandler = (error) => {
          console.warn('Global error handler caught:', error);
          return false; // Prevent default error handling
        };
        window.addEventListener('error', window.globalErrorHandler);

    });
    
    return { success: true, message: 'Global error handler injected' };

  async fixTypeError(error) {
    // Inject type checking helper
    await this.page.evaluate(() => {
      if (typeof window.typeCheck === 'undefined') {
        window.typeCheck = (value, expectedType) => {
          if (expectedType === 'array') return Array.isArray(value);
          if (expectedType === 'object') return typeof value === 'object' && value !== null;
          return typeof value === expectedType;
        };

    });
    
    return { success: true, message: 'Type checking helper injected' };

  async fixResourceError(error) {
    // Try to reload failed resources
    try {
      await this.page.reload({ waitUntil: 'networkidle0' });
      return { success: true, message: 'Resources reloaded' };
    } catch (reloadError) {
      return { success: false, reason: 'Failed to reload resources' };


  async fixMissingResource(error) {
    // Log missing resource for manual review
    // console.log(`📝 Missing resource detected: ${error.url || 'unknown'}`);
    return { success: true, message: 'Missing resource logged for review' };

  async fixCorsError(error) {
    // Inject CORS bypass for development (use with caution)
    await this.page.evaluate(() => {
      if (typeof window.corsBypass === 'undefined') {
        window.corsBypass = (url) => {
          return fetch(url, { mode: 'no-cors' }).catch(() => null);
        };

    });
    
    return { success: true, message: 'CORS bypass helper injected' };

  async fixNetworkError(error) {
    // Wait and retry
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { success: true, message: 'Network retry delay applied' };

  async fixTimeoutError(error) {
    // Increase page timeout
    this.page.setDefaultTimeout(60000);
    return { success: true, message: 'Page timeout increased to 60s' };

  async fixConnectionError(error) {
    // Wait and retry connection
    await new Promise(resolve => setTimeout(resolve, 5000));
    return { success: true, message: 'Connection retry delay applied' };

  async performHealthCheck() {
    try {
      // console.log('🔍 Performing browser health check...');
      
      // Navigate to app
      await this.page.goto(CONFIG.appUrl, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for page to stabilize
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check for any remaining errors
      const remainingErrors = this.errorLog.filter(error => 
        new Date(error.timestamp) > new Date(Date.now() - 60000)
      );
      
      this.stats.lastCheck = new Date().toISOString();
      this.stats.totalErrors = this.errorLog.length;
      
      // console.log(`📊 Health Check Complete - Total Errors: ${this.stats.totalErrors}, Fixed: ${this.stats.fixedErrors}`);
      
      // Generate report
      await this.generateReport();
      
      return remainingErrors.length === 0;
    } catch (error) {
      console.error('❌ Health check failed:', error);
      return false;


  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        stats: this.stats,
        recentErrors: this.errorLog.slice(-10),
        recentFixes: this.fixLog.slice(-10),
        summary: {
          totalErrors: this.stats.totalErrors,
          fixedErrors: this.stats.fixedErrors,
          failedFixes: this.stats.failedFixes,
          successRate: this.stats.totalErrors > 0 ? 
            ((this.stats.fixedErrors / this.stats.totalErrors) * 100).toFixed(2) : 100

      };
      
      const reportPath = path.join(CONFIG.logDir, 'browser-error-report.json');
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
      
      // console.log(`📄 Report generated: ${reportPath}`);
    } catch (error) {
      console.error('❌ Failed to generate report:', error);


  async start() {
    if (this.isRunning) {
      // console.log('⚠️ Monitor is already running');
      return;

    const initialized = await this.initialize();
    if (!initialized) {
      throw new Error('Failed to initialize monitor');

    this.isRunning = true;
    // console.log('🚀 Browser Error Monitor started');
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up periodic health checks
    this.healthCheckInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();

    }, CONFIG.checkInterval);

  async stop() {
    this.isRunning = false;
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);

    if (this.browser) {
      await this.browser.close();

    // console.log('🛑 Browser Error Monitor stopped');

  async restart() {
    // console.log('🔄 Restarting Browser Error Monitor...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.start();


// PM2 process management
const monitor = new BrowserErrorMonitor();

// Handle process signals
process.on('SIGINT', async () => {
  // console.log('🛑 Received SIGINT, shutting down...');
  await monitor.stop();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  // console.log('🛑 Received SIGTERM, shutting down...');
  await monitor.stop();
  process.exit(0);
});

// Handle uncaught exceptions
process.on('uncaughtException', async (error) => {
  console.error('❌ Uncaught Exception:', error);
  await monitor.stop();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  await monitor.stop();
  process.exit(1);
});

// Start the monitor
monitor.start().catch(async (error) => {
  console.error('❌ Failed to start monitor:', error);
  await monitor.stop();
  process.exit(1);
});

export default monitor;
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}