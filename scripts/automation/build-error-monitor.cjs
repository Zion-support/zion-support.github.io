#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'build-error-monitor-report.json');
    this.errors = [];
    this.fixes = [];
    this.startTime = Date.now();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  async run() {
    this.log('Starting Build Error Monitor...', 'info');
    
    try {
      // Check current build status
      await this.checkBuildStatus();
      
      // If build fails, attempt to fix
      if (this.errors.length > 0) {
        await this.fixBuildErrors();
      }
      
      // Generate report
      await this.generateReport();
      
      this.log('Build Error Monitor completed', 'success');
    } catch (error) {
      this.log(`Error in Build Error Monitor: ${error.message}`, 'error');
      await this.generateReport();
      process.exit(1);
    }
  }

  async checkBuildStatus() {
    this.log('Checking build status...', 'info');
    
    try {
      const buildResult = execSync('npm run build', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 300000 // 5 minutes
      });
      
      this.log('Build check passed', 'success');
    } catch (error) {
      this.log('Build errors detected', 'warn');
      this.errors.push({
        type: 'build',
        message: error.stdout || error.stderr,
        timestamp: Date.now()
      });
    }
  }

  async fixBuildErrors() {
    this.log('Fixing build errors...', 'info');
    
    // Fix common build issues
    
    // 1. Clear build cache
    try {
      execSync('rm -rf .next out dist build', { cwd: this.projectRoot });
      this.fixes.push({
        type: 'cache',
        description: 'Cleared build cache',
        timestamp: Date.now()
      });
      this.log('Cleared build cache', 'info');
    } catch (error) {
      this.log('Failed to clear build cache', 'warn');
    }

    // 2. Reinstall dependencies
    try {
      execSync('rm -rf node_modules package-lock.json', { cwd: this.projectRoot });
      execSync('npm install', { cwd: this.projectRoot, stdio: 'inherit' });
      this.fixes.push({
        type: 'dependencies',
        description: 'Reinstalled dependencies',
        timestamp: Date.now()
      });
      this.log('Reinstalled dependencies', 'info');
    } catch (error) {
      this.log('Failed to reinstall dependencies', 'warn');
    }

    // 3. Fix TypeScript configuration
    await this.fixTypeScriptConfig();

    // 4. Fix Next.js configuration
    await this.fixNextConfig();

    // 5. Try build again
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'inherit',
        timeout: 300000
      });
      this.log('Build fixed successfully', 'success');
    } catch (error) {
      this.log('Build still failing after fixes', 'error');
    }
  }

  async fixTypeScriptConfig() {
    const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
    if (fs.existsSync(tsconfigPath)) {
      try {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        let modified = false;

        // Ensure proper TypeScript configuration for Next.js
        if (!tsconfig.compilerOptions) {
          tsconfig.compilerOptions = {};
          modified = true;
        }

        // Set required options for Next.js
        const requiredOptions = {
          target: 'es5',
          lib: ['dom', 'dom.iterable', 'es6'],
          allowJs: true,
          skipLibCheck: true,
          strict: false,
          forceConsistentCasingInFileNames: true,
          noEmit: true,
          esModuleInterop: true,
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: 'preserve',
          incremental: true
        };

        Object.entries(requiredOptions).forEach(([key, value]) => {
          if (tsconfig.compilerOptions[key] !== value) {
            tsconfig.compilerOptions[key] = value;
            modified = true;
          }
        });

        if (modified) {
          fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
          this.fixes.push({
            type: 'config',
            description: 'Fixed TypeScript configuration',
            timestamp: Date.now()
          });
          this.log('Fixed TypeScript configuration', 'info');
        }
      } catch (error) {
        this.log('Failed to fix TypeScript configuration', 'warn');
      }
    }
  }

  async fixNextConfig() {
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      try {
        let config = fs.readFileSync(nextConfigPath, 'utf8');
        let modified = false;

        // Add common Next.js configurations
        if (!config.includes('experimental')) {
          config = config.replace(
            'module.exports = {',
            `module.exports = {
  experimental: {
    esmExternals: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },`
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(nextConfigPath, config);
          this.fixes.push({
            type: 'config',
            description: 'Fixed Next.js configuration',
            timestamp: Date.now()
          });
          this.log('Fixed Next.js configuration', 'info');
        }
      } catch (error) {
        this.log('Failed to fix Next.js configuration', 'warn');
      }
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: duration,
      errors: this.errors,
      fixes: this.fixes,
      summary: {
        totalErrors: this.errors.length,
        totalFixes: this.fixes.length,
        success: this.errors.length === 0
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${this.reportFile}`, 'info');
    this.log(`Total errors: ${this.errors.length}`, 'info');
    this.log(`Total fixes: ${this.fixes.length}`, 'info');
    this.log(`Duration: ${duration}ms`, 'info');
  }
}

// Run the build error monitor
const monitor = new BuildErrorMonitor();
monitor.run().catch(console.error);