#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AppMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.monitoringData = [];
    this.logFile = path.join(this.projectRoot, 'app-monitor.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  checkFileSystem() {
    try {
      const stats = fs.statSync(this.projectRoot);
      return {
        status: 'healthy',
        message: 'File system accessible',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `File system error: ${error.message}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  checkDependencies() {
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        return {
          status: 'healthy',
          message: 'Dependencies available',
          timestamp: new Date().toISOString()
        };
      } else {
        return {
          status: 'unhealthy',
          message: 'package.json not found',
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `Dependency check error: ${error.message}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  checkBuild() {
    try {
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        return {
          status: 'healthy',
          message: 'Build directory exists',
          timestamp: new Date().toISOString()
        };
      } else {
        return {
          status: 'warning',
          message: 'Build directory not found - run npm run build',
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `Build check error: ${error.message}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  checkTests() {
    try {
      const testDir = path.join(this.projectRoot, '__tests__');
      if (fs.existsSync(testDir)) {
        return {
          status: 'healthy',
          message: 'Test directory exists',
          timestamp: new Date().toISOString()
        };
      } else {
        return {
          status: 'warning',
          message: 'No test directory found',
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `Test check error: ${error.message}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  monitorAppHealth() {
    this.log('🏥 Monitoring App Health');
    
    const healthChecks = {
      filesystem: this.checkFileSystem(),
      dependencies: this.checkDependencies(),
      build: this.checkBuild(),
      tests: this.checkTests()
    };

    this.monitoringData.push({
      timestamp: new Date().toISOString(),
      checks: healthChecks
    });

    // Log results
    Object.entries(healthChecks).forEach(([check, result]) => {
      this.log(`${check}: ${result.status} - ${result.message}`);
    });

    return healthChecks;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      monitoringData: this.monitoringData,
      summary: {
        totalChecks: this.monitoringData.length,
        lastCheck: this.monitoringData[this.monitoringData.length - 1]
      }
    };

    const reportPath = path.join(this.projectRoot, 'monitoring-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Monitoring report generated: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting App Monitor...');
    
    try {
      this.monitorAppHealth();
      this.generateReport();
      this.log('✅ App Monitor completed successfully!');
    } catch (error) {
      this.log(`❌ App Monitor failed: ${error.message}`);
    }
  }
}

// Run the monitor if this file is executed directly
if (require.main === module) {
  const monitor = new AppMonitor();
  monitor.run();
}

module.exports = AppMonitor;