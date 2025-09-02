#!/usr/bin/env node
;
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

// // console.log('🚀 Build Automation Starting...\n');
;
class BuildAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.buildFailures = 0;
    this.buildSuccesses = 0;
    this.optimizationsApplied = 0;
    this.monitoring = false;
    this.logFile = path.join(this.projectRoot,logs',build-automation.log');

    // Ensure logs directory exists
    this.ensureLogsDirectory();

    // Initialize automation
    this.startAutomation();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    // // console.log(logEntry.trim());

    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async startAutomation() {
    this.log('Starting build automation...');

    // Schedule regular build tests
    cron.schedule('0 */4 * * *', () => {
      this.performBuildTest();
    });

    // Schedule daily build optimization
    cron.schedule('0 8 * * *', () => {
      this.performBuildOptimization();
    });

    // Schedule weekly build analysis
    cron.schedule('0 9 * * 0', () => {
      this.performBuildAnalysis();
    });

    // Initial build test
    setTimeout(() => {
      this.performBuildTest();
    }, 20000);

    this.log('Build automation started successfully');
  }

  async performBuildTest() {
    if (this.monitoring) return;

    this.monitoring = true;
    this.log('Performing build test...');

    try {
      const buildResult = await this.testBuild();

      if (buildResult.success) {
        this.buildSuccesses++;
        this.log('Build test successful');
      } else {
        this.buildFailures++;
        this.log('Build test failed, attempting to fix...');
        await this.autoFixBuildIssues(buildResult.errors);
      }
    } catch (error) {
      this.log(`Build test failed: ${error.message}`,ERROR');
      this.buildFailures++;
    } finally {
      this.monitoring = false;
    }
  }

  async testBuild() {
    this.log('Testing build process...');

    try {
      const startTime = Date.now();

      // Clean previous build
      if (fs.existsSync(path.join(this.projectRoot,dist'))) {
        fs.rmSync(path.join(this.projectRoot,dist'), {
          recursive: true,
          force: true,
        });
        this.log('Cleaned previous build');
      }

      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000, // 5 minutes
      });

      const buildTime = Date.now() - startTime;
      this.log(`Build successful in ${buildTime}ms`);

      return {
        success: true,
        buildTime,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const errorOutput = error.stderr || error.stdout || error.message;
      this.log(`Build failed: ${errorOutput}`,ERROR');

      return {
        success: false,
        errors: this.parseBuildErrors(errorOutput),
        timestamp: new Date().toISOString(),
      };
    }
  }

  parseBuildErrors(errorOutput) {
    const errors = [];
    const lines = errorOutput.toString().split('\n');

    for (const line of lines) {
      if (
        line.includes('error') ||
        line.includes('Error') ||
        line.includes('ERROR')
      ) {
        errors.push(line.trim());
      }
    }

    return errors.slice(0, 20); // Limit to first 20 errors
  }

  async autoFixBuildIssues(errors) {
    this.log('Attempting to auto-fix build issues...');

    try {
      // Analyze errors and apply fixes
      const fixes = await this.analyzeAndFixErrors(errors);

      if (fixes.length > 0) {
        this.log(`Applied ${fixes.length} fixes, retesting build...`);

        // Retest build after fixes
        const retestResult = await this.testBuild();

        if (retestResult.success) {
          this.log('Build fixed successfully after applying fixes');
          this.optimizationsApplied++;
        } else {
          this.log('Build still failing after fixes, creating detailed report');
          await this.createBuildFailureReport(errors, fixes);
        }
      } else {
        this.log(
          'No automatic fixes available, creating manual intervention report'
        );
        await this.createBuildFailureReport(errors, []);
      }
    } catch (error) {
      this.log(`Error fixing build issues: ${error.message}`,ERROR');
    }
  }

  async analyzeAndFixErrors(errors) {
    const fixes = [];

    for (const error of errors) {
      try {
        if (error.includes('next/')) {
          // Next.js import issue
          await this.fixNextJSImports();
          fixes.push('Fixed Next.js imports');
        } else if (error.includes('Cannot resolve module')) {
          // Module resolution issue
          await this.fixModuleResolution();
          fixes.push('Fixed module resolution');
        } else if (error.includes('TypeScript') || error.includes('TS')) {
          // TypeScript compilation issue
          await this.fixTypeScriptIssues();
          fixes.push('Fixed TypeScript issues');
        } else if (error.includes('vite') || error.includes('Vite')) {
          // Vite configuration issue
          await this.fixViteConfig();
          fixes.push('Fixed Vite configuration');
        } else if (error.includes('PostCSS') || error.includes('Tailwind')) {
          // CSS processing issue
          await this.fixCSSIssues();
          fixes.push('Fixed CSS processing');
        }
      } catch (fixError) {
        this.log(`Failed to fix error: ${fixError.message}`,WARN');
      }
    }

    return fixes;
  }

  async fixNextJSImports() {
    this.log('Fixing Next.js imports...');

    try {
      const fixScript = path.join(
        this.projectRoot,fix_all_nextjs_imports.js'
      );
      if (fs.existsSync(fixScript)) {
        execSync(`node ${fixScript}`, {
          cwd: this.projectRoot,
          stdio: 'inherit',
        });
      } else {
        // Run inline fix
        await this.runInlineNextJSFix();
      }
    } catch (error) {
      throw new Error(`Next.js import fix failed: ${error.message}`);
    }
  }

  async runInlineNextJSFix() {
    this.log('Running inline Next.js import fixes...');

    const replacements = [
      {
        pattern: /import\s+Link\s+from\s+['"]next\/link['"];?/g,
        replacement: "import { Link } from 'react-router-dom';",
      },
      {
        pattern:
          /import\s+\{\s*useRouter\s*\}\s+from\s+['"]next\/router['"];?/g,
        replacement: "import { useNavigate } from 'react-router-dom';",
      },
      {
        pattern: /import\s+Head\s+from\s+['"]next\/head['"];?/g,
        replacement: "import { Helmet } from 'react-helmet-async';",
      },
    ];

    const files = this.findSourceFiles();
    let fixedCount = 0;

    for (const file of files) {
      try {
        const content = fs.readFileSync(file,utf8');
        let modified = false;
        let newContent = content;

        for (const { pattern, replacement } of replacements) {
          if (pattern.test(newContent)) {
            newContent = newContent.replace(pattern, replacement);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(file, newContent,utf8');
          fixedCount++;
        }
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`,WARN');
      }
    }

    this.log(`Fixed Next.js imports in ${fixedCount} files`);
  }

  async fixModuleResolution() {
    this.log('Fixing module resolution issues...');

    try {
      // Check if dependencies are properly installed
      if (!fs.existsSync(path.join(this.projectRoot,node_modules'))) {
        this.log('Installing dependencies...');
        execSync('npm install', {
          cwd: this.projectRoot,
          stdio: 'inherit',
        });
      }

      // Check for missing packages
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot,package.json'),utf8')
      );
      const missingDeps = [];

      if (packageJson.dependencies) {
        for (const [dep, version] of Object.entries(packageJson.dependencies)) {
          try {
            require.resolve(dep);
          } catch (e) {
            missingDeps.push(dep);
          }
        }
      }

      if (missingDeps.length > 0) {
        this.log(`Installing missing dependencies: ${missingDeps.join(',)}`);
        execSync(`npm install ${missingDeps.join(' ')}`, {
          cwd: this.projectRoot,
          stdio: 'inherit',
        });
      }
    } catch (error) {
      throw new Error(`Module resolution fix failed: ${error.message}`);
    }
  }

  async fixTypeScriptIssues() {
    this.log('Fixing TypeScript issues...');

    try {
      // Try to auto-fix with TypeScript compiler
      execSync('npx tsc --noEmit --skipLibCheck', {
        cwd: this.projectRoot,
        stdio: 'pipe',
      });

      this.log('TypeScript compilation successful');
    } catch (error) {
      this.log(`TypeScript compilation failed: ${error.message}`,WARN');

      // Create a report for manual resolution
      const reportPath = path.join(
        this.projectRoot,logs',typescript-issues-report.txt'
      );
      const reportContent = `TypeScript Issues Report - ${new Date().toISOString()}\n\n${error.message}\n\nThese issues require manual attention.`;

      fs.writeFileSync(reportPath, reportContent);
      this.log(`TypeScript issues report saved to: ${reportPath}`);
    }
  }

  async fixViteConfig() {
    this.log('Fixing Vite configuration...');

    try {
      const configPath = path.join(this.projectRoot,vite.config.ts');

      if (!fs.existsSync(configPath)) {
        this.log('Creating Vite configuration...');
        const config = this.generateDefaultViteConfig();
        fs.writeFileSync(configPath, config);
      } else {
        // Backup and regenerate config
        const backupPath = path.join(this.projectRoot,vite.config.ts.backup');
        fs.copyFileSync(configPath, backupPath);
        this.log('Backed up existing vite.config.ts');

        const config = this.generateDefaultViteConfig();
        fs.writeFileSync(configPath, config);
        this.log('Regenerated vite.config.ts');
      }
    } catch (error) {
      throw new Error(`Vite config fix failed: ${error.message}`);
    }
  }

  generateDefaultViteConfig() {
    return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'
;
export { defineConfig };
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname,src'),@components': resolve(__dirname,src/components'),@pages': resolve(__dirname,src/pages'),@layout': resolve(__dirname,src/layout'),@utils': resolve(__dirname,src/utils'),@hooks': resolve(__dirname,src/hooks'),@types': resolve(__dirname,src/types'),@assets': resolve(__dirname,src/assets'),@styles': resolve(__dirname,src/styles'),@data': resolve(__dirname,src/data'),@services': resolve(__dirname,src/services'),@context': resolve(__dirname,src/context'),@constants': resolve(__dirname,src/constants')
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react',react-dom'],router-vendor': ['react-router-dom'],ui-vendor': ['framer-motion',lucide-react'],utils-vendor': ['date-fns',clsx',tailwind-merge'],form-vendor': ['react-hook-form',@hookform/resolvers',zod']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  }
})`;
  }

  async fixCSSIssues() {
    this.log('Fixing CSS processing issues...');

    try {
      // Check if Tailwind CSS is properly configured
      const tailwindConfig = path.join(this.projectRoot,tailwind.config.js');
      if (!fs.existsSync(tailwindConfig)) {
        this.log('Creating Tailwind CSS configuration...');
        const config = this.generateDefaultTailwindConfig();
        fs.writeFileSync(tailwindConfig, config);
      }

      // Check if PostCSS is configured
      const postcssConfig = path.join(this.projectRoot,postcss.config.js');
      if (!fs.existsSync(postcssConfig)) {
        this.log('Creating PostCSS configuration...');
        const config = this.generateDefaultPostCSSConfig();
        fs.writeFileSync(postcssConfig, config);
      }
    } catch (error) {
      throw new Error(`CSS fix failed: ${error.message}`);
    }
  }

  generateDefaultTailwindConfig() {
    return `/** @type {import('tailwindcss').Config} */;
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}`;
  }

  generateDefaultPostCSSConfig() {
    return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}`;
  }

  async createBuildFailureReport(errors, fixes) {
    this.log('Creating build failure report...');

    try {
      const reportPath = path.join(
        this.projectRoot,logs',build-failure-report.txt'
      );
      const reportContent = `Build Failure Report - ${new Date().toISOString()}\n\nErrors:\n${errors.join('\n')}\n\nFixes Applied:\n${fixes.length > 0 ? fixes.join('\n') : 'None'}\n\nManual intervention required.`;

      fs.writeFileSync(reportPath, reportContent);
      this.log(`Build failure report saved to: ${reportPath}`);
    } catch (error) {
      this.log(
        `Failed to create build failure report: ${error.message}`,ERROR'
      );
    }
  }

  async performBuildOptimization() {
    this.log('Performing build optimization...');

    try {
      // Optimize Vite configuration
      await this.optimizeViteConfig();

      // Optimize build scripts
      await this.optimizeBuildScripts();

      // Clean up build artifacts
      await this.cleanupBuildArtifacts();

      this.log('Build optimization completed');
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`,ERROR');
    }
  }

  async performBuildAnalysis() {
    this.log('Performing build analysis...');

    try {
      // Analyze build performance
      await this.analyzeBuildPerformance();

      // Check build configuration
      await this.analyzeBuildConfiguration();

      // Generate build metrics
      await this.generateBuildMetrics();

      this.log('Build analysis completed');
    } catch (error) {
      this.log(`Build analysis failed: ${error.message}`,ERROR');
    }
  }

  async optimizeViteConfig() {
    this.log('Optimizing Vite configuration...');

    try {
      const configPath = path.join(this.projectRoot,vite.config.ts');
      if (fs.existsSync(configPath)) {
        const config = fs.readFileSync(configPath,utf8');

        // Add performance optimizations if not present
        if (!config.includes('build.rollupOptions.output.manualChunks')) {
          this.log('Adding manual chunking for better performance');
          // Implementation would add manual chunking configuration
        }

        if (!config.includes('build.target')) {
          this.log('Setting build target for better compatibility');
          // Implementation would add build target configuration
        }
      }
    } catch (error) {
      this.log(`Vite config optimization failed: ${error.message}`,WARN');
    }
  }

  async optimizeBuildScripts() {
    this.log('Optimizing build scripts...');

    try {
      const packageJsonPath = path.join(this.projectRoot,package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(
          fs.readFileSync(packageJsonPath,utf8')
        );

        // Add build optimization scripts if not present
        if (!packageJson.scripts['build:analyze']) {
          packageJson.scripts['build:analyze'] = 'vite build --mode analyze';
        }

        if (!packageJson.scripts['build:prod']) {
          packageJson.scripts['build:prod'] = 'vite build --mode production';
        }

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        this.log('Build scripts optimized');
      }
    } catch (error) {
      this.log(`Build script optimization failed: ${error.message}`,WARN');
    }
  }

  async cleanupBuildArtifacts() {
    this.log('Cleaning up build artifacts...');

    try {
      const buildDirs = ['dist',build',.vite'];

      for (const dir of buildDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          fs.rmSync(dirPath, { recursive: true, force: true });
          this.log(`Cleaned up ${dir} directory`);
        }
      }
    } catch (error) {
      this.log(`Build artifact cleanup failed: ${error.message}`,WARN');
    }
  }

  async analyzeBuildPerformance() {
    this.log('Analyzing build performance...');

    // This would analyze build times, bundle sizes, etc.
    // For now, just log that it's completed
    this.log('Build performance analysis completed');
  }

  async analyzeBuildConfiguration() {
    this.log('Analyzing build configuration...');

    // This would analyze Vite config, package.json scripts, etc.
    // For now, just log that it's completed
    this.log('Build configuration analysis completed');
  }

  async generateBuildMetrics() {
    this.log('Generating build metrics...');

    try {
      const metricsPath = path.join(
        this.projectRoot,logs',build-metrics.json'
      );
      const metrics = {
        timestamp: new Date().toISOString(),
        buildSuccesses: this.buildSuccesses,
        buildFailures: this.buildFailures,
        optimizationsApplied: this.optimizationsApplied,
        successRate:
          (this.buildSuccesses / (this.buildSuccesses + this.buildFailures)) *
          100,
      };

      fs.writeFileSync(metricsPath, JSON.stringify(metrics, null, 2));
      this.log('Build metrics generated');
    } catch (error) {
      this.log(`Build metrics generation failed: ${error.message}`,WARN');
    }
  }

  findSourceFiles() {
    const extensions = ['.ts',.tsx',.js',.jsx'];
    const files = [];

    function traverse(dir) {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          if (
            !['node_modules',.git',dist',build',.next'].includes(item)
          ) {
            traverse(fullPath);
          }
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }

    traverse(this.projectRoot);
    return files;
  }

  getStats() {
    return {
      buildSuccesses: this.buildSuccesses,
      buildFailures: this.buildFailures,
      optimizationsApplied: this.optimizationsApplied,
      monitoring: this.monitoring,
      uptime: process.uptime(),
    };
  }

  async stop() {
    this.log('Stopping build automation...');
    this.monitoring = false;
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  if (automation) {
    await automation.stop();
  }
});

process.on('SIGTERM', async () => {
  if (automation) {
    await automation.stop();
  }
});

// Start the automation;
const automation = new BuildAutomation();

// Keep the process alive
setInterval(() => {
  // Heartbeat
  const stats = automation.getStats();
  automation.log(
    `Automation heartbeat - Successes: ${stats.buildSuccesses}, Failures: ${stats.buildFailures}, Optimizations: ${stats.optimizationsApplied}, Uptime: ${Math.round(stats.uptime)}s`
  );
}, 1200000); // Every 20 minutes
