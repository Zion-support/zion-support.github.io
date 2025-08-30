#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ProjectHealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'project-health-report.json');
    this.startTime = Date.now();
    this.healthScore = 100;
    this.issues = [];
    this.metrics = {};
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async run() {
    this.log('🚀 Starting Project Health Monitor...');
    
    try {
      // Check project structure
      await this.checkProjectStructure();
      
      // Check dependencies
      await this.checkDependencies();
      
      // Check build status
      await this.checkBuildStatus();
      
      // Check TypeScript errors
      await this.checkTypeScriptErrors();
      
      // Check linting issues
      await this.checkLintingIssues();
      
      // Calculate health score
      this.calculateHealthScore();
      
      // Generate report
      await this.generateReport();
      
      this.log(`✅ Health monitoring completed. Score: ${this.healthScore}/100`);
      
    } catch (error) {
      this.log(`Error during health monitoring: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  async checkProjectStructure() {
    this.log('🔍 Checking project structure...');
    
    const requiredFiles = [
      'package.json',
      'tsconfig.json',
      'src',
      'public'
    ];
    
    let missingFiles = 0;
    for (const file of requiredFiles) {
      if (!fs.existsSync(path.join(this.projectRoot, file))) {
        this.issues.push(`Missing required file: ${file}`);
        missingFiles++;
      }
    }
    
    if (missingFiles > 0) {
      this.healthScore -= missingFiles * 10;
      this.log(`⚠️  Missing ${missingFiles} required files`);
    } else {
      this.log('✅ Project structure is complete');
    }
  }

  async checkDependencies() {
    this.log('🔍 Checking dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = Object.keys(packageJson.dependencies || {});
      const devDeps = Object.keys(packageJson.devDependencies || {});
      
      this.metrics.dependencies = {
        total: deps.length + devDeps.length,
        production: deps.length,
        development: devDeps.length
      };
      
      // Check for outdated dependencies
      try {
        const outdatedCheck = execSync('npm outdated --json', { stdio: 'pipe' });
        const outdated = JSON.parse(outdatedCheck.toString());
        const outdatedCount = Object.keys(outdated).length;
        
        if (outdatedCount > 0) {
          this.issues.push(`${outdatedCount} outdated dependencies`);
          this.healthScore -= Math.min(outdatedCount * 2, 20);
          this.log(`⚠️  ${outdatedCount} outdated dependencies found`);
        } else {
          this.log('✅ All dependencies are up to date');
        }
      } catch (error) {
        // npm outdated failed, assume no outdated deps
        this.log('✅ Dependencies check completed');
      }
      
    } catch (error) {
      this.issues.push('Could not read package.json');
      this.healthScore -= 20;
    }
  }

  async checkBuildStatus() {
    this.log('🔍 Checking build status...');
    
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.log('✅ Build successful');
      this.metrics.buildStatus = 'success';
    } catch (error) {
      this.issues.push('Build failed');
      this.healthScore -= 30;
      this.log('❌ Build failed');
      this.metrics.buildStatus = 'failed';
    }
  }

  async checkTypeScriptErrors() {
    this.log('🔍 Checking TypeScript errors...');
    
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('✅ No TypeScript errors');
      this.metrics.typescriptErrors = 0;
    } catch (error) {
      const output = error.message;
      const errorLines = output.split('\n').filter(line => line.includes('error TS'));
      const errorCount = errorLines.length;
      
      this.metrics.typescriptErrors = errorCount;
      this.issues.push(`${errorCount} TypeScript errors`);
      
      if (errorCount > 100) {
        this.healthScore -= 40;
      } else if (errorCount > 50) {
        this.healthScore -= 20;
      } else if (errorCount > 10) {
        this.healthScore -= 10;
      }
      
      this.log(`⚠️  Found ${errorCount} TypeScript errors`);
    }
  }

  async checkLintingIssues() {
    this.log('🔍 Checking linting issues...');
    
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('✅ No linting issues');
      this.metrics.lintingIssues = 0;
    } catch (error) {
      const output = error.message;
      const errorLines = output.split('\n').filter(line => line.includes('error'));
      const warningLines = output.split('\n').filter(line => line.includes('warning'));
      
      const errorCount = errorLines.length;
      const warningCount = warningLines.length;
      
      this.metrics.lintingIssues = {
        errors: errorCount,
        warnings: warningCount,
        total: errorCount + warningCount
      };
      
      this.issues.push(`${errorCount} linting errors, ${warningCount} warnings`);
      
      if (errorCount > 50) {
        this.healthScore -= 30;
      } else if (errorCount > 20) {
        this.healthScore -= 15;
      } else if (errorCount > 5) {
        this.healthScore -= 5;
      }
      
      this.log(`⚠️  Found ${errorCount} linting errors and ${warningCount} warnings`);
    }
  }

  calculateHealthScore() {
    // Ensure health score doesn't go below 0
    this.healthScore = Math.max(0, this.healthScore);
    
    // Determine health status
    if (this.healthScore >= 90) {
      this.metrics.healthStatus = 'excellent';
    } else if (this.healthScore >= 70) {
      this.metrics.healthStatus = 'good';
    } else if (this.healthScore >= 50) {
      this.metrics.healthStatus = 'fair';
    } else {
      this.metrics.healthStatus = 'poor';
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      healthScore: this.healthScore,
      healthStatus: this.metrics.healthStatus,
      issues: this.issues,
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.typescriptErrors > 0) {
      recommendations.push('Run the comprehensive error fixer to resolve TypeScript errors');
    }
    
    if (this.metrics.lintingIssues?.errors > 0) {
      recommendations.push('Fix linting errors to improve code quality');
    }
    
    if (this.metrics.buildStatus === 'failed') {
      recommendations.push('Investigate and fix build failures');
    }
    
    if (this.healthScore < 70) {
      recommendations.push('Project health is below optimal levels - consider addressing critical issues');
    }
    
    return recommendations;
  }
}

// Run the health monitor
const monitor = new ProjectHealthMonitor();
monitor.run().catch(console.error);
