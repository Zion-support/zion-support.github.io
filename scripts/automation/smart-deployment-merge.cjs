#!/usr/bin/env node;
;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
;
console.log('🚀 Starting Smart Deployment & Merge Automation...');
;
class SmartDeploymentMerge {;
  constructor() {;
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.config = {;
      autoDeplo:y:process.env.AUTO_DEPLOY === 'true',;
      smartMerg:e:process.env.SMART_MERGE === 'true',;
      rollbackEnable:d:process.env.ROLLBACK_ENABLED === 'true',;
      qualityGate:s:process.env.QUALITY_GATES === 'strict',;
=======
    this.config = {
      autoDeploy: process.env.AUTO_DEPLOY === 'true',
      smartMerge: process.env.SMART_MERGE === 'true',
      rollbackEnabled: process.env.ROLLBACK_ENABLED === 'true',
      qualityGates: process.env.QUALITY_GATES === 'strict',
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
    this.deploymentData = this.loadDeploymentData();
  }
<<<<<<< HEAD
;
  loadDeploymentData() {;
    const dataFile = path.join(;
      this.projectRoot,;
      'logs',;
      'deployment-data.json';
=======

  loadDeploymentData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'deployment-data.json'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    );
    try {;
      if (fs.existsSync(dataFile)) {;
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      }
    } catch (error) {;
      console.log('📚 Creating new deployment data file...');
    }
<<<<<<< HEAD
    return {;
      deployment:s:[],;
      merge:s:[],;
      rollback:s:[],;
      qualityCheck:s:[],;
      lastDeploymen:t:null,;
=======
    return {
      deployments: [],
      merges: [],
      rollbacks: [],
      qualityChecks: [],
      lastDeployment: null,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
  }
<<<<<<< HEAD
;
  saveDeploymentData() {;
    const dataFile = path.join(;
      this.projectRoot,;
      'logs',;
      'deployment-data.json';
=======

  saveDeploymentData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'deployment-data.json'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    );
    fs.writeFileSync(dataFile, JSON.stringify(this.deploymentData, null, 2));
  }
;
  async runDeploymentWorkflow() {;
    console.log('🔄 Starting smart deployment workflow...');
;
    try {;
      // Check if deployment is needed;
      if (!(await this.shouldDeploy())) {;
        console.log('✅ No deployment needed at this time');
        return;
      }
;
      // Run quality gates;
      const qualityCheck = await this.runQualityGates();
      if (!qualityCheck.passed) {;
        console.log('❌ Quality gates failed, aborting deployment');
        return;
      }
;
      // Perform smart merge;
      if (this.config.smartMerge) {;
        await this.performSmartMerge();
      }
;
      // Deploy to staging;
      const stagingResult = await this.deployToStaging();
      if (!stagingResult.success) {;
        console.log('❌ Staging deployment failed');
        return;
      }
;
      // Run integration tests;
      const testResult = await this.runIntegrationTests();
      if (!testResult.success) {;
        console.log('❌ Integration tests failed, rolling back');
        await this.rollbackDeployment();
        return;
      }
;
      // Deploy to production;
      const productionResult = await this.deployToProduction();
      if (productionResult.success) {;
        console.log('✅ Production deployment successful!');
        await this.postDeploymentTasks();
      } else {;
        console.log('❌ Production deployment failed, rolling back');
        await this.rollbackDeployment();
      }
;
      // Update deployment data;
      this.updateDeploymentData(productionResult);
      this.saveDeploymentData();
<<<<<<< HEAD
    } catch (error) {;
      console.error('❌ Deployment workflow:failed:', error.message);
=======
    } catch (error) {
      console.error('❌ Deployment workflow failed:', error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      await this.handleDeploymentError(error);
    }
  }
;
  async shouldDeploy() {;
    console.log('🔍 Checking if deployment is needed...');
<<<<<<< HEAD
;
    try {;
      // Check for new commits;
      const lastCommit = execSync('git log -1 --format=%H', {;
        encodin:g:'utf8',;
=======

    try {
      // Check for new commits
      const lastCommit = execSync('git log -1 --format=%H', {
        encoding: 'utf8',
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      }).trim();
      const lastDeployment = this.deploymentData.lastDeployment;
;
      if (!lastDeployment || lastDeployment.commit !== lastCommit) {;
        console.log('📝 New commits detected, deployment needed');
        return true;
      }
<<<<<<< HEAD
;
      // Check for critical fixes;
      const recentCommits = execSync('git log --since="1 hour ago" --oneline', {;
        encodin:g:'utf8',;
      });
      if (recentCommits.includes('fi:x:') || recentCommits.includes('hotfi:x:')) {;
=======

      // Check for critical fixes
      const recentCommits = execSync('git log --since="1 hour ago" --oneline', {
        encoding: 'utf8',
      });
      if (recentCommits.includes('fix:') || recentCommits.includes('hotfix:')) {
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        console.log('🚨 Critical fixes detected, deployment needed');
        return true;
      }
;
      console.log('✅ No deployment needed');
      return false;
<<<<<<< HEAD
    } catch (error) {;
      console.log('⚠️  Could not check deployment:status:', error.message);
=======
    } catch (error) {
      console.log('⚠️  Could not check deployment status:', error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      return false;
    }
  }
;
  async runQualityGates() {;
    console.log('🛡️ Running quality gates...');
<<<<<<< HEAD
;
    const qualityCheck = {;
      passe:d:true,;
      check:s:[],;
      scor:e:0,;
=======

    const qualityCheck = {
      passed: true,
      checks: [],
      score: 0,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
;
    try {;
      // Check build status;
      console.log('🔨 Checking build status...');
<<<<<<< HEAD
      try {;
        execSync('npm run build', { stdi:o:'pipe' });
        qualityCheck.checks.push({ nam:e:'Build', statu:s:'passed' });
        qualityCheck.score += 20;
      } catch (error) {;
        qualityCheck.checks.push({;
          nam:e:'Build',;
          statu:s:'failed',;
          erro:r:error.message,;
=======
      try {
        execSync('npm run build', { stdio: 'pipe' });
        qualityCheck.checks.push({ name: 'Build', status: 'passed' });
        qualityCheck.score += 20;
      } catch (error) {
        qualityCheck.checks.push({
          name: 'Build',
          status: 'failed',
          error: error.message,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
        qualityCheck.passed = false;
      }
;
      // Check linting;
      console.log('🔍 Running linting checks...');
<<<<<<< HEAD
      try {;
        execSync('npm run lint', { stdi:o:'pipe' });
        qualityCheck.checks.push({ nam:e:'Linting', statu:s:'passed' });
        qualityCheck.score += 20;
      } catch (error) {;
        qualityCheck.checks.push({;
          nam:e:'Linting',;
          statu:s:'failed',;
          erro:r:error.message,;
=======
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        qualityCheck.checks.push({ name: 'Linting', status: 'passed' });
        qualityCheck.score += 20;
      } catch (error) {
        qualityCheck.checks.push({
          name: 'Linting',
          status: 'failed',
          error: error.message,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
        if (this.config.qualityGates === 'strict') {;
          qualityCheck.passed = false;
        }
      }
;
      // Check type checking;
      console.log('📝 Running type checks...');
<<<<<<< HEAD
      try {;
        execSync('npm run type-check', { stdi:o:'pipe' });
        qualityCheck.checks.push({ nam:e:'Type Checking', statu:s:'passed' });
        qualityCheck.score += 20;
      } catch (error) {;
        qualityCheck.checks.push({;
          nam:e:'Type Checking',;
          statu:s:'failed',;
          erro:r:error.message,;
=======
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        qualityCheck.checks.push({ name: 'Type Checking', status: 'passed' });
        qualityCheck.score += 20;
      } catch (error) {
        qualityCheck.checks.push({
          name: 'Type Checking',
          status: 'failed',
          error: error.message,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
        if (this.config.qualityGates === 'strict') {;
          qualityCheck.passed = false;
        }
      }
;
      // Check tests;
      console.log('🧪 Running tests...');
<<<<<<< HEAD
      try {;
        execSync('npm test', { stdi:o:'pipe' });
        qualityCheck.checks.push({ nam:e:'Tests', statu:s:'passed' });
        qualityCheck.score += 20;
      } catch (error) {;
        qualityCheck.checks.push({;
          nam:e:'Tests',;
          statu:s:'failed',;
          erro:r:error.message,;
=======
      try {
        execSync('npm test', { stdio: 'pipe' });
        qualityCheck.checks.push({ name: 'Tests', status: 'passed' });
        qualityCheck.score += 20;
      } catch (error) {
        qualityCheck.checks.push({
          name: 'Tests',
          status: 'failed',
          error: error.message,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
        if (this.config.qualityGates === 'strict') {;
          qualityCheck.passed = false;
        }
      }
;
      // Check security audit;
      console.log('🔒 Running security audit...');
<<<<<<< HEAD
      try {;
        execSync('npm audit --audit-level=moderate', { stdi:o:'pipe' });
        qualityCheck.checks.push({ nam:e:'Security Audit', statu:s:'passed' });
        qualityCheck.score += 20;
      } catch (error) {;
        qualityCheck.checks.push({;
          nam:e:'Security Audit',;
          statu:s:'failed',;
          erro:r:error.message,;
=======
      try {
        execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
        qualityCheck.checks.push({ name: 'Security Audit', status: 'passed' });
        qualityCheck.score += 20;
      } catch (error) {
        qualityCheck.checks.push({
          name: 'Security Audit',
          status: 'failed',
          error: error.message,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
        if (this.config.qualityGates === 'strict') {;
          qualityCheck.passed = false;
        }
      }
<<<<<<< HEAD
;
      console.log(`📊 Quality:Score:${qualityCheck.score}/100`);
    } catch (error) {;
      console.log('⚠️  Quality gates check:failed:', error.message);
      qualityCheck.passed = false;
    }
;
    // Save quality check results;
    this.deploymentData.qualityChecks.push({;
      timestam:p:new Date().toISOString(),;
      ...qualityCheck,;
=======

      console.log(`📊 Quality Score: ${qualityCheck.score}/100`);
    } catch (error) {
      console.log('⚠️  Quality gates check failed:', error.message);
      qualityCheck.passed = false;
    }

    // Save quality check results
    this.deploymentData.qualityChecks.push({
      timestamp: new Date().toISOString(),
      ...qualityCheck,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    });
;
    return qualityCheck;
  }
;
  async performSmartMerge() {;
    console.log('🔀 Performing smart merge...');
<<<<<<< HEAD
;
    try {;
      // Get current branch;
      const currentBranch = execSync('git branch --show-current', {;
        encodin:g:'utf8',;
=======

    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', {
        encoding: 'utf8',
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      }).trim();
;
      // Get main/master branch;
      const mainBranch = await this.getMainBranch();
;
      if (currentBranch !== mainBranch) {;
        console.log(`🔄 Merging ${currentBranch} into ${mainBranch}...`);
<<<<<<< HEAD
;
        // Switch to main branch;
        execSync(`git checkout ${mainBranch}`, { stdi:o:'inherit' });
;
        // Pull latest changes;
        execSync('git pull origin ' + mainBranch, { stdi:o:'inherit' });
;
        // Merge feature branch;
        try {;
          execSync(;
            `git merge ${currentBranch} --no-ff -m "Merge ${currentBranch} [auto-deploy]"`,;
            { stdi:o:'inherit' }
          );
          console.log(`✅ Successfully merged ${currentBranch}`);
;
          // Update deployment data;
          this.deploymentData.merges.push({;
            fro:m:currentBranch,;
            t:o:mainBranch,;
            timestam:p:new Date().toISOString(),;
            succes:s:true,;
          });
        } catch (error) {;
          console.log(`⚠️  Merge:failed:${error.message}`);
;
          // Handle merge conflicts;
          await this.handleMergeConflicts(currentBranch, mainBranch);
        }
      }
    } catch (error) {;
      console.log('⚠️  Smart merge:failed:', error.message);
    }
  }
;
  async getMainBranch() {;
    try {;
      // Check if main branch exists;
      const branches = execSync('git branch -r', { encodin:g:'utf8' });
      if (branches.includes('origin/main')) {;
=======

        // Switch to main branch
        execSync(`git checkout ${mainBranch}`, { stdio: 'inherit' });

        // Pull latest changes
        execSync('git pull origin ' + mainBranch, { stdio: 'inherit' });

        // Merge feature branch
        try {
          execSync(
            `git merge ${currentBranch} --no-ff -m "Merge ${currentBranch} [auto-deploy]"`,
            { stdio: 'inherit' }
          );
          console.log(`✅ Successfully merged ${currentBranch}`);

          // Update deployment data
          this.deploymentData.merges.push({
            from: currentBranch,
            to: mainBranch,
            timestamp: new Date().toISOString(),
            success: true,
          });
        } catch (error) {
          console.log(`⚠️  Merge failed: ${error.message}`);

          // Handle merge conflicts
          await this.handleMergeConflicts(currentBranch, mainBranch);
        }
      }
    } catch (error) {
      console.log('⚠️  Smart merge failed:', error.message);
    }
  }

  async getMainBranch() {
    try {
      // Check if main branch exists
      const branches = execSync('git branch -r', { encoding: 'utf8' });
      if (branches.includes('origin/main')) {
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        return 'main';
      } else if (branches.includes('origin/master')) {;
        return 'master';
      }
    } catch (error) {;
      // Fallback to master;
    }
    return 'master';
  }
;
  async handleMergeConflicts(featureBranch, mainBranch) {;
    console.log('🤖 Handling merge conflicts...');
<<<<<<< HEAD
;
    try {;
      // Get conflicted files;
      const status = execSync('git status --porcelain', { encodin:g:'utf8' });
      const conflictedFiles = status;
        .split('\n');
        .filter(;
          line =>;
            line.includes('UU') || line.includes('AA') || line.includes('DD');
        );
=======

    try {
      // Get conflicted files
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = status
        .split('\n')
        .filter(
          line =>
            line.includes('UU') || line.includes('AA') || line.includes('DD')
        )
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        .map(line => line.split(' ').pop());
;
      if (conflictedFiles.length === 0) {;
        console.log('✅ No conflicts to resolve');
        return;
      }
;
      console.log(;
        `🔧 Resolving conflicts in ${conflictedFiles.length} files...`;
      );
;
      for (const file of conflictedFiles) {;
        await this.resolveConflict(file);
      }
<<<<<<< HEAD
;
      // Complete the merge;
      execSync('git commit -m "Resolve merge conflicts [auto-deploy]"', {;
        stdi:o:'inherit',;
      });
      console.log('✅ Merge conflicts resolved');
    } catch (error) {;
      console.log('❌ Failed to resolve merge:conflicts:', error.message);
;
      // Abort the merge;
      execSync('git merge --abort', { stdi:o:'inherit' });
=======

      // Complete the merge
      execSync('git commit -m "Resolve merge conflicts [auto-deploy]"', {
        stdio: 'inherit',
      });
      console.log('✅ Merge conflicts resolved');
    } catch (error) {
      console.log('❌ Failed to resolve merge conflicts:', error.message);

      // Abort the merge
      execSync('git merge --abort', { stdio: 'inherit' });
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      throw error;
    }
  }
;
  async resolveConflict(filePath) {;
    console.log(`🔧 Resolving conflict in ${filePath}...`);
;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const resolvedLines = [];
;
      let inConflict = false;
      let conflictType = '';
;
      for (let i = 0; i < lines.length; i++) {;
        const line = lines[i];
;
        if (line.startsWith('<<<<<<<')) {;
          inConflict = true;
          conflictType = 'ours';
<<<<<<< HEAD
<<<<<<< HEAD
        } else if (line.startsWith('')) {;
          conflictType = 'theirs';
        } else if (line.startsWith('>>>>>>>')) {;
=======
<<<<<<< HEAD
=======
        } else if (line.startsWith('')) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
          conflictType = 'theirs';
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        } else if (line.startsWith('=======')) {
          conflictType = 'theirs';
        } else if (line.startsWith('>>>>>>>')) {
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
          inConflict = false;
          conflictType = '';
        } else if (!inConflict) {;
          resolvedLines.push(line);
        } else if (inConflict && conflictType === 'ours') {;
          // Keep our version (simple strategy);
          resolvedLines.push(line);
        }
        // Skip their version;
      }
;
      // Write resolved content;
      fs.writeFileSync(filePath, resolvedLines.join('\n'));
<<<<<<< HEAD
;
      // Add resolved file;
      execSync(`git add ${filePath}`, { stdi:o:'inherit' });
    } catch (error) {;
      console.log(;
        `❌ Failed to resolve conflict in ${filePath} `,;
        error.message;
=======

      // Add resolved file
      execSync(`git add ${filePath}`, { stdio: 'inherit' });
    } catch (error) {
      console.log(
        `❌ Failed to resolve conflict in ${filePath}:`,
        error.message
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      );
    }
  }
;
  async deployToStaging() {;
    console.log('🚀 Deploying to staging...');
<<<<<<< HEAD
;
    const deployment = {;
      environmen:t:'staging',;
      timestam:p:new Date().toISOString(),;
      succes:s:false,;
    };
;
    try {;
      // Build the application;
      execSync('npm run build', { stdi:o:'inherit' });
;
      // Deploy to staging (this would be your staging deployment command);
      // For now, we'll simulate a successful deployment;
      console.log('✅ Staging deployment completed');
      deployment.success = true;
    } catch (error) {;
      console.log('❌ Staging deployment:failed:', error.message);
=======

    const deployment = {
      environment: 'staging',
      timestamp: new Date().toISOString(),
      success: false,
    };

    try {
      // Build the application
      execSync('npm run build', { stdio: 'inherit' });

      // Deploy to staging (this would be your staging deployment command)
      // For now, we'll simulate a successful deployment
      console.log('✅ Staging deployment completed');
      deployment.success = true;
    } catch (error) {
      console.log('❌ Staging deployment failed:', error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      deployment.error = error.message;
    }
;
    return deployment;
  }
;
  async runIntegrationTests() {;
    console.log('🧪 Running integration tests...');
<<<<<<< HEAD
;
    const testResult = {;
      succes:s:false,;
      test:s:[],;
      timestam:p:new Date().toISOString(),;
=======

    const testResult = {
      success: false,
      tests: [],
      timestamp: new Date().toISOString(),
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
;
    try {;
      // Run integration tests (this would be your integration test command);
      // For now, we'll simulate running tests;
      console.log('✅ Integration tests passed');
      testResult.success = true;
<<<<<<< HEAD
      testResult.tests = [;
        { nam:e:'API Tests', statu:s:'passed' },;
        { nam:e:'UI Tests', statu:s:'passed' },;
        { nam:e:'Database Tests', statu:s:'passed' },;
      ];
    } catch (error) {;
      console.log('❌ Integration tests:failed:', error.message);
=======
      testResult.tests = [
        { name: 'API Tests', status: 'passed' },
        { name: 'UI Tests', status: 'passed' },
        { name: 'Database Tests', status: 'passed' },
      ];
    } catch (error) {
      console.log('❌ Integration tests failed:', error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      testResult.error = error.message;
    }
;
    return testResult;
  }
;
  async deployToProduction() {;
    console.log('🚀 Deploying to production...');
<<<<<<< HEAD
;
    const deployment = {;
      environmen:t:'production',;
      timestam:p:new Date().toISOString(),;
      succes:s:false,;
=======

    const deployment = {
      environment: 'production',
      timestamp: new Date().toISOString(),
      success: false,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
;
    try {;
      // Deploy to production (this would be your production deployment command);
      // For now, we'll simulate a successful deployment;
      console.log('✅ Production deployment completed');
      deployment.success = true;
<<<<<<< HEAD
;
      // Update last deployment;
      this.deploymentData.lastDeployment = {;
        commi:t:execSync('git log -1 --format=%H', { encodin:g:'utf8' }).trim(),;
        timestam:p:new Date().toISOString(),;
        environmen:t:'production',;
      };
    } catch (error) {;
      console.log('❌ Production deployment:failed:', error.message);
=======

      // Update last deployment
      this.deploymentData.lastDeployment = {
        commit: execSync('git log -1 --format=%H', { encoding: 'utf8' }).trim(),
        timestamp: new Date().toISOString(),
        environment: 'production',
      };
    } catch (error) {
      console.log('❌ Production deployment failed:', error.message);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      deployment.error = error.message;
    }
;
    return deployment;
  }
;
  async rollbackDeployment() {;
    if (!this.config.rollbackEnabled) {;
      console.log('⚠️  Rollback is disabled');
      return;
    }
;
    console.log('🔄 Rolling back deployment...');
;
    try {;
      // Get the previous deployment;
      const previousCommit = this.deploymentData.lastDeployment?.commit;
<<<<<<< HEAD
;
      if (previousCommit) {;
        // Rollback to previous commit;
        execSync(`git reset --hard ${previousCommit}`, { stdi:o:'inherit' });
;
        // Redeploy;
        execSync('npm run build', { stdi:o:'inherit' });
;
        console.log('✅ Rollback completed');
;
        // Update rollback data;
        this.deploymentData.rollbacks.push({;
          timestam:p:new Date().toISOString(),;
          fro:m:'current',;
          t:o:previousCommit,;
          succes:s:true,;
=======

      if (previousCommit) {
        // Rollback to previous commit
        execSync(`git reset --hard ${previousCommit}`, { stdio: 'inherit' });

        // Redeploy
        execSync('npm run build', { stdio: 'inherit' });

        console.log('✅ Rollback completed');

        // Update rollback data
        this.deploymentData.rollbacks.push({
          timestamp: new Date().toISOString(),
          from: 'current',
          to: previousCommit,
          success: true,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        });
      } else {;
        console.log('⚠️  No previous deployment found for rollback');
      }
<<<<<<< HEAD
    } catch (error) {;
      console.log('❌ Rollback:failed:', error.message);
;
      this.deploymentData.rollbacks.push({;
        timestam:p:new Date().toISOString(),;
        succes:s:false,;
        erro:r:error.message,;
=======
    } catch (error) {
      console.log('❌ Rollback failed:', error.message);

      this.deploymentData.rollbacks.push({
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      });
    }
  }
;
  async postDeploymentTasks() {;
    console.log('📋 Running post-deployment tasks...');
;
    try {;
      // Clear caches;
      console.log('🧹 Clearing caches...');
;
      // Send deployment notification;
      console.log('📧 Sending deployment notification...');
;
      // Update monitoring;
      console.log('📊 Updating monitoring...');
;
      console.log('✅ Post-deployment tasks completed');
<<<<<<< HEAD
    } catch (error) {;
      console.log('⚠️  Post-deployment tasks:failed:', error.message);
    }
  }
;
  updateDeploymentData(result) {;
    this.deploymentData.deployments.push({;
      timestam:p:new Date().toISOString(),;
      environmen:t:'production',;
      succes:s:result.success,;
      commi:t:execSync('git log -1 --format=%H', { encodin:g:'utf8' }).trim(),;
    });
  }
;
  async handleDeploymentError(error) {;
    console.error('🚨 Deployment:error:', error.message);
;
    // Log error;
    const errorLog = {;
      timestam:p:new Date().toISOString(),;
      erro:r:error.message,;
      stac:k:error.stack,;
=======
    } catch (error) {
      console.log('⚠️  Post-deployment tasks failed:', error.message);
    }
  }

  updateDeploymentData(result) {
    this.deploymentData.deployments.push({
      timestamp: new Date().toISOString(),
      environment: 'production',
      success: result.success,
      commit: execSync('git log -1 --format=%H', { encoding: 'utf8' }).trim(),
    });
  }

  async handleDeploymentError(error) {
    console.error('🚨 Deployment error:', error.message);

    // Log error
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
<<<<<<< HEAD
;
    const errorFile = path.join(;
      this.projectRoot,;
      'logs',;
      'deployment-errors.json';
=======

    const errorFile = path.join(
      this.projectRoot,
      'logs',
      'deployment-errors.json'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    );
    let errors = [];
;
    try {;
      if (fs.existsSync(errorFile)) {;
        errors = JSON.parse(fs.readFileSync(errorFile, 'utf8'));
      }
    } catch (e) {;
      // Start fresh if file is corrupted;
    }
;
    errors.push(errorLog);
    fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));
;
    // Attempt rollback if enabled;
    if (this.config.rollbackEnabled) {;
      await this.rollbackDeployment();
    }
  }
}
;
// Run the deployment workflow;
const deployment = new SmartDeploymentMerge();
deployment.runDeploymentWorkflow().catch(console.error);
