#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedMonitoringSystem {
  constructor() {
    this.metrics = {
      performance: [],
      errors: [],
      warnings: []
    };
    
    // Set up error handling
    process.on('uncaughtException', (error) => {
      this.logError({
        type: 'uncaughtException',
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
    });

    process.on('unhandledRejection', (reason, promise) => {
      this.logError({
        type: 'unhandledRejection',
        message: reason.toString(),
        timestamp: new Date().toISOString()
      });
    });
  }

  logError(error) {
    this.metrics.errors.push({
      type: error.type,
      priority: 'high',
      message: error.message,
      timestamp: error.timestamp
    });
    
    console.error('Error collected:', error);
  }

  logWarning(warning) {
    this.metrics.warnings.push({
      type: warning.type,
      priority: 'medium',
      message: warning.message,
      timestamp: new Date().toISOString()
    });
  }

  generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        metrics: this.metrics,
        summary: {
          totalErrors: this.metrics.errors.length,
          totalWarnings: this.metrics.warnings.length,
          totalPerformance: this.metrics.performance.length
        }
      };

      const reportPath = path.join(process.cwd(), 'monitoring-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log('Monitoring report generated:', reportPath);
      return report;
    } catch (error) {
      console.error('Monitoring report generation failed:', error.message);
      return null;
    }
  }
}

// Run the monitoring system if this file is executed directly
if (require.main === module) {
  const monitor = new AdvancedMonitoringSystem();
  
  // Generate initial report
  monitor.generateReport();
  
  // Keep the process running for continuous monitoring
  setInterval(() => {
    monitor.generateReport();
  }, 60000); // Generate report every minute
}

module.exports = AdvancedMonitoringSystem;