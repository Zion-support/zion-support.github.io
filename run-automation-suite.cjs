#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationSuiteRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'automation-suite.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000, // 5 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAutomationScripts() {
    this.log('🎯 Starting Automation Suite Execution');

    const scripts = [
      {
        command: 'npm run lint:fix',
        description: 'ESLint Fix'
      },
      {
        command: 'npm run type-check',
        description: 'TypeScript Type Check'
      },
      {
        command: 'npm run test',
        description: 'Test Suite'
      },
      {
        command: 'npm run build',
        description: 'Build Application'
      }
    ];

    const results = [];

    for (const script of scripts) {
      const result = await this.runCommand(script.command, script.description);
      results.push({ ...script, ...result });
    }

    return results;
  }

  async runCustomAutomations() {
    this.log('🔧 Running Custom Automation Scripts');

    const customScripts = [
      {
        name: 'Error Detection',
        script: () => this.detectErrors(),
      },
      {
        name: 'Performance Analysis',
        script: () => this.analyzePerformance(),
      },
      {
        name: 'Security Audit',
        script: () => this.auditSecurity(),
      },
      {
        name: 'Code Quality Check',
        script: () => this.checkCodeQuality(),
      },
    ];

    const results = [];

    for (const customScript of customScripts) {
      this.log(`🔧 Running: ${customScript.name}`);
      try {
        const result = await customScript.script();
        results.push({ name: customScript.name, success: true, result });
        this.log(`✅ Completed: ${customScript.name}`);
      } catch (error) {
        results.push({ name: customScript.name, success: false, error: error.message });
        this.log(`❌ Failed: ${customScript.name} - ${error.message}`);
      }
    }

    return results;
  }

  async detectErrors() {
    this.log('🔍 Detecting errors in codebase...');
    
    // Check for TypeScript errors
    try {
      const tsResult = execSync('npx tsc --noEmit', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 60000 
      });
      this.log('✅ No TypeScript errors found');
    } catch (error) {
      this.log(`❌ TypeScript errors found: ${error.message}`);
      return { typescript: { errors: error.message } };
    }

    // Check for ESLint errors
    try {
      const lintResult = execSync('npm run lint', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 60000 
      });
      this.log('✅ No ESLint errors found');
    } catch (error) {
      this.log(`❌ ESLint errors found: ${error.message}`);
      return { eslint: { errors: error.message } };
    }

    return { status: 'clean' };
  }

  async analyzePerformance() {
    this.log('📊 Analyzing performance...');
    
    try {
      // Run build and measure time
      const startTime = Date.now();
      await this.runCommand('npm run build', 'Performance Build Test');
      const buildTime = Date.now() - startTime;
      
      this.log(`⏱️ Build completed in ${buildTime}ms`);
      
      return {
        buildTime,
        status: buildTime < 120000 ? 'good' : 'needs_optimization'
      };
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async auditSecurity() {
    this.log('🔒 Running security audit...');
    
    try {
      const auditResult = execSync('npm audit --audit-level=moderate', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      this.log('✅ Security audit completed');
      return { status: 'clean', output: auditResult };
    } catch (error) {
      this.log(`⚠️ Security issues found: ${error.message}`);
      return { status: 'issues_found', output: error.message };
    }
  }

  async checkCodeQuality() {
    this.log('📋 Checking code quality...');
    
    const qualityChecks = [];
    
    // Check for console.log statements
    try {
      const consoleResult = execSync('grep -r "console\\.log" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      if (consoleResult.trim()) {
        qualityChecks.push({ type: 'console_logs', count: consoleResult.split('\n').length - 1 });
        this.log(`⚠️ Found console.log statements: ${consoleResult.split('\n').length - 1}`);
      } else {
        this.log('✅ No console.log statements found');
      }
    } catch (error) {
      this.log(`❌ Console log check failed: ${error.message}`);
    }

    // Check for TODO comments
    try {
      const todoResult = execSync('grep -r "TODO\\|FIXME" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      if (todoResult.trim()) {
        qualityChecks.push({ type: 'todos', count: todoResult.split('\n').length - 1 });
        this.log(`📝 Found TODO/FIXME comments: ${todoResult.split('\n').length - 1}`);
      } else {
        this.log('✅ No TODO/FIXME comments found');
      }
    } catch (error) {
      this.log(`❌ TODO check failed: ${error.message}`);
    }

    return { qualityChecks, status: qualityChecks.length === 0 ? 'excellent' : 'good' };
  }

  async generateReport(results) {
    this.log('📄 Generating automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalScripts: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length
      },
      results: results,
      recommendations: this.generateRecommendations(results)
    };

    const reportFile = path.join(this.reportsDir, `automation-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report generated: ${reportFile}`);
    return report;
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    const failedScripts = results.filter(r => !r.success);
    if (failedScripts.length > 0) {
      recommendations.push({
        type: 'error',
        message: `Fix ${failedScripts.length} failed automation scripts`,
        scripts: failedScripts.map(s => s.description || s.name)
      });
    }

    const buildResult = results.find(r => r.description === 'Build Application');
    if (buildResult && buildResult.success) {
      recommendations.push({
        type: 'success',
        message: 'Build process is working correctly'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Automation Suite');
    
    try {
      // Run standard automation scripts
      const scriptResults = await this.runAutomationScripts();
      
      // Run custom automations
      const customResults = await this.runCustomAutomations();
      
      // Combine results
      const allResults = [...scriptResults, ...customResults];
      
      // Generate report
      const report = await this.generateReport(allResults);
      
      this.log('🎉 Automation Suite Completed');
      this.log(`📊 Summary: ${report.summary.successful}/${report.summary.totalScripts} successful`);
      
      return report;
    } catch (error) {
      this.log(`💥 Automation Suite Failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation suite if this file is executed directly
if (require.main === module) {
  const runner = new AutomationSuiteRunner();
  runner.run()
    .then((report) => {
      console.log('\n🎉 Automation Suite completed successfully!');
      console.log(`📊 Report: ${report.summary.successful}/${report.summary.totalScripts} tasks completed`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Automation Suite failed:', error.message);
      process.exit(1);
    });
}

module.exports = AutomationSuiteRunner;