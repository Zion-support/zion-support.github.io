#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

console.log('🎭 Starting Intelligent Automation Orchestrator...');

class IntelligentAutomationOrchestrator {
  constructor() {
    this.automations = {
      codeAnalyzer: {
        name: 'Intelligent Code Analyzer',
        script: './scripts/automation/intelligent-code-analyzer.cjs',
        priority: 'high',
        frequency: 'daily',
        lastRun: null,
        status: 'idle',
        dependencies: [],
        estimatedDuration: 300000, // 5 minutes
        resourceUsage: { memory: 'medium', cpu: 'medium' }
      },
      dependencyManager: {
        name: 'Intelligent Dependency Manager',
        script: './scripts/automation/intelligent-dependency-manager.cjs',
        priority: 'high',
        frequency: 'daily',
        lastRun: null,
        status: 'idle',
        dependencies: [],
        estimatedDuration: 180000, // 3 minutes
        resourceUsage: { memory: 'low', cpu: 'medium' }
      },
      performanceOptimizer: {
        name: 'Intelligent Performance Optimizer',
        script: './scripts/automation/intelligent-performance-optimizer.cjs',
        priority: 'medium',
        frequency: 'weekly',
        lastRun: null,
        status: 'idle',
        dependencies: ['codeAnalyzer'],
        estimatedDuration: 600000, // 10 minutes
        resourceUsage: { memory: 'high', cpu: 'high' }
      }
    };
    
    this.orchestrationResults = {
      executionPlan: [],
      resourceAllocation: {},
      conflicts: [],
      recommendations: [],
      performance: { totalDuration: 0, efficiency: 0 }
    };
    
    this.reportDir = path.join(process.cwd(), 'orchestration-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.executionHistory = [];
    this.systemResources = this.getSystemResources();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async orchestrateAutomations() {
    console.log('🎯 Starting intelligent automation orchestration...');
    
    try {
      // Analyze current system state
      await this.analyzeSystemState();
      
      // Generate intelligent execution plan
      await this.generateExecutionPlan();
      
      // Allocate resources intelligently
      await this.allocateResources();
      
      // Execute automations in optimal order
      await this.executeAutomations();
      
      // Analyze execution results
      await this.analyzeExecutionResults();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ Intelligent automation orchestration completed successfully');
      
    } catch (error) {
      console.error('❌ Orchestration failed:', error.message);
      await this.saveErrorReport(error);
    }
  }

  async analyzeSystemState() {
    console.log('🔍 Analyzing current system state...');
    
    try {
      // Check system resources
      this.systemResources = this.getSystemResources();
      
      // Check automation status
      await this.checkAutomationStatus();
      
      // Analyze dependencies and conflicts
      await this.analyzeDependencies();
      
      // Check for urgent issues
      await this.checkUrgentIssues();
      
      console.log('📊 System state analysis completed');
      
    } catch (error) {
      console.log('⚠️ System state analysis failed, continuing...');
    }
  }

  getSystemResources() {
    try {
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      return {
        memory: {
          total: memoryUsage.heapTotal,
          used: memoryUsage.heapUsed,
          available: memoryUsage.heapTotal - memoryUsage.heapUsed,
          percentage: (memoryUsage.heapUsed / memoryUsage.heapTotal * 100).toFixed(2)
        },
        cpu: {
          user: cpuUsage.user,
          system: cpuUsage.system,
          percentage: 0 // Would need external monitoring for real CPU percentage
        },
        timestamp: Date.now()
      };
    } catch (error) {
      return { memory: {}, cpu: {}, timestamp: Date.now() };
    }
  }

  async checkAutomationStatus() {
    try {
      // Check PM2 status for existing automations
      const pm2Status = execSync('pm2 jlist', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const pm2Processes = JSON.parse(pm2Status);
      
      // Update automation status based on PM2 processes
      pm2Processes.forEach(process => {
        Object.values(this.automations).forEach(automation => {
          if (process.name.includes(automation.name.toLowerCase().replace(/\s+/g, '-'))) {
            automation.status = process.pm2_env.status;
            automation.lastRun = process.pm2_env.pm_uptime;
          }
        });
      });
      
    } catch (error) {
      console.log('⚠️ PM2 status check failed, continuing...');
    }
  }

  async analyzeDependencies() {
    console.log('🔗 Analyzing automation dependencies...');
    
    try {
      // Check for dependency conflicts
      const conflicts = [];
      
      Object.entries(this.automations).forEach(([key, automation]) => {
        automation.dependencies.forEach(dep => {
          const dependency = this.automations[dep];
          if (dependency && dependency.status === 'running') {
            conflicts.push({
              automation: key,
              dependency: dep,
              type: 'dependency-conflict',
              description: `${automation.name} depends on ${dependency.name} which is currently running`
            });
          }
        });
      });
      
      this.orchestrationResults.conflicts = conflicts;
      
      if (conflicts.length > 0) {
        console.log(`⚠️ Found ${conflicts.length} dependency conflicts`);
      }
      
    } catch (error) {
      console.log('⚠️ Dependency analysis failed, continuing...');
    }
  }

  async checkUrgentIssues() {
    console.log('🚨 Checking for urgent issues...');
    
    try {
      const urgentIssues = [];
      
      // Check for critical security vulnerabilities
      try {
        const auditOutput = execSync('npm audit --json', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const auditData = JSON.parse(auditOutput);
        const criticalVulns = Object.values(auditData.vulnerabilities || {}).filter(v => v.severity === 'critical');
        
        if (criticalVulns.length > 0) {
          urgentIssues.push({
            type: 'security',
            severity: 'critical',
            description: `${criticalVulns.length} critical security vulnerabilities detected`,
            action: 'Run dependency manager immediately'
          });
        }
      } catch (error) {
        // Audit failed, continue
      }
      
      // Check for build failures
      try {
        execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      } catch (error) {
        urgentIssues.push({
          type: 'build',
          severity: 'high',
          description: 'Build process is failing',
          action: 'Run code analyzer to identify issues'
        });
      }
      
      // Update automation priorities based on urgent issues
      urgentIssues.forEach(issue => {
        if (issue.type === 'security') {
          this.automations.dependencyManager.priority = 'critical';
        }
        if (issue.type === 'build') {
          this.automations.codeAnalyzer.priority = 'critical';
        }
      });
      
      if (urgentIssues.length > 0) {
        console.log(`🚨 Found ${urgentIssues.length} urgent issues requiring immediate attention`);
      }
      
    } catch (error) {
      console.log('⚠️ Urgent issue check failed, continuing...');
    }
  }

  async generateExecutionPlan() {
    console.log('📋 Generating intelligent execution plan...');
    
    try {
      const plan = [];
      
      // Sort automations by priority and dependencies
      const sortedAutomations = this.sortAutomationsByPriority();
      
      // Generate execution plan with timing
      let currentTime = Date.now();
      
      sortedAutomations.forEach(automation => {
        const executionSlot = {
          automation: automation.name,
          startTime: new Date(currentTime),
          estimatedDuration: automation.estimatedDuration,
          priority: automation.priority,
          dependencies: automation.dependencies,
          resourceRequirements: automation.resourceUsage
        };
        
        plan.push(executionSlot);
        currentTime += automation.estimatedDuration + 60000; // Add 1 minute buffer
      });
      
      this.orchestrationResults.executionPlan = plan;
      
      console.log(`📋 Execution plan generated with ${plan.length} automation slots`);
      
    } catch (error) {
      console.log('⚠️ Execution plan generation failed, continuing...');
    }
  }

  sortAutomationsByPriority() {
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    
    return Object.values(this.automations)
      .sort((a, b) => {
        // First sort by priority
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        
        // Then sort by dependencies (dependencies first)
        if (a.dependencies.length === 0 && b.dependencies.length > 0) return -1;
        if (b.dependencies.length === 0 && a.dependencies.length > 0) return 1;
        
        // Then sort by estimated duration (shorter first)
        return a.estimatedDuration - b.estimatedDuration;
      });
  }

  async allocateResources() {
    console.log('💾 Allocating system resources...');
    
    try {
      const allocation = {
        memory: { total: 0, available: 0, allocated: 0 },
        cpu: { total: 0, available: 0, allocated: 0 },
        timing: { total: 0, available: 0, allocated: 0 }
      };
      
      // Calculate resource requirements
      Object.values(this.automations).forEach(automation => {
        if (automation.status === 'idle') {
          // Memory allocation
          const memoryReq = this.getMemoryRequirement(automation.resourceUsage.memory);
          allocation.memory.allocated += memoryReq;
          
          // CPU allocation
          const cpuReq = this.getCPURequirement(automation.resourceUsage.cpu);
          allocation.cpu.allocated += cpuReq;
          
          // Time allocation
          allocation.timing.allocated += automation.estimatedDuration;
        }
      });
      
      // Check resource availability
      allocation.memory.total = this.systemResources.memory.total;
      allocation.memory.available = this.systemResources.memory.available;
      
      allocation.cpu.total = 100; // Assume 100% CPU availability
      allocation.cpu.available = 100 - allocation.cpu.allocated;
      
      allocation.timing.total = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      allocation.timing.available = allocation.timing.total - allocation.timing.allocated;
      
      this.orchestrationResults.resourceAllocation = allocation;
      
      // Generate resource recommendations
      this.generateResourceRecommendations(allocation);
      
      console.log('💾 Resource allocation completed');
      
    } catch (error) {
      console.log('⚠️ Resource allocation failed, continuing...');
    }
  }

  getMemoryRequirement(level) {
    const requirements = { low: 100 * 1024 * 1024, medium: 200 * 1024 * 1024, high: 500 * 1024 * 1024 };
    return requirements[level] || requirements.medium;
  }

  getCPURequirement(level) {
    const requirements = { low: 10, medium: 25, high: 50 };
    return requirements[level] || requirements.medium;
  }

  generateResourceRecommendations(allocation) {
    const recommendations = [];
    
    if (allocation.memory.allocated > allocation.memory.available * 0.8) {
      recommendations.push({
        type: 'memory',
        severity: 'high',
        description: 'High memory usage detected',
        action: 'Consider running automations sequentially or during off-peak hours',
        impact: 'May cause system instability'
      });
    }
    
    if (allocation.cpu.allocated > allocation.cpu.available * 0.8) {
      recommendations.push({
        type: 'cpu',
        severity: 'medium',
        description: 'High CPU usage planned',
        action: 'Stagger automation execution to avoid system overload',
        impact: 'May slow down other processes'
      });
    }
    
    if (allocation.timing.allocated > allocation.timing.available * 0.8) {
      recommendations.push({
        type: 'timing',
        severity: 'medium',
        description: 'Limited time available for automations',
        action: 'Prioritize critical automations and defer non-essential ones',
        impact: 'Some automations may be delayed'
      });
    }
    
    this.orchestrationResults.recommendations = recommendations;
  }

  async executeAutomations() {
    console.log('🚀 Executing automations according to plan...');
    
    try {
      const executionResults = [];
      
      for (const executionSlot of this.orchestrationResults.executionPlan) {
        const automation = Object.values(this.automations).find(a => a.name === executionSlot.automation);
        
        if (automation && automation.status === 'idle') {
          console.log(`🚀 Executing ${automation.name}...`);
          
          const executionStart = performance.now();
          automation.status = 'running';
          
          try {
            // Execute automation
            const result = await this.executeAutomation(automation);
            
            const executionDuration = performance.now() - executionStart;
            automation.status = 'completed';
            automation.lastRun = Date.now();
            
            executionResults.push({
              automation: automation.name,
              status: 'success',
              duration: executionDuration,
              startTime: executionSlot.startTime,
              result: result
            });
            
            console.log(`✅ ${automation.name} completed in ${executionDuration.toFixed(2)}ms`);
            
          } catch (error) {
            automation.status = 'failed';
            
            executionResults.push({
              automation: automation.name,
              status: 'failed',
              duration: performance.now() - executionStart,
              startTime: executionSlot.startTime,
              error: error.message
            });
            
            console.log(`❌ ${automation.name} failed: ${error.message}`);
          }
          
          // Add delay between automations to prevent resource conflicts
          await new Promise(resolve => setTimeout(resolve, 30000)); // 30 second delay
        }
      }
      
      this.executionHistory.push({
        timestamp: Date.now(),
        results: executionResults
      });
      
      console.log('🚀 All automations executed');
      
    } catch (error) {
      console.log('⚠️ Automation execution failed, continuing...');
    }
  }

  async executeAutomation(automation) {
    return new Promise((resolve, reject) => {
      try {
        const result = execSync(`node ${automation.script}`, { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe',
          timeout: automation.estimatedDuration + 60000 // Add 1 minute buffer
        });
        
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async analyzeExecutionResults() {
    console.log('📊 Analyzing execution results...');
    
    try {
      const latestExecution = this.executionHistory[this.executionHistory.length - 1];
      
      if (latestExecution) {
        const results = latestExecution.results;
        
        // Calculate performance metrics
        const totalDuration = results.reduce((sum, result) => sum + result.duration, 0);
        const successCount = results.filter(r => r.status === 'success').length;
        const failureCount = results.filter(r => r.status === 'failed').length;
        const efficiency = (successCount / results.length) * 100;
        
        this.orchestrationResults.performance = {
          totalDuration,
          efficiency,
          successCount,
          failureCount,
          totalCount: results.length
        };
        
        // Generate performance insights
        this.generatePerformanceInsights(results);
        
        console.log(`📊 Analysis completed: ${successCount}/${results.length} automations successful (${efficiency.toFixed(1)}% efficiency)`);
      }
      
    } catch (error) {
      console.log('⚠️ Execution analysis failed, continuing...');
    }
  }

  generatePerformanceInsights(results) {
    const insights = [];
    
    // Analyze execution patterns
    const avgDuration = results.reduce((sum, r) => sum + r.duration, 0) / results.length;
    const slowExecutions = results.filter(r => r.duration > avgDuration * 1.5);
    
    if (slowExecutions.length > 0) {
      insights.push({
        type: 'performance',
        description: `${slowExecutions.length} automations took longer than expected`,
        action: 'Investigate performance bottlenecks in slow automations',
        impact: 'May indicate resource constraints or inefficiencies'
      });
    }
    
    // Analyze failure patterns
    const failures = results.filter(r => r.status === 'failed');
    if (failures.length > 0) {
      insights.push({
        type: 'reliability',
        description: `${failures.length} automations failed during execution`,
        action: 'Review error logs and fix underlying issues',
        impact: 'Reduces overall system reliability'
      });
    }
    
    // Add insights to results
    this.orchestrationResults.insights = insights;
  }

  async generateReport() {
    console.log('📊 Generating comprehensive orchestration report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      systemResources: this.systemResources,
      automations: this.automations,
      orchestrationResults: this.orchestrationResults,
      executionHistory: this.executionHistory.slice(-5), // Last 5 executions
      summary: this.generateSummary(),
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportDir, `orchestration-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-orchestration-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report saved to: ${reportPath}`);
    
    // Generate human-readable summary
    await this.generateHumanReadableSummary(report);
  }

  generateSummary() {
    const totalAutomations = Object.keys(this.automations).length;
    const completedAutomations = Object.values(this.automations).filter(a => a.status === 'completed').length;
    const runningAutomations = Object.values(this.automations).filter(a => a.status === 'running').length;
    const failedAutomations = Object.values(this.automations).filter(a => a.status === 'failed').length;
    
    return {
      totalAutomations,
      completedAutomations,
      runningAutomations,
      failedAutomations,
      successRate: (completedAutomations / totalAutomations * 100).toFixed(1),
      overallStatus: failedAutomations > 0 ? 'issues' : 'healthy'
    };
  }

  generateRecommendations() {
    const recommendations = [];
    
    // System resource recommendations
    if (this.orchestrationResults.recommendations.length > 0) {
      recommendations.push(...this.orchestrationResults.recommendations);
    }
    
    // Automation-specific recommendations
    Object.entries(this.automations).forEach(([key, automation]) => {
      if (automation.status === 'failed') {
        recommendations.push({
          type: 'automation',
          severity: 'high',
          description: `${automation.name} has failed and needs attention`,
          action: 'Investigate and fix the underlying issue',
          impact: 'Reduces system reliability'
        });
      }
      
      if (automation.status === 'idle' && automation.priority === 'critical') {
        recommendations.push({
          type: 'automation',
          severity: 'medium',
          description: `${automation.name} is critical but not running`,
          action: 'Ensure critical automations are properly configured',
          impact: 'May miss important issues'
        });
      }
    });
    
    // Performance recommendations
    if (this.orchestrationResults.performance.efficiency < 80) {
      recommendations.push({
        type: 'performance',
        severity: 'medium',
        description: 'Automation success rate is below optimal levels',
        action: 'Review and optimize automation scripts',
        impact: 'Reduces overall system effectiveness'
      });
    }
    
    return recommendations;
  }

  async generateHumanReadableSummary(report) {
    const summaryPath = path.join(this.reportDir, `orchestration-summary-${Date.now()}.md`);
    
    const summary = `# Intelligent Automation Orchestration Summary

## 📊 Orchestration Overview
- **Total Automations:** ${report.summary.totalAutomations}
- **Completed:** ${report.summary.completedAutomations}
- **Running:** ${report.summary.runningAutomations}
- **Failed:** ${report.summary.failedAutomations}
- **Success Rate:** ${report.summary.successRate}%
- **Overall Status:** ${report.summary.overallStatus}
- **Orchestration Duration:** ${report.duration}ms

## 🎯 Automation Status

${Object.entries(report.automations).map(([key, automation]) => 
  `### ${automation.name}
  - **Status:** ${automation.status}
  - **Priority:** ${automation.priority}
  - **Frequency:** ${automation.frequency}
  - **Last Run:** ${automation.lastRun ? new Date(automation.lastRun).toLocaleString() : 'Never'}
  - **Resource Usage:** Memory: ${automation.resourceUsage.memory}, CPU: ${automation.resourceUsage.cpu}`
).join('\n\n')}

## 🚀 Execution Plan

${report.orchestrationResults.executionPlan.map(slot => 
  `### ${slot.automation}
  - **Start Time:** ${slot.startTime.toLocaleString()}
  - **Duration:** ${(slot.estimatedDuration / 1000 / 60).toFixed(1)} minutes
  - **Priority:** ${slot.priority}
  - **Dependencies:** ${slot.dependencies.length > 0 ? slot.dependencies.join(', ') : 'None'}`
).join('\n\n')}

## 💾 Resource Allocation

### Memory
- **Total:** ${(report.orchestrationResults.resourceAllocation.memory.total / 1024 / 1024).toFixed(2)}MB
- **Available:** ${(report.orchestrationResults.resourceAllocation.memory.available / 1024 / 1024).toFixed(2)}MB
- **Allocated:** ${(report.orchestrationResults.resourceAllocation.memory.allocated / 1024 / 1024).toFixed(2)}MB

### CPU
- **Total:** ${report.orchestrationResults.resourceAllocation.cpu.total}%
- **Available:** ${report.orchestrationResults.resourceAllocation.cpu.available}%
- **Allocated:** ${report.orchestrationResults.resourceAllocation.cpu.allocated}%

### Timing
- **Total:** ${(report.orchestrationResults.resourceAllocation.timing.total / 1000 / 60 / 60).toFixed(1)} hours
- **Available:** ${(report.orchestrationResults.resourceAllocation.timing.available / 1000 / 60 / 60).toFixed(1)} hours
- **Allocated:** ${(report.orchestrationResults.resourceAllocation.timing.allocated / 1000 / 60 / 60).toFixed(1)} hours

## 📈 Performance Metrics

- **Total Execution Duration:** ${(report.orchestrationResults.performance.totalDuration / 1000 / 60).toFixed(1)} minutes
- **Success Rate:** ${report.orchestrationResults.performance.efficiency.toFixed(1)}%
- **Successful Executions:** ${report.orchestrationResults.performance.successCount}
- **Failed Executions:** ${report.orchestrationResults.performance.failureCount}

## ⚠️ Issues & Conflicts

${report.orchestrationResults.conflicts.length > 0 ? 
  report.orchestrationResults.conflicts.map(conflict => 
    `- **${conflict.type}:** ${conflict.description}`
  ).join('\n') : 
  'No conflicts detected'}

## 💡 Recommendations

${report.recommendations.map(rec => 
  `### ${rec.type.toUpperCase()}: ${rec.description}
  - **Severity:** ${rec.severity}
  - **Action:** ${rec.action}
  - **Impact:** ${rec.impact}`
).join('\n\n')}

## 🔄 Recent Execution History

${report.executionHistory.length > 0 ? 
  report.executionHistory.map(history => 
    `### ${new Date(history.timestamp).toLocaleString()}
    - **Results:** ${history.results.length} automations executed
    - **Success Rate:** ${(history.results.filter(r => r.status === 'success').length / history.results.length * 100).toFixed(1)}%`
  ).join('\n\n') : 
  'No execution history available yet'}

## 🚀 Next Steps

1. **Immediate:** Address any failed automations
2. **This Week:** Review and optimize resource allocation
3. **This Month:** Implement performance improvements based on insights
4. **Ongoing:** Monitor automation health and adjust priorities as needed

---

*This report was generated automatically by the Intelligent Automation Orchestrator*
`;

    fs.writeFileSync(summaryPath, summary);
    console.log(`📝 Human-readable summary saved to: ${summaryPath}`);
  }

  async saveErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      automations: this.automations,
      orchestrationResults: this.orchestrationResults
    };
    
    const errorPath = path.join(this.reportDir, `error-report-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    
    console.log(`❌ Error report saved to: ${errorPath}`);
  }
}

// Main execution
async function main() {
  const orchestrator = new IntelligentAutomationOrchestrator();
  
  // Set up graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Intelligent Automation Orchestrator...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down Intelligent Automation Orchestrator...');
    process.exit(0);
  });
  
  try {
    await orchestrator.orchestrateAutomations();
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = IntelligentAutomationOrchestrator;