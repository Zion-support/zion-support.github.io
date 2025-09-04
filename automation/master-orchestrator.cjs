#!/usr/bin/env node

/**
 * Master Automation Orchestrator
 * Coordinates all automation processes
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/master-orchestrator.log');
    this.startTime = new Date();
    this.results = {};
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runHealthCheck() {
    this.log('Running health check...');
    try {
      const HealthChecker = require('./health-check.cjs');
      const healthChecker = new HealthChecker();
      const result = await healthChecker.runAllChecks();
      this.results.healthCheck = { success: result, timestamp: new Date().toISOString() };
      return result;
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
      this.results.healthCheck = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runSecurityScan() {
    this.log('Running security scan...');
    try {
      // Security scanner runs as a standalone script
      const { execSync } = require('child_process');
      execSync('node automation/security-scanner.cjs', { stdio: 'pipe' });
      this.results.securityScan = { success: true, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
      this.results.securityScan = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runPerformanceMonitor() {
    this.log('Running performance monitor...');
    try {
      const PerformanceMonitor = require('../scripts/performance-monitor.cjs');
      const monitor = new PerformanceMonitor();
      const result = await monitor.runPerformanceCheck();
      this.results.performanceMonitor = { success: result, timestamp: new Date().toISOString() };
      return result;
    } catch (error) {
      this.log(`Performance monitor failed: ${error.message}`, 'ERROR');
      this.results.performanceMonitor = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runErrorPrevention() {
    this.log('Running error prevention...');
    try {
      const { execSync } = require('child_process');
      execSync('node automation/error-prevention-system.cjs', { stdio: 'pipe' });
      this.results.errorPrevention = { success: true, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Error prevention failed: ${error.message}`, 'ERROR');
      this.results.errorPrevention = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runDependencyManager() {
    this.log('Running dependency manager...');
    try {
      const { execSync } = require('child_process');
      execSync('node automation/dependency-manager.cjs', { stdio: 'pipe' });
      this.results.dependencyManager = { success: true, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Dependency manager failed: ${error.message}`, 'ERROR');
      this.results.dependencyManager = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runCodeQualityMonitor() {
    this.log('Running code quality monitor...');
    try {
      const { execSync } = require('child_process');
      execSync('node automation/code-quality-monitor.cjs', { stdio: 'pipe' });
      this.results.codeQualityMonitor = { success: true, timestamp: new Date().toISOString() };
      return true;
    } catch (error) {
      this.log(`Code quality monitor failed: ${error.message}`, 'ERROR');
      this.results.codeQualityMonitor = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runBuildCheck() {
    this.log('Running build check...');
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.results.buildCheck = { success: true, timestamp: new Date().toISOString() };
      this.log('Build check passed');
      return true;
    } catch (error) {
      this.log(`Build check failed: ${error.message}`, 'ERROR');
      this.results.buildCheck = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runLintingCheck() {
    this.log('Running linting check...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.results.lintingCheck = { success: true, timestamp: new Date().toISOString() };
      this.log('Linting check passed');
      return true;
    } catch (error) {
      this.log(`Linting check failed: ${error.message}`, 'ERROR');
      this.results.lintingCheck = { success: false, error: error.message, timestamp: new Date().toISOString() };
      
      // Try to auto-fix
      try {
        this.log('Attempting to auto-fix linting issues...');
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.log('Linting auto-fix completed');
        this.results.lintingCheck.autoFixed = true;
        return true;
      } catch (fixError) {
        this.log(`Auto-fix failed: ${fixError.message}`, 'ERROR');
        return false;
      }
    }
  }

  async runTypeCheck() {
    this.log('Running type check...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.results.typeCheck = { success: true, timestamp: new Date().toISOString() };
      this.log('Type check passed');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`, 'ERROR');
      this.results.typeCheck = { success: false, error: error.message, timestamp: new Date().toISOString() };
      return false;
    }
  }

  async runAllChecks() {
    this.log('Starting comprehensive system check...');
    
    const checks = [
      this.runHealthCheck(),
      this.runSecurityScan(),
      this.runPerformanceMonitor(),
      this.runErrorPrevention(),
      this.runDependencyManager(),
      this.runCodeQualityMonitor(),
      this.runBuildCheck(),
      this.runLintingCheck(),
      this.runTypeCheck()
    ];

    const results = await Promise.all(checks);
    const passed = results.filter(r => r).length;
    const total = results.length;

    const endTime = new Date();
    const duration = endTime - this.startTime;

    this.log(`Comprehensive system check completed: ${passed}/${total} checks passed in ${duration}ms`);
    
    // Generate summary
    const summary = {
      timestamp: endTime.toISOString(),
      duration: duration,
      totalChecks: total,
      passedChecks: passed,
      failedChecks: total - passed,
      successRate: ((passed / total) * 100).toFixed(1),
      results: this.results,
      status: passed === total ? 'HEALTHY' : passed >= total * 0.8 ? 'WARNING' : 'CRITICAL'
    };

    // Log summary
    this.log(`System Status: ${summary.status}`);
    this.log(`Success Rate: ${summary.successRate}%`);
    
    if (summary.failedChecks > 0) {
      this.log(`Failed checks: ${summary.failedChecks}`, 'WARN');
      Object.entries(this.results).forEach(([check, result]) => {
        if (!result.success) {
          this.log(`  - ${check}: ${result.error || 'Failed'}`, 'ERROR');
        }
      });
    }

    // Write comprehensive report
    try {
      fs.writeFileSync(
        path.join(__dirname, '../logs/master-orchestrator-report.json'),
        JSON.stringify(summary, null, 2)
      );
    } catch (error) {
      this.log(`ERROR: Failed to write master report: ${error.message}`, 'ERROR');
    }

    return passed === total;
  }

  async startPM2Services() {
    this.log('Starting PM2 services...');
    
    try {
      // Ensure logs directory exists
      execSync('mkdir -p logs', { stdio: 'pipe' });
      
      // Start enhanced PM2 configuration
      execSync('pm2 start ecosystem.enhanced.config.cjs --update-env', { stdio: 'pipe' });
      this.log('PM2 services started successfully');
      
      // Show status
      const status = execSync('pm2 status', { stdio: 'pipe', encoding: 'utf8' });
      this.log('PM2 Status:');
      console.log(status);
      
      return true;
    } catch (error) {
      this.log(`ERROR: Failed to start PM2 services: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async stopPM2Services() {
    this.log('Stopping PM2 services...');
    
    try {
      execSync('pm2 stop ecosystem.enhanced.config.cjs', { stdio: 'pipe' });
      this.log('PM2 services stopped successfully');
      return true;
    } catch (error) {
      this.log(`ERROR: Failed to stop PM2 services: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async restartPM2Services() {
    this.log('Restarting PM2 services...');
    
    try {
      execSync('pm2 restart ecosystem.enhanced.config.cjs', { stdio: 'pipe' });
      this.log('PM2 services restarted successfully');
      return true;
    } catch (error) {
      this.log(`ERROR: Failed to restart PM2 services: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Command line interface
if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  const command = process.argv[2] || 'check';
  
  switch (command) {
    case 'check':
      orchestrator.runAllChecks()
        .then(success => {
          process.exit(success ? 0 : 1);
        })
        .catch(error => {
          console.error('Master orchestrator failed:', error);
          process.exit(1);
        });
      break;
      
    case 'start':
      orchestrator.startPM2Services()
        .then(success => {
          process.exit(success ? 0 : 1);
        })
        .catch(error => {
          console.error('Failed to start PM2 services:', error);
          process.exit(1);
        });
      break;
      
    case 'stop':
      orchestrator.stopPM2Services()
        .then(success => {
          process.exit(success ? 0 : 1);
        })
        .catch(error => {
          console.error('Failed to stop PM2 services:', error);
          process.exit(1);
        });
      break;
      
    case 'restart':
      orchestrator.restartPM2Services()
        .then(success => {
          process.exit(success ? 0 : 1);
        })
        .catch(error => {
          console.error('Failed to restart PM2 services:', error);
          process.exit(1);
        });
      break;
      
    default:
      console.log('Usage: node master-orchestrator.cjs [check|start|stop|restart]');
      process.exit(1);
  }
}

module.exports = MasterOrchestrator;