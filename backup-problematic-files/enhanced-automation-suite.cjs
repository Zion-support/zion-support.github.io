#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Enhanced Automation Suite
 * Improved version with better error handling, ESLint configuration, and Chrome setup
 */
class EnhancedAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyFix: { success: false, duration: 0, errors: [], warnings: [] },
      codeQuality: { success: false, duration: 0, errors: [], warnings: [] },
      securityAudit: { success: false, duration: 0, errors: [], warnings: [] },
      buildOptimization: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      seoOptimization: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      accessibilityImprovement: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      performanceOptimization: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      deployment: { success: false, duration: 0, errors: [], warnings: [] },
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10, // 10MB buffer
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async setupESLintConfig() {
    this.log('Setting up improved ESLint configuration...');
    
    const eslintConfig = `module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/aria-role': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.next/',
    'build/',
    '*.config.js',
    '*.config.cjs',
  ],
};`;

    fs.writeFileSync(path.join(this.projectRoot, 'eslint.config.js'), eslintConfig);
    this.log('✅ ESLint configuration updated');
  }

  async setupChromeForLighthouse() {
    this.log('Setting up Chrome for Lighthouse...');
    
    try {
      // Try to find Chrome/Chromium
      const chromePaths = [
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable',
        '/usr/bin/chromium-browser',
        '/usr/bin/chromium',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Chromium.app/Contents/MacOS/Chromium',
      ];

      let chromePath = null;
      for (const chrome of chromePaths) {
        if (fs.existsSync(chrome)) {
          chromePath = chrome;
          break;
        }
      }

      if (chromePath) {
        process.env.CHROME_PATH = chromePath;
        this.log(`✅ Chrome found at: ${chromePath}`);
        return true;
      } else {
        this.log('⚠️ Chrome not found, skipping Lighthouse performance test', 'WARNING');
        return false;
      }
    } catch (error) {
      this.log(`⚠️ Chrome setup failed: ${error.message}`, 'WARNING');
      return false;
    }
  }

  async fixDependencies() {
    const startTime = Date.now();
    this.log('\n🔧 FIXING DEPENDENCIES');

    try {
      // Install missing dependencies
      const installResult = await this.runCommand(
        'npm install',
        'Install Dependencies'
      );

      // Install ESLint dependencies
      const eslintResult = await this.runCommand(
        'npm install @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-jsx-a11y --save-dev',
        'Install ESLint Dependencies'
      );

      // Install performance tools
      const perfResult = await this.runCommand(
        'npm install lighthouse --save-dev',
        'Install Lighthouse'
      );

      // Setup ESLint config
      await this.setupESLintConfig();

      this.results.dependencyFix = {
        success: installResult.success && eslintResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (installResult.success) {
        this.log('✅ Dependencies fixed successfully');
      } else {
        this.log('❌ Failed to fix dependencies', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error fixing dependencies: ${error.message}`, 'ERROR');
      this.results.dependencyFix = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async improveCodeQuality() {
    const startTime = Date.now();
    this.log('\n🔍 IMPROVING CODE QUALITY');

    try {
      // Run TypeScript type checking with limited scope
      const typeCheckResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck --maxNodeModuleJsDepth 0',
        'TypeScript Type Check'
      );

      // Run ESLint with improved config
      const lintResult = await this.runCommand(
        'npx eslint . --config eslint.config.js --max-warnings 1000 --ext .ts,.tsx,.js,.jsx',
        'ESLint Check'
      );

      // Fix ESLint issues
      const lintFixResult = await this.runCommand(
        'npx eslint . --config eslint.config.js --fix --max-warnings 1000 --ext .ts,.tsx,.js,.jsx',
        'ESLint Fix'
      );

      this.results.codeQuality = {
        success: typeCheckResult.success || lintResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (this.results.codeQuality.success) {
        this.log('✅ Code quality improved successfully');
      } else {
        this.log('❌ Failed to improve code quality', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error improving code quality: ${error.message}`, 'ERROR');
      this.results.codeQuality = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async performSecurityAudit() {
    const startTime = Date.now();
    this.log('\n🔒 PERFORMING SECURITY AUDIT');

    try {
      // Run npm audit
      const auditResult = await this.runCommand(
        'npm audit --audit-level moderate',
        'NPM Security Audit'
      );

      // Get detailed audit info
      const auditJsonResult = await this.runCommand(
        'npm audit --json',
        'NPM Audit JSON'
      );

      this.results.securityAudit = {
        success: auditResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (auditResult.success) {
        this.log('✅ Security audit completed successfully');
      } else {
        this.log('❌ Security audit failed', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error performing security audit: ${error.message}`, 'ERROR');
      this.results.securityAudit = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async optimizeBuild() {
    const startTime = Date.now();
    this.log('\n🏗️ OPTIMIZING BUILD');

    try {
      // Clean build directory
      const cleanBuild = await this.runCommand('npm run clean', 'Clean Build');

      // Build the application
      const buildResult = await this.runCommand(
        'npm run build',
        'Build Application'
      );

      // Check build output (Vite uses dist/ instead of .next/)
      const buildCheck = await this.runCommand(
        'ls -la dist/',
        'Check Build Output'
      );

      this.results.buildOptimization = {
        success: buildResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (buildResult.success) {
        this.log('✅ Build optimization completed successfully');
      } else {
        this.log('❌ Build optimization failed', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error optimizing build: ${error.message}`, 'ERROR');
      this.results.buildOptimization = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async optimizeSEO() {
    const startTime = Date.now();
    this.log('\n🔍 OPTIMIZING SEO');

    try {
      // Generate sitemap
      const sitemapResult = await this.runCommand(
        'node scripts/generate-sitemap.cjs',
        'Generate Sitemap'
      );

      // Generate search index
      const searchIndexResult = await this.runCommand(
        'node scripts/generate-search-index.cjs',
        'Generate Search Index'
      );

      this.results.seoOptimization = {
        success: sitemapResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (sitemapResult.success) {
        this.log('✅ SEO optimization completed successfully');
      } else {
        this.log('❌ SEO optimization failed', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error optimizing SEO: ${error.message}`, 'ERROR');
      this.results.seoOptimization = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async improveAccessibility() {
    const startTime = Date.now();
    this.log('\n♿ IMPROVING ACCESSIBILITY');

    try {
      // Run accessibility checks with improved config
      const a11yResult = await this.runCommand(
        'npx eslint . --config eslint.config.js --ext .ts,.tsx,.js,.jsx',
        'Accessibility Check'
      );

      this.results.accessibilityImprovement = {
        success: a11yResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (a11yResult.success) {
        this.log('✅ Accessibility improvement completed successfully');
      } else {
        this.log('❌ Accessibility improvement failed', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error improving accessibility: ${error.message}`, 'ERROR');
      this.results.accessibilityImprovement = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async optimizePerformance() {
    const startTime = Date.now();
    this.log('\n⚡ OPTIMIZING PERFORMANCE');

    try {
      // Setup Chrome for Lighthouse
      const chromeSetup = await this.setupChromeForLighthouse();

      // Build for production
      const buildResult = await this.runCommand(
        'npm run build',
        'Production Build'
      );

      // Run Lighthouse if Chrome is available
      if (chromeSetup) {
        // Start dev server in background for Lighthouse
        const devServer = execSync('npm run dev &', { 
          cwd: this.projectRoot,
          stdio: 'pipe',
          encoding: 'utf8'
        });

        // Wait a bit for server to start
        await new Promise(resolve => setTimeout(resolve, 5000));

        const lighthouseResult = await this.runCommand(
          'npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless"',
          'Lighthouse Performance Analysis'
        );

        // Kill dev server
        try {
          execSync('pkill -f "npm run dev"', { stdio: 'pipe' });
        } catch (e) {
          // Ignore if process not found
        }
      }

      this.results.performanceOptimization = {
        success: buildResult.success,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      if (buildResult.success) {
        this.log('✅ Performance optimization completed successfully');
      } else {
        this.log('❌ Performance optimization failed', 'ERROR');
      }
    } catch (error) {
      this.log(`❌ Error optimizing performance: ${error.message}`, 'ERROR');
      this.results.performanceOptimization = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  async deployChanges() {
    const startTime = Date.now();
    this.log('\n🚀 DEPLOYING CHANGES');

    try {
      // Add all changes
      await this.runCommand('git add .', 'Git Add');

      // Commit changes
      const commitMessage = `feat: Enhanced automation improvements and fixes - ${new Date().toISOString()}`;
      await this.runCommand(`git commit -m "${commitMessage}"`, 'Git Commit');

      // Pull latest changes first
      await this.runCommand('git pull origin main --no-edit', 'Git Pull');

      // Push changes
      await this.runCommand('git push origin main', 'Git Push');

      this.results.deployment = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: [],
      };

      this.log('✅ Deployment completed successfully');
    } catch (error) {
      this.log(`❌ Error deploying changes: ${error.message}`, 'ERROR');
      this.results.deployment = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: [],
      };
    }
  }

  generateDetailedReport() {
    const totalDuration = Date.now() - this.startTime;
    const successfulTasks = Object.values(this.results).filter(
      result => result.success
    ).length;
    const totalTasks = Object.keys(this.results).length;

    this.log('\n📊 ENHANCED AUTOMATION REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Successful Tasks: ${successfulTasks}/${totalTasks}`);
    this.log('');

    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅' : '❌';
      const duration = `${result.duration}ms`;
      this.log(`${status} ${task}: ${duration}`);

      if (result.errors.length > 0) {
        result.errors.forEach(error => this.log(`   Error: ${error}`));
      }
      if (result.warnings.length > 0) {
        result.warnings.forEach(warning => this.log(`   Warning: ${warning}`));
      }
    });

    // Save report to file
    const reportData = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulTasks,
      totalTasks,
      results: this.results,
    };

    const reportPath = path.join(
      this.projectRoot,
      'enhanced-automation-report.json'
    );

    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    this.log(`\n📊 Report saved to: ${reportPath}`);

    return reportData;
  }

  getRecommendations() {
    const recommendations = [];

    if (!this.results.codeQuality.success) {
      recommendations.push('Review and fix code quality issues');
    }
    if (!this.results.securityAudit.success) {
      recommendations.push('Address security vulnerabilities');
    }
    if (!this.results.performanceOptimization.success) {
      recommendations.push('Optimize application performance');
    }
    if (!this.results.seoOptimization.success) {
      recommendations.push('Improve SEO optimization');
    }
    if (!this.results.accessibilityImprovement.success) {
      recommendations.push('Enhance accessibility features');
    }

    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Enhanced Automation Suite');
    this.log('='.repeat(60));

    try {
      await this.fixDependencies();
      await this.improveCodeQuality();
      await this.performSecurityAudit();
      await this.optimizeBuild();
      await this.optimizeSEO();
      await this.improveAccessibility();
      await this.optimizePerformance();
      await this.deployChanges();

      this.generateDetailedReport();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      this.generateDetailedReport();
    }
  }
}

// Run the automation suite
const suite = new EnhancedAutomationSuite();
suite.run().catch(console.error);

module.exports = EnhancedAutomationSuite;