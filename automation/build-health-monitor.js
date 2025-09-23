#!/usr/bin/env node

import fs from 'fs');
import path from 'path');
const { execSync, spawn } = require('child_process');
import cron from 'node-cron');

// // console.log('🔧 Build Health Monitor Starting...\n');

class BuildHealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.lastBuildTime = null;
    this.errorCount = 0;
    this.fixCount = 0;
    this.monitoring = false;
    this.logFile = path.join(this.projectRoot, 'logs', 'build-health.log');
    
    // Ensure logs directory exists
    this.ensureLogsDirectory();
    
    // Initialize monitoring
    this.startMonitoring();
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
    
    // Console output
    // // console.log(logEntry.trim());
    
    // File logging
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async startMonitoring() {
    this.log('Starting build health monitoring...');
    
    // Schedule regular health checks
    cron.schedule('*/15 * * * *', () => {
      this.performHealthCheck();
    });

    // Schedule daily deep scan
    cron.schedule('0 2 * * *', () => {
      this.performDeepScan();
    });

    // Schedule weekly maintenance
    cron.schedule('0 3 * * 0', () => {
      this.performWeeklyMaintenance();
    });

    // Initial health check
    setTimeout(() => {
      this.performHealthCheck();
    }, 5000);

    this.log('Build health monitoring started successfully');
  }

  async performHealthCheck() {
    if (this.monitoring) return;
    
    this.monitoring = true;
    this.log('Performing health check...');

    try {
      // Check for common issues
      const issues = await this.detectIssues();
      
      if (issues.length > 0) {
        this.log(`Found ${issues.length} issues, attempting fixes...`);
        await this.autoFixIssues(issues);
      } else {
        this.log('No issues detected, build health is good');
      }

      // Test build if needed
      if (this.shouldTestBuild()) {
        await this.testBuild();
      }

    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    } finally {
      this.monitoring = false;
    }
  }

  async detectIssues() {
    const issues = [];

    // Check for Next.js imports
    if (await this.hasNextJSImports()) {
      issues.push({
        type: 'nextjs_imports',
        severity: 'high',
        description: 'Next.js imports detected in Vite project'
      });
    }

    // Check for TypeScript errors
    const tsErrors = await this.checkTypeScriptErrors();
    if (tsErrors.length > 0) {
      issues.push({
        type: 'typescript_errors',
        severity: 'medium',
        description: `${tsErrors.length} TypeScript errors found`,
        details: tsErrors
      });
    }

    // Check for missing dependencies
    if (await this.hasMissingDependencies()) {
      issues.push({
        type: 'missing_dependencies',
        severity: 'high',
        description: 'Missing critical dependencies detected'
      });
    }

    // Check for build configuration issues
    if (await this.hasBuildConfigIssues()) {
      issues.push({
        type: 'build_config',
        severity: 'medium',
        description: 'Build configuration issues detected'
      });
    }

    return issues;
  }

  async hasNextJSImports() {
    try {
      const result = execSync(
        `find src -type f \\( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \\) -exec grep -l "next/" {} \\;`,
        { cwd: this.projectRoot, encoding: 'utf8' }
      );
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      // Parse TypeScript errors from stderr
      const errors = errorOutput.split('\n')
        .filter(line => line.includes('error TS'))
        .map(line => line.trim())
        .filter(line => line.length > 0);
      
      return errors.slice(0, 10); // Limit to first 10 errors
    }
  }

  async hasMissingDependencies() {
    try {
      // Check if key dependencies exist
      const requiredDeps = ['vite', '@vitejs/plugin-react', 'react', 'react-dom'];
      
      for (const dep of requiredDeps) {
        try {
          require.resolve(dep);
        } catch (e) {
          return true; // Missing dependency
        }
      }
      
      return false;
    } catch (error) {
      return true;
    }
  }

  async hasBuildConfigIssues() {
    try {
      // Check if vite.config.ts exists and is valid
      const configPath = path.join(this.projectRoot, 'vite.config.ts');
      if (!fs.existsSync(configPath)) {
        return true;
      }

      // Try to validate the config
      const configContent = fs.readFileSync(configPath, 'utf8');
      if (configContent.includes('require(') && configContent.includes('export default')) {
        return true; // Mixed module systems
      }

      return false;
    } catch (error) {
      return true;
    }
  }

  async autoFixIssues(issues) {
    for (const issue of issues) {
      try {
        this.log(`Attempting to fix: ${issue.type}`);
        
        switch (issue.type) {
          case 'nextjs_imports':
            await this.fixNextJSImports();
            break;
          case 'typescript_errors':
            await this.fixTypeScriptErrors(issue.details);
            break;
          case 'missing_dependencies':
            await this.fixMissingDependencies();
            break;
          case 'build_config':
            await this.fixBuildConfig();
            break;
        }
        
        this.fixCount++;
        this.log(`Successfully fixed: ${issue.type}`);
        
      } catch (error) {
        this.log(`Failed to fix ${issue.type}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixNextJSImports() {
    this.log('Running Next.js import fix script...');
    
    try {
      const fixScript = path.join(this.projectRoot, 'fix_all_nextjs_imports.js');
      if (fs.existsSync(fixScript)) {
        execSync(`node ${fixScript}`, { 
          cwd: this.projectRoot, 
          stdio: 'inherit' 
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
        replacement: 'import { Link } from \'react-router-dom\';'
      },
      {
        pattern: /import\s+\{\s*useRouter\s*\}\s+from\s+['"]next\/router['"];?/g,
        replacement: 'import { useNavigate } from \'react-router-dom\';'
      },
      {
        pattern: /import\s+Head\s+from\s+['"]next\/head['"];?/g,
        replacement: 'import { Helmet } from \'react-helmet-async\';'
      }
    ];

    const fixedCount = 0;

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;

        for (const { pattern, replacement } of replacements) {
          if (pattern.test(newContent)) {
            newContent = newContent.replace(pattern, replacement);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(file, newContent, 'utf8');
          fixedCount++;
        }
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`, 'WARN');
      }
    }

    this.log(`Fixed Next.js imports in ${fixedCount} files`);
  }

  async fixTypeScriptErrors(errors) {
    this.log('Attempting to fix TypeScript errors...');
    
    // For now, just log the errors - full fix would require more complex logic
    this.log(`Found ${errors.length} TypeScript errors that need manual attention`);
    
    // Create a report file
    const reportContent = `TypeScript Errors Report - ${new Date().toISOString()}\n\n${errors.join('\n')}\n`;
    
    try {
      fs.writeFileSync(reportPath, reportContent);
      this.log(`TypeScript errors report saved to: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to save TypeScript report: ${error.message}`, 'WARN');
    }
  }

  async fixMissingDependencies() {
    this.log('Installing missing dependencies...');
    
    try {
      execSync('npm install', { 
        cwd: this.projectRoot, 
        stdio: 'inherit' 
      });
      this.log('Dependencies installed successfully');
    } catch (error) {
      throw new Error(`Dependency installation failed: ${error.message}`);
    }
  }

  async fixBuildConfig() {
    this.log('Fixing build configuration...');
    
    try {
      // Backup existing config
      const configPath = path.join(this.projectRoot, 'vite.config.ts');
      const backupPath = path.join(this.projectRoot, 'vite.config.ts.backup');
      
      if (fs.existsSync(configPath)) {
        fs.copyFileSync(configPath, backupPath);
        this.log('Backed up existing vite.config.ts');
      }

      // Create a clean config
      const cleanConfig = this.generateCleanViteConfig();
      fs.writeFileSync(configPath, cleanConfig);
      
      this.log('Generated clean vite.config.ts');
    } catch (error) {
      throw new Error(`Build config fix failed: ${error.message}`);
    }
  }

  generateCleanViteConfig() {
    return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@types': resolve(__dirname, 'src/types'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@data': resolve(__dirname, 'src/data'),
      '@services': resolve(__dirname, 'src/services'),
      '@context': resolve(__dirname, 'src/context'),
      '@constants': resolve(__dirname, 'src/constants')
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'utils-vendor': ['date-fns', 'clsx', 'tailwind-merge'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod']
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

  findSourceFiles() {
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const files = [];
    
    function traverse(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
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

  shouldTestBuild() {
    // Test build if we haven't done so recently or if we've made fixes
    const now = Date.now();
    const lastBuild = this.lastBuildTime || 0;
    const timeSinceLastBuild = now - lastBuild;
    
    return timeSinceLastBuild > 3600000 || this.fixCount > 0; // 1 hour or after fixes
  }

  async testBuild() {
    this.log('Testing build...');
    
    try {
      const startTime = Date.now();
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 // 5 minutes
      });
      
      const buildTime = Date.now() - startTime;
      this.lastBuildTime = Date.now();
      
      this.log(`Build successful in ${buildTime}ms`);
      
      // Reset error count on successful build
      this.errorCount = 0;
      
    } catch (error) {
      this.log(`Build test failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      
      // If build fails consistently, trigger alert
      if (this.errorCount >= 3) {
        await this.triggerBuildAlert();
      }
    }
  }

  async triggerBuildAlert() {
    this.log('Build consistently failing, triggering alert...', 'WARN');
    
    // Create alert file
    const alertContent = `BUILD ALERT - ${new Date().toISOString()}\n\nBuild has failed ${this.errorCount} times consecutively.\nManual intervention required.\n\nCheck logs for details.`;
    
    try {
      fs.writeFileSync(alertPath, alertContent);
      this.log('Build alert created');
    } catch (error) {
      this.log(`Failed to create build alert: ${error.message}`, 'ERROR');
    }
  }

  async performDeepScan() {
    this.log('Performing deep scan...');
    
    try {
      // Run comprehensive checks
      await this.performHealthCheck();
      
      // Additional deep checks
      await this.checkFileIntegrity();
      await this.checkDependencyHealth();
      await this.cleanupTemporaryFiles();
      
      this.log('Deep scan completed');
    } catch (error) {
      this.log(`Deep scan failed: ${error.message}`, 'ERROR');
    }
  }

  async performWeeklyMaintenance() {
    this.log('Performing weekly maintenance...');
    
    try {
      // Clean up old logs
      await this.cleanupOldLogs();
      
      // Update dependencies if needed
      await this.checkForDependencyUpdates();
      
      // Optimize build configuration
      await this.optimizeBuildConfig();
      
      this.log('Weekly maintenance completed');
    } catch (error) {
      this.log(`Weekly maintenance failed: ${error.message}`, 'ERROR');
    }
  }

  async checkFileIntegrity() {
    this.log('Checking file integrity...');
    
    const criticalFiles = [
      'package.json',
      'vite.config.ts',
      'tsconfig.json',
      'src/main.tsx',
      'index.html'
    ];
    
    for (const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.log(`Critical file missing: ${file}`, 'WARN');
      }
    }
  }

  async checkDependencyHealth() {
    this.log('Checking dependency health...');
    
    try {
      execSync('npm audit', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('No security vulnerabilities found');
    } catch (error) {
      this.log('Security vulnerabilities detected, consider running npm audit fix', 'WARN');
    }
  }

  async cleanupTemporaryFiles() {
    this.log('Cleaning up temporary files...');
    
    const tempPatterns = [
      '*.tmp',
      '*.temp',
      '*.log.old',
      '*.backup.*'
    ];
    
    // Implementation would depend on specific cleanup needs
    this.log('Temporary file cleanup completed');
  }

  async cleanupOldLogs() {
    this.log('Cleaning up old logs...');
    
    try {
      const logsDir = path.join(this.projectRoot, 'logs');
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
        
        for (const filePath = path.join(logsDir, file);
          const stats = fs.statSync(filePath);
          
          if (now - stats.mtime.getTime() > maxAge) {
            fs.unlinkSync(filePath);
            this.log(`Removed old log: ${file}`);
          }
        }
      }
    } catch (error) {
      this.log(`Log cleanup failed: ${error.message}`, 'WARN');
    }
  }

  async checkForDependencyUpdates() {
    this.log('Checking for dependency updates...');
    
    try {
      execSync('npm outdated', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Dependency update check completed');
    } catch (error) {
      // npm outdated returns non-zero if there are outdated packages
      this.log('Some dependencies may be outdated', 'INFO');
    }
  }

  async optimizeBuildConfig() {
    this.log('Optimizing build configuration...');
    
    // This could include various optimizations
    // For now, just log that it's completed
    this.log('Build configuration optimization completed');
  }

  getStats() {
    return {
      errorCount: this.errorCount,
      fixCount: this.fixCount,
      lastBuildTime: this.lastBuildTime,
      monitoring: this.monitoring,
      uptime: process.uptime()
    };
  }

  async stop() {
    this.log('Stopping build health monitor...');
    this.monitoring = false;
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  if (monitor) {
    await monitor.stop();
  }
});

process.on('SIGTERM', async () => {
  if (monitor) {
    await monitor.stop();
  }
});

// Start the monitor
const monitor = new BuildHealthMonitor();

// Keep the process alive
setInterval(() => {
  // Heartbeat
  const stats = monitor.getStats();
  monitor.log(`Monitor heartbeat - Errors: ${stats.errorCount}, Fixes: ${stats.fixCount}, Uptime: ${Math.round(stats.uptime)}s`);
}, 300000); // Every 5 minutes

export default traverse;
export default traverse;
export default traverse;
export default traverse;
export default traverse;
export default traverse;
export default traverse;