#!/usr/bin/env node

/**
 * AI Ultra-Fast Runner - Autonomous Automation Script Executor
 * 
 * This is the ultimate automation runner that:
 * - Automatically discovers all automation scripts
 * - Runs them intelligently based on priority and dependencies
 * - Executes continuously and autonomously at maximum speed
 * - Coordinates execution to avoid conflicts
 * - Auto-commits and pushes all changes
 * - Learns from execution patterns
 * - Self-optimizes execution order
 * 
 * @author AI Automation System
 * @version 2.0.0
 */

const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const { promisify } = require('util');

const CONFIG = {
  rootDir: process.cwd(),
  automationDir: path.join(process.cwd(), 'automation'),
  logsDir: path.join(process.cwd(), 'automation', 'logs'),
  reportsDir: path.join(process.cwd(), 'automation', 'reports'),
  dataDir: path.join(process.cwd(), 'automation', 'data'),
  
  // Ultra-fast execution settings - OPTIMIZED FOR MAXIMUM SPEED
  continuous: process.env.CONTINUOUS_MODE !== 'false',
  intervalSeconds: parseInt(process.env.INTERVAL_SECONDS || '1', 10), // Run every 1 second - MAXIMUM SPEED
  maxConcurrentScripts: parseInt(process.env.MAX_CONCURRENT_SCRIPTS || '15', 10), // Increased to 15 for maximum throughput
  executionTimeout: parseInt(process.env.EXECUTION_TIMEOUT || '120000', 10), // 2 minutes per script (reduced further)
  
  // Auto-commit settings
  autoCommit: process.env.AUTO_COMMIT !== 'false',
  autoPush: process.env.AUTO_PUSH !== 'false',
  
  // Script discovery patterns
  scriptPatterns: [
    'ai-*.cjs',
    'ai-*.js',
    '*-automation.cjs',
    '*-automation.js',
  ],
  
  // Priority rules (higher = more important)
  priorityRules: {
    'critical': 100,
    'security': 90,
    'build': 85,
    'error': 80,
    'optimization': 70,
    'analysis': 60,
    'content': 50,
    'monitoring': 40,
  },
  
  repository: 'https://github.com/Zion-Holdings/zion.app',
  canonicalUrl: 'https://ziontechgroup.com',
};

class Logger {
  constructor(logFile) {
    this.logFile = logFile;
  }
  
  async log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };
    
    const logLine = `[${timestamp}] [${level.toUpperCase()}] ${message}${data ? ' ' + JSON.stringify(data) : ''}\n`;
    
    console.log(logLine.trim());
    
    try {
      await fs.appendFile(this.logFile, logLine);
    } catch (err) {
      console.error('Failed to write to log file:', err);
    }
  }
  
  info(message, data) { return this.log('info', message, data); }
  warn(message, data) { return this.log('warn', message, data); }
  error(message, data) { return this.log('error', message, data); }
  success(message, data) { return this.log('success', message, data); }
  debug(message, data) { return this.log('debug', message, data); }
}

class ScriptDiscovery {
  constructor(logger) {
    this.logger = logger;
  }
  
