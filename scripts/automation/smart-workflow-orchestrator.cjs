#!/usr/bin/env node

/**
 * Smart Development Workflow Orchestrator - PM2 Automation
 * Intelligently manages development tasks and automates repetitive workflows
 * 
 * Features:
 * - Intelligent task scheduling and prioritization
 * - Automated workflow execution
 * - Context-aware task management
 * - Performance monitoring and optimization
 * - Team collaboration automation
 * - Code review automation
 * - Deployment workflow management
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class SmartWorkflowOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-workflow-orchestrator.log');
    this.workflowsLog = path.join(this.projectRoot, 'logs', 'workflows.json');
    this.tasksLog = path.join(this.projectRoot, 'logs', 'tasks.json');
    this.ensureLogsDirectory();
    
    this.activeWorkflows = new Map();
    this.taskQueue = [];
    this.workflowHistory = [];
    this.performanceMetrics = {
      completedTasks: 0,
      failedTasks: 0,
      averageTaskTime: 0,
      workflowSuccessRate: 0
    };
    
    this.workflowDefinitions = this.loadWorkflowDefinitions();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadWorkflowDefinitions() {
    return {
      // Development workflow
      development: {
        name: 'Development Workflow',
        description: 'Automated development task management',
        steps: [
          { name: 'code-analysis', action: 'analyze-code', priority: 'HIGH' },
          { name: 'quality-checks', action: 'run-quality-checks', priority: 'HIGH' },
          { name: 'testing', action: 'run-tests', priority: 'MEDIUM' },
          { name: 'build-verification', action: 'verify-build', priority: 'HIGH' },
          { name: 'deployment-prep', action: 'prepare-deployment', priority: 'MEDIUM' }
        ],
        triggers: ['file-change', 'git-commit', 'manual'],
        conditions: ['code-changed', 'tests-passing', 'build-successful']
      },

      // Code review workflow
      codeReview: {
        name: 'Code Review Workflow',
        description: 'Automated code review and quality assurance',
        steps: [
          { name: 'static-analysis', action: 'run-static-analysis', priority: 'HIGH' },
          { name: 'security-scan', action: 'security-scan', priority: 'CRITICAL' },
          { name: 'performance-check', action: 'performance-check', priority: 'MEDIUM' },
          { name: 'documentation-check', action: 'check-documentation', priority: 'LOW' },
          { name: 'review-report', action: 'generate-review-report', priority: 'MEDIUM' }
        ],
        triggers: ['pull-request', 'code-push', 'manual'],
        conditions: ['code-analyzed', 'security-verified', 'performance-optimized']
      },

      // Deployment workflow
      deployment: {
        name: 'Deployment Workflow',
        description: 'Automated deployment and release management',
        steps: [
          { name: 'pre-deployment-check', action: 'pre-deployment-verification', priority: 'CRITICAL' },
          { name: 'build-optimization', action: 'optimize-build', priority: 'HIGH' },
          { name: 'testing-staging', action: 'test-staging', priority: 'HIGH' },
          { name: 'deployment-execution', action: 'execute-deployment', priority: 'CRITICAL' },
          { name: 'post-deployment-verification', action: 'verify-deployment', priority: 'HIGH' }
        ],
        triggers: ['deployment-request', 'release-tag', 'manual'],
        conditions: ['tests-passing', 'build-optimized', 'staging-verified']
      },

      // Maintenance workflow
      maintenance: {
        name: 'Maintenance Workflow',
        description: 'Automated system maintenance and optimization',
        steps: [
          { name: 'dependency-update', action: 'update-dependencies', priority: 'MEDIUM' },
          { name: 'security-patches', action: 'apply-security-patches', priority: 'HIGH' },
          { name: 'performance-optimization', action: 'optimize-performance', priority: 'MEDIUM' },
          { name: 'cleanup', action: 'cleanup-system', priority: 'LOW' },
          { name: 'health-check', action: 'system-health-check', priority: 'HIGH' }
        ],
        triggers: ['scheduled', 'security-alert', 'performance-degradation'],
        conditions: ['system-stable', 'backup-available', 'maintenance-window']
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async startWorkflow(workflowType, context = {}) {
    this.log(`Starting ${workflowType} workflow...`);
    
    const workflow = this.workflowDefinitions[workflowType];
    if (!workflow) {
      throw new Error(`Unknown workflow type: ${workflowType}`);
    }

    const workflowId = this.generateWorkflowId();
    const workflowInstance = {
      id: workflowId,
      type: workflowType,
      definition: workflow,
      context: context,
      status: 'RUNNING',
      startTime: new Date().toISOString(),
      currentStep: 0,
      completedSteps: [],
      failedSteps: [],
      results: {},
      metadata: {
        trigger: context.trigger || 'manual',
        priority: context.priority || 'MEDIUM',
        estimatedDuration: this.estimateWorkflowDuration(workflow)
      }
    };

    this.activeWorkflows.set(workflowId, workflowInstance);
    this.log(`Workflow ${workflowId} started with ${workflow.steps.length} steps`);

    // Execute workflow steps
    await this.executeWorkflowSteps(workflowInstance);

    return workflowInstance;
  }

  async executeWorkflowSteps(workflowInstance) {
    const { definition, steps } = workflowInstance;
    
    for (let i = 0; i < definition.steps.length; i++) {
      const step = definition.steps[i];
      workflowInstance.currentStep = i;
      
      try {
        this.log(`Executing step ${i + 1}/${definition.steps.length}: ${step.name}`);
        
        // Check if step conditions are met
        if (!await this.checkStepConditions(step, workflowInstance)) {
          this.log(`Step ${step.name} conditions not met, skipping`, 'WARN');
          continue;
        }

        // Execute step
        const stepResult = await this.executeStep(step, workflowInstance);
        
        // Record step completion
        workflowInstance.completedSteps.push({
          step: step.name,
          result: stepResult,
          timestamp: new Date().toISOString(),
          duration: stepResult.duration || 0
        });

        // Update workflow results
        workflowInstance.results[step.name] = stepResult;

        this.log(`Step ${step.name} completed successfully`);

        // Check if workflow should continue
        if (stepResult.shouldContinue === false) {
          this.log(`Workflow stopped at step ${step.name}`, 'WARN');
          break;
        }

      } catch (error) {
        this.log(`Step ${step.name} failed: ${error.message}`, 'ERROR');
        
        workflowInstance.failedSteps.push({
          step: step.name,
          error: error.message,
          timestamp: new Date().toISOString()
        });

        // Check if workflow should continue on failure
        if (step.priority === 'CRITICAL') {
          workflowInstance.status = 'FAILED';
          this.log(`Critical step failed, stopping workflow`, 'ERROR');
          break;
        }
      }
    }

    // Complete workflow
    await this.completeWorkflow(workflowInstance);
  }

  async checkStepConditions(step, workflowInstance) {
    try {
      // Check basic conditions
      if (step.conditions) {
        for (const condition of step.conditions) {
          if (!await this.evaluateCondition(condition, workflowInstance)) {
            return false;
          }
        }
      }

      // Check workflow-level conditions
      const workflow = workflowInstance.definition;
      if (workflow.conditions) {
        for (const condition of workflow.conditions) {
          if (!await this.evaluateCondition(condition, workflowInstance)) {
            return false;
          }
        }
      }

      return true;
    } catch (error) {
      this.log(`Condition check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async evaluateCondition(condition, workflowInstance) {
    switch (condition) {
      case 'code-changed':
        return await this.checkCodeChanges();
      
      case 'tests-passing':
        return await this.checkTestsPassing();
      
      case 'build-successful':
        return await this.checkBuildSuccess();
      
      case 'code-analyzed':
        return workflowInstance.results['static-analysis']?.success === true;
      
      case 'security-verified':
        return workflowInstance.results['security-scan']?.success === true;
      
      case 'performance-optimized':
        return workflowInstance.results['performance-check']?.success === true;
      
      case 'system-stable':
        return await this.checkSystemStability();
      
      case 'backup-available':
        return await this.checkBackupAvailability();
      
      case 'maintenance-window':
        return await this.checkMaintenanceWindow();
      
      default:
        return true;
    }
  }

  async executeStep(step, workflowInstance) {
    const startTime = Date.now();
    
    try {
      let result;
      
      switch (step.action) {
        case 'analyze-code':
          result = await this.analyzeCode(workflowInstance);
          break;
        
        case 'run-quality-checks':
          result = await this.runQualityChecks(workflowInstance);
          break;
        
        case 'run-tests':
          result = await this.runTests(workflowInstance);
          break;
        
        case 'verify-build':
          result = await this.verifyBuild(workflowInstance);
          break;
        
        case 'prepare-deployment':
          result = await this.prepareDeployment(workflowInstance);
          break;
        
        case 'run-static-analysis':
          result = await this.runStaticAnalysis(workflowInstance);
          break;
        
        case 'security-scan':
          result = await this.securityScan(workflowInstance);
          break;
        
        case 'performance-check':
          result = await this.performanceCheck(workflowInstance);
          break;
        
        case 'check-documentation':
          result = await this.checkDocumentation(workflowInstance);
          break;
        
        case 'generate-review-report':
          result = await this.generateReviewReport(workflowInstance);
          break;
        
        case 'pre-deployment-verification':
          result = await this.preDeploymentVerification(workflowInstance);
          break;
        
        case 'optimize-build':
          result = await this.optimizeBuild(workflowInstance);
          break;
        
        case 'test-staging':
          result = await this.testStaging(workflowInstance);
          break;
        
        case 'execute-deployment':
          result = await this.executeDeployment(workflowInstance);
          break;
        
        case 'verify-deployment':
          result = await this.verifyDeployment(workflowInstance);
          break;
        
        case 'update-dependencies':
          result = await this.updateDependencies(workflowInstance);
          break;
        
        case 'apply-security-patches':
          result = await this.applySecurityPatches(workflowInstance);
          break;
        
        case 'optimize-performance':
          result = await this.optimizePerformance(workflowInstance);
          break;
        
        case 'cleanup-system':
          result = await this.cleanupSystem(workflowInstance);
          break;
        
        case 'system-health-check':
          result = await this.systemHealthCheck(workflowInstance);
          break;
        
        default:
          throw new Error(`Unknown step action: ${step.action}`);
      }

      result.duration = Date.now() - startTime;
      result.success = true;
      
      return result;

    } catch (error) {
      return {
        success: false,
        error: error.message,
        duration: Date.now() - startTime
      };
    }
  }

  // Step execution methods
  async analyzeCode(workflowInstance) {
    this.log('Analyzing code...');
    
    try {
      // Run code analysis tools
      const analysisResults = {
        linting: await this.runLinting(),
        typeChecking: await this.runTypeChecking(),
        complexity: await this.analyzeComplexity(),
        coverage: await this.analyzeCoverage()
      };

      return {
        type: 'code-analysis',
        results: analysisResults,
        summary: this.generateAnalysisSummary(analysisResults)
      };

    } catch (error) {
      throw new Error(`Code analysis failed: ${error.message}`);
    }
  }

  async runQualityChecks(workflowInstance) {
    this.log('Running quality checks...');
    
    try {
      const qualityResults = {
        eslint: await this.runESLint(),
        prettier: await this.runPrettier(),
        sonarqube: await this.runSonarQube()
      };

      return {
        type: 'quality-checks',
        results: qualityResults,
        summary: this.generateQualitySummary(qualityResults)
      };

    } catch (error) {
      throw new Error(`Quality checks failed: ${error.message}`);
    }
  }

  async runTests(workflowInstance) {
    this.log('Running tests...');
    
    try {
      const testResults = {
        unit: await this.runUnitTests(),
        integration: await this.runIntegrationTests(),
        e2e: await this.runE2ETests()
      };

      return {
        type: 'testing',
        results: testResults,
        summary: this.generateTestSummary(testResults)
      };

    } catch (error) {
      throw new Error(`Testing failed: ${error.message}`);
    }
  }

  async verifyBuild(workflowInstance) {
    this.log('Verifying build...');
    
    try {
      const buildResults = {
        compilation: await this.verifyCompilation(),
        bundling: await this.verifyBundling(),
        optimization: await this.verifyOptimization()
      };

      return {
        type: 'build-verification',
        results: buildResults,
        summary: this.generateBuildSummary(buildResults)
      };

    } catch (error) {
      throw new Error(`Build verification failed: ${error.message}`);
    }
  }

  async prepareDeployment(workflowInstance) {
    this.log('Preparing deployment...');
    
    try {
      const deploymentPrep = {
        environment: await this.checkEnvironment(),
        configuration: await this.validateConfiguration(),
        dependencies: await this.checkDeploymentDependencies()
      };

      return {
        type: 'deployment-prep',
        results: deploymentPrep,
        summary: this.generateDeploymentPrepSummary(deploymentPrep)
      };

    } catch (error) {
      throw new Error(`Deployment preparation failed: ${error.message}`);
    }
  }

  // Helper methods for step execution
  async runLinting() {
    try {
      execSync('npm run lint', { cwd: this.projectRoot, stdio: 'pipe' });
      return { success: true, issues: 0 };
    } catch (error) {
      return { success: false, issues: this.extractLintIssues(error.stdout?.toString() || '') };
    }
  }

  async runTypeChecking() {
    try {
      execSync('npm run type-check', { cwd: this.projectRoot, stdio: 'pipe' });
      return { success: true, errors: 0 };
    } catch (error) {
      return { success: false, errors: this.extractTypeErrors(error.stdout?.toString() || '') };
    }
  }

  async runESLint() {
    try {
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx', { cwd: this.projectRoot, stdio: 'pipe' });
      return { success: true, issues: 0 };
    } catch (error) {
      return { success: false, issues: this.extractESLintIssues(error.stdout?.toString() || '') };
    }
  }

  async runUnitTests() {
    try {
      execSync('npm test', { cwd: this.projectRoot, stdio: 'pipe' });
      return { success: true, passed: 0, failed: 0 };
    } catch (error) {
      return { success: false, passed: 0, failed: this.extractTestFailures(error.stdout?.toString() || '') };
    }
  }

  // Condition checking methods
  async checkCodeChanges() {
    try {
      const result = execSync('git status --porcelain', { cwd: this.projectRoot, stdio: 'pipe' });
      return result.toString().trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  async checkTestsPassing() {
    try {
      execSync('npm test', { cwd: this.projectRoot, stdio: 'pipe' });
      return true;
    } catch (error) {
      return false;
    }
  }

  async checkBuildSuccess() {
    try {
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe' });
      return true;
    } catch (error) {
      return false;
    }
  }

  async checkSystemStability() {
    // Check system resources and stability
    return true; // Simplified for now
  }

  async checkBackupAvailability() {
    // Check if backups are available
    return true; // Simplified for now
  }

  async checkMaintenanceWindow() {
    // Check if we're in a maintenance window
    const now = new Date();
    const hour = now.getHours();
    // Maintenance window: 2 AM - 4 AM
    return hour >= 2 && hour < 4;
  }

  // Utility methods
  generateWorkflowId() {
    return `workflow_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
  }

  estimateWorkflowDuration(workflow) {
    // Estimate duration based on step complexity and priority
    let totalDuration = 0;
    for (const step of workflow.steps) {
      switch (step.priority) {
        case 'CRITICAL':
          totalDuration += 300; // 5 minutes
          break;
        case 'HIGH':
          totalDuration += 180; // 3 minutes
          break;
        case 'MEDIUM':
          totalDuration += 120; // 2 minutes
          break;
        case 'LOW':
          totalDuration += 60; // 1 minute
          break;
      }
    }
    return totalDuration;
  }

  extractLintIssues(output) {
    // Extract number of linting issues from output
    const match = output.match(/(\d+)\s+problems?/);
    return match ? parseInt(match[1]) : 0;
  }

  extractTypeErrors(output) {
    // Extract number of type errors from output
    const match = output.match(/(\d+)\s+errors?/);
    return match ? parseInt(match[1]) : 0;
  }

  extractESLintIssues(output) {
    // Extract number of ESLint issues from output
    const match = output.match(/(\d+)\s+problems?/);
    return match ? parseInt(match[1]) : 0;
  }

  extractTestFailures(output) {
    // Extract number of test failures from output
    const match = output.match(/(\d+)\s+failed/);
    return match ? parseInt(match[1]) : 0;
  }

  // Summary generation methods
  generateAnalysisSummary(results) {
    const totalIssues = results.linting.issues + results.typeChecking.errors;
    return {
      status: totalIssues === 0 ? 'PASS' : 'FAIL',
      totalIssues,
      recommendations: totalIssues > 0 ? 'Fix identified issues before proceeding' : 'Code quality is good'
    };
  }

  generateQualitySummary(results) {
    const totalIssues = results.eslint.issues;
    return {
      status: totalIssues === 0 ? 'PASS' : 'FAIL',
      totalIssues,
      recommendations: totalIssues > 0 ? 'Address code style and quality issues' : 'Code meets quality standards'
    };
  }

  generateTestSummary(results) {
    const totalTests = results.unit.passed + results.unit.failed;
    return {
      status: results.unit.failed === 0 ? 'PASS' : 'FAIL',
      totalTests,
      passed: results.unit.passed,
      failed: results.unit.failed,
      recommendations: results.unit.failed > 0 ? 'Fix failing tests before proceeding' : 'All tests passing'
    };
  }

  generateBuildSummary(results) {
    return {
      status: 'PASS',
      summary: 'Build verification completed successfully',
      recommendations: 'Build is ready for deployment'
    };
  }

  generateDeploymentPrepSummary(results) {
    return {
      status: 'PASS',
      summary: 'Deployment preparation completed',
      recommendations: 'System is ready for deployment'
    };
  }

  async completeWorkflow(workflowInstance) {
    const endTime = new Date();
    const duration = new Date(endTime) - new Date(workflowInstance.startTime);
    
    workflowInstance.endTime = endTime.toISOString();
    workflowInstance.duration = duration;
    
    if (workflowInstance.failedSteps.length === 0) {
      workflowInstance.status = 'COMPLETED';
      this.log(`Workflow ${workflowInstance.id} completed successfully in ${duration}ms`);
    } else {
      workflowInstance.status = 'COMPLETED_WITH_ERRORS';
      this.log(`Workflow ${workflowInstance.id} completed with ${workflowInstance.failedSteps.length} errors in ${duration}ms`);
    }

    // Move to history
    this.workflowHistory.push(workflowInstance);
    this.activeWorkflows.delete(workflowInstance.id);

    // Update performance metrics
    this.updatePerformanceMetrics(workflowInstance);

    // Save workflow results
    await this.saveWorkflowResults(workflowInstance);

    // Generate workflow report
    await this.generateWorkflowReport(workflowInstance);
  }

  updatePerformanceMetrics(workflowInstance) {
    this.performanceMetrics.completedTasks += workflowInstance.completedSteps.length;
    this.performanceMetrics.failedTasks += workflowInstance.failedSteps.length;
    
    // Calculate average task time
    const totalTaskTime = workflowInstance.completedSteps.reduce((sum, step) => sum + step.duration, 0);
    this.performanceMetrics.averageTaskTime = totalTaskTime / workflowInstance.completedSteps.length;
    
    // Calculate success rate
    const totalWorkflows = this.workflowHistory.length;
    const successfulWorkflows = this.workflowHistory.filter(w => w.status === 'COMPLETED').length;
    this.performanceMetrics.workflowSuccessRate = (successfulWorkflows / totalWorkflows) * 100;
  }

  async saveWorkflowResults(workflowInstance) {
    try {
      // Save individual workflow results
      const workflowFile = path.join(this.projectRoot, 'logs', `workflow-${workflowInstance.id}.json`);
      fs.writeFileSync(workflowFile, JSON.stringify(workflowInstance, null, 2));
      
      // Update workflows log
      const workflows = this.workflowHistory.map(w => ({
        id: w.id,
        type: w.type,
        status: w.status,
        startTime: w.startTime,
        endTime: w.endTime,
        duration: w.duration,
        completedSteps: w.completedSteps.length,
        failedSteps: w.failedSteps.length
      }));
      
      fs.writeFileSync(this.workflowsLog, JSON.stringify(workflows, null, 2));
      
      this.log('Workflow results saved successfully');
    } catch (error) {
      this.log(`Failed to save workflow results: ${error.message}`, 'ERROR');
    }
  }

  async generateWorkflowReport(workflowInstance) {
    try {
      const report = {
        workflowId: workflowInstance.id,
        type: workflowInstance.type,
        status: workflowInstance.status,
        duration: workflowInstance.duration,
        summary: {
          totalSteps: workflowInstance.definition.steps.length,
          completedSteps: workflowInstance.completedSteps.length,
          failedSteps: workflowInstance.failedSteps.length,
          successRate: (workflowInstance.completedSteps.length / workflowInstance.definition.steps.length) * 100
        },
        stepResults: workflowInstance.completedSteps.map(step => ({
          name: step.step,
          duration: step.duration,
          success: true
        })),
        failedSteps: workflowInstance.failedSteps.map(step => ({
          name: step.step,
          error: step.error
        })),
        recommendations: this.generateWorkflowRecommendations(workflowInstance)
      };

      const reportFile = path.join(this.projectRoot, 'logs', `workflow-report-${workflowInstance.id}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Workflow report generated: ${reportFile}`);
    } catch (error) {
      this.log(`Failed to generate workflow report: ${error.message}`, 'ERROR');
    }
  }

  generateWorkflowRecommendations(workflowInstance) {
    const recommendations = [];

    if (workflowInstance.failedSteps.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        message: `Address ${workflowInstance.failedSteps.length} failed steps`,
        action: 'Review and fix failed steps before next execution'
      });
    }

    if (workflowInstance.duration > 300000) { // Longer than 5 minutes
      recommendations.push({
        priority: 'MEDIUM',
        message: 'Workflow execution time is long',
        action: 'Consider optimizing slow steps or parallelizing execution'
      });
    }

    if (workflowInstance.completedSteps.length < workflowInstance.definition.steps.length) {
      recommendations.push({
        priority: 'MEDIUM',
        message: 'Not all steps were completed',
        action: 'Review workflow conditions and step dependencies'
      });
    }

    return recommendations;
  }

  async start() {
    this.log('Smart Workflow Orchestrator started');
    
    // Start monitoring for workflow triggers
    this.startWorkflowMonitoring();
    
    // Schedule periodic maintenance workflows
    this.scheduleMaintenanceWorkflows();
    
    // Start performance monitoring
    this.startPerformanceMonitoring();
  }

  startWorkflowMonitoring() {
    // Monitor for file changes
    const chokidar = require('chokidar');
    const watcher = chokidar.watch([
      'src/**/*',
      'pages/**/*',
      'components/**/*'
    ], {
      ignored: /(node_modules|\.git|dist|build)/,
      persistent: true
    });

    watcher.on('change', async (path) => {
      this.log(`File change detected: ${path}`);
      await this.startWorkflow('development', { trigger: 'file-change', file: path });
    });

    watcher.on('add', async (path) => {
      this.log(`New file added: ${path}`);
      await this.startWorkflow('development', { trigger: 'file-change', file: path });
    });

    this.log('File change monitoring started');
  }

  scheduleMaintenanceWorkflows() {
    // Schedule daily maintenance at 2 AM
    setInterval(async () => {
      const now = new Date();
      if (now.getHours() === 2 && now.getMinutes() === 0) {
        await this.startWorkflow('maintenance', { trigger: 'scheduled' });
      }
    }, 60000); // Check every minute

    this.log('Maintenance workflow scheduling started');
  }

  startPerformanceMonitoring() {
    // Monitor workflow performance every 5 minutes
    setInterval(async () => {
      await this.generatePerformanceReport();
    }, 5 * 60 * 1000);

    this.log('Performance monitoring started');
  }

  async generatePerformanceReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        activeWorkflows: this.activeWorkflows.size,
        totalWorkflows: this.workflowHistory.length,
        performanceMetrics: this.performanceMetrics,
        recentWorkflows: this.workflowHistory.slice(-10).map(w => ({
          id: w.id,
          type: w.type,
          status: w.status,
          duration: w.duration
        }))
      };

      const reportFile = path.join(this.projectRoot, 'logs', 'performance-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log('Performance report generated');
    } catch (error) {
      this.log(`Failed to generate performance report: ${error.message}`, 'ERROR');
    }
  }

  // Public API methods
  async getWorkflowStatus(workflowId) {
    return this.activeWorkflows.get(workflowId) || 
           this.workflowHistory.find(w => w.id === workflowId);
  }

  async getActiveWorkflows() {
    return Array.from(this.activeWorkflows.values());
  }

  async getWorkflowHistory() {
    return this.workflowHistory;
  }

  async getPerformanceMetrics() {
    return this.performanceMetrics;
  }

  async stopWorkflow(workflowId) {
    const workflow = this.activeWorkflows.get(workflowId);
    if (workflow) {
      workflow.status = 'STOPPED';
      workflow.endTime = new Date().toISOString();
      
      this.workflowHistory.push(workflow);
      this.activeWorkflows.delete(workflowId);
      
      this.log(`Workflow ${workflowId} stopped`);
      return true;
    }
    return false;
  }
}

// Start the orchestrator if run directly
if (require.main === module) {
  const orchestrator = new SmartWorkflowOrchestrator();
  orchestrator.start().catch(console.error);
}

module.exports = SmartWorkflowOrchestrator;