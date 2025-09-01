#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CriticalErrorAlertSystem {
  constructor() {
    this.workspacePath = process.cwd();
    this.logsPath = path.join(this.workspacePath, 'logs');
    this.reportsPath = path.join(this.workspacePath, 'automation-reports');
    this.ensureDirectories();
    this.alertHistory = new Map();
    this.criticalThresholds = {
      buildFailures: 3,
      typeErrors: 100,
      lintErrors: 50,
      dependencyIssues: 5
    };
  }

  ensureDirectories() {
    [this.logsPath, this.reportsPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsPath, 'critical-error-alert-system.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async checkCriticalErrors() {
    this.log('🚨 Checking for critical errors...');
    
    const criticalErrors = [];
    
    // Check build status
    const buildStatus = await this.checkBuildStatus();
    if (buildStatus.critical) {
      criticalErrors.push(buildStatus);
    }
    
    // Check TypeScript errors
    const tsStatus = await this.checkTypeScriptStatus();
    if (tsStatus.critical) {
      criticalErrors.push(tsStatus);
    }
    
    // Check ESLint errors
    const lintStatus = await this.checkLintStatus();
    if (lintStatus.critical) {
      criticalErrors.push(lintStatus);
    }
    
    // Check dependency issues
    const depStatus = await this.checkDependencyStatus();
    if (depStatus.critical) {
      criticalErrors.push(depStatus);
    }
    
    // Check system resources
    const resourceStatus = await this.checkSystemResources();
    if (resourceStatus.critical) {
      criticalErrors.push(resourceStatus);
    }
    
    this.log(`Found ${criticalErrors.length} critical error conditions`);
    return criticalErrors;
  }

  async checkBuildStatus() {
    try {
      this.log('🔍 Checking build status...');
      execSync('npm run build', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 300000
      });
      
      return {
        type: 'build',
        critical: false,
        message: 'Build successful',
        severity: 'low'
      };
    } catch (error) {
      const errorCount = this.countBuildErrors(error.stdout || '');
      
      return {
        type: 'build',
        critical: errorCount >= this.criticalThresholds.buildFailures,
        message: `Build failed with ${errorCount} errors`,
        severity: errorCount >= this.criticalThresholds.buildFailures ? 'critical' : 'high',
        errorCount
      };
    }
  }

  async checkTypeScriptStatus() {
    try {
      this.log('🔍 Checking TypeScript status...');
      execSync('npm run type-check', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 60000
      });
      
      return {
        type: 'typescript',
        critical: false,
        message: 'TypeScript check passed',
        severity: 'low'
      };
    } catch (error) {
      const errorCount = this.countTypeScriptErrors(error.stdout || '');
      
      return {
        type: 'typescript',
        critical: errorCount >= this.criticalThresholds.typeErrors,
        message: `TypeScript check failed with ${errorCount} errors`,
        severity: errorCount >= this.criticalThresholds.typeErrors ? 'critical' : 'high',
        errorCount
      };
    }
  }

  async checkLintStatus() {
    try {
      this.log('🔍 Checking ESLint status...');
      execSync('npm run lint', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 60000
      });
      
      return {
        type: 'lint',
        critical: false,
        message: 'ESLint check passed',
        severity: 'low'
      };
    } catch (error) {
      const errorCount = this.countLintErrors(error.stdout || '');
      
      return {
        type: 'lint',
        critical: errorCount >= this.criticalThresholds.lintErrors,
        message: `ESLint check failed with ${errorCount} errors`,
        severity: errorCount >= this.criticalThresholds.lintErrors ? 'critical' : 'high',
        errorCount
      };
    }
  }

  async checkDependencyStatus() {
    try {
      this.log('🔍 Checking dependency status...');
      execSync('npm ls', { 
        cwd: this.workspacePath, 
        stdio: 'pipe',
        timeout: 30000
      });
      
      return {
        type: 'dependencies',
        critical: false,
        message: 'Dependencies check passed',
        severity: 'low'
      };
    } catch (error) {
      const issueCount = this.countDependencyIssues(error.stdout || '');
      
      return {
        type: 'dependencies',
        critical: issueCount >= this.criticalThresholds.dependencyIssues,
        message: `Dependency check failed with ${issueCount} issues`,
        severity: issueCount >= this.criticalThresholds.dependencyIssues ? 'critical' : 'high',
        issueCount
      };
    }
  }

  async checkSystemResources() {
    try {
      this.log('🔍 Checking system resources...');
      
      // Check disk space
      const diskSpace = execSync('df -h .', { 
        cwd: this.workspacePath, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check memory
      const memory = execSync('free -h', { 
        cwd: this.workspacePath, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse disk space (simplified)
      const diskLines = diskSpace.split('\n');
      const usageLine = diskLines.find(line => line.includes('%'));
      if (usageLine) {
        const usage = parseInt(usageLine.match(/(\d+)%/)?.[1] || '0');
        if (usage > 90) {
          return {
            type: 'system',
            critical: true,
            message: `Disk usage critical: ${usage}%`,
            severity: 'critical',
            details: { diskUsage: usage }
          };
        }
      }
      
      return {
        type: 'system',
        critical: false,
        message: 'System resources OK',
        severity: 'low'
      };
    } catch (error) {
      return {
        type: 'system',
        critical: false,
        message: 'Could not check system resources',
        severity: 'medium',
        error: error.message
      };
    }
  }

  countBuildErrors(output) {
    const errorLines = output.split('\n').filter(line => 
      line.includes('error') || line.includes('Error') || line.includes('ERROR')
    );
    return errorLines.length;
  }

  countTypeScriptErrors(output) {
    const errorLines = output.split('\n').filter(line => 
      line.includes('error TS') || line.includes('warning TS')
    );
    return errorLines.length;
  }

  countLintErrors(output) {
    const errorLines = output.split('\n').filter(line => 
      line.includes('error') || line.includes('warning')
    );
    return errorLines.length;
  }

  countDependencyIssues(output) {
    const issueLines = output.split('\n').filter(line => 
      line.includes('UNMET PEER DEPENDENCY') || line.includes('npm ERR!') || line.includes('conflicts')
    );
    return issueLines.length;
  }

  async sendAlert(error) {
    this.log(`🚨 SENDING CRITICAL ALERT: ${error.type.toUpperCase()} - ${error.message}`, 'CRITICAL');
    
    // Create alert file
    const alertFile = path.join(this.reportsPath, `critical-alert-${Date.now()}.json`);
    const alertData = {
      timestamp: new Date().toISOString(),
      type: error.type,
      message: error.message,
      severity: error.severity,
      details: error,
      actionRequired: true
    };
    
    fs.writeFileSync(alertFile, JSON.stringify(alertData, null, 2));
    
    // Log to console with high visibility
    console.error('\n' + '='.repeat(80));
    console.error('🚨 CRITICAL ERROR ALERT 🚨');
    console.error('='.repeat(80));
    console.error(`Type: ${error.type.toUpperCase()}`);
    console.error(`Message: ${error.message}`);
    console.error(`Severity: ${error.severity.toUpperCase()}`);
    console.error(`Timestamp: ${new Date().toISOString()}`);
    console.error('='.repeat(80));
    console.error('IMMEDIATE ACTION REQUIRED!');
    console.error('='.repeat(80) + '\n');
    
    // Store in alert history
    this.alertHistory.set(`${error.type}-${Date.now()}`, alertData);
    
    return alertData;
  }

  async generateReport(criticalErrors) {
    this.log('📊 Generating critical error alert report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalCriticalErrors: criticalErrors.length,
        criticalTypes: criticalErrors.map(e => e.type),
        highestSeverity: criticalErrors.length > 0 ? 
          Math.max(...criticalErrors.map(e => e.severity === 'critical' ? 3 : e.severity === 'high' ? 2 : 1)) : 0
      },
      criticalErrors: criticalErrors,
      alertHistory: Array.from(this.alertHistory.values()),
      recommendations: [
        'Address critical errors immediately',
        'Review error patterns and implement preventive measures',
        'Consider rolling back to last stable version',
        'Implement automated error recovery systems'
      ]
    };

    const reportFile = path.join(this.reportsPath, 'critical-error-alert-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report generated: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Critical Error Alert System...');
    
    try {
      // Check for critical errors
      const criticalErrors = await this.checkCriticalErrors();
      
      if (criticalErrors.length === 0) {
        this.log('✅ No critical errors detected');
        return { success: true, criticalErrors: [], alerts: [] };
      }
      
      // Send alerts for critical errors
      const alerts = [];
      for (const error of criticalErrors) {
        if (error.critical) {
          const alert = await this.sendAlert(error);
          alerts.push(alert);
        }
      }
      
      // Generate report
      const report = await this.generateReport(criticalErrors);
      
      this.log('🎉 Critical Error Alert System completed!');
      this.log(`📊 Detected ${criticalErrors.length} critical error conditions`);
      this.log(`🚨 Sent ${alerts.length} critical alerts`);
      
      return {
        success: alerts.length === 0,
        criticalErrors: criticalErrors,
        alerts: alerts,
        report
      };
      
    } catch (error) {
      this.log(`💥 Critical Error Alert System failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const alertSystem = new CriticalErrorAlertSystem();
  alertSystem.run().catch(console.error);
}

module.exports = CriticalErrorAlertSystem;