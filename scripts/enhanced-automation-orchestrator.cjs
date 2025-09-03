#!/usr/bin/env node

/**
 * Enhanced Automation Orchestrator
 * Coordinates all automation tasks with improved error handling and reporting
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnhancedAutomationOrchestrator {
  constructor() {
    this.logDir = 'automation-reports';
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    this.results = {
      timestamp: this.timestamp,
      totalScripts: 0,
      successful: 0,
      failed: 0,
      warnings: 0,
      scripts: []
    };
    
    this.ensureLogDir();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `orchestrator-${this.timestamp}.log`);
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runScript(scriptName, scriptPath, description) {
    this.log(`Starting ${description}...`);
    this.results.totalScripts++;
    
    const scriptResult = {
      name: scriptName,
      description,
      startTime: new Date().toISOString(),
      status: 'running',
      output: '',
      error: '',
      duration: 0
    };

    try {
      const startTime = Date.now();
      
      if (scriptPath.endsWith('.cjs') || scriptPath.endsWith('.js')) {
        // Run Node.js script
        const output = execSync(`node "${scriptPath}"`, { 
          encoding: 'utf8',
          timeout: 300000 // 5 minutes timeout
        });
        scriptResult.output = output;
      } else if (scriptPath.endsWith('.sh')) {
        // Run shell script
        const output = execSync(`bash "${scriptPath}"`, { 
          encoding: 'utf8',
          timeout: 300000 // 5 minutes timeout
        });
        scriptResult.output = output;
      } else {
        throw new Error(`Unsupported script type: ${scriptPath}`);
      }

      const endTime = Date.now();
      scriptResult.duration = endTime - startTime;
      scriptResult.status = 'success';
      scriptResult.endTime = new Date().toISOString();
      
      this.results.successful++;
      this.log(`✅ ${description} completed successfully in ${scriptResult.duration}ms`);
      
    } catch (error) {
      const endTime = Date.now();
      scriptResult.duration = endTime - Date.now();
      scriptResult.status = 'failed';
      scriptResult.error = error.message;
      scriptResult.endTime = new Date().toISOString();
      
      this.results.failed++;
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
    }

    this.results.scripts.push(scriptResult);
    return scriptResult;
  }

  async runAutomationSuite() {
    this.log('🚀 Starting Enhanced Automation Suite');
    this.log('=====================================');

    const scripts = [
      {
        name: 'security-audit',
        path: 'scripts/security-audit.cjs',
        description: 'Security Audit'
      },
      {
        name: 'performance-monitor',
        path: 'scripts/performance-monitor.cjs',
        description: 'Performance Monitoring'
      },
      {
        name: 'code-quality-monitor',
        path: 'scripts/code-quality-monitor.cjs',
        description: 'Code Quality Analysis'
      },
      {
        name: 'dependency-updater',
        path: 'scripts/dependency-updater.cjs',
        description: 'Dependency Update Check'
      },
      {
        name: 'health-check',
        path: 'scripts/health-check.sh',
        description: 'System Health Check'
      }
    ];

    // Run scripts in parallel for better performance
    const scriptPromises = scripts.map(script => 
      this.runScript(script.name, script.path, script.description)
    );

    await Promise.allSettled(scriptPromises);

    // Generate comprehensive report
    this.generateReport();
    
    this.log('🏁 Enhanced Automation Suite completed');
    this.log(`📊 Results: ${this.results.successful} successful, ${this.results.failed} failed`);
    
    return this.results;
  }

  generateReport() {
    const reportPath = path.join(this.logDir, `enhanced-automation-report-${this.timestamp}.json`);
    
    const report = {
      ...this.results,
      summary: {
        successRate: this.results.totalScripts > 0 ? 
          (this.results.successful / this.results.totalScripts * 100).toFixed(2) + '%' : '0%',
        averageDuration: this.results.scripts.length > 0 ?
          this.results.scripts.reduce((sum, script) => sum + script.duration, 0) / this.results.scripts.length : 0,
        recommendations: this.generateRecommendations()
      }
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Comprehensive report saved to: ${reportPath}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.results.failed > 0) {
      recommendations.push('Review failed scripts and fix underlying issues');
    }
    
    if (this.results.successful === this.results.totalScripts) {
      recommendations.push('All automation scripts are working correctly');
    }
    
    const slowScripts = this.results.scripts.filter(script => script.duration > 60000);
    if (slowScripts.length > 0) {
      recommendations.push('Consider optimizing slow-running scripts');
    }
    
    return recommendations;
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new EnhancedAutomationOrchestrator();
  orchestrator.runAutomationSuite()
    .then(results => {
      process.exit(results.failed > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = EnhancedAutomationOrchestrator;