#!/usr/bin/env node

/**
 * Intelligent Orchestrator - PM2 Automation
 * Coordinates all automations and provides intelligent decision-making
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-orchestrator.log');
    this.stateFile = path.join(this.projectRoot, 'logs', 'orchestrator-state.json');
    this.ensureLogsDirectory();
    this.loadState();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadState() {
    try {
      if (fs.existsSync(this.stateFile)) {
        this.state = JSON.parse(fs.readFileSync(this.stateFile, 'utf8'));
      } else {
        this.state = {
          lastRun: {},
          priorities: {},
          dependencies: {},
          health: {},
          recommendations: []
        };
      }
    } catch (error) {
      this.state = {
        lastRun: {},
        priorities: {},
        dependencies: {},
        health: {},
        recommendations: []
      };
    }
  }

  saveState() {
    try {
      fs.writeFileSync(this.stateFile, JSON.stringify(this.state, null, 2));
    } catch (error) {
      this.log(`Failed to save state: ${error.message}`, 'ERROR');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runOrchestration() {
    this.log('Starting intelligent orchestration...');
    
    try {
      // 1. Analyze current system state
      const systemState = await this.analyzeSystemState();
      
      // 2. Determine execution priorities
      const priorities = await this.determineExecutionPriorities(systemState);
      
      // 3. Check dependencies and conflicts
      const executionPlan = await this.createExecutionPlan(priorities);
      
      // 4. Execute automations in optimal order
      const results = await this.executeAutomations(executionPlan);
      
      // 5. Analyze results and update state
      await this.analyzeResults(results);
      
      // 6. Generate recommendations
      const recommendations = await this.generateRecommendations(results);
      
      // 7. Update orchestration state
      this.updateOrchestrationState(results, recommendations);
      
      // 8. Generate orchestration report
      await this.generateOrchestrationReport(results, recommendations);
      
    } catch (error) {
      this.log(`Orchestration failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeSystemState() {
    this.log('Analyzing system state...');
    
    const systemState = {
      timestamp: new Date().toISOString(),
      pm2Status: {},
      resourceUsage: {},
      automationHealth: {},
      recentChanges: {},
      buildStatus: {}
    };

    try {
      // Get PM2 status
      systemState.pm2Status = await this.getPM2Status();
      
      // Get resource usage
      systemState.resourceUsage = await this.getResourceUsage();
      
      // Check automation health
      systemState.automationHealth = await this.checkAutomationHealth();
      
      // Check for recent changes
      systemState.recentChanges = await this.detectRecentChanges();
      
      // Check build status
      systemState.buildStatus = await this.checkBuildStatus();
      
    } catch (error) {
      this.log(`System state analysis failed: ${error.message}`, 'ERROR');
    }

    return systemState;
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 status --format json', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      return JSON.parse(output);
      
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async getResourceUsage() {
    try {
      const usage = {
        memory: {},
        cpu: {},
        disk: {}
      };
      
      // Get memory usage
      const memoryOutput = execSync('free -m', { encoding: 'utf8' });
      const memoryLines = memoryOutput.split('\n');
      if (memoryLines.length > 1) {
        const memValues = memoryLines[1].split(/\s+/);
        usage.memory = {
          total: parseInt(memValues[1]),
          used: parseInt(memValues[2]),
          free: parseInt(memValues[3]),
          available: parseInt(memValues[6])
        };
      }
      
      // Get disk usage
      const diskOutput = execSync('df -h .', { encoding: 'utf8' });
      const diskLines = diskOutput.split('\n');
      if (diskLines.length > 1) {
        const diskValues = diskLines[1].split(/\s+/);
        usage.disk = {
          total: diskValues[1],
          used: diskValues[2],
          available: diskValues[3],
          usagePercent: diskValues[4]
        };
      }
      
      return usage;
      
    } catch (error) {
      this.log(`Failed to get resource usage: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async checkAutomationHealth() {
    const health = {};
    
    try {
      const automations = [
        'ai-code-review',
        'performance-optimizer',
        'smart-testing',
        'project-health-monitor',
        'typescript-syntax-fixer',
        'dependency-manager'
      ];
      
      for (const automation of automations) {
        const logFile = path.join(this.projectRoot, 'logs', `${automation}.log`);
        if (fs.existsSync(logFile)) {
          const stats = fs.statSync(logFile);
          const lastModified = new Date(stats.mtime);
          const hoursSinceLastRun = (Date.now() - lastModified.getTime()) / (1000 * 60 * 60);
          
          health[automation] = {
            lastRun: lastModified.toISOString(),
            hoursSinceLastRun: Math.round(hoursSinceLastRun),
            status: hoursSinceLastRun < 24 ? 'HEALTHY' : 'STALE'
          };
        } else {
          health[automation] = {
            lastRun: null,
            hoursSinceLastRun: null,
            status: 'MISSING'
          };
        }
      }
      
    } catch (error) {
      this.log(`Failed to check automation health: ${error.message}`, 'ERROR');
    }

    return health;
  }

  async detectRecentChanges() {
    const changes = {
      gitCommits: [],
      fileChanges: [],
      dependencyUpdates: []
    };
    
    try {
      // Check recent git commits
      const gitOutput = execSync('git log --oneline -10', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      changes.gitCommits = gitOutput.split('\n')
        .filter(line => line.trim())
        .map(line => line.split(' ').slice(1).join(' '));
      
      // Check for recent file changes
      const changedFiles = execSync('git diff --name-only HEAD~5', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      changes.fileChanges = changedFiles.split('\n').filter(line => line.trim());
      
      // Check package.json for recent changes
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageStats = fs.statSync(packagePath);
        const hoursSincePackageChange = (Date.now() - packageStats.mtime.getTime()) / (1000 * 60 * 60);
        
        if (hoursSincePackageChange < 24) {
          changes.dependencyUpdates.push('package.json modified recently');
        }
      }
      
    } catch (error) {
      this.log(`Failed to detect recent changes: ${error.message}`, 'ERROR');
    }

    return changes;
  }

  async checkBuildStatus() {
    const buildStatus = {
      lastBuild: null,
      buildSuccess: false,
      buildErrors: [],
      buildTime: null
    };
    
    try {
      // Check if dist directory exists and when it was last built
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const distStats = fs.statSync(distPath);
        buildStatus.lastBuild = distStats.mtime.toISOString();
        buildStatus.buildSuccess = true;
        
        // Check for build artifacts
        const buildFiles = fs.readdirSync(distPath);
        buildStatus.buildTime = distStats.mtime;
      }
      
      // Check build logs for errors
      const buildLogPath = path.join(this.projectRoot, 'logs', 'build-automation.log');
      if (fs.existsSync(buildLogPath)) {
        const buildLog = fs.readFileSync(buildLogPath, 'utf8');
        const errorLines = buildLog.split('\n').filter(line => line.includes('ERROR'));
        buildStatus.buildErrors = errorLines.slice(-5); // Last 5 errors
      }
      
    } catch (error) {
      this.log(`Failed to check build status: ${error.message}`, 'ERROR');
    }

    return buildStatus;
  }

  async determineExecutionPriorities(systemState) {
    this.log('Determining execution priorities...');
    
    const priorities = {
      critical: [],
      high: [],
      medium: [],
      low: []
    };
    
    try {
      // Critical priority - immediate attention needed
      if (systemState.buildStatus.buildErrors.length > 0) {
        priorities.critical.push({
          automation: 'build-automation',
          reason: 'Build errors detected',
          priority: 'CRITICAL'
        });
      }
      
      if (systemState.automationHealth.projectHealthMonitor?.status === 'STALE') {
        priorities.critical.push({
          automation: 'project-health-monitor',
          reason: 'Project health monitor is stale',
          priority: 'CRITICAL'
        });
      }
      
      // High priority - should run soon
      if (systemState.recentChanges.gitCommits.length > 0) {
        priorities.high.push({
          automation: 'ai-code-review',
          reason: 'New code changes detected',
          priority: 'HIGH'
        });
        
        priorities.high.push({
          automation: 'smart-testing',
          reason: 'New code needs testing',
          priority: 'HIGH'
        });
      }
      
      if (systemState.resourceUsage.memory?.used > systemState.resourceUsage.memory?.total * 0.8) {
        priorities.high.push({
          automation: 'performance-optimizer',
          reason: 'High memory usage detected',
          priority: 'HIGH'
        });
      }
      
      // Medium priority - normal operation
      priorities.medium.push({
        automation: 'typescript-syntax-fixer',
        reason: 'Regular syntax checking',
        priority: 'MEDIUM'
      });
      
      priorities.medium.push({
        automation: 'dependency-manager',
        reason: 'Regular dependency management',
        priority: 'MEDIUM'
      });
      
      // Low priority - maintenance tasks
      priorities.low.push({
        automation: 'enhanced-security',
        reason: 'Security audit',
        priority: 'LOW'
      });
      
    } catch (error) {
      this.log(`Failed to determine priorities: ${error.message}`, 'ERROR');
    }

    return priorities;
  }

  async createExecutionPlan(priorities) {
    this.log('Creating execution plan...');
    
    const executionPlan = {
      immediate: [],
      sequential: [],
      parallel: [],
      deferred: []
    };
    
    try {
      // Immediate execution - critical issues
      executionPlan.immediate = priorities.critical.map(p => ({
        ...p,
        executionType: 'IMMEDIATE',
        estimatedDuration: '5-10 minutes'
      }));
      
      // Sequential execution - high priority, dependencies
      executionPlan.sequential = priorities.high.map(p => ({
        ...p,
        executionType: 'SEQUENTIAL',
        estimatedDuration: '10-30 minutes',
        dependencies: this.getDependencies(p.automation)
      }));
      
      // Parallel execution - medium priority, independent
      executionPlan.parallel = priorities.medium.map(p => ({
        ...p,
        executionType: 'PARALLEL',
        estimatedDuration: '5-15 minutes'
      }));
      
      // Deferred execution - low priority, can wait
      executionPlan.deferred = priorities.low.map(p => ({
        ...p,
        executionType: 'DEFERRED',
        estimatedDuration: '15-45 minutes'
      }));
      
    } catch (error) {
      this.log(`Failed to create execution plan: ${error.message}`, 'ERROR');
    }

    return executionPlan;
  }

  getDependencies(automation) {
    const dependencyMap = {
      'ai-code-review': ['project-health-monitor'],
      'smart-testing': ['typescript-syntax-fixer'],
      'performance-optimizer': ['build-automation'],
      'enhanced-ci-cd': ['smart-testing', 'performance-optimizer']
    };
    
    return dependencyMap[automation] || [];
  }

  async executeAutomations(executionPlan) {
    this.log('Executing automations...');
    
    const results = {
      immediate: [],
      sequential: [],
      parallel: [],
      deferred: [],
      errors: []
    };
    
    try {
      // Execute immediate automations
      for (const automation of executionPlan.immediate) {
        const result = await this.executeAutomation(automation);
        results.immediate.push(result);
      }
      
      // Execute sequential automations
      for (const automation of executionPlan.sequential) {
        const result = await this.executeAutomation(automation);
        results.sequential.push(result);
        // Wait between sequential executions
        await this.sleep(5000);
      }
      
      // Execute parallel automations
      const parallelPromises = executionPlan.parallel.map(automation => 
        this.executeAutomation(automation)
      );
      results.parallel = await Promise.allSettled(parallelPromises);
      
      // Schedule deferred automations
      for (const automation of executionPlan.deferred) {
        this.scheduleDeferredExecution(automation);
        results.deferred.push({
          automation: automation.automation,
          status: 'SCHEDULED',
          scheduledTime: new Date(Date.now() + 30 * 60 * 1000).toISOString() // 30 minutes from now
        });
      }
      
    } catch (error) {
      this.log(`Automation execution failed: ${error.message}`, 'ERROR');
      results.errors.push(error.message);
    }

    return results;
  }

  async executeAutomation(automation) {
    try {
      this.log(`Executing ${automation.automation}...`);
      
      const startTime = Date.now();
      
      // Execute the automation script
      const result = execSync(`node ./scripts/automation/${automation.automation}.cjs`, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      return {
        automation: automation.automation,
        status: 'SUCCESS',
        duration: duration,
        output: result,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      this.log(`Failed to execute ${automation.automation}: ${error.message}`, 'ERROR');
      
      return {
        automation: automation.automation,
        status: 'FAILED',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  scheduleDeferredExecution(automation) {
    // In a production environment, you might use a job queue or cron
    // For now, we'll just log the scheduling
    this.log(`Scheduling deferred execution of ${automation.automation} for later`);
  }

  async analyzeResults(results) {
    this.log('Analyzing execution results...');
    
    try {
      // Update state with results
      this.state.lastRun = {
        timestamp: new Date().toISOString(),
        results: results
      };
      
      // Analyze success rates
      const totalExecutions = results.immediate.length + results.sequential.length + 
                             results.parallel.filter(r => r.status === 'fulfilled').length;
      const successfulExecutions = results.immediate.filter(r => r.status === 'SUCCESS').length +
                                  results.sequential.filter(r => r.status === 'SUCCESS').length +
                                  results.parallel.filter(r => r.status === 'fulfilled' && r.value.status === 'SUCCESS').length;
      
      const successRate = totalExecutions > 0 ? (successfulExecutions / totalExecutions) * 100 : 0;
      
      this.state.health.successRate = Math.round(successRate);
      this.state.health.lastExecution = new Date().toISOString();
      
      // Save updated state
      this.saveState();
      
    } catch (error) {
      this.log(`Results analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async generateRecommendations(results) {
    this.log('Generating recommendations...');
    
    const recommendations = [];
    
    try {
      // Analyze execution patterns
      const failedAutomations = [
        ...results.immediate.filter(r => r.status === 'FAILED'),
        ...results.sequential.filter(r => r.status === 'FAILED'),
        ...results.parallel.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && r.value.status === 'FAILED'))
      ];
      
      if (failedAutomations.length > 0) {
        recommendations.push({
          type: 'EXECUTION_FAILURE',
          priority: 'HIGH',
          message: `${failedAutomations.length} automations failed during execution`,
          action: 'Investigate and fix failed automations',
          automations: failedAutomations.map(f => f.automation || f.value?.automation)
        });
      }
      
      // Performance recommendations
      const slowExecutions = [
        ...results.immediate.filter(r => r.duration > 300000), // 5 minutes
        ...results.sequential.filter(r => r.duration > 300000)
      ];
      
      if (slowExecutions.length > 0) {
        recommendations.push({
          type: 'PERFORMANCE_OPTIMIZATION',
          priority: 'MEDIUM',
          message: `${slowExecutions.length} automations are running slowly`,
          action: 'Optimize slow-running automations',
          automations: slowExecutions.map(s => s.automation)
        });
      }
      
      // Resource recommendations
      if (this.state.health.successRate < 80) {
        recommendations.push({
          type: 'RELIABILITY_IMPROVEMENT',
          priority: 'HIGH',
          message: `Success rate is ${this.state.health.successRate}% - below target of 80%`,
          action: 'Review and improve automation reliability',
          estimatedEffort: '1-2 weeks'
        });
      }
      
    } catch (error) {
      this.log(`Failed to generate recommendations: ${error.message}`, 'ERROR');
    }

    return recommendations;
  }

  updateOrchestrationState(results, recommendations) {
    try {
      // Update state with new information
      this.state.recommendations = recommendations;
      this.state.lastUpdate = new Date().toISOString();
      
      // Save state
      this.saveState();
      
    } catch (error) {
      this.log(`Failed to update orchestration state: ${error.message}`, 'ERROR');
    }
  }

  async generateOrchestrationReport(results, recommendations) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalExecutions: results.immediate.length + results.sequential.length + 
                        results.parallel.filter(r => r.status === 'fulfilled').length,
        successfulExecutions: results.immediate.filter(r => r.status === 'SUCCESS').length +
                             results.sequential.filter(r => r.status === 'SUCCESS').length +
                             results.parallel.filter(r => r.status === 'fulfilled' && r.value.status === 'SUCCESS').length,
        failedExecutions: results.errors.length,
        successRate: this.state.health.successRate
      },
      executionResults: results,
      recommendations: recommendations,
      nextActions: this.generateNextActions(results, recommendations)
    };
    
    const reportPath = path.join(this.projectRoot, 'logs', `orchestration-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Orchestration report generated: ${reportPath}`);
    return report;
  }

  generateNextActions(results, recommendations) {
    const actions = [];
    
    // Immediate actions for critical issues
    const criticalRecommendations = recommendations.filter(r => r.priority === 'HIGH');
    if (criticalRecommendations.length > 0) {
      actions.push({
        priority: 'IMMEDIATE',
        description: 'Address critical issues',
        actions: criticalRecommendations.map(r => r.action),
        estimatedTime: '1-2 hours'
      });
    }
    
    // Short-term actions
    const mediumRecommendations = recommendations.filter(r => r.priority === 'MEDIUM');
    if (mediumRecommendations.length > 0) {
      actions.push({
        priority: 'SHORT_TERM',
        description: 'Address medium priority issues',
        actions: mediumRecommendations.map(r => r.action),
        estimatedTime: '1-2 days'
      });
    }
    
    // Long-term improvements
    if (this.state.health.successRate < 90) {
      actions.push({
        priority: 'LONG_TERM',
        description: 'Improve overall automation reliability',
        actions: ['Implement better error handling', 'Add monitoring and alerting', 'Optimize execution schedules'],
        estimatedTime: '2-4 weeks'
      });
    }
    
    return actions;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new IntelligentOrchestrator();
  
  orchestrator.runOrchestration()
    .then(() => {
      console.log('Intelligent orchestration completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Intelligent orchestration failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentOrchestrator;