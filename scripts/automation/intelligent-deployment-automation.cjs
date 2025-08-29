#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Intelligent Deployment Automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

class IntelligentDeploymentAutomation {
  constructor() {
    this.deploymentResults = {
      deploymentStatus: {},
      preDeploymentChecks: {},
      deploymentOpportunities: [],
      deploymentHistory: [],
      rollbackStrategies: {},
      recommendations: []
    };
    this.reportDir = path.join(process.cwd(), 'intelligent-deployment-reports');
    this.ensureReportDirectory();
    this.loadDeploymentHistory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadDeploymentHistory() {
    const historyPath = path.join(this.reportDir, 'deployment-history.json');
    if (fs.existsSync(historyPath)) {
      try {
        this.deploymentResults.deploymentHistory = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
      } catch (error) {
        console.log('⚠️  Could not load deployment history');
        this.deploymentResults.deploymentHistory = [];
      }
    }
  }

  async runIntelligentDeployment() {
    try {
      console.log(`🚀 Running Intelligent Deployment Analysis at ${new Date().toISOString()}`);
      
      // Check for deployment opportunities
      await this.checkDeploymentOpportunities();
      
      // Run pre-deployment checks
      await this.runPreDeploymentChecks();
      
      // Analyze deployment readiness
      await this.analyzeDeploymentReadiness();
      
      // Generate deployment recommendations
      await this.generateDeploymentRecommendations();
      
      // Generate comprehensive report
      await this.generateDeploymentReport();
      
      console.log('✅ Intelligent Deployment Analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent Deployment Analysis failed:', error.message);
    }
  }

  async checkDeploymentOpportunities() {
    console.log('🔍 Checking for deployment opportunities...');
    
    try {
      // Check git status for changes
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = gitStatus.trim().length > 0;
      
      if (hasChanges) {
        // Check if changes are committed
        const gitLog = execSync('git log --oneline -1', { encoding: 'utf8' });
        const lastCommit = gitLog.trim();
        
        // Check if there are uncommitted changes
        const uncommittedChanges = gitStatus.split('\n').filter(line => line.trim().length > 0);
        
        if (uncommittedChanges.length > 0) {
          this.deploymentResults.deploymentOpportunities.push({
            type: 'uncommitted-changes',
            priority: 'high',
            description: 'Uncommitted changes detected',
            changes: uncommittedChanges,
            recommendation: 'Commit changes before deployment',
            estimatedEffort: '5-10 minutes'
          });
        } else {
          // Check if there are new commits since last deployment
          const lastDeployment = this.getLastDeployment();
          if (lastDeployment) {
            const commitsSinceDeployment = execSync(`git log --oneline ${lastDeployment.commit}..HEAD`, { encoding: 'utf8' });
            if (commitsSinceDeployment.trim().length > 0) {
              this.deploymentResults.deploymentOpportunities.push({
                type: 'new-commits',
                priority: 'medium',
                description: 'New commits since last deployment',
                commits: commitsSinceDeployment.split('\n').filter(line => line.trim().length > 0),
                recommendation: 'Deploy new changes',
                estimatedEffort: '15-30 minutes'
              });
            }
          }
        }
      }
      
      // Check for package updates
      await this.checkPackageUpdates();
      
      // Check for security patches
      await this.checkSecurityPatches();
      
      console.log(`✅ Found ${this.deploymentResults.deploymentOpportunities.length} deployment opportunities`);
      
    } catch (error) {
      console.log('⚠️  Could not check deployment opportunities:', error.message);
    }
  }

  async checkPackageUpdates() {
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8', stdio: 'pipe' });
      const outdatedData = JSON.parse(outdatedOutput);
      
      const updateCount = Object.keys(outdatedData).length;
      if (updateCount > 0) {
        this.deploymentResults.deploymentOpportunities.push({
          type: 'package-updates',
          priority: 'medium',
          description: `${updateCount} packages have updates available`,
          details: outdatedData,
          recommendation: 'Update packages and deploy',
          estimatedEffort: '30-60 minutes'
        });
      }
    } catch (error) {
      // npm outdated returns 1 when packages are up to date
      if (error.status !== 1) {
        console.log('⚠️  Could not check package updates:', error.message);
      }
    }
  }

