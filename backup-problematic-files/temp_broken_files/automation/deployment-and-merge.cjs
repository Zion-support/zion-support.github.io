#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class DeploymentAndMerge {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.startTime = Date.now();
    this.results = {;
      preDeploymentChecks:{ success:false, checks:[] },;
      build:{ success:false, duration:0 },;
      tests:{ success:false, duration:0 },;
      gitOperations:{ success:false, operations:[] },;
      deployment:{ success:false, duration:0 }
    };
  }
;
  log(message, type = 'INFO') {;
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' :type === 'SUCCESS' ? '✅' :'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }
;
  async runCommand(command, description, options = {}) {;
    try {;
      this.log(`Running:${description}`);
      const result = execSync(command, {;
        cwd:this.projectRoot,;
        stdio:'pipe',;
        encoding:'utf8',;
        ...options;
      });
      this.log(`✅ ${description} completed successfully`);
      return { success:true, output:result };
    } catch (error) {;
      this.log(`❌ ${description} failed:${error.message}`, 'ERROR');
      return { success:false, error:error.message, output:error.stdout || error.stderr };
    }
  }
;
  async runPreDeploymentChecks() {;
    this.log('\n🔍 RUNNING PRE-DEPLOYMENT CHECKS');
    ;
    const checks = [];
    const startTime = Date.now();
;
    // Check if we're on the right branch;
    const currentBranch = execSync('git branch --show-current', { encoding:'utf8' }).trim();
    if (currentBranch !== 'main' && !currentBranch.includes('cursor/')) {;
      checks.push({ check:'Branch validation', success:false, message:'Not on main or cursor branch' });
    } else {;
      checks.push({ check:'Branch validation', success:true, message:`On branch:${currentBranch}` });
    }
;
    // Check for uncommitted changes;
    const gitStatus = await this.runCommand('git status --porcelain', 'Check git status');
    if (gitStatus.success && gitStatus.output.trim() === '') {;
      checks.push({ check:'Git status', success:true, message:'Working directory clean' });
    } else {;
      checks.push({ check:'Git status', success:false, message:'Uncommitted changes detected' });
    }
;
    // Check if dependencies are installed;
    const nodeModulesExists = fs.existsSync(path.join(this.projectRoot, 'node_modules'));
    checks.push({ ;
      check:'Dependencies', ;
      success:nodeModulesExists, ;
      message:nodeModulesExists ? 'Dependencies installed' :'Dependencies not installed' ;
    });
;
    // Check if build directory exists and is clean;
    const buildDir = path.join(this.projectRoot, '.next');
    if (fs.existsSync(buildDir)) {;
      checks.push({ check:'Build directory', success:true, message:'Build directory exists' });
    } else {;
      checks.push({ check:'Build directory', success:false, message:'Build directory does not exist' });
    }
;
    const successfulChecks = checks.filter(c => c.success).length;
    const totalChecks = checks.length;
;
    this.results.preDeploymentChecks = {;
      success:successfulChecks === totalChecks,;
      duration:Date.now() - startTime,;
      checks;
    };
;
    this.log(`Pre-deployment checks:${successfulChecks}/${totalChecks} passed`);
  }
;
  async runBuild() {;
    this.log('\n🏗️ RUNNING BUILD');
    ;
    const startTime = Date.now();
    ;
    // Clean previous build;
    await this.runCommand('npm run clean', 'Clean previous build');
    ;
    // Run production build;
    const buildResult = await this.runCommand('npm run build', 'Production build');
    ;
    this.results.build = {;
      success:buildResult.success,;
      duration:Date.now() - startTime;
    };
  }
;
  async runTests() {;
    this.log('\n🧪 RUNNING TESTS');
    ;
    const startTime = Date.now();
    ;
    // Run smoke tests;
    const testResult = await this.runCommand('npm run test:smoke', 'Smoke tests');
    ;
    this.results.tests = {;
      success:testResult.success,;
      duration:Date.now() - startTime;
    };
  }
;
  async performGitOperations() {;
    this.log('\n📝 PERFORMING GIT OPERATIONS');
    ;
    const operations = [];
    ;
    // Add all changes;
    const addResult = await this.runCommand('git add .', 'Add all changes');
    operations.push({ operation:'git add', success:addResult.success });
    ;
    if (addResult.success) {;
      // Commit changes;
      const commitMessage = `feat:Comprehensive automation improvements and fixes - ${new Date().toISOString()}`;
      const commitResult = await this.runCommand(`git commit -m "${commitMessage}"`, 'Commit changes');
      operations.push({ operation:'git commit', success:commitResult.success });
      ;
      if (commitResult.success) {;
        // Push changes;
        const pushResult = await this.runCommand('git push origin HEAD', 'Push changes');
        operations.push({ operation:'git push', success:pushResult.success });
      }
    }
;
    const successfulOperations = operations.filter(op => op.success).length;
    const totalOperations = operations.length;
;
    this.results.gitOperations = {;
      success:successfulOperations === totalOperations,;
      operations;
    };
;
    this.log(`Git operations:${successfulOperations}/${totalOperations} successful`);
  }
;
  async performDeployment() {;
    this.log('\n🚀 PERFORMING DEPLOYMENT');
    ;
    const startTime = Date.now();
    ;
    // Check if we can merge to main;
    const currentBranch = execSync('git branch --show-current', { encoding:'utf8' }).trim();
    ;
    if (currentBranch !== 'main') {;
      // Switch to main branch;
      const checkoutResult = await this.runCommand('git checkout main', 'Switch to main branch');
      ;
      if (checkoutResult.success) {;
        // Merge the current branch;
        const mergeResult = await this.runCommand(`git merge ${currentBranch}`, 'Merge branch');
        ;
        if (mergeResult.success) {;
          // Push to main;
          const pushMainResult = await this.runCommand('git push origin main', 'Push to main');
          ;
          this.results.deployment = {;
            success:pushMainResult.success,;
            duration:Date.now() - startTime;
          };
        } else {;
          this.results.deployment = {;
            success:false,;
            duration:Date.now() - startTime;
          };
        }
      } else {;
        this.results.deployment = {;
          success:false,;
          duration:Date.now() - startTime;
        };
      }
    } else {;
      // Already on main, just push;
      const pushResult = await this.runCommand('git push origin main', 'Push to main');
      this.results.deployment = {;
        success:pushResult.success,;
        duration:Date.now() - startTime;
      };
    }
  }
;
  generateReport() {;
    const totalDuration = Date.now() - this.startTime;
    const successfulSteps = Object.values(this.results).filter(r => r.success).length;
    const totalSteps = Object.keys(this.results).length;
;
    this.log('\n📊 DEPLOYMENT AND MERGE REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration:${totalDuration}ms`);
    this.log(`Successful Steps:${successfulSteps}/${totalSteps}`);
    this.log('');
;
    Object.entries(this.results).forEach(([step, result]) => {;
      const status = result.success ? '✅' :'❌';
      const duration = result.duration ? ` (${result.duration}ms)` :'';
      this.log(`${status} ${step} ${duration}`);
      ;
      if (result.checks) {;
        result.checks.forEach(check => {;
          const checkStatus = check.success ? '  ✓' :'  ✗';
          this.log(`${checkStatus} ${check.check} ${check.message}`);
        });
      }
      ;
      if (result.operations) {;
        result.operations.forEach(op => {;
          const opStatus = op.success ? '  ✓' :'  ✗';
          this.log(`${opStatus} ${op.operation}`);
        });
      }
    });
;
    // Save detailed report;
    const report = {;
      timestamp:new Date().toISOString(),;
      totalDuration,;
      successfulSteps,;
      totalSteps,;
      results:this.results,;
      summary:{;
        deploymentSuccessful:this.results.deployment.success,;
        allChecksPassed:this.results.preDeploymentChecks.success,;
        buildSuccessful:this.results.build.success,;
        testsPassed:this.results.tests.success,;
        gitOperationsSuccessful:this.results.gitOperations.success;
      }
    };
;
    const reportPath = path.join(this.projectRoot, 'automation/reports/deployment-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive:true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    ;
    this.log(`\n📄 Detailed report saved to:${reportPath}`);
  }
;
  async run() {;
    this.log('🚀 Starting Deployment and Merge Process');
    this.log('='.repeat(60));
;
    try {;
      await this.runPreDeploymentChecks();
      ;
      if (this.results.preDeploymentChecks.success) {;
        await this.runBuild();
        ;
        if (this.results.build.success) {;
          await this.runTests();
          ;
          if (this.results.tests.success) {;
            await this.performGitOperations();
            ;
            if (this.results.gitOperations.success) {;
              await this.performDeployment();
            }
          }
        }
      }
    } catch (error) {;
      this.log(`Fatal error:${error.message}`, 'ERROR');
    } finally {;
      this.generateReport();
    }
  }
}
;
// Run the deployment and merge process;
if (require.main === module) {;
  const deployment = new DeploymentAndMerge();
  deployment.run().catch(console.error);
}
;
module.exports = DeploymentAndMerge;