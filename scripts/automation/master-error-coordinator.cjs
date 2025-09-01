#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterErrorCoordinator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'master-error-coordinator.log');
    this.reportFile = path.join(this.projectRoot, 'error-reports', `master-error-coordinator-report-${Date.now()}.json`);
    this.startTime = Date.now();
    this.errorSummary = {
      mergeConflicts: 0,
      typescriptErrors: 0,
      eslintErrors: 0,
      buildErrors: 0,
      dependencyIssues: 0,
      totalErrors: 0
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async checkMergeConflicts() {
    try {
      const conflictedFiles = [];
      this.scanDirectoryForMergeConflicts(this.projectRoot, conflictedFiles);
      this.errorSummary.mergeConflicts = conflictedFiles.length;
      this.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
      return conflictedFiles;
    } catch (error) {
      this.log(`❌ Error checking merge conflicts: ${error.message}`);
      return [];
    }
  }

  hasMergeConflictMarkers(content) {
    const markers = [
    ];
    
    return markers.some(marker => content.includes(marker));
  }

  scanDirectoryForMergeConflicts(dir, files, depth = 0) {
    if (depth > 10) return;
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'logs', 'error-reports'].includes(item)) {
            this.scanDirectoryForMergeConflicts(fullPath, files, depth + 1);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.txt', '.yml', '.yaml', '.css', '.scss', '.html'].includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.hasMergeConflictMarkers(content)) {
                const relativePath = path.relative(this.projectRoot, fullPath);
                if (!files.includes(relativePath)) {
                  files.push(relativePath);
                }
              }
            } catch (error) {
              // Skip files that can't be read as text
            }
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`);
    }
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      const errors = this.parseTypeScriptOutput(result);
      this.errorSummary.typescriptErrors = errors.length;
      this.log(`🔍 Found ${errors.length} TypeScript errors`);
      return errors;
    } catch (error) {
      const stderr = error.stderr || '';
      const errors = this.parseTypeScriptOutput(stderr);
      this.errorSummary.typescriptErrors = errors.length;
      this.log(`🔍 Found ${errors.length} TypeScript errors`);
      return errors;
    }
  }

  parseTypeScriptOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS(\d+): (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            code: match[4],
            message: match[5].trim()
          });
        }
      }
    }
    
    return errors;
  }

  async checkESLintErrors() {
    try {
      const result = execSync('npx eslint . --format=json --ext .js,.jsx,.ts,.tsx', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      const eslintResults = JSON.parse(result);
      let totalErrors = 0;
      
      for (const fileResult of eslintResults) {
        totalErrors += (fileResult.messages || []).length;
      }
      
      this.errorSummary.eslintErrors = totalErrors;
      this.log(`🔍 Found ${totalErrors} ESLint errors`);
      return eslintResults;
    } catch (error) {
      try {
        const eslintResults = JSON.parse(error.stdout || '[]');
        let totalErrors = 0;
        
        for (const fileResult of eslintResults) {
          totalErrors += (fileResult.messages || []).length;
        }
        
        this.errorSummary.eslintErrors = totalErrors;
        this.log(`🔍 Found ${totalErrors} ESLint errors`);
        return eslintResults;
      } catch (parseError) {
        this.log(`❌ Error parsing ESLint output: ${parseError.message}`);
        return [];
      }
    }
  }

  async checkBuildErrors() {
    try {
      execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.errorSummary.buildErrors = 0;
      this.log('✅ Build completed successfully');
      return [];
    } catch (error) {
      this.errorSummary.buildErrors = 1;
      this.log(`❌ Build failed: ${error.message}`);
      return [error.message];
    }
  }

  async checkDependencyIssues() {
    try {
      const result = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      const audit = JSON.parse(result);
      const vulnerabilities = audit.metadata?.vulnerabilities || {};
      const totalVulnerabilities = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      
      this.errorSummary.dependencyIssues = totalVulnerabilities;
      this.log(`🔍 Found ${totalVulnerabilities} dependency vulnerabilities`);
      return audit;
    } catch (error) {
      this.log(`❌ Error checking dependencies: ${error.message}`);
      return {};
    }
  }

  async runErrorFixingScripts() {
    const scripts = [
      { name: 'merge-conflict-fixer', script: './scripts/automation/merge-conflict-fixer.cjs' },
      { name: 'typescript-error-fixer', script: './scripts/automation/typescript-error-fixer.cjs' },
      { name: 'eslint-error-fixer', script: './scripts/automation/eslint-error-fixer.cjs' }
    ];

    for (const script of scripts) {
      try {
        this.log(`🚀 Running ${script.name}...`);
        execSync(`node ${script.script}`, { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.log(`✅ ${script.name} completed successfully`);
      } catch (error) {
        this.log(`❌ ${script.name} failed: ${error.message}`);
      }
    }
  }

  async run() {
    this.log('🚀 Starting Master Error Coordinator...');
    
    try {
      // Check all types of errors
      this.log('🔍 Checking for merge conflicts...');
      await this.checkMergeConflicts();
      
      this.log('🔍 Checking for TypeScript errors...');
      await this.checkTypeScriptErrors();
      
      this.log('🔍 Checking for ESLint errors...');
      await this.checkESLintErrors();
      
      this.log('🔍 Checking for build errors...');
      await this.checkBuildErrors();
      
      this.log('🔍 Checking for dependency issues...');
      await this.checkDependencyIssues();
      
      // Calculate total errors
      this.errorSummary.totalErrors = 
        this.errorSummary.mergeConflicts +
        this.errorSummary.typescriptErrors +
        this.errorSummary.eslintErrors +
        this.errorSummary.buildErrors +
        this.errorSummary.dependencyIssues;
      
      this.log(`📊 Error Summary:`);
      this.log(`   Merge Conflicts: ${this.errorSummary.mergeConflicts}`);
      this.log(`   TypeScript Errors: ${this.errorSummary.typescriptErrors}`);
      this.log(`   ESLint Errors: ${this.errorSummary.eslintErrors}`);
      this.log(`   Build Errors: ${this.errorSummary.buildErrors}`);
      this.log(`   Dependency Issues: ${this.errorSummary.dependencyIssues}`);
      this.log(`   Total Errors: ${this.errorSummary.totalErrors}`);
      
      // Run error fixing scripts if there are errors
      if (this.errorSummary.totalErrors > 0) {
        this.log('🔧 Running error fixing scripts...');
        await this.runErrorFixingScripts();
        
        // Re-check errors after fixes
        this.log('🔍 Re-checking errors after fixes...');
        await this.checkMergeConflicts();
        await this.checkTypeScriptErrors();
        await this.checkESLintErrors();
        await this.checkBuildErrors();
        await this.checkDependencyIssues();
        
        const newTotalErrors = 
          this.errorSummary.mergeConflicts +
          this.errorSummary.typescriptErrors +
          this.errorSummary.eslintErrors +
          this.errorSummary.buildErrors +
          this.errorSummary.dependencyIssues;
        
        this.log(`📊 Final Error Summary:`);
        this.log(`   Total Errors Remaining: ${newTotalErrors}`);
      } else {
        this.log('✅ No errors found! Project is clean.');
      }
      
      // Generate comprehensive report
      this.generateReport();
      
    } catch (error) {
      this.log(`❌ Error in master error coordinator: ${error.message}`);
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      errorSummary: this.errorSummary,
      recommendations: this.generateRecommendations(),
      metadata: {
        script: 'master-error-coordinator',
        version: '1.0.0',
        nodeVersion: process.version,
        platform: process.platform
      }
    };

    const reportsDir = path.dirname(this.reportFile);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Comprehensive report generated: ${this.reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.errorSummary.mergeConflicts > 0) {
      recommendations.push({
        priority: 'HIGH',
        issue: 'Merge conflicts detected',
        action: 'Run merge conflict resolution immediately',
        impact: 'Blocks development and deployment'
      });
    }
    
    if (this.errorSummary.typescriptErrors > 0) {
      recommendations.push({
        priority: 'HIGH',
        issue: 'TypeScript compilation errors',
        action: 'Fix type errors to ensure type safety',
        impact: 'Affects build process and code quality'
      });
    }
    
    if (this.errorSummary.eslintErrors > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        issue: 'ESLint violations',
        action: 'Fix code style and potential issues',
        impact: 'Affects code quality and maintainability'
      });
    }
    
    if (this.errorSummary.buildErrors > 0) {
      recommendations.push({
        priority: 'CRITICAL',
        issue: 'Build failures',
        action: 'Fix build errors immediately',
        impact: 'Blocks deployment and testing'
      });
    }
    
    if (this.errorSummary.dependencyIssues > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        issue: 'Dependency vulnerabilities',
        action: 'Update dependencies and fix security issues',
        impact: 'Security and stability concerns'
      });
    }
    
    return recommendations;
  }
}

// Run the coordinator
const coordinator = new MasterErrorCoordinator();
coordinator.run().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Master Error Coordinator stopped by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Master Error Coordinator stopped by system');
  process.exit(0);
});