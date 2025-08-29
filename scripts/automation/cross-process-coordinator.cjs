#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤝 Starting Cross-Process Coordinator Automation...');

class CrossProcessCoordinator {
  constructor() {
    this.coordinationData = {
      processStates: new Map(),
      interProcessCommunication: [],
      coordinationRules: new Map(),
      sharedResources: new Map(),
      processDependencies: new Map(),
      coordinationHistory: []
    };
    this.reportDir = path.join(process.cwd(), 'cross-process-coordinator-reports');
    this.ensureReportDirectory();
    this.loadCoordinationData();
    this.initializeCoordinationRules();
    this.initializeProcessDependencies();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadCoordinationData() {
    const dataFile = path.join(this.reportDir, 'coordination-data.json');
    if (fs.existsSync(dataFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        this.coordinationData = { ...this.coordinationData, ...data };
        console.log('📚 Loaded existing coordination data');
      } catch (error) {
        console.log('⚠️ Could not load coordination data, starting fresh');
      }
    }
  }

  saveCoordinationData() {
    const dataFile = path.join(this.reportDir, 'coordination-data.json');
    fs.writeFileSync(dataFile, JSON.stringify(this.coordinationData, null, 2));
  }

  initializeCoordinationRules() {
    // Rule: Coordinate security and dependency updates
    this.coordinationRules.set('security-dependency-coordination', {
      trigger: 'security-audit',
      action: 'dependency-updates',
      condition: (securityData) => securityData.vulnerabilities > 0,
      priority: 'high',
      description: 'Trigger dependency updates when security vulnerabilities are found'
    });

    // Rule: Coordinate build and testing
    this.coordinationRules.set('build-test-coordination', {
      trigger: 'daily-build-test',
      action: 'quality-checks',
      condition: (buildData) => buildData.status === 'success',
      priority: 'medium',
      description: 'Run quality checks after successful builds'
    });

    // Rule: Coordinate performance and frontend optimization
    this.coordinationRules.set('performance-frontend-coordination', {
      trigger: 'performance-monitor',
      action: 'front-maximizer',
      condition: (perfData) => perfData.score < 80,
      priority: 'medium',
      description: 'Trigger frontend optimization when performance is poor'
    });

    // Rule: Coordinate error recovery and continuous improvement
    this.coordinationRules.set('error-improvement-coordination', {
      trigger: 'console-error-fixer',
      action: 'continuous-improvement',
      condition: (errorData) => errorData.errorCount > 5,
      priority: 'high',
      description: 'Trigger continuous improvement when many errors are found'
    });

    // Rule: Coordinate link checking and integrity
    this.coordinationRules.set('link-coordination', {
      trigger: 'link-checker',
      action: 'link-integrity',
      condition: (linkData) => linkData.brokenLinks > 0,
      priority: 'medium',
      description: 'Run link integrity check when broken links are found'
    });
  }

  initializeProcessDependencies() {
    // Define process dependencies
    this.processDependencies.set('console-error-fixer', {
      dependsOn: [],
      provides: ['error-reports', 'build-status'],
      triggers: ['continuous-improvement', 'quality-checks']
    });

    this.processDependencies.set('link-checker', {
      dependsOn: [],
      provides: ['link-status', 'broken-links'],
      triggers: ['link-integrity', 'sitemap-runner']
    });

    this.processDependencies.set('continuous-improvement', {
      dependsOn: ['console-error-fixer', 'quality-checks'],
      provides: ['improvement-reports', 'code-changes'],
      triggers: ['daily-build-test']
    });

    this.processDependencies.set('daily-build-test', {
      dependsOn: ['continuous-improvement'],
      provides: ['build-status', 'test-results'],
      triggers: ['performance-monitor', 'quality-checks']
    });

    this.processDependencies.set('security-audit', {
      dependsOn: [],
      provides: ['security-status', 'vulnerability-reports'],
      triggers: ['dependency-updates']
    });

    this.processDependencies.set('dependency-updates', {
      dependsOn: ['security-audit'],
      provides: ['dependency-status', 'update-reports'],
      triggers: ['daily-build-test', 'quality-checks']
    });

    this.processDependencies.set('performance-monitor', {
      dependsOn: ['daily-build-test'],
      provides: ['performance-metrics', 'optimization-suggestions'],
      triggers: ['front-maximizer']
    });

    this.processDependencies.set('quality-checks', {
      dependsOn: ['daily-build-test'],
      provides: ['quality-reports', 'code-quality-metrics'],
      triggers: ['continuous-improvement']
    });

    this.processDependencies.set('link-integrity', {
      dependsOn: ['link-checker'],
      provides: ['integrity-reports', 'link-structure'],
      triggers: ['sitemap-runner']
    });

    this.processDependencies.set('front-maximizer', {
      dependsOn: ['performance-monitor'],
      provides: ['optimization-reports', 'frontend-improvements'],
      triggers: ['daily-build-test']
    });

    this.processDependencies.set('sitemap-runner', {
      dependsOn: ['link-checker', 'link-integrity'],
      provides: ['sitemap-files', 'seo-reports'],
      triggers: []
    });
  }

  async runCoordination() {
    console.log('🚀 Starting cross-process coordination...');
    
    try {
      await this.collectProcessStates();
      await this.analyzeProcessCommunication();
      await this.executeCoordinationRules();
      await this.manageSharedResources();
      await this.optimizeProcessOrder();
      await this.generateCoordinationReport();
      
      console.log('✅ Cross-process coordination completed');
    } catch (error) {
      console.log('❌ Cross-process coordination failed:', error.message);
    }
  }

  async collectProcessStates() {
    console.log('📊 Collecting process states...');
    
    try {
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      for (const process of processes) {
        if (process.name && this.processDependencies.has(process.name)) {
          await this.collectProcessState(process);
        }
      }
      
    } catch (error) {
      console.log('❌ Failed to collect process states:', error.message);
    }
  }

  async collectProcessState(process) {
    const processName = process.name;
    
    if (!this.coordinationData.processStates.has(processName)) {
      this.coordinationData.processStates.set(processName, {
        status: 'unknown',
        lastRun: null,
        lastOutput: null,
        dependencies: [],
        triggers: [],
        performance: {}
      });
    }
    
    const state = this.coordinationData.processStates.get(processName);
    
    // Update basic status
    state.status = process.pm2_env.status || 'unknown';
    state.lastRun = process.pm2_env.pm_uptime ? Date.now() - (process.pm2_env.pm_uptime * 1000) : null;
    
    // Collect recent output
    try {
      const logs = execSync(`pm2 logs ${processName} --lines 20 --nostream`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      state.lastOutput = logs;
    } catch (error) {
      // Ignore log collection errors
    }
    
    // Update dependencies and triggers
    const deps = this.processDependencies.get(processName);
    if (deps) {
      state.dependencies = deps.dependsOn;
      state.triggers = deps.triggers;
    }
    
    // Collect performance metrics
    state.performance = {
      cpu: process.monit?.cpu || 0,
      memory: process.monit?.memory || 0,
      uptime: process.pm2_env.pm_uptime || 0,
      restarts: process.pm2_env.restart_time || 0
    };
  }

  async analyzeProcessCommunication() {
    console.log('🔍 Analyzing process communication...');
    
    for (const [processName, state] of this.coordinationData.processStates) {
      if (state.status === 'online' && state.lastOutput) {
        await this.analyzeProcessOutput(processName, state.lastOutput);
      }
    }
  }

  async analyzeProcessOutput(processName, output) {
    // Analyze output for specific patterns that might trigger other processes
    const analysis = {
      processName,
      timestamp: Date.now(),
      triggers: [],
      data: {}
    };
    
    // Analyze console-error-fixer output
    if (processName === 'console-error-fixer') {
      const errorCount = (output.match(/Error|error|Failed|failed/g) || []).length;
      if (errorCount > 0) {
        analysis.data.errorCount = errorCount;
        analysis.triggers.push('continuous-improvement');
      }
    }
    
    // Analyze link-checker output
    if (processName === 'link-checker') {
      const brokenLinks = (output.match(/broken|failed|error/g) || []).length;
      if (brokenLinks > 0) {
        analysis.data.brokenLinks = brokenLinks;
        analysis.triggers.push('link-integrity');
      }
    }
    
    // Analyze security-audit output
    if (processName === 'security-audit') {
      const vulnerabilities = (output.match(/vulnerability|vulnerabilities|CVE/g) || []).length;
      if (vulnerabilities > 0) {
        analysis.data.vulnerabilities = vulnerabilities;
        analysis.triggers.push('dependency-updates');
      }
    }
    
    // Analyze performance-monitor output
    if (processName === 'performance-monitor') {
      const performanceScore = this.extractPerformanceScore(output);
      if (performanceScore && performanceScore < 80) {
        analysis.data.performanceScore = performanceScore;
        analysis.triggers.push('front-maximizer');
      }
    }
    
    // Analyze daily-build-test output
    if (processName === 'daily-build-test') {
      const buildStatus = output.includes('Build completed successfully') ? 'success' : 'failed';
      analysis.data.buildStatus = buildStatus;
      if (buildStatus === 'success') {
        analysis.triggers.push('quality-checks');
        analysis.triggers.push('performance-monitor');
      }
    }
    
    if (analysis.triggers.length > 0) {
      this.coordinationData.interProcessCommunication.push(analysis);
    }
  }

  extractPerformanceScore(output) {
    // Try to extract performance score from output
    const scoreMatch = output.match(/performance.*?(\d+)/i);
    if (scoreMatch) {
      return parseInt(scoreMatch[1]);
    }
    return null;
  }

  async executeCoordinationRules() {
    console.log('⚡ Executing coordination rules...');
    
    for (const [ruleName, rule] of this.coordinationRules) {
      const shouldExecute = await this.evaluateRuleCondition(rule);
      
      if (shouldExecute) {
        console.log(`🔄 Executing coordination rule: ${ruleName}`);
        await this.executeRule(rule);
      }
    }
  }

  async evaluateRuleCondition(rule) {
    try {
      const triggerProcess = rule.trigger;
      const triggerState = this.coordinationData.processStates.get(triggerProcess);
      
      if (!triggerState || triggerState.status !== 'online') {
        return false;
      }
      
      // Get the most recent communication data for this process
      const recentComm = this.coordinationData.interProcessCommunication
        .filter(comm => comm.processName === triggerProcess)
        .sort((a, b) => b.timestamp - a.timestamp)[0];
      
      if (!recentComm) {
        return false;
      }
      
      // Evaluate the condition
      return rule.condition(recentComm.data);
      
    } catch (error) {
      console.log(`⚠️ Error evaluating rule condition for ${rule.trigger}:`, error.message);
      return false;
    }
  }

  async executeRule(rule) {
    try {
      const actionProcess = rule.action;
      const actionState = this.coordinationData.processStates.get(actionProcess);
      
      if (!actionState || actionState.status !== 'online') {
        console.log(`⚠️ Action process ${actionProcess} is not available`);
        return;
      }
      
      // Trigger the action process
      console.log(`🚀 Triggering ${actionProcess} due to coordination rule`);
      
      // Restart the process to trigger immediate execution
      execSync(`pm2 restart ${actionProcess}`, { stdio: 'inherit' });
      
      // Record the coordination action
      this.coordinationData.coordinationHistory.push({
        timestamp: Date.now(),
        rule: rule.description,
        trigger: rule.trigger,
        action: rule.action,
        reason: 'coordination-rule'
      });
      
    } catch (error) {
      console.log(`❌ Failed to execute coordination rule:`, error.message);
    }
  }

  async manageSharedResources() {
    console.log('🔄 Managing shared resources...');
    
    // Check for resource conflicts
    const resourceConflicts = this.detectResourceConflicts();
    
    if (resourceConflicts.length > 0) {
      console.log(`⚠️ Found ${resourceConflicts.length} resource conflicts`);
      await this.resolveResourceConflicts(resourceConflicts);
    }
    
    // Optimize resource sharing
    await this.optimizeResourceSharing();
  }

  detectResourceConflicts() {
    const conflicts = [];
    
    // Check for processes trying to access the same files
    const fileAccessPatterns = {
      'console-error-fixer': ['package.json', 'tsconfig.json'],
      'dependency-updates': ['package.json', 'package-lock.json'],
      'continuous-improvement': ['src/**/*'],
      'daily-build-test': ['dist/', 'build/'],
      'quality-checks': ['src/**/*', 'test/**/*']
    };
    
    for (const [process1, files1] of Object.entries(fileAccessPatterns)) {
      for (const [process2, files2] of Object.entries(fileAccessPatterns)) {
        if (process1 !== process2) {
          const commonFiles = files1.filter(file => files2.includes(file));
          if (commonFiles.length > 0) {
            conflicts.push({
              processes: [process1, process2],
              resources: commonFiles,
              type: 'file-access'
            });
          }
        }
      }
    }
    
    return conflicts;
  }

  async resolveResourceConflicts(conflicts) {
    for (const conflict of conflicts) {
      console.log(`🛠️ Resolving conflict between ${conflict.processes.join(' and ')}`);
      
      // Implement conflict resolution strategies
      if (conflict.type === 'file-access') {
        await this.resolveFileAccessConflict(conflict);
      }
    }
  }

  async resolveFileAccessConflict(conflict) {
    const [process1, process2] = conflict.processes;
    
    // Check which process is more critical
    const priority1 = this.getProcessPriority(process1);
    const priority2 = this.getProcessPriority(process2);
    
    if (priority1 > priority2) {
      // Delay the lower priority process
      console.log(`⏳ Delaying ${process2} to avoid conflict with ${process1}`);
      execSync(`pm2 restart ${process2}`, { stdio: 'inherit' });
    } else if (priority2 > priority1) {
      // Delay the lower priority process
      console.log(`⏳ Delaying ${process1} to avoid conflict with ${process2}`);
      execSync(`pm2 restart ${process1}`, { stdio: 'inherit' });
    } else {
      // Equal priority - stagger execution
      console.log(`⏱️ Staggering execution of ${process1} and ${process2}`);
      execSync(`pm2 restart ${process1}`, { stdio: 'inherit' });
      setTimeout(() => {
        execSync(`pm2 restart ${process2}`, { stdio: 'inherit' });
      }, 30000); // 30 second delay
    }
  }

  getProcessPriority(processName) {
    const priorities = {
      'console-error-fixer': 10,      // Highest priority
      'security-audit': 9,
      'dependency-updates': 8,
      'daily-build-test': 7,
      'quality-checks': 6,
      'performance-monitor': 5,
      'continuous-improvement': 4,
      'link-checker': 3,
      'link-integrity': 2,
      'front-maximizer': 1,
      'sitemap-runner': 1
    };
    
    return priorities[processName] || 0;
  }

  async optimizeResourceSharing() {
    // Implement resource sharing optimizations
    const optimizations = [];
    
    // Check for processes that can share data
    for (const [processName, state] of this.coordinationData.processStates) {
      if (state.status === 'online') {
        const deps = this.processDependencies.get(processName);
        if (deps && deps.provides.length > 0) {
          // This process provides data that others might need
          optimizations.push({
            process: processName,
            provides: deps.provides,
            consumers: this.findDataConsumers(deps.provides)
          });
        }
      }
    }
    
    // Implement data sharing optimizations
    for (const optimization of optimizations) {
      if (optimization.consumers.length > 0) {
        await this.implementDataSharing(optimization);
      }
    }
  }

  findDataConsumers(providedData) {
    const consumers = [];
    
    for (const [processName, deps] of this.processDependencies) {
      if (deps.dependsOn.some(dep => providedData.includes(dep))) {
        consumers.push(processName);
      }
    }
    
    return consumers;
  }

  async implementDataSharing(optimization) {
    // Create shared data files for inter-process communication
    const sharedDataDir = path.join(process.cwd(), 'shared-data');
    if (!fs.existsSync(sharedDataDir)) {
      fs.mkdirSync(sharedDataDir, { recursive: true });
    }
    
    // Create data files for each provided data type
    for (const dataType of optimization.provides) {
      const dataFile = path.join(sharedDataDir, `${dataType}.json`);
      
      // Check if data file exists and is recent
      if (fs.existsSync(dataFile)) {
        try {
          const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
          const dataAge = Date.now() - (data.timestamp || 0);
          
          // If data is older than 1 hour, mark for refresh
          if (dataAge > 60 * 60 * 1000) {
            console.log(`🔄 Marking ${dataType} data for refresh`);
            data.needsRefresh = true;
            fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
          }
        } catch (error) {
          // Ignore parsing errors
        }
      }
    }
  }

  async optimizeProcessOrder() {
    console.log('⚡ Optimizing process execution order...');
    
    // Analyze current process dependencies and optimize execution order
    const executionOrder = this.calculateOptimalExecutionOrder();
    
    // Update PM2 ecosystem config with optimized order
    await this.updateProcessOrder(executionOrder);
  }

  calculateOptimalExecutionOrder() {
    // Use topological sort to determine optimal execution order
    const order = [];
    const visited = new Set();
    const visiting = new Set();
    
    const visit = (processName) => {
      if (visiting.has(processName)) {
        throw new Error(`Circular dependency detected: ${processName}`);
      }
      
      if (visited.has(processName)) {
        return;
      }
      
      visiting.add(processName);
      
      const deps = this.processDependencies.get(processName);
      if (deps) {
        for (const dep of deps.dependsOn) {
          visit(dep);
        }
      }
      
      visiting.delete(processName);
      visited.add(processName);
      order.push(processName);
    };
    
    // Visit all processes
    for (const processName of this.processDependencies.keys()) {
      if (!visited.has(processName)) {
        visit(processName);
      }
    }
    
    return order;
  }

  async updateProcessOrder(executionOrder) {
    try {
      console.log(`📋 Optimal execution order: ${executionOrder.join(' → ')}`);
      
      // Update ecosystem config with optimized order
      const ecosystemPath = path.join(process.cwd(), 'ecosystem.config.cjs');
      if (fs.existsSync(ecosystemPath)) {
        let config = fs.readFileSync(ecosystemPath, 'utf8');
        
        // Reorder processes in the config based on optimal order
        const reorderedConfig = this.reorderProcessesInConfig(config, executionOrder);
        
        if (reorderedConfig !== config) {
          fs.writeFileSync(ecosystemPath, reorderedConfig);
          
          // Reload PM2 configuration
          execSync('pm2 reload ecosystem.config.cjs', { stdio: 'inherit' });
          
          console.log('✅ Process execution order updated');
        }
      }
      
    } catch (error) {
      console.log('❌ Failed to update process order:', error.message);
    }
  }

  reorderProcessesInConfig(config, executionOrder) {
    // This is a simplified reordering - in practice, you'd want more sophisticated parsing
    // For now, we'll just log the optimal order
    console.log('📝 Process execution order optimization recommended:');
    executionOrder.forEach((process, index) => {
      console.log(`  ${index + 1}. ${process}`);
    });
    
    return config; // Return unchanged for now
  }

  async generateCoordinationReport() {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalProcesses: this.coordinationData.processStates.size,
        onlineProcesses: Array.from(this.coordinationData.processStates.values())
          .filter(state => state.status === 'online').length,
        coordinationRules: this.coordinationRules.size,
        interProcessCommunication: this.coordinationData.interProcessCommunication.length
      },
      processStates: Object.fromEntries(this.coordinationData.processStates),
      coordinationHistory: this.coordinationData.coordinationHistory.slice(-20),
      interProcessCommunication: this.coordinationData.interProcessCommunication.slice(-10),
      recommendations: this.generateCoordinationRecommendations()
    };
    
    const reportFile = path.join(this.reportDir, `coordination-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Coordination report generated: ${reportFile}`);
  }

