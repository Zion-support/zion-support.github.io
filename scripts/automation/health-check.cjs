#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthCheck {
  constructor() {
    this.logFile = './logs/health-check.log';
    this.reportsDir = './reports';
    this.ensureDirectories();
    this.healthStatus = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      services: {},
      errors: [],
      warnings: [],
      recommendations: []
    };
  }

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkPM2Status() {
    this.log('🔍 Checking PM2 status...');
    
    try {
      const status = execSync('pm2 status', { encoding: 'utf8' });
      const processes = this.parsePM2Status(status);
      
      for (const process of processes) {
        const serviceName = process.name;
        this.healthStatus.services[serviceName] = {
          status: process.status,
          uptime: process.uptime || 0,
          memory: process.memory || 0,
          cpu: process.cpu || 0,
          restarts: process.restarts || 0,
          healthy: process.status === 'online'
        };

        if (process.status !== 'online') {
          this.healthStatus.errors.push(`${serviceName} is not online (status: ${process.status})`);
          this.healthStatus.overall = 'degraded';
        }

        if (process.restarts > 5) {
          this.healthStatus.warnings.push(`${serviceName} has restarted ${process.restarts} times`);
        }
      }
      
      this.log(`✅ PM2 status check completed. Found ${Object.keys(this.healthStatus.services).length} services.`);
    } catch (error) {
      this.log(`❌ PM2 status check failed: ${error.message}`);
      this.healthStatus.errors.push(`PM2 status check failed: ${error.message}`);
      this.healthStatus.overall = 'unhealthy';
    }
  }

  parsePM2Status(statusOutput) {
    const processes = [];
    const lines = statusOutput.split('\n');
    
    // Skip header lines
    let startIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('id') && lines[i].includes('name')) {
        startIndex = i + 1;
        break;
      }
    }
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.includes('─') && !line.includes('Use')) {
        const parts = line.split(/\s+/);
        if (parts.length >= 6) {
          processes.push({
            name: parts[1],
            status: parts[2],
            uptime: parts[3],
            memory: parts[4],
            cpu: parts[5],
            restarts: parts[6] || 0
          });
        }
      }
    }
    
    return processes;
  }

  async checkErrorLogs() {
    this.log('🔍 Checking error logs...');
    
    const logFiles = [
      './logs/enhanced-error-prevention-orchestrator-error.log',
      './logs/syntax-error-fixer-error.log',
      './logs/typescript-error-fixer-error.log',
      './logs/linting-error-fixer-error.log',
      './logs/build-error-fixer-error.log',
      './logs/dependency-error-fixer-error.log'
    ];

    for (const logFile of logFiles) {
      if (fs.existsSync(logFile)) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          const errorLines = lines.filter(line => 
            line.includes('ERROR') || 
            line.includes('Error') || 
            line.includes('error') ||
            line.includes('Failed') ||
            line.includes('failed')
          );

          if (errorLines.length > 0) {
            this.healthStatus.warnings.push(`${path.basename(logFile)} contains ${errorLines.length} error entries`);
            
            if (errorLines.length > 10) {
              this.healthStatus.errors.push(`${path.basename(logFile)} has excessive errors (${errorLines.length})`);
              this.healthStatus.overall = 'degraded';
            }
          }
        } catch (error) {
          this.log(`⚠️ Could not read log file ${logFile}: ${error.message}`);
        }
      }
    }
  }

  async checkProjectHealth() {
    this.log('🔍 Checking project health...');
    
    try {
      // Check for syntax errors
      const lintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      const errorCount = (lintResult.match(/error/g) || []).length;
      
      if (errorCount > 0) {
        this.healthStatus.warnings.push(`Project has ${errorCount} linting errors`);
        
        if (errorCount > 100) {
          this.healthStatus.errors.push(`Project has excessive linting errors (${errorCount})`);
          this.healthStatus.overall = 'degraded';
        }
      }

      // Check TypeScript errors
      try {
        const tsResult = execSync('npx tsc --noEmit 2>&1', { encoding: 'utf8' });
        const tsErrorCount = (tsResult.match(/error TS/g) || []).length;
        
        if (tsErrorCount > 0) {
          this.healthStatus.warnings.push(`Project has ${tsErrorCount} TypeScript errors`);
          
          if (tsErrorCount > 50) {
            this.healthStatus.errors.push(`Project has excessive TypeScript errors (${tsErrorCount})`);
            this.healthStatus.overall = 'degraded';
          }
        }
      } catch (tsError) {
        const tsErrorCount = (tsError.stdout?.match(/error TS/g) || []).length;
        if (tsErrorCount > 0) {
          this.healthStatus.warnings.push(`Project has ${tsErrorCount} TypeScript errors`);
        }
      }

      // Check build status
      try {
        execSync('npm run build --dry-run 2>&1', { stdio: 'pipe' });
        this.healthStatus.services.build = { status: 'healthy', message: 'Build configuration is valid' };
      } catch (buildError) {
        this.healthStatus.warnings.push('Build configuration has issues');
        this.healthStatus.services.build = { status: 'warning', message: buildError.message };
      }

    } catch (error) {
      this.log(`❌ Project health check failed: ${error.message}`);
      this.healthStatus.errors.push(`Project health check failed: ${error.message}`);
      this.healthStatus.overall = 'unhealthy';
    }
  }

  async checkDiskSpace() {
    this.log('🔍 Checking disk space...');
    
    try {
      const df = execSync('df -h .', { encoding: 'utf8' });
      const lines = df.split('\n');
      
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        const usedPercent = parseInt(parts[4].replace('%', ''));
        
        if (usedPercent > 90) {
          this.healthStatus.errors.push(`Disk space is critically low (${usedPercent}% used)`);
          this.healthStatus.overall = 'unhealthy';
        } else if (usedPercent > 80) {
          this.healthStatus.warnings.push(`Disk space is getting low (${usedPercent}% used)`);
        }
        
        this.healthStatus.services.disk = {
          status: usedPercent > 90 ? 'critical' : usedPercent > 80 ? 'warning' : 'healthy',
          usedPercent: usedPercent
        };
      }
    } catch (error) {
      this.log(`⚠️ Could not check disk space: ${error.message}`);
    }
  }

  async checkMemoryUsage() {
    this.log('🔍 Checking memory usage...');
    
    try {
      const free = execSync('free -m', { encoding: 'utf8' });
      const lines = free.split('\n');
      
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        const total = parseInt(parts[1]);
        const used = parseInt(parts[2]);
        const usedPercent = Math.round((used / total) * 100);
        
        if (usedPercent > 90) {
          this.healthStatus.errors.push(`Memory usage is critically high (${usedPercent}% used)`);
          this.healthStatus.overall = 'unhealthy';
        } else if (usedPercent > 80) {
          this.healthStatus.warnings.push(`Memory usage is high (${usedPercent}% used)`);
        }
        
        this.healthStatus.services.memory = {
          status: usedPercent > 90 ? 'critical' : usedPercent > 80 ? 'warning' : 'healthy',
          usedPercent: usedPercent,
          total: total,
          used: used
        };
      }
    } catch (error) {
      this.log(`⚠️ Could not check memory usage: ${error.message}`);
    }
  }

  generateRecommendations() {
    this.log('💡 Generating recommendations...');
    
    if (this.healthStatus.errors.length > 0) {
      this.healthStatus.recommendations.push('Review and fix critical errors immediately');
    }
    
    if (this.healthStatus.warnings.length > 0) {
      this.healthStatus.recommendations.push('Address warnings to prevent future issues');
    }
    
    // Check for specific issues and provide targeted recommendations
    const services = this.healthStatus.services;
    
    for (const [serviceName, service] of Object.entries(services)) {
      if (service.restarts > 5) {
        this.healthStatus.recommendations.push(`Investigate frequent restarts of ${serviceName}`);
      }
      
      if (service.memory && service.memory > 500) {
        this.healthStatus.recommendations.push(`Optimize memory usage for ${serviceName}`);
      }
    }
    
    if (this.healthStatus.overall === 'healthy') {
      this.healthStatus.recommendations.push('System is healthy - continue monitoring');
    }
  }

  async generateReport() {
    this.log('📊 Generating health report...');
    
    const report = {
      ...this.healthStatus,
      generatedAt: new Date().toISOString(),
      summary: {
        totalServices: Object.keys(this.healthStatus.services).length,
        healthyServices: Object.values(this.healthStatus.services).filter(s => s.healthy).length,
        errorCount: this.healthStatus.errors.length,
        warningCount: this.healthStatus.warnings.length,
        recommendationCount: this.healthStatus.recommendations.length
      }
    };

    const reportFile = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health report generated: ${reportFile}`);
    
    // Also generate a human-readable summary
    const summaryFile = path.join(this.reportsDir, 'health-check-summary.txt');
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📊 Health summary generated: ${summaryFile}`);
  }

  generateHumanReadableSummary(report) {
    let summary = `Health Check Report - ${new Date().toLocaleString()}\n`;
    summary += '='.repeat(50) + '\n\n';
    
    summary += `Overall Status: ${report.overall.toUpperCase()}\n`;
    summary += `Total Services: ${report.summary.totalServices}\n`;
    summary += `Healthy Services: ${report.summary.healthyServices}\n`;
    summary += `Errors: ${report.summary.errorCount}\n`;
    summary += `Warnings: ${report.summary.warningCount}\n\n`;
    
    if (report.errors.length > 0) {
      summary += 'CRITICAL ERRORS:\n';
      summary += '-'.repeat(20) + '\n';
      report.errors.forEach(error => {
        summary += `• ${error}\n`;
      });
      summary += '\n';
    }
    
    if (report.warnings.length > 0) {
      summary += 'WARNINGS:\n';
      summary += '-'.repeat(20) + '\n';
      report.warnings.forEach(warning => {
        summary += `• ${warning}\n`;
      });
      summary += '\n';
    }
    
    if (report.recommendations.length > 0) {
      summary += 'RECOMMENDATIONS:\n';
      summary += '-'.repeat(20) + '\n';
      report.recommendations.forEach(rec => {
        summary += `• ${rec}\n`;
      });
      summary += '\n';
    }
    
    summary += 'Service Status:\n';
    summary += '-'.repeat(20) + '\n';
    for (const [serviceName, service] of Object.entries(report.services)) {
      if (service.status) {
        summary += `${serviceName}: ${service.status}\n`;
      }
    }
    
    return summary;
  }

  async run() {
    this.log('🚀 Starting Health Check...');
    
    try {
      await this.checkPM2Status();
      await this.checkErrorLogs();
      await this.checkProjectHealth();
      await this.checkDiskSpace();
      await this.checkMemoryUsage();
      
      this.generateRecommendations();
      await this.generateReport();
      
      this.log(`🎉 Health Check completed! Overall status: ${this.healthStatus.overall}`);
      
      // Exit with appropriate code
      if (this.healthStatus.overall === 'unhealthy') {
        process.exit(1);
      } else if (this.healthStatus.overall === 'degraded') {
        process.exit(2);
      } else {
        process.exit(0);
      }
      
    } catch (error) {
      this.log(`❌ Health Check failed: ${error.message}`);
      this.healthStatus.overall = 'unhealthy';
      this.healthStatus.errors.push(`Health check failed: ${error.message}`);
      await this.generateReport();
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const healthCheck = new HealthCheck();
  
  const command = process.argv[2] || 'check';
  
  switch (command) {
    case 'check':
      healthCheck.run().catch(console.error);
      break;
    case 'status':
      healthCheck.checkPM2Status().then(() => {
        console.log(JSON.stringify(healthCheck.healthStatus.services, null, 2));
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node health-check.cjs [check|status]');
      process.exit(1);
  }
}

module.exports = HealthCheck;