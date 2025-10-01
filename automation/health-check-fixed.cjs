#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 30000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    const result = await this.runCommand('npm list --depth=0', 'Dependencies check');
    return {
      name: 'Dependencies',
      status: result.success ? 'healthy' : 'unhealthy',
      details: result.success ? 'All dependencies installed' : result.stderr
    };
  }

  async checkBuild() {
    this.log('🏗️ Checking build...');
    const result = await this.runCommand('npm run build', 'Build check');
    return {
      name: 'Build',
      status: result.success ? 'healthy' : 'unhealthy',
      details: result.success ? 'Build successful' : result.stderr
    };
  }

  async checkLinting() {
    this.log('🔍 Checking linting...');
    const result = await this.runCommand('npm run lint', 'Linting check');
    return {
      name: 'Linting',
      status: result.success ? 'healthy' : 'warning',
      details: result.success ? 'No linting errors' : result.stderr
    };
  }

  async checkTypeScript() {
    this.log('📝 Checking TypeScript...');
    const result = await this.runCommand('npm run type-check', 'TypeScript check');
    return {
      name: 'TypeScript',
      status: result.success ? 'healthy' : 'unhealthy',
      details: result.success ? 'No type errors' : result.stderr
    };
  }

  async checkFileStructure() {
    this.log('📁 Checking file structure...');
    const requiredFiles = [
      'package.json',
      'next.config.js',
      'app',
      'components',
      'public'
    ];

    const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(this.projectRoot, file)));
    
    return {
      name: 'File Structure',
      status: missingFiles.length === 0 ? 'healthy' : 'warning',
      details: missingFiles.length === 0 ? 'All required files present' : `Missing: ${missingFiles.join(', ')}`
    };
  }

  async runHealthCheck() {
    this.log('🏥 Starting comprehensive health check...');

    const checks = [
      await this.checkDependencies(),
      await this.checkFileStructure(),
      await this.checkLinting(),
      await this.checkTypeScript(),
      await this.checkBuild()
    ];

    const healthyCount = checks.filter(check => check.status === 'healthy').length;
    const warningCount = checks.filter(check => check.status === 'warning').length;
    const unhealthyCount = checks.filter(check => check.status === 'unhealthy').length;

    const overallStatus = unhealthyCount > 0 ? 'unhealthy' : warningCount > 0 ? 'warning' : 'healthy';

    const report = {
      timestamp: new Date().toISOString(),
      overallStatus,
      summary: {
        total: checks.length,
        healthy: healthyCount,
        warnings: warningCount,
        unhealthy: unhealthyCount
      },
      checks
    };

    const reportFile = path.join(this.reportsDir, `health-check-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Health check completed. Overall status: ${overallStatus}`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const healthChecker = new HealthChecker();
  healthChecker.runHealthCheck().catch(error => {
    console.error('Health check failed:', error);
    process.exit(1);
  });
}

module.exports = HealthChecker;