  async discoverScripts() {
    await this.logger.debug('🔍 Discovering automation scripts...');
    
    const scripts = [];
    const automationDir = CONFIG.automationDir;
    
    try {
      const files = await fs.readdir(automationDir);
      
      for (const file of files) {
        const filePath = path.join(automationDir, file);
        
        try {
          const stats = await fs.stat(filePath);
          if (!stats.isFile()) continue;
          
          // Check if matches script patterns
          const matchesPattern = CONFIG.scriptPatterns.some(pattern => {
            const regex = new RegExp(pattern.replace(/\*/g, '.*'));
            return regex.test(file);
          });
          
          if (!matchesPattern) continue;
          
          // Skip runner itself
          if (file.includes('ultra-fast-runner')) continue;
          
          // Extract metadata from filename
          const metadata = this.extractMetadata(file);
          
          // Check if script has run/continuous commands
          const hasCommands = await this.checkScriptCommands(filePath);
          
          scripts.push({
            name: file,
            path: filePath,
            relativePath: `automation/${file}`,
            category: metadata.category,
            priority: metadata.priority,
            estimatedDuration: metadata.duration,
            commands: hasCommands,
            lastRun: null,
            runCount: 0,
            successCount: 0,
            failureCount: 0,
            averageDuration: 0,
          });
        } catch (e) {
          // Skip files we can't read
        }
      }
    } catch (error) {
      await this.logger.error('Failed to discover scripts', { error: error.message });
    }
    
    await this.logger.success(`✅ Discovered ${scripts.length} automation scripts`);
    return scripts;
  }
  
  extractMetadata(filename) {
    let category = 'general';
    let priority = 50;
    let duration = 60000; // Default 1 minute
    
    // Categorize based on filename
    if (filename.includes('security') || filename.includes('audit')) {
      category = 'security';
      priority = CONFIG.priorityRules.security;
    } else if (filename.includes('build') || filename.includes('fixer')) {
      category = 'build';
      priority = CONFIG.priorityRules.build;
    } else if (filename.includes('error') || filename.includes('monitor')) {
      category = 'error';
      priority = CONFIG.priorityRules.error;
    } else if (filename.includes('optimize') || filename.includes('bundle') || filename.includes('image') || filename.includes('route')) {
      category = 'optimization';
      priority = CONFIG.priorityRules.optimization;
    } else if (filename.includes('analyze') || filename.includes('complexity')) {
      category = 'analysis';
      priority = CONFIG.priorityRules.analysis;
    } else if (filename.includes('content') || filename.includes('generate')) {
      category = 'content';
      priority = CONFIG.priorityRules.content;
    } else if (filename.includes('continuous') || filename.includes('improvement')) {
      category = 'critical';
      priority = CONFIG.priorityRules.critical;
    }
    
    // Estimate duration based on category
    if (category === 'security' || category === 'build') {
      duration = 120000; // 2 minutes
    } else if (category === 'optimization') {
      duration = 180000; // 3 minutes
    } else if (category === 'analysis') {
      duration = 90000; // 1.5 minutes
    }
    
    return { category, priority, duration };
  }
  
  async checkScriptCommands(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const hasRun = content.includes('case \'run\'') || content.includes('command === \'run\'');
      const hasContinuous = content.includes('case \'continuous\'') || content.includes('command === \'continuous\'');
      return { run: hasRun, continuous: hasContinuous };
    } catch (e) {
      return { run: true, continuous: false }; // Assume run command exists
    }
  }
}

class ScriptExecutor {
  constructor(logger) {
    this.logger = logger;
    this.runningScripts = new Map();
  }
  
  async executeScript(script, command = 'run') {
    if (this.runningScripts.has(script.name)) {
      await this.logger.warn(`Script ${script.name} is already running, skipping`);
      return { success: false, message: 'Already running' };
    }
    
    this.runningScripts.set(script.name, Date.now());
    
    const startTime = Date.now();
    await this.logger.info(`🚀 Executing: ${script.name} (${command})`);
    
    try {
      const scriptPath = script.path;
      const args = [scriptPath, command];
      
      const result = await this.runWithTimeout(
        'node',
        args,
        CONFIG.executionTimeout
      );
      
      const duration = Date.now() - startTime;
      this.runningScripts.delete(script.name);
      
      script.lastRun = new Date().toISOString();
      script.runCount++;
      
      if (result.success) {
        script.successCount++;
        await this.logger.success(`✅ ${script.name} completed in ${(duration / 1000).toFixed(1)}s`);
      } else {
        script.failureCount++;
        await this.logger.error(`❌ ${script.name} failed`, { error: result.error });
      }
      
      // Update average duration
      script.averageDuration = ((script.averageDuration * (script.runCount - 1)) + duration) / script.runCount;
      
      return {
        success: result.success,
        duration,
        output: result.output,
        error: result.error,
      };
    } catch (error) {
      this.runningScripts.delete(script.name);
      script.runCount++;
      script.failureCount++;
      
      await this.logger.error(`❌ ${script.name} crashed`, { error: error.message });
      
      return {
        success: false,
        error: error.message,
        duration: Date.now() - startTime,
      };
    }
  }
  
