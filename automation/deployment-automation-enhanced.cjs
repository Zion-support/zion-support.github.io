const fs = require('fs');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class DeploymentAutomationEnhanced {
  constructor() {
    this.reportsDir = './automation-reports';
    this.projectRoot = process.cwd();
    this.deploymentResults = {
      preDeployment: { success: false, checks: [] },
      build: { success: false, duration: 0, size: 0 },
      deployment: { success: false, duration: 0, url: '' },
      postDeployment: { success: false, healthCheck: false, performance: 0 }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`🚀 Starting: ${description}`);
    const startTime = Date.now();
    
    try {
      const result = await execAsync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: timeout
      });
      
      const duration = Date.now() - startTime;
      this.log(`✅ Completed: ${description} (${duration}ms)`);
      return { success: true, output: result, duration };
    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`❌ Failed: ${description} - ${error.message} (${duration}ms)`);
      return { success: false, error: error.message, duration };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { cmd: 'git status --porcelain', desc: 'Check for uncommitted changes' },
      { cmd: 'npm run test:smoke', desc: 'Run smoke tests' },
      { cmd: 'npm run build', desc: 'Build application' },
      { cmd: 'npm audit --audit-level=high', desc: 'Security audit' }
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    const allPassed = results.every(r => r.success);
    this.deploymentResults.preDeployment = {
      success: allPassed,
      checks: results
    };

    return allPassed;
  }

  async buildApplication() {
    this.log('🏗️ Building application for deployment...');
    
    const result = await this.runCommand('npm run build', 'Build for production', 120000);
    
    if (result.success) {
      // Calculate build size
      const buildSize = this.calculateBuildSize();
      this.deploymentResults.build = {
        success: true,
        duration: result.duration,
        size: buildSize
      };
    } else {
      this.deploymentResults.build = {
        success: false,
        duration: result.duration,
        size: 0
      };
    }

    return result;
  }

  calculateBuildSize() {
    try {
      const stats = fs.statSync('.next');
      return this.formatBytes(this.getDirectorySize('.next'));
    } catch (error) {
      return 0;
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = `${dirPath}/${file}`;
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async deployToNetlify() {
    this.log('🚀 Deploying to Netlify...');
    
    const result = await this.runCommand('npm run deploy:netlify', 'Deploy to Netlify', 300000);
    
    this.deploymentResults.deployment = {
      success: result.success,
      duration: result.duration,
      url: result.success ? this.extractDeploymentUrl(result.output.stdout) : ''
    };

    return result;
  }

  async deployToVercel() {
    this.log('🚀 Deploying to Vercel...');
    
    const result = await this.runCommand('npm run deploy:vercel', 'Deploy to Vercel', 300000);
    
    this.deploymentResults.deployment = {
      success: result.success,
      duration: result.duration,
      url: result.success ? this.extractDeploymentUrl(result.output.stdout) : ''
    };

    return result;
  }

  extractDeploymentUrl(output) {
    const urlMatch = output.match(/(https?:\/\/[^\s]+)/);
    return urlMatch ? urlMatch[1] : 'https://ziontechgroup.com';
  }

  async postDeploymentChecks() {
    this.log('🔍 Running post-deployment checks...');
    
    const url = this.deploymentResults.deployment.url;
    if (!url) {
      this.log('⚠️ No deployment URL available for health checks');
      return false;
    }

    // Health check
    const healthCheck = await this.runCommand(`curl -f ${url}`, 'Health check', 30000);
    
    // Performance check
    const performanceCheck = await this.runCommand(`npm run perf:lighthouse -- --url=${url}`, 'Performance check', 120000);
    
    this.deploymentResults.postDeployment = {
      success: healthCheck.success,
      healthCheck: healthCheck.success,
      performance: performanceCheck.success ? this.extractPerformanceScore(performanceCheck.output.stdout) : 0
    };

    return healthCheck.success;
  }

  extractPerformanceScore(output) {
    const scoreMatch = output.match(/Performance Score: (\d+)/);
    return scoreMatch ? parseInt(scoreMatch[1]) : 0;
  }

  async rollbackDeployment() {
    this.log('🔄 Rolling back deployment...');
    
    const rollbackCommands = [
      'git log --oneline -5',
      'git reset --hard HEAD~1',
      'npm run deploy:netlify'
    ];

    for (const cmd of rollbackCommands) {
      await this.runCommand(cmd, `Rollback: ${cmd}`, 60000);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      deploymentResults: this.deploymentResults,
      summary: {
        overallSuccess: Object.values(this.deploymentResults).every(result => result.success),
        totalDuration: Object.values(this.deploymentResults).reduce((sum, result) => sum + result.duration, 0),
        deploymentUrl: this.deploymentResults.deployment.url,
        buildSize: this.deploymentResults.build.size
      },
      status: this.deploymentResults.deployment.success ? 'deployed' : 'failed'
    };

    const reportPath = `${this.reportsDir}/deployment-automation-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Deployment Report saved to: ${reportPath}`);
    
    return report;
  }

  async run(deploymentTarget = 'netlify') {
    this.log('🚀 Starting Enhanced Deployment Automation...');
    this.ensureDirectories();
    
    try {
      // Pre-deployment checks
      const preChecksPassed = await this.preDeploymentChecks();
      if (!preChecksPassed) {
        this.log('❌ Pre-deployment checks failed. Aborting deployment.');
        return false;
      }

      // Build application
      const buildSuccess = await this.buildApplication();
      if (!buildSuccess.success) {
        this.log('❌ Build failed. Aborting deployment.');
        return false;
      }

      // Deploy to target platform
      let deploymentSuccess;
      if (deploymentTarget === 'vercel') {
        deploymentSuccess = await this.deployToVercel();
      } else {
        deploymentSuccess = await this.deployToNetlify();
      }

      if (!deploymentSuccess.success) {
        this.log('❌ Deployment failed. Attempting rollback...');
        await this.rollbackDeployment();
        return false;
      }

      // Post-deployment checks
      await this.postDeploymentChecks();

      // Generate report
      const report = this.generateReport();
      
      this.log('✅ Enhanced Deployment Automation completed!');
      this.log(`🌐 Deployment URL: ${report.summary.deploymentUrl}`);
      this.log(`📦 Build Size: ${report.summary.buildSize}`);
      this.log(`⏱️ Total Duration: ${report.summary.totalDuration}ms`);
      
      return true;
      
    } catch (error) {
      this.log(`❌ Enhanced Deployment Automation failed: ${error.message}`);
      await this.rollbackDeployment();
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const deployment = new DeploymentAutomationEnhanced();
  const target = process.argv[2] || 'netlify';
  deployment.run(target).catch(console.error);
}

module.exports = DeploymentAutomationEnhanced;