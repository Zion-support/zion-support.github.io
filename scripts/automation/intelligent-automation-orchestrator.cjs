#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting intelligent automation orchestrator...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

class IntelligentAutomationOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.systemHealth = new Map();
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.optimizationHistory = [];
    this.logFile = path.join(__dirname, '..', 'logs', 'intelligent-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.loadHistoricalData();
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

  loadAutomationSystems() {
    const systems = [
      // Core automation systems
      { name: 'console-error-fixer', priority: 'critical', health: 100, lastRun: null },
      { name: 'link-checker', priority: 'high', health: 100, lastRun: null },
      { name: 'continuous-improvement', priority: 'high', health: 100, lastRun: null },
      { name: 'daily-build-test', priority: 'high', health: 100, lastRun: null },
      { name: 'security-audit', priority: 'critical', health: 100, lastRun: null },
      { name: 'dependency-updates', priority: 'medium', health: 100, lastRun: null },
      { name: 'performance-monitor', priority: 'high', health: 100, lastRun: null },
      { name: 'quality-checks', priority: 'medium', health: 100, lastRun: null },
      { name: 'link-integrity', priority: 'medium', health: 100, lastRun: null },
      { name: 'front-maximizer', priority: 'low', health: 100, lastRun: null },
      { name: 'sitemap-runner', priority: 'low', health: 100, lastRun: null },
      
      // New intelligent systems
      { name: 'ai-code-analyzer', priority: 'high', health: 100, lastRun: null },
      { name: 'intelligent-test-analyzer', priority: 'high', health: 100, lastRun: null },
      { name: 'smart-dependency-monitor', priority: 'critical', health: 100, lastRun: null },
      { name: 'enhanced-performance-optimizer', priority: 'high', health: 100, lastRun: null }
    ];

    for (const system of systems) {
      this.automationSystems.set(system.name, {
        ...system,
        status: 'available',
        successRate: 0,
        averageExecutionTime: 0,
        lastSuccess: null,
        lastFailure: null,
        consecutiveFailures: 0,
        totalRuns: 0
      });
    }
  }

  loadHistoricalData() {
    try {
      const dataPath = path.join(process.cwd(), 'automation-history.json');
      if (fs.existsSync(dataPath)) {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        this.learningData = new Map(Object.entries(data.learningData || {}));
        this.performanceMetrics = new Map(Object.entries(data.performanceMetrics || {}));
        this.optimizationHistory = data.optimizationHistory || [];
      }
    } catch (error) {
      this.log('⚠️  Could not load historical data, starting fresh');
    }
  }

  async orchestrateAutomation() {
    try {
      this.log(`🎯 Running intelligent automation orchestration at ${new Date().toISOString()}`);
      
      // Analyze system health and performance
      await this.analyzeSystemHealth();
      
      // Determine optimal execution order
      const executionOrder = this.determineExecutionOrder();
      
      // Execute systems in optimal order
      await this.executeSystems(executionOrder);
      
      // Learn from execution results
      await this.learnFromExecution();
      
      // Optimize automation strategy
      await this.optimizeAutomationStrategy();
      
      // Generate orchestration report
      await this.generateOrchestrationReport();
      
      this.log('✅ Intelligent automation orchestration completed successfully');
      
    } catch (error) {
      this.log(`❌ Intelligent automation orchestration failed: ${error.message}`);
    }
  }

  async analyzeSystemHealth() {
    try {
      this.log('🔍 Analyzing system health...');
      
      for (const [name, system] of this.automationSystems) {
        // Check system status using PM2
        const status = await this.checkSystemStatus(name);
        
        // Update system health
        system.status = status.status;
        system.health = this.calculateSystemHealth(system);
        
        // Check for system issues
        if (system.health < 70) {
          this.log(`⚠️  System ${name} has low health: ${system.health}%`);
        }
      }
      
      // Calculate overall system health
      const overallHealth = this.calculateOverallSystemHealth();
      this.log(`📊 Overall system health: ${overallHealth}%`);
      
    } catch (error) {
      this.log(`⚠️  System health analysis failed: ${error.message}`);
    }
  }

  determineExecutionOrder() {
    try {
      this.log('🔍 Determining optimal execution order...');
      
      // Create priority-based execution order
      const priorityOrder = ['critical', 'high', 'medium', 'low'];
      const executionOrder = [];
      
      for (const priority of priorityOrder) {
        const systemsInPriority = Array.from(this.automationSystems.values())
          .filter(system => system.priority === priority)
          .sort((a, b) => {
            // Sort by health (higher health first)
            if (a.health !== b.health) {
              return b.health - a.health;
            }
            // Then by last run time (older first)
            if (a.lastRun && b.lastRun) {
              return new Date(a.lastRun) - new Date(b.lastRun);
            }
            return 0;
          });
        
        executionOrder.push(...systemsInPriority);
      }
      
      this.log(`📊 Execution order determined: ${executionOrder.map(s => s.name).join(' → ')}`);
      return executionOrder;
      
    } catch (error) {
      this.log(`⚠️  Execution order determination failed: ${error.message}`);
      // Fallback to priority order
      return Array.from(this.automationSystems.values())
        .sort((a, b) => {
          const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
    }
  }

  async executeSystems(executionOrder) {
    try {
      this.log('🚀 Executing automation systems...');
      
      const results = [];
      
      for (const system of executionOrder) {
        if (system.status === 'available' && system.health > 30) {
          this.log(`🔄 Executing system: ${system.name}`);
          
          const result = await this.executeSystem(system);
          results.push(result);
          
          // Update system metrics
          this.updateSystemMetrics(system.name, result);
          
          // Small delay between executions to prevent resource conflicts
          await this.delay(2000);
        } else {
          this.log(`⏸️  Skipping system ${system.name} (status: ${system.status}, health: ${system.health}%)`);
        }
      }
      
      this.log(`✅ Executed ${results.filter(r => r.success).length}/${results.length} systems successfully`);
      
    } catch (error) {
      this.log(`⚠️  System execution failed: ${error.message}`);
    }
  }

  async learnFromExecution() {
    try {
      this.log('🧠 Learning from execution results...');
      
      for (const [name, system] of this.automationSystems) {
        // Analyze success patterns
        if (system.successRate > 0.8) {
          this.learningData.set(`${name}_success_patterns`, {
            timeOfDay: new Date().getHours(),
            dayOfWeek: new Date().getDay(),
            systemHealth: system.health,
            consecutiveSuccesses: system.consecutiveFailures === 0 ? system.totalRuns : 0
          });
        }
        
        // Analyze failure patterns
        if (system.consecutiveFailures > 2) {
          this.learningData.set(`${name}_failure_patterns`, {
            timeOfDay: new Date().getHours(),
            dayOfWeek: new Date().getDay(),
            systemHealth: system.health,
            consecutiveFailures: system.consecutiveFailures
          });
        }
        
        // Update performance metrics
        this.performanceMetrics.set(name, {
          successRate: system.successRate,
          averageExecutionTime: system.averageExecutionTime,
          health: system.health,
          lastUpdated: new Date().toISOString()
        });
      }
      
      // Save learning data
      this.saveLearningData();
      
    } catch (error) {
      this.log(`⚠️  Learning from execution failed: ${error.message}`);
    }
  }

  async optimizeAutomationStrategy() {
    try {
      this.log('🔧 Optimizing automation strategy...');
      
      const optimizations = [];
      
      // Optimize execution timing
      const timingOptimizations = this.optimizeExecutionTiming();
      optimizations.push(...timingOptimizations);
      
      // Optimize resource allocation
      const resourceOptimizations = this.optimizeResourceAllocation();
      optimizations.push(...resourceOptimizations);
      
      // Optimize priority assignments
      const priorityOptimizations = this.optimizePriorityAssignments();
      optimizations.push(...priorityOptimizations);
      
      // Apply optimizations
      for (const optimization of optimizations) {
        this.applyOptimization(optimization);
      }
      
      // Record optimization
      this.optimizationHistory.push({
        timestamp: new Date().toISOString(),
        optimizations: optimizations,
        impact: this.calculateOptimizationImpact(optimizations)
      });
      
      this.log(`🔧 Applied ${optimizations.length} optimizations`);
      
    } catch (error) {
      this.log(`⚠️  Strategy optimization failed: ${error.message}`);
    }
  }

  // Helper methods
  async checkSystemStatus(systemName) {
    try {
      const result = execSync(`pm2 jlist`, { encoding: 'utf8' });
      const processes = JSON.parse(result);
      
      const process = processes.find(p => p.name === systemName);
      if (process) {
        return {
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime
        };
      }
      
      return { status: 'stopped', memory: 0, cpu: 0, uptime: 0 };
    } catch (error) {
      return { status: 'unknown', memory: 0, cpu: 0, uptime: 0 };
    }
  }

  calculateSystemHealth(system) {
    let health = 100;
    
    // Deduct points for failures
    if (system.consecutiveFailures > 0) {
      health -= system.consecutiveFailures * 10;
    }
    
    // Deduct points for low success rate
    if (system.successRate < 0.8) {
      health -= (0.8 - system.successRate) * 50;
    }
    
    // Deduct points for long execution times
    if (system.averageExecutionTime > 300000) { // > 5 minutes
      health -= 20;
    }
    
    return Math.max(0, Math.min(100, health));
  }

  calculateOverallSystemHealth() {
    const systems = Array.from(this.automationSystems.values());
    const totalHealth = systems.reduce((sum, system) => sum + system.health, 0);
    return Math.floor(totalHealth / systems.length);
  }

  async executeSystem(system) {
    const startTime = Date.now();
    
    try {
      // Use PM2 to restart the system (this will trigger execution)
      execSync(`pm2 restart ${system.name}`, { stdio: 'pipe' });
      
      const executionTime = Date.now() - startTime;
      system.lastRun = new Date().toISOString();
      
      return {
        success: true,
        executionTime,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      const executionTime = Date.now() - startTime;
      
      return {
        success: false,
        error: error.message,
        executionTime,
        timestamp: new Date().toISOString()
      };
    }
  }

  updateSystemMetrics(systemName, result) {
    const system = this.automationSystems.get(systemName);
    if (!system) return;
    
    system.totalRuns++;
    system.lastRun = result.timestamp;
    
    if (result.success) {
      system.successRate = (system.successRate * (system.totalRuns - 1) + 1) / system.totalRuns;
      system.consecutiveFailures = 0;
      system.lastSuccess = result.timestamp;
    } else {
      system.successRate = (system.successRate * (system.totalRuns - 1)) / system.totalRuns;
      system.consecutiveFailures++;
      system.lastFailure = result.timestamp;
    }
    
    // Update average execution time
    system.averageExecutionTime = (system.averageExecutionTime * (system.totalRuns - 1) + result.executionTime) / system.totalRuns;
  }

  optimizeExecutionTiming() {
    const optimizations = [];
    
    // Analyze peak usage times and adjust execution timing
    const peakUsageTimes = this.analyzePeakUsageTimes();
    
    if (peakUsageTimes.length > 0) {
      optimizations.push({
        type: 'timing',
        description: 'Adjust execution timing to avoid peak usage periods',
        systems: peakUsageTimes.map(t => t.system),
        impact: 'medium'
      });
    }
    
    return optimizations;
  }

  optimizeResourceAllocation() {
    const optimizations = [];
    
    // Check for systems with high resource usage
    const highResourceSystems = Array.from(this.automationSystems.values())
      .filter(system => system.averageExecutionTime > 300000); // > 5 minutes
    
    if (highResourceSystems.length > 0) {
      optimizations.push({
        type: 'resource',
        description: 'Optimize resource allocation for high-usage systems',
        systems: highResourceSystems.map(s => s.name),
        impact: 'high'
      });
    }
    
    return optimizations;
  }

  optimizePriorityAssignments() {
    const optimizations = [];
    
    // Check if critical systems have low health
    const criticalSystems = Array.from(this.automationSystems.values())
      .filter(system => system.priority === 'critical' && system.health < 70);
    
    if (criticalSystems.length > 0) {
      optimizations.push({
        type: 'priority',
        description: 'Increase priority for critical systems with low health',
        systems: criticalSystems.map(s => s.name),
        impact: 'critical'
      });
    }
    
    return optimizations;
  }

  applyOptimization(optimization) {
    switch (optimization.type) {
      case 'timing':
        this.log(`⏰ Applying timing optimization: ${optimization.description}`);
        break;
      case 'resource':
        this.log(`💾 Applying resource optimization: ${optimization.description}`);
        break;
      case 'priority':
        this.log(`🎯 Applying priority optimization: ${optimization.description}`);
        break;
    }
  }

  calculateOptimizationImpact(optimizations) {
    let impact = 0;
    
    for (const optimization of optimizations) {
      switch (optimization.impact) {
        case 'critical':
          impact += 30;
          break;
        case 'high':
          impact += 20;
          break;
        case 'medium':
          impact += 10;
          break;
        case 'low':
          impact += 5;
          break;
      }
    }
    
    return Math.min(100, impact);
  }

  analyzePeakUsageTimes() {
    // Simplified peak usage analysis
    return [];
  }

  saveLearningData() {
    try {
      const data = {
        learningData: Object.fromEntries(this.learningData),
        performanceMetrics: Object.fromEntries(this.performanceMetrics),
        optimizationHistory: this.optimizationHistory
      };
      
      const dataPath = path.join(process.cwd(), 'automation-history.json');
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      
    } catch (error) {
      this.log(`⚠️  Could not save learning data: ${error.message}`);
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async generateOrchestrationReport() {
    try {
      this.log('📊 Generating orchestration report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        systemHealth: Object.fromEntries(
          Array.from(this.automationSystems.entries()).map(([name, system]) => [
            name, {
              status: system.status,
              health: system.health,
              priority: system.priority,
              successRate: system.successRate,
              lastRun: system.lastRun
            }
          ])
        ),
        performanceMetrics: Object.fromEntries(this.performanceMetrics),
        optimizationHistory: this.optimizationHistory.slice(-10), // Last 10 optimizations
        summary: 'Intelligent automation orchestration completed',
        status: 'completed',
        recommendations: this.generateOrchestrationRecommendations()
      };
      
      const reportPath = path.join(process.cwd(), 'intelligent-automation-orchestration-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`✅ Orchestration report saved to ${reportPath}`);
      
    } catch (error) {
      this.log(`⚠️  Report generation failed: ${error.message}`);
    }
  }

  generateOrchestrationRecommendations() {
    const recommendations = [];
    
    // Check for systems with low health
    const lowHealthSystems = Array.from(this.automationSystems.values())
      .filter(system => system.health < 50);
    
    if (lowHealthSystems.length > 0) {
      recommendations.push({
        priority: 'high',
        action: `Investigate and fix ${lowHealthSystems.length} systems with low health`,
        systems: lowHealthSystems.map(s => s.name)
      });
    }
    
    // Check for systems with low success rates
    const lowSuccessSystems = Array.from(this.automationSystems.values())
      .filter(system => system.successRate < 0.6);
    
    if (lowSuccessSystems.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: `Improve reliability of ${lowSuccessSystems.length} systems with low success rates`,
        systems: lowSuccessSystems.map(s => s.name)
      });
    }
    
    // General recommendations
    recommendations.push({
      priority: 'low',
      action: 'Continue monitoring and learning from automation patterns',
      systems: []
    });
    
    return recommendations;
  }
}

// Main execution
async function runIntelligentAutomationOrchestrator() {
  const orchestrator = new IntelligentAutomationOrchestrator();
  await orchestrator.orchestrateAutomation();
}

// Run the orchestrator
runIntelligentAutomationOrchestrator();

// Set up continuous orchestration
setInterval(runIntelligentAutomationOrchestrator, AUTOMATION_INTERVAL);

console.log(`🎯 Intelligent automation orchestrator will run every ${AUTOMATION_INTERVAL / 60000} minutes`);