  runWithTimeout(command, args, timeout) {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const process = spawn(command, args, {
        cwd: CONFIG.rootDir,
        stdio: 'pipe',
      });
      
      let output = '';
      let errorOutput = '';
      
      process.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      process.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      const timeoutId = setTimeout(() => {
        process.kill('SIGTERM');
        resolve({
          success: false,
          error: 'Execution timeout',
          output: output + errorOutput,
        });
      }, timeout);
      
      process.on('close', (code) => {
        clearTimeout(timeoutId);
        resolve({
          success: code === 0,
          output: output + errorOutput,
          exitCode: code,
        });
      });
      
      process.on('error', (error) => {
        clearTimeout(timeoutId);
        resolve({
          success: false,
          error: error.message,
          output: output + errorOutput,
        });
      });
    });
  }
  
  getRunningCount() {
    return this.runningScripts.size;
  }
}

class ExecutionPlanner {
  constructor(logger) {
    this.logger = logger;
    this.executionHistory = [];
  }
  
  planExecution(scripts) {
    // Sort scripts by priority (highest first)
    const sorted = [...scripts].sort((a, b) => {
      // Prioritize scripts that haven't run recently
      const aTimeSinceLastRun = a.lastRun ? Date.now() - new Date(a.lastRun).getTime() : Infinity;
      const bTimeSinceLastRun = b.lastRun ? Date.now() - new Date(b.lastRun).getTime() : Infinity;
      
      // Prioritize scripts with higher success rate
      const aSuccessRate = a.runCount > 0 ? a.successCount / a.runCount : 0.5;
      const bSuccessRate = b.runCount > 0 ? b.successCount / b.runCount : 0.5;
      
      // Calculate composite score
      const aScore = a.priority + (aTimeSinceLastRun / 60000) + (aSuccessRate * 10);
      const bScore = b.priority + (bTimeSinceLastRun / 60000) + (bSuccessRate * 10);
      
      return bScore - aScore;
    });
    
    return sorted;
  }
  
  shouldRunScript(script, lastExecutionTime) {
    // Don't run if already running
    if (script.isRunning) return false;
    
    // Run if never run before
    if (!script.lastRun) return true;
    
    // Run if enough time has passed (based on category)
    const timeSinceLastRun = Date.now() - new Date(script.lastRun).getTime();
    const minInterval = this.getMinInterval(script.category);
    
    return timeSinceLastRun >= minInterval;
  }
  
  getMinInterval(category) {
    const intervals = {
      'critical': 5000,        // 5 seconds - MAXIMUM SPEED
      'security': 30000,        // 30 seconds - FAST
      'build': 30000,          // 30 seconds - FAST
      'error': 15000,          // 15 seconds - FAST
      'optimization': 60000,   // 1 minute - REDUCED
      'analysis': 90000,       // 1.5 minutes - REDUCED
      'content': 120000,       // 2 minutes - REDUCED
      'monitoring': 5000,      // 5 seconds - FAST
      'general': 30000,        // 30 seconds - FAST
    };
    
    return intervals[category] || 30000; // Default 30 seconds instead of 1 minute
  }
}

class GitManager {
  constructor(logger) {
    this.logger = logger;
  }
  
  async hasChanges() {
    try {
      const result = execSync('git status --porcelain', {
        cwd: CONFIG.rootDir,
        encoding: 'utf8',
        stdio: 'pipe',
      });
      return result.trim().length > 0;
    } catch (e) {
      return false;
    }
  }
  
