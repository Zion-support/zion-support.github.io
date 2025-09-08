#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildHealthAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'build-health-automation.log');
    this.buildReportFile = path.join(this.projectRoot, 'logs', 'build-health-report.json');
    this.buildIssues = [];
    this.buildSuccesses = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async checkBuildHealth() {
    this.log('🔍 Checking build health...');
    
    const healthChecks = {
      dependencies: await this.checkDependencies(),
      build: await this.checkBuild(),
      tests: await this.checkTests(),
      bundle: await this.checkBundle(),
      performance: await this.checkPerformance()
    };
    
    return healthChecks;
  }

  async checkDependencies() {
    this.log('Checking dependencies...');
    
    try {
      // Check if node_modules exists and is not corrupted
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        return {
          status: 'missing',
          message: 'node_modules directory is missing',
          severity: 'critical'
        };
      }
      
      // Check package-lock.json consistency
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (!fs.existsSync(packageLockPath)) {
        return {
          status: 'missing',
          message: 'package-lock.json is missing',
          severity: 'high'
        };
      }
      
      // Check for dependency conflicts
      const installCheck = await this.runCommand('npm ls --depth=0', { silent: true });
      if (!installCheck.success) {
        return {
          status: 'conflict',
          message: 'Dependency conflicts detected',
          severity: 'high',
          details: installCheck.error
        };
      }
      
      return {
        status: 'healthy',
        message: 'Dependencies are healthy',
        severity: 'low'
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error checking dependencies: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async checkBuild() {
    this.log('Checking build process...');
    
    try {
      // Try to build the project
      const buildResult = await this.runCommand('npm run build', { silent: true });
      
      if (buildResult.success) {
        // Check if dist directory was created
        const distPath = path.join(this.projectRoot, 'dist');
        if (fs.existsSync(distPath)) {
          const distSize = this.getDirectorySize(distPath);
          return {
            status: 'success',
            message: 'Build completed successfully',
            severity: 'low',
            details: {
              outputSize: distSize,
              buildTime: 'measured' // In practice, you'd measure actual build time
            }
          };
        } else {
          return {
            status: 'partial',
            message: 'Build succeeded but dist directory not found',
            severity: 'medium'
          };
        }
      } else {
        return {
          status: 'failed',
          message: 'Build failed',
          severity: 'high',
          details: buildResult.error
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error during build check: ${error.message}`,
        severity: 'high'
      };
    }
  }

  async checkTests() {
    this.log('Checking test suite...');
    
    try {
      // Check if tests can run
      const testResult = await this.runCommand('npm test', { silent: true });
      
      if (testResult.success) {
        return {
          status: 'success',
          message: 'Tests passed successfully',
          severity: 'low'
        };
      } else {
        return {
          status: 'failed',
          message: 'Tests failed',
          severity: 'medium',
          details: testResult.error
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error during test check: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async checkBundle() {
    this.log('Checking bundle analysis...');
    
    try {
      // Check bundle size and analyze
      const bundleResult = await this.runCommand('npm run build', { silent: true });
      
      if (bundleResult.success) {
        const distPath = path.join(this.projectRoot, 'dist');
        if (fs.existsSync(distPath)) {
          const bundleStats = this.analyzeBundle(distPath);
          return {
            status: 'success',
            message: 'Bundle analysis completed',
            severity: 'low',
            details: bundleStats
          };
        }
      }
      
      return {
        status: 'failed',
        message: 'Bundle analysis failed',
        severity: 'medium'
      };
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error during bundle check: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  async checkPerformance() {
    this.log('Checking build performance...');
    
    try {
      // Measure build time
      const startTime = Date.now();
      const buildResult = await this.runCommand('npm run build', { silent: true });
      const buildTime = Date.now() - startTime;
      
      if (buildResult.success) {
        const performance = this.analyzePerformance(buildTime);
        return {
          status: 'success',
          message: 'Performance check completed',
          severity: 'low',
          details: {
            buildTime,
            performance: performance
          }
        };
      } else {
        return {
          status: 'failed',
          message: 'Performance check failed due to build failure',
          severity: 'medium'
        };
      }
      
    } catch (error) {
      return {
        status: 'error',
        message: `Error during performance check: ${error.message}`,
        severity: 'medium'
      };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      this.log(`Error calculating directory size: ${error.message}`, 'WARN');
    }
    
    return totalSize;
  }

  analyzeBundle(distPath) {
    const stats = {
      totalFiles: 0,
      totalSize: 0,
      largestFiles: [],
      fileTypes: {}
    };
    
    try {
      this.analyzeDirectory(distPath, stats);
      
      // Sort largest files
      stats.largestFiles.sort((a, b) => b.size - a.size);
      stats.largestFiles = stats.largestFiles.slice(0, 10); // Top 10
      
    } catch (error) {
      this.log(`Error analyzing bundle: ${error.message}`, 'WARN');
    }
    
    return stats;
  }

  analyzeDirectory(dirPath, stats, relativePath = '') {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        const itemRelativePath = path.join(relativePath, item);
        
        if (stat.isDirectory()) {
          this.analyzeDirectory(itemPath, stats, itemRelativePath);
        } else {
          stats.totalFiles++;
          stats.totalSize += stat.size;
          
          // Track file types
          const ext = path.extname(item);
          stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;
          
          // Track largest files
          stats.largestFiles.push({
            path: itemRelativePath,
            size: stat.size
          });
        }
      }
    } catch (error) {
      this.log(`Error analyzing directory ${dirPath}: ${error.message}`, 'WARN');
    }
  }

  analyzePerformance(buildTime) {
    // Performance thresholds (in milliseconds)
    const thresholds = {
      excellent: 30000,  // 30 seconds
      good: 60000,       // 1 minute
      acceptable: 120000, // 2 minutes
      slow: 300000       // 5 minutes
    };
    
    if (buildTime <= thresholds.excellent) return 'excellent';
    if (buildTime <= thresholds.good) return 'good';
    if (buildTime <= thresholds.acceptable) return 'acceptable';
    if (buildTime <= thresholds.slow) return 'slow';
    return 'very-slow';
  }

  async fixBuildIssues(healthChecks) {
    this.log('🔧 Starting build health fixes...');
    
    let totalFixed = 0;
    
    // Fix dependency issues
    if (healthChecks.dependencies.status !== 'healthy') {
      this.log('Fixing dependency issues...');
      const fixed = await this.fixDependencyIssues(healthChecks.dependencies);
      if (fixed) totalFixed++;
    }
    
    // Fix build issues
    if (healthChecks.build.status !== 'success') {
      this.log('Fixing build issues...');
      const fixed = await this.fixBuildIssues(healthChecks.build);
      if (fixed) totalFixed++;
    }
    
    // Fix test issues
    if (healthChecks.tests.status !== 'success') {
      this.log('Fixing test issues...');
      const fixed = await this.fixTestIssues(healthChecks.tests);
      if (fixed) totalFixed++;
    }
    
    return totalFixed;
  }

  async fixDependencyIssues(dependencyCheck) {
    try {
      if (dependencyCheck.status === 'missing') {
        this.log('Installing dependencies...');
        const installResult = await this.runCommand('npm install', { silent: true });
        
        if (installResult.success) {
          this.log('✅ Dependencies installed successfully');
          return true;
        } else {
          this.log('❌ Failed to install dependencies', 'ERROR');
          return false;
        }
      }
      
      if (dependencyCheck.status === 'conflict') {
        this.log('Resolving dependency conflicts...');
        
        // Remove node_modules and package-lock.json
        await this.runCommand('rm -rf node_modules package-lock.json', { silent: true });
        
        // Clear npm cache
        await this.runCommand('npm cache clean --force', { silent: true });
        
        // Reinstall dependencies
        const installResult = await this.runCommand('npm install', { silent: true });
        
        if (installResult.success) {
          this.log('✅ Dependency conflicts resolved');
          return true;
        } else {
          this.log('❌ Failed to resolve dependency conflicts', 'ERROR');
          return false;
        }
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing dependency issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixBuildIssues(buildCheck) {
    try {
      if (buildCheck.status === 'failed') {
        this.log('Attempting to fix build issues...');
        
        // Check for common build issues
        const lintResult = await this.runCommand('npm run lint', { silent: true });
        if (!lintResult.success) {
          this.log('Linting issues detected, attempting auto-fix...');
          await this.runCommand('npm run fix:all', { silent: true });
        }
        
        // Try building again
        const rebuildResult = await this.runCommand('npm run build', { silent: true });
        
        if (rebuildResult.success) {
          this.log('✅ Build issues fixed');
          return true;
        } else {
          this.log('❌ Build issues persist', 'ERROR');
          return false;
        }
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing build issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixTestIssues(testCheck) {
    try {
      if (testCheck.status === 'failed') {
        this.log('Attempting to fix test issues...');
        
        // Check if tests are properly configured
        const testConfigCheck = await this.runCommand('npm run test -- --help', { silent: true });
        
        if (testConfigCheck.success) {
          this.log('Test configuration appears correct, running tests again...');
          const retryResult = await this.runCommand('npm test', { silent: true });
          
          if (retryResult.success) {
            this.log('✅ Test issues resolved');
            return true;
          }
        }
        
        this.log('❌ Test issues persist - manual review required', 'WARN');
        return false;
      }
      
      return false;
      
    } catch (error) {
      this.log(`Error fixing test issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport(healthChecks, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        overallHealth: this.calculateOverallHealth(healthChecks),
        totalIssues: this.countTotalIssues(healthChecks),
        fixedIssues: fixedCount,
        remainingIssues: this.countTotalIssues(healthChecks) - fixedCount
      },
      healthChecks,
      buildIssues: this.buildIssues,
      buildSuccesses: this.buildSuccesses,
      recommendations: this.generateBuildRecommendations(healthChecks)
    };
    
    // Save report
    fs.writeFileSync(this.buildReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Build health report generated: ${fixedCount} issues fixed`);
    return report;
  }

  calculateOverallHealth(healthChecks) {
    const checks = Object.values(healthChecks);
    const healthyChecks = checks.filter(check => 
      check.status === 'healthy' || check.status === 'success'
    );
    
    return Math.round((healthyChecks.length / checks.length) * 100);
  }

  countTotalIssues(healthChecks) {
    return Object.values(healthChecks).filter(check => 
      check.status !== 'healthy' && check.status !== 'success'
    ).length;
  }

  generateBuildRecommendations(healthChecks) {
    const recommendations = [];
    
    // Dependency recommendations
    if (healthChecks.dependencies.status !== 'healthy') {
      recommendations.push({
        category: 'dependencies',
        priority: 'high',
        message: 'Dependency issues detected',
        action: 'Review and fix dependency conflicts'
      });
    }
    
    // Build recommendations
    if (healthChecks.build.status !== 'success') {
      recommendations.push({
        category: 'build',
        priority: 'high',
        message: 'Build process issues detected',
        action: 'Review build configuration and fix errors'
      });
    }
    
    // Test recommendations
    if (healthChecks.tests.status !== 'success') {
      recommendations.push({
        category: 'tests',
        priority: 'medium',
        message: 'Test suite issues detected',
        action: 'Review test configuration and fix failing tests'
      });
    }
    
    // Performance recommendations
    if (healthChecks.performance.status === 'success' && 
        healthChecks.performance.details?.performance === 'slow') {
      recommendations.push({
        category: 'performance',
        priority: 'medium',
        message: 'Build performance is slow',
        action: 'Optimize build configuration and dependencies'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Build Health Automation');
    
    try {
      // Check build health
      const healthChecks = await this.checkBuildHealth();
      
      // Log initial status
      this.log(`📊 Build health status:`);
      this.log(`  - Dependencies: ${healthChecks.dependencies.status}`);
      this.log(`  - Build: ${healthChecks.build.status}`);
      this.log(`  - Tests: ${healthChecks.tests.status}`);
      this.log(`  - Bundle: ${healthChecks.bundle.status}`);
      this.log(`  - Performance: ${healthChecks.performance.status}`);
      
      // Check if all systems are healthy
      const allHealthy = Object.values(healthChecks).every(check => 
        check.status === 'healthy' || check.status === 'success'
      );
      
      if (allHealthy) {
        this.log('✅ All build systems are healthy!');
        return;
      }
      
      // Fix issues
      const fixedCount = await this.fixBuildIssues(healthChecks);
      
      // Generate final report
      const report = await this.generateReport(healthChecks, fixedCount);
      
      this.log(`✅ Build health automation completed! Fixed ${fixedCount} issues`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} build recommendations:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in build health automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the build health automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new BuildHealthAutomation();
  automation.run().catch(console.error);
}

export default BuildHealthAutomation;