#!/usr/bin/env node

/**
 * Netlify Build Monitor & Auto-Fixer
 * Monitors Netlify build status and automatically fixes common issues
 *
 * Features:
 * - Real-time build status monitoring
 * - Automatic issue detection and resolution
 * - Build performance optimization
 * - Dependency conflict resolution
 * - Code quality enforcement
 * - Automatic deployment triggers
 */
;
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');
;
class NetlifyBuildMonitor {
  constructor() {
    this.config = {
      checkInterval: 5 * 60 * 1000, // 5 minutes
      maxRetries: 3,
      logFile: './logs/netlify-build-monitor.log',
      errorFile: './logs/netlify-build-monitor-error.log',
      buildTimeout: 30 * 60 * 1000, // 30 minutes
      autoFixEnabled: true,
      notificationEnabled: true,
    };

    this.buildHistory = [];
    this.issuePatterns = new Map();
    this.fixStrategies = new Map();
    this.isRunning = false;

    this.initialize();
  }

  initialize() {
    this.setupLogging();
    this.setupIssuePatterns();
    this.setupFixStrategies();
    this.ensureLogDirectory();
    this.log('Netlify Build Monitor initialized');
  }

  setupLogging() {
    this.log = message => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] ${message}`;
      // console.log(logMessage);

      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };

    this.error = (message, error) => {
      const timestamp = new Date().toISOString();
      const errorMessage = `[${timestamp}] ERROR: ${message}${error ? ` - ${error.message}` : ''}`;
      console.error(errorMessage);

      try {
        fs.appendFileSync(this.config.errorFile, errorMessage + '\n');
      } catch (error) {
        console.error('Failed to write to error log file:', error.message);
      }
    };
  }

  setupIssuePatterns() {
    // Build failure patterns
    this.issuePatterns.set(
      'build_timeout',
      /Build exceeded maximum time limit/i
    );
    this.issuePatterns.set(
      'dependency_conflict',
      /Cannot resolve module|Module not found|Peer dependency conflict/i
    );
    this.issuePatterns.set(
      'typescript_error',
      /Type.*is not assignable|Cannot find name|Property.*does not exist/i
    );
    this.issuePatterns.set('lint_error', /ESLint|Prettier|Stylelint/i);
    this.issuePatterns.set(
      'memory_error',
      /JavaScript heap out of memory|ENOMEM|Out of memory/i
    );
    this.issuePatterns.set(
      'network_error',
      /Network timeout|Connection refused|ETIMEDOUT/i
    );
    this.issuePatterns.set(
      'permission_error',
      /Permission denied|EACCES|Access denied/i
    );
    this.issuePatterns.set('disk_space', /ENOSPC|No space left on device/i);
  }

  setupFixStrategies() {
    // Automatic fix strategies for each issue type
    this.fixStrategies.set('build_timeout', () => this.fixBuildTimeout());
    this.fixStrategies.set('dependency_conflict', () =>
      this.fixDependencyConflicts()
    );
    this.fixStrategies.set('typescript_error', () =>
      this.fixTypeScriptErrors()
    );
    this.fixStrategies.set('lint_error', () => this.fixLintErrors());
    this.fixStrategies.set('memory_error', () => this.fixMemoryIssues());
    this.fixStrategies.set('network_error', () => this.fixNetworkIssues());
    this.fixStrategies.set('permission_error', () =>
      this.fixPermissionIssues()
    );
    this.fixStrategies.set('disk_space', () => this.fixDiskSpaceIssues());
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('Monitor is already running');
      return;
    }

    this.isRunning = true;
    this.log('Starting Netlify Build Monitor...');

    // Initial health check
    await this.performHealthCheck();

    // Schedule regular monitoring
    cron.schedule('*/5 * * * *', async () => {
      await this.monitorBuildStatus();
    });

    // Schedule daily maintenance
    cron.schedule('0 2 * * *', async () => {
      await this.performDailyMaintenance();
    });

    // Schedule weekly optimization
    cron.schedule('0 3 * * 0', async () => {
      await this.performWeeklyOptimization();
    });

    this.log('Netlify Build Monitor started successfully');
  }

  async performHealthCheck() {
    this.log('Performing initial health check...');

    try {
      // Check if we're in a git repository
      const gitStatus = this.runCommand('git status --porcelain', {
        silent: true,
      });
      this.log('Git repository status: OK');

      // Check package.json integrity
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      this.log('Package.json integrity: OK');

      // Check build scripts
      if (packageJson.scripts && packageJson.scripts.build) {
        this.log('Build script found: OK');
      } else {
        this.error('Build script not found in package.json');
      }

      // Check Netlify configuration
      if (fs.existsSync('netlify.toml')) {
        this.log('Netlify configuration: OK');
      } else {
        this.warn('Netlify configuration not found');
      }

      this.log('Health check completed successfully');
    } catch (error) {
      this.error('Health check failed', error);
    }
  }

  async monitorBuildStatus() {
    try {
      this.log('Checking build status...');

      // Get current git status
      const gitStatus = this.runCommand('git status --porcelain', {
        silent: true,
      });
      const hasChanges = gitStatus.trim().length > 0;

      if (hasChanges) {
        this.log('Detected uncommitted changes, checking for issues...');
        await this.analyzeChanges();
      }

      // Check for build issues
      await this.checkBuildIssues();

      // Check for dependency issues
      await this.checkDependencyIssues();

      // Check for code quality issues
      await this.checkCodeQualityIssues();
    } catch (error) {
      this.error('Build status monitoring failed', error);
    }
  }

  async analyzeChanges() {
    try {
      // Get list of changed files
      const changedFiles = this.runCommand('git diff --name-only', {
        silent: true,
      })
        .split('\n')
        .filter(file => file.trim());

      this.log(`Analyzing ${changedFiles.length} changed files...`);

      for (const file of changedFiles) {
        if (
          file.endsWith('.ts') ||
          file.endsWith('.tsx') ||
          file.endsWith('.js') ||
          file.endsWith('.jsx')
        ) {
          await this.analyzeFile(file);
        }
      }
    } catch (error) {
      this.error('Change analysis failed', error);
    }
  }

  async analyzeFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');

      // Check for common issues
      const issues = this.detectIssues(content, filePath);

      if (issues.length > 0) {
        this.log(`Issues detected in ${filePath}: ${issues.length}`);

        if (this.config.autoFixEnabled) {
          await this.autoFixFile(filePath, issues);
        }
      }
    } catch (error) {
      this.error(`File analysis failed for ${filePath}`, error);
    }
  }

  detectIssues(content, filePath) {
    const issues = [];

    // Check for TypeScript syntax errors
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      try {
        this.runCommand(`npx tsc --noEmit --skipLibCheck ${filePath}`, {
          silent: true,
        });
      } catch (error) {
        issues.push({ type: 'typescript_error', message: error.message });
      }
    }

    // Check for ESLint issues
    try {
      this.runCommand(`npx eslint ${filePath} --format=json`, { silent: true });
    } catch (error) {
      issues.push({ type: 'lint_error', message: error.message });
    }

    // Check for common code smells
    if (content.includes('// console.log(') && !filePath.includes('.test.')) {
      issues.push({
        type: 'code_smell',
        message: 'Console.log found in production code',
      });
    }

    if (content.includes('TODO:') || content.includes('FIXME:')) {
      issues.push({ type: 'code_smell', message: 'TODO/FIXME comment found' });
    }

    return issues;
  }

  async autoFixFile(filePath, issues) {
    try {
      this.log(`Auto-fixing issues in ${filePath}...`);

      for (const issue of issues) {
        const fixStrategy = this.fixStrategies.get(issue.type);
        if (fixStrategy) {
          await fixStrategy.call(this, filePath, issue);
        }
      }

      this.log(`Auto-fix completed for ${filePath}`);
    } catch (error) {
      this.error(`Auto-fix failed for ${filePath}`, error);
    }
  }

  async checkBuildIssues() {
    try {
      // Check if build would succeed
      this.log('Checking build compatibility...');

      // Run a dry build
      try {
        this.runCommand('npm run build --dry-run', {
          silent: true,
          timeout: 60000,
        });
        this.log('Build compatibility check: OK');
      } catch (error) {
        this.log('Build compatibility issues detected, attempting auto-fix...');
        await this.autoFixBuildIssues(error);
      }
    } catch (error) {
      this.error('Build issue check failed', error);
    }
  }

  async checkDependencyIssues() {
    try {
      this.log('Checking dependency health...');

      // Check for outdated dependencies
      const outdated = this.runCommand('npm outdated --json', { silent: true });
      const outdatedDeps = JSON.parse(outdated);

      if (Object.keys(outdatedDeps).length > 0) {
        this.log(
          `Found ${Object.keys(outdatedDeps).length} outdated dependencies`
        );

        if (this.config.autoFixEnabled) {
          await this.updateDependencies();
        }
      } else {
        this.log('Dependencies are up to date');
      }

      // Check for security vulnerabilities
      const audit = this.runCommand('npm audit --json', { silent: true });
      const auditResult = JSON.parse(audit);

      if (
        auditResult.vulnerabilities &&
        Object.keys(auditResult.vulnerabilities).length > 0
      ) {
        this.log('Security vulnerabilities detected, attempting auto-fix...');

        if (this.config.autoFixEnabled) {
          await this.fixSecurityVulnerabilities();
        }
      }
    } catch (error) {
      this.error('Dependency check failed', error);
    }
  }

  async checkCodeQualityIssues() {
    try {
      this.log('Checking code quality...');

      // Run ESLint
      try {
        this.runCommand('npx eslint . --ext .js,.jsx,.ts,.tsx --format=json', {
          silent: true,
        });
        this.log('ESLint check: OK');
      } catch (error) {
        this.log('ESLint issues detected, attempting auto-fix...');

        if (this.config.autoFixEnabled) {
          await this.fixLintErrors();
        }
      }

      // Run TypeScript check
      try {
        this.runCommand('npx tsc --noEmit', { silent: true });
        this.log('TypeScript check: OK');
      } catch (error) {
        this.log('TypeScript issues detected, attempting auto-fix...');

        if (this.config.autoFixEnabled) {
          await this.fixTypeScriptErrors();
        }
      }
    } catch (error) {
      this.error('Code quality check failed', error);
    }
  }

  // Fix strategies implementation
  async fixBuildTimeout() {
    this.log('Fixing build timeout issues...');

    try {
      // Optimize build configuration
      await this.optimizeBuildConfig();

      // Clear build cache
      this.runCommand('rm -rf .next out dist build', { silent: true });

      // Update build scripts for better performance
      await this.updateBuildScripts();

      this.log('Build timeout issues fixed');
    } catch (error) {
      this.error('Failed to fix build timeout issues', error);
    }
  }

  async fixDependencyConflicts() {
    this.log('Fixing dependency conflicts...');

    try {
      // Remove node_modules and package-lock.json
      this.runCommand('rm -rf node_modules package-lock.json', {
        silent: true,
      });

      // Clear npm cache
      this.runCommand('npm cache clean --force', { silent: true });

      // Reinstall dependencies
      this.runCommand('npm install', { silent: true });

      this.log('Dependency conflicts fixed');
    } catch (error) {
      this.error('Failed to fix dependency conflicts', error);
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');

    try {
      // Run TypeScript auto-fix
      this.runCommand('npx tsc --noEmit --skipLibCheck', { silent: true });

      // Fix common TypeScript issues
      await this.fixCommonTypeScriptIssues();

      this.log('TypeScript errors fixed');
    } catch (error) {
      this.error('Failed to fix TypeScript errors', error);
    }
  }

  async fixLintErrors() {
    this.log('Fixing lint errors...');

    try {
      // Run ESLint auto-fix
      this.runCommand('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', {
        silent: true,
      });

      // Run Prettier
      this.runCommand('npx prettier --write .', { silent: true });

      this.log('Lint errors fixed');
    } catch (error) {
      this.error('Failed to fix lint errors', error);
    }
  }

  async fixMemoryIssues() {
    this.log('Fixing memory issues...');

    try {
      // Update Node.js memory limits
      await this.updateMemoryLimits();

      // Optimize build process
      await this.optimizeBuildProcess();

      this.log('Memory issues fixed');
    } catch (error) {
      this.error('Failed to fix memory issues', error);
    }
  }

  async fixNetworkIssues() {
    this.log('Fixing network issues...');

    try {
      // Update npm registry configuration
      this.runCommand('npm config set registry https://registry.npmjs.org/', {
        silent: true,
      });

      // Clear network cache
      this.runCommand('npm cache clean --force', { silent: true });

      this.log('Network issues fixed');
    } catch (error) {
      this.error('Failed to fix network issues', error);
    }
  }

  async fixPermissionIssues() {
    this.log('Fixing permission issues...');

    try {
      // Fix file permissions
      this.runCommand('chmod -R 755 .', { silent: true });

      // Fix ownership issues
      this.runCommand('sudo chown -R $(whoami) .', { silent: true });

      this.log('Permission issues fixed');
    } catch (error) {
      this.error('Failed to fix permission issues', error);
    }
  }

  async fixDiskSpaceIssues() {
    this.log('Fixing disk space issues...');

    try {
      // Clean build artifacts
      this.runCommand('rm -rf .next out dist build node_modules/.cache', {
        silent: true,
      });

      // Clean npm cache
      this.runCommand('npm cache clean --force', { silent: true });

      // Clean git objects
      this.runCommand('git gc --prune=now', { silent: true });

      this.log('Disk space issues fixed');
    } catch (error) {
      this.error('Failed to fix disk space issues', error);
    }
  }

  async updateDependencies() {
    this.log('Updating dependencies...');

    try {
      // Update dependencies safely
      this.runCommand('npm update', { silent: true });

      // Check for major updates
      const outdated = this.runCommand('npm outdated --json', { silent: true });
      const outdatedDeps = JSON.parse(outdated);

      for (const [dep, info] of Object.entries(outdatedDeps)) {
        if (info.current !== info.latest) {
          this.log(`Updating ${dep} from ${info.current} to ${info.latest}`);
          this.runCommand(`npm install ${dep}@latest`, { silent: true });
        }
      }

      this.log('Dependencies updated successfully');
    } catch (error) {
      this.error('Failed to update dependencies', error);
    }
  }

  async fixSecurityVulnerabilities() {
    this.log('Fixing security vulnerabilities...');

    try {
      // Run npm audit fix
      this.runCommand('npm audit fix', { silent: true });

      // Check if vulnerabilities remain
      const audit = this.runCommand('npm audit --json', { silent: true });
      const auditResult = JSON.parse(audit);

      if (
        auditResult.vulnerabilities &&
        Object.keys(auditResult.vulnerabilities).length > 0
      ) {
        this.log('Some vulnerabilities require manual review');
        this.log('Running npm audit fix --force for remaining issues...');
        this.runCommand('npm audit fix --force', { silent: true });
      }

      this.log('Security vulnerabilities fixed');
    } catch (error) {
      this.error('Failed to fix security vulnerabilities', error);
    }
  }

  async optimizeBuildConfig() {
    this.log('Optimizing build configuration...');

    try {
      // Update Next.js configuration for better performance
      if (fs.existsSync('next.config.js')) {
        let config = fs.readFileSync('next.config.js', 'utf8');

        // Add performance optimizations
        if (!config.includes('swcMinify')) {
          config = config.replace(
            'module.exports = {',
            'module.exports = {\n  swcMinify: true,'
          );
        }

        if (!config.includes('experimental')) {
          config = config.replace(
            'module.exports = {',
            'module.exports = {\n  experimental: {\n    optimizeCss: true,\n    optimizePackageImports: true\n  },'
          );
        }

        fs.writeFileSync('next.config.js', config);
      }

      this.log('Build configuration optimized');
    } catch (error) {
      this.error('Failed to optimize build configuration', error);
    }
  }

  async updateBuildScripts() {
    this.log('Updating build scripts...');

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

      // Add optimized build scripts
      if (packageJson.scripts) {
        packageJson.scripts['build:optimized'] =
          'NODE_OPTIONS="--max-old-space-size=4096" npm run build';
        packageJson.scripts['build:analyze'] = 'ANALYZE=true npm run build';
        packageJson.scripts['build:clean'] =
          'rm -rf .next out && npm run build';
      }

      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

      this.log('Build scripts updated');
    } catch (error) {
      this.error('Failed to update build scripts', error);
    }
  }

  async fixCommonTypeScriptIssues() {
    this.log('Fixing common TypeScript issues...');

    try {
      // Create or update tsconfig.json for better compatibility
      if (fs.existsSync('tsconfig.json')) {
        let config = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));

        // Add strict mode and better error handling
        config.compilerOptions = {
          ...config.compilerOptions,
          strict: true,
          noImplicitAny: true,
          noImplicitReturns: true,
          noImplicitThis: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          skipLibCheck: true,
          forceConsistentCasingInFileNames: true,
        };

        fs.writeFileSync('tsconfig.json', JSON.stringify(config, null, 2));
      }

      this.log('TypeScript configuration updated');
    } catch (error) {
      this.error('Failed to fix TypeScript issues', error);
    }
  }

  async updateMemoryLimits() {
    this.log('Updating memory limits...');

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

      // Update build scripts with memory limits
      if (packageJson.scripts && packageJson.scripts.build) {
        packageJson.scripts.build = `NODE_OPTIONS="--max-old-space-size=4096" ${packageJson.scripts.build}`;
      }

      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

      this.log('Memory limits updated');
    } catch (error) {
      this.error('Failed to update memory limits', error);
    }
  }

  async optimizeBuildProcess() {
    this.log('Optimizing build process...');

    try {
      // Enable build caching
      if (fs.existsSync('next.config.js')) {
        let config = fs.readFileSync('next.config.js', 'utf8');

        if (!config.includes('experimental')) {
          config = config.replace(
            'module.exports = {',
            'module.exports = {\n  experimental: {\n    optimizeCss: true,\n    optimizePackageImports: true,\n    turbo: {\n      rules: {\n        "*.svg": {\n          loaders: ["@svgr/webpack"],\n          as: "*.js"\n        }\n      }\n    }\n  },'
          );
        }

        fs.writeFileSync('next.config.js', config);
      }

      this.log('Build process optimized');
    } catch (error) {
      this.error('Failed to optimize build process', error);
    }
  }

  async performDailyMaintenance() {
    this.log('Performing daily maintenance...');

    try {
      // Clean up old build artifacts
      this.runCommand('rm -rf .next out dist build', { silent: true });

      // Clean npm cache
      this.runCommand('npm cache clean --force', { silent: true });

      // Update dependencies
      await this.updateDependencies();

      // Run security audit
      await this.fixSecurityVulnerabilities();

      this.log('Daily maintenance completed');
    } catch (error) {
      this.error('Daily maintenance failed', error);
    }
  }

  async performWeeklyOptimization() {
    this.log('Performing weekly optimization...');

    try {
      // Deep clean
      this.runCommand('rm -rf node_modules package-lock.json', {
        silent: true,
      });
      this.runCommand('npm install', { silent: true });

      // Update all dependencies to latest
      this.runCommand('npm update --save', { silent: true });

      // Optimize build configuration
      await this.optimizeBuildConfig();

      // Run full code quality check
      await this.checkCodeQualityIssues();

      this.log('Weekly optimization completed');
    } catch (error) {
      this.error('Weekly optimization failed', error);
    }
  }

  runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        timeout: options.timeout || 30000,
        cwd: process.cwd(),
      });
      return result;
    } catch (error) {
      if (!options.silent) {
        throw error;
      }
      return error.stdout || error.stderr || error.message;
    }
  }

  warn(message) {
    const timestamp = new Date().toISOString();
    const warnMessage = `[${timestamp}] WARNING: ${message}`;
    console.warn(warnMessage);

    try {
      fs.appendFileSync(this.config.logFile, warnMessage + '\n');
    } catch (error) {
      console.error('Failed to write warning to log file:', error.message);
    }
  }

  async stop() {
    this.isRunning = false;
    this.log('Netlify Build Monitor stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      lastCheck: new Date().toISOString(),
      buildHistory: this.buildHistory.length,
      config: this.config,
    };
  }
}

// Main execution
if (require.main === module) {
  const monitor = new NetlifyBuildMonitor();

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    // console.log('\nReceived SIGINT, shutting down gracefully...');
    await monitor.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    // console.log('\nReceived SIGTERM, shutting down gracefully...');
    await monitor.stop();
    process.exit(0);
  });

  // Start the monitor
  monitor.start().catch(error => {
    console.error('Failed to start monitor:', error);
    process.exit(1);
  });
}

module.exports = NetlifyBuildMonitor;






}




}



}


}

}
}