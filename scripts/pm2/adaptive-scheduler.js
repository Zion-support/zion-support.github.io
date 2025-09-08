#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdaptiveScheduler {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/adaptive-scheduler.log');
    this.schedulerReportFile = path.join(this.projectRoot, 'logs/pm2/adaptive-scheduler-report.json');
    this.schedulerDataFile = path.join(this.projectRoot, 'logs/pm2/scheduler-data.json');
    this.workloadPatternsFile = path.join(this.projectRoot, 'logs/pm2/workload-patterns.json');
    this.startTime = Date.now();
    
    this.schedulerMetrics = {
      totalTasks: 0,
      completedTasks: 0,
      failedTasks: 0,
      averageExecutionTime: 0,
      resourceUtilization: 0,
      schedulingEfficiency: 0
    };
    
    this.schedulerData = this.loadSchedulerData();
    this.workloadPatterns = this.loadWorkloadPatterns();
    this.taskHistory = [];
    this.resourceUsage = {};
    this.schedulingDecisions = {};
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadSchedulerData() {
    try {
      if (fs.existsSync(this.schedulerDataFile)) {
        return JSON.parse(fs.readFileSync(this.schedulerDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load scheduler data, starting fresh');
    }
    return {
      taskHistory: {},
      resourceUsage: {},
      schedulingDecisions: {},
      lastUpdated: Date.now()
    };
  }

  loadWorkloadPatterns() {
    try {
      if (fs.existsSync(this.workloadPatternsFile)) {
        return JSON.parse(fs.readFileSync(this.workloadPatternsFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load workload patterns, starting fresh');
    }
    return {
      timePatterns: {},
      resourcePatterns: {},
      taskPatterns: {},
      optimizationRules: {},
      lastUpdated: Date.now()
    };
  }

  saveSchedulerData() {
    try {
      this.schedulerData.lastUpdated = Date.now();
      fs.writeFileSync(this.schedulerDataFile, JSON.stringify(this.schedulerData, null, 2));
    } catch (error) {
      this.log('Failed to save scheduler data');
    }
  }

  saveWorkloadPatterns() {
    try {
      this.workloadPatterns.lastUpdated = Date.now();
      fs.writeFileSync(this.workloadPatternsFile, JSON.stringify(this.workloadPatterns, null, 2));
    } catch (error) {
      this.log('Failed to save workload patterns');
    }
  }

  async runAdaptiveScheduling() {
    this.log('🚀 Starting Adaptive Scheduling...');
    
    try {
      // Analyze current workload
      const workloadAnalysis = this.analyzeCurrentWorkload();
      this.log(`📊 Current workload: ${workloadAnalysis.totalTasks} tasks, ${workloadAnalysis.resourceUsage}% resource usage`);

      // Analyze workload patterns
      const patternAnalysis = this.analyzeWorkloadPatterns();
      
      // Generate scheduling recommendations
      const schedulingRecommendations = this.generateSchedulingRecommendations(workloadAnalysis, patternAnalysis);
      
      // Optimize resource allocation
      const resourceOptimization = this.optimizeResourceAllocation(workloadAnalysis, patternAnalysis);
      
      // Balance workload
      const workloadBalancing = this.balanceWorkload(workloadAnalysis, patternAnalysis);
      
      // Learn from scheduling decisions
      this.learnFromScheduling(workloadAnalysis, schedulingRecommendations);
      
      // Generate scheduling report
      await this.generateSchedulingReport(workloadAnalysis, patternAnalysis, schedulingRecommendations, resourceOptimization, workloadBalancing);
      
      this.log('✅ Adaptive Scheduling complete!');
      
    } catch (error) {
      this.log(`❌ Error during adaptive scheduling: ${error.message}`);
    }
  }

  analyzeCurrentWorkload() {
    const analysis = {
      totalTasks: 0,
      activeTasks: 0,
      queuedTasks: 0,
      resourceUsage: 0,
      taskTypes: {},
      priorityDistribution: {},
      timestamp: Date.now()
    };

    try {
      // Analyze PM2 processes
      const pm2Processes = this.getPM2Processes();
      analysis.totalTasks = pm2Processes.length;
      analysis.activeTasks = pm2Processes.filter(p => p.status === 'online').length;
      analysis.queuedTasks = pm2Processes.filter(p => p.status === 'stopped').length;

      // Analyze task types
      pm2Processes.forEach(process => {
        const taskType = this.categorizeTask(process.name);
        if (!analysis.taskTypes[taskType]) {
          analysis.taskTypes[taskType] = 0;
        }
        analysis.taskTypes[taskType]++;
      });

      // Analyze resource usage
      analysis.resourceUsage = this.calculateResourceUsage();
      
      // Analyze priority distribution
      analysis.priorityDistribution = this.analyzePriorityDistribution(pm2Processes);

    } catch (error) {
      this.log(`Error analyzing current workload: ${error.message}`);
    }

    return analysis;
  }

  getPM2Processes() {
    try {
      // Try to get PM2 process list
      const pm2Output = execSync('pm2 list --format json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 10000
      });

      return JSON.parse(pm2Output);
    } catch (error) {
      // PM2 not available or failed
      this.log('PM2 not available, using estimated workload');
      
      // Return estimated workload based on file system analysis
      return this.estimateWorkloadFromFiles();
    }
  }

  estimateWorkloadFromFiles() {
    const estimatedProcesses = [];
    
    try {
      // Check for running processes by looking at log files
      const logDir = path.join(this.projectRoot, 'logs/pm2');
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir);
        
        logFiles.forEach(file => {
          if (file.endsWith('.log')) {
            const processName = file.replace('.log', '');
            estimatedProcesses.push({
              name: processName,
              status: 'online',
              pm_id: estimatedProcesses.length + 1,
              cpu: Math.random() * 10,
              memory: Math.random() * 50
            });
          }
        });
      }
    } catch (error) {
      this.log('Failed to estimate workload from files');
    }

    return estimatedProcesses;
  }

  categorizeTask(processName) {
    if (processName.includes('monitor')) return 'monitoring';
    if (processName.includes('lint')) return 'quality';
    if (processName.includes('test')) return 'testing';
    if (processName.includes('build')) return 'building';
    if (processName.includes('commit')) return 'version-control';
    if (processName.includes('dependency')) return 'dependency-management';
    if (processName.includes('performance')) return 'performance';
    if (processName.includes('review')) return 'code-review';
    if (processName.includes('scheduler')) return 'scheduling';
    return 'general';
  }

  calculateResourceUsage() {
    try {
      // Get system resource usage
      const memoryInfo = process.memoryUsage();
      const memoryUsage = (memoryInfo.heapUsed / memoryInfo.heapTotal) * 100;
      
      // Estimate CPU usage based on process activity
      const uptime = process.uptime();
      const cpuUsage = Math.min(80, uptime / 3600 * 10); // Estimate based on uptime
      
      // Calculate overall resource usage
      return Math.round((memoryUsage + cpuUsage) / 2);
      
    } catch (error) {
      return 50; // Default estimate
    }
  }

  analyzePriorityDistribution(processes) {
    const distribution = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    };

    processes.forEach(process => {
      const priority = this.determineProcessPriority(process);
      distribution[priority]++;
    });

    return distribution;
  }

  determineProcessPriority(process) {
    const name = process.name.toLowerCase();
    
    // Critical processes
    if (name.includes('security') || name.includes('monitor')) return 'critical';
    
    // High priority processes
    if (name.includes('quality') || name.includes('performance')) return 'high';
    
    // Medium priority processes
    if (name.includes('test') || name.includes('build')) return 'medium';
    
    // Low priority processes
    return 'low';
  }

  analyzeWorkloadPatterns() {
    const patterns = {
      timePatterns: {},
      resourcePatterns: {},
      taskPatterns: {},
      optimizationOpportunities: []
    };

    // Analyze time-based patterns
    patterns.timePatterns = this.analyzeTimePatterns();
    
    // Analyze resource usage patterns
    patterns.resourcePatterns = this.analyzeResourcePatterns();
    
    // Analyze task execution patterns
    patterns.taskPatterns = this.analyzeTaskPatterns();
    
    // Identify optimization opportunities
    patterns.optimizationOpportunities = this.identifyOptimizationOpportunities(patterns);

    return patterns;
  }

  analyzeTimePatterns() {
    const timePatterns = {
      hourly: {},
      daily: {},
      weekly: {}
    };

    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    const week = Math.floor(now.getDate() / 7);

    // Analyze current time patterns
    if (!timePatterns.hourly[hour]) {
      timePatterns.hourly[hour] = {
        taskCount: 0,
        resourceUsage: 0,
        efficiency: 0
      };
    }

    // Update with current data
    timePatterns.hourly[hour].taskCount++;
    timePatterns.hourly[hour].resourceUsage = this.schedulerMetrics.resourceUtilization;
    timePatterns.hourly[hour].efficiency = this.schedulerMetrics.schedulingEfficiency;

    return timePatterns;
  }

  analyzeResourcePatterns() {
    const resourcePatterns = {
      memory: {},
      cpu: {},
      disk: {},
      network: {}
    };

    // Analyze memory patterns
    const memoryInfo = process.memoryUsage();
    resourcePatterns.memory = {
      current: memoryInfo.heapUsed,
      peak: memoryInfo.heapTotal,
      utilization: (memoryInfo.heapUsed / memoryInfo.heapTotal) * 100
    };

    // Analyze CPU patterns (estimated)
    resourcePatterns.cpu = {
      current: Math.random() * 30,
      peak: 100,
      utilization: Math.random() * 30
    };

    // Analyze disk patterns
    resourcePatterns.disk = {
      current: 0,
      peak: 100,
      utilization: 0
    };

    // Analyze network patterns
    resourcePatterns.network = {
      current: 0,
      peak: 100,
      utilization: 0
    };

    return resourcePatterns;
  }

  analyzeTaskPatterns() {
    const taskPatterns = {
      executionTime: {},
      successRate: {},
      resourceConsumption: {},
      dependencies: {}
    };

    // Analyze execution time patterns
    taskPatterns.executionTime = {
      average: this.schedulerMetrics.averageExecutionTime,
      distribution: {
        fast: 0,
        medium: 0,
        slow: 0
      }
    };

    // Analyze success rate patterns
    const totalTasks = this.schedulerMetrics.totalTasks;
    const successRate = totalTasks > 0 ? (this.schedulerMetrics.completedTasks / totalTasks) * 100 : 0;
    
    taskPatterns.successRate = {
      current: successRate,
      trend: 'stable',
      improvement: 0
    };

    // Analyze resource consumption patterns
    taskPatterns.resourceConsumption = {
      memory: this.schedulerMetrics.resourceUtilization,
      cpu: Math.random() * 50,
      efficiency: this.schedulerMetrics.schedulingEfficiency
    };

    return taskPatterns;
  }

  identifyOptimizationOpportunities(patterns) {
    const opportunities = [];

    // Resource utilization opportunities
    if (patterns.resourcePatterns.memory.utilization > 80) {
      opportunities.push({
        type: 'resource-optimization',
        priority: 'high',
        description: 'High memory utilization detected',
        action: 'Implement memory optimization and garbage collection strategies',
        potentialSavings: '20-30% memory reduction'
      });
    }

    // Task scheduling opportunities
    if (patterns.taskPatterns.successRate.current < 90) {
      opportunities.push({
        type: 'task-optimization',
        priority: 'medium',
        description: 'Task success rate below optimal',
        action: 'Review task dependencies and error handling',
        potentialSavings: '10-20% improvement in success rate'
      });
    }

    // Time-based optimization opportunities
    const peakHours = Object.entries(patterns.timePatterns.hourly)
      .filter(([hour, data]) => data.resourceUsage > 70)
      .map(([hour, data]) => ({ hour, usage: data.resourceUsage }));

    if (peakHours.length > 0) {
      opportunities.push({
        type: 'time-optimization',
        priority: 'medium',
        description: 'Peak resource usage hours identified',
        action: 'Implement load balancing and resource scheduling',
        potentialSavings: '15-25% resource efficiency improvement'
      });
    }

    return opportunities;
  }

  generateSchedulingRecommendations(workloadAnalysis, patternAnalysis) {
    const recommendations = {
      immediate: [],
      shortTerm: [],
      longTerm: [],
      strategic: []
    };

    // Immediate recommendations based on current workload
    if (workloadAnalysis.resourceUsage > 80) {
      recommendations.immediate.push({
        type: 'resource-management',
        priority: 'critical',
        description: 'High resource usage detected',
        actions: [
          'Scale down non-critical processes',
          'Implement resource limits',
          'Optimize memory usage',
          'Consider process prioritization'
        ]
      });
    }

    if (workloadAnalysis.queuedTasks > workloadAnalysis.activeTasks) {
      recommendations.immediate.push({
        type: 'task-management',
        priority: 'high',
        description: 'High task queue detected',
        actions: [
          'Increase processing capacity',
          'Optimize task execution',
          'Implement task prioritization',
          'Review task dependencies'
        ]
      });
    }

    // Short-term recommendations based on patterns
    patternAnalysis.optimizationOpportunities.forEach(opportunity => {
      if (opportunity.priority === 'high') {
        recommendations.shortTerm.push({
          type: opportunity.type,
          priority: opportunity.priority,
          description: opportunity.description,
          actions: [opportunity.action],
          potentialSavings: opportunity.potentialSavings
        });
      }
    });

    // Long-term strategic recommendations
    recommendations.longTerm.push({
      type: 'infrastructure',
      priority: 'medium',
      description: 'Implement adaptive resource scaling',
      actions: [
        'Set up auto-scaling policies',
        'Implement predictive resource allocation',
        'Add monitoring and alerting',
        'Create resource optimization workflows'
      ]
    });

    return recommendations;
  }

  optimizeResourceAllocation(workloadAnalysis, patternAnalysis) {
    const optimization = {
      memory: {},
      cpu: {},
      processes: {},
      recommendations: []
    };

    // Memory optimization
    if (workloadAnalysis.resourceUsage > 70) {
      optimization.memory = {
        action: 'optimize',
        strategy: 'garbage-collection',
        target: 'reduce memory usage by 20%',
        processes: this.identifyMemoryIntensiveProcesses()
      };
    }

    // CPU optimization
    optimization.cpu = {
      action: 'balance',
      strategy: 'load-distribution',
      target: 'evenly distribute CPU load',
      processes: this.identifyCPUIntensiveProcesses()
    };

    // Process optimization
    optimization.processes = this.optimizeProcessAllocation(workloadAnalysis);

    // Generate optimization recommendations
    optimization.recommendations = this.generateOptimizationRecommendations(optimization);

    return optimization;
  }

  identifyMemoryIntensiveProcesses() {
    const processes = this.getPM2Processes();
    return processes
      .filter(p => p.memory > 50)
      .map(p => ({
        name: p.name,
        memory: p.memory,
        priority: this.determineProcessPriority(p)
      }))
      .sort((a, b) => b.memory - a.memory);
  }

  identifyCPUIntensiveProcesses() {
    const processes = this.getPM2Processes();
    return processes
      .filter(p => p.cpu > 10)
      .map(p => ({
        name: p.name,
        cpu: p.cpu,
        priority: this.determineProcessPriority(p)
      }))
      .sort((a, b) => b.cpu - a.cpu);
  }

  optimizeProcessAllocation(workloadAnalysis) {
    const optimization = {
      critical: [],
      high: [],
      medium: [],
      low: []
    };

    // Prioritize critical processes
    Object.entries(workloadAnalysis.taskTypes).forEach(([type, count]) => {
      if (type === 'monitoring' || type === 'security') {
        optimization.critical.push({
          type,
          count,
          resourceAllocation: 'high',
          scheduling: 'immediate'
        });
      } else if (type === 'quality' || type === 'performance') {
        optimization.high.push({
          type,
          count,
          resourceAllocation: 'medium',
          scheduling: 'priority'
        });
      } else if (type === 'testing' || type === 'building') {
        optimization.medium.push({
          type,
          count,
          resourceAllocation: 'medium',
          scheduling: 'normal'
        });
      } else {
        optimization.low.push({
          type,
          count,
          resourceAllocation: 'low',
          scheduling: 'background'
        });
      }
    });

    return optimization;
  }

  generateOptimizationRecommendations(optimization) {
    const recommendations = [];

    // Memory optimization recommendations
    if (optimization.memory.action === 'optimize') {
      recommendations.push({
        type: 'memory',
        priority: 'high',
        description: 'Memory optimization required',
        actions: [
          'Implement garbage collection',
          'Review memory leaks',
          'Optimize data structures',
          'Consider memory pooling'
        ]
      });
    }

    // CPU optimization recommendations
    if (optimization.cpu.action === 'balance') {
      recommendations.push({
        type: 'cpu',
        priority: 'medium',
        description: 'CPU load balancing required',
        actions: [
          'Implement process scheduling',
          'Add CPU limits',
          'Optimize algorithms',
          'Consider parallel processing'
        ]
      });
    }

    return recommendations;
  }

  balanceWorkload(workloadAnalysis, patternAnalysis) {
    const balancing = {
      currentDistribution: {},
      targetDistribution: {},
      rebalancingActions: [],
      efficiency: 0
    };

    // Analyze current workload distribution
    balancing.currentDistribution = {
      critical: workloadAnalysis.priorityDistribution.critical,
      high: workloadAnalysis.priorityDistribution.high,
      medium: workloadAnalysis.priorityDistribution.medium,
      low: workloadAnalysis.priorityDistribution.low
    };

    // Calculate target distribution (ideal balance)
    const totalTasks = workloadAnalysis.totalTasks;
    if (totalTasks > 0) {
      balancing.targetDistribution = {
        critical: Math.max(1, Math.round(totalTasks * 0.1)), // 10% critical
        high: Math.round(totalTasks * 0.3), // 30% high
        medium: Math.round(totalTasks * 0.4), // 40% medium
        low: Math.round(totalTasks * 0.2) // 20% low
      };
    }

    // Generate rebalancing actions
    balancing.rebalancingActions = this.generateRebalancingActions(balancing.currentDistribution, balancing.targetDistribution);

    // Calculate efficiency
    balancing.efficiency = this.calculateWorkloadEfficiency(balancing.currentDistribution, balancing.targetDistribution);

    return balancing;
  }

  generateRebalancingActions(current, target) {
    const actions = [];

    Object.entries(target).forEach(([priority, targetCount]) => {
      const currentCount = current[priority] || 0;
      const difference = targetCount - currentCount;

      if (difference > 0) {
        actions.push({
          priority,
          action: 'increase',
          count: difference,
          description: `Increase ${priority} priority tasks to ${targetCount}`
        });
      } else if (difference < 0) {
        actions.push({
          priority,
          action: 'decrease',
          count: Math.abs(difference),
          description: `Decrease ${priority} priority tasks to ${targetCount}`
        });
      }
    });

    return actions;
  }

  calculateWorkloadEfficiency(current, target) {
    let totalDeviation = 0;
    let totalTarget = 0;

    Object.entries(target).forEach(([priority, targetCount]) => {
      const currentCount = current[priority] || 0;
      const deviation = Math.abs(targetCount - currentCount);
      totalDeviation += deviation;
      totalTarget += targetCount;
    });

    if (totalTarget === 0) return 100;
    
    const efficiency = Math.max(0, 100 - (totalDeviation / totalTarget) * 100);
    return Math.round(efficiency);
  }

  learnFromScheduling(workloadAnalysis, recommendations) {
    // Update scheduler metrics
    this.schedulerMetrics.totalTasks += workloadAnalysis.totalTasks;
    this.schedulerMetrics.resourceUtilization = workloadAnalysis.resourceUsage;
    
    // Update task history
    this.taskHistory.push({
      timestamp: Date.now(),
      workload: workloadAnalysis,
      recommendations: recommendations.length,
      efficiency: this.calculateSchedulingEfficiency(workloadAnalysis)
    });

    // Keep only last 100 entries
    if (this.taskHistory.length > 100) {
      this.taskHistory = this.taskHistory.slice(-100);
    }

    // Update scheduling decisions
    recommendations.forEach(rec => {
      const decisionKey = `${rec.type}-${rec.priority}`;
      if (!this.schedulingDecisions[decisionKey]) {
        this.schedulingDecisions[decisionKey] = {
          count: 0,
          effectiveness: 0,
          lastUsed: null
        };
      }
      
      this.schedulingDecisions[decisionKey].count++;
      this.schedulingDecisions[decisionKey].lastUsed = Date.now();
    });

    this.saveSchedulerData();
  }

  calculateSchedulingEfficiency(workloadAnalysis) {
    let efficiency = 100;
    
    // Deduct points for resource overuse
    if (workloadAnalysis.resourceUsage > 80) efficiency -= 20;
    else if (workloadAnalysis.resourceUsage > 60) efficiency -= 10;
    
    // Deduct points for task imbalance
    const totalTasks = workloadAnalysis.totalTasks;
    if (totalTasks > 0) {
      const activeRatio = workloadAnalysis.activeTasks / totalTasks;
      if (activeRatio < 0.7) efficiency -= 15;
      else if (activeRatio < 0.9) efficiency -= 5;
    }
    
    return Math.max(0, efficiency);
  }

  async generateSchedulingReport(workloadAnalysis, patternAnalysis, recommendations, resourceOptimization, workloadBalancing) {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalTasks: workloadAnalysis.totalTasks,
        resourceUsage: workloadAnalysis.resourceUsage,
        efficiency: workloadBalancing.efficiency,
        recommendations: recommendations.immediate.length + recommendations.shortTerm.length
      },
      workloadAnalysis,
      patternAnalysis,
      recommendations,
      resourceOptimization,
      workloadBalancing,
      metrics: this.schedulerMetrics,
      history: this.taskHistory.slice(-10), // Last 10 entries
      strategicInsights: this.generateStrategicInsights()
    };

    try {
      fs.writeFileSync(this.schedulerReportFile, JSON.stringify(report, null, 2));
      this.log('📊 Adaptive Scheduling Report generated');
    } catch (error) {
      this.log('Failed to generate scheduling report');
    }
  }

  generateStrategicInsights() {
    const insights = [];

    // Efficiency insights
    if (this.schedulerMetrics.schedulingEfficiency < 70) {
      insights.push({
        type: 'efficiency',
        priority: 'high',
        title: 'Low Scheduling Efficiency',
        description: 'Current scheduling efficiency is below optimal levels',
        actions: [
          'Review workload distribution',
          'Optimize resource allocation',
          'Implement intelligent scheduling',
          'Add performance monitoring'
        ]
      });
    }

    // Resource utilization insights
    if (this.schedulerMetrics.resourceUtilization > 80) {
      insights.push({
        type: 'resource',
        priority: 'critical',
        title: 'High Resource Utilization',
        description: 'Resource usage is consistently high',
        actions: [
          'Implement auto-scaling',
          'Optimize resource allocation',
          'Add resource monitoring',
          'Consider infrastructure upgrades'
        ]
      });
    }

    return insights;
  }

  async start() {
    this.log('🚀 Adaptive Scheduler started');
    
    // Run initial scheduling
    await this.runAdaptiveScheduling();
    
    // Schedule periodic scheduling optimization
    setInterval(async () => {
      await this.runAdaptiveScheduling();
    }, 2 * 60 * 60 * 1000); // Every 2 hours
  }
}

// Start the Adaptive Scheduler
const scheduler = new AdaptiveScheduler();
scheduler.start().catch(error => {
  console.error('Adaptive Scheduler failed to start:', error);
  process.exit(1);
});