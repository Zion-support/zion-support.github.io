#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorPreventionMonitor {
  constructor() {
    this.workspacePath = process.cwd();
    this.logsPath = path.join(this.workspacePath, 'logs');
    this.reportsPath = path.join(this.workspacePath, 'automation-reports');
    this.ensureDirectories();
    this.errorPatterns = new Map();
    this.preventionHistory = new Map();
  }

  ensureDirectories() {
    [this.logsPath, this.reportsPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsPath, 'error-prevention-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async scanForPotentialErrors() {
    this.log('🔍 Scanning for potential errors...');
    
    const potentialErrors = [];
    
    // Scan source files for common error patterns
    const sourceFiles = this.findSourceFiles();
    
    for (const filePath of sourceFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const errors = this.analyzeFileForPotentialErrors(filePath, content);
        potentialErrors.push(...errors);
      } catch (error) {
        this.log(`⚠️ Could not read file ${filePath}: ${error.message}`, 'WARN');
      }
    }
    
    this.log(`Found ${potentialErrors.length} potential error patterns`);
    return potentialErrors;
  }

  findSourceFiles() {
    const sourceFiles = [];
    
    const scanDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && !file.startsWith('node_modules')) {
          scanDirectory(filePath);
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(file)) {
          sourceFiles.push(filePath);
        }
      });
    };
    
    scanDirectory(this.workspacePath);
    return sourceFiles;
  }

  analyzeFileForPotentialErrors(filePath, content) {
    const errors = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Check for common error patterns
      if (this.detectUnsafeCode(line)) {
        errors.push({
          file: filePath,
          line: lineNumber,
          pattern: 'unsafe-code',
          description: 'Potentially unsafe code detected',
          severity: 'warning'
        });
      }
      
      if (this.detectMemoryLeak(line)) {
        errors.push({
          file: filePath,
          line: lineNumber,
          pattern: 'memory-leak',
          description: 'Potential memory leak detected',
          severity: 'warning'
        });
      }
      
      if (this.detectAsyncError(line)) {
        errors.push({
          file: filePath,
          line: lineNumber,
          pattern: 'async-error',
          description: 'Potential async error handling issue',
          severity: 'warning'
        });
      }
      
      if (this.detectTypeIssue(line)) {
        errors.push({
          file: filePath,
          line: lineNumber,
          pattern: 'type-issue',
          description: 'Potential type-related issue',
          severity: 'warning'
        });
      }
    }
    
    return errors;
  }

  detectUnsafeCode(line) {
    const unsafePatterns = [
      /eval\s*\(/,
      /Function\s*\(/,
      /innerHTML\s*=/,
      /outerHTML\s*=/,
      /document\.write\s*\(/,
      /setTimeout\s*\([^,]*,\s*0\)/,
      /setInterval\s*\([^,]*,\s*0\)/
    ];
    
    return unsafePatterns.some(pattern => pattern.test(line));
  }

  detectMemoryLeak(line) {
    const memoryLeakPatterns = [
      /addEventListener\s*\([^,]*,\s*[^,]*,\s*false\)/,
      /setInterval\s*\([^,]*,\s*\d+\)/,
      /setTimeout\s*\([^,]*,\s*\d+\)/,
      /new\s+Promise\s*\(/,
      /fetch\s*\(/
    ];
    
    return memoryLeakPatterns.some(pattern => pattern.test(line));
  }

  detectAsyncError(line) {
    const asyncErrorPatterns = [
      /\.then\s*\([^)]*\)/,
      /\.catch\s*\([^)]*\)/,
      /async\s+function/,
      /await\s+/
    ];
    
    return asyncErrorPatterns.some(pattern => pattern.test(line));
  }

  detectTypeIssue(line) {
    const typeIssuePatterns = [
      /:\s*any\s*[=,]/,
      /as\s+any/,
      /<any>/,
      /any\[\]/,
      /Record<string,\s*any>/,
      /{[^}]*:\s*any[^}]*}/
    ];
    
    return typeIssuePatterns.some(pattern => pattern.test(line));
  }

  async applyPreventiveFixes(potentialErrors) {
    this.log(`🔧 Applying preventive fixes for ${potentialErrors.length} potential issues...`);
    
    let fixedCount = 0;
    const fixResults = [];

    for (const error of potentialErrors) {
      try {
        const fixed = await this.applyPreventiveFix(error);
        if (fixed) {
          fixedCount++;
        }
        
        fixResults.push({
          error,
          fixed,
          timestamp: new Date().toISOString()
        });
        
      } catch (fixError) {
        this.log(`❌ Error applying preventive fix: ${fixError.message}`, 'ERROR');
        fixResults.push({
          error,
          fixed: false,
          error: fixError.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    this.log(`✅ Applied ${fixedCount} preventive fixes`);
    return { fixedCount, totalIssues: potentialErrors.length, results: fixResults };
  }

  async applyPreventiveFix(error) {
    const filePath = error.file;
    
    if (!fs.existsSync(filePath)) {
      return false;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const lineIndex = error.line - 1;
      
      if (lineIndex < 0 || lineIndex >= lines.length) {
        return false;
      }

      const originalLine = lines[lineIndex];
      let fixedLine = originalLine;
      let fixed = false;

      switch (error.pattern) {
        case 'unsafe-code':
          fixedLine = await this.fixUnsafeCode(originalLine);
          fixed = fixedLine !== originalLine;
          break;
          
        case 'memory-leak':
          fixedLine = await this.fixMemoryLeak(originalLine);
          fixed = fixedLine !== originalLine;
          break;
          
        case 'async-error':
          fixedLine = await this.fixAsyncError(originalLine);
          fixed = fixedLine !== originalLine;
          break;
          
        case 'type-issue':
          fixedLine = await this.fixTypeIssue(originalLine);
          fixed = fixedLine !== originalLine;
          break;
      }

      if (fixed) {
        lines[lineIndex] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`✅ Applied preventive fix in ${filePath}:${error.line}`);
        return true;
      }

      return false;
    } catch (fixError) {
      this.log(`❌ Failed to apply preventive fix: ${fixError.message}`, 'ERROR');
      return false;
    }
  }

  async fixUnsafeCode(line) {
    let fixedLine = line;
    
    // Replace eval with safer alternatives
    if (line.includes('eval(')) {
      fixedLine = line.replace(/eval\s*\(([^)]+)\)/g, 'JSON.parse($1)');
    }
    
    // Replace innerHTML with textContent where possible
    if (line.includes('.innerHTML =')) {
      fixedLine = line.replace(/\.innerHTML\s*=\s*([^;]+)/g, '.textContent = $1');
    }
    
    return fixedLine;
  }

  async fixMemoryLeak(line) {
    let fixedLine = line;
    
    // Add cleanup for event listeners
    if (line.includes('addEventListener')) {
      fixedLine = line.replace(
        /addEventListener\s*\(([^,]+),\s*([^,]+),\s*false\)/g,
        'addEventListener($1, $2, { once: true })'
      );
    }
    
    return fixedLine;
  }

  async fixAsyncError(line) {
    let fixedLine = line;
    
    // Add error handling for promises
    if (line.includes('.then(') && !line.includes('.catch(')) {
      fixedLine = line + '\n  .catch(error => console.error(\'Error:\', error))';
    }
    
    return fixedLine;
  }

  async fixTypeIssue(line) {
    let fixedLine = line;
    
    // Replace any with more specific types
    if (line.includes(': any')) {
      fixedLine = line.replace(/: any/g, ': unknown');
    }
    
    if (line.includes('as any')) {
      fixedLine = line.replace(/as any/g, 'as unknown');
    }
    
    return fixedLine;
  }

  async generateReport(fixResults) {
    this.log('📊 Generating error prevention monitoring report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: fixResults.totalIssues,
        fixedIssues: fixResults.fixedCount,
        preventionRate: fixResults.totalIssues > 0 ? (fixResults.fixedCount / fixResults.totalIssues * 100).toFixed(2) : 100
      },
      fixResults: fixResults.results,
      recommendations: [
        'Review applied fixes to ensure they meet your requirements',
        'Consider adding more specific type annotations',
        'Implement proper error handling for async operations',
        'Regularly review code for potential security issues'
      ]
    };

    const reportFile = path.join(this.reportsPath, 'error-prevention-monitor-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report generated: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Error Prevention Monitor...');
    
    try {
      // Scan for potential errors
      const potentialErrors = await this.scanForPotentialErrors();
      
      if (potentialErrors.length === 0) {
        this.log('🎉 No potential errors detected!');
        return { success: true, issues: [], fixed: 0 };
      }
      
      // Apply preventive fixes
      const fixResults = await this.applyPreventiveFixes(potentialErrors);
      
      // Generate report
      const report = await this.generateReport(fixResults);
      
      this.log('🎉 Error Prevention Monitor completed!');
      this.log(`📊 Applied ${fixResults.fixedCount} preventive fixes`);
      
      return {
        success: fixResults.fixedCount > 0,
        issues: potentialErrors,
        fixed: fixResults.fixedCount,
        report
      };
      
    } catch (error) {
      this.log(`💥 Error Prevention Monitor failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const monitor = new ErrorPreventionMonitor();
  monitor.run().catch(console.error);
}

module.exports = ErrorPreventionMonitor;