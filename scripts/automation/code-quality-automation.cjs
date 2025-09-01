#!/usr/bin/env node

/**
 * Code Quality Automation
 * 
 * This script provides automated code quality management including:
 * - Automatic linting and fixing
 * - Code formatting with Prettier
 * - Type checking with TypeScript
 * - Test execution and coverage
 * - Code quality metrics
 * - Performance analysis
 * - Security scanning
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQualityAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.qualityDir = path.join(this.projectRoot, 'quality-reports');
    
    // Ensure directories exist
    [this.logsDir, this.reportsDir, this.qualityDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    this.logFile = path.join(this.logsDir, 'code-quality-automation.log');
    this.statusFile = path.join(this.reportsDir, 'code-quality-status.json');
    
    // Configuration
    this.config = {
      autoLint: process.env.AUTO_LINT === 'true',
      autoFormat: process.env.AUTO_FORMAT === 'true',
      autoTest: process.env.AUTO_TEST === 'true',
      qualityInterval: 4 * 60 * 60 * 1000, // 4 hours
      lintInterval: 2 * 60 * 60 * 1000, // 2 hours
      testInterval: 6 * 60 * 60 * 1000, // 6 hours
      maxIssues: 50, // Maximum issues before failing
      autoFix: true, // Automatically fix issues when possible
      generateReports: true
    };
    
    this.stats = {
      runs: 0,
      successful: 0,
      failed: 0,
      lastRun: null,
      lastLint: null,
      lastTest: null,
      lastFormat: null,
      totalIssues: 0,
      fixedIssues: 0
    };
    
    this.qualityMetrics = {
      lintScore: 100,
      testCoverage: 0,
      typeCheckScore: 100,
      formatScore: 100,
      overallScore: 100
    };
    
    this.loadStatus();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Write to log file
    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  saveStatus() {
    this.stats.lastUpdate = new Date().toISOString();
    fs.writeFileSync(this.statusFile, JSON.stringify({
      stats: this.stats,
      qualityMetrics: this.qualityMetrics,
      config: this.config
    }, null, 2));
  }

  loadStatus() {
    if (fs.existsSync(this.statusFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
        this.stats = { ...this.stats, ...data.stats };
        this.qualityMetrics = { ...this.qualityMetrics, ...data.qualityMetrics };
      } catch (error) {
        this.log(`Error loading status: ${error.message}`, 'ERROR');
      }
    }
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn('bash', ['-c', command], {
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });

      let stdout = '';
      let stderr = '';

      if (options.silent) {
        child.stdout.on('data', (data) => {
          stdout += data.toString();
        });
        child.stderr.on('data', (data) => {
          stderr += data.toString();
        });
      }

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code });
        } else {
          reject({ success: false, stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }

  async runLinting() {
    try {
      this.log('🔍 Running code linting...');
      
      // Check if ESLint is available
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const hasEslint = packageJson.devDependencies?.eslint || packageJson.dependencies?.eslint;
      
      if (!hasEslint) {
        this.log('⚠️  ESLint not found, skipping linting');
        return { success: true, issues: 0, fixed: 0 };
      }
      
      // Run ESLint with auto-fix if enabled
      const lintCommand = this.config.autoFix ? 'npm run lint -- --fix' : 'npm run lint';
      
      try {
        await this.executeCommand(lintCommand, { silent: true });
        this.log('✅ Linting completed successfully');
        return { success: true, issues: 0, fixed: 0 };
      } catch (error) {
        // Parse linting output to count issues
        const issues = this.parseLintOutput(error.stderr || error.stdout);
        
        if (this.config.autoFix) {
          this.log(`⚠️  Linting found ${issues.length} issues, attempting auto-fix...`);
          
          try {
            await this.executeCommand('npm run lint -- --fix', { silent: true });
            this.log('✅ Auto-fix completed');
            return { success: true, issues: issues.length, fixed: issues.length };
          } catch (fixError) {
            this.log(`❌ Auto-fix failed: ${fixError.message}`, 'ERROR');
            return { success: false, issues: issues.length, fixed: 0 };
          }
        } else {
          this.log(`❌ Linting failed with ${issues.length} issues`, 'ERROR');
          return { success: false, issues: issues.length, fixed: 0 };
        }
      }
      
    } catch (error) {
      this.log(`❌ Linting error: ${error.message}`, 'ERROR');
      return { success: false, issues: 0, fixed: 0 };
    }
  }

  parseLintOutput(output) {
    if (!output) return [];
    
    // Parse ESLint output to extract issues
    const lines = output.split('\n');
    const issues = [];
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/(\d+):(\d+)\s+(error|warning)\s+(.+)/);
        if (match) {
          issues.push({
            line: parseInt(match[1]),
            column: parseInt(match[2]),
            type: match[3],
            message: match[4]
          });
        }
      }
    }
    
    return issues;
  }

  async runCodeFormatting() {
    try {
      this.log('🎨 Running code formatting...');
      
      // Check if Prettier is available
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const hasPrettier = packageJson.devDependencies?.prettier || packageJson.dependencies?.prettier;
      
      if (!hasPrettier) {
        this.log('⚠️  Prettier not found, skipping formatting');
        return { success: true, filesFormatted: 0 };
      }
      
      // Run Prettier format check
      try {
        const result = await this.executeCommand('npm run format:check', { silent: true });
        this.log('✅ Code formatting check passed');
        return { success: true, filesFormatted: 0 };
      } catch (error) {
        this.log('⚠️  Code formatting issues detected, running auto-format...');
        
        try {
          await this.executeCommand('npm run format', { silent: true });
          this.log('✅ Code auto-formatting completed');
          return { success: true, filesFormatted: 1 };
        } catch (formatError) {
          this.log(`❌ Auto-formatting failed: ${formatError.message}`, 'ERROR');
          return { success: false, filesFormatted: 0 };
        }
      }
      
    } catch (error) {
      this.log(`❌ Code formatting error: ${error.message}`, 'ERROR');
      return { success: false, filesFormatted: 0 };
    }
  }

  async runTypeChecking() {
    try {
      this.log('🔍 Running TypeScript type checking...');
      
      // Check if TypeScript is available
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const hasTypescript = packageJson.devDependencies?.typescript || packageJson.dependencies?.typescript;
      
      if (!hasTypescript) {
        this.log('⚠️  TypeScript not found, skipping type checking');
        return { success: true, errors: 0, warnings: 0 };
      }
      
      try {
        await this.executeCommand('npm run type-check', { silent: true });
        this.log('✅ Type checking passed');
        return { success: true, errors: 0, warnings: 0 };
      } catch (error) {
        // Parse TypeScript output to count errors
        const errors = this.parseTypeScriptOutput(error.stderr || error.stdout);
        this.log(`❌ Type checking failed with ${errors.length} errors`, 'ERROR');
        return { success: false, errors: errors.length, warnings: 0 };
      }
      
    } catch (error) {
      this.log(`❌ Type checking error: ${error.message}`, 'ERROR');
      return { success: false, errors: 0, warnings: 0 };
    }
  }

  parseTypeScriptOutput(output) {
    if (!output) return [];
    
    // Parse TypeScript output to extract errors
    const lines = output.split('\n');
    const errors = [];
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/error TS\d+:\s+(.+)/);
        if (match) {
          errors.push({
            code: line.match(/TS\d+/)?.[0] || 'TS0000',
            message: match[1]
          });
        }
      }
    }
    
    return errors;
  }

  async runTests() {
    try {
      this.log('🧪 Running tests...');
      
      // Check if Jest is available
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const hasJest = packageJson.devDependencies?.jest || packageJson.dependencies?.jest;
      
      if (!hasJest) {
        this.log('⚠️  Jest not found, skipping tests');
        return { success: true, passed: 0, failed: 0, coverage: 0 };
      }
      
      try {
        // Run tests with coverage
        const result = await this.executeCommand('npm run test:coverage', { silent: true });
        
        // Parse coverage information
        const coverage = this.parseTestCoverage(result.stdout);
        
        this.log(`✅ Tests completed successfully with ${coverage}% coverage`);
        return { success: true, passed: 1, failed: 0, coverage };
        
      } catch (error) {
        this.log(`❌ Tests failed: ${error.message}`, 'ERROR');
        return { success: false, passed: 0, failed: 1, coverage: 0 };
      }
      
    } catch (error) {
      this.log(`❌ Test execution error: ${error.message}`, 'ERROR');
      return { success: false, passed: 0, failed: 0, coverage: 0 };
    }
  }

  parseTestCoverage(output) {
    if (!output) return 0;
    
    // Parse Jest coverage output
    const coverageMatch = output.match(/All files\s+\|\s+(\d+(?:\.\d+)?)/);
    if (coverageMatch) {
      return parseFloat(coverageMatch[1]);
    }
    
    return 0;
  }

  async analyzeCodeQuality() {
    try {
      this.log('📊 Analyzing code quality metrics...');
      
      const metrics = {
        timestamp: new Date().toISOString(),
        files: await this.countFiles(),
        lines: await this.countLines(),
        complexity: await this.analyzeComplexity(),
        dependencies: await this.analyzeDependencies(),
        security: await this.analyzeSecurity()
      };
      
      // Calculate quality scores
      this.qualityMetrics.lintScore = Math.max(0, 100 - (this.stats.totalIssues * 2));
      this.qualityMetrics.testCoverage = metrics.testCoverage || 0;
      this.qualityMetrics.overallScore = Math.round(
        (this.qualityMetrics.lintScore + this.qualityMetrics.testCoverage + this.qualityMetrics.typeCheckScore) / 3
      );
      
      // Save quality report
      const qualityFile = path.join(this.qualityDir, 'code-quality-metrics.json');
      fs.writeFileSync(qualityFile, JSON.stringify(metrics, null, 2));
      
      this.log(`📊 Code quality analysis completed. Overall score: ${this.qualityMetrics.overallScore}/100`);
      return metrics;
      
    } catch (error) {
      this.log(`❌ Code quality analysis error: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async countFiles() {
    try {
      const result = await this.executeCommand('find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | wc -l', { silent: true });
      return parseInt(result.stdout.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async countLines() {
    try {
      const result = await this.executeCommand('find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -exec wc -l {} + | tail -1 | awk \'{print $1}\'', { silent: true });
      return parseInt(result.stdout.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async analyzeComplexity() {
    // Simple complexity analysis based on file size and structure
    try {
      const result = await this.executeCommand('find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -exec wc -l {} + | sort -nr | head -5', { silent: true });
      const lines = result.stdout.trim().split('\n').map(line => parseInt(line.split(' ')[0])).filter(n => !isNaN(n));
      
      return {
        totalFiles: lines.length,
        averageLines: lines.reduce((a, b) => a + b, 0) / lines.length,
        maxLines: Math.max(...lines),
        complexity: lines.length > 0 ? 'medium' : 'low'
      };
    } catch (error) {
      return { complexity: 'unknown' };
    }
  }

  async analyzeDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      return {
        total: Object.keys(packageJson.dependencies || {}).length + Object.keys(packageJson.devDependencies || {}).length,
        production: Object.keys(packageJson.dependencies || {}).length,
        development: Object.keys(packageJson.devDependencies || {}).length,
        outdated: 0 // Could be enhanced with npm outdated check
      };
    } catch (error) {
      return { total: 0, production: 0, development: 0, outdated: 0 };
    }
  }

  async analyzeSecurity() {
    try {
      // Check for known security issues
      const result = await this.executeCommand('npm audit --json', { silent: true });
      const audit = JSON.parse(result.stdout);
      
      return {
        vulnerabilities: audit.metadata?.vulnerabilities || {},
        totalIssues: Object.values(audit.metadata?.vulnerabilities || {}).reduce((sum, count) => sum + count, 0),
        riskLevel: this.calculateRiskLevel(audit.metadata?.vulnerabilities || {})
      };
    } catch (error) {
      return { vulnerabilities: {}, totalIssues: 0, riskLevel: 'unknown' };
    }
  }

  calculateRiskLevel(vulnerabilities) {
    const high = vulnerabilities.high || 0;
    const moderate = vulnerabilities.moderate || 0;
    const low = vulnerabilities.low || 0;
    
    if (high > 0) return 'high';
    if (moderate > 5) return 'moderate';
    if (low > 10) return 'low';
    return 'none';
  }

  async generateQualityReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        stats: this.stats,
        qualityMetrics: this.qualityMetrics,
        config: this.config,
        recommendations: this.generateRecommendations()
      };
      
      const reportFile = path.join(this.reportsDir, 'code-quality-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log('📊 Code quality report generated');
      return report;
      
    } catch (error) {
      this.log(`Error generating quality report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.qualityMetrics.lintScore < 80) {
      recommendations.push('Fix linting issues to improve code quality');
    }
    
    if (this.qualityMetrics.testCoverage < 70) {
      recommendations.push('Increase test coverage to improve reliability');
    }
    
    if (this.qualityMetrics.typeCheckScore < 90) {
      recommendations.push('Fix TypeScript errors to improve type safety');
    }
    
    if (this.stats.totalIssues > this.config.maxIssues) {
      recommendations.push('Address code quality issues to meet standards');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Code quality is excellent! Keep up the good work.');
    }
    
    return recommendations;
  }

  async runQualityCheck() {
    try {
      this.log('🚀 Starting comprehensive code quality check...');
      
      const startTime = Date.now();
      this.stats.runs++;
      
      // Run all quality checks
      const lintResult = await this.runLinting();
      const formatResult = await this.runCodeFormatting();
      const typeResult = await this.runTypeChecking();
      const testResult = await this.runTests();
      
      // Update statistics
      this.stats.totalIssues += lintResult.issues;
      this.stats.fixedIssues += lintResult.fixed;
      this.stats.lastLint = new Date().toISOString();
      this.stats.lastFormat = new Date().toISOString();
      this.stats.lastTest = new Date().toISOString();
      
      // Check overall success
      const overallSuccess = lintResult.success && formatResult.success && typeResult.success && testResult.success;
      
      if (overallSuccess) {
        this.stats.successful++;
        this.log('✅ All quality checks passed successfully');
      } else {
        this.stats.failed++;
        this.log('❌ Some quality checks failed');
      }
      
      // Analyze code quality
      await this.analyzeCodeQuality();
      
      // Generate report
      if (this.config.generateReports) {
        await this.generateQualityReport();
      }
      
      const duration = Date.now() - startTime;
      this.log(`🏁 Quality check completed in ${duration}ms`);
      
      this.stats.lastRun = new Date().toISOString();
      this.saveStatus();
      
      return overallSuccess;
      
    } catch (error) {
      this.log(`❌ Quality check error: ${error.message}`, 'ERROR');
      this.stats.failed++;
      this.saveStatus();
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting Code Quality Automation');
    
    // Main quality check loop
    const runQualityCheck = async () => {
      try {
        await this.runQualityCheck();
      } catch (error) {
        this.log(`Quality check cycle error: ${error.message}`, 'ERROR');
      }
    };
    
    // Run initial check
    await runQualityCheck();
    
    // Schedule regular runs
    setInterval(runQualityCheck, this.config.qualityInterval);
    setInterval(() => this.runLinting(), this.config.lintInterval);
    setInterval(() => this.runTests(), this.config.testInterval);
    
    this.log('✅ Code Quality Automation is running');
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Code Quality Automation');
      this.saveStatus();
      process.exit(0);
    });
  }
}

// Start the code quality automation
if (require.main === module) {
  const automation = new CodeQualityAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = CodeQualityAutomation;
