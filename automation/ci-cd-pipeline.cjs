#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CICDPipeline {
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

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runTests() {
    this.log('🧪 Running Test Suite...');
    
    const testCommands = [
      {
        command: 'npm run test:smoke',
        description: 'Smoke Tests',
        timeout: 30000
      },
      {
        command: 'npm run type-check',
        description: 'TypeScript Type Check',
        timeout: 30000
      }
    ];
    
    const results = [];
    
    for (const cmd of testCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async runLinting() {
    this.log('🔍 Running Linting...');
    
    const lintCommands = [
      {
        command: 'npx eslint . --max-warnings 1000 --format json',
        description: 'ESLint Check',
        timeout: 60000
      },
      {
        command: 'npx prettier --check .',
        description: 'Prettier Check',
        timeout: 30000
      }
    ];
    
    const results = [];
    
    for (const cmd of lintCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async runBuild() {
    this.log('🏗️ Running Build...');
    
    const buildCommands = [
      {
        command: 'npm run build',
        description: 'Production Build',
        timeout: 120000
      }
    ];
    
    const results = [];
    
    for (const cmd of buildCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async runSecurityAudit() {
    this.log('🔒 Running Security Audit...');
    
    const securityCommands = [
      {
        command: 'npm audit --audit-level moderate',
        description: 'NPM Security Audit',
        timeout: 30000
      }
    ];
    
    const results = [];
    
    for (const cmd of securityCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      pipeline: 'CI/CD Pipeline',
      results: results,
      summary: {
        totalSteps: results.length,
        successfulSteps: results.filter(r => r.success).length,
        failedSteps: results.filter(r => !r.success).length,
        successRate: Math.round((results.filter(r => r.success).length / results.length) * 100)
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'ci-cd-pipeline-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 CI/CD Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting CI/CD Pipeline');
    
    const allResults = [];
    
    // Run all pipeline steps
    const testResults = await this.runTests();
    const lintResults = await this.runLinting();
    const buildResults = await this.runBuild();
    const securityResults = await this.runSecurityAudit();
    
    allResults.push(...testResults, ...lintResults, ...buildResults, ...securityResults);
    
    const report = await this.generateReport(allResults);
    
    this.log(`🎉 CI/CD Pipeline Complete!`);
    this.log(`📊 Success Rate: ${report.summary.successRate}%`);
    this.log(`✅ Successful: ${report.summary.successfulSteps}/${report.summary.totalSteps}`);
    this.log(`❌ Failed: ${report.summary.failedSteps}/${report.summary.totalSteps}`);
    
    return report;
  }
}

// Run the pipeline
const pipeline = new CICDPipeline();
pipeline.run().catch(console.error);