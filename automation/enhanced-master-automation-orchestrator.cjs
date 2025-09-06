#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Enhanced Master Automation Orchestrator
 * Coordinates all automation tasks and provides intelligent scheduling
 */
class EnhancedMasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.automationTasks = [];
    this.results = {
      totalTasks: 0,
      successfulTasks: 0,
      failedTasks: 0,
      totalDuration: 0,
      taskResults: {}
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result, duration: 0 };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
        duration: 0
      };
    }
  }

  registerAutomationTask(name, command, description, priority = 1, dependencies = []) {
    this.automationTasks.push({
      name,
      command,
      description,
      priority,
      dependencies,
      status: 'pending',
      result: null
    });
  }

  async executeTask(task) {
    const startTime = Date.now();
    this.log(`\n🔄 Executing: ${task.description}`);
    
    try {
      const result = await this.runCommand(task.command, task.description);
      const duration = Date.now() - startTime;
      
      task.status = result.success ? 'completed' : 'failed';
      task.result = { ...result, duration };
      
      if (result.success) {
        this.results.successfulTasks++;
        this.log(`✅ ${task.name} completed successfully in ${duration}ms`, 'SUCCESS');
      } else {
        this.results.failedTasks++;
        this.log(`❌ ${task.name} failed: ${result.error}`, 'ERROR');
      }
      
      this.results.taskResults[task.name] = task.result;
      return result.success;
    } catch (error) {
      const duration = Date.now() - startTime;
      task.status = 'failed';
      task.result = { success: false, error: error.message, duration };
      this.results.failedTasks++;
      this.results.taskResults[task.name] = task.result;
      this.log(`❌ ${task.name} failed with error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async executeTasksInOrder() {
    this.log('\n🚀 Starting Enhanced Master Automation Orchestrator');
    this.log('='.repeat(60));
    
    // Sort tasks by priority (higher priority first)
    const sortedTasks = this.automationTasks.sort((a, b) => b.priority - a.priority);
    
    for (const task of sortedTasks) {
      // Check dependencies
      const unmetDependencies = task.dependencies.filter(dep => {
        const depTask = this.automationTasks.find(t => t.name === dep);
        return !depTask || depTask.status !== 'completed';
      });
      
      if (unmetDependencies.length > 0) {
        this.log(`⏳ Skipping ${task.name} - unmet dependencies: ${unmetDependencies.join(', ')}`, 'WARNING');
        continue;
      }
      
      await this.executeTask(task);
    }
  }

  async runComprehensiveAutomation() {
    this.log('🔧 Setting up comprehensive automation tasks...');
    
    // Register all automation tasks
    this.registerAutomationTask(
      'dependency-fix',
      'npm install',
      'Install Dependencies',
      10
    );
    
    this.registerAutomationTask(
      'code-quality',
      'npm run lint:fix && npm run type-check',
      'Code Quality Enhancement',
      9,
      ['dependency-fix']
    );
    
    this.registerAutomationTask(
      'security-audit',
      'npm audit --audit-level moderate',
      'Security Audit',
      8,
      ['dependency-fix']
    );
    
    this.registerAutomationTask(
      'build-optimization',
      'npm run build',
      'Build Optimization',
      7,
      ['code-quality']
    );
    
    this.registerAutomationTask(
      'performance-optimization',
      'npm run build:analyze',
      'Performance Optimization',
      6,
      ['build-optimization']
    );
    
    this.registerAutomationTask(
      'seo-optimization',
      'node scripts/generate-sitemap.cjs && node scripts/generate-search-index.cjs',
      'SEO Optimization',
      5,
      ['build-optimization']
    );
    
    this.registerAutomationTask(
      'accessibility-check',
      'npm run automation:accessibility',
      'Accessibility Check',
      4,
      ['build-optimization']
    );
    
    this.registerAutomationTask(
      'comprehensive-improvements',
      'node automation/comprehensive-app-improvement-suite.cjs',
      'Comprehensive App Improvements',
      3,
      ['performance-optimization', 'seo-optimization', 'accessibility-check']
    );
    
    this.registerAutomationTask(
      'testing',
      'npm run test:smoke',
      'Smoke Testing',
      2,
      ['comprehensive-improvements']
    );
    
    this.registerAutomationTask(
      'deployment',
      'git add . && git commit -m "feat: Enhanced automation improvements" && git push origin HEAD',
      'Deploy Changes',
      1,
      ['testing']
    );
    
    this.results.totalTasks = this.automationTasks.length;
    
    await this.executeTasksInOrder();
    this.generateFinalReport();
  }

  generateFinalReport() {
    this.results.totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 ENHANCED MASTER AUTOMATION REPORT');
    this.log('='.repeat(60));
    this.log(`Total Tasks: ${this.results.totalTasks}`);
    this.log(`Successful Tasks: ${this.results.successfulTasks}`);
    this.log(`Failed Tasks: ${this.results.failedTasks}`);
    this.log(`Total Duration: ${Math.round(this.results.totalDuration / 1000)}s`);
    this.log('');
    
    // Task summary
    Object.entries(this.results.taskResults).forEach(([taskName, result]) => {
      const status = result.success ? '✅' : '❌';
      const duration = `${result.duration}ms`;
      this.log(`${status} ${taskName}: ${duration}`);
      
      if (!result.success && result.error) {
        this.log(`   Error: ${result.error}`);
      }
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration: this.results.totalDuration,
      totalTasks: this.results.totalTasks,
      successfulTasks: this.results.successfulTasks,
      failedTasks: this.results.failedTasks,
      successRate: `${Math.round((this.results.successfulTasks / this.results.totalTasks) * 100)}%`,
      taskResults: this.results.taskResults,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(
      'enhanced-master-automation-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to enhanced-master-automation-report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.results.failedTasks > 0) {
      recommendations.push('Review and fix failed automation tasks');
    }
    
    if (this.results.successfulTasks / this.results.totalTasks < 0.8) {
      recommendations.push('Consider improving automation task reliability');
    }
    
    if (this.results.totalDuration > 300000) { // 5 minutes
      recommendations.push('Consider optimizing automation task performance');
    }
    
    recommendations.push('Set up continuous monitoring for automation tasks');
    recommendations.push('Implement automated rollback for failed deployments');
    recommendations.push('Add more comprehensive error handling and recovery');
    
    return recommendations;
  }

  async run() {
    try {
      await this.runComprehensiveAutomation();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the enhanced master automation orchestrator
if (require.main === module) {
  const orchestrator = new EnhancedMasterAutomationOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = EnhancedMasterAutomationOrchestrator;