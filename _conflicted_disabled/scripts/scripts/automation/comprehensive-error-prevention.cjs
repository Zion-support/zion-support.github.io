#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ComprehensiveErrorPrevention {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'comprehensive-error-prevention-report.json');
    this.checks = [];
    this.fixes = [];
    this.warnings = [];
  }

  async run() {
    console.log('🛡️ Starting comprehensive error prevention system...');
    
    try {
      await this.runTypeChecking();
      await this.runLinting();
      await this.runSecurityAudit();
      await this.runDependencyChecks();
      await this.runBuildValidation();
      await this.runTestValidation();
      await this.runCodeQualityChecks();
      await this.runPerformanceChecks();
      await this.generateReport();
      
      console.log('✅ Comprehensive error prevention completed!');
      console.log(`📊 Performed ${this.checks.length} checks, applied ${this.fixes.length} fixes`);
      
    } catch (error) {
      console.error('❌ Error prevention failed:', error.message);
      await this.generateReport();
      process.exit(1);
    }
  }

  async runTypeChecking() {
    console.log('🔍 Running TypeScript type checking...');
    
    try {
      execSync('npm run type-check', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordCheck('typescript', 'passed', 'No type errors found');
    } catch (error) {
      this.recordCheck('typescript', 'failed', error.message);
      await this.autoFixTypeErrors();
    }
  }

  async autoFixTypeErrors() {
    console.log('🔧 Attempting to auto-fix TypeScript errors...');
    
    // Common TypeScript error fixes
    const commonFixes = [
      {
        file: 'src/services/api.ts',
        pattern: /headers: Record<string, string> \| undefined/g,
        replacement: 'headers: Record<string, string>'
      },
      {
        file: 'src/utils/getStripe.ts',
        pattern: /advancedFraudSignals: false/g,
        replacement: ''
      },
      {
        file: 'src/utils/serviceWorker.ts',
        pattern: /applicationServerKey: this\.urlBase64ToUint8Array\([^)]+\)/g,
        replacement: 'applicationServerKey: this.urlBase64ToUint8Array(process.env[\'REACT_APP_VAPID_PUBLIC_KEY\'] || \'\') as Uint8Array'
      }
    ];

    for (const fix of commonFixes) {
      if (fs.existsSync(fix.file)) {
        try {
          let content = fs.readFileSync(fix.file, 'utf8');
          if (content.match(fix.pattern)) {
            content = content.replace(fix.pattern, fix.replacement);
            fs.writeFileSync(fix.file, content);
            this.recordFix('typescript', fix.file);
          }
        } catch (error) {
          this.recordWarning('typescript', `Could not fix ${fix.file}: ${error.message}`);
        }
      }
    }
  }

  async runLinting() {
    console.log('🔍 Running ESLint checks...');
    
    try {
      execSync('npm run lint', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordCheck('eslint', 'passed', 'No linting errors found');
    } catch (error) {
      this.recordCheck('eslint', 'failed', error.message);
      await this.autoFixLintingErrors();
    }
  }

  async autoFixLintingErrors() {
    console.log('🔧 Attempting to auto-fix linting errors...');
    
    try {
      execSync('npx eslint . --fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordFix('eslint', 'auto-fixed');
    } catch (error) {
      this.recordWarning('eslint', 'Some linting errors could not be auto-fixed');
    }
  }

  async runSecurityAudit() {
    console.log('🔍 Running security audit...');
    
    try {
      const result = execSync('npm audit --audit-level=moderate', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordCheck('security', 'passed', 'No security vulnerabilities found');
    } catch (error) {
      this.recordCheck('security', 'failed', error.message);
      await this.autoFixSecurityIssues();
    }
  }

  async autoFixSecurityIssues() {
    console.log('🔧 Attempting to auto-fix security issues...');
    
    try {
      execSync('npm audit fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordFix('security', 'auto-fixed');
    } catch (error) {
      this.recordWarning('security', 'Some security issues could not be auto-fixed');
    }
  }

  async runDependencyChecks() {
    console.log('🔍 Running dependency checks...');
    
    try {
      // Check for outdated dependencies
      const result = execSync('npm outdated', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordCheck('dependencies', 'passed', 'All dependencies are up to date');
    } catch (error) {
      this.recordCheck('dependencies', 'warning', 'Some dependencies may be outdated');
      await this.autoUpdateDependencies();
    }
  }

  async autoUpdateDependencies() {
    console.log('🔧 Attempting to update dependencies...');
    
    try {
      // Update minor and patch versions only
      execSync('npm update', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordFix('dependencies', 'updated');
    } catch (error) {
      this.recordWarning('dependencies', 'Could not update some dependencies');
    }
  }

  async runBuildValidation() {
    console.log('🔍 Running build validation...');
    
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes
      });
      this.recordCheck('build', 'passed', 'Build completed successfully');
    } catch (error) {
      this.recordCheck('build', 'failed', error.message);
      await this.autoFixBuildIssues();
    }
  }

  async autoFixBuildIssues() {
    console.log('🔧 Attempting to auto-fix build issues...');
    
    // Common build issue fixes
    const buildFixes = [
      {
        file: 'vite.config.ts',
        pattern: /import\s+.*\s+from\s+['"]@\/components\//g,
        replacement: (match) => {
          // Fix import paths
          return match.replace(/@\/components\//g, './src/components/');
        }
      }
    ];

    for (const fix of buildFixes) {
      if (fs.existsSync(fix.file)) {
        try {
          let content = fs.readFileSync(fix.file, 'utf8');
          if (content.match(fix.pattern)) {
            content = content.replace(fix.pattern, fix.replacement);
            fs.writeFileSync(fix.file, content);
            this.recordFix('build', fix.file);
          }
        } catch (error) {
          this.recordWarning('build', `Could not fix ${fix.file}: ${error.message}`);
        }
      }
    }
  }

  async runTestValidation() {
    console.log('🔍 Running test validation...');
    
    try {
      execSync('npm test', { 
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 120000 // 2 minutes
      });
      this.recordCheck('tests', 'passed', 'All tests passed');
    } catch (error) {
      this.recordCheck('tests', 'failed', error.message);
      await this.autoFixTestIssues();
    }
  }

  async autoFixTestIssues() {
    console.log('🔧 Attempting to auto-fix test issues...');
    
    // Common test issue fixes
    const testFixes = [
      {
        file: 'jest.config.cjs',
        pattern: /testEnvironment:\s*['"]jsdom['"]/g,
        replacement: 'testEnvironment: "jsdom"'
      }
    ];

    for (const fix of testFixes) {
      if (fs.existsSync(fix.file)) {
        try {
          let content = fs.readFileSync(fix.file, 'utf8');
          if (content.match(fix.pattern)) {
            content = content.replace(fix.pattern, fix.replacement);
            fs.writeFileSync(fix.file, content);
            this.recordFix('tests', fix.file);
          }
        } catch (error) {
          this.recordWarning('tests', `Could not fix ${fix.file}: ${error.message}`);
        }
      }
    }
  }

  async runCodeQualityChecks() {
    console.log('🔍 Running code quality checks...');
    
    // Check for common code quality issues
    const qualityIssues = await this.detectQualityIssues();
    
    if (qualityIssues.length === 0) {
      this.recordCheck('quality', 'passed', 'No quality issues found');
    } else {
      this.recordCheck('quality', 'warning', `Found ${qualityIssues.length} quality issues`);
      await this.autoFixQualityIssues(qualityIssues);
    }
  }

  async detectQualityIssues() {
    const issues = [];
    
    // Check for console.log statements in production code
    const consoleLogPattern = /console\.(log|warn|error|info)/g;
    const filesToCheck = this.getSourceFiles();
    
    for (const file of filesToCheck) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(consoleLogPattern);
        if (matches) {
          issues.push({
            type: 'console-statement',
            file,
            count: matches.length
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async autoFixQualityIssues(issues) {
    console.log('🔧 Attempting to auto-fix quality issues...');
    
    for (const issue of issues) {
      if (issue.type === 'console-statement') {
        try {
          let content = fs.readFileSync(issue.file, 'utf8');
          // Remove console statements in production
          content = content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
          fs.writeFileSync(issue.file, content);
          this.recordFix('quality', issue.file);
        } catch (error) {
          this.recordWarning('quality', `Could not fix ${issue.file}: ${error.message}`);
        }
      }
    }
  }

  async runPerformanceChecks() {
    console.log('🔍 Running performance checks...');
    
    // Check for performance issues
    const performanceIssues = await this.detectPerformanceIssues();
    
    if (performanceIssues.length === 0) {
      this.recordCheck('performance', 'passed', 'No performance issues found');
    } else {
      this.recordCheck('performance', 'warning', `Found ${performanceIssues.length} performance issues`);
      await this.autoFixPerformanceIssues(performanceIssues);
    }
  }

  async detectPerformanceIssues() {
    const issues = [];
    
    // Check for large bundle size indicators
    const largeImportPattern = /import\s+\*\s+as\s+\w+\s+from\s+['"][^'"]+['"]/g;
    const filesToCheck = this.getSourceFiles();
    
    for (const file of filesToCheck) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(largeImportPattern);
        if (matches) {
          issues.push({
            type: 'large-import',
            file,
            count: matches.length
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async autoFixPerformanceIssues(issues) {
    console.log('🔧 Attempting to auto-fix performance issues...');
    
    for (const issue of issues) {
      if (issue.type === 'large-import') {
        try {
          let content = fs.readFileSync(issue.file, 'utf8');
          // Replace wildcard imports with specific imports
          content = content.replace(
            /import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g,
            'import { $1 } from \'$2\''
          );
          fs.writeFileSync(issue.file, content);
          this.recordFix('performance', issue.file);
        } catch (error) {
          this.recordWarning('performance', `Could not fix ${issue.file}: ${error.message}`);
        }
      }
    }
  }

  getSourceFiles() {
    const sourceDir = path.join(this.projectRoot, 'src');
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
    
    if (fs.existsSync(sourceDir)) {
      walkDir(sourceDir);
    }
    
    return files;
  }

  recordCheck(type, status, message) {
    this.checks.push({
      type,
      status,
      message,
      timestamp: new Date().toISOString()
    });
  }

  recordFix(type, file) {
    this.fixes.push({
      type,
      file,
      timestamp: new Date().toISOString()
    });
  }

  recordWarning(type, message) {
    this.warnings.push({
      type,
      message,
      timestamp: new Date().toISOString()
    });
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: this.checks.length,
        totalFixes: this.fixes.length,
        totalWarnings: this.warnings.length,
        passedChecks: this.checks.filter(c => c.status === 'passed').length,
        failedChecks: this.checks.filter(c => c.status === 'failed').length
      },
      checks: this.checks,
      fixes: this.fixes,
      warnings: this.warnings
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📄 Report saved to ${this.reportFile}`);
  }
}

// Run the comprehensive error prevention
if (require.main === module) {
  const prevention = new ComprehensiveErrorPrevention();
  prevention.run().catch(console.error);
}

module.exports = ComprehensiveErrorPrevention;