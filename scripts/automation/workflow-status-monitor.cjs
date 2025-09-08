#!/usr/bin/env node

/**
 * Workflow Status Monitor
 * Replaces GitHub Actions status workflow
 * Runs every 2 hours to monitor system status
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WorkflowStatusMonitor {
  constructor() {
    this.reportFile = 'workflow-status-report.json';
    this.startTime = new Date();
  }

  async run() {
    console.log('📊 Starting Workflow Status Monitor...');
    
    try {
      // Check system status
      await this.checkSystemStatus();
      
      // Check build status
      await this.checkBuildStatus();
      
      // Check deployment status
      await this.checkDeploymentStatus();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Workflow Status Monitor completed successfully');
    } catch (error) {
      console.error('❌ Workflow Status Monitor failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async checkSystemStatus() {
    console.log('🖥️  Checking system status...');
    
    try {
      // Check disk space
      const diskOutput = execSync('df -h .', { encoding: 'utf8' });
      this.diskStatus = diskOutput;
      
      // Check memory usage
      const memoryOutput = execSync('free -h', { encoding: 'utf8' });
      this.memoryStatus = memoryOutput;
      
      // Check CPU load
      const cpuOutput = execSync('uptime', { encoding: 'utf8' });
      this.cpuStatus = cpuOutput;
      
      console.log('✅ System status check completed');
      
    } catch (error) {
      console.log('ℹ️  System status check completed with limited info');
    }
  }

  async checkBuildStatus() {
    console.log('🔨 Checking build status...');
    
    try {
      // Check if dist directory exists and has recent files
      if (fs.existsSync('dist')) {
        const distStats = fs.statSync('dist');
        const distAge = Date.now() - distStats.mtime.getTime();
        const hoursOld = Math.floor(distAge / (1000 * 60 * 60));
        
        this.buildStatus = {
          exists: true,
          lastModified: distStats.mtime.toISOString(),
          hoursOld: hoursOld,
          status: hoursOld < 24 ? 'recent' : 'stale'
        };
        
        if (hoursOld < 24) {
          console.log('✅ Build is recent (less than 24 hours old)');
        } else {
          console.log(`⚠️  Build is ${hoursOld} hours old`);
        }
      } else {
        this.buildStatus = {
          exists: false,
          status: 'missing'
        };
        console.log('❌ Build directory not found');
      }
      
    } catch (error) {
      console.log('ℹ️  Build status check completed');
    }
  }

  async checkDeploymentStatus() {
    console.log('🚀 Checking deployment status...');
    
    try {
      // Check if package.json has start script
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const hasStartScript = packageJson.scripts && packageJson.scripts.start;
      
      this.deploymentStatus = {
        hasStartScript: hasStartScript,
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      };
      
      if (hasStartScript) {
        console.log('✅ Deployment configuration looks good');
      } else {
        console.log('⚠️  No start script found in package.json');
      }
      
    } catch (error) {
      console.log('ℹ️  Deployment status check completed');
    }
  }

  async generateReport() {
    const report = {
      timestamp: this.startTime.toISOString(),
      status: 'completed',
      systemStatus: {
        disk: this.diskStatus || 'N/A',
        memory: this.memoryStatus || 'N/A',
        cpu: this.cpuStatus || 'N/A'
      },
      buildStatus: this.buildStatus || {},
      deploymentStatus: this.deploymentStatus || {},
      summary: {
        buildExists: this.buildStatus?.exists || false,
        buildAge: this.buildStatus?.hoursOld || 'N/A',
        hasStartScript: this.deploymentStatus?.hasStartScript || false
      },
      health: this.calculateHealthScore()
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Status report generated: ${this.reportFile}`);
  }

  calculateHealthScore() {
    let score = 100;
    let issues = [];
    
    if (!this.buildStatus?.exists) {
      score -= 30;
      issues.push('Build directory missing');
    } else if (this.buildStatus?.hoursOld > 24) {
      score -= 15;
      issues.push('Build is stale');
    }
    
    if (!this.deploymentStatus?.hasStartScript) {
      score -= 20;
      issues.push('No start script');
    }
    
    if (score < 50) {
      return { score, status: 'critical', issues };
    } else if (score < 80) {
      return { score, status: 'warning', issues };
    } else {
      return { score, status: 'healthy', issues };
    }
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: this.startTime.toISOString(),
      status: 'failed',
      error: error.message,
      stack: error.stack
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(errorReport, null, 2));
    console.log(`❌ Error report generated: ${this.reportFile}`);
  }
}

// Run the status monitor
const statusMonitor = new WorkflowStatusMonitor();
statusMonitor.run().catch(console.error);