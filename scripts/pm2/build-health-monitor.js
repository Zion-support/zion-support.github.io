#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class BuildHealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/build-health-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/build-health-report.json');
    this.issuesFixed = 0;
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // console.error('Failed to write to log file:', error.message);
    }
  }

  async checkDependencies() {
    try {
      this.log('📦 Checking dependencies...');
      
      // Check if package-lock.json is outdated
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLockStats = fs.statSync(packageLockPath);
        const packageJsonStats = fs.statSync(path.join(this.projectRoot, 'package.json'));
        
        if (packageLockStats.mtime < packageJsonStats.mtime) {
          this.log('⚠️  package-lock.json is outdated, updating dependencies...');
          execSync('npm install', { cwd: this.projectRoot, stdio: 'pipe' });
          this.issuesFixed++;
          return { status: 'fixed', message: 'Dependencies updated' };
        }
      }

      // Check for missing node_modules
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('⚠️  node_modules missing, installing dependencies...');
        execSync('npm install', { cwd: this.projectRoot, stdio: 'pipe' });
        this.issuesFixed++;
        return { status: 'fixed', message: 'Dependencies installed' };
      }

      return { status: 'ok', message: 'Dependencies are up to date' };
    } catch (error) {
      this.log(`❌ Error checking dependencies: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }

  async checkConfigurationFiles() {
    try {
      this.log('⚙️  Checking configuration files...');
      
      const issues = [];
      let hasChanges = false;

      // Check tsconfig.json
      const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsconfigPath)) {
        try {
          const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
          
          // Fix common tsconfig issues
          if (!tsconfig.compilerOptions) {
            tsconfig.compilerOptions = {};
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.target) {
            tsconfig.compilerOptions.target = 'ES2020';
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.lib) {
            tsconfig.compilerOptions.lib = ['dom', 'dom.iterable', 'es6'];
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.allowJs) {
            tsconfig.compilerOptions.allowJs = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.skipLibCheck) {
            tsconfig.compilerOptions.skipLibCheck = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.esModuleInterop) {
            tsconfig.compilerOptions.esModuleInterop = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.allowSyntheticDefaultImports) {
            tsconfig.compilerOptions.allowSyntheticDefaultImports = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.strict) {
            tsconfig.compilerOptions.strict = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.forceConsistentCasingInFileNames) {
            tsconfig.compilerOptions.forceConsistentCasingInFileNames = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.noFallthroughCasesInSwitch) {
            tsconfig.compilerOptions.noFallthroughCasesInSwitch = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.module) {
            tsconfig.compilerOptions.module = 'esnext';
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.moduleResolution) {
            tsconfig.compilerOptions.moduleResolution = 'node';
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.resolveJsonModule) {
            tsconfig.compilerOptions.resolveJsonModule = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.isolatedModules) {
            tsconfig.compilerOptions.isolatedModules = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.noEmit) {
            tsconfig.compilerOptions.noEmit = true;
            hasChanges = true;
          }
          
          if (!tsconfig.compilerOptions.jsx) {
            tsconfig.compilerOptions.jsx = 'react-jsx';
            hasChanges = true;
          }

          if (hasChanges) {
            fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
            this.issuesFixed++;
            this.log('✅ Fixed tsconfig.json configuration issues');
          }
        } catch (error) {
          issues.push(`Invalid tsconfig.json: ${error.message}`);
        }
      }

      // Check vite.config.ts
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        try {
          const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
          
          // Check for common vite config issues
          if (!viteConfig.includes('@vitejs/plugin-react')) {
            this.log('⚠️  Vite React plugin not found in config');
            issues.push('Missing Vite React plugin');
          }
          
          if (!viteConfig.includes('react()')) {
            this.log('⚠️  React plugin not configured in Vite');
            issues.push('React plugin not configured');
          }
        } catch (error) {
          issues.push(`Error reading vite.config.ts: ${error.message}`);
        }
      }

      // Check for conflicting config files
      const conflictingFiles = [
        'tsconfig.js',
        'tsconfig.ts',
        'vite.config.js',
        'vite.config.cjs'
      ];

      conflictingFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          this.log(`⚠️  Conflicting config file found: ${file}`);
          issues.push(`Conflicting config file: ${file}`);
        }
      });

      return { status: hasChanges ? 'fixed' : 'ok', issues, hasChanges };
    } catch (error) {
      this.log(`❌ Error checking configuration files: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }

  async checkBuildScripts() {
    try {
      this.log('🔨 Checking build scripts...');
      
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        return { status: 'error', message: 'package.json not found' };
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const scripts = packageJson.scripts || {};
      
      const requiredScripts = ['dev', 'build', 'start'];
      const missingScripts = requiredScripts.filter(script => !scripts[script]);
      
      if (missingScripts.length > 0) {
        this.log(`⚠️  Missing required scripts: ${missingScripts.join(', ')}`);
        return { status: 'warning', message: `Missing scripts: ${missingScripts.join(', ')}` };
      }

      return { status: 'ok', message: 'All required build scripts present' };
    } catch (error) {
      this.log(`❌ Error checking build scripts: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }

  async testBuild() {
    try {
      this.log('🧪 Testing build process...');
      
      // Try to run type check
      try {
        execSync('npx tsc --noEmit', { cwd: this.projectRoot, stdio: 'pipe', timeout: 30000 });
        this.log('✅ TypeScript compilation successful');
      } catch (error) {
        this.log(`⚠️  TypeScript compilation failed: ${error.message}`);
        return { status: 'error', message: 'TypeScript compilation failed' };
      }

      // Try to run lint
      try {
        execSync('npx eslint . --config .eslintrc.cjs', { cwd: this.projectRoot, stdio: 'pipe', timeout: 30000 });
        this.log('✅ ESLint check successful');
      } catch (error) {
        this.log(`⚠️  ESLint check failed: ${error.message}`);
        return { status: 'warning', message: 'ESLint check failed' };
      }

      return { status: 'ok', message: 'Build tests passed' };
    } catch (error) {
      this.log(`❌ Error testing build: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }

  async fixCommonIssues() {
    try {
      this.log('🔧 Fixing common build issues...');
      
      let fixesApplied = 0;

      // Fix ESLint config conflicts
      const eslintConfigJs = path.join(this.projectRoot, 'eslint.config.js');
      const eslintrcCjs = path.join(this.projectRoot, '.eslintrc.cjs');
      
      if (fs.existsSync(eslintConfigJs) && fs.existsSync(eslintrcCjs)) {
        this.log('⚠️  Multiple ESLint configs found, removing conflicting one...');
        fs.renameSync(eslintConfigJs, eslintConfigJs + '.backup');
        fixesApplied++;
      }

      // Fix TypeScript config conflicts
      const tsconfigJs = path.join(this.projectRoot, 'tsconfig.js');
      const tsconfigJson = path.join(this.projectRoot, 'tsconfig.json');
      
      if (fs.existsSync(tsconfigJs) && fs.existsSync(tsconfigJson)) {
        this.log('⚠️  Multiple TypeScript configs found, removing conflicting one...');
        fs.renameSync(tsconfigJs, tsconfigJs + '.backup');
        fixesApplied++;
      }

      // Fix Vite config conflicts
      const viteConfigJs = path.join(this.projectRoot, 'vite.config.js');
      const viteConfigTs = path.join(this.projectRoot, 'vite.config.ts');
      
      if (fs.existsSync(viteConfigJs) && fs.existsSync(viteConfigTs)) {
        this.log('⚠️  Multiple Vite configs found, removing conflicting one...');
        fs.renameSync(viteConfigJs, viteConfigJs + '.backup');
        fixesApplied++;
      }

      if (fixesApplied > 0) {
        this.issuesFixed += fixesApplied;
        this.log(`✅ Applied ${fixesApplied} configuration fixes`);
        return { status: 'fixed', message: `Applied ${fixesApplied} fixes` };
      }

      return { status: 'ok', message: 'No common issues found' };
    } catch (error) {
      this.log(`❌ Error fixing common issues: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: Object.keys(results).length,
        issuesFound: Object.values(results).filter(r => r.status !== 'ok').length,
        issuesFixed: this.issuesFixed
      },
      results,
      recommendations: []
    };

    // Generate recommendations based on results
    if (results.dependencies.status === 'error') {
      report.recommendations.push({
        priority: 'high',
        message: 'Dependency issues detected',
        action: 'Run npm install to resolve dependency problems'
      });
    }

    if (results.configuration.status === 'error') {
      report.recommendations.push({
        priority: 'high',
        message: 'Configuration file issues detected',
        action: 'Review and fix configuration files'
      });
    }

    if (results.buildScripts.status === 'warning') {
      report.recommendations.push({
        priority: 'medium',
        message: 'Missing build scripts',
        action: 'Add missing build scripts to package.json'
      });
    }

    if (results.buildTest.status === 'error') {
      report.recommendations.push({
        priority: 'high',
        message: 'Build tests failing',
        action: 'Fix compilation and linting errors'
      });
    }

    return report;
  }

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting Build Health Monitor...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Run all checks
      const results = {
        dependencies: await this.checkDependencies(),
        configuration: await this.checkConfigurationFiles(),
        buildScripts: await this.checkBuildScripts(),
        buildTest: await this.testBuild(),
        commonFixes: await this.fixCommonIssues()
      };

      // Generate and save report
      const report = await this.generateReport(results);
      await this.saveReport(report);

      const duration = Date.now() - this.startTime;

      // Log summary
      this.log('\n📊 Build Health Report Summary:');
      this.log(`Total checks: ${report.summary.totalChecks}`);
      this.log(`Issues found: ${report.summary.issuesFound}`);
      this.log(`Issues fixed: ${report.summary.issuesFixed}`);
      this.log(`Duration: ${duration}ms`);

      if (report.summary.issuesFound > 0) {
        this.log('\n🚨 Issues by category:');
        Object.entries(results).forEach(([category, result]) => {
          const status = result.status === 'ok' ? '✅' : result.status === 'fixed' ? '🔧' : '❌';
          this.log(`  ${status} ${category}: ${result.status} - ${result.message}`);
        });

        if (report.recommendations.length > 0) {
          this.log('\n💡 Recommendations:');
          report.recommendations.forEach(rec => {
            this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
            this.log(`    Action: ${rec.action}`);
          });
        }
      } else {
        this.log('✨ Excellent! No build health issues found!');
      }

      if (this.issuesFixed > 0) {
        this.log(`\n✅ Fixed ${this.issuesFixed} build health issues!`);
        
        // Try to commit the fixes
        try {
          execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
          execSync('git commit -m "🔧 Auto-fix build health issues"', { cwd: this.projectRoot, stdio: 'pipe' });
          this.log('✅ Changes committed to git');
        } catch (error) {
          this.log(`⚠️  Could not commit changes: ${error.message}`);
        }
      }

    } catch (error) {
      this.log(`❌ Error running build health monitor: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the build health monitor
const monitor = new BuildHealthMonitor();
monitor.run().catch(error => {
  process.exit(1);
});