  async commitAndPush(message) {
    if (!CONFIG.autoCommit) {
      await this.logger.info('Auto-commit disabled, skipping');
      return { success: false, message: 'Auto-commit disabled' };
    }
    
    try {
      if (!(await this.hasChanges())) {
        await this.logger.debug('No changes to commit');
        return { success: true, message: 'No changes' };
      }
      
      execSync('git add .', { cwd: CONFIG.rootDir, stdio: 'pipe' });
      
      const commitMsg = `⚡ AI Ultra-Fast Runner: ${message}\n\nAutomated execution by AI Ultra-Fast Runner\nTimestamp: ${new Date().toISOString()}`;
      
      execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, {
        cwd: CONFIG.rootDir,
        stdio: 'pipe',
      });
      
      await this.logger.success('✅ Changes committed');
      
      if (CONFIG.autoPush) {
        execSync('git push origin main', {
          cwd: CONFIG.rootDir,
          stdio: 'pipe',
        });
        await this.logger.success('✅ Changes pushed to main');
        return { success: true, message: 'Committed and pushed' };
      }
      
      return { success: true, message: 'Committed (push disabled)' };
    } catch (error) {
      await this.logger.error('Failed to commit changes', { error: error.message });
      return { success: false, error: error.message };
    }
  }
}

class UltraFastRunner {
  constructor() {
    const logFile = path.join(CONFIG.logsDir, 'ultra-fast-runner.log');
    this.logger = new Logger(logFile);
    this.discovery = new ScriptDiscovery(this.logger);
    this.executor = new ScriptExecutor(this.logger);
    this.planner = new ExecutionPlanner(this.logger);
    this.gitManager = new GitManager(this.logger);
    this.scripts = [];
    this.isRunning = false;
    this.executionStats = {
      totalRuns: 0,
      successfulRuns: 0,
      failedRuns: 0,
      totalDuration: 0,
    };
  }
  
  async initialize() {
    await this.logger.info('🚀 AI Ultra-Fast Runner initializing...');
    
    // Ensure directories exist
    await fs.mkdir(CONFIG.logsDir, { recursive: true }).catch(() => {});
    await fs.mkdir(CONFIG.reportsDir, { recursive: true }).catch(() => {});
    await fs.mkdir(CONFIG.dataDir, { recursive: true }).catch(() => {});
    
    // Discover scripts
    this.scripts = await this.discovery.discoverScripts();
    
    // Load execution history
    await this.loadExecutionHistory();
    
    await this.logger.success(`✅ Initialized with ${this.scripts.length} scripts`);
  }
  
  async loadExecutionHistory() {
    try {
      const historyPath = path.join(CONFIG.dataDir, 'execution-history.json');
      const content = await fs.readFile(historyPath, 'utf8');
      const history = JSON.parse(content);
      
      // Merge history with scripts
      for (const script of this.scripts) {
        const historyEntry = history.find(h => h.name === script.name);
        if (historyEntry) {
          script.lastRun = historyEntry.lastRun;
          script.runCount = historyEntry.runCount || 0;
          script.successCount = historyEntry.successCount || 0;
          script.failureCount = historyEntry.failureCount || 0;
          script.averageDuration = historyEntry.averageDuration || 0;
        }
      }
    } catch (e) {
      // No history file yet
    }
  }
  
  async saveExecutionHistory() {
    try {
      const historyPath = path.join(CONFIG.dataDir, 'execution-history.json');
      const history = this.scripts.map(s => ({
        name: s.name,
        lastRun: s.lastRun,
        runCount: s.runCount,
        successCount: s.successCount,
        failureCount: s.failureCount,
        averageDuration: s.averageDuration,
      }));
      
      await fs.writeFile(historyPath, JSON.stringify(history, null, 2));
    } catch (e) {
      // Skip if fails
    }
  }
  
