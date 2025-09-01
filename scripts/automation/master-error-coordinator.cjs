#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting master error coordinator...');

// Configuration
const CONFIG = {
  // Error fixer scripts to coordinate
  errorFixers: [
    {
      name: 'enhanced-error-detection-fixer',
      script: './scripts/automation/enhanced-error-detection-fixer.cjs',
      priority: 1,
      interval: 900000, // 15 minutes
      enabled: true
    },
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      priority: 2,
      interval: 1200000, // 20 minutes
      enabled: true
    },
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      priority: 3,
      interval: 1500000, // 25 minutes
      enabled: true
    },
    {
      name: 'build-error-fixer',
      script: './scripts/automation/build-error-fixer.cjs',
      priority: 4,
      interval: 1800000, // 30 minutes
      enabled: true
    },
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      priority: 5,
      interval: 900000, // 15 minutes
      enabled: true
    },
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-fixer.cjs',
      priority: 6,
      interval: 3600000, // 1 hour
      enabled: true
    }
  ],
  
  // Error prevention monitors
  preventionMonitors: [
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      priority: 1,
      interval: 300000, // 5 minutes
      enabled: true
    }
  ],
  
  // Analytics and reporting
  analytics: [
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      priority: 1,
      interval: 7200000, // 2 hours
      enabled: true
    }
  ]
};

