#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }

  async checkNpmAudit() {
    try {
      this.log('🔒 Running npm audit...');
      
      const auditResult = execSync('npm audit --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {
      // npm audit might fail if there are vulnerabilities
      try {
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        if (output.includes('npm ERR!')) {
          // Try to parse the error output for vulnerability info
          const lines = output.split('\n');
          const vulnerabilities = [];
          
          for (const line of lines) {
            if (line.includes('vulnerability') || line.includes('vulnerabilities')) {
              vulnerabilities.push(line.trim());
            }
          }
          
          return {
            vulnerabilities: vulnerabilities,
            error: 'Vulnerabilities found',
            metadata: {
              vulnerabilities: { total: vulnerabilities.length }
            }
          };
        }
      } catch (parseError) {
        this.log(`Error parsing audit output: ${parseError.message}`);
      }
      
      return {
        error: error.message,
        vulnerabilities: [],
        metadata: { vulnerabilities: { total: 0 } }
      };
    }
  }

  async checkOutdatedPackages() {
    try {
      this.log('📦 Checking for outdated packages...');
      
      const outdatedResult = execSync('npm outdated --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(outdatedResult);
      return {
        success: true,
        packages: outdated
      };
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      try {
        const output = error.stdout?.toString() || '';
        if (output.trim()) {
          const outdated = JSON.parse(output);
          return {
            success: true,
            packages: outdated
          };
        }
      } catch (parseError) {
        this.log(`Error parsing outdated output: ${parseError.message}`);
      }
      
      return {
        success: false,
        error: error.message,
        packages: {}
      };
    }
  }

  async checkPackageJson() {
    try {
      this.log('📋 Analyzing package.json...');
      
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const analysis = {
        dependencies: Object.keys(packageJson.dependencies || {}).length,
        devDependencies: Object.keys(packageJson.devDependencies || {}).length,
        peerDependencies: Object.keys(packageJson.peerDependencies || {}).length,
        optionalDependencies: Object.keys(packageJson.optionalDependencies || {}).length,
        scripts: Object.keys(packageJson.scripts || {}).length,
        engines: packageJson.engines || {},
        hasLockFile: fs.existsSync('package-lock.json') || fs.existsSync('yarn.lock') || fs.existsSync('pnpm-lock.yaml')
      };
      
      return {
        success: true,
        analysis
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        analysis: null
      };
    }
  }

  async checkNodeModules() {
    try {
      this.log('📁 Checking node_modules...');
      
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      
      if (!fs.existsSync(nodeModulesPath)) {
        return {
          success: false,
          error: 'node_modules not found',
          exists: false,
          size: 0,
          packages: 0
        };
      }
      
      const stats = fs.statSync(nodeModulesPath);
      const size = this.getDirectorySize(nodeModulesPath);
      const packages = fs.readdirSync(nodeModulesPath).length;
      
      return {
        success: true,
        exists: true,
        size: size,
        sizeMB: Math.round(size / (1024 * 1024) * 100) / 100,
        packages: packages,
        lastModified: stats.mtime
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        exists: false,
        size: 0,
        packages: 0
      };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      this.log(`Error calculating directory size for ${dirPath}: ${error.message}`);
    }
    
    return totalSize;
  }

  async checkSecurityIssues() {
    try {
      this.log('🛡️  Checking for security issues...');
      
      const auditResult = await this.checkNpmAudit();
      
      const securityIssues = {
        vulnerabilities: auditResult.metadata?.vulnerabilities || {},
        hasVulnerabilities: false,
        criticalCount: 0,
        highCount: 0,
        moderateCount: 0,
        lowCount: 0
      };
      
      if (auditResult.metadata?.vulnerabilities) {
        const vulns = auditResult.metadata.vulnerabilities;
        securityIssues.hasVulnerabilities = vulns.total > 0;
        securityIssues.criticalCount = vulns.critical || 0;
        securityIssues.highCount = vulns.high || 0;
        securityIssues.moderateCount = vulns.moderate || 0;
        securityIssues.lowCount = vulns.low || 0;
      }
      
      return {
        success: true,
        issues: securityIssues
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        issues: null
      };
    }
  }

  async generateReport(auditResult, outdatedResult, packageResult, nodeModulesResult, securityResult) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        dependencyHealth: 'unknown',
        securityStatus: 'unknown',
        updateStatus: 'unknown',
        overallHealth: 'unknown',
        healthScore: 0
      },
      details: {
        audit: auditResult,
        outdated: outdatedResult,
        packageJson: packageResult,
        nodeModules: nodeModulesResult,
        security: securityResult
      },
      recommendations: []
    };
    
    // Calculate health scores
    let totalScore = 0;
    let maxScore = 0;
    
    // Security health
    if (securityResult.success && securityResult.issues) {
      const issues = securityResult.issues;
      if (!issues.hasVulnerabilities) {
        report.summary.securityStatus = 'excellent';
        totalScore += 30;
      } else if (issues.criticalCount === 0 && issues.highCount === 0) {
        report.summary.securityStatus = 'good';
        totalScore += 20;
      } else if (issues.criticalCount === 0) {
        report.summary.securityStatus = 'fair';
        totalScore += 10;
      } else {
        report.summary.securityStatus = 'poor';
        totalScore += 0;
      }
    }
    maxScore += 30;
    
    // Update status
    if (outdatedResult.success) {
      const outdatedCount = Object.keys(outdatedResult.packages).length;
      if (outdatedCount === 0) {
        report.summary.updateStatus = 'excellent';
        totalScore += 25;
      } else if (outdatedCount < 5) {
        report.summary.updateStatus = 'good';
        totalScore += 20;
      } else if (outdatedCount < 15) {
        report.summary.updateStatus = 'fair';
        totalScore += 10;
      } else {
        report.summary.updateStatus = 'poor';
        totalScore += 5;
      }
    }
    maxScore += 25;
    
    // Package.json health
    if (packageResult.success && packageResult.analysis) {
      const analysis = packageResult.analysis;
      if (analysis.hasLockFile && analysis.dependencies > 0) {
        report.summary.dependencyHealth = 'excellent';
        totalScore += 25;
      } else if (analysis.dependencies > 0) {
        report.summary.dependencyHealth = 'good';
        totalScore += 20;
      } else {
        report.summary.dependencyHealth = 'fair';
        totalScore += 10;
      }
    }
    maxScore += 25;
    
    // Node modules health
    if (nodeModulesResult.success && nodeModulesResult.exists) {
      const sizeMB = nodeModulesResult.sizeMB || 0;
      if (sizeMB < 100) {
        totalScore += 20;
      } else if (sizeMB < 500) {
        totalScore += 15;
      } else if (sizeMB < 1000) {
        totalScore += 10;
      } else {
        totalScore += 5;
      }
    }
    maxScore += 20;
    
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100);
    
    // Determine overall health
    if (report.summary.healthScore >= 80) {
      report.summary.overallHealth = 'excellent';
    } else if (report.summary.healthScore >= 60) {
      report.summary.overallHealth = 'good';
    } else if (report.summary.healthScore >= 40) {
      report.summary.overallHealth = 'fair';
    } else {
      report.summary.overallHealth = 'poor';
    }
    
    // Generate recommendations
    if (securityResult.success && securityResult.issues?.hasVulnerabilities) {
      const issues = securityResult.issues;
      if (issues.criticalCount > 0) {
        report.recommendations.push({
          priority: 'critical',
          message: 'Critical vulnerabilities found',
          action: 'Run npm audit fix --force to fix critical vulnerabilities immediately'
        });
      } else if (issues.highCount > 0) {
        report.recommendations.push({
          priority: 'high',
          message: 'High severity vulnerabilities found',
          action: 'Run npm audit fix to fix high severity vulnerabilities'
        });
      } else {
        report.recommendations.push({
          priority: 'medium',
          message: 'Moderate/low vulnerabilities found',
          action: 'Run npm audit fix to address vulnerabilities'
        });
      }
    }
    
    if (outdatedResult.success) {
      const outdatedCount = Object.keys(outdatedResult.packages).length;
      if (outdatedCount > 10) {
        report.recommendations.push({
          priority: 'high',
          message: 'Many outdated packages',
          action: 'Update packages regularly to maintain security and compatibility'
        });
      } else if (outdatedCount > 0) {
        report.recommendations.push({
          priority: 'medium',
          message: 'Some packages are outdated',
          action: 'Consider updating outdated packages'
        });
      }
    }
    
    if (packageResult.success && !packageResult.analysis?.hasLockFile) {
      report.recommendations.push({
        priority: 'medium',
        message: 'No lock file found',
        action: 'Use npm install to generate package-lock.json for consistent installs'
      });
    }
    
    if (nodeModulesResult.success && nodeModulesResult.sizeMB > 500) {
      report.recommendations.push({
        priority: 'low',
        message: 'Large node_modules directory',
        action: 'Consider using .npmignore or cleaning up unused dependencies'
      });
    }
    
    return report;
  }

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('📦 Starting Dependency Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Run all dependency checks
      const auditResult = await this.checkNpmAudit();
      const outdatedResult = await this.checkOutdatedPackages();
      const packageResult = await this.checkPackageJson();
      const nodeModulesResult = await this.checkNodeModules();
      const securityResult = await this.checkSecurityIssues();
      
      // Generate report
      this.log('📊 Generating dependency report...');
      const report = await this.generateReport(auditResult, outdatedResult, packageResult, nodeModulesResult, securityResult);
      
      // Save report
      await this.saveReport(report);
      
      const duration = Date.now() - this.startTime;
      
      // Log summary
      this.log('\n📊 Dependency Monitor Summary:');
      this.log(`Dependency Health: ${report.summary.dependencyHealth}`);
      this.log(`Security Status: ${report.summary.securityStatus}`);
      this.log(`Update Status: ${report.summary.updateStatus}`);
      this.log(`Overall Health: ${report.summary.overallHealth}`);
      this.log(`Health Score: ${report.summary.healthScore}/100`);
      this.log(`Duration: ${duration}ms`);
      
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {
        this.log('\n✨ Dependencies are in excellent condition!');
      }
      
    } catch (error) {
      this.log(`❌ Error running dependency monitor: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the dependency monitor
const monitor = new DependencyMonitor();
monitor.run().catch(error => {
  process.exit(1);
});