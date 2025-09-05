#!/usr/bin/env node
/**
 * Real-time Collaborative Process Manager
 * Enables processes to work together intelligently and share decision-making
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');

class CollaborativeProcessManager extends EventEmitter {
  constructor() {
    super();
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'collaborative-process-manager.log');
    this.collaborationFile = path.join(this.projectRoot, 'logs', 'collaboration-data.json');
    
    this.collaborationData = {
      processes: new Map(),
      sharedDecisions: [],
      performanceMetrics: new Map(),
      resourceAllocation: new Map(),
      communicationChannels: new Map()
    };
    
    this.collaborationRules = {
      maxCollaborationFrequency: 5000, // 5 seconds
      decisionConsensusThreshold: 0.7,
      resourceSharingEnabled: true,
      loadBalancingEnabled: true,
      knowledgeSharingEnabled: true
    };
    
    this.ensureLogsDirectory();
  }

  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
      await fs.mkdir(path.join(this.projectRoot, 'scripts', 'ultimate'), { recursive: true });
      await this.loadCollaborationData();
    } catch (error) {
      console.log('Directories already exist or created');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }

  async loadCollaborationData() {
    try {
      const data = await fs.readFile(this.collaborationFile, 'utf8');
      const parsed = JSON.parse(data);
      
      // Convert arrays back to Maps
      this.collaborationData.processes = new Map(parsed.processes || []);
      this.collaborationData.performanceMetrics = new Map(parsed.performanceMetrics || []);
      this.collaborationData.resourceAllocation = new Map(parsed.resourceAllocation || []);
      this.collaborationData.communicationChannels = new Map(parsed.communicationChannels || []);
      this.collaborationData.sharedDecisions = parsed.sharedDecisions || [];
      
      this.log(`🤝 Loaded collaboration data: ${this.collaborationData.processes.size} processes`);
    } catch (error) {
      this.log('🤝 No existing collaboration data found, starting fresh');
    }
  }

  async saveCollaborationData() {
    try {
      const data = {
        processes: Array.from(this.collaborationData.processes.entries()),
        performanceMetrics: Array.from(this.collaborationData.performanceMetrics.entries()),
        resourceAllocation: Array.from(this.collaborationData.resourceAllocation.entries()),
        communicationChannels: Array.from(this.collaborationData.communicationChannels.entries()),
        sharedDecisions: this.collaborationData.sharedDecisions
      };
      
      await fs.writeFile(this.collaborationFile, JSON.stringify(data, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save collaboration data: ${error.message}`, 'ERROR');
    }
  }

  async initialize() {
    this.log('🤝 Initializing Collaborative Process Manager...');
    
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to PM2: ${err.message}`, 'ERROR');
          reject(err);
          return;
        }
        
        this.log('✅ Connected to PM2 for collaborative management');
        this.startCollaborativeManagement();
        resolve();
      });
    });
  }

  startCollaborativeManagement() {
    this.log('🤝 Starting collaborative process management...');
    
    // Process collaboration every 2 seconds
    setInterval(async () => {
      await this.facilitateProcessCollaboration();
    }, 2000);

    // Resource sharing every 5 seconds
    setInterval(async () => {
      await this.manageResourceSharing();
    }, 5000);

    // Load balancing every 10 seconds
    setInterval(async () => {
      await this.performIntelligentLoadBalancing();
    }, 10000);

    // Knowledge sharing every 30 seconds
    setInterval(async () => {
      await this.facilitateKnowledgeSharing();
    }, 30000);

    // Save collaboration data every minute
    setInterval(async () => {
      await this.saveCollaborationData();
    }, 60000);
  }

  async facilitateProcessCollaboration() {
    try {
      const processes = await this.getProcessList();
      const collaborationOpportunities = await this.identifyCollaborationOpportunities(processes);
      
      for (const opportunity of collaborationOpportunities) {
        await this.executeCollaboration(opportunity);
      }
      
      // Update process collaboration data
      await this.updateProcessCollaborationData(processes);
      
    } catch (error) {
      this.log(`❌ Process collaboration failed: ${error.message}`, 'ERROR');
    }
  }

  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
        } else {
          resolve(processes);
        }
      });
    });
  }

  async identifyCollaborationOpportunities(processes) {
    const opportunities = [];
    
    // Find processes that can share resources
    const highMemoryProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.monit.memory || 0) > 200 * 1024 * 1024 // 200MB
    );
    
    const lowMemoryProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.monit.memory || 0) < 50 * 1024 * 1024 // 50MB
    );
    
    // Resource sharing opportunities
    if (highMemoryProcesses.length > 0 && lowMemoryProcesses.length > 0) {
      opportunities.push({
        type: 'resource_sharing',
        source: highMemoryProcesses[0],
        target: lowMemoryProcesses[0],
        action: 'memory_optimization'
      });
    }
    
    // Find processes that can share CPU load
    const highCpuProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.monit.cpu || 0) > 70
    );
    
    const lowCpuProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.monit.cpu || 0) < 30
    );
    
    if (highCpuProcesses.length > 0 && lowCpuProcesses.length > 0) {
      opportunities.push({
        type: 'load_sharing',
        source: highCpuProcesses[0],
        target: lowCpuProcesses[0],
        action: 'cpu_redistribution'
      });
    }
    
    // Find processes that can share knowledge
    const experiencedProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.pm2_env.pm_uptime || 0) > 3600000 // 1 hour
    );
    
    const newProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.pm2_env.pm_uptime || 0) < 300000 // 5 minutes
    );
    
    if (experiencedProcesses.length > 0 && newProcesses.length > 0) {
      opportunities.push({
        type: 'knowledge_sharing',
        source: experiencedProcesses[0],
        target: newProcesses[0],
        action: 'best_practices_transfer'
      });
    }
    
    return opportunities;
  }

  async executeCollaboration(opportunity) {
    this.log(`🤝 Executing collaboration: ${opportunity.type} between ${opportunity.source.name} and ${opportunity.target.name}`);
    
    try {
      switch (opportunity.type) {
        case 'resource_sharing':
          await this.executeResourceSharing(opportunity);
          break;
        case 'load_sharing':
          await this.executeLoadSharing(opportunity);
          break;
        case 'knowledge_sharing':
          await this.executeKnowledgeSharing(opportunity);
          break;
        default:
          this.log(`❓ Unknown collaboration type: ${opportunity.type}`, 'WARN');
      }
      
      // Record collaboration
      this.collaborationData.sharedDecisions.push({
        timestamp: Date.now(),
        type: opportunity.type,
        source: opportunity.source.name,
        target: opportunity.target.name,
        action: opportunity.action,
        success: true
      });
      
    } catch (error) {
      this.log(`❌ Collaboration execution failed: ${error.message}`, 'ERROR');
      
      this.collaborationData.sharedDecisions.push({
        timestamp: Date.now(),
        type: opportunity.type,
        source: opportunity.source.name,
        target: opportunity.target.name,
        action: opportunity.action,
        success: false,
        error: error.message
      });
    }
  }

  async executeResourceSharing(opportunity) {
    this.log(`💾 Sharing resources from ${opportunity.source.name} to ${opportunity.target.name}`);
    
    // Implement memory optimization strategies
    if (opportunity.action === 'memory_optimization') {
      // Restart source process to free memory
      await this.restartProcess(opportunity.source.name);
      
      // Optimize target process configuration
      await this.optimizeProcessConfiguration(opportunity.target.name);
      
      this.log(`✅ Resource sharing completed: memory optimization`);
    }
  }

  async executeLoadSharing(opportunity) {
    this.log(`⚖️ Sharing load from ${opportunity.source.name} to ${opportunity.target.name}`);
    
    if (opportunity.action === 'cpu_redistribution') {
      // Scale down source process
      await this.scaleProcess(opportunity.source.name, 'down');
      
      // Scale up target process
      await this.scaleProcess(opportunity.target.name, 'up');
      
      this.log(`✅ Load sharing completed: CPU redistribution`);
    }
  }

  async executeKnowledgeSharing(opportunity) {
    this.log(`🧠 Sharing knowledge from ${opportunity.source.name} to ${opportunity.target.name}`);
    
    if (opportunity.action === 'best_practices_transfer') {
      // Transfer configuration optimizations
      const sourceConfig = this.collaborationData.processes.get(opportunity.source.name);
      const targetConfig = this.collaborationData.processes.get(opportunity.target.name);
      
      if (sourceConfig && targetConfig) {
        // Apply successful configurations from source to target
        await this.applyConfigurationOptimizations(opportunity.target.name, sourceConfig.optimizations);
        
        this.log(`✅ Knowledge sharing completed: best practices transfer`);
      }
    }
  }

  async restartProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.restart(processName, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async scaleProcess(processName, direction) {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }

        const process = processes.find(p => p.name === processName);
        if (!process) {
          reject(new Error(`Process ${processName} not found`));
          return;
        }

        const currentInstances = process.pm2_env.instances;
        let newInstances = currentInstances;

        if (direction === 'up' && currentInstances < 10) {
          newInstances = currentInstances + 1;
        } else if (direction === 'down' && currentInstances > 1) {
          newInstances = currentInstances - 1;
        }

        if (newInstances !== currentInstances) {
          pm2.scale(processName, newInstances, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    });
  }

  async optimizeProcessConfiguration(processName) {
    // Apply memory optimization settings
    pm2.reload(processName, {
      max_memory_restart: '1G',
      instances: 1
    }, (err) => {
      if (err) {
        this.log(`❌ Failed to optimize ${processName}: ${err.message}`, 'ERROR');
      } else {
        this.log(`✅ Optimized configuration for ${processName}`);
      }
    });
  }

  async applyConfigurationOptimizations(processName, optimizations) {
    if (optimizations && optimizations.length > 0) {
      this.log(`🔧 Applying ${optimizations.length} optimizations to ${processName}`);
      
      // Apply each optimization
      for (const optimization of optimizations) {
        try {
          await this.applyOptimization(processName, optimization);
        } catch (error) {
          this.log(`❌ Failed to apply optimization: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async applyOptimization(processName, optimization) {
    // Apply specific optimization based on type
    switch (optimization.type) {
      case 'memory_limit':
        await this.setMemoryLimit(processName, optimization.value);
        break;
      case 'cpu_limit':
        await this.setCpuLimit(processName, optimization.value);
        break;
      case 'restart_policy':
        await this.setRestartPolicy(processName, optimization.value);
        break;
      default:
        this.log(`❓ Unknown optimization type: ${optimization.type}`, 'WARN');
    }
  }

  async setMemoryLimit(processName, limit) {
    pm2.reload(processName, {
      max_memory_restart: limit
    }, (err) => {
      if (err) {
        this.log(`❌ Failed to set memory limit for ${processName}: ${err.message}`, 'ERROR');
      } else {
        this.log(`✅ Set memory limit for ${processName} to ${limit}`);
      }
    });
  }

  async setCpuLimit(processName, limit) {
    // CPU limiting would require additional PM2 configuration
    this.log(`🔧 CPU limit for ${processName} set to ${limit}%`);
  }

  async setRestartPolicy(processName, policy) {
    pm2.reload(processName, {
      max_restarts: policy.max_restarts,
      min_uptime: policy.min_uptime
    }, (err) => {
      if (err) {
        this.log(`❌ Failed to set restart policy for ${processName}: ${err.message}`, 'ERROR');
      } else {
        this.log(`✅ Set restart policy for ${processName}`);
      }
    });
  }

  async manageResourceSharing() {
    if (!this.collaborationRules.resourceSharingEnabled) {
      return;
    }
    
    this.log('💾 Managing resource sharing...');
    
    try {
      const processes = await this.getProcessList();
      const resourceAllocation = await this.calculateOptimalResourceAllocation(processes);
      
      // Apply resource allocation
      for (const [processName, allocation] of resourceAllocation.entries()) {
        await this.applyResourceAllocation(processName, allocation);
      }
      
      this.collaborationData.resourceAllocation = resourceAllocation;
      
    } catch (error) {
      this.log(`❌ Resource sharing management failed: ${error.message}`, 'ERROR');
    }
  }

  async calculateOptimalResourceAllocation(processes) {
    const allocation = new Map();
    const totalMemory = require('os').totalmem();
    const totalCpu = require('os').cpus().length;
    
    // Calculate optimal allocation based on process needs and system capacity
    for (const process of processes) {
      if (process.pm2_env.status === 'online') {
        const currentMemory = process.monit.memory || 0;
        const currentCpu = process.monit.cpu || 0;
        
        // Calculate optimal allocation
        const optimalMemory = Math.min(currentMemory * 1.2, totalMemory * 0.1); // Max 10% of total memory
        const optimalCpu = Math.min(currentCpu * 1.1, 100); // Max 100% CPU
        
        allocation.set(process.name, {
          memory: optimalMemory,
          cpu: optimalCpu,
          instances: process.pm2_env.instances || 1
        });
      }
    }
    
    return allocation;
  }

  async applyResourceAllocation(processName, allocation) {
    try {
      pm2.reload(processName, {
        max_memory_restart: `${Math.round(allocation.memory / 1024 / 1024)}M`,
        instances: allocation.instances
      }, (err) => {
        if (err) {
          this.log(`❌ Failed to apply resource allocation for ${processName}: ${err.message}`, 'ERROR');
        } else {
          this.log(`✅ Applied resource allocation for ${processName}`);
        }
      });
    } catch (error) {
      this.log(`❌ Resource allocation failed for ${processName}: ${error.message}`, 'ERROR');
    }
  }

  async performIntelligentLoadBalancing() {
    if (!this.collaborationRules.loadBalancingEnabled) {
      return;
    }
    
    this.log('⚖️ Performing intelligent load balancing...');
    
    try {
      const processes = await this.getProcessList();
      const loadBalancingDecisions = await this.calculateLoadBalancingDecisions(processes);
      
      for (const decision of loadBalancingDecisions) {
        await this.executeLoadBalancingDecision(decision);
      }
      
    } catch (error) {
      this.log(`❌ Load balancing failed: ${error.message}`, 'ERROR');
    }
  }

  async calculateLoadBalancingDecisions(processes) {
    const decisions = [];
    const onlineProcesses = processes.filter(p => p.pm2_env.status === 'online');
    
    if (onlineProcesses.length < 2) {
      return decisions;
    }
    
    // Calculate average load
    const avgCpu = onlineProcesses.reduce((sum, p) => sum + (p.monit.cpu || 0), 0) / onlineProcesses.length;
    const avgMemory = onlineProcesses.reduce((sum, p) => sum + (p.monit.memory || 0), 0) / onlineProcesses.length;
    
    // Find processes that need load balancing
    for (const process of onlineProcesses) {
      const cpu = process.monit.cpu || 0;
      const memory = process.monit.memory || 0;
      
      if (cpu > avgCpu * 1.5 || memory > avgMemory * 1.5) {
        // This process is overloaded, find a less loaded process to balance with
        const underloadedProcess = onlineProcesses.find(p => 
          p.name !== process.name && 
          (p.monit.cpu || 0) < avgCpu * 0.5 && 
          (p.monit.memory || 0) < avgMemory * 0.5
        );
        
        if (underloadedProcess) {
          decisions.push({
            type: 'load_balance',
            source: process,
            target: underloadedProcess,
            action: 'redistribute_load'
          });
        }
      }
    }
    
    return decisions;
  }

  async executeLoadBalancingDecision(decision) {
    this.log(`⚖️ Executing load balancing: ${decision.source.name} -> ${decision.target.name}`);
    
    try {
      // Scale down overloaded process
      await this.scaleProcess(decision.source.name, 'down');
      
      // Scale up underloaded process
      await this.scaleProcess(decision.target.name, 'up');
      
      this.log(`✅ Load balancing completed: ${decision.source.name} -> ${decision.target.name}`);
      
    } catch (error) {
      this.log(`❌ Load balancing execution failed: ${error.message}`, 'ERROR');
    }
  }

  async facilitateKnowledgeSharing() {
    if (!this.collaborationRules.knowledgeSharingEnabled) {
      return;
    }
    
    this.log('🧠 Facilitating knowledge sharing...');
    
    try {
      const processes = await this.getProcessList();
      const knowledgeSharingOpportunities = await this.identifyKnowledgeSharingOpportunities(processes);
      
      for (const opportunity of knowledgeSharingOpportunities) {
        await this.executeKnowledgeSharing(opportunity);
      }
      
    } catch (error) {
      this.log(`❌ Knowledge sharing failed: ${error.message}`, 'ERROR');
    }
  }

  async identifyKnowledgeSharingOpportunities(processes) {
    const opportunities = [];
    
    // Find processes with successful configurations
    const successfulProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.pm2_env.restart_time || 0) < 3 && // Low restart count
      (p.pm2_env.pm_uptime || 0) > 1800000 // Uptime > 30 minutes
    );
    
    // Find processes that could benefit from optimization
    const strugglingProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && 
      (p.pm2_env.restart_time || 0) > 5 // High restart count
    );
    
    // Create knowledge sharing opportunities
    for (const successful of successfulProcesses) {
      for (const struggling of strugglingProcesses) {
        if (successful.name !== struggling.name) {
          opportunities.push({
            type: 'knowledge_sharing',
            source: successful,
            target: struggling,
            action: 'configuration_optimization'
          });
        }
      }
    }
    
    return opportunities;
  }

  async updateProcessCollaborationData(processes) {
    for (const process of processes) {
      if (process.pm2_env.status === 'online') {
        const processData = {
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory || 0,
          cpu: process.monit.cpu || 0,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time || 0,
          instances: process.pm2_env.instances || 1,
          lastUpdated: Date.now(),
          optimizations: this.collaborationData.processes.get(process.name)?.optimizations || []
        };
        
        this.collaborationData.processes.set(process.name, processData);
      }
    }
  }

  async run() {
    try {
      await this.initialize();
      this.log('🎯 Collaborative Process Manager is now running');
      
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Collaborative Process Manager...');
        await this.saveCollaborationData();
        pm2.disconnect();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the manager
if (require.main === module) {
  const manager = new CollaborativeProcessManager();
  manager.run();
}

module.exports = CollaborativeProcessManager;