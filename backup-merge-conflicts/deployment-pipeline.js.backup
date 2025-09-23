#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

class DeploymentPipeline {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/deployment-pipeline.log');
    this.deploymentFile = path.join(this.projectRoot, 'logs/pm2/deployment-status.json');
    this.rollbackFile = path.join(this.projectRoot, 'logs/pm2/rollback-info.json');
    this.startTime = Date.now();
    this.deployment = {
      id: `deploy-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'pending',
      stages: [],
      metrics: {},
      rollback: null
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports', 'backups'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runStage(stageName, stageFunction) {
    const stage = {
      name: stageName,
      startTime: Date.now(),
      status: 'running',
      logs: []
    };

    this.deployment.stages.push(stage);
    this.log(`🚀 Starting stage: ${stageName}`);

    try {
      const result = await stageFunction();
      stage.status = 'completed';
      stage.endTime = Date.now();
      stage.duration = stage.endTime - stage.startTime;
      stage.result = result;
      
      this.log(`✅ Stage completed: ${stageName} (${stage.duration}ms)`);
      return result;
    } catch (error) {
      stage.status = 'failed';
      stage.endTime = Date.now();
      stage.duration = stage.endTime - stage.startTime;
      stage.error = error.message;
      
      this.log(`❌ Stage failed: ${stageName} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async preDeploymentChecks() {
    return await this.runStage('Pre-deployment Checks', async () => {
      const checks = {
        gitStatus: await this.checkGitStatus(),
        dependencies: await this.checkDependencies(),
        tests: await this.runTests(),
        build: await this.testBuild(),
        environment: await this.checkEnvironment()
      };

      const allPassed = Object.values(checks).every(check => check.success);
      if (!allPassed) {
        throw new Error('Pre-deployment checks failed');
      }

      return checks;
    });
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      const isClean = status.length === 0;
      return {
        success: isClean,
        message: isClean ? 'Working directory is clean' : 'Working directory has uncommitted changes',
        details: status
      };
    } catch (error) {
      return {
        success: false,
        message: `Git status check failed: ${error.message}`,
        error: error.message
      };
    }
  }

  async checkDependencies() {
    try {
      // Check if package-lock.json exists and is up to date
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const lockExists = fs.existsSync('package-lock.json');
      
      if (!lockExists) {
        return {
          success: false,
          message: 'package-lock.json not found - run npm install',
          error: 'Missing lock file'
        };
      }

      // Check for vulnerabilities
      try {
        const audit = execSync('npm audit --audit-level=moderate', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return {
          success: true,
          message: 'Dependencies are secure',
          details: audit
        };
      } catch (error) {
        return {
          success: false,
          message: 'Dependencies have vulnerabilities',
          error: error.message
        };
      }
    } catch (error) {
      return {
        success: false,
        message: `Dependency check failed: ${error.message}`,
        error: error.message
      };
    }
  }

  async runTests() {
    try {
      // Check if tests exist
      const testScripts = ['test', 'test:unit', 'test:integration', 'test:e2e'];
      let testCommand = null;

      for (const script of testScripts) {
        try {
          execSync(`npm run ${script} --dry-run`, {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          testCommand = script;
          break;
        } catch (error) {
          // Script doesn't exist, try next
        }
      }

      if (!testCommand) {
        return {
          success: true,
          message: 'No tests found - skipping test stage',
          skipped: true
        };
      }

      // Run tests
      const testOutput = execSync(`npm run ${testCommand}`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 // 5 minutes
      });

      return {
        success: true,
        message: `Tests passed using ${testCommand}`,
        details: testOutput
      };
    } catch (error) {
      return {
        success: false,
        message: `Tests failed: ${error.message}`,
        error: error.message
      };
    }
  }

  async testBuild() {
    try {
      const buildStart = Date.now();
      
      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }

      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 // 5 minutes
      });

      const buildTime = Date.now() - buildStart;
      const buildSize = this.calculateBuildSize('dist');

      return {
        success: true,
        message: 'Build successful',
        buildTime,
        buildSize,
        buildSizeMB: Math.round(buildSize / (1024 * 1024) * 100) / 100
      };
    } catch (error) {
      return {
        success: false,
        message: `Build failed: ${error.message}`,
        error: error.message
      };
    }
  }

  calculateBuildSize(dir) {
    let size = 0;
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          size += this.calculateBuildSize(fullPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      // Silent fail for inaccessible directories
    }
    return size;
  }

  async checkEnvironment() {
    try {
      const requiredEnvVars = ['NODE_ENV'];
      const missing = requiredEnvVars.filter(env => !process.env[env]);
      
      if (missing.length > 0) {
        return {
          success: false,
          message: `Missing required environment variables: ${missing.join(', ')}`,
          missing
        };
      }

      return {
        success: true,
        message: 'Environment variables are properly configured',
        details: {
          NODE_ENV: process.env.NODE_ENV,
          NODE_VERSION: process.version,
          PLATFORM: os.platform(),
          ARCH: os.arch()
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Environment check failed: ${error.message}`,
        error: error.message
      };
    }
  }

  async createBackup() {
    return await this.runStage('Create Backup', async () => {
      const backupId = `backup-${Date.now()}`;
      const backupPath = path.join(this.projectRoot, 'backups', backupId);
      
      // Create backup directory
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Backup current deployment
      const currentCommit = execSync('git rev-parse HEAD', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      
      // Create backup info
      const backupInfo = {
        id: backupId,
        timestamp: new Date().toISOString(),
        commit: currentCommit,
        path: backupPath,
        status: 'created'
      };
      
      // Save backup info
      fs.writeFileSync(
        path.join(backupPath, 'backup-info.json'),
        JSON.stringify(backupInfo, null, 2)
      );
      
      // Copy current build if it exists
      if (fs.existsSync('dist')) {
        execSync(`cp -r dist ${backupPath}/`, { stdio: 'pipe' });
      }
      
      this.deployment.rollback = backupInfo;
      this.log(`💾 Backup created: ${backupId}`);
      
      return backupInfo;
    });
  }

  async deploy() {
    return await this.runStage('Deploy', async () => {
      const deployStart = Date.now();
      
      // Build for production
      execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      
      // Start/restart PM2 processes
      try {
        execSync('pm2 restart ecosystem.config.js', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      } catch (error) {
        // If restart fails, try start
        execSync('pm2 start ecosystem.config.js', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
      const deployTime = Date.now() - deployStart;
      
      return {
        success: true,
        message: 'Deployment completed',
        deployTime,
        pm2Status: await this.getPM2Status()
      };
    });
  }

  async getPM2Status() {
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(pm2List);
    } catch (error) {
      return [];
    }
  }

  async healthCheck() {
    return await this.runStage('Health Check', async () => {
      const healthChecks = [];
      
      // Check PM2 processes
      const pm2Status = await this.getPM2Status();
      const runningProcesses = pm2Status.filter(proc => proc.pm2_env.status === 'online');
      
      healthChecks.push({
        name: 'PM2 Processes',
        status: runningProcesses.length > 0 ? 'healthy' : 'unhealthy',
        details: `${runningProcesses.length}/${pm2Status.length} processes running`
      });
      
      // Check application health (if health endpoint exists)
      try {
        const healthResponse = execSync('curl -f http://localhost:3000/health || echo "health check failed"', {
          encoding: 'utf8',
          timeout: 10000
        });
        
        healthChecks.push({
          name: 'Application Health',
          status: healthResponse.includes('health check failed') ? 'unhealthy' : 'healthy',
          details: healthResponse
        });
      } catch (error) {
        healthChecks.push({
          name: 'Application Health',
          status: 'unknown',
          details: 'Health endpoint not available'
        });
      }
      
      // Check system resources
      const cpuUsage = this.getCpuUsage();
      const memoryUsage = (os.totalmem() - os.freemem()) / os.totalmem() * 100;
      
      healthChecks.push({
        name: 'System Resources',
        status: cpuUsage < 80 && memoryUsage < 85 ? 'healthy' : 'warning',
        details: `CPU: ${cpuUsage.toFixed(1)}%, Memory: ${memoryUsage.toFixed(1)}%`
      });
      
      const allHealthy = healthChecks.every(check => check.status === 'healthy');
      
      return {
        success: allHealthy,
        checks: healthChecks,
        overall: allHealthy ? 'healthy' : 'unhealthy'
      };
    });
  }

  getCpuUsage() {
    const cpus = os.cpus();
    let totalIdle = 0;
    let totalTick = 0;

    cpus.forEach(cpu => {
      for (const type in cpu.times) {
        totalTick += cpu.times[type];
      }
      totalIdle += cpu.times.idle;
    });

    return 100 - ~~(100 * totalIdle / totalTick);
  }

  async postDeploymentTasks() {
    return await this.runStage('Post-deployment Tasks', async () => {
      const tasks = [];
      
      // Clean up old backups
      try {
        const backupsDir = path.join(this.projectRoot, 'backups');
        if (fs.existsSync(backupsDir)) {
          const backups = fs.readdirSync(backupsDir)
            .filter(item => item.startsWith('backup-'))
            .sort()
            .reverse();
          
          // Keep only last 5 backups
          if (backups.length > 5) {
            const toDelete = backups.slice(5);
            toDelete.forEach(backup => {
              execSync(`rm -rf ${path.join(backupsDir, backup)}`, { stdio: 'pipe' });
            });
            tasks.push(`Cleaned up ${toDelete.length} old backups`);
          }
        }
      } catch (error) {
        tasks.push(`Backup cleanup failed: ${error.message}`);
      }
      
      // Update deployment status
      this.deployment.status = 'completed';
      this.deployment.endTime = Date.now();
      this.deployment.duration = this.deployment.endTime - this.startTime;
      
      tasks.push('Updated deployment status');
      
      return {
        success: true,
        tasks
      };
    });
  }

  async rollback() {
    this.log('🔄 Starting rollback process...');
    
    try {
      if (!this.deployment.rollback) {
        throw new Error('No rollback information available');
      }
      
      const rollbackInfo = this.deployment.rollback;
      
      // Stop current processes
      execSync('pm2 stop all', { cwd: this.projectRoot, stdio: 'pipe' });
      
      // Restore from backup
      if (fs.existsSync(rollbackInfo.path)) {
        execSync(`cp -r ${rollbackInfo.path}/dist ./`, { stdio: 'pipe' });
      }
      
      // Restart processes
      execSync('pm2 start ecosystem.config.js', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log(`✅ Rollback completed to commit: ${rollbackInfo.commit}`);
      
      return {
        success: true,
        rollbackTo: rollbackInfo.commit,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async saveDeploymentStatus() {
    try {
      fs.writeFileSync(this.deploymentFile, JSON.stringify(this.deployment, null, 2));
      this.log(`💾 Deployment status saved: ${this.deploymentFile}`);
    } catch (error) {
      this.log(`❌ Error saving deployment status: ${error.message}`, 'ERROR');
    }
  }

  displaySummary() {
    console.log('\n🚀 DEPLOYMENT PIPELINE SUMMARY');
    console.log('===============================');
    
    console.log(`🆔 Deployment ID: ${this.deployment.id}`);
    console.log(`📅 Timestamp: ${this.deployment.timestamp}`);
    console.log(`📊 Status: ${this.deployment.status.toUpperCase()}`);
    console.log(`⏱️ Duration: ${this.deployment.duration || 0}ms`);
    console.log(`🔧 Stages: ${this.deployment.stages.length}`);
    
    if (this.deployment.stages.length > 0) {
      console.log('\n📋 Stage Details:');
      this.deployment.stages.forEach((stage, index) => {
        const status = stage.status === 'completed' ? '✅' : 
                     stage.status === 'failed' ? '❌' : '⏳';
        console.log(`  ${index + 1}. ${status} ${stage.name} (${stage.duration || 0}ms)`);
        if (stage.error) {
          console.log(`     Error: ${stage.error}`);
        }
      });
    }
    
    if (this.deployment.rollback) {
      console.log(`\n💾 Rollback Available: ${this.deployment.rollback.id}`);
    }
    
    console.log(`\n📄 Deployment status saved to: ${this.deploymentFile}`);
  }

  async run() {
    this.log('🚀 Starting Deployment Pipeline...');
    
    try {
      // Run deployment stages
      await this.preDeploymentChecks();
      await this.createBackup();
      await this.deploy();
      
      const healthCheck = await this.healthCheck();
      if (!healthCheck.success) {
        this.log('⚠️ Health check failed, initiating rollback...', 'WARN');
        await this.rollback();
        this.deployment.status = 'rolled_back';
      } else {
        await this.postDeploymentTasks();
      }
      
      // Save deployment status
      await this.saveDeploymentStatus();
      
      // Display summary
      this.displaySummary();
      
      this.log('✅ Deployment Pipeline completed');
    } catch (error) {
      this.log(`❌ Deployment Pipeline failed: ${error.message}`, 'ERROR');
      
      // Attempt rollback on failure
      try {
        await this.rollback();
        this.deployment.status = 'failed_rolled_back';
      } catch (rollbackError) {
        this.log(`❌ Rollback also failed: ${rollbackError.message}`, 'ERROR');
        this.deployment.status = 'failed';
      }
      
      await this.saveDeploymentStatus();
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const pipeline = new DeploymentPipeline();
  pipeline.run();
}

module.exports = DeploymentPipeline;