  async checkSecurityPatches() {
    try {
      // Check for security vulnerabilities
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8', stdio: 'pipe' });
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        const criticalVulns = Object.values(auditData.vulnerabilities).filter(v => 
          v.via.some(via => via.severity === 'critical')
        ).length;
        
        if (vulnCount > 0) {
          this.deploymentResults.deploymentOpportunities.push({
            type: 'security-patches',
            priority: criticalVulns > 0 ? 'critical' : 'high',
            description: `${vulnCount} security vulnerabilities found (${criticalVulns} critical)`,
            details: auditData,
            recommendation: 'Apply security patches immediately',
            estimatedEffort: '1-2 hours'
          });
        }
      }
    } catch (error) {
      console.log('⚠️  Could not check security patches:', error.message);
    }
  }

  async runPreDeploymentChecks() {
    console.log('✅ Running pre-deployment checks...');
    
    const checks = {
      build: await this.checkBuild(),
      tests: await this.checkTests(),
      linting: await this.checkLinting(),
      typeChecking: await this.checkTypeChecking(),
      dependencies: await this.checkDependencies(),
      environment: await this.checkEnvironment()
    };
    
    this.deploymentResults.preDeploymentChecks = checks;
    
    // Calculate overall readiness score
    const passedChecks = Object.values(checks).filter(check => check.status === 'passed').length;
    const totalChecks = Object.keys(checks).length;
    const readinessScore = Math.round((passedChecks / totalChecks) * 100);
    
    this.deploymentResults.deploymentStatus = {
      readinessScore,
      passedChecks,
      totalChecks,
      status: readinessScore >= 80 ? 'ready' : readinessScore >= 60 ? 'warning' : 'not-ready'
    };
    
    console.log(`✅ Pre-deployment checks: ${passedChecks}/${totalChecks} passed (${readinessScore}% ready)`);
  }

  async checkBuild() {
    try {
      console.log('🏗️  Checking build...');
      const startTime = Date.now();
      
      execSync('npm run build', { stdio: 'pipe' });
      
      const buildTime = Date.now() - startTime;
      const distPath = path.join(process.cwd(), 'dist');
      
      if (fs.existsSync(distPath)) {
        const buildSize = this.calculateBuildSize(distPath);
        
        return {
          status: 'passed',
          duration: buildTime,
          size: buildSize,
          message: `Build successful in ${buildTime}ms (${buildSize}KB)`
        };
      } else {
        return {
          status: 'failed',
          message: 'Build output not found'
        };
      }
    } catch (error) {
      return {
        status: 'failed',
        message: `Build failed: ${error.message}`
      };
    }
  }

  async checkTests() {
    try {
      console.log('🧪 Checking tests...');
      
      // Check if tests exist
      if (!fs.existsSync('tests') && !fs.existsSync('__tests__')) {
        return {
          status: 'warning',
          message: 'No test files found'
        };
      }
      
      const startTime = Date.now();
      const output = execSync('npm test -- --watchAll=false', { stdio: 'pipe' });
      const testTime = Date.now() - startTime;
      
      // Parse test results
      const testResults = this.parseTestResults(output);
      
      if (testResults.failed > 0) {
        return {
          status: 'failed',
          message: `${testResults.failed} tests are failing`,
          details: testResults
        };
      }
      
      return {
        status: 'passed',
        duration: testTime,
        message: `All ${testResults.passed} tests passed in ${testTime}ms`
      };
      
    } catch (error) {
      return {
        status: 'failed',
        message: `Tests failed: ${error.message}`
      };
    }
  }

  async checkLinting() {
    try {
      console.log('🔍 Checking linting...');
      
      const startTime = Date.now();
      execSync('npm run lint', { stdio: 'pipe' });
      const lintTime = Date.now() - startTime;
      
      return {
        status: 'passed',
        duration: lintTime,
        message: `Linting passed in ${lintTime}ms`
      };
      
    } catch (error) {
      return {
        status: 'failed',
        message: `Linting failed: ${error.message}`
      };
    }
  }

  async checkTypeChecking() {
    try {
      console.log('📝 Checking TypeScript...');
      
      const startTime = Date.now();
      execSync('npm run type-check', { stdio: 'pipe' });
      const typeCheckTime = Date.now() - startTime;
      
      return {
        status: 'passed',
        duration: typeCheckTime,
        message: `Type checking passed in ${typeCheckTime}ms`
      };
      
    } catch (error) {
      return {
        status: 'failed',
        message: `Type checking failed: ${error.message}`
      };
    }
  }

  async checkDependencies() {
    try {
      console.log('📦 Checking dependencies...');
      
      // Check for security vulnerabilities
      const auditOutput = execSync('npm audit --json', { stdio: 'pipe' });
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        const criticalVulns = Object.values(auditData.vulnerabilities).filter(v => 
          v.via.some(via => via.severity === 'critical')
        ).length;
        
        if (criticalVulns > 0) {
          return {
            status: 'failed',
            message: `${criticalVulns} critical security vulnerabilities found`,
            details: { total: vulnCount, critical: criticalVulns }
          };
        } else if (vulnCount > 0) {
          return {
            status: 'warning',
            message: `${vulnCount} non-critical security vulnerabilities found`,
            details: { total: vulnCount, critical: criticalVulns }
          };
        }
      }
      
      return {
        status: 'passed',
        message: 'Dependencies are secure'
      };
      
    } catch (error) {
      return {
        status: 'warning',
        message: `Could not check dependencies: ${error.message}`
      };
    }
  }

  async checkEnvironment() {
    try {
      console.log('🌍 Checking environment...');
      
      // Check for required environment variables
      const requiredEnvVars = ['NODE_ENV', 'VITE_API_URL'];
      const missingEnvVars = [];
      
      requiredEnvVars.forEach(envVar => {
        if (!process.env[envVar]) {
          missingEnvVars.push(envVar);
        }
      });
      
      if (missingEnvVars.length > 0) {
        return {
          status: 'warning',
          message: `Missing environment variables: ${missingEnvVars.join(', ')}`,
          details: { missing: missingEnvVars }
        };
      }
      
      return {
        status: 'passed',
        message: 'Environment configuration is complete'
      };
      
    } catch (error) {
      return {
        status: 'warning',
        message: `Could not check environment: ${error.message}`
      };
    }
  }

  calculateBuildSize(distPath) {
    let totalSize = 0;
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    };
    
    walkDir(distPath);
    return Math.round(totalSize / 1024); // Convert to KB
  }

  parseTestResults(output) {
    let passed = 0, failed = 0, skipped = 0;
    
    try {
      const lines = output.split('\n');
      
      lines.forEach(line => {
        if (line.includes('Tests:') && line.includes('passed')) {
          const match = line.match(/(\d+)\s+passed/);
          if (match) passed = parseInt(match[1]);
        }
        
        if (line.includes('Tests:') && line.includes('failed')) {
          const match = line.match(/(\d+)\s+failed/);
          if (match) failed = parseInt(match[1]);
        }
        
        if (line.includes('Tests:') && line.includes('skipped')) {
          const match = line.match(/(\d+)\s+skipped/);
          if (match) skipped = parseInt(match[1]);
        }
      });
    } catch (error) {
      console.log('⚠️  Could not parse test results');
    }
    
    return { passed, failed, skipped };
  }

  getLastDeployment() {
    if (this.deploymentResults.deploymentHistory.length > 0) {
      return this.deploymentResults.deploymentHistory[0];
    }
    return null;
  }

  async analyzeDeploymentReadiness() {
    console.log('📊 Analyzing deployment readiness...');
    
    const readiness = this.deploymentResults.deploymentStatus;
    const checks = this.deploymentResults.preDeploymentChecks;
    
    // Generate readiness recommendations
    const recommendations = [];
    
    if (readiness.status === 'not-ready') {
      recommendations.push('Fix failing checks before deployment');
    }
    
    if (checks.tests.status === 'failed') {
      recommendations.push('Fix failing tests before deployment');
    }
    
    if (checks.build.status === 'failed') {
      recommendations.push('Fix build issues before deployment');
    }
    
    if (checks.dependencies.status === 'failed') {
      recommendations.push('Address critical security vulnerabilities before deployment');
    }
    
    this.deploymentResults.recommendations = recommendations;
  }

  async generateDeploymentRecommendations() {
    console.log('💡 Generating deployment recommendations...');
    
    const opportunities = this.deploymentResults.deploymentOpportunities;
    const readiness = this.deploymentResults.deploymentStatus;
    
    // Prioritize deployment opportunities
    const criticalOpportunities = opportunities.filter(opp => opp.priority === 'critical');
    const highPriorityOpportunities = opportunities.filter(opp => opp.priority === 'high');
    const mediumPriorityOpportunities = opportunities.filter(opp => opp.priority === 'medium');
    
    if (criticalOpportunities.length > 0) {
      this.deploymentResults.recommendations.push({
        priority: 'critical',
        action: 'Deploy immediately to address critical issues',
        opportunities: criticalOpportunities
      });
    }
    
    if (highPriorityOpportunities.length > 0 && readiness.status !== 'not-ready') {
      this.deploymentResults.recommendations.push({
        priority: 'high',
        action: 'Deploy soon to address high-priority changes',
        opportunities: highPriorityOpportunities
      });
    }
    
    if (mediumPriorityOpportunities.length > 0 && readiness.status === 'ready') {
      this.deploymentResults.recommendations.push({
        priority: 'medium',
        action: 'Consider deployment for medium-priority changes',
        opportunities: mediumPriorityOpportunities
      });
    }
  }

  async generateDeploymentReport() {
    console.log('📊 Generating deployment report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        readinessScore: this.deploymentResults.deploymentStatus.readinessScore || 0,
        deploymentStatus: this.deploymentResults.deploymentStatus.status || 'unknown',
        opportunities: this.deploymentResults.deploymentOpportunities.length,
        recommendations: this.deploymentResults.recommendations.length
      },
      details: this.deploymentResults,
      nextActions: this.generateNextActions(),
      status: 'completed'
    };
    
    const reportPath = path.join(this.reportDir, `deployment-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Deployment report saved to ${reportPath}`);
    console.log(`📊 Deployment Readiness: ${report.summary.readinessScore}% (${report.summary.deploymentStatus})`);
    
    // Log critical issues
    if (report.summary.readinessScore < 60) {
      console.log(`🚨 DEPLOYMENT: Not ready for deployment!`);
    }
  }

  generateNextActions() {
    const actions = [];
    
    if (this.deploymentResults.deploymentStatus.status === 'not-ready') {
      actions.push('🔴 Fix failing pre-deployment checks before deploying');
    }
    
    const criticalOpportunities = this.deploymentResults.deploymentOpportunities.filter(opp => opp.priority === 'critical');
    if (criticalOpportunities.length > 0) {
      actions.push('🚨 Address critical deployment opportunities immediately');
    }
    
    if (this.deploymentResults.deploymentStatus.status === 'ready') {
      actions.push('✅ System is ready for deployment');
    }
    
    return actions;
  }

  // Method to trigger actual deployment (can be called manually or by other systems)
  async triggerDeployment(deploymentType = 'manual') {
    console.log(`🚀 Triggering ${deploymentType} deployment...`);
    
    try {
      // Record deployment start
      const deployment = {
        id: `deploy-${Date.now()}`,
        type: deploymentType,
        startTime: new Date().toISOString(),
        status: 'in-progress',
        commit: execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim(),
        branch: execSync('git branch --show-current', { encoding: 'utf8' }).trim()
      };
      
      // Add to history
      this.deploymentResults.deploymentHistory.unshift(deployment);
      
      // Save history
      const historyPath = path.join(this.reportDir, 'deployment-history.json');
      fs.writeFileSync(historyPath, JSON.stringify(this.deploymentResults.deploymentHistory, null, 2));
      
      // Here you would implement actual deployment logic
      // For now, we'll simulate a deployment
      console.log('📦 Simulating deployment process...');
      
      // Update deployment status
      deployment.status = 'completed';
      deployment.endTime = new Date().toISOString();
      deployment.duration = new Date(deployment.endTime) - new Date(deployment.startTime);
      
      console.log(`✅ Deployment completed in ${deployment.duration}ms`);
      
      return deployment;
      
    } catch (error) {
      console.error('❌ Deployment failed:', error.message);
      return { status: 'failed', error: error.message };
    }
  }
}

// Main execution
async function main() {
  const deploymentAutomation = new IntelligentDeploymentAutomation();
  
  // Run initial analysis
  await deploymentAutomation.runIntelligentDeployment();
  
  // Set up continuous analysis
  setInterval(async () => {
    await deploymentAutomation.runIntelligentDeployment();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🚀 Intelligent Deployment Automation running continuously (${AUTOMATION_INTERVAL / 60000} minute intervals)`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🚀 Intelligent Deployment Automation shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🚀 Intelligent Deployment Automation shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Intelligent Deployment Automation failed to start:', error);
  process.exit(1);
});