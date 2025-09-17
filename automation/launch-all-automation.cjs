#!/usr/bin/env node
<<<<<<< HEAD

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutomationLauncher {
  constructor() {
    this.processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'automation-launcher.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startSystem(name, scriptPath, options = {}) {
    try {
      this.log(`🚀 Starting ${name}...`);
      
      const process = spawn('node', [scriptPath], {
        stdio: 'pipe',
        detached: false,
        ...options
      });

      process.stdout.on('data', (data) => {
        this.log(`[${name}] ${data.toString().trim()}`);
      });

      process.stderr.on('data', (data) => {
        this.log(`[${name}] ERROR: ${data.toString().trim()}`);
      });

      process.on('close', (code) => {
        this.log(`[${name}] Process exited with code ${code}`);
        this.processes.delete(name);
      });

      process.on('error', (error) => {
        this.log(`[${name}] Process error: ${error.message}`);
        this.processes.delete(name);
      });

      this.processes.set(name, process);
      this.log(`✅ ${name} started successfully`);
      
      return process;
    } catch (error) {
      this.log(`❌ Failed to start ${name}: ${error.message}`);
      return null;
=======
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensiveAutomationLauncher {
  constructor() {
    this.config = {
      systems: [
        {
          name: "Ultimate Redundancy System",
          command: "bash",
          args: ["automation/start-ultimate-redundancy.sh", "start"],
          type: "bash"
        },
        {
          name: "PM2 Comprehensive Redundancy",
          command: "pm2",
          args: ["start", "ecosystem.comprehensive-redundancy.cjs", "--update-env"],
          type: "pm2"
        },
        {
          name: "Master Automation Orchestrator",
          command: "node",
          args: ["automation/master-automation-orchestrator.cjs", "monitor"],
          type: "node"
        }
      ],
      monitoring: {
        enabled: true,
        healthCheckInterval: 30000,
        autoRecovery: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.initializeSystem();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `comprehensive-launcher-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error
      });
    });
  }

  async startSystem(system) {
    this.log(`🚀 Starting ${system.name}...`);
    
    try {
      const result = await this.runCommand(system.command, system.args);
      
      if (result.status === 0) {
        this.log(`✅ ${system.name} started successfully`);
        return true;
      } else {
        this.log(`❌ Failed to start ${system.name}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ${system.name}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopSystem(system) {
    this.log(`🛑 Stopping ${system.name}...`);
    
    try {
      let result;
      
      if (system.type === "pm2") {
        result = await this.runCommand("pm2", ["stop", "all"]);
        await this.runCommand("pm2", ["delete", "all"]);
      } else if (system.type === "bash") {
        result = await this.runCommand("bash", ["automation/start-ultimate-redundancy.sh", "stop"]);
      } else {
        // For node processes, we'll need to find and kill them
        result = { status: 0 };
      }
      
      if (result.status === 0) {
        this.log(`✅ ${system.name} stopped successfully`);
        return true;
      } else {
        this.log(`⚠️ ${system.name} may not have stopped cleanly`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error stopping ${system.name}: ${error.message}`, "ERROR");
      return false;
>>>>>>> origin/auto/autonomy-17186719616
    }
  }

  async startAllSystems() {
<<<<<<< HEAD
    this.log('🚀 Starting all automation systems...');
    
    const systems = [
      { name: 'intelligent-orchestrator', script: 'intelligent-orchestrator.cjs', args: ['continuous'] },
      { name: 'automation-dashboard', script: 'automation-dashboard.cjs', args: ['start'] },
      { name: 'lint-monitor', script: 'lint-monitor.cjs', args: ['start'] },
      { name: 'code-quality', script: 'code-quality-monitor.cjs' },
      { name: 'performance', script: 'performance-optimizer.cjs' },
      { name: 'security-scanner', script: 'security-scanner.cjs' },
      { name: 'seo-optimizer', script: 'seo-optimizer.cjs' },
      { name: 'test-generator', script: 'test-generator.cjs' }
    ];

    for (const system of systems) {
      const scriptPath = path.join(__dirname, system.script);
      if (fs.existsSync(scriptPath)) {
        await this.startSystem(system.name, scriptPath, {
          args: system.args || []
        });
        
        // Add delay between starts
        await this.sleep(2000);
      } else {
        this.log(`⚠️ Script not found: ${system.script}`);
      }
    }

    this.log(`📊 Started ${this.processes.size} automation systems`);
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all automation systems...');
    
    for (const [name, process] of this.processes) {
      this.log(`🛑 Stopping ${name}...`);
      process.kill('SIGTERM');
    }
    
    this.processes.clear();
    this.log('✅ All systems stopped');
  }

  getStatus() {
    const status = {
      running: this.processes.size,
      systems: Array.from(this.processes.keys()),
      totalSystems: this.processes.size
    };
    
    this.log(`📊 Status: ${status.running} systems running`);
    this.log(`📊 Systems: ${status.systems.join(', ')}`);
    
    return status;
  }

  async restartSystem(name) {
    const process = this.processes.get(name);
    if (process) {
      this.log(`🔄 Restarting ${name}...`);
      process.kill('SIGTERM');
      await this.sleep(1000);
    }
    
    const scriptPath = path.join(__dirname, `${name}.cjs`);
    if (fs.existsSync(scriptPath)) {
      await this.startSystem(name, scriptPath);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      runningSystems: Array.from(this.processes.keys()),
      totalSystems: this.processes.size,
      uptime: this.getUptime()
    };

    const reportPath = path.join(__dirname, 'logs', 'automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  getUptime() {
    // Simple uptime calculation
    return Date.now() - this.startTime;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async monitor() {
    this.log('👀 Starting automation monitoring...');
    
    setInterval(() => {
      this.log(`📊 Monitoring: ${this.processes.size} systems running`);
      
      for (const [name, process] of this.processes) {
        if (process.killed) {
          this.log(`⚠️ ${name} has stopped, restarting...`);
          this.restartSystem(name);
        }
      }
    }, 30000); // Check every 30 seconds
  }
}

// CLI handling
const launcher = new AutomationLauncher();
const command = process.argv[2];

switch (command) {
  case 'start':
    launcher.startAllSystems();
    break;
  case 'stop':
    launcher.stopAllSystems();
    process.exit(0);
    break;
  case 'status':
    launcher.getStatus();
    process.exit(0);
    break;
  case 'restart':
    const systemName = process.argv[3];
    if (systemName) {
      launcher.restartSystem(systemName);
    } else {
      console.log('Usage: node launch-all-automation.cjs restart <system-name>');
    }
    break;
  case 'report':
    launcher.generateReport();
    process.exit(0);
    break;
  case 'monitor':
    launcher.monitor();
    break;
  default:
    console.log('Usage: node launch-all-automation.cjs [start|stop|status|restart|report|monitor] [system-name]');
    console.log('\nCommands:');
    console.log('  start     - Start all automation systems');
    console.log('  stop      - Stop all automation systems');
    console.log('  status    - Show current status');
    console.log('  restart   - Restart a specific system');
    console.log('  report    - Generate automation report');
    console.log('  monitor   - Start monitoring mode');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});
=======
    this.log("🚀 Starting all automation systems...");
    
    // Seed known long-running or important jobs
    const seedSystems = [
      { name: 'intelligent-orchestrator', script: 'intelligent-orchestrator.cjs', args: ['continuous'] },
      { name: 'automation-dashboard', script: 'automation-dashboard.cjs', args: ['start'] },
      { name: 'lint-monitor', script: 'lint-monitor.cjs', args: ['start'] },
      { name: 'self-healing', script: 'self-healing-orchestrator.cjs', args: [] },
      { name: 'alignment-orchestrator', script: 'alignment-orchestrator.cjs', args: ['continuous'] },
      { name: 'design-orchestrator', script: 'design-orchestrator.cjs', args: ['continuous'] },
      { name: 'diversification-orchestrator', script: 'diversification-orchestrator.cjs', args: [] },
      { name: 'responsive-content-orchestrator', script: 'responsive-content-orchestrator.cjs', args: ['continuous'] },
      { name: 'variation-orchestrator', script: 'variation-orchestrator.cjs', args: ['continuous'] },
      { name: 'frontend-sync-orchestrator', script: 'frontend-sync-orchestrator.cjs', args: ['continuous'] },
      { name: 'saas-services-orchestrator', script: 'saas-services-orchestrator.cjs', args: ['continuous'] },
      { name: 'homepage-promo-orchestrator', script: 'homepage-promo-orchestrator.cjs', args: ['continuous'] },
      { name: 'linkedin-marketing-orchestrator', script: 'linkedin-marketing-orchestrator.cjs', args: ['continuous'] },
      { name: 'cursor-chat-orchestrator', script: 'cursor-chat-orchestrator.cjs', args: ['continuous'] },
      { name: 'site-link-orchestrator', script: 'site-link-orchestrator.cjs', args: ['continuous'] },
      { name: 'site-promo-orchestrator', script: 'site-promo-orchestrator.cjs', args: ['continuous'] },
      { name: 'spec-dev-orchestrator', script: 'spec-dev-orchestrator.cjs', args: ['continuous'] },
      { name: 'linkedin-pro-orchestrator', script: 'linkedin-pro-orchestrator.cjs', args: ['continuous'] },
      { name: 'code-quality', script: 'code-quality-monitor.cjs', args: [] },
      { name: 'performance', script: 'performance-optimizer.cjs', args: [] },
      { name: 'security-scanner', script: 'security-scanner.cjs', args: [] },
      { name: 'seo-optimizer', script: 'seo-optimizer.cjs', args: [] },
      { name: 'test-generator', script: 'test-generator.cjs', args: [] },
      { name: 'app-intelligence', script: 'app-intelligence-enhancer.cjs', args: ['continuous'] }
    ];
    
    for (const system of this.config.systems) {
      const success = await this.startSystem(system);
      results.push({ system: system.name, success });
      
      // Wait a moment between starts
      if (success) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    const successfulStarts = results.filter(r => r.success).length;
    const totalSystems = this.config.systems.length;
    
    this.log(`📊 System startup complete: ${successfulStarts}/${totalSystems} systems started successfully`);
    
    if (successfulStarts === totalSystems) {
      this.log("🎉 All automation systems are now running!");
      
      // Save PM2 configuration if PM2 was used
      if (results.some(r => r.system.includes("PM2"))) {
        await this.runCommand("pm2", ["save"]);
        this.log("💾 PM2 configuration saved");
      }
    } else {
      this.log("⚠️ Some systems failed to start", "WARN");
      results.forEach(result => {
        if (!result.success) {
          this.log(`❌ Failed: ${result.system}`, "ERROR");
        }
      });
    }
    
    return successfulStarts === totalSystems;
  }

  async stopAllSystems() {
    this.log("🛑 Stopping all automation systems...");
    
    const results = [];
    
    for (const system of this.config.systems) {
      const success = await this.stopSystem(system);
      results.push({ system: system.name, success });
      
      // Wait a moment between stops
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    const successfulStops = results.filter(r => r.success).length;
    const totalSystems = this.config.systems.length;
    
    this.log(`📊 System shutdown complete: ${successfulStops}/${totalSystems} systems stopped successfully`);
    
    return successfulStops === totalSystems;
  }

  async restartAllSystems() {
    this.log("🔄 Restarting all automation systems...");
    
    await this.stopAllSystems();
    
    // Wait before restarting
    this.log("⏳ Waiting 5 seconds before restarting...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    await this.startAllSystems();
  }

  async checkSystemHealth() {
    this.log("🔍 Checking system health...");
    
    try {
      // Check PM2 status
      const pm2Result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      const pm2Healthy = pm2Result.status === 0;
      
      // Check ultimate redundancy system
      const redundancyResult = await this.runCommand("bash", ["automation/start-ultimate-redundancy.sh", "status"]);
      const redundancyHealthy = redundancyResult.status === 0;
      
      // Check master orchestrator
      const orchestratorResult = await this.runCommand("node", ["automation/master-automation-orchestrator.cjs", "status"]);
      const orchestratorHealthy = orchestratorResult.status === 0;
      
      const overallHealth = pm2Healthy && redundancyHealthy && orchestratorHealthy;
      
      this.log(`📊 System Health Status:`);
      this.log(`  PM2: ${pm2Healthy ? '✅' : '❌'}`);
      this.log(`  Ultimate Redundancy: ${redundancyHealthy ? '✅' : '❌'}`);
      this.log(`  Master Orchestrator: ${orchestratorHealthy ? '✅' : '❌'}`);
      this.log(`  Overall: ${overallHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
      
      return overallHealth;
    } catch (error) {
      this.log(`❌ Health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performSystemRecovery() {
    this.log("🔄 Performing system recovery...");
    
    try {
      // Stop all systems
      await this.stopAllSystems();
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Start all systems
      await this.startAllSystems();
      
      // Perform health check
      const health = await this.checkSystemHealth();
      
      if (health) {
        this.log("✅ System recovery completed successfully");
        return true;
      } else {
        this.log("⚠️ System recovery completed but health check failed", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ System recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getSystemStatus() {
    return {
      timestamp: new Date().toISOString(),
      systems: this.config.systems.map(system => ({
        name: system.name,
        type: system.type,
        command: system.command,
        args: system.args
      })),
      monitoring: this.config.monitoring,
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
  }

  initializeSystem() {
    this.log("🔧 Initializing Comprehensive Automation Launcher...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("🛑 Shutting down comprehensive automation launcher...");
      this.stopAllSystems().then(() => {
        process.exit(0);
      });
    });
    
    process.on('SIGTERM', () => {
      this.log("🛑 Shutting down comprehensive automation launcher...");
      this.stopAllSystems().then(() => {
        process.exit(0);
      });
    });
    
    // Set up error handling
    process.on('uncaughtException', (error) => {
      this.log(`❌ Uncaught exception: ${error.message}`, "ERROR");
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log(`❌ Unhandled rejection at: ${promise}, reason: ${reason}`, "ERROR");
    });
  }

  startMonitoring() {
    this.log("🚀 Starting comprehensive automation monitoring...");
    
    // Initial health check
    this.checkSystemHealth();
    
    // Set up periodic health checks
    setInterval(() => {
      this.checkSystemHealth();
    }, this.config.monitoring.healthCheckInterval);
    
    this.log("✅ Comprehensive automation monitoring started");
  }
}

// Main execution
if (require.main === module) {
  const launcher = new ComprehensiveAutomationLauncher();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('start')) {
    launcher.startAllSystems().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('stop')) {
    launcher.stopAllSystems().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('restart')) {
    launcher.restartAllSystems().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('status')) {
    const status = launcher.getSystemStatus();
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
  } else if (args.includes('health-check')) {
    launcher.checkSystemHealth().then(health => {
      process.exit(health ? 0 : 1);
    });
  } else if (args.includes('recover')) {
    launcher.performSystemRecovery().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('monitor')) {
    launcher.startMonitoring();
  } else {
    // Default: show help
    console.log("🚀 Comprehensive Automation Launcher");
    console.log("Usage: node automation/launch-all-automation.cjs {start|stop|restart|status|health-check|recover|monitor}");
    console.log("");
    console.log("Commands:");
    console.log("  start         Start all automation systems");
    console.log("  stop          Stop all automation systems");
    console.log("  restart       Restart all automation systems");
    console.log("  status        Show system status");
    console.log("  health-check  Perform system health check");
    console.log("  recover       Perform system recovery");
    console.log("  monitor       Start continuous monitoring");
    console.log("");
    console.log("This launcher manages:");
    console.log("  • Ultimate Redundancy System");
    console.log("  • PM2 Comprehensive Redundancy");
    console.log("  • Master Automation Orchestrator");
  }
}

module.exports = ComprehensiveAutomationLauncher;
>>>>>>> origin/auto/autonomy-17186719616
