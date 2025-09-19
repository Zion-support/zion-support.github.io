#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/master-orchestrator.log');
    this.statusFile = path.join(this.projectRoot, 'logs/pm2/orchestrator-status.json');
    this.startTime = Date.now();
    this.status = {
      timestamp: new Date().toISOString(),
      status: 'starting',
      processes: {},
      health: 'unknown',
      lastUpdate: null
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async startPM2Ecosystem() {
    this.log('🚀 Starting PM2 ecosystem...');
    
    try {
      // Stop any existing PM2 processes
      try {
        execSync('pm2 stop all', { stdio: 'pipe' });
        execSync('pm2 delete all', { stdio: 'pipe' });
      } catch (error) {
        // Ignore errors if no processes are running
      }

      // Start the ecosystem
      execSync('pm2 start ecosystem.config.js', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.log('✅ PM2 ecosystem started successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to start PM2 ecosystem: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkProcessHealth() {
    this.log('🔍 Checking process health...');
    
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);

      this.status.processes = {};
      let healthyProcesses = 0;
      let totalProcesses = processes.length;

      processes.forEach(proc => {
        const isHealthy = proc.pm2_env.status === 'online';
        if (isHealthy) healthyProcesses++;

        this.status.processes[proc.name] = {
          status: proc.pm2_env.status,
          cpu: proc.monit.cpu,
          memory: proc.monit.memory,
          uptime: proc.pm2_env.uptime,
          restarts: proc.pm2_env.restart_time,
          healthy: isHealthy
        };
      });

      this.status.health = healthyProcesses === totalProcesses ? 'healthy' : 
                          healthyProcesses > totalProcesses / 2 ? 'degraded' : 'unhealthy';
      this.status.lastUpdate = new Date().toISOString();

      this.log(`📊 Health check completed - ${healthyProcesses}/${totalProcesses} processes healthy`);
      return this.status.health;
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
      this.status.health = 'error';
      return 'error';
    }
  }

  async restartUnhealthyProcesses() {
    this.log('🔄 Restarting unhealthy processes...');
    
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);

      let restartedCount = 0;
      processes.forEach(proc => {
        if (proc.pm2_env.status !== 'online') {
          try {
            execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
            restartedCount++;
            this.log(`🔄 Restarted process: ${proc.name}`);
          } catch (error) {
            this.log(`❌ Failed to restart ${proc.name}: ${error.message}`, 'ERROR');
          }
        }
      });

      this.log(`✅ Restarted ${restartedCount} unhealthy processes`);
      return restartedCount;
    } catch (error) {
      this.log(`❌ Failed to restart processes: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  async runMaintenanceTasks() {
    this.log('🔧 Running maintenance tasks...');
    
    try {
      const tasks = [];

      // Clean up old logs
      try {
        execSync('find logs -name "*.log" -mtime +7 -delete', { stdio: 'pipe' });
        tasks.push('Cleaned up old logs');
      } catch (error) {
        tasks.push('Log cleanup failed');
      }

      // Update dependencies if needed
      try {
        const outdated = execSync('npm outdated --json', { 
          encoding: 'utf8', 
          stdio: 'pipe' 
        });
        const outdatedPackages = JSON.parse(outdated);
        if (Object.keys(outdatedPackages).length > 0) {
          tasks.push(`Found ${Object.keys(outdatedPackages).length} outdated packages`);
        }
      } catch (error) {
        // No outdated packages
      }

      // Check disk space
      try {
        const diskUsage = execSync('df -h .', { encoding: 'utf8' });
        const usage = diskUsage.split('\n')[1].split(/\s+/)[4];
        tasks.push(`Disk usage: ${usage}`);
      } catch (error) {
        tasks.push('Could not check disk usage');
      }

      this.log(`🔧 Maintenance completed - ${tasks.length} tasks`);
      return tasks;
    } catch (error) {
      this.log(`❌ Maintenance failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async generateReport() {
    this.log('📊 Generating orchestrator report...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        status: this.status,
        uptime: Date.now() - this.startTime,
        recommendations: this.generateRecommendations()
      };

      // Save report
      fs.writeFileSync(this.statusFile, JSON.stringify(report, null, 2));
      this.log(`📊 Report saved: ${this.statusFile}`);
      
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  generateRecommendations() {
    const recommendations = [];
    const processes = this.status.processes;
    const health = this.status.health;

    if (health === 'unhealthy') {
      recommendations.push({
        priority: 'critical',
        message: 'System health is unhealthy',
        action: 'Check process logs and restart failed processes'
      });
    }

    if (health === 'degraded') {
      recommendations.push({
        priority: 'high',
        message: 'System health is degraded',
        action: 'Monitor processes and consider restarting problematic ones'
      });
    }

    // Check for processes with high resource usage
    Object.entries(processes).forEach(([name, proc]) => {
      if (proc.cpu > 80) {
        recommendations.push({
          priority: 'medium',
          message: `High CPU usage in ${name}: ${proc.cpu}%`,
          action: 'Investigate and optimize process performance'
        });
      }

      if (proc.memory > 100 * 1024 * 1024) { // > 100MB
        recommendations.push({
          priority: 'medium',
          message: `High memory usage in ${name}: ${Math.round(proc.memory / 1024 / 1024)}MB`,
          action: 'Check for memory leaks and optimize memory usage'
        });
      }

      if (proc.restarts > 5) {
        recommendations.push({
          priority: 'high',
          message: `Frequent restarts in ${name}: ${proc.restarts} times`,
          action: 'Investigate root cause of process crashes'
        });
      }
    });

    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        message: 'System operating normally',
        action: 'Continue monitoring'
      });
    }

    return recommendations;
  }

  displayStatus() {
    console.log('\n🎯 MASTER ORCHESTRATOR STATUS');
    console.log('==============================');
    
    const health = this.status.health;
    const processes = this.status.processes;
    const uptime = Math.floor((Date.now() - this.startTime) / 1000);

    console.log(`📊 Overall Health: ${health.toUpperCase()}`);
    console.log(`⏱️ Uptime: ${Math.floor(uptime / 60)} minutes`);
    console.log(`📱 Processes: ${Object.keys(processes).length}`);
    
    console.log('\n🔧 Process Status:');
    Object.entries(processes).forEach(([name, proc]) => {
      const status = proc.healthy ? '✅' : '❌';
      console.log(`  ${status} ${name}: ${proc.status} (CPU: ${proc.cpu}%, Memory: ${Math.round(proc.memory / 1024 / 1024)}MB)`);
    });

    const recommendations = this.generateRecommendations();
    if (recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
        console.log(`     → ${rec.action}`);
      });
    }

    console.log(`\n📄 Status saved to: ${this.statusFile}`);
  }

  async run() {
    this.log('🚀 Starting Master Orchestrator...');
    
    try {
      this.status.status = 'running';
      
      // Start PM2 ecosystem
      const ecosystemStarted = await this.startPM2Ecosystem();
      if (!ecosystemStarted) {
        throw new Error('Failed to start PM2 ecosystem');
      }

      // Wait a moment for processes to start
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Check process health
      const health = await this.checkProcessHealth();
      
      // Restart unhealthy processes if needed
      if (health !== 'healthy') {
        await this.restartUnhealthyProcesses();
      }

      // Run maintenance tasks
      await this.runMaintenanceTasks();

      // Generate report
      await this.generateReport();

      // Update status
      this.status.status = 'completed';
      
      // Display status
      this.displayStatus();
      
      this.log('✅ Master Orchestrator completed successfully');
    } catch (error) {
      this.log(`❌ Master Orchestrator failed: ${error.message}`, 'ERROR');
      this.status.status = 'failed';
      await this.generateReport();
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  orchestrator.run();
}

module.exports = MasterOrchestrator;