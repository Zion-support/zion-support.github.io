#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Starting Health Check...');

class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.startTime = new Date();
    this.results = {
      dependencies: { success: false, issues: [], fixes: [] },
      configuration: { success: false, issues: [], fixes: [] },
      typescript: { success: false, issues: [], fixes: [] },
      linting: { success: false, issues: [], fixes: [] },
      build: { success: false, issues: [], fixes: [] },
      tests: { success: false, issues: [], fixes: [] }
    };
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);

    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 30000,
        ...options
      });
      
      this.log(`✅ ${description} - Success`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout?.toString() || '' };
    }
  }

  async checkDependencies() {
    this.log('\n📦 CHECKING DEPENDENCIES');
    
    try {
      const issues = [];
      const fixes = [];

      // Check if package.json exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        issues.push('package.json not found');
        fixes.push('Create package.json file');
        this.results.dependencies = { success: false, issues, fixes };
        return;
      }

      // Check if node_modules exists
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        issues.push('node_modules directory missing');
        fixes.push('Run npm install');
      }

      // Check for package-lock.json
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (!fs.existsSync(packageLockPath)) {
        issues.push('package-lock.json missing');
        fixes.push('Run npm install to generate package-lock.json');
      }

      // Check for outdated dependencies
      const outdatedResult = await this.runCommand('npm outdated', 'Check for outdated dependencies');
      if (outdatedResult.success && outdatedResult.output.trim()) {
        issues.push('Outdated dependencies found');
        fixes.push('Run npm update to update dependencies');
      }

      this.results.dependencies = {
        success: issues.length === 0,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, 'ERROR');
      this.results.dependencies = {
        success: false,
        issues: ['Failed to check dependencies'],
        fixes: []
      };
    }
  }

  async checkConfiguration() {
    this.log('\n⚙️ CHECKING CONFIGURATION');
    
    try {
      const issues = [];
      const fixes = [];

      const configFiles = [
        { file: 'package.json', required: true },
        { file: 'next.config.js', required: false },
        { file: 'tsconfig.json', required: false },
        { file: 'tailwind.config.js', required: false },
        { file: '.env.local', required: false },
        { file: '.gitignore', required: true }
      ];

      for (const { file, required } of configFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (!fs.existsSync(filePath)) {
          if (required) {
            issues.push(`Missing required configuration file: ${file}`);
            fixes.push(`Create ${file}`);
          } else {
            this.log(`ℹ️ Optional configuration file not found: ${file}`, 'INFO');
          }
        }
      }

      this.results.configuration = {
        success: issues.length === 0,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check configuration: ${error.message}`, 'ERROR');
      this.results.configuration = {
        success: false,
        issues: ['Failed to check configuration'],
        fixes: []
      };
    }
  }

  async checkTypeScript() {
    this.log('\n🔷 CHECKING TYPESCRIPT');
    
    try {
      const issues = [];
      const fixes = [];

      const tsResult = await this.runCommand('npm run type-check', 'TypeScript Type Checking');
      
      if (!tsResult.success) {
        issues.push('TypeScript compilation errors found');
        fixes.push('Fix TypeScript errors and run npm run type-check');
      }

      this.results.typescript = {
        success: tsResult.success,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check TypeScript: ${error.message}`, 'ERROR');
      this.results.typescript = {
        success: false,
        issues: ['Failed to check TypeScript'],
        fixes: []
      };
    }
  }

  async checkLinting() {
    this.log('\n🔍 CHECKING LINTING');
    
    try {
      const issues = [];
      const fixes = [];

      const lintResult = await this.runCommand('npm run lint:check', 'ESLint Check');
      
      if (!lintResult.success) {
        issues.push('ESLint errors found');
        fixes.push('Run npm run lint:fix to fix linting issues');
      }

      this.results.linting = {
        success: lintResult.success,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check linting: ${error.message}`, 'ERROR');
      this.results.linting = {
        success: false,
        issues: ['Failed to check linting'],
        fixes: []
      };
    }
  }

  async checkBuild() {
    this.log('\n🏗️ CHECKING BUILD');
    
    try {
      const issues = [];
      const fixes = [];

      const buildResult = await this.runCommand('npm run build', 'Application Build');
      
      if (!buildResult.success) {
        issues.push('Build failed');
        fixes.push('Fix build errors and run npm run build');
      }

      this.results.build = {
        success: buildResult.success,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check build: ${error.message}`, 'ERROR');
      this.results.build = {
        success: false,
        issues: ['Failed to check build'],
        fixes: []
      };
    }
  }

  async checkTests() {
    this.log('\n🧪 CHECKING TESTS');
    
    try {
      const issues = [];
      const fixes = [];

      const testResult = await this.runCommand('npm run test:smoke', 'Smoke Tests');
      
      if (!testResult.success) {
        issues.push('Tests failed');
        fixes.push('Fix test failures and run npm run test:smoke');
      }

      this.results.tests = {
        success: testResult.success,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check tests: ${error.message}`, 'ERROR');
      this.results.tests = {
        success: false,
        issues: ['Failed to check tests'],
        fixes: []
      };
    }
  }

  async checkDiskSpace() {
    this.log('\n💾 CHECKING DISK SPACE');
    
    try {
      const diskUsage = await this.runCommand('df -h', 'Check Disk Usage');
      
      if (diskUsage.success) {
        this.log('✅ Disk space check completed');
      } else {
        this.log('⚠️ Could not check disk space', 'WARNING');
      }
    } catch (error) {
      this.log(`❌ Failed to check disk space: ${error.message}`, 'ERROR');
    }
  }

  async checkMemoryUsage() {
    this.log('\n🧠 CHECKING MEMORY USAGE');
    
    try {
      const memoryUsage = await this.runCommand('free -h', 'Check Memory Usage');
      
      if (memoryUsage.success) {
        this.log('✅ Memory usage check completed');
      } else {
        this.log('⚠️ Could not check memory usage', 'WARNING');
      }
    } catch (error) {
      this.log(`❌ Failed to check memory usage: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 HEALTH CHECK REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log('');

    let totalIssues = 0;
    let totalFixes = 0;
    let passedChecks = 0;

    Object.entries(this.results).forEach(([check, result]) => {
      const status = result.success ? '✅' : '❌';
      const issuesCount = result.issues?.length || 0;
      const fixesCount = result.fixes?.length || 0;
      
      totalIssues += issuesCount;
      totalFixes += fixesCount;
      if (result.success) passedChecks++;

      this.log(`${status} ${check}: ${issuesCount} issues, ${fixesCount} fixes`);
      
      if (issuesCount > 0) {
        result.issues.forEach(issue => this.log(`  - ${issue}`, 'WARNING'));
      }
      if (fixesCount > 0) {
        result.fixes.forEach(fix => this.log(`  + ${fix}`, 'INFO'));
      }
    });

    this.log('\n📈 SUMMARY');
    this.log(`Passed Checks: ${passedChecks}/${Object.keys(this.results).length}`);
    this.log(`Total Issues: ${totalIssues}`);
    this.log(`Total Fixes: ${totalFixes}`);

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        passedChecks,
        totalChecks: Object.keys(this.results).length,
        totalIssues,
        totalFixes,
        healthScore: Math.round((passedChecks / Object.keys(this.results).length) * 100)
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`\n📄 Detailed report saved to ${reportPath}`);

    if (totalIssues === 0) {
      this.log('\n🎉 All health checks passed! Your application is healthy.', 'SUCCESS');
    } else {
      this.log(`\n⚠️ Found ${totalIssues} issues that need attention.`, 'WARNING');
    }
  }

  async run() {
    this.log('🚀 Starting Health Check');
    this.log('='.repeat(60));
    
    try {
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkTypeScript();
      await this.checkLinting();
      await this.checkBuild();
      await this.checkTests();
      await this.checkDiskSpace();
      await this.checkMemoryUsage();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the health checker
if (require.main === module) {
  const checker = new HealthChecker();
  checker.run().catch(console.error);
}

module.exports = HealthChecker;