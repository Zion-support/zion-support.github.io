#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('fs').watch || require('chokidar');

class ErrorPreventionOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.fixHistory = [];
    this.errorPatterns = this.initializeErrorPatterns();
    this.autoFixEnabled = process.env.AUTO_FIX_ENABLED !== 'false';
    this.scanInterval = parseInt(process.env.SCAN_INTERVAL) || 300000; // 5 minutes
    this.isRunning = false;
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logger = {
      info: (msg) => this.log('INFO', msg),
      warn: (msg) => this.log('WARN', msg),
      error: (msg) => this.log('ERROR', msg),
      success: (msg) => this.log('SUCCESS', msg)
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'error-prevention-orchestrator.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  initializeErrorPatterns() {
    return {
      // Syntax errors
      syntax: {
        'Unexpected token {': {
          pattern: /Unexpected token \{/,
          fix: this.fixSyntaxErrors.bind(this),
          priority: 'high'
        },
        'Unexpected token [': {
          pattern: /Unexpected token \[/,
          fix: this.fixSyntaxErrors.bind(this),
          priority: 'high'
        },
        'Unexpected token =': {
          pattern: /Unexpected token =/,
          fix: this.fixSyntaxErrors.bind(this),
          priority: 'high'
        },
        'Unexpected token ;': {
          pattern: /Unexpected token ;/,
          fix: this.fixSyntaxErrors.bind(this),
          priority: 'high'
        }
      },
      
      // TypeScript errors
      typescript: {
        'Type expected': {
          pattern: /Type expected/,
          fix: this.fixTypeScriptErrors.bind(this),
          priority: 'medium'
        },
        'Identifier expected': {
          pattern: /Identifier expected/,
          fix: this.fixTypeScriptErrors.bind(this),
          priority: 'medium'
        },
        'Parameter declaration expected': {
          pattern: /Parameter declaration expected/,
          fix: this.fixTypeScriptErrors.bind(this),
          priority: 'medium'
        }
      },
      
      // ESLint errors
      eslint: {
        'no-unused-vars': {
          pattern: /'([^']+)' is defined but never used/,
          fix: this.fixUnusedVariables.bind(this),
          priority: 'low'
        },
        'no-console': {
          pattern: /Unexpected console statement/,
          fix: this.fixConsoleStatements.bind(this),
          priority: 'low'
        },
        'no-undef': {
          pattern: /'([^']+)' is not defined/,
          fix: this.fixUndefinedVariables.bind(this),
          priority: 'medium'
        }
      },
      
      // JSX errors
      jsx: {
        'JSX expressions must have one parent element': {
          pattern: /JSX expressions must have one parent element/,
          fix: this.fixJSXParentElement.bind(this),
          priority: 'high'
        },
        'Expected corresponding JSX closing tag': {
          pattern: /Expected corresponding JSX closing tag/,
          fix: this.fixJSXClosingTags.bind(this),
          priority: 'high'
        }
      }
    };
  }

  async start() {
    this.logger.info('Starting Error Prevention Orchestrator...');
    this.isRunning = true;
    
    // Initial scan
    await this.performFullScan();
    
    // Start continuous monitoring
    this.startContinuousMonitoring();
    
    // Start scheduled maintenance
    this.startScheduledMaintenance();
    
    this.logger.success('Error Prevention Orchestrator started successfully');
  }

  async performFullScan() {
    this.logger.info('Performing full project scan...');
    
    try {
      // Run linting
      const lintResults = await this.runLinting();
      if (lintResults.errors > 0) {
        this.logger.warn(`Found ${lintResults.errors} linting errors`);
        await this.autoFixLintingErrors();
      }
      
      // Run TypeScript check
      const tsResults = await this.runTypeScriptCheck();
      if (tsResults.errors > 0) {
        this.logger.warn(`Found ${tsResults.errors} TypeScript errors`);
        await this.autoFixTypeScriptErrors();
      }
      
      // Check for common file issues
      await this.checkAndFixFileIssues();
      
      this.logger.success('Full scan completed');
    } catch (error) {
      this.logger.error(`Error during full scan: ${error.message}`);
    }
  }

  async runLinting() {
    try {
      const result = execSync('npm run lint', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return { errors: 0, warnings: 0, output: result };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (output.match(/error/g) || []).length;
      const warningCount = (output.match(/warning/g) || []).length;
      return { errors: errorCount, warnings: warningCount, output };
    }
  }

  async runTypeScriptCheck() {
    try {
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return { errors: 0, warnings: 0, output: result };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (output.match(/error/g) || []).length;
      return { errors: errorCount, warnings: 0, output };
    }
  }

  async autoFixLintingErrors() {
    if (!this.autoFixEnabled) return;
    
    this.logger.info('Auto-fixing linting errors...');
    
    try {
      // Try to auto-fix with ESLint
      execSync('npm run fix:all', { 
        cwd: this.projectRoot, 
        stdio: 'pipe'
      });
      this.logger.success('Linting errors auto-fixed');
    } catch (error) {
      this.logger.warn('Could not auto-fix all linting errors');
    }
  }

  async autoFixTypeScriptErrors() {
    if (!this.autoFixEnabled) return;
    
    this.logger.info('Auto-fixing TypeScript errors...');
    
    // Fix common TypeScript issues
    await this.fixCommonTypeScriptIssues();
  }

  async fixCommonTypeScriptIssues() {
    const commonFixes = [
      this.fixMissingReactImports.bind(this),
      this.fixJSXSyntax.bind(this),
      this.fixTypeAnnotations.bind(this),
      this.fixInterfaceDefinitions.bind(this)
    ];
    
    for (const fix of commonFixes) {
      try {
        await fix();
      } catch (error) {
        this.logger.warn(`Fix failed: ${error.message}`);
      }
    }
  }

  async fixSyntaxErrors(error) {
    // Generic syntax error fixer
    this.logger.info(`Attempting to fix syntax error: ${error.message}`);
    return { fixed: false, description: 'Syntax error detected, manual review required' };
  }

  async fixTypeScriptErrors(error) {
    // Generic TypeScript error fixer
    this.logger.info(`Attempting to fix TypeScript error: ${error.message}`);
    return { fixed: false, description: 'TypeScript error detected, manual review required' };
  }

  async fixUnusedVariables(error) {
    // Generic unused variables fixer
    this.logger.info(`Attempting to fix unused variables: ${error.message}`);
    return { fixed: false, description: 'Unused variables detected, manual review required' };
  }

  async fixConsoleStatements(error) {
    // Generic console statements fixer
    this.logger.info(`Attempting to fix console statements: ${error.message}`);
    return { fixed: false, description: 'Console statements detected, manual review required' };
  }

  async fixUndefinedVariables(error) {
    // Generic undefined variables fixer
    this.logger.info(`Attempting to fix undefined variables: ${error.message}`);
    return { fixed: false, description: 'Undefined variables detected, manual review required' };
  }

  async fixJSXParentElement(error) {
    // Generic JSX parent element fixer
    this.logger.info(`Attempting to fix JSX parent element: ${error.message}`);
    return { fixed: false, description: 'JSX parent element issue detected, manual review required' };
  }

  async fixJSXClosingTags(error) {
    // Generic JSX closing tags fixer
    this.logger.info(`Attempting to fix JSX closing tags: ${error.message}`);
    return { fixed: false, description: 'JSX closing tags issue detected, manual review required' };
  }

  async fixMissingReactImports() {
    const reactFiles = this.findFilesByPattern('**/*.{tsx,jsx}');
    
    for (const file of reactFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if React is imported
        if (content.includes('React') && !content.includes("import React")) {
          const newContent = "import React from 'react';\n" + content;
          fs.writeFileSync(file, newContent);
          this.logFix(file, 'Added missing React import');
        }
      } catch (error) {
        this.logger.warn(`Failed to fix React import in ${file}: ${error.message}`);
      }
    }
  }

  async fixJSXSyntax() {
    const jsxFiles = this.findFilesByPattern('**/*.{tsx,jsx}');
    
    for (const file of jsxFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix JSX fragments
        if (content.includes('<>') && !content.includes('</>')) {
          content = content.replace(/<>/g, '<React.Fragment>').replace(/<\/>/g, '</React.Fragment>');
          fixed = true;
        }
        
        // Fix missing React.Fragment import
        if (content.includes('React.Fragment') && !content.includes("import { Fragment }")) {
          content = content.replace(/import React from 'react';/, "import React, { Fragment } from 'react';");
          content = content.replace(/React\.Fragment/g, 'Fragment');
          fixed = true;
        }
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.logFix(file, 'Fixed JSX syntax');
        }
      } catch (error) {
        this.logger.warn(`Failed to fix JSX syntax in ${file}: ${error.message}`);
      }
    }
  }

  async fixTypeAnnotations() {
    const tsFiles = this.findFilesByPattern('**/*.ts');
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix missing type annotations
        const functionPattern = /function\s+(\w+)\s*\(([^)]*)\)\s*{/g;
        content = content.replace(functionPattern, (match, funcName, params) => {
          if (!params.includes(':')) {
            const newParams = params.split(',').map(p => p.trim()).map(p => p + ': any').join(', ');
            fixed = true;
            return `function ${funcName}(${newParams}) {`;
          }
          return match;
        });
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.logFix(file, 'Added missing type annotations');
        }
      } catch (error) {
        this.logger.warn(`Failed to fix type annotations in ${file}: ${error.message}`);
      }
    }
  }

  async fixInterfaceDefinitions() {
    const tsFiles = this.findFilesByPattern('**/*.ts');
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix malformed interfaces
        const interfacePattern = /interface\s+(\w+)\s*{([^}]*)}/g;
        content = content.replace(interfacePattern, (match, interfaceName, props) => {
          if (props.includes('=') || props.includes(';')) {
            // Convert to type alias if it looks like a value
            fixed = true;
            return `type ${interfaceName} = {${props}}`;
          }
          return match;
        });
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.logFix(file, 'Fixed interface definitions');
        }
      } catch (error) {
        this.logger.warn(`Failed to fix interface definitions in ${file}: ${error.message}`);
      }
    }
  }

  async checkAndFixFileIssues() {
    // Check for duplicate files
    await this.removeDuplicateFiles();
    
    // Check for corrupted files
    await this.fixCorruptedFiles();
    
    // Check for empty files
    await this.removeEmptyFiles();
  }

  async removeDuplicateFiles() {
    const allFiles = this.findFilesByPattern('**/*');
    const duplicateMap = this.findDuplicateFiles(allFiles);
    
    for (const [original, duplicateFiles] of duplicateMap) {
      for (const duplicate of duplicateFiles) {
        try {
          fs.unlinkSync(duplicate);
          this.logFix(duplicate, `Removed duplicate of ${original}`);
        } catch (error) {
          this.logger.warn(`Failed to remove duplicate ${duplicate}: ${error.message}`);
        }
      }
    }
  }

  findDuplicateFiles(files) {
    const fileMap = new Map();
    const duplicates = new Map();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const hash = this.hashContent(content);
        
        if (fileMap.has(hash)) {
          if (!duplicates.has(fileMap.get(hash))) {
            duplicates.set(fileMap.get(hash), []);
          }
          duplicates.get(fileMap.get(hash)).push(file);
        } else {
          fileMap.set(hash, file);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return duplicates;
  }

  hashContent(content) {
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }

  async fixCorruptedFiles() {
    const allFiles = this.findFilesByPattern('**/*.{ts,tsx,js,jsx}');
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common corruption patterns
        if (this.isFileCorrupted(content)) {
          await this.attemptFileRecovery(file, content);
        }
      } catch (error) {
        this.logger.warn(`Failed to check file ${file}: ${error.message}`);
      }
    }
  }

  isFileCorrupted(content) {
    const corruptionPatterns = [
      /^\s*$/, // Empty or whitespace only
      /^[^\w\s<>{}()[\]"'`;:,.\-+=!@#$%^&*|\\/]+$/, // Only special characters
      /^\s*[^\w\s<>{}()[\]"'`;:,.\-+=!@#$%^&*|\\/]+\s*$/, // Special characters with whitespace
    ];
    
    return corruptionPatterns.some(pattern => pattern.test(content));
  }

  async attemptFileRecovery(file, content) {
    try {
      // Try to restore from backup
      const backupFile = file + '.backup';
      if (fs.existsSync(backupFile)) {
        const backupContent = fs.readFileSync(backupFile, 'utf8');
        if (!this.isFileCorrupted(backupContent)) {
          fs.writeFileSync(file, backupContent);
          this.logFix(file, 'Restored from backup');
          return;
        }
      }
      
      // If no backup or backup is also corrupted, try to create a minimal valid file
      const extension = path.extname(file);
      let minimalContent = '';
      
      if (extension === '.tsx' || extension === '.jsx') {
        minimalContent = `import React from 'react';

export default function ${path.basename(file, extension)}() {
  return (
    <div>
      <h1>${path.basename(file, extension)}</h1>
      <p>This file was automatically recovered.</p>
    </div>
  );
}`;
      } else if (extension === '.ts') {
        minimalContent = `// This file was automatically recovered
export {};`;
      } else if (extension === '.js') {
        minimalContent = `// This file was automatically recovered
module.exports = {};`;
      }
      
      if (minimalContent) {
        fs.writeFileSync(file, minimalContent);
        this.logFix(file, 'Created minimal recovery file');
      }
    } catch (error) {
      this.logger.error(`Failed to recover file ${file}: ${error.message}`);
    }
  }

  async removeEmptyFiles() {
    const allFiles = this.findFilesByPattern('**/*');
    
    for (const file of allFiles) {
      try {
        const stats = fs.statSync(file);
        if (stats.size === 0 && !this.isDirectory(file)) {
          fs.unlinkSync(file);
          this.logFix(file, 'Removed empty file');
        }
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
  }

  isDirectory(file) {
    try {
      return fs.statSync(file).isDirectory();
    } catch {
      return false;
    }
  }

  findFilesByPattern(pattern) {
    const glob = require('glob');
    try {
      return glob.sync(pattern, { 
        cwd: this.projectRoot, 
        absolute: true,
        ignore: ['node_modules/**', 'dist/**', '.git/**', '*.log', 'logs/**']
      });
    } catch (error) {
      this.logger.warn(`Failed to find files with pattern ${pattern}: ${error.message}`);
      return [];
    }
  }

  startContinuousMonitoring() {
    this.logger.info('Starting continuous file monitoring...');
    
    // Monitor for file changes
    const watcher = chokidar(this.projectRoot, {
      ignored: /(node_modules|\.git|dist|logs|reports)/,
      persistent: true
    });
    
    watcher.on('change', async (filePath) => {
      if (this.isRunning && this.shouldMonitorFile(filePath)) {
        this.logger.info(`File changed: ${filePath}`);
        await this.handleFileChange(filePath);
      }
    });
    
    watcher.on('error', (error) => {
      this.logger.error(`File watcher error: ${error.message}`);
    });
  }

  shouldMonitorFile(filePath) {
    const ext = path.extname(filePath);
    return ['.ts', '.tsx', '.js', '.jsx', '.json'].includes(ext);
  }

  async handleFileChange(filePath) {
    try {
      // Quick check for obvious errors
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (this.hasObviousErrors(content)) {
        this.logger.warn(`Obvious errors detected in ${filePath}`);
        await this.quickFixFile(filePath, content);
      }
    } catch (error) {
      this.logger.warn(`Failed to handle file change for ${filePath}: ${error.message}`);
    }
  }

  hasObviousErrors(content) {
    const obviousErrorPatterns = [
      /^\s*[^\w\s<>{}()[\]"'`;:,.\-+=!@#$%^&*|\\/]+\s*$/, // Only special characters
      /<>[^<]*$/, // Unclosed JSX fragment
      /<[^>]*$/, // Unclosed JSX tag
      /function\s+\w+\s*\([^)]*\)\s*\{[^}]*$/, // Unclosed function
    ];
    
    return obviousErrorPatterns.some(pattern => pattern.test(content));
  }

  async quickFixFile(filePath, content) {
    try {
      let fixed = false;
      let newContent = content;
      
      // Fix unclosed JSX fragments
      if (content.includes('<>') && !content.includes('</>')) {
        newContent = content + '\n</>';
        fixed = true;
      }
      
      // Fix unclosed JSX tags
      const openTags = content.match(/<(\w+)[^>]*>/g) || [];
      const closeTags = content.match(/<\/(\w+)>/g) || [];
      
      if (openTags.length > closeTags.length) {
        // Add missing close tags
        const missingTags = openTags.slice(closeTags.length).reverse();
        for (const tag of missingTags) {
          const tagName = tag.match(/<(\w+)/)?.[1];
          if (tagName) {
            newContent += `\n</${tagName}>`;
            fixed = true;
          }
        }
      }
      
      if (fixed) {
        fs.writeFileSync(filePath, newContent);
        this.logFix(filePath, 'Quick fixed obvious errors');
      }
    } catch (error) {
      this.logger.warn(`Failed to quick fix file ${filePath}: ${error.message}`);
    }
  }

  startScheduledMaintenance() {
    this.logger.info('Starting scheduled maintenance...');
    
    setInterval(async () => {
      if (this.isRunning) {
        this.logger.info('Running scheduled maintenance...');
        await this.performMaintenance();
      }
    }, this.scanInterval);
  }

  async performMaintenance() {
    try {
      // Clean up old logs
      await this.cleanupOldLogs();
      
      // Generate reports
      await this.generateReports();
      
      // Check for new error patterns
      await this.updateErrorPatterns();
      
      this.logger.success('Scheduled maintenance completed');
    } catch (error) {
      this.logger.error(`Maintenance failed: ${error.message}`);
    }
  }

  async cleanupOldLogs() {
    const logFiles = this.findFilesByPattern('logs/*.log');
    const now = Date.now();
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
    
    for (const logFile of logFiles) {
      try {
        const stats = fs.statSync(logFile);
        if (now - stats.mtime.getTime() > maxAge) {
          fs.unlinkSync(logFile);
          this.logger.info(`Cleaned up old log file: ${logFile}`);
        }
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
  }

  async generateReports() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixHistory.length,
      recentFixes: this.fixHistory.slice(-10),
      projectHealth: await this.assessProjectHealth(),
      recommendations: this.generateRecommendations()
    };
    
    const reportFile = path.join(this.reportsDir, `error-prevention-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.logger.info(`Generated report: ${reportFile}`);
  }

  async assessProjectHealth() {
    try {
      const lintResults = await this.runLinting();
      const tsResults = await this.runTypeScriptCheck();
      
      const totalErrors = lintResults.errors + tsResults.errors;
      const totalWarnings = lintResults.warnings + tsResults.warnings;
      
      let health = 'excellent';
      if (totalErrors > 100) health = 'poor';
      else if (totalErrors > 50) health = 'fair';
      else if (totalErrors > 10) health = 'good';
      
      return {
        status: health,
        totalErrors,
        totalWarnings,
        lintErrors: lintResults.errors,
        tsErrors: tsResults.errors
      };
    } catch (error) {
      return { status: 'unknown', error: error.message };
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.fixHistory.length > 100) {
      recommendations.push('Consider implementing stricter code quality gates');
    }
    
    if (this.fixHistory.some(fix => fix.type === 'syntax')) {
      recommendations.push('Review development workflow to catch syntax errors earlier');
    }
    
    if (this.fixHistory.some(fix => fix.type === 'typescript')) {
      recommendations.push('Enable stricter TypeScript configuration');
    }
    
    return recommendations;
  }

  async updateErrorPatterns() {
    // Analyze recent fixes to identify new error patterns
    const recentFixes = this.fixHistory.slice(-50);
    const newPatterns = this.analyzeNewPatterns(recentFixes);
    
    if (newPatterns.length > 0) {
      this.logger.info(`Identified ${newPatterns.length} new error patterns`);
      // Could extend this to automatically add new patterns to the system
    }
  }

  analyzeNewPatterns(fixes) {
    const patterns = new Set();
    
    for (const fix of fixes) {
      if (fix.errorMessage) {
        // Extract potential patterns from error messages
        const words = fix.errorMessage.split(/\s+/);
        for (const word of words) {
          if (word.length > 5 && /^[A-Z]/.test(word)) {
            patterns.add(word);
          }
        }
      }
    }
    
    return Array.from(patterns);
  }

  logFix(file, description, type = 'auto', errorMessage = null) {
    const fix = {
      timestamp: new Date().toISOString(),
      file,
      description,
      type,
      errorMessage
    };
    
    this.fixHistory.push(fix);
    
    // Keep only last 1000 fixes
    if (this.fixHistory.length > 1000) {
      this.fixHistory = this.fixHistory.slice(-1000);
    }
    
    this.logger.success(`Fixed: ${description} in ${file}`);
  }

  stop() {
    this.logger.info('Stopping Error Prevention Orchestrator...');
    this.isRunning = false;
    this.logger.success('Error Prevention Orchestrator stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      totalFixes: this.fixHistory.length,
      recentFixes: this.fixHistory.slice(-5),
      projectHealth: this.assessProjectHealth()
    };
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ErrorPreventionOrchestrator();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      orchestrator.start();
      break;
    case 'stop':
      orchestrator.stop();
      break;
    case 'status':
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case 'scan':
      orchestrator.performFullScan();
      break;
    default:
      console.log('Usage: node error-prevention-orchestrator.cjs [start|stop|status|scan]');
      process.exit(1);
  }
}

module.exports = ErrorPreventionOrchestrator;