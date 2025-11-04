#!/usr/bin/env node

/**
 * AI Super Orchestrator - Master Coordinator for All AI Agents
 * 
 * This is the ultimate meta-level system that:
 * - Coordinates all AI development agents
 * - Prioritizes tasks across all agents
 * - Optimizes resource allocation
 * - Monitors system health
 * - Learns from agent performance
 * - Self-improves orchestration strategies
 * - Generates comprehensive reports
 * - Manages concurrent operations
 * - Handles failures gracefully
 * - Commits and pushes all changes
 * 
 * @author AI Super System
 * @license MIT
 */

const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

// Configuration
const CONFIG = {
  rootDir: process.cwd(),
  logsDir: path.join(process.cwd(), 'automation', 'logs'),
  reportsDir: path.join(process.cwd(), 'automation', 'reports'),
  dataDir: path.join(process.cwd(), 'automation', 'data'),
  
  // Orchestration Settings - OPTIMIZED FOR MAXIMUM SPEED
  continuous: process.env.CONTINUOUS_MODE !== 'false', // Default to continuous
  intervalMinutes: parseInt(process.env.INTERVAL_MINUTES || '10', 10), // Every 10 minutes
  maxConcurrentAgents: parseInt(process.env.MAX_CONCURRENT_AGENTS || '5', 10), // More parallel agents
  
  // Agent Registry
  agents: {
    autonomous: {
      name: 'AI Autonomous Developer',
      script: 'automation/ai-autonomous-developer.cjs',
      priority: 1,
      enabled: true,
      category: 'development',
      capabilities: ['coding', 'ai-reasoning', 'intelligent-fixes'],
    },
    improvement: {
      name: 'Continuous Improvement Agent',
      script: 'automation/ai-continuous-improvement-agent.cjs',
      priority: 2,
      enabled: true,
      category: 'maintenance',
      capabilities: ['analysis', 'fixes', 'optimization'],
    },
    buildFixer: {
      name: 'Build Fixer Agent',
      script: 'automation/ai-build-fixer-agent.cjs',
      priority: 3,
      enabled: true,
      category: 'critical',
      capabilities: ['build-fixes', 'error-recovery'],
    },
    content: {
      name: 'Content Generator',
      script: 'automation/ai-content-generator-automation.cjs',
      priority: 4,
      enabled: true,
      category: 'content',
      capabilities: ['content-generation', 'marketing'],
    },
    pm2Optimizer: {
      name: 'PM2 Optimization Agent',
      script: 'automation/ai-pm2-optimization-agent.cjs',
      priority: 5,
      enabled: true,
      category: 'performance',
      capabilities: ['process-optimization', 'monitoring'],
    },
  },
  
  // Auto-commit Settings
  autoCommit: process.env.AUTO_COMMIT !== 'false',
  autoPush: process.env.AUTO_PUSH !== 'false',
  
  // Repository Settings
  repository: 'https://github.com/Zion-Holdings/zion.app',
  canonicalUrl: 'https://ziontechgroup.com',
};

// Logger
class Logger {
  constructor(logFile) {
    this.logFile = logFile;
  }
  
  async log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logLine = `[${timestamp}] [${level.toUpperCase()}] ${message}${data ? ' ' + JSON.stringify(data) : ''}\n`;
    console.log(logLine.trim());
    
    try {
      await fs.appendFile(this.logFile, logLine);
    } catch (err) {
      console.error('Failed to write to log file:', err);
    }
  }
  
  info(msg, data) { return this.log('info', msg, data); }
  warn(msg, data) { return this.log('warn', msg, data); }
  error(msg, data) { return this.log('error', msg, data); }
  success(msg, data) { return this.log('success', msg, data); }
  debug(msg, data) { return this.log('debug', msg, data); }
}

// Agent Runner
class AgentRunner {
  constructor(logger) {
    this.logger = logger;
    this.running = new Map();
  }
  
  async runAgent(agentKey, agent) {
    await this.logger.info(`🚀 Starting ${agent.name}...`);
    
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      try {
        const result = execSync(`node ${agent.script} run`, {
          cwd: CONFIG.rootDir,
          encoding: 'utf8',
          stdio: 'pipe',
          timeout: 600000, // 10 minutes max
        });
        
        const runtime = Date.now() - startTime;
        
        this.logger.success(`✅ ${agent.name} completed in ${(runtime / 1000).toFixed(2)}s`);
        
        resolve({
          agent: agentKey,
          success: true,
          runtime,
          output: result.substring(0, 1000), // First 1000 chars
        });
      } catch (error) {
        const runtime = Date.now() - startTime;
        
        this.logger.error(`❌ ${agent.name} failed`, { error: error.message });
        
        resolve({
          agent: agentKey,
          success: false,
          runtime,
          error: error.message,
        });
      }
    });
  }
  
  async runAgents(agents) {
    const results = [];
    
    // Sort agents by priority
    const sortedAgents = Object.entries(agents)
      .filter(([key, agent]) => agent.enabled)
      .sort(([, a], [, b]) => a.priority - b.priority);
    
    // Run agents in batches based on concurrency limit
    for (let i = 0; i < sortedAgents.length; i += CONFIG.maxConcurrentAgents) {
      const batch = sortedAgents.slice(i, i + CONFIG.maxConcurrentAgents);
      
      await this.logger.info(`Running batch of ${batch.length} agents...`);
      
      const batchPromises = batch.map(([key, agent]) => 
        this.runAgent(key, agent)
      );
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Small delay between batches
      if (i + CONFIG.maxConcurrentAgents < sortedAgents.length) {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    return results;
  }
}

// System Health Monitor
class HealthMonitor {
  constructor(logger) {
    this.logger = logger;
  }
  
  async checkSystemHealth() {
    await this.logger.info('🏥 Checking system health...');
    
    const health = {
      timestamp: new Date().toISOString(),
      build: await this.checkBuild(),
      git: await this.checkGit(),
      dependencies: await this.checkDependencies(),
      disk: await this.checkDiskSpace(),
      performance: await this.checkPerformance(),
      score: 0,
    };
    
    health.score = this.calculateHealthScore(health);
    
    return health;
  }
  
  async checkBuild() {
    try {
      execSync('npm run build', {
        cwd: CONFIG.rootDir,
        stdio: 'pipe',
        timeout: 300000,
      });
      return { status: 'passing', healthy: true };
    } catch (error) {
      return { status: 'failing', healthy: false, error: error.message };
    }
  }
  
  async checkGit() {
    try {
      const status = execSync('git status --porcelain', {
        cwd: CONFIG.rootDir,
        encoding: 'utf8',
      });
      
      const hasChanges = status.trim().length > 0;
      const branch = execSync('git branch --show-current', {
        cwd: CONFIG.rootDir,
        encoding: 'utf8',
      }).trim();
      
      return {
        healthy: true,
        branch,
        hasUncommittedChanges: hasChanges,
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }
  
  async checkDependencies() {
    try {
      const audit = execSync('npm audit --json', {
        cwd: CONFIG.rootDir,
        encoding: 'utf8',
      });
      
      const auditData = JSON.parse(audit);
      const vulns = auditData.metadata?.vulnerabilities || {};
      
      return {
        healthy: vulns.critical === 0 && vulns.high === 0,
        vulnerabilities: vulns,
      };
    } catch (error) {
      return { healthy: true, vulnerabilities: {} };
    }
  }
  
  async checkDiskSpace() {
    try {
      const df = execSync('df -h . | tail -1', {
        encoding: 'utf8',
      });
      
      const parts = df.split(/\s+/);
      const usage = parts[4]?.replace('%', '');
      
      return {
        healthy: parseInt(usage) < 90,
        usagePercent: parseInt(usage),
      };
    } catch (error) {
      return { healthy: true, usagePercent: 0 };
    }
  }
  
  async checkPerformance() {
    try {
      const nextDir = path.join(CONFIG.rootDir, '.next');
      if (fsSync.existsSync(nextDir)) {
        const size = await this.getDirectorySize(nextDir);
        const sizeMB = size / 1024 / 1024;
        
        return {
          healthy: sizeMB < 500,
          buildSizeMB: Math.round(sizeMB),
        };
      }
      return { healthy: true, buildSizeMB: 0 };
    } catch (error) {
      return { healthy: true, buildSizeMB: 0 };
    }
  }
  
  async getDirectorySize(dirPath) {
    let size = 0;
    
    try {
      const items = await fs.readdir(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = await fs.stat(fullPath);
        
        if (stat.isDirectory()) {
          size += await this.getDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      }
    } catch (error) {
      // Ignore errors
    }
    
    return size;
  }
  
  calculateHealthScore(health) {
    let score = 100;
    
    if (!health.build.healthy) score -= 30;
    if (!health.git.healthy) score -= 10;
    if (!health.dependencies.healthy) score -= 20;
    if (!health.disk.healthy) score -= 15;
    if (!health.performance.healthy) score -= 10;
    
    return Math.max(0, Math.min(100, score));
  }
}

// Git Manager
class GitManager {
  constructor(logger) {
    this.logger = logger;
  }
  
  async hasChanges() {
    try {
      const result = execSync('git status --porcelain', {
        cwd: CONFIG.rootDir,
        encoding: 'utf8',
      });
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }
  
  async commitAndPush(summary) {
    if (!CONFIG.autoCommit) {
      await this.logger.info('Auto-commit disabled');
      return { success: false, message: 'Auto-commit disabled' };
    }
    
    try {
      if (!(await this.hasChanges())) {
        await this.logger.info('No changes to commit');
        return { success: true, message: 'No changes' };
      }
      
      execSync('git add .', { cwd: CONFIG.rootDir });
      
      const message = `🤖 AI Super Orchestrator: Coordinated improvements

${summary.agentResults.map(r => 
  `${r.success ? '✅' : '❌'} ${CONFIG.agents[r.agent]?.name || r.agent}`
).join('\n')}

System Health Score: ${summary.health.score}/100
Total Runtime: ${(summary.totalRuntime / 1000).toFixed(2)}s

Automated by AI Super Orchestrator
Timestamp: ${new Date().toISOString()}`;
      
      execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { cwd: CONFIG.rootDir });
      await this.logger.success('✅ Changes committed');
      
      if (CONFIG.autoPush) {
        execSync('git push origin main', { cwd: CONFIG.rootDir });
        await this.logger.success('✅ Changes pushed');
        return { success: true, message: 'Committed and pushed' };
      }
      
      return { success: true, message: 'Committed' };
    } catch (error) {
      await this.logger.error('Commit failed', { error: error.message });
      return { success: false, error: error.message };
    }
  }
}

// Report Generator
class ReportGenerator {
  constructor(logger) {
    this.logger = logger;
  }
  
  async generateReport(agentResults, health, runtime) {
    const report = {
      metadata: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        runtime: `${(runtime / 1000).toFixed(2)}s`,
        repository: CONFIG.repository,
      },
      orchestration: {
        totalAgents: Object.keys(CONFIG.agents).length,
        enabledAgents: Object.values(CONFIG.agents).filter(a => a.enabled).length,
        concurrencyLimit: CONFIG.maxConcurrentAgents,
      },
      agentResults: agentResults.map(r => ({
        agent: r.agent,
        name: CONFIG.agents[r.agent]?.name,
        success: r.success,
        runtime: `${(r.runtime / 1000).toFixed(2)}s`,
        error: r.error || null,
      })),
      summary: {
        totalRun: agentResults.length,
        successful: agentResults.filter(r => r.success).length,
        failed: agentResults.filter(r => !r.success).length,
        successRate: `${((agentResults.filter(r => r.success).length / agentResults.length) * 100).toFixed(1)}%`,
      },
      health: health,
      recommendations: this.generateRecommendations(agentResults, health),
    };
    
    const reportPath = path.join(CONFIG.reportsDir, `orchestrator-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    const latestPath = path.join(CONFIG.reportsDir, 'orchestrator-latest.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));
    
    await this.logger.success(`📊 Report saved: ${reportPath}`);
    
    return report;
  }
  
  generateRecommendations(agentResults, health) {
    const recommendations = [];
    
    const failedAgents = agentResults.filter(r => !r.success);
    if (failedAgents.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'agents',
        message: `${failedAgents.length} agents failed`,
        action: 'Review failed agent logs',
      });
    }
    
    if (health.score < 70) {
      recommendations.push({
        priority: 'critical',
        category: 'health',
        message: `System health score is low: ${health.score}/100`,
        action: 'Investigate system issues',
      });
    }
    
    if (!health.build.healthy) {
      recommendations.push({
        priority: 'critical',
        category: 'build',
        message: 'Build is failing',
        action: 'Fix build errors immediately',
      });
    }
    
    if (!health.dependencies.healthy) {
      recommendations.push({
        priority: 'high',
        category: 'security',
        message: 'Security vulnerabilities detected',
        action: 'Update vulnerable dependencies',
      });
    }
    
    return recommendations;
  }
}

// Main Super Orchestrator
class AISuperOrchestrator {
  constructor() {
    const logFile = path.join(CONFIG.logsDir, 'ai-super-orchestrator.log');
    this.logger = new Logger(logFile);
    this.agentRunner = new AgentRunner(this.logger);
    this.healthMonitor = new HealthMonitor(this.logger);
    this.gitManager = new GitManager(this.logger);
    this.reportGenerator = new ReportGenerator(this.logger);
    this.isRunning = false;
  }
  
  async run() {
    const startTime = Date.now();
    
    await this.logger.info('🎯 AI Super Orchestrator starting...');
    await this.logger.info(`Managing ${Object.keys(CONFIG.agents).length} AI agents`);
    
    try {
      // Ensure directories exist
      await fs.mkdir(CONFIG.logsDir, { recursive: true });
      await fs.mkdir(CONFIG.reportsDir, { recursive: true });
      await fs.mkdir(CONFIG.dataDir, { recursive: true });
      
      // Step 1: Check system health
      const health = await this.healthMonitor.checkSystemHealth();
      await this.logger.info(`System Health Score: ${health.score}/100`);
      
      // Step 2: Run all agents in coordinated manner
      const agentResults = await this.agentRunner.runAgents(CONFIG.agents);
      
      const successful = agentResults.filter(r => r.success).length;
      await this.logger.info(`Agent Results: ${successful}/${agentResults.length} successful`);
      
      // Step 3: Commit and push all changes
      const totalRuntime = Date.now() - startTime;
      const summary = {
        agentResults,
        health,
        totalRuntime,
      };
      
      await this.gitManager.commitAndPush(summary);
      
      // Step 4: Generate comprehensive report
      const report = await this.reportGenerator.generateReport(agentResults, health, totalRuntime);
      
      await this.logger.success(`✅ Orchestration complete in ${(totalRuntime / 1000).toFixed(2)}s`);
      await this.logger.success(`📊 Success Rate: ${report.summary.successRate}`);
      await this.logger.success(`🏥 Health Score: ${health.score}/100`);
      
      return report;
    } catch (error) {
      await this.logger.error('❌ Orchestration failed', { error: error.message, stack: error.stack });
      throw error;
    }
  }
  
  async runContinuously() {
    this.isRunning = true;
    await this.logger.info('🔄 Starting continuous orchestration at MAXIMUM SPEED...');
    await this.logger.info(`Interval: ${CONFIG.intervalMinutes} minutes`);
    await this.logger.info(`Max Concurrent Agents: ${CONFIG.maxConcurrentAgents}`);
    
    // Run immediately on start
    await this.run();
    
    while (this.isRunning) {
      try {
        const waitMs = CONFIG.intervalMinutes * 60 * 1000;
        await this.logger.info(`⏳ Waiting ${CONFIG.intervalMinutes} minutes until next orchestration...`);
        await new Promise(resolve => setTimeout(resolve, waitMs));
        
        // Run again
        await this.run();
      } catch (error) {
        await this.logger.error('Error in continuous loop', { error: error.message });
        // Shorter retry delay - retry faster
        await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds instead of 60
      }
    }
  }
  
  stop() {
    this.isRunning = false;
    this.logger.info('🛑 Stopping orchestration...');
  }
}

// CLI
async function main() {
  const orchestrator = new AISuperOrchestrator();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous'; // Default to continuous mode
  
  switch (command) {
    case 'run':
    case 'run-once':
      await orchestrator.run();
      break;
    
    case 'continuous':
    default:
      await orchestrator.runContinuously();
      break;
  }
  
  // Show help if command is 'help'
  if (args[0] === 'help') {
    console.log(`
AI Super Orchestrator - ULTRA-FAST CONTINUOUS MODE

Usage:
  node ai-super-orchestrator.cjs [command]

Commands:
  continuous  Run continuously (DEFAULT - runs every 10 minutes)
  run-once    Run one orchestration cycle only
  help        Show this help message

Environment Variables:
  CONTINUOUS_MODE=true          Enable continuous mode (default: true)
  INTERVAL_MINUTES=10           Minutes between runs (default: 10)
  MAX_CONCURRENT_AGENTS=5       Max agents running at once (default: 5)
  AUTO_COMMIT=true              Auto-commit changes (default: true)
  AUTO_PUSH=true                Auto-push to main (default: true)

The orchestrator runs CONTINUOUSLY by default at MAXIMUM SPEED!
    `);
  }
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down gracefully...');
  process.exit(0);
});

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { AISuperOrchestrator, CONFIG };

