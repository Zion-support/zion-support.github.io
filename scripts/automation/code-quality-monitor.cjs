#!/usr/bin/env node

/**
 * Code Quality Monitor
 * Continuously monitors code quality and triggers fixes when needed
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {
      lastCheck: null,
      errorCount: 0,
      warningCount: 0,
      filesWithIssues: 0,
      totalFiles: 0
    };
    this.thresholds = {
      maxErrors: 50,
      maxWarnings: 100,
      maxFilesWithIssues: 20
    };
  }

  async start() {
    console.log('🔍 Starting Code Quality Monitor...');
    
    // Create logs directory if it doesn't exist
    this.ensureLogsDirectory();
    
    // Start monitoring loop
    this.startMonitoring();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  startMonitoring() {
    // Run initial check
    this.runQualityCheck();
    
    // Set up periodic checks every 10 minutes
    setInterval(() => {
      this.runQualityCheck();
    }, 10 * 60 * 1000);
    
    // Set up file watching for immediate feedback
    this.watchSourceFiles();
  }

  async runQualityCheck() {
    console.log('🔍 Running code quality check...');
    
    try {
      // Check TypeScript compilation
      await this.checkTypeScriptQuality();
      
      // Check ESLint quality
      await this.checkESLintQuality();
      
      // Check import quality
      await this.checkImportQuality();
      
      // Check syntax quality
      await this.checkSyntaxQuality();
      
      // Generate quality report
      this.generateQualityReport();
      
      // Check if thresholds are exceeded
      this.checkThresholds();
      
    } catch (error) {
      console.error('❌ Error in quality check:', error);
    }
  }

  async checkTypeScriptQuality() {
    try {
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.metrics.errorCount = 0;
      this.metrics.lastCheck = new Date();
      console.log('✅ TypeScript compilation successful');
      
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || '';
      const errorCount = (errorOutput.match(/error TS/g) || []).length;
      this.metrics.errorCount = errorCount;
      
      console.log(`⚠️  TypeScript compilation failed with ${errorCount} errors`);
      
      // Log errors to file
      this.logErrors('typescript', errorOutput);
    }
  }

  async checkESLintQuality() {
    try {
      const result = execSync('npm run lint -- --quiet', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.metrics.warningCount = 0;
      console.log('✅ ESLint check passed');
      
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || '';
      const warningCount = (errorOutput.match(/warning|error/g) || []).length;
      this.metrics.warningCount = warningCount;
      
      console.log(`⚠️  ESLint check failed with ${warningCount} issues`);
      
      // Log errors to file
      this.logErrors('eslint', errorOutput);
    }
  }

  async checkImportQuality() {
    const sourceFiles = await this.getSourceFiles();
    let importIssues = 0;
    
    for (const filePath of sourceFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common import issues
      if (content.includes('.ts"') || content.includes(".ts'")) {
        importIssues++;
      }
      
      if (content.includes('import.*from.*import.*from')) {
        importIssues++;
      }
    }
    
    if (importIssues > 0) {
      console.log(`⚠️  Found ${importIssues} import quality issues`);
    } else {
      console.log('✅ Import quality check passed');
    }
  }

  async checkSyntaxQuality() {
    const sourceFiles = await this.getSourceFiles();
    let syntaxIssues = 0;
    
    for (const filePath of sourceFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common syntax issues
      if (content.includes('any"')) {
        syntaxIssues++;
      }
      
      if (content.includes('<\\w+"')) {
        syntaxIssues++;
      }
      
      if (content.includes('\\w+"\\w+":')) {
        syntaxIssues++;
      }
    }
    
    if (syntaxIssues > 0) {
      console.log(`⚠️  Found ${syntaxIssues} syntax quality issues`);
    } else {
      console.log('✅ Syntax quality check passed');
    }
  }

  generateQualityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      quality: this.calculateQualityScore(),
      recommendations: this.generateRecommendations()
    };
    
    // Save report to file
    const reportPath = path.join(this.projectRoot, 'logs', 'quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Quality report generated');
  }

  calculateQualityScore() {
    let score = 100;
    
    if (this.metrics.errorCount > 0) {
      score -= Math.min(50, this.metrics.errorCount * 2);
    }
    
    if (this.metrics.warningCount > 0) {
      score -= Math.min(30, this.metrics.warningCount * 0.5);
    }
    
    return Math.max(0, Math.round(score));
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.errorCount > this.thresholds.maxErrors) {
      recommendations.push('Run comprehensive error fixer to resolve TypeScript errors');
    }
    
    if (this.metrics.warningCount > this.thresholds.maxWarnings) {
      recommendations.push('Run ESLint auto-fix to resolve linting issues');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Code quality is within acceptable thresholds');
    }
    
    return recommendations;
  }

  checkThresholds() {
    let shouldTriggerFix = false;
    
    if (this.metrics.errorCount > this.thresholds.maxErrors) {
      console.log('🚨 Error threshold exceeded, triggering auto-fix...');
      shouldTriggerFix = true;
    }
    
    if (this.metrics.warningCount > this.thresholds.maxWarnings) {
      console.log('🚨 Warning threshold exceeded, triggering auto-fix...');
      shouldTriggerFix = true;
    }
    
    if (shouldTriggerFix) {
      this.triggerAutoFix();
    }
  }

  async triggerAutoFix() {
    console.log('🔧 Triggering automatic code quality fixes...');
    
    try {
      // Run the comprehensive error fixer
      execSync('node scripts/automation/comprehensive-error-fixer.cjs', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      console.log('✅ Auto-fix completed');
      
      // Run quality check again to verify fixes
      setTimeout(() => {
        this.runQualityCheck();
      }, 5000);
      
    } catch (error) {
      console.error('❌ Auto-fix failed:', error);
    }
  }

  watchSourceFiles() {
    console.log('👀 Setting up file watching...');
    
    // This is a simplified file watching implementation
    // In production, you might want to use chokidar or similar
    setInterval(() => {
      this.checkForFileChanges();
    }, 30 * 1000); // Check every 30 seconds
  }

  async checkForFileChanges() {
    const currentFiles = await this.getSourceFiles();
    
    if (!this.lastFileCheck) {
      this.lastFileCheck = currentFiles.length;
      return;
    }
    
    if (currentFiles.length !== this.lastFileCheck) {
      console.log('📁 File structure changed, running quality check...');
      this.runQualityCheck();
      this.lastFileCheck = currentFiles.length;
    }
  }

  logErrors(type, errorOutput) {
    const logPath = path.join(this.projectRoot, 'logs', `${type}-errors.log`);
    const timestamp = new Date().toISOString();
    const logEntry = `\n[${timestamp}] ${type.toUpperCase()} ERRORS:\n${errorOutput}\n`;
    
    fs.appendFileSync(logPath, logEntry);
  }

  async getSourceFiles() {
    const sourceFiles = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          sourceFiles.push(fullPath);
        }
      }
    };
    
    scanDirectory(path.join(this.projectRoot, 'src'));
    this.metrics.totalFiles = sourceFiles.length;
    return sourceFiles;
  }
}

// Create instance and start
const monitor = new CodeQualityMonitor();

// Handle process signals
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the monitor
monitor.start();
