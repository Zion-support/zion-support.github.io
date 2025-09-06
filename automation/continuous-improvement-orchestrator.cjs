#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousImprovementOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs', 'continuous-improvement.log');
    this.ensureLogDir();
    this.improvements = [];
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runContinuousImprovements() {
    this.log('🔄 Starting Continuous Improvement Orchestrator...');
    
    try {
      // 1. Code Analysis
      await this.analyzeCode();
      
      // 2. Performance Monitoring
      await this.monitorPerformance();
      
      // 3. Security Scanning
      await this.scanSecurity();
      
      // 4. Dependency Updates
      await this.updateDependencies();
      
      // 5. Test Coverage Analysis
      await this.analyzeTestCoverage();
      
      // 6. Generate Improvement Report
      await this.generateReport();
      
      this.log('✅ Continuous Improvement Orchestrator completed!');
      
    } catch (error) {
      this.log(`❌ Error in Continuous Improvement Orchestrator: ${error.message}`);
      throw error;
    }
  }

  async analyzeCode() {
    this.log('🔍 Analyzing code quality...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      files: 0,
      lines: 0,
      functions: 0,
      classes: 0,
      issues: []
    };
    
    // Analyze TypeScript/JavaScript files
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        analysis.files++;
        analysis.lines += content.split('\n').length;
        
        // Count functions
        const functionMatches = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g);
        if (functionMatches) analysis.functions += functionMatches.length;
        
        // Count classes
        const classMatches = content.match(/class\s+\w+/g);
        if (classMatches) analysis.classes += classMatches.length;
        
        // Check for common issues
        if (content.includes('console.log')) {
          analysis.issues.push(`${file}: Contains console.log statements`);
        }
        
        if (content.includes('any')) {
          analysis.issues.push(`${file}: Contains 'any' types`);
        }
        
        if (content.includes('TODO') || content.includes('FIXME')) {
          analysis.issues.push(`${file}: Contains TODO/FIXME comments`);
        }
        
      } catch (error) {
        this.log(`⚠️ Could not analyze ${file}: ${error.message}`);
      }
    }
    
    this.improvements.push({
      type: 'code_analysis',
      data: analysis
    });
    
    this.log(`📊 Analyzed ${analysis.files} files, ${analysis.lines} lines, ${analysis.functions} functions, ${analysis.classes} classes`);
  }

  async monitorPerformance() {
    this.log('⚡ Monitoring performance...');
    
    try {
      // Run build to check bundle size
      execSync('npm run build', { stdio: 'pipe' });
      
      // Analyze bundle size
      const distDir = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distDir)) {
        const files = fs.readdirSync(distDir);
        let totalSize = 0;
        
        for (const file of files) {
          const filePath = path.join(distDir, file);
          const stat = fs.statSync(filePath);
          if (stat.isFile()) {
            totalSize += stat.size;
          }
        }
        
        const performanceData = {
          timestamp: new Date().toISOString(),
          bundleSize: totalSize,
          bundleSizeMB: (totalSize / 1024 / 1024).toFixed(2),
          files: files.length
        };
        
        this.improvements.push({
          type: 'performance',
          data: performanceData
        });
        
        this.log(`📦 Bundle size: ${performanceData.bundleSizeMB}MB (${files.length} files)`);
      }
      
    } catch (error) {
      this.log(`⚠️ Performance monitoring failed: ${error.message}`);
    }
  }

  async scanSecurity() {
    this.log('🔒 Scanning security...');
    
    const securityIssues = [];
    
    // Check for common security issues
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for hardcoded secrets
        if (content.includes('password') && content.includes('=')) {
          securityIssues.push(`${file}: Potential hardcoded password`);
        }
        
        if (content.includes('api_key') && content.includes('=')) {
          securityIssues.push(`${file}: Potential hardcoded API key`);
        }
        
        // Check for dangerous functions
        if (content.includes('eval(')) {
          securityIssues.push(`${file}: Uses eval() function`);
        }
        
        if (content.includes('innerHTML')) {
          securityIssues.push(`${file}: Uses innerHTML (potential XSS)`);
        }
        
      } catch (error) {
        this.log(`⚠️ Could not scan ${file}: ${error.message}`);
      }
    }
    
    const securityData = {
      timestamp: new Date().toISOString(),
      issues: securityIssues,
      severity: securityIssues.length > 0 ? 'high' : 'low'
    };
    
    this.improvements.push({
      type: 'security',
      data: securityData
    });
    
    this.log(`🔒 Security scan completed: ${securityIssues.length} issues found`);
  }

  async updateDependencies() {
    this.log('📦 Checking dependency updates...');
    
    try {
      // Check for outdated packages
      const outdated = execSync('npm outdated --json', { stdio: 'pipe' }).toString();
      const outdatedPackages = JSON.parse(outdated);
      
      const dependencyData = {
        timestamp: new Date().toISOString(),
        outdated: Object.keys(outdatedPackages).length,
        packages: outdatedPackages
      };
      
      this.improvements.push({
        type: 'dependencies',
        data: dependencyData
      });
      
      this.log(`📦 Found ${Object.keys(outdatedPackages).length} outdated packages`);
      
    } catch (error) {
      this.log(`⚠️ Dependency check failed: ${error.message}`);
    }
  }

  async analyzeTestCoverage() {
    this.log('🧪 Analyzing test coverage...');
    
    const testData = {
      timestamp: new Date().toISOString(),
      totalTests: 0,
      passingTests: 0,
      failingTests: 0,
      coverage: 0
    };
    
    try {
      // Run tests and capture output
      const testOutput = execSync('npm test -- --passWithNoTests --coverage --json', { stdio: 'pipe' }).toString();
      const testResults = JSON.parse(testOutput);
      
      testData.totalTests = testResults.numTotalTests || 0;
      testData.passingTests = testResults.numPassedTests || 0;
      testData.failingTests = testResults.numFailedTests || 0;
      testData.coverage = testResults.coverageMap ? testResults.coverageMap.getCoverageSummary().total.lines.pct : 0;
      
    } catch (error) {
      this.log(`⚠️ Test analysis failed: ${error.message}`);
    }
    
    this.improvements.push({
      type: 'testing',
      data: testData
    });
    
    this.log(`🧪 Test coverage: ${testData.coverage}% (${testData.passingTests}/${testData.totalTests} passing)`);
  }

  async generateReport() {
    this.log('📊 Generating improvement report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      summary: {
        totalImprovements: this.improvements.length,
        codeQuality: this.improvements.find(i => i.type === 'code_analysis')?.data || null,
        performance: this.improvements.find(i => i.type === 'performance')?.data || null,
        security: this.improvements.find(i => i.type === 'security')?.data || null,
        dependencies: this.improvements.find(i => i.type === 'dependencies')?.data || null,
        testing: this.improvements.find(i => i.type === 'testing')?.data || null
      }
    };
    
    const reportFile = path.join(this.projectRoot, 'automation/logs', 'improvement-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Improvement report saved to ${reportFile}`);
  }

  findFiles(...extensions) {
    const files = [];
    
    const walkDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Run the orchestrator
if (require.main === module) {
  const orchestrator = new ContinuousImprovementOrchestrator();
  orchestrator.runContinuousImprovements().catch(console.error);
}

module.exports = ContinuousImprovementOrchestrator;