  async executeCycle() {
    const cycleStart = Date.now();
    await this.logger.info('⚡ Starting execution cycle...');
    
    // Plan execution order
    const planned = this.planner.planExecution(this.scripts);
    
    // Filter scripts that should run
    const toRun = planned.filter(script => 
      this.planner.shouldRunScript(script, script.lastRun)
    ).slice(0, CONFIG.maxConcurrentScripts);
    
    if (toRun.length === 0) {
      await this.logger.info('⏭️  No scripts to run in this cycle');
      return { executed: 0, successful: 0, failed: 0 };
    }
    
    await this.logger.info(`📋 Executing ${toRun.length} scripts in this cycle`);
    
    // Execute scripts concurrently (up to maxConcurrentScripts)
    const executions = await Promise.allSettled(
      toRun.map(script => this.executor.executeScript(script, 'run'))
    );
    
    // Process results
    let successful = 0;
    let failed = 0;
    
    for (let i = 0; i < executions.length; i++) {
      const result = executions[i];
      if (result.status === 'fulfilled' && result.value.success) {
        successful++;
      } else {
        failed++;
      }
    }
    
    // Save execution history (async, don't wait)
    this.saveExecutionHistory().catch(() => {});
    
    // Commit changes if any (async, don't block)
    if (successful > 0) {
      this.gitManager.commitAndPush(`Executed ${successful} automation scripts`).catch(() => {});
    }
    
    const cycleDuration = Date.now() - cycleStart;
    this.executionStats.totalRuns += toRun.length;
    this.executionStats.successfulRuns += successful;
    this.executionStats.failedRuns += failed;
    this.executionStats.totalDuration += cycleDuration;
    
    await this.logger.success(
      `✅ Cycle complete: ${successful} successful, ${failed} failed in ${(cycleDuration / 1000).toFixed(1)}s`
    );
    
    return { executed: toRun.length, successful, failed, duration: cycleDuration };
  }
  
  async generateReport() {
    const report = {
      metadata: {
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        scriptsDiscovered: this.scripts.length,
      },
      executionStats: this.executionStats,
      scripts: this.scripts.map(s => ({
        name: s.name,
        category: s.category,
        priority: s.priority,
        runCount: s.runCount,
        successCount: s.successCount,
        failureCount: s.failureCount,
        successRate: s.runCount > 0 ? ((s.successCount / s.runCount) * 100).toFixed(1) : 0,
        averageDuration: s.averageDuration,
        lastRun: s.lastRun,
      })),
      recommendations: this.generateRecommendations(),
    };
    
    const reportPath = path.join(CONFIG.reportsDir, `ultra-fast-runner-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    const latestPath = path.join(CONFIG.reportsDir, 'ultra-fast-runner-latest.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));
    
    await this.logger.success(`📊 Report saved: ${reportPath}`);
    return report;
  }
  
  generateRecommendations() {
    const recommendations = [];
    
    // Recommend scripts with high failure rate
    const failingScripts = this.scripts.filter(s => 
      s.runCount > 5 && (s.failureCount / s.runCount) > 0.3
    );
    
    if (failingScripts.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'review-failing-scripts',
        message: `${failingScripts.length} scripts have high failure rate`,
        scripts: failingScripts.map(s => s.name),
      });
    }
    
    // Recommend scripts that haven't run recently
    const staleScripts = this.scripts.filter(s => {
      if (!s.lastRun) return false;
      const daysSinceLastRun = (Date.now() - new Date(s.lastRun).getTime()) / (1000 * 60 * 60 * 24);
      return daysSinceLastRun > 7;
    });
    
    if (staleScripts.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'run-stale-scripts',
        message: `${staleScripts.length} scripts haven't run in 7+ days`,
        scripts: staleScripts.map(s => s.name),
      });
    }
    
    return recommendations;
  }
  
  async run() {
    await this.initialize();
    const result = await this.executeCycle();
    await this.generateReport();
    return result;
  }
  
  async runContinuously() {
    this.isRunning = true;
    
    // Initialize asynchronously (don't block)
    this.initialize().then(() => {
      this.logger.info('🚀 ULTRA-FAST continuous execution mode initialized');
      this.logger.info(`⚡ Running every ${CONFIG.intervalSeconds} second(s) for MAXIMUM SPEED`);
      this.logger.info(`🤖 Fully autonomous mode - auto-commit and auto-push enabled`);
      this.logger.info(`📊 Monitoring ${this.scripts.length} automation scripts`);
      this.logger.info(`⚡ Executing up to ${CONFIG.maxConcurrentScripts} scripts concurrently`);
    }).catch(err => {
      this.logger.error('Initialization error', { error: err.message });
    });
    
    // Start executing immediately without waiting for initialization
    let cycleCount = 0;
    
    // Execute immediately without waiting
    this.executeCycle().catch(() => {});
    
    while (this.isRunning) {
      try {
        cycleCount++;
        
        // Non-blocking log
        this.logger.info(`🔄 Cycle #${cycleCount}`).catch(() => {});
        
        // Execute cycle (don't await - run concurrently)
        this.executeCycle().catch(err => {
          this.logger.error('Cycle error', { error: err.message }).catch(() => {});
        });
        
        // Generate report every 50 cycles (async, non-blocking)
        if (cycleCount % 50 === 0) {
          this.generateReport().catch(() => {});
        }
        
        // Minimal wait time - 100ms minimum for system stability
        const waitMs = Math.max(
          CONFIG.intervalSeconds * 1000,
          100 // Minimum 100ms between cycles - MAXIMUM SPEED
        );
        
        await new Promise(resolve => setTimeout(resolve, waitMs));
      } catch (error) {
        // Quick retry on error - minimal wait
        await new Promise(resolve => setTimeout(resolve, 500)); // 500ms instead of 2s
      }
    }
  }
  
  stop() {
    this.isRunning = false;
    this.logger.info('🛑 Stopping continuous execution...');
  }
}

// CLI Interface
async function main() {
  const runner = new UltraFastRunner();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous'; // Default to continuous
  
  switch (command) {
    case 'run':
      await runner.run();
      break;
    
    case 'continuous':
    case 'start':
    case '':
      await runner.runContinuously();
      break;
    
    case 'discover':
      await runner.initialize();
      console.log(JSON.stringify(runner.scripts, null, 2));
      break;
    
    default:
      console.log(`
AI Ultra-Fast Runner - Autonomous Automation Script Executor

Usage:
  node ai-ultra-fast-runner.cjs [command]

Commands:
  run         Execute one cycle of all scripts
  continuous  Run continuously with periodic intervals (DEFAULT)
  start       Alias for continuous
  discover    Discover and list all automation scripts

Environment Variables:
  CONTINUOUS_MODE=true          Enable continuous mode (default: true)
  INTERVAL_SECONDS=30           Seconds between cycles (default: 30 - ULTRA-FAST)
  MAX_CONCURRENT_SCRIPTS=5      Max scripts to run concurrently (default: 5)
  EXECUTION_TIMEOUT=300000      Timeout per script in ms (default: 5 minutes)
  AUTO_COMMIT=true             Auto-commit changes (default: true)
  AUTO_PUSH=true               Auto-push to main (default: true)

Examples:
  node ai-ultra-fast-runner.cjs                    # Starts continuous mode
  node ai-ultra-fast-runner.cjs continuous         # Explicit continuous mode
  node ai-ultra-fast-runner.cjs run                # Single cycle
  INTERVAL_SECONDS=10 node ai-ultra-fast-runner.cjs  # Ultra-fast 10-second intervals
      `);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Run if executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { UltraFastRunner, CONFIG };