  generateCoordinationRecommendations() {
    const recommendations = [];
    
    // Check for processes that are frequently triggered
    const triggerCounts = {};
    this.coordinationData.coordinationHistory.forEach(entry => {
      triggerCounts[entry.trigger] = (triggerCounts[entry.trigger] || 0) + 1;
    });
    
    const frequentTriggers = Object.entries(triggerCounts)
      .filter(([, count]) => count > 5)
      .sort(([,a], [,b]) => b - a);
    
    if (frequentTriggers.length > 0) {
      recommendations.push({
        type: 'process-optimization',
        message: `Processes frequently triggered: ${frequentTriggers.map(([process, count]) => `${process} (${count})`).join(', ')}`,
        suggestion: 'Consider adjusting intervals or implementing more efficient coordination',
        priority: 'medium'
      });
    }
    
    // Check for resource conflicts
    const conflicts = this.detectResourceConflicts();
    if (conflicts.length > 0) {
      recommendations.push({
        type: 'resource-optimization',
        message: `Found ${conflicts.length} resource conflicts`,
        suggestion: 'Implement better resource management and conflict resolution',
        priority: 'high'
      });
    }
    
    // Check for processes with high dependencies
    const highDependencyProcesses = Array.from(this.processDependencies.entries())
      .filter(([, deps]) => deps.dependsOn.length > 3);
    
    if (highDependencyProcesses.length > 0) {
      recommendations.push({
        type: 'dependency-optimization',
        message: `Processes with high dependencies: ${highDependencyProcesses.map(([process]) => process).join(', ')}`,
        suggestion: 'Consider reducing dependencies or implementing parallel execution',
        priority: 'medium'
      });
    }
    
    return recommendations;
  }

  async run() {
    console.log('🚀 Starting cross-process coordination cycle...');
    
    try {
      await this.runCoordination();
      this.saveCoordinationData();
      
      console.log('✅ Cross-process coordination cycle completed');
    } catch (error) {
      console.log('❌ Cross-process coordination cycle failed:', error.message);
    }
  }
}

// Run the automation
const automation = new CrossProcessCoordinator();
automation.run().catch(console.error);