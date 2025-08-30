#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ProjectHealthCheck {
  constructor() {
    this.healthReport = {
      timestamp: new Date().toISOString(),
      overallHealth: 'unknown',
      metrics: {},
      recommendations: []
    };
  }

  async run() {
    console.log('🏥 Project Health Check Starting...\n');
    
    try {
      // Check TypeScript errors
      this.checkTypeScriptHealth();
      
      // Check ESLint issues
      this.checkESLintHealth();
      
      // Check build status
      this.checkBuildHealth();
      
      // Check dependencies
      this.checkDependenciesHealth();
      
      // Check file system health
      this.checkFileSystemHealth();
      
      // Generate overall health score
      this.calculateOverallHealth();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save report
      this.saveHealthReport();
      
      // Display summary
      this.displaySummary();
      
    } catch (error) {
      console.error('❌ Health check failed:', error.message);
      this.healthReport.overallHealth = 'critical';
      this.healthReport.error = error.message;
    }
  }

  checkTypeScriptHealth() {
    try {
      console.log('🔍 Checking TypeScript health...');
      const output = execSync('npm run type-check 2>&1', { 
        stdio: 'pipe',
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8'
      });
      
      const errorCount = (output.match(/error TS/g) || []).length;
      
      this.healthReport.metrics.typescript = {
        errorCount,
        status: errorCount === 0 ? 'healthy' : errorCount < 100 ? 'warning' : 'critical',
        lastCheck: new Date().toISOString()
      };
      
      console.log(`   TypeScript: ${errorCount} errors (${this.healthReport.metrics.typescript.status})`);
      
    } catch (error) {
      this.healthReport.metrics.typescript = {
        errorCount: 'unknown',
        status: 'error',
        lastCheck: new Date().toISOString(),
        error: error.message
      };
      console.log('   TypeScript: Error checking');
    }
  }

  checkESLintHealth() {
    try {
      console.log('🔍 Checking ESLint health...');
      const output = execSync('npm run lint 2>&1', { 
        stdio: 'pipe',
        maxBuffer: 5 * 1024 * 1024,
        encoding: 'utf8'
      });
      
      const errorCount = (output.match(/error/g) || []).length;
      const warningCount = (output.match(/warning/g) || []).length;
      
      this.healthReport.metrics.eslint = {
        errorCount,
        warningCount,
        status: errorCount === 0 ? 'healthy' : errorCount < 50 ? 'warning' : 'critical',
        lastCheck: new Date().toISOString()
      };
      
      console.log(`   ESLint: ${errorCount} errors, ${warningCount} warnings (${this.healthReport.metrics.eslint.status})`);
      
    } catch (error) {
      this.healthReport.metrics.eslint = {
        errorCount: 'unknown',
        warningCount: 'unknown',
        status: 'error',
        lastCheck: new Date().toISOString(),
        error: error.message
      };
      console.log('   ESLint: Error checking');
    }
  }

  checkBuildHealth() {
    try {
      console.log('🔍 Checking build health...');
      const output = execSync('npm run build 2>&1', { 
        stdio: 'pipe',
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8'
      });
      
      const hasErrors = output.includes('error') || output.includes('Error');
      const hasWarnings = output.includes('warning') || output.includes('Warning');
      
      this.healthReport.metrics.build = {
        status: hasErrors ? 'critical' : hasWarnings ? 'warning' : 'healthy',
        hasErrors,
        hasWarnings,
        lastCheck: new Date().toISOString()
      };
      
      console.log(`   Build: ${this.healthReport.metrics.build.status}`);
      
    } catch (error) {
      this.healthReport.metrics.build = {
        status: 'critical',
        hasErrors: true,
        hasWarnings: false,
        lastCheck: new Date().toISOString(),
        error: error.message
      };
      console.log('   Build: Failed');
    }
  }

  checkDependenciesHealth() {
    try {
      console.log('🔍 Checking dependencies health...');
      
      // Check for outdated packages
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const nodeModulesPath = path.join(process.cwd(), 'node_modules');
      
      const hasNodeModules = fs.existsSync(nodeModulesPath);
      const dependencyCount = Object.keys(packageJson.dependencies || {}).length;
      const devDependencyCount = Object.keys(packageJson.devDependencies || {}).length;
      
      this.healthReport.metrics.dependencies = {
        hasNodeModules,
        dependencyCount,
        devDependencyCount,
        status: hasNodeModules ? 'healthy' : 'critical',
        lastCheck: new Date().toISOString()
      };
      
      console.log(`   Dependencies: ${dependencyCount} deps, ${devDependencyCount} devDeps (${this.healthReport.metrics.dependencies.status})`);
      
    } catch (error) {
      this.healthReport.metrics.dependencies = {
        status: 'error',
        lastCheck: new Date().toISOString(),
        error: error.message
      };
      console.log('   Dependencies: Error checking');
    }
  }

  checkFileSystemHealth() {
    try {
      console.log('🔍 Checking file system health...');
      
      const srcPath = path.join(process.cwd(), 'src');
      const hasSrc = fs.existsSync(srcPath);
      
      if (hasSrc) {
        const files = this.countFiles(srcPath);
        this.healthReport.metrics.fileSystem = {
          hasSrc,
          fileCount: files,
          status: files > 0 ? 'healthy' : 'warning',
          lastCheck: new Date().toISOString()
        };
        console.log(`   File System: ${files} files in src/ (${this.healthReport.metrics.fileSystem.status})`);
      } else {
        this.healthReport.metrics.fileSystem = {
          hasSrc: false,
          fileCount: 0,
          status: 'critical',
          lastCheck: new Date().toISOString()
        };
        console.log('   File System: No src/ directory found (critical)');
      }
      
    } catch (error) {
      this.healthReport.metrics.fileSystem = {
        status: 'error',
        lastCheck: new Date().toISOString(),
        error: error.message
      };
      console.log('   File System: Error checking');
    }
  }

  countFiles(dirPath) {
    let count = 0;
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          count += this.countFiles(fullPath);
        } else {
          count++;
        }
      }
    } catch (error) {
      // Ignore permission errors
    }
    return count;
  }

  calculateOverallHealth() {
    const metrics = this.healthReport.metrics;
    let healthyCount = 0;
    let warningCount = 0;
    let criticalCount = 0;
    let errorCount = 0;
    
    for (const metric of Object.values(metrics)) {
      switch (metric.status) {
        case 'healthy':
          healthyCount++;
          break;
        case 'warning':
          warningCount++;
          break;
        case 'critical':
          criticalCount++;
          break;
        case 'error':
          errorCount++;
          break;
      }
    }
    
    if (criticalCount > 0 || errorCount > 0) {
      this.healthReport.overallHealth = 'critical';
    } else if (warningCount > 0) {
      this.healthReport.overallHealth = 'warning';
    } else {
      this.healthReport.overallHealth = 'healthy';
    }
    
    this.healthReport.metrics.summary = {
      healthy: healthyCount,
      warning: warningCount,
      critical: criticalCount,
      error: errorCount
    };
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.healthReport.metrics.typescript?.errorCount > 100) {
      recommendations.push('Run TypeScript error fixer to resolve type errors');
    }
    
    if (this.healthReport.metrics.eslint?.errorCount > 20) {
      recommendations.push('Fix ESLint errors to improve code quality');
    }
    
    if (this.healthReport.metrics.build?.status === 'critical') {
      recommendations.push('Fix build errors to ensure project can be deployed');
    }
    
    if (!this.healthReport.metrics.dependencies?.hasNodeModules) {
      recommendations.push('Run npm install to install dependencies');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Project is healthy! Keep up the good work.');
    }
    
    this.healthReport.recommendations = recommendations;
  }

  saveHealthReport() {
    try {
      const reportsDir = path.join(process.cwd(), 'reports');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
      }
      
      const reportPath = path.join(reportsDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(this.healthReport, null, 2));
      
      console.log(`\n📊 Health report saved to: ${reportPath}`);
      
    } catch (error) {
      console.error('❌ Failed to save health report:', error.message);
    }
  }

  displaySummary() {
    console.log('\n🏥 PROJECT HEALTH SUMMARY');
    console.log('========================');
    console.log(`Overall Health: ${this.healthReport.overallHealth.toUpperCase()}`);
    console.log(`Timestamp: ${this.healthReport.timestamp}`);
    
    console.log('\n📊 METRICS:');
    for (const [name, metric] of Object.entries(this.healthReport.metrics)) {
      if (name !== 'summary') {
        const status = metric.status || 'unknown';
        const emoji = status === 'healthy' ? '✅' : status === 'warning' ? '⚠️' : status === 'critical' ? '🚨' : '❓';
        console.log(`   ${emoji} ${name}: ${status}`);
      }
    }
    
    if (this.healthReport.metrics.summary) {
      const summary = this.healthReport.metrics.summary;
      console.log(`\n📈 SUMMARY: ${summary.healthy} healthy, ${summary.warning} warnings, ${summary.critical} critical, ${summary.error} errors`);
    }
    
    console.log('\n💡 RECOMMENDATIONS:');
    for (const recommendation of this.healthReport.recommendations) {
      console.log(`   • ${recommendation}`);
    }
    
    console.log('\n🎯 Next health check in 1 hour');
  }
}

// Run the health check
const healthCheck = new ProjectHealthCheck();
healthCheck.run().catch(console.error);