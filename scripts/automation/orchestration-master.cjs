#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class OrchestrationMaster {
  constructor() {
    this.config = {
      interval: process.env.AUTOMATION_INTERVAL || 60000, // 1 minute
      maxMemory: process.env.MAX_MEMORY || 256,
      orchestrationEnabled: process.env.ORCHESTRATION_ENABLED === 'true',
      processCoordination: process.env.PROCESS_COORDINATION === 'true',
      resourceOptimization: process.env.RESOURCE_OPTIMIZATION === 'true',
      intelligentScheduling: process.env.INTELLIGENT_SCHEDULING === 'true',
      logFile: path.join(process.cwd(), 'logs', 'orchestration-master.log'),
      automationProcesses: [
        'console-error-fixer',
        'intelligent-link-validator',
        'ai-code-optimizer',
        'performance-intelligence',
        'security-intelligence',
        'continuous-improvement-engine',
        'dependency-intelligence',
        'quality-intelligence',
        'seo-intelligence',
        'build-intelligence'
      ]
    };
    
    this.stats = {
      processesMonitored: 0,
      processesCoordinated: 0,
      resourceOptimizations: 0,
      intelligentDecisions: 0,
      lastRun: null,
      totalRuns: 0,
      processHealth: {},
      resourceUsage: {},
      coordinationHistory: []
    };
    
    this.log('🚀 Orchestration Master started');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.config.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async monitorProcesses() {
    this.log('📊 Monitoring automation processes...');
    
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      const automationProcesses = processes.filter(proc => 
        this.config.automationProcesses.includes(proc.name)
      );
      
      this.stats.processesMonitored = automationProcesses.length;
      
      // Update process health
      for (const proc of automationProcesses) {
        this.stats.processHealth[proc.name] = {
          status: proc.pm2_env.status,
          memory: proc.monit.memory,
          cpu: proc.monit.cpu,
          uptime: proc.pm2_env.pm_uptime,
          restarts: proc.pm2_env.restart_time,
          lastUpdate: new Date().toISOString()
        };
      }
      
      this.log(`📊 Monitoring ${automationProcesses.length} automation processes`);
      
      return automationProcesses;
    } catch (error) {
      this.log(`❌ Process monitoring failed: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async analyzeResourceUsage() {
    this.log('💾 Analyzing resource usage...');
    
    try {
      const processes = await this.monitorProcesses();
      
      const resourceUsage = {
        totalMemory: 0,
        totalCPU: 0,
        processCount: processes.length,
        healthyProcesses: 0,
        warningProcesses: 0,
        criticalProcesses: 0
      };
      
      for (const proc of processes) {
        const memoryMB = proc.monit.memory / 1024 / 1024;
        const cpuPercent = proc.monit.cpu;
        
        resourceUsage.totalMemory += memoryMB;
        resourceUsage.totalCPU += cpuPercent;
        
        // Categorize process health
        if (proc.pm2_env.status === 'online' && memoryMB < 100 && cpuPercent < 5) {
          resourceUsage.healthyProcesses++;
        } else if (memoryMB > 200 || cpuPercent > 10) {
          resourceUsage.criticalProcesses++;
        } else {
          resourceUsage.warningProcesses++;
        }
      }
      
      this.stats.resourceUsage = resourceUsage;
      
      this.log(`💾 Resource analysis: ${resourceUsage.totalMemory.toFixed(2)}MB total, ${resourceUsage.totalCPU.toFixed(2)}% CPU, ${resourceUsage.healthyProcesses} healthy`);
      
      return resourceUsage;
    } catch (error) {
      this.log(`❌ Resource analysis failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async coordinateProcesses(processes, resourceUsage) {
    if (!this.config.processCoordination) {
      this.log('⚠️  Process coordination is disabled');
      return;
    }
    
    this.log('🔄 Coordinating automation processes...');
    
    try {
      const coordinationActions = [];
      
      // Check for failed processes and restart them
      const failedProcesses = processes.filter(proc => 
        proc.pm2_env.status === 'errored' || proc.pm2_env.status === 'stopped'
      );
      
      for (const proc of failedProcesses) {
        this.log(`🔄 Restarting failed process: ${proc.name}`);
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        coordinationActions.push(`restarted ${proc.name}`);
      }
      
      // Check for high resource usage and optimize
      if (resourceUsage.totalMemory > 1000) { // > 1GB
        await this.optimizeResourceUsage(processes);
        coordinationActions.push('optimized resource usage');
      }
      
      // Check for process conflicts and resolve them
      const conflicts = this.detectProcessConflicts(processes);
      if (conflicts.length > 0) {
        await this.resolveProcessConflicts(conflicts);
        coordinationActions.push('resolved process conflicts');
      }
      
      // Intelligent scheduling based on resource usage
      if (this.config.intelligentScheduling) {
        await this.intelligentScheduling(processes, resourceUsage);
        coordinationActions.push('applied intelligent scheduling');
      }
      
      this.stats.processesCoordinated += coordinationActions.length;
      
      // Record coordination action
      this.stats.coordinationHistory.push({
        timestamp: new Date().toISOString(),
        actions: coordinationActions,
        resourceUsage,
        processCount: processes.length
      });
      
      // Keep only last 100 entries
      if (this.stats.coordinationHistory.length > 100) {
        this.stats.coordinationHistory = this.stats.coordinationHistory.slice(-100);
      }
      
      this.log(`🔄 Process coordination completed. Actions: ${coordinationActions.join(', ')}`);
      
    } catch (error) {
      this.log(`❌ Process coordination failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeResourceUsage(processes) {
    this.log('🔧 Optimizing resource usage...');
    
    try {
      // Identify high-memory processes
      const highMemoryProcesses = processes.filter(proc => 
        proc.monit.memory > 200 * 1024 * 1024 // > 200MB
      );
      
      for (const proc of highMemoryProcesses) {
        this.log(`🔧 Optimizing memory usage for ${proc.name}`);
        
        // Restart process to free memory
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        
        // Wait a bit for restart
        await this.sleep(2000);
      }
      
      this.stats.resourceOptimizations++;
      this.log('🔧 Resource optimization completed');
      
    } catch (error) {
      this.log(`❌ Resource optimization failed: ${error.message}`, 'ERROR');
    }
  }

  detectProcessConflicts(processes) {
    const conflicts = [];
    
    // Check for processes that might conflict
    const processGroups = {
      'build': ['build-intelligence', 'performance-intelligence'],
      'analysis': ['ai-code-optimizer', 'quality-intelligence'],
      'monitoring': ['performance-intelligence', 'security-intelligence']
    };
    
    for (const [group, groupProcesses] of Object.entries(processGroups)) {
      const runningProcesses = groupProcesses.filter(procName => 
        processes.some(proc => proc.name === procName && proc.pm2_env.status === 'online')
      );
      
      if (runningProcesses.length > 1) {
        conflicts.push({
          group,
          processes: runningProcesses,
          type: 'resource_conflict'
        });
      }
    }
    
    return conflicts;
  }

  async resolveProcessConflicts(conflicts) {
    this.log('🔧 Resolving process conflicts...');
    
    try {
      for (const conflict of conflicts) {
        this.log(`🔧 Resolving conflict in group: ${conflict.group}`);
        
        // Stagger process execution to avoid conflicts
        const processes = conflict.processes;
        for (let i = 0; i < processes.length; i++) {
          if (i > 0) {
            // Delay subsequent processes
            await this.sleep(30000); // 30 seconds
          }
          
          this.log(`🔄 Restarting ${processes[i]} to resolve conflict`);
          execSync(`pm2 restart ${processes[i]}`, { stdio: 'pipe' });
        }
      }
      
      this.log('🔧 Process conflicts resolved');
      
    } catch (error) {
      this.log(`❌ Conflict resolution failed: ${error.message}`, 'ERROR');
    }
  }

  async intelligentScheduling(processes, resourceUsage) {
    this.log('🧠 Applying intelligent scheduling...');
    
    try {
      const decisions = [];
      
      // Schedule resource-intensive processes during low-usage periods
      const currentHour = new Date().getHours();
      const isLowUsagePeriod = currentHour < 6 || currentHour > 22; // Night hours
      
      if (isLowUsagePeriod) {
        // Run heavy processes during low usage
        const heavyProcesses = ['ai-code-optimizer', 'build-intelligence'];
        
        for (const procName of heavyProcesses) {
          const proc = processes.find(p => p.name === procName);
          if (proc && proc.pm2_env.status === 'stopped') {
            this.log(`🧠 Starting heavy process ${procName} during low usage period`);
            execSync(`pm2 start ${procName}`, { stdio: 'pipe' });
            decisions.push(`started ${procName} during low usage`);
          }
        }
      } else {
        // During high usage, ensure critical processes are running
        const criticalProcesses = ['console-error-fixer', 'security-intelligence'];
        
        for (const procName of criticalProcesses) {
          const proc = processes.find(p => p.name === procName);
          if (proc && proc.pm2_env.status !== 'online') {
            this.log(`🧠 Ensuring critical process ${procName} is running`);
            execSync(`pm2 restart ${procName}`, { stdio: 'pipe' });
            decisions.push(`ensured ${procName} is running`);
          }
        }
      }
      
      // Adaptive scheduling based on resource usage
      if (resourceUsage.totalMemory > 800) { // > 800MB
        // Reduce concurrent processes
        const nonCriticalProcesses = ['seo-intelligence', 'quality-intelligence'];
        
        for (const procName of nonCriticalProcesses) {
          const proc = processes.find(p => p.name === procName);
          if (proc && proc.pm2_env.status === 'online') {
            this.log(`🧠 Pausing non-critical process ${procName} due to high memory usage`);
            execSync(`pm2 stop ${procName}`, { stdio: 'pipe' });
            decisions.push(`paused ${procName} due to high memory`);
          }
        }
      }
      
      this.stats.intelligentDecisions += decisions.length;
      
      if (decisions.length > 0) {
        this.log(`🧠 Intelligent scheduling decisions: ${decisions.join(', ')}`);
      }
      
    } catch (error) {
      this.log(`❌ Intelligent scheduling failed: ${error.message}`, 'ERROR');
    }
  }

  async generateOrchestrationReport(processes, resourceUsage) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcesses: processes.length,
        healthyProcesses: resourceUsage.healthyProcesses || 0,
        warningProcesses: resourceUsage.warningProcesses || 0,
        criticalProcesses: resourceUsage.criticalProcesses || 0,
        totalMemory: resourceUsage.totalMemory || 0,
        totalCPU: resourceUsage.totalCPU || 0
      },
      processHealth: this.stats.processHealth,
      resourceUsage: this.stats.resourceUsage,
      coordinationHistory: this.stats.coordinationHistory.slice(-10), // Last 10 entries
      recommendations: this.generateRecommendations(processes, resourceUsage)
    };
    
    // Save report
    const reportPath = path.join(process.cwd(), 'logs', 'orchestration-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Orchestration report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`, 'ERROR');
    }
    
    return report;
  }

  generateRecommendations(processes, resourceUsage) {
    const recommendations = [];
    
    if (resourceUsage.criticalProcesses > 0) {
      recommendations.push(`🚨 ${resourceUsage.criticalProcesses} processes have critical resource usage. Consider optimization.`);
    }
    
    if (resourceUsage.totalMemory > 1000) {
      recommendations.push('💾 High memory usage detected. Consider reducing concurrent processes or optimizing memory usage.');
    }
    
    if (resourceUsage.totalCPU > 50) {
      recommendations.push('⚡ High CPU usage detected. Consider staggering process execution or optimizing CPU-intensive operations.');
    }
    
    const failedProcesses = processes.filter(proc => 
      proc.pm2_env.status === 'errored' || proc.pm2_env.status === 'stopped'
    );
    
    if (failedProcesses.length > 0) {
      recommendations.push(`⚠️  ${failedProcesses.length} processes are not running. Check logs for errors.`);
    }
    
    if (this.stats.coordinationHistory.length > 0) {
      const recentActions = this.stats.coordinationHistory.slice(-5);
      const restartCount = recentActions.filter(entry => 
        entry.actions.some(action => action.includes('restart'))
      ).length;
      
      if (restartCount > 3) {
        recommendations.push('🔄 High restart frequency detected. Investigate underlying issues causing process failures.');
      }
    }
    
    return recommendations;
  }

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    try {
      // Check disk space
      const diskUsage = await this.checkDiskSpace();
      
      // Check memory availability
      const memUsage = process.memoryUsage();
      const availableMemory = this.config.maxMemory * 1024 * 1024 - memUsage.heapUsed;
      
      // Check PM2 status
      const pm2Status = execSync('pm2 ping', { encoding: 'utf8', stdio: 'pipe' });
      
      const healthStatus = {
        diskSpace: diskUsage,
        availableMemory: availableMemory / 1024 / 1024, // MB
        pm2Status: pm2Status.includes('pong'),
        timestamp: new Date().toISOString()
      };
      
      // Log health status
      if (healthStatus.diskSpace < 10) {
        this.log('🚨 Low disk space detected!', 'WARN');
      }
      
      if (healthStatus.availableMemory < 100) {
        this.log('🚨 Low available memory detected!', 'WARN');
      }
      
      if (!healthStatus.pm2Status) {
        this.log('🚨 PM2 is not responding!', 'ERROR');
      }
      
      this.log(`🏥 System health check completed. Disk: ${healthStatus.diskSpace}GB, Memory: ${healthStatus.availableMemory.toFixed(2)}MB`);
      
      return healthStatus;
      
    } catch (error) {
      this.log(`❌ System health check failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async checkDiskSpace() {
    try {
      const result = execSync('df -h .', { encoding: 'utf8' });
      const lines = result.split('\n');
      const dataLine = lines[1];
      const available = dataLine.split(/\s+/)[3];
      return parseFloat(available.replace('G', ''));
    } catch (error) {
      this.log(`❌ Disk space check failed: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    this.log('🚀 Starting orchestration cycle...');
    this.stats.lastRun = new Date().toISOString();
    this.stats.totalRuns++;
    
    try {
      // Check system health
      await this.checkSystemHealth();
      
      // Monitor processes
      const processes = await this.monitorProcesses();
      
      // Analyze resource usage
      const resourceUsage = await this.analyzeResourceUsage();
      
      // Coordinate processes
      await this.coordinateProcesses(processes, resourceUsage);
      
      // Generate report
      await this.generateOrchestrationReport(processes, resourceUsage);
      
      this.log(`✅ Orchestration cycle completed. Monitored: ${processes.length}, Coordinated: ${this.stats.processesCoordinated}`);
      
    } catch (error) {
      this.log(`❌ Orchestration cycle failed: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.log('🚀 Orchestration Master starting...');
    
    // Run immediately
    await this.run();
    
    // Schedule periodic runs
    setInterval(async () => {
      await this.run();
    }, this.config.interval);
    
    this.log(`⏰ Scheduled to run every ${this.config.interval / 1000} seconds`);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const master = new OrchestrationMaster();
  master.start().catch(error => {
    console.error('❌ Failed to start Orchestration Master:', error);
    process.exit(1);
  });
}

module.exports = OrchestrationMaster;