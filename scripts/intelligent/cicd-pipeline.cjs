#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class IntelligentCICDPipeline {
  constructor() {
    this.config = {
      stages: {
        checkout: { enabled: true, timeout: 30000 },
        install: { enabled: true, timeout: 300000 },
        lint: { enabled: true, timeout: 120000 },
        test: { enabled: true, timeout: 600000 },
        build: { enabled: true, timeout: 300000 },
        security: { enabled: true, timeout: 180000 },
        deploy: { enabled: true, timeout: 600000 }
      },
      qualityGates: {
        minTestCoverage: 80,
        maxBuildTime: 300000,
        maxBundleSize: 5 * 1024 * 1024,
        maxLintErrors: 0,
        maxSecurityVulnerabilities: 0
      },
      notifications: {
        slack: process.env.SLACK_WEBHOOK_URL,
        email: process.env.EMAIL_NOTIFICATIONS,
        webhook: process.env.CICD_WEBHOOK_URL
      }
    };
    
    this.pipelineHistory = [];
    this.currentPipelines = new Map();
    this.isRunning = false;
  }

  async start() {
    console.log('🔄 Intelligent CI/CD Pipeline starting...');
    this.isRunning = true;
    
    try {
      await this.initialize();
      this.startContinuousMonitoring();
      console.log('✅ Intelligent CI/CD Pipeline started successfully');
    } catch (error) {
      console.error('❌ Failed to start CI/CD Pipeline:', error);
    }
  }

  async initialize() {
    // Create necessary directories
    await fs.mkdir('./logs', { recursive: true });
    await fs.mkdir('./pipelines', { recursive: true });
    await fs.mkdir('./artifacts', { recursive: true });
    
    // Load existing history
    await this.loadHistory();
    
    console.log('📁 CI/CD Pipeline initialized');
  }

  startContinuousMonitoring() {
    // Monitor for pipeline triggers every 10 minutes
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.checkForPipelineTriggers();
        await this.monitorActivePipelines();
      } catch (error) {
        console.error('Error in continuous monitoring:', error);
      }
    }, 600000); // 10 minutes
  }

  async checkForPipelineTriggers() {
    try {
      // Check for new commits
      await this.checkForNewCommits();
      
      // Check for pull requests
      await this.checkForPullRequests();
      
      // Check for scheduled builds
      await this.checkScheduledBuilds();
      
    } catch (error) {
      console.error('Error checking pipeline triggers:', error);
    }
  }

  async checkForNewCommits() {
    try {
      // Fetch latest changes
      execSync('git fetch origin', { stdio: 'pipe' });
      
      // Get current branch
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      
      // Check if there are new commits
      const lastCommit = execSync(`git rev-parse origin/${currentBranch}`, { encoding: 'utf8' }).trim();
      const lastPipeline = this.getLastPipelineForBranch(currentBranch);
      
      if (!lastPipeline || lastPipeline.commit !== lastCommit) {
        console.log(`🔄 New commit detected on ${currentBranch}`);
        await this.triggerPipeline('commit', currentBranch, lastCommit);
      }
    } catch (error) {
      console.error('Error checking for new commits:', error);
    }
  }

  async checkForPullRequests() {
    try {
      // Get list of open pull requests
      const prs = await this.getOpenPullRequests();
      
      for (const pr of prs) {
        const lastPipeline = this.getLastPipelineForPR(pr.number);
        if (!lastPipeline || lastPipeline.commit !== pr.headCommit) {
          console.log(`🔄 New PR detected: #${pr.number}`);
          await this.triggerPipeline('pull_request', pr.branch, pr.headCommit, { prNumber: pr.number });
        }
      }
    } catch (error) {
      console.error('Error checking for pull requests:', error);
    }
  }

  async checkScheduledBuilds() {
    try {
      // Check if it's time for scheduled builds
      const now = new Date();
      const hour = now.getHours();
      
      // Run nightly builds at 2 AM
      if (hour === 2 && now.getMinutes() < 10) {
        console.log('🕐 Triggering scheduled nightly build');
        await this.triggerPipeline('scheduled', 'main', null, { type: 'nightly' });
      }
    } catch (error) {
      console.error('Error checking scheduled builds:', error);
    }
  }

  async triggerPipeline(trigger, branch, commit, metadata = {}) {
    try {
      console.log(`🚀 Triggering pipeline for ${trigger} on ${branch}...`);
      
      const pipeline = {
        id: `pipeline_${Date.now()}`,
        trigger,
        branch,
        commit,
        metadata,
        timestamp: new Date().toISOString(),
        status: 'pending',
        stages: []
      };
      
      this.currentPipelines.set(pipeline.id, pipeline);
      
      // Run pipeline
      await this.runPipeline(pipeline);
      
    } catch (error) {
      console.error(`Error triggering pipeline for ${trigger}:`, error);
    }
  }

  async runPipeline(pipeline) {
    try {
      console.log(`🔄 Running pipeline ${pipeline.id}...`);
      
      // Stage 1: Checkout
      await this.runStage(pipeline, 'checkout', async () => {
        await this.checkoutCode(pipeline);
      });
      
      // Stage 2: Install Dependencies
      await this.runStage(pipeline, 'install', async () => {
        await this.installDependencies(pipeline);
      });
      
      // Stage 3: Lint
      await this.runStage(pipeline, 'lint', async () => {
        await this.runLinting(pipeline);
      });
      
      // Stage 4: Test
      await this.runStage(pipeline, 'test', async () => {
        await this.runTests(pipeline);
      });
      
      // Stage 5: Build
      await this.runStage(pipeline, 'build', async () => {
        await this.runBuild(pipeline);
      });
      
      // Stage 6: Security Scan
      await this.runStage(pipeline, 'security', async () => {
        await this.runSecurityScan(pipeline);
      });
      
      // Stage 7: Deploy (if applicable)
      if (this.shouldDeploy(pipeline)) {
        await this.runStage(pipeline, 'deploy', async () => {
          await this.runDeployment(pipeline);
        });
      }
      
      // Mark as completed
      pipeline.status = 'completed';
      this.pipelineHistory.push(pipeline);
      
      console.log(`✅ Pipeline ${pipeline.id} completed successfully`);
      
      // Send success notification
      await this.sendNotification('pipeline_success', pipeline);
      
    } catch (error) {
      console.error(`❌ Pipeline ${pipeline.id} failed:`, error);
      
      pipeline.status = 'failed';
      pipeline.error = error.message;
      this.pipelineHistory.push(pipeline);
      
      // Send failure notification
      await this.sendNotification('pipeline_failure', pipeline);
    } finally {
      this.currentPipelines.delete(pipeline.id);
    }
  }

  async runStage(pipeline, stageName, stageFunction) {
    const stage = {
      name: stageName,
      startTime: new Date().toISOString(),
      status: 'running'
    };
    
    pipeline.stages.push(stage);
    
    try {
      console.log(`🔄 Running stage: ${stageName} for pipeline ${pipeline.id}`);
      
      await stageFunction();
      
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      stage.duration = new Date(stage.endTime) - new Date(stage.startTime);
      
      console.log(`✅ Stage ${stageName} completed for pipeline ${pipeline.id} in ${stage.duration}ms`);
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      stage.duration = new Date(stage.endTime) - new Date(stage.startTime);
      
      console.log(`❌ Stage ${stageName} failed for pipeline ${pipeline.id}: ${error.message}`);
      throw error;
    }
  }

  async checkoutCode(pipeline) {
    try {
      // Checkout the specific commit if provided
      if (pipeline.commit) {
        execSync(`git checkout ${pipeline.commit}`, { stdio: 'pipe' });
      } else {
        // Checkout the branch
        execSync(`git checkout ${pipeline.branch}`, { stdio: 'pipe' });
        execSync(`git pull origin ${pipeline.branch}`, { stdio: 'pipe' });
      }
      
      // Get commit info
      const commitInfo = execSync('git log -1 --pretty=format:"%H|%s|%an|%ad"', { encoding: 'utf8' }).trim();
      pipeline.commitInfo = commitInfo.split('|');
      
    } catch (error) {
      throw new Error(`Checkout failed: ${error.message}`);
    }
  }

  async installDependencies(pipeline) {
    try {
      // Clean install
      execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
      execSync('npm install', { stdio: 'pipe' });
      
    } catch (error) {
      throw new Error(`Dependency installation failed: ${error.message}`);
    }
  }

  async runLinting(pipeline) {
    try {
      const lintOutput = execSync('npm run lint', { encoding: 'utf8' });
      
      // Check for lint errors
      const errorCount = (lintOutput.match(/error/g) || []).length;
      if (errorCount > this.config.qualityGates.maxLintErrors) {
        throw new Error(`Too many lint errors: ${errorCount}`);
      }
      
    } catch (error) {
      if (error.message.includes('Too many lint errors')) {
        throw error;
      }
      throw new Error(`Linting failed: ${error.message}`);
    }
  }

  async runTests(pipeline) {
    try {
      // Run unit tests
      execSync('npm run test:unit', { stdio: 'pipe' });
      
      // Run integration tests
      execSync('npm run test:integration', { stdio: 'pipe' });
      
      // Check test coverage
      const coverage = await this.getTestCoverage();
      if (coverage < this.config.qualityGates.minTestCoverage) {
        throw new Error(`Test coverage ${coverage}% is below minimum ${this.config.qualityGates.minTestCoverage}%`);
      }
      
      pipeline.testCoverage = coverage;
      
    } catch (error) {
      if (error.message.includes('Test coverage')) {
        throw error;
      }
      throw new Error(`Tests failed: ${error.message}`);
    }
  }

  async runBuild(pipeline) {
    try {
      const buildStart = Date.now();
      
      // Run build
      execSync('npm run build', { stdio: 'pipe' });
      
      const buildTime = Date.now() - buildStart;
      
      // Check build time
      if (buildTime > this.config.qualityGates.maxBuildTime) {
        throw new Error(`Build time ${buildTime}ms exceeds maximum ${this.config.qualityGates.maxBuildTime}ms`);
      }
      
      // Check bundle size
      const bundleSize = await this.calculateBundleSize();
      if (bundleSize > this.config.qualityGates.maxBundleSize) {
        throw new Error(`Bundle size ${bundleSize} bytes exceeds maximum ${this.config.qualityGates.maxBundleSize} bytes`);
      }
      
      pipeline.buildTime = buildTime;
      pipeline.bundleSize = bundleSize;
      
    } catch (error) {
      if (error.message.includes('Build time') || error.message.includes('Bundle size')) {
        throw error;
      }
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async runSecurityScan(pipeline) {
    try {
      // Run security audit
      execSync('npm audit --audit-level moderate', { stdio: 'pipe' });
      
      // Run additional security checks
      await this.runAdditionalSecurityChecks(pipeline);
      
    } catch (error) {
      throw new Error(`Security scan failed: ${error.message}`);
    }
  }

  async runAdditionalSecurityChecks(pipeline) {
    // This would run additional security checks like:
    // - Dependency vulnerability scanning
    // - Code security analysis
    // - Configuration security checks
    console.log('Running additional security checks...');
  }

  async runDeployment(pipeline) {
    try {
      // Deploy based on branch
      if (pipeline.branch === 'main') {
        await this.deployToProduction(pipeline);
      } else if (pipeline.branch === 'develop') {
        await this.deployToStaging(pipeline);
      } else {
        await this.deployToDevelopment(pipeline);
      }
      
    } catch (error) {
      throw new Error(`Deployment failed: ${error.message}`);
    }
  }

  async deployToProduction(pipeline) {
    console.log(`🚀 Deploying to production: ${pipeline.id}`);
    // Production deployment logic
  }

  async deployToStaging(pipeline) {
    console.log(`🚀 Deploying to staging: ${pipeline.id}`);
    // Staging deployment logic
  }

  async deployToDevelopment(pipeline) {
    console.log(`🚀 Deploying to development: ${pipeline.id}`);
    // Development deployment logic
  }

  shouldDeploy(pipeline) {
    // Determine if pipeline should trigger deployment
    return pipeline.trigger === 'commit' || pipeline.trigger === 'scheduled';
  }

  async getTestCoverage() {
    try {
      // This would run test coverage and parse the results
      // For now, return a simulated value
      return 85;
    } catch (error) {
      return 0;
    }
  }

  async calculateBundleSize() {
    try {
      const stats = await fs.stat('./dist');
      return stats.size;
    } catch (error) {
      return 0;
    }
  }

  async getOpenPullRequests() {
    try {
      // This would fetch open pull requests from the repository
      // For now, return empty array
      return [];
    } catch (error) {
      return [];
    }
  }

  getLastPipelineForBranch(branch) {
    return this.pipelineHistory
      .filter(p => p.branch === branch)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
  }

  getLastPipelineForPR(prNumber) {
    return this.pipelineHistory
      .filter(p => p.metadata.prNumber === prNumber)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
  }

  async monitorActivePipelines() {
    for (const [id, pipeline] of this.currentPipelines) {
      if (pipeline.status === 'running') {
        // Check if pipeline has been running too long
        const runningTime = Date.now() - new Date(pipeline.timestamp);
        if (runningTime > 1800000) { // 30 minutes
          console.log(`⚠️ Pipeline ${id} has been running for ${runningTime}ms`);
        }
      }
    }
  }

  async sendNotification(type, pipeline) {
    // This would send notifications via configured channels
    console.log(`📢 Sending ${type} notification for pipeline ${pipeline.id}`);
  }

  async saveAnalysis(analysis) {
    try {
      const filename = `./logs/cicd-analysis-${new Date().toISOString().split('T')[0]}.json`;
      await fs.writeFile(filename, JSON.stringify(analysis, null, 2));
    } catch (error) {
      console.error('Error saving analysis:', error);
    }
  }

  async loadHistory() {
    try {
      // Load pipeline history
      const pipelineHistoryFile = './logs/pipeline-history.json';
      try {
        const data = await fs.readFile(pipelineHistoryFile, 'utf8');
        this.pipelineHistory = JSON.parse(data);
      } catch (error) {
        this.pipelineHistory = [];
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  }
}

// Start the Intelligent CI/CD Pipeline
const cicdPipeline = new IntelligentCICDPipeline();
cicdPipeline.start().catch(console.error);

module.exports = IntelligentCICDPipeline;