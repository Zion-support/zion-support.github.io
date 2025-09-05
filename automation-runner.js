#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation-runner.log');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const colors = {
      'INFO': '\x1b[36m',
      'SUCCESS': '\x1b[32m',
      'ERROR': '\x1b[31m',
      'WARNING': '\x1b[33m',
      'PROGRESS': '\x1b[35m'
    };
    
    const reset = '\x1b[0m';
    const color = colors[type] || colors['INFO'];
    const logMessage = `${color}[${timestamp}] [${type}] ${message}${reset}`;
    
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`, 'PROGRESS');
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async measureBundleSize() {
    try {
      this.log('Measuring bundle size...', 'PROGRESS');
      
      // Run build to generate bundle
      const buildResult = await this.runCommand('npm run build', 'Build');
      if (!buildResult.success) {
        throw new Error('Build failed');
      }
      
      // Check if .next directory exists
      const nextDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(nextDir)) {
        throw new Error('.next directory not found');
      }
      
      // Get directory size
      const { execSync } = require('child_process');
      const sizeResult = execSync(`du -sh ${nextDir}`, { encoding: 'utf8' });
      
      this.log(`Bundle size: ${sizeResult.trim()}`, 'SUCCESS');
      return { success: true, size: sizeResult.trim() };
    } catch (error) {
      this.log(`Error measuring bundle size: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runLinting() {
    return await this.runCommand('npm run lint', 'Linting');
  }

  async runTypeChecking() {
    return await this.runCommand('npm run type-check', 'Type Checking');
  }

  async runTests() {
    return await this.runCommand('npm test', 'Testing');
  }

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      results: results,
      summary: {
        totalTasks: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length
      }
    };

    const reportPath = path.join(this.projectRoot, 'automation-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Automation report generated: ${reportPath}`, 'SUCCESS');
  }

  async run() {
    this.log('🚀 Starting Automation Runner...', 'INFO');
    
    try {
      const results = [];
      
      // Run all automation tasks
      results.push(await this.runLinting());
      results.push(await this.runTypeChecking());
      results.push(await this.runTests());
      results.push(await this.measureBundleSize());
      
      this.generateReport(results);
      
      const successCount = results.filter(r => r.success).length;
      if (successCount === results.length) {
        this.log('✅ Automation Runner completed successfully!', 'SUCCESS');
      } else {
        this.log(`⚠️ Automation Runner completed with ${results.length - successCount} failures`, 'WARNING');
      }
    } catch (error) {
      this.log(`❌ Automation Runner failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the automation runner if this file is executed directly
if (require.main === module) {
  const runner = new AutomationRunner();
  runner.run();
}

module.exports = AutomationRunner;