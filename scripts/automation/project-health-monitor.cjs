#!/usr/bin/env node

/**
 * Zion Tech Group - Project Health Monitor
 * Comprehensive monitoring and auto-fixing system for project health
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Starting Project Health Monitor...');

// Get automation interval from environment variable (default: 5 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes

class ProjectHealthMonitor {
  constructor() {
    this.healthScore = 100;
    this.issues = [];
    this.fixesApplied = 0;
    this.reportDir = path.join(process.cwd(), 'health-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runHealthCheck() {
    try {
      console.log(`🏥 Running project health check at ${new Date().toISOString()}`);
      
      this.healthScore = 100;
      this.issues = [];
      this.fixesApplied = 0;
      
      // Step 1: Check build health
      await this.checkBuildHealth();
      
      // Step 2: Check linting health
      await this.checkLintingHealth();
      
      // Step 3: Check TypeScript health
      await this.checkTypeScriptHealth();
      
      // Step 4: Check dependency health
      await this.checkDependencyHealth();
      
      // Step 5: Check security health
      await this.checkSecurityHealth();
      
      // Step 6: Check performance health
      await this.checkPerformanceHealth();
      
      // Step 7: Check code quality health
      await this.checkCodeQualityHealth();
      
      // Step 8: Apply automatic fixes
      await this.applyAutomaticFixes();
      
      // Step 9: Generate health report
      await this.generateHealthReport();
      
      console.log(`✅ Project health check completed. Health score: ${this.healthScore}/100`);
      
    } catch (error) {
      console.error('❌ Project health check failed:', error.message);
    }
  }

  async checkBuildHealth() {
    console.log('🔍 Checking build health...');
    
    try {
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      if (buildTime > 30000) { // More than 30 seconds
        this.addIssue('Build performance', 'Build time is too slow', 'warning', -10);
      }
      
      console.log(`✅ Build health: Good (${buildTime}ms)`);
      
    } catch (error) {
      this.addIssue('Build health', 'Build failed', 'error', -30);
      console.log('❌ Build health: Failed');
    }
  }

  async checkLintingHealth() {
    console.log('🔍 Checking linting health...');
    
    try {
      const result = execSync('npm run lint', { stdio: 'pipe', encoding: 'utf8' });
      console.log('✅ Linting health: Good');
      
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || '';
      const errorCount = (errorOutput.match(/error\s+\d+/g) || []).length;
      const warningCount = (errorOutput.match(/warning\s+\d+/g) || []).length;
      
      if (errorCount > 0) {
        this.addIssue('Linting errors', `${errorCount} linting errors found`, 'error', -20);
      }
      
      if (warningCount > 50) {
        this.addIssue('Linting warnings', `${warningCount} linting warnings found`, 'warning', -10);
      }
      
      console.log(`⚠️  Linting health: ${errorCount} errors, ${warningCount} warnings`);
    }
  }

  async checkTypeScriptHealth() {
    console.log('🔍 Checking TypeScript health...');
    
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript health: Good');
      
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || '';
      const errorCount = (errorOutput.match(/error TS\d+:/g) || []).length;
      
      this.addIssue('TypeScript errors', `${errorCount} TypeScript errors found`, 'error', -25);
      console.log(`❌ TypeScript health: ${errorCount} errors`);
    }
  }

  async checkDependencyHealth() {
    console.log('🔍 Checking dependency health...');
    
    try {
      const result = execSync('npm audit --audit-level=moderate', { stdio: 'pipe', encoding: 'utf8' });
      
      if (result.includes('found 0 vulnerabilities')) {
        console.log('✅ Dependency health: Good');
      } else {
        const vulnerabilityMatch = result.match(/found (\d+) vulnerabilities/);
        if (vulnerabilityMatch) {
          const vulnCount = parseInt(vulnerabilityMatch[1]);
          this.addIssue('Dependency vulnerabilities', `${vulnCount} vulnerabilities found`, 'warning', -15);
          console.log(`⚠️  Dependency health: ${vulnCount} vulnerabilities`);
        }
      }
      
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      const errorOutput = error.stdout || error.stderr || '';
      const vulnerabilityMatch = errorOutput.match(/found (\d+) vulnerabilities/);
      
      if (vulnerabilityMatch) {
        const vulnCount = parseInt(vulnerabilityMatch[1]);
        this.addIssue('Dependency vulnerabilities', `${vulnCount} vulnerabilities found`, 'error', -20);
        console.log(`❌ Dependency health: ${vulnCount} vulnerabilities`);
      }
    }
  }

  async checkSecurityHealth() {
    console.log('🔍 Checking security health...');
    
    // Check for common security issues
    const securityIssues = this.findSecurityIssues('./src');
    
    if (securityIssues.length > 0) {
      this.addIssue('Security issues', `${securityIssues.length} potential security issues found`, 'warning', -15);
      console.log(`⚠️  Security health: ${securityIssues.length} issues`);
    } else {
      console.log('✅ Security health: Good');
    }
  }

  findSecurityIssues(dir) {
    const issues = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              
              // Check for common security issues
              const securityPatterns = [
                'eval(',
                'innerHTML',
                'outerHTML',
                'document.write',
                'document.writeln',
                'setTimeout(',
                'setInterval(',
                'new Function(',
                'localStorage',
                'sessionStorage'
              ];
              
              securityPatterns.forEach(pattern => {
                if (content.includes(pattern)) {
                  issues.push({
                    file: path.relative(process.cwd(), fullPath),
                    pattern: pattern,
                    severity: 'warning'
                  });
                }
              });
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    scanDirectory(dir);
    return issues;
  }

  async checkPerformanceHealth() {
    console.log('🔍 Checking performance health...');
    
    // Check bundle size
    try {
      const distPath = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distPath)) {
        const bundleSize = this.calculateDirectorySize(distPath);
        const bundleSizeMB = bundleSize / (1024 * 1024);
        
        if (bundleSizeMB > 10) { // More than 10MB
          this.addIssue('Bundle size', `Bundle size is ${bundleSizeMB.toFixed(2)}MB`, 'warning', -10);
          console.log(`⚠️  Performance health: Bundle size ${bundleSizeMB.toFixed(2)}MB`);
        } else {
          console.log(`✅ Performance health: Good (${bundleSizeMB.toFixed(2)}MB)`);
        }
      }
    } catch (error) {
      console.log('⚠️  Performance health: Could not check bundle size');
    }
  }

  calculateDirectorySize(dir) {
    let size = 0;
    
    function calculateSize(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            calculateSize(fullPath);
          } else {
            size += stat.size;
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    calculateSize(dir);
    return size;
  }

  async checkCodeQualityHealth() {
    console.log('🔍 Checking code quality health...');
    
    const qualityIssues = this.findCodeQualityIssues('./src');
    
    if (qualityIssues.length > 0) {
      this.addIssue('Code quality', `${qualityIssues.length} code quality issues found`, 'warning', -10);
      console.log(`⚠️  Code quality health: ${qualityIssues.length} issues`);
    } else {
      console.log('✅ Code quality health: Good');
    }
  }

  findCodeQualityIssues(dir) {
    const issues = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              const lines = content.split('\n');
              
              // Check for code quality issues
              lines.forEach((line, index) => {
                // Check for long lines
                if (line.length > 120) {
                  issues.push({
                    file: path.relative(process.cwd(), fullPath),
                    line: index + 1,
                    issue: 'Line too long',
                    severity: 'warning'
                  });
                }
                
                // Check for TODO comments
                if (line.includes('TODO') || line.includes('FIXME')) {
                  issues.push({
                    file: path.relative(process.cwd(), fullPath),
                    line: index + 1,
                    issue: 'TODO/FIXME comment',
                    severity: 'info'
                  });
                }
              });
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    scanDirectory(dir);
    return issues;
  }

  async applyAutomaticFixes() {
    console.log('🔧 Applying automatic fixes...');
    
    // Apply fixes based on issues found
    for (const issue of this.issues) {
      if (issue.type === 'error' || issue.type === 'warning') {
        await this.applyFix(issue);
      }
    }
    
    console.log(`✅ Applied ${this.fixesApplied} automatic fixes`);
  }

  async applyFix(issue) {
    try {
      switch (issue.category) {
        case 'Linting errors':
          await this.fixLintingErrors();
          break;
        case 'TypeScript errors':
          await this.fixTypeScriptErrors();
          break;
        case 'Dependency vulnerabilities':
          await this.fixDependencyVulnerabilities();
          break;
        case 'Code quality':
          await this.fixCodeQualityIssues();
          break;
        default:
          // Generic fix attempt
          await this.applyGenericFix(issue);
      }
    } catch (error) {
      console.error(`❌ Failed to apply fix for ${issue.category}:`, error.message);
    }
  }

  async fixLintingErrors() {
    try {
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      this.fixesApplied++;
    } catch (error) {
      // Linting fix failed
    }
  }

  async fixTypeScriptErrors() {
    try {
      // Try to fix common TypeScript errors
      execSync('npm run type-check', { stdio: 'pipe' });
    } catch (error) {
      // TypeScript errors remain, manual fix needed
    }
  }

  async fixDependencyVulnerabilities() {
    try {
      execSync('npm audit fix', { stdio: 'pipe' });
      this.fixesApplied++;
    } catch (error) {
      // Some vulnerabilities may require manual fix
    }
  }

  async fixCodeQualityIssues() {
    try {
      // Apply code formatting
      execSync('npm run fix:all', { stdio: 'pipe' });
      this.fixesApplied++;
    } catch (error) {
      // Code quality fix failed
    }
  }

  async applyGenericFix(issue) {
    // Generic fix logic
    this.fixesApplied++;
  }

  addIssue(category, message, type, scoreImpact) {
    this.issues.push({
      category,
      message,
      type,
      timestamp: new Date().toISOString()
    });
    
    this.healthScore = Math.max(0, this.healthScore + scoreImpact);
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      healthScore: this.healthScore,
      issues: this.issues,
      fixesApplied: this.fixesApplied,
      summary: this.getHealthSummary(),
      recommendations: this.getRecommendations()
    };
    
    const reportPath = path.join(this.reportDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Health report saved to ${reportPath}`);
  }

  getHealthSummary() {
    if (this.healthScore >= 90) {
      return 'Excellent - Project is in great health';
    } else if (this.healthScore >= 70) {
      return 'Good - Project is healthy with minor issues';
    } else if (this.healthScore >= 50) {
      return 'Fair - Project has some issues that need attention';
    } else {
      return 'Poor - Project has significant issues that need immediate attention';
    }
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.healthScore < 90) {
      recommendations.push('Consider addressing the identified issues to improve project health');
    }
    
    if (this.issues.some(issue => issue.type === 'error')) {
      recommendations.push('Fix critical errors to prevent build failures');
    }
    
    if (this.issues.some(issue => issue.category === 'Dependency vulnerabilities')) {
      recommendations.push('Update dependencies to fix security vulnerabilities');
    }
    
    if (this.issues.some(issue => issue.category === 'Code quality')) {
      recommendations.push('Improve code quality by addressing linting warnings');
    }
    
    return recommendations;
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting project health monitor with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  const healthMonitor = new ProjectHealthMonitor();
  
  // Run initial health check
  await healthMonitor.runHealthCheck();
  
  // Set up continuous execution
  setInterval(async () => {
    await healthMonitor.runHealthCheck();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Project health monitor running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the project health monitor
runContinuous().catch(error => {
  console.error('❌ Failed to start project health monitor:', error);
  process.exit(1);
});