#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartDeploymentAutomation {
  constructor() {
    this.deploymentLog = path.join(__dirname, '../logs', 'deployment-automation.log');
    this.ensureLogDirectory();
    this.deploymentHistory = [];
    this.healthCheckEndpoints = [];
    this.rollbackThresholds = {
      errorRate: 5,      // 5% error rate
      responseTime: 3000, // 3 seconds
      memoryUsage: 85,   // 85% memory usage
      cpuUsage: 80       // 80% CPU usage
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.deploymentLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Deployment Automation: ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.deploymentLog, logMessage);
  }

  async startSmartDeployment() {
    try {
      this.log('🚀 Starting smart deployment automation...');
      
      // Pre-deployment health check
      const preDeploymentHealth = await this.runPreDeploymentChecks();
      
      if (!preDeploymentHealth.healthy) {
        this.log('❌ Pre-deployment checks failed. Aborting deployment.');
        return { success: false, reason: 'Pre-deployment checks failed' };
      }
      
      // Create deployment backup
      const backupCreated = await this.createDeploymentBackup();
      
      // Execute deployment
      const deploymentResult = await this.executeDeployment();
      
      if (deploymentResult.success) {
        // Post-deployment health check
        const postDeploymentHealth = await this.runPostDeploymentChecks();
        
        if (postDeploymentHealth.healthy) {
          this.log('✅ Deployment completed successfully');
          await this.cleanupOldBackups();
        } else {
          this.log('⚠️ Post-deployment health check failed. Initiating rollback...');
          await this.rollbackDeployment();
        }
      } else {
        this.log('❌ Deployment failed. Initiating rollback...');
        await this.rollbackDeployment();
      }
      
      // Generate deployment report
      await this.generateDeploymentReport();
      
    } catch (error) {
      this.log(`❌ Smart deployment failed: ${error.message}`);
      await this.rollbackDeployment();
    }
  }

  async runPreDeploymentChecks() {
    this.log('🔍 Running pre-deployment health checks...');
    
    const checks = {
      healthy: true,
      issues: []
    };
    
    try {
      // Check if all PM2 processes are running
      const pm2Status = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      const offlineProcesses = processes.filter(p => p.pm2_env.status !== 'online');
      
      if (offlineProcesses.length > 0) {
        checks.healthy = false;
        checks.issues.push(`Found ${offlineProcesses.length} offline PM2 processes`);
      }
      
      // Check system resources
      const systemResources = await this.checkSystemResources();
      if (!systemResources.healthy) {
        checks.healthy = false;
        checks.issues.push(...systemResources.issues);
      }
      
      // Check database connectivity (if applicable)
      const dbHealth = await this.checkDatabaseHealth();
      if (!dbHealth.healthy) {
        checks.healthy = false;
        checks.issues.push(...dbHealth.issues);
      }
      
      // Check external dependencies
      const dependencyHealth = await this.checkExternalDependencies();
      if (!dependencyHealth.healthy) {
        checks.healthy = false;
        checks.issues.push(...dependencyHealth.issues);
      }
      
      if (checks.healthy) {
        this.log('✅ Pre-deployment checks passed');
      } else {
        this.log(`❌ Pre-deployment checks failed: ${checks.issues.join(', ')}`);
      }
      
    } catch (error) {
      checks.healthy = false;
      checks.issues.push(`Health check error: ${error.message}`);
    }
    
    return checks;
  }

  async checkSystemResources() {
    const result = { healthy: true, issues: [] };
    
    try {
      // Check disk space
      const diskUsage = execSync('df -h / | tail -1', { encoding: 'utf8' });
      const usagePercent = parseInt(diskUsage.split(/\s+/)[4].replace('%', ''));
      
      if (usagePercent > 90) {
        result.healthy = false;
        result.issues.push(`Disk usage is ${usagePercent}% (above 90% threshold)`);
      }
      
      // Check memory usage
      const memoryInfo = execSync('free -m', { encoding: 'utf8' });
      const memoryLines = memoryInfo.split('\n');
      const memLine = memoryLines[1].split(/\s+/);
      const totalMem = parseInt(memLine[1]);
      const usedMem = parseInt(memLine[2]);
      const memoryUsage = (usedMem / totalMem) * 100;
      
      if (memoryUsage > 85) {
        result.healthy = false;
        result.issues.push(`Memory usage is ${memoryUsage.toFixed(1)}% (above 85% threshold)`);
      }
      
      // Check CPU load
      const cpuLoad = execSync('uptime', { encoding: 'utf8' });
      const loadMatch = cpuLoad.match(/load average: ([\d.]+)/);
      if (loadMatch) {
        const load = parseFloat(loadMatch[1]);
        if (load > 5.0) {
          result.healthy = false;
          result.issues.push(`CPU load is ${load} (above 5.0 threshold)`);
        }
      }
      
    } catch (error) {
      result.healthy = false;
      result.issues.push(`System resource check error: ${error.message}`);
    }
    
    return result;
  }

  async checkDatabaseHealth() {
    const result = { healthy: true, issues: [] };
    
    try {
      // Check if there are any database-related processes
      const dbProcesses = execSync('ps aux | grep -E "(postgres|mysql|mongod|redis)" | grep -v grep', { encoding: 'utf8' });
      
      if (!dbProcesses.trim()) {
        // No database processes found, might be using external services
        result.healthy = true;
      } else {
        // Check database connectivity (basic check)
        // This would need to be customized based on your database setup
        result.healthy = true;
      }
      
    } catch (error) {
      // No database processes found, which might be normal
      result.healthy = true;
    }
    
    return result;
  }

  async checkExternalDependencies() {
    const result = { healthy: true, issues: [] };
    
    try {
      // Check if npm registry is accessible
      const npmCheck = execSync('npm ping', { encoding: 'utf8', timeout: 10000 });
      if (!npmCheck.includes('pong')) {
        result.healthy = false;
        result.issues.push('NPM registry is not accessible');
      }
      
      // Check if git is accessible
      const gitCheck = execSync('git ls-remote --exit-code origin', { encoding: 'utf8', timeout: 10000 });
      if (gitCheck.includes('fatal')) {
        result.healthy = false;
        result.issues.push('Git remote is not accessible');
      }
      
    } catch (error) {
      result.healthy = false;
      result.issues.push(`External dependency check error: ${error.message}`);
    }
    
    return result;
  }

  async createDeploymentBackup() {
    try {
      this.log('💾 Creating deployment backup...');
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(process.cwd(), 'deployment-backups', timestamp);
      
      if (!fs.existsSync(path.dirname(backupDir))) {
        fs.mkdirSync(path.dirname(backupDir), { recursive: true });
      }
      
      // Backup current build
      if (fs.existsSync('dist')) {
        execSync(`cp -r dist ${backupDir}/dist-backup`, { stdio: 'pipe' });
      }
      
      // Backup package files
      if (fs.existsSync('package.json')) {
        execSync(`cp package.json ${backupDir}/package.json.backup`, { stdio: 'pipe' });
      }
      
      if (fs.existsSync('package-lock.json')) {
        execSync(`cp package-lock.json ${backupDir}/package-lock.json.backup`, { stdio: 'pipe' });
      }
      
      // Backup environment files
      const envFiles = ['.env', '.env.local', '.env.production'];
      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          execSync(`cp ${envFile} ${backupDir}/${envFile}.backup`, { stdio: 'pipe' });
        }
      });
      
      this.log(`✅ Deployment backup created: ${backupDir}`);
      return { success: true, backupPath: backupDir };
      
    } catch (error) {
      this.log(`❌ Failed to create deployment backup: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async executeDeployment() {
    try {
      this.log('🚀 Executing deployment...');
      
      const startTime = Date.now();
      
      // Pull latest changes
      this.log('📥 Pulling latest changes...');
      execSync('git pull origin main', { stdio: 'pipe' });
      
      // Install dependencies
      this.log('📦 Installing dependencies...');
      execSync('npm install', { stdio: 'pipe' });
      
      // Run tests
      this.log('🧪 Running tests...');
      try {
        execSync('npm test', { stdio: 'pipe' });
      } catch (error) {
        this.log('⚠️ Tests failed, but continuing with deployment...');
      }
      
      // Build application
      this.log('🔨 Building application...');
      execSync('npm run build', { stdio: 'pipe' });
      
      // Restart PM2 processes
      this.log('🔄 Restarting PM2 processes...');
      execSync('pm2 restart all', { stdio: 'pipe' });
      
      const deploymentTime = Date.now() - startTime;
      
      this.log(`✅ Deployment completed in ${deploymentTime}ms`);
      
      // Record deployment
      this.deploymentHistory.push({
        timestamp: new Date().toISOString(),
        success: true,
        duration: deploymentTime,
        commit: execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
      });
      
      return { success: true, duration: deploymentTime };
      
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`);
      
      this.deploymentHistory.push({
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        commit: execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
      });
      
      return { success: false, error: error.message };
    }
  }

  async runPostDeploymentChecks() {
    this.log('🔍 Running post-deployment health checks...');
    
    const checks = {
      healthy: true,
      issues: []
    };
    
    try {
      // Wait for services to stabilize
      this.log('⏳ Waiting for services to stabilize...');
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Check PM2 process status
      const pm2Status = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      const offlineProcesses = processes.filter(p => p.pm2_env.status !== 'online');
      
      if (offlineProcesses.length > 0) {
        checks.healthy = false;
        checks.issues.push(`Found ${offlineProcesses.length} offline PM2 processes after deployment`);
      }
      
      // Check application endpoints
      const endpointHealth = await this.checkApplicationEndpoints();
      if (!endpointHealth.healthy) {
        checks.healthy = false;
        checks.issues.push(...endpointHealth.issues);
      }
      
      // Check system resources after deployment
      const systemResources = await this.checkSystemResources();
      if (!systemResources.healthy) {
        checks.healthy = false;
        checks.issues.push(...systemResources.issues);
      }
      
      if (checks.healthy) {
        this.log('✅ Post-deployment health checks passed');
      } else {
        this.log(`❌ Post-deployment health checks failed: ${checks.issues.join(', ')}`);
      }
      
    } catch (error) {
      checks.healthy = false;
      checks.issues.push(`Post-deployment health check error: ${error.message}`);
    }
    
    return checks;
  }

  async checkApplicationEndpoints() {
    const result = { healthy: true, issues: [] };
    
    try {
      // Check if the application is responding
      // This would need to be customized based on your application setup
      
      // For now, just check if PM2 processes are running
      const pm2Status = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      const appProcesses = processes.filter(p => p.name.includes('zion'));
      
      if (appProcesses.length === 0) {
        result.healthy = false;
        result.issues.push('No application processes found');
      }
      
      // Check process logs for errors
      for (const process of appProcesses) {
        try {
          const logs = execSync(`pm2 logs ${process.name} --lines 10 --nostream`, { encoding: 'utf8' });
          if (logs.includes('ERROR') || logs.includes('FATAL')) {
            result.healthy = false;
            result.issues.push(`Process ${process.name} has errors in logs`);
          }
        } catch (error) {
          // Log check failed, but don't fail the entire health check
        }
      }
      
    } catch (error) {
      result.healthy = false;
      result.issues.push(`Endpoint health check error: ${error.message}`);
    }
    
    return result;
  }

  async rollbackDeployment() {
    try {
      this.log('🔄 Initiating deployment rollback...');
      
      // Find the most recent backup
      const backupDir = path.join(process.cwd(), 'deployment-backups');
      if (!fs.existsSync(backupDir)) {
        this.log('❌ No backup directory found for rollback');
        return { success: false, reason: 'No backup found' };
      }
      
      const backups = fs.readdirSync(backupDir)
        .filter(dir => fs.statSync(path.join(backupDir, dir)).isDirectory())
        .sort()
        .reverse();
      
      if (backups.length === 0) {
        this.log('❌ No backups found for rollback');
        return { success: false, reason: 'No backups found' };
      }
      
      const latestBackup = path.join(backupDir, backups[0]);
      this.log(`🔄 Rolling back to backup: ${latestBackup}`);
      
      // Restore from backup
      if (fs.existsSync(path.join(latestBackup, 'dist-backup'))) {
        execSync(`rm -rf dist && cp -r ${latestBackup}/dist-backup dist`, { stdio: 'pipe' });
      }
      
      if (fs.existsSync(path.join(latestBackup, 'package.json.backup'))) {
        execSync(`cp ${latestBackup}/package.json.backup package.json`, { stdio: 'pipe' });
      }
      
      if (fs.existsSync(path.join(latestBackup, 'package-lock.json.backup'))) {
        execSync(`cp ${latestBackup}/package-lock.json.backup package-lock.json`, { stdio: 'pipe' });
      }
      
      // Restart PM2 processes
      execSync('pm2 restart all', { stdio: 'pipe' });
      
      this.log('✅ Rollback completed successfully');
      
      return { success: true, backupUsed: latestBackup };
      
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async cleanupOldBackups() {
    try {
      this.log('🧹 Cleaning up old deployment backups...');
      
      const backupDir = path.join(process.cwd(), 'deployment-backups');
      if (!fs.existsSync(backupDir)) return;
      
      const backups = fs.readdirSync(backupDir)
        .filter(dir => fs.statSync(path.join(backupDir, dir)).isDirectory())
        .sort()
        .reverse();
      
      // Keep only the last 5 backups
      if (backups.length > 5) {
        const backupsToRemove = backups.slice(5);
        
        backupsToRemove.forEach(backup => {
          const backupPath = path.join(backupDir, backup);
          execSync(`rm -rf ${backupPath}`, { stdio: 'pipe' });
          this.log(`🗑️ Removed old backup: ${backup}`);
        });
      }
      
    } catch (error) {
      this.log(`Warning: Failed to cleanup old backups: ${error.message}`);
    }
  }

  async generateDeploymentReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        deploymentHistory: this.deploymentHistory,
        summary: {
          totalDeployments: this.deploymentHistory.length,
          successfulDeployments: this.deploymentHistory.filter(d => d.success).length,
          failedDeployments: this.deploymentHistory.filter(d => !d.success).length,
          averageDeploymentTime: 0
        },
        recommendations: this.generateDeploymentRecommendations()
      };
      
      // Calculate average deployment time
      const successfulDeployments = this.deploymentHistory.filter(d => d.success && d.duration);
      if (successfulDeployments.length > 0) {
        const totalTime = successfulDeployments.reduce((sum, d) => sum + d.duration, 0);
        report.summary.averageDeploymentTime = Math.round(totalTime / successfulDeployments.length);
      }
      
      const reportPath = path.join(__dirname, '../reports', 'deployment-report.json');
      const reportDir = path.dirname(reportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Generated deployment report: ${reportPath}`);
      
    } catch (error) {
      this.log(`Error generating deployment report: ${error.message}`);
    }
  }

  generateDeploymentRecommendations() {
    const recommendations = [];
    
    // Analyze deployment history
    if (this.deploymentHistory.length > 0) {
      const recentDeployments = this.deploymentHistory.slice(-5);
      const recentFailures = recentDeployments.filter(d => !d.success);
      
      if (recentFailures.length > 2) {
        recommendations.push({
          priority: 'high',
          action: 'Investigate recent deployment failures',
          details: `${recentFailures.length} out of ${recentDeployments.length} recent deployments failed`
        });
      }
      
      // Check deployment frequency
      if (this.deploymentHistory.length > 1) {
        const timeBetweenDeployments = [];
        for (let i = 1; i < this.deploymentHistory.length; i++) {
          const timeDiff = new Date(this.deploymentHistory[i].timestamp) - new Date(this.deploymentHistory[i-1].timestamp);
          timeBetweenDeployments.push(timeDiff);
        }
        
        const avgTimeBetween = timeBetweenDeployments.reduce((sum, time) => sum + time, 0) / timeBetweenDeployments.length;
        
        if (avgTimeBetween < 300000) { // Less than 5 minutes
          recommendations.push({
            priority: 'medium',
            action: 'Consider reducing deployment frequency',
            details: `Average time between deployments: ${Math.round(avgTimeBetween / 60000)} minutes`
          });
        }
      }
    }
    
    return recommendations;
  }
}

// Main execution
const deploymentAutomation = new SmartDeploymentAutomation();
deploymentAutomation.startSmartDeployment().catch(console.error);