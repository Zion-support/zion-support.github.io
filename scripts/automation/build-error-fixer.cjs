#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      buildErrorsFixed: 0,
      buildSuccess: false,
      filesProcessed: 0,
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Build Error Fixer: ${message}`);
  }

  async runBuildCheck() {
    this.log('Running build check...');
    
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('Build check passed successfully');
      this.results.buildSuccess = true;
      return { success: true, errors: [] };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errors = this.parseBuildOutput(output);
      
      this.log(`Build check failed with ${errors.length} errors`);
      this.results.buildSuccess = false;
      return { success: false, errors };
    }
  }

  parseBuildOutput(output) {
    const lines = output.split('\n');
    const errors = [];
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error') || line.includes('failed')) {
        const match = line.match(/([^:]+):(\d+):(\d+)\s*-\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            fullLine: line
          });
        } else {
          // Handle errors without line numbers
          errors.push({
            file: 'unknown',
            line: 0,
            column: 0,
            message: line.trim(),
            fullLine: line
          });
        }
      }
    }
    
    return errors;
  }

  async fixBuildErrors(errors) {
    this.log(`Attempting to fix ${errors.length} build errors...`);
    
    let fixedCount = 0;
    
    for (const error of errors) {
      if (await this.fixSingleBuildError(error)) {
        fixedCount++;
      }
    }
    
    this.results.buildErrorsFixed = fixedCount;
    this.log(`Fixed ${fixedCount} out of ${errors.length} build errors`);
    
    return fixedCount;
  }

  async fixSingleBuildError(error) {
    try {
      if (error.file === 'unknown') {
        return await this.fixGenericBuildError(error);
      }
      
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) {
        return false;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (error.line > lines.length) {
        return false;
      }
      
      const lineIndex = error.line - 1;
      const originalLine = lines[lineIndex];
      
      // Apply common build error fixes
      let fixedLine = this.applyBuildErrorFixes(originalLine, error);
      
      if (fixedLine !== originalLine) {
        lines[lineIndex] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed build error in ${error.file}:${error.line}`);
        return true;
      }
      
      return false;
      
    } catch (err) {
      this.log(`Failed to fix build error: ${err.message}`);
      return false;
    }
  }

  async fixGenericBuildError(error) {
    // Handle generic build errors that don't have specific file locations
    const message = error.message.toLowerCase();
    
    if (message.includes('dependency') || message.includes('module not found')) {
      return await this.fixDependencyIssues();
    }
    
    if (message.includes('memory') || message.includes('heap')) {
      return await this.fixMemoryIssues();
    }
    
    if (message.includes('permission') || message.includes('access denied')) {
      return await this.fixPermissionIssues();
    }
    
    return false;
  }

  async fixDependencyIssues() {
    this.log('Attempting to fix dependency issues...');
    
    try {
      // Clear node_modules and reinstall
      if (fs.existsSync('node_modules')) {
        execSync('rm -rf node_modules', { stdio: 'pipe' });
      }
      
      if (fs.existsSync('package-lock.json')) {
        execSync('rm package-lock.json', { stdio: 'pipe' });
      }
      
      // Reinstall dependencies
      execSync('npm install', { stdio: 'pipe' });
      
      this.log('Dependencies reinstalled successfully');
      return true;
      
    } catch (error) {
      this.log(`Failed to fix dependency issues: ${error.message}`);
      return false;
    }
  }

  async fixMemoryIssues() {
    this.log('Attempting to fix memory issues...');
    
    try {
      // Check if we need to increase Node.js memory limit
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      if (packageJson.scripts && packageJson.scripts.build) {
        const buildScript = packageJson.scripts.build;
        if (!buildScript.includes('--max-old-space-size')) {
          packageJson.scripts.build = buildScript.replace(
            'vite build',
            'NODE_OPTIONS="--max-old-space-size=4096" vite build'
          );
          
          fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
          this.log('Updated build script with increased memory limit');
          return true;
        }
      }
      
      return false;
      
    } catch (error) {
      this.log(`Failed to fix memory issues: ${error.message}`);
      return false;
    }
  }

  async fixPermissionIssues() {
    this.log('Attempting to fix permission issues...');
    
    try {
      // Fix file permissions
      execSync('chmod -R 755 .', { stdio: 'pipe' });
      execSync('chmod -R 644 src/**/*.js src/**/*.jsx src/**/*.ts src/**/*.tsx', { stdio: 'pipe' });
      
      this.log('File permissions fixed');
      return true;
      
    } catch (error) {
      this.log(`Failed to fix permission issues: ${error.message}`);
      return false;
    }
  }

  applyBuildErrorFixes(line, error) {
    let fixedLine = line;
    const message = error.message.toLowerCase();
    
    // Fix import/export issues
    if (message.includes('import') || message.includes('export')) {
      if (message.includes('unexpected token')) {
        // Fix missing semicolons or brackets
        if (!line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}')) {
          fixedLine = line + ';';
        }
      }
    }
    
    // Fix JSX issues
    if (message.includes('jsx') || message.includes('unexpected token')) {
      if (line.includes('<') && !line.includes('>') && !line.includes('/>')) {
        if (!this.hasMatchingJSXClosing(line)) {
          fixedLine = line + ' />';
        }
      }
    }
    
    // Fix TypeScript issues
    if (message.includes('type') || message.includes('interface')) {
      if (line.includes(':') && !line.includes(';') && !line.includes('{') && !line.includes('}')) {
        fixedLine = line + ';';
      }
    }
    
    return fixedLine;
  }

  hasMatchingJSXClosing(line) {
    // Simple check for JSX closing
    return line.includes('>') || line.includes('/>');
  }

  async runFullBuildFix() {
    this.log('Running comprehensive build fix...');
    
    try {
      // First, try to fix any obvious issues
      await this.fixDependencyIssues();
      
      // Run build check
      const buildResult = await this.runBuildCheck();
      
      if (buildResult.success) {
        this.results.buildSuccess = true;
        this.results.success = true;
        return true;
      }
      
      // Try to fix build errors
      const fixedCount = await this.fixBuildErrors(buildResult.errors);
      
      if (fixedCount > 0) {
        // Run build check again
        const buildResultAfter = await this.runBuildCheck();
        this.results.buildSuccess = buildResultAfter.success;
        this.results.success = buildResultAfter.success;
      }
      
      return this.results.buildSuccess;
      
    } catch (error) {
      this.log(`Build fix failed: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        buildSuccess: this.results.buildSuccess,
        errorsFixed: this.results.buildErrorsFixed,
        filesProcessed: this.results.filesProcessed,
        successRate: this.results.buildSuccess ? '100%' : '0%',
        efficiency: `Build fix completed in ${Math.round((Date.now() - this.startTime) / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'build-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Build Error Fixer...');
    
    try {
      const buildSuccess = await this.runFullBuildFix();
      
      // Generate report
      await this.generateReport();
      
      this.log(`Build Error Fixer completed. Build success: ${buildSuccess}`);
      return this.results;
      
    } catch (error) {
      this.log(`Build Error Fixer failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }
  {/* Removed stray closing brace */}

// Run the fixer if called directly
if (require.main === module) {
  const fixer = new BuildErrorFixer();
  fixer.run().then(results => {
    process.exit(results.buildSuccess ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = BuildErrorFixer;