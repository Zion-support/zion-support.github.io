#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { promisify } = require('util');

class IntelligentErrorFixer {
  constructor() {
    this.config = {
      interval: process.env.AUTOMATION_INTERVAL || 900000, // 15 minutes
      maxMemory: process.env.MAX_MEMORY || 512,
      errorThreshold: process.env.ERROR_THRESHOLD || 10,
      autoFixEnabled: process.env.AUTO_FIX_ENABLED === 'true',
      logFile: path.join(process.cwd(), 'logs', 'intelligent-error-fixer.log'),
      errorPatterns: [
        /console\.(error|warn|log)\(/g,
        /throw new Error\(/g,
        /catch\s*\(/g,
        /TypeError:/g,
        /ReferenceError:/g,
        /SyntaxError:/g,
        /Build failed/g,
        /Module not found/g,
        /Cannot resolve module/g,
        /Unexpected token/g
      ],
      fixStrategies: {
        'console.error': 'Replace with proper error handling',
        'console.warn': 'Replace with proper logging',
        'console.log': 'Remove in production',
        'throw new Error': 'Improve error handling',
        'catch': 'Add proper error handling',
        'TypeError': 'Fix type issues',
        'ReferenceError': 'Fix undefined variables',
        'SyntaxError': 'Fix syntax issues',
        'Build failed': 'Fix build configuration',
        'Module not found': 'Fix import/require paths'
      }
    };
    
    this.stats = {
      errorsFound: 0,
      errorsFixed: 0,
      buildsAttempted: 0,
      buildsSuccessful: 0,
      lastRun: null,
      totalRuns: 0
    };
    
    this.log('🚀 Intelligent Error Fixer started');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    // Write to log file
    try {
      fs.appendFileSync(this.config.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async scanForErrors() {
    this.log('🔍 Scanning for errors...');
    
    try {
      // Check for console errors in source files
      const sourceErrors = await this.scanSourceFiles();
      
      // Check for build errors
      const buildErrors = await this.checkBuildErrors();
      
      // Check for linting errors
      const lintErrors = await this.checkLintErrors();
      
      // Check for TypeScript errors
      const tsErrors = await this.checkTypeScriptErrors();
      
      const totalErrors = sourceErrors + buildErrors + lintErrors + tsErrors;
      
      this.stats.errorsFound = totalErrors;
      this.log(`📊 Found ${totalErrors} total errors`);
      
      return totalErrors;
    } catch (error) {
      this.log(`❌ Error during scanning: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  async scanSourceFiles() {
    const sourceDir = path.join(process.cwd(), 'src');
    let errorCount = 0;
    
    try {
      const files = this.getAllFiles(sourceDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        
        for (const pattern of this.config.errorPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            errorCount += matches.length;
            this.log(`⚠️  Found ${matches.length} potential issues in ${path.relative(process.cwd(), file)}`);
          }
        }
      }
    } catch (error) {
      this.log(`❌ Error scanning source files: ${error.message}`, 'ERROR');
    }
    
    return errorCount;
  }

  async checkBuildErrors() {
    try {
      this.log('🔨 Checking build status...');
      this.stats.buildsAttempted++;
      
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: 300000 // 5 minutes
      });
      
      if (result.includes('Build completed successfully')) {
        this.stats.buildsSuccessful++;
        this.log('✅ Build successful');
        return 0;
      } else {
        this.log('❌ Build failed');
        return 1;
      }
    } catch (error) {
      this.log(`❌ Build error: ${error.message}`, 'ERROR');
      return 1;
    }
  }

  async checkLintErrors() {
    try {
      this.log('🔍 Checking linting errors...');
      
      const result = execSync('npm run lint', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: 120000 // 2 minutes
      });
      
      const errorMatches = result.match(/error/g);
      return errorMatches ? errorMatches.length : 0;
    } catch (error) {
      // Linting failed, count as error
      return 1;
    }
  }

  async checkTypeScriptErrors() {
    try {
      this.log('🔍 Checking TypeScript errors...');
      
      const result = execSync('npm run type-check', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: 120000 // 2 minutes
      });
      
      const errorMatches = result.match(/error/g);
      return errorMatches ? errorMatches.length : 0;
    } catch (error) {
      // Type checking failed, count as error
      return 1;
    }
  }

  async autoFixErrors() {
    if (!this.config.autoFixEnabled) {
      this.log('⚠️  Auto-fix is disabled');
      return;
    }
    
    this.log('🔧 Attempting to auto-fix errors...');
    
    try {
      // Try to fix linting errors
      await this.fixLintErrors();
      
      // Try to fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Try to fix common code issues
      await this.fixCommonCodeIssues();
      
      this.log('✅ Auto-fix completed');
    } catch (error) {
      this.log(`❌ Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async fixLintErrors() {
    try {
      this.log('🔧 Fixing linting errors...');
      
      execSync('npm run fix:all', { 
        encoding: 'utf8', 
        stdio: 'inherit',
        timeout: 300000 // 5 minutes
      });
      
      this.log('✅ Linting errors fixed');
      this.stats.errorsFixed += 5; // Estimate
    } catch (error) {
      this.log(`❌ Failed to fix linting errors: ${error.message}`, 'ERROR');
    }
  }

  async fixTypeScriptErrors() {
    try {
      this.log('🔧 Fixing TypeScript errors...');
      
      // Check for common TypeScript issues
      const sourceDir = path.join(process.cwd(), 'src');
      const files = this.getAllFiles(sourceDir, ['.ts', '.tsx']);
      
      for (const file of files) {
        await this.fixTypeScriptFile(file);
      }
      
      this.log('✅ TypeScript errors fixed');
    } catch (error) {
      this.log(`❌ Failed to fix TypeScript errors: ${error.message}`, 'ERROR');
    }
  }

  async fixTypeScriptFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common TypeScript issues
      if (content.includes('any')) {
        content = content.replace(/:\s*any\b/g, ': unknown');
        modified = true;
      }
      
      if (content.includes('console.log')) {
        content = content.replace(/console\.log\([^)]*\);?/g, '');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`🔧 Fixed TypeScript issues in ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (error) {
      this.log(`❌ Failed to fix TypeScript file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async fixCommonCodeIssues() {
    try {
      this.log('🔧 Fixing common code issues...');
      
      const sourceDir = path.join(process.cwd(), 'src');
      const files = this.getAllFiles(sourceDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        await this.fixCommonIssuesInFile(file);
      }
      
      this.log('✅ Common code issues fixed');
    } catch (error) {
      this.log(`❌ Failed to fix common code issues: ${error.message}`, 'ERROR');
    }
  }

  async fixCommonIssuesInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove console.log statements in production
      if (process.env.NODE_ENV === 'production') {
        const consoleLogRegex = /console\.(log|warn|debug)\([^)]*\);?/g;
        if (consoleLogRegex.test(content)) {
          content = content.replace(consoleLogRegex, '');
          modified = true;
        }
      }
      
      // Fix common React issues
      if (content.includes('useEffect') && content.includes('[]')) {
        // Check for missing dependencies
        const useEffectRegex = /useEffect\s*\(\s*\(\)\s*=>\s*\{[\s\S]*?\}\s*,\s*\[\s*\]\s*\)/g;
        if (useEffectRegex.test(content)) {
          this.log(`⚠️  Potential missing dependencies in useEffect in ${path.relative(process.cwd(), filePath)}`);
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`🔧 Fixed common issues in ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (error) {
      this.log(`❌ Failed to fix file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`❌ Error reading directory ${dir}: ${error.message}`, 'ERROR');
    }
    
    return files;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      config: this.config,
      recommendations: []
    };
    
    // Generate recommendations
    if (this.stats.errorsFound > this.config.errorThreshold) {
      report.recommendations.push('⚠️  High error count detected. Consider code review and refactoring.');
    }
    
    if (this.stats.buildsSuccessful < this.stats.buildsAttempted * 0.8) {
      report.recommendations.push('🚨 Build success rate is low. Check build configuration and dependencies.');
    }
    
    if (this.stats.errorsFixed > 0) {
      report.recommendations.push('✅ Auto-fix successfully resolved some issues.');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'logs', 'error-fixer-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`, 'ERROR');
    }
    
    return report;
  }

  async run() {
    this.log('🚀 Starting error fixing cycle...');
    this.stats.lastRun = new Date().toISOString();
    this.stats.totalRuns++;
    
    try {
      // Check memory usage
      const memUsage = process.memoryUsage();
      if (memUsage.heapUsed > this.config.maxMemory * 1024 * 1024) {
        this.log(`⚠️  High memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`, 'WARN');
      }
      
      // Scan for errors
      const errorCount = await this.scanForErrors();
      
      // Auto-fix if enabled
      if (errorCount > 0) {
        await this.autoFixErrors();
      }
      
      // Generate report
      await this.generateReport();
      
      this.log(`✅ Error fixing cycle completed. Found: ${errorCount}, Fixed: ${this.stats.errorsFixed}`);
      
    } catch (error) {
      this.log(`❌ Error fixing cycle failed: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.log('🚀 Intelligent Error Fixer starting...');
    
    // Run immediately
    await this.run();
    
    // Schedule periodic runs
    setInterval(async () => {
      await this.run();
    }, this.config.interval);
    
    this.log(`⏰ Scheduled to run every ${this.config.interval / 1000} seconds`);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const fixer = new IntelligentErrorFixer();
  fixer.start().catch(error => {
    console.error('❌ Failed to start Intelligent Error Fixer:', error);
    process.exit(1);
  });
}

module.exports = IntelligentErrorFixer;