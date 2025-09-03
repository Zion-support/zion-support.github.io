#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logDir = path.join(this.projectRoot, 'logs');
    this.deploymentResults = {
      timestamp: new Date().toISOString(),
      steps: [],
      environment: process.env.NODE_ENV || 'development',
      branch: this.getCurrentBranch(),
      commit: this.getCurrentCommit(),
      status: 'pending';
};
    
    // Ensure logs directory exists
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logDir, 'deployment.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  getCurrentBranch() {
    try {
      return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    } catch (error) {
      return 'unknown';
    }
  }

  getCurrentCommit() {
    try {
      return execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async runStep(name, command, options = {}) {
    this.log(`Starting: ${name}`);
    const startTime = Date.now();
    
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options;
});
      
      const duration = Date.now() - startTime;
      this.deploymentResults.steps.push({
        name,
        status: 'success',
        duration,
        command;
});
      
      this.log(`Completed: ${name} (${duration}ms)`);
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.deploymentResults.steps.push({
        name,
        status: 'failed',
        duration,
        command,
        error: error.message;
});
      
      this.log(`Failed: ${name} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async preDeploymentChecks() {
    this.log('Running pre-deployment checks...');
    
    // Check if we're on the main branch
    if (this.deploymentResults.branch !== 'main' && this.deploymentResults.branch !== 'master') {
      this.log(`Warning: Deploying from branch '${this.deploymentResults.branch}' instead of main/master`, 'WARN');
    }
    
    // Check for uncommitted changes
    try {
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (gitStatus.trim()) {
        this.log('Warning: There are uncommitted changes', 'WARN');
        this.log('Uncommitted files: ', 'WARN');
        this.log(gitStatus, 'WARN');
      }
    } catch (error) {
      this.log('Could not check git status', 'WARN');
    }
    
    // Check if build directory exists
    const buildDir = path.join(this.projectRoot, '.next');
    if (!fs.existsSync(buildDir)) {
      this.log('Build directory not found, running build...', 'WARN');
      await this.runStep('Build application', 'npm run build');
    }
  }

  async createBackup() {
    this.log('Creating deployment backup...');
    
    const backupDir = path.join(this.projectRoot, 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupDir, `backup-${timestamp}.tar.gz`);
    
    try {
      await this.runStep(
        'Create backup',
        `tar -czf ${backupPath} --exclude=node_modules --exclude=.git --exclude=.next --exclude=backups .`,
        { silent: true }
      );
      
      this.deploymentResults.backupPath = backupPath;
      this.log(`Backup created: ${backupPath}`);
    } catch (error) {
      this.log(`Backup creation failed: ${error.message}`, 'WARN');
    }
  }

  async deployToProduction() {
    this.log('Deploying to production...');
    
    try {
      // Stop existing PM2 processes
      await this.runStep(
        'Stop PM2 processes',
        'pm2 stop all',
        { continueOnError: true }
      );
      
      // Update dependencies
      await this.runStep('Update dependencies', 'npm ci --production');
      
      // Run database migrations if needed
      try {
        await this.runStep(
          'Run migrations',
          'npm run migrate',
          { continueOnError: true }
        );
      } catch (error) {
        this.log('No migrations to run or migration failed', 'WARN');
      }
      
      // Start PM2 processes
      await this.runStep('Start PM2 processes', 'pm2 start ecosystem.config.cjs');
      
      // Save PM2 configuration
      await this.runStep('Save PM2 configuration', 'pm2 save');
      
      this.log('Production deployment completed successfully');
      ;
} catch (error) {
      this.log(`Production deployment failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async deployToStaging() {
    this.log('Deploying to staging...');
    
    try {
      // Build application
      await this.runStep('Build for staging', 'npm run build');
      
      // Start staging server
      await this.runStep(
        'Start staging server',
        'pm2 start npm --name "staging-app" -- start',
        { continueOnError: true }
      );
      
      this.log('Staging deployment completed successfully');
      ;
} catch (error) {
      this.log(`Staging deployment failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async postDeploymentTests() {
    this.log('Running post-deployment tests...');
    
    try {
      // Health check
      await this.runStep(
        'Health check',
        'node scripts/health-checker.cjs',
        { continueOnError: true }
      );
      
      // Smoke tests
      try {
        await this.runStep(
          'Smoke tests',
          'npm run test: smoke',
          { continueOnError: true }
        );
      } catch (error) {
        this.log('Smoke tests not available or failed', 'WARN');
      }
      
      this.log('Post-deployment tests completed');
      ;
} catch (error) {
      this.log(`Post-deployment tests failed: ${error.message}`, 'WARN');
    }
  }

  async rollback() {
    this.log('Initiating rollback...');
    
    try {
      if (this.deploymentResults.backupPath && fs.existsSync(this.deploymentResults.backupPath)) {
        await this.runStep(
          'Restore from backup',
          `tar -xzf ${this.deploymentResults.backupPath}`
        );
        
        await this.runStep('Restart services', 'pm2 restart all');
        
        this.log('Rollback completed successfully');
      } else {
        this.log('No backup available for rollback', 'ERROR');
        throw new Error('No backup available');
      }
    } catch (error) {
      this.log(`Rollback failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async notifyDeployment(status) {
    this.log(`Sending deployment notification (${status})...`);
    
    const notification = {
      timestamp: new Date().toISOString(),
      status,
      branch: this.deploymentResults.branch,
      commit: this.deploymentResults.commit,
      environment: this.deploymentResults.environment,
      duration: this.deploymentResults.steps.reduce((sum, step) => sum + step.duration, 0);
};
    
    // Save notification (in real app, you'd send to Slack, email, etc.)
    const notificationFile = path.join(this.logDir, 'deployment-notifications.json');
    let notifications = [];
    
    if (fs.existsSync(notificationFile)) {
      try {
        notifications = JSON.parse(fs.readFileSync(notificationFile, 'utf8'));
      } catch (error) {
        notifications = [];
      }
    }
    
    notifications.push(notification);
    fs.writeFileSync(notificationFile, JSON.stringify(notifications, null, 2));
    
    this.log('Notification sent');
  }

  async deploy(environment = 'production') {
    this.log(`🚀 Starting deployment to ${environment}...`);
    this.deploymentResults.environment = environment;
    
    try {
      // Pre-deployment checks
      await this.preDeploymentChecks();
      
      // Create backup
      await this.createBackup();
      
      // Deploy based on environment
      if (environment === 'production') {
        await this.deployToProduction();
      } else if (environment === 'staging') {
        await this.deployToStaging();
      } else {
        throw new Error(`Unknown environment: ${environment}`);
      }
      
      // Post-deployment tests
      await this.postDeploymentTests();
      
      // Mark as successful
      this.deploymentResults.status = 'success';
      
      // Send success notification
      await this.notifyDeployment('success');
      
      this.log(`✅ Deployment to ${environment} completed successfully`);
      
      return this.deploymentResults;
      ;
} catch (error) {
      this.deploymentResults.status = 'failed';
      this.log(`❌ Deployment failed: ${error.message}`, 'ERROR');
      
      // Send failure notification
      await this.notifyDeployment('failed');
      
      // Ask if rollback is needed (in automated scenarios, you might auto-rollback)
      if (environment === 'production') {
        this.log('Consider running rollback if needed', 'WARN');
      }
      
      throw error;
    }
  }
}

// Run if this script is executed directly
if (require.main === module) {
  const environment = process.argv[2] || 'production';
  const automation = new DeploymentAutomation();
  
  automation.deploy(environment)
    .then(results => {
      console.log('\n✅ Deployment automation completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Deployment automation failed: ', error.message);
      process.exit(1);
    });
}

module.exports = DeploymentAutomation;
#!/usr/bin/env node;

const { execSync } = require('child_process');const fs = require('fs');';class DeploymentAutomation {;
  constructor() {;
    this.projectRoot = process.cwd();}
;
  async deploy() {;
    console.log('🚀 Starting deployment automation...');';    try {;
      // Run tests;
      this.runTests();
;
      // Build application;
      this.buildApplication();
;
      // Deploy to staging;
      this.deployToStaging();
;
      // Run smoke tests;
      this.runSmokeTests();
;
      // Deploy to production;
      this.deployToProduction();
;
      console.log('✅ Deployment completed successfully');    } catch (error) {;      console.error('❌ Deployment "failed":', error.message);      process.exit(1);,';}
  }
;
  runTests() {;
    console.log('🧪 Running tests...');    execSync('npm run test', { "stdio": 'inherit' });  }';;
  buildApplication() {;
    console.log('🏗️ Building application...');    execSync('npm run build', { "stdio": 'inherit' });  }';;
  deployToStaging() {;
    console.log('🚀 Deploying to staging...');    // Add your staging deployment logic here;,';}
;
  runSmokeTests() {;
    console.log('💨 Running smoke tests...');    // Add your smoke test logic here;,';}
;
  deployToProduction() {;
    console.log('🌟 Deploying to production...');    // Add your production deployment logic here;}
}
;
// Run the deployment;
if (require.main === module) {;
  const deployment = new DeploymentAutomation();
  deployment.deploy().catch(console.error);}
;
module.exports = DeploymentAutomation;