class MasterErrorCoordinator {
  constructor() {
    this.runningProcesses = new Map();
    this.errorStats = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      lastRun: null,
      uptime: Date.now()
    };
    this.coordinationLog = [];
  }

  async start() {
    console.log('🎯 Master error coordinator starting...');
    
    try {
      // Create logs directory
      this.ensureLogsDirectory();
      
      // Start all error fixers
      await this.startErrorFixers();
      
      // Start prevention monitors
      await this.startPreventionMonitors();
      
      // Start analytics
      await this.startAnalytics();
      
      // Start coordination loop
      this.startCoordinationLoop();
      
      console.log('✅ Master error coordinator started successfully');
      
    } catch (error) {
      console.error('❌ Master error coordinator failed to start:', error.message);
      process.exit(1);
    }
  }

  ensureLogsDirectory() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  async startErrorFixers() {
    console.log('🔧 Starting error fixers...');
    
    for (const fixer of CONFIG.errorFixers) {
      if (fixer.enabled) {
        await this.startProcess(fixer);
      }
    }
  }

  async startPreventionMonitors() {
    console.log('🛡️ Starting prevention monitors...');
    
    for (const monitor of CONFIG.preventionMonitors) {
      if (monitor.enabled) {
        await this.startProcess(monitor);
      }
    }
  }

  async startAnalytics() {
    console.log('📊 Starting analytics...');
    
    for (const analytic of CONFIG.analytics) {
      if (analytic.enabled) {
        await this.startProcess(analytic);
      }
    }
  }

  async startProcess(processConfig) {
    try {
      console.log(`🚀 Starting ${processConfig.name}...`);
      
      const scriptPath = path.resolve(process.cwd(), processConfig.script);
      
      if (!fs.existsSync(scriptPath)) {
        console.warn(`⚠️ Script not found: ${scriptPath}`);
        return;
      }

      // Run the process
      const result = await this.runProcess(processConfig);
      
      // Store process info
      this.runningProcesses.set(processConfig.name, {
        config: processConfig,
        lastRun: Date.now(),
        result: result,
        status: 'completed'
      });
      
      // Update error stats
      this.updateErrorStats(result);
      
      console.log(`✅ ${processConfig.name} completed successfully`);
      
    } catch (error) {
      console.error(`❌ ${processConfig.name} failed:`, error.message);
      
      this.runningProcesses.set(processConfig.name, {
        config: processConfig,
        lastRun: Date.now(),
        error: error.message,
        status: 'failed'
      });
    }
  }

  async runProcess(processConfig) {
    return new Promise((resolve, reject) => {
      const scriptPath = path.resolve(process.cwd(), processConfig.script);
      
      const child = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: {
          ...process.env,
          NODE_ENV: 'production',
          AUTOMATION_INTERVAL: processConfig.interval.toString()
        }
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({
            success: true,
            stdout: stdout,
            stderr: stderr,
            code: code
          });
        } else {
          reject(new Error(`Process exited with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        reject(error);
      });

      // Set timeout
      setTimeout(() => {
        child.kill();
        reject(new Error('Process timeout'));
      }, 300000); // 5 minutes timeout
    });
  }

  updateErrorStats(result) {
    this.errorStats.lastRun = Date.now();
    
    // Parse result for error statistics
    if (result.stdout) {
      const lines = result.stdout.split('\n');
      lines.forEach(line => {
        if (line.includes('errors fixed')) {
          const match = line.match(/(\d+)\/(\d+) errors fixed/);
          if (match) {
            this.errorStats.fixedErrors += parseInt(match[1]);
            this.errorStats.totalErrors += parseInt(match[2]);
          }
        }
      });
    }
  }

  startCoordinationLoop() {
    console.log('🔄 Starting coordination loop...');
    
    // Run coordination every 10 minutes
    setInterval(async () => {
      await this.coordinateProcesses();
    }, 600000); // 10 minutes
  }

  async coordinateProcesses() {
    console.log('🔄 Coordinating processes...');
    
    const now = Date.now();
    const coordination = {
      timestamp: now,
      processes: [],
      actions: []
    };

    // Check each process
    for (const [name, processInfo] of this.runningProcesses) {
      const { config, lastRun, status } = processInfo;
      const timeSinceLastRun = now - lastRun;
      
      coordination.processes.push({
        name: name,
        status: status,
        lastRun: lastRun,
        timeSinceLastRun: timeSinceLastRun,
        shouldRun: timeSinceLastRun >= config.interval
      });

      // Restart failed processes
      if (status === 'failed') {
        console.log(`🔄 Restarting failed process: ${name}`);
        coordination.actions.push(`Restarted failed process: ${name}`);
        await this.startProcess(config);
      }
      
      // Run processes that are due
      if (timeSinceLastRun >= config.interval) {
        console.log(`🔄 Running due process: ${name}`);
        coordination.actions.push(`Ran due process: ${name}`);
        await this.startProcess(config);
      }
    }

    // Log coordination
    this.coordinationLog.push(coordination);
    
    // Keep only last 100 coordination logs
    if (this.coordinationLog.length > 100) {
      this.coordinationLog = this.coordinationLog.slice(-100);
    }

    // Generate coordination report
    this.generateCoordinationReport();
  }

  generateCoordinationReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errorStats: this.errorStats,
      runningProcesses: Array.from(this.runningProcesses.entries()).map(([name, info]) => ({
        name: name,
        status: info.status,
        lastRun: info.lastRun,
        config: info.config
      })),
      recentCoordination: this.coordinationLog.slice(-10),
      summary: {
        totalProcesses: this.runningProcesses.size,
        activeProcesses: Array.from(this.runningProcesses.values()).filter(p => p.status === 'completed').length,
        failedProcesses: Array.from(this.runningProcesses.values()).filter(p => p.status === 'failed').length,
        uptime: Date.now() - this.errorStats.uptime
      }
    };

    const reportPath = path.join(process.cwd(), 'master-error-coordinator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Coordination report saved to: ${reportPath}`);
  }

  async stop() {
    console.log('🛑 Stopping master error coordinator...');
    
    // Stop all running processes
    for (const [name, processInfo] of this.runningProcesses) {
      console.log(`🛑 Stopping ${name}...`);
      // Note: In a real implementation, you'd want to properly terminate child processes
    }
    
    // Generate final report
    this.generateCoordinationReport();
    
    console.log('✅ Master error coordinator stopped');
  }
}

// Main execution
async function main() {
  const coordinator = new MasterErrorCoordinator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await coordinator.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await coordinator.stop();
    process.exit(0);
  });

  try {
    await coordinator.start();
  } catch (error) {
    console.error('❌ Master error coordinator failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { MasterErrorCoordinator, CONFIG };