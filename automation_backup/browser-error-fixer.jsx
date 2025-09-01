#!/usr/bin/env node

/**
 * Advanced Browser Error Auto-Fixer
 * Automatically fixes source code issues based on browser console errors
 * 
 * This script:
 * 1. Analyzes browser console errors
 * 2. Identifies source code patterns that need fixing
 * 3. Automatically applies fixes to source files
 * 4. Creates backup files before making changes
 * 5. Reports all fixes applied
 */
;
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
;
class BrowserErrorFixer {
  constructor() {
    this.projectRoot = path.resolve(__dirname,..');
    this.fixesApplied = [];
    this.backupsCreated = [];
    this.fixPatterns = {
      // JavaScript syntax and reference errors
      'Unexpected token': {
        type: 'syntax',
        patterns: [
          {
            regex: /Unexpected token '([^']+)'/,
            fix: (match, filePath) => this.fixUnexpectedToken(match[1], filePath)
          }
        ]
      },Cannot read property': {
        type: 'null-check',
        patterns: [
          {
            regex: /Cannot read property '([^']+)' of (null|undefined)/,
            fix: (match, filePath) => this.fixNullPropertyAccess(match[1], filePath)
          }
        ]
      },is not a function': {
        type: 'function-check',
        patterns: [
          {
            regex: /([a-zA-Z_$][a-zA-Z0-9_$]*) is not a function/,
            fix: (match, filePath) => this.fixFunctionCall(match[1], filePath)
          }
        ]
      },ReferenceError': {
        type: 'reference',
        patterns: [
          {
            regex: /ReferenceError: ([a-zA-Z_$][a-zA-Z0-9_$]*) is not defined/,
            fix: (match, filePath) => this.fixReferenceError(match[1], filePath)
          }
        ]
      },TypeError': {
        type: 'type',
        patterns: [
          {
            regex: /TypeError: Cannot read properties of (undefined|null)/,
            fix: (match, filePath) => this.fixTypeError(match[1], filePath)
          }
        ]
      }
    };

  async analyzeError(error) {
    // console.log(`🔍 Analyzing error: ${error.message}`);
    
    const fixStrategy = this.identifyFixStrategy(error);
    if (fixStrategy) {
      // console.log(`🔧 Identified fix strategy: ${fixStrategy.type}`);
      await this.applyFixStrategy(fixStrategy, error);
    } else {
      // console.log(`⚠️  No fix strategy identified for this error`);
    }
  }
<:automation_backup/browser-error-fixer.jsxidentifyFixStrategy(error) {
    const message = error.message || '';
    
    for (const [errorType, strategy] of Object.entries(this.fixPatterns)) {
      if (message.includes(errorType)) {
        return strategy;
      }
    }

    return null;
  }

  async applyFixStrategy(strategy, error) {
    try {
      const sourceFiles = await this.findRelevantSourceFiles(error);
      
      for (const filePath of sourceFiles) {
        // console.log(`📁 Analyzing file: ${path.relative(this.projectRoot, filePath)}`);
        
        const fileContent = await fs.readFile(filePath,utf8');
        const fixes = await this.applyFixesToFile(strategy, fileContent, filePath);
        
        if (fixes.length > 0) {
          await this.createBackup(filePath);
          await this.applyFixes(filePath, fileContent, fixes);
          this.fixesApplied.push({
            file: filePath,
            strategy: strategy.type,
            fixes: fixes,
            timestamp: new Date().toISOString()
          });
        }
      }
    } catch (error) {
      console.error(`❌ Error applying fix strategy:`, error);
    }
  }
<:automation_backup/browser-error-fixer.jsxasync findRelevantSourceFiles(error) {
    const sourceFiles = [];
    const extensions = ['.js',.jsx',.ts',.tsx'];
    
    try {
      // Search for source files in common directories
      const searchDirs = ['src',components',pages',utils',hooks'];
      
      for (const dir of searchDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        try {
          const stats = await fs.stat(dirPath);
          if (stats.isDirectory()) {
            const files = await this.findFilesRecursively(dirPath, extensions);
            sourceFiles.push(...files);
          }
        } catch (err) {
          // Directory doesn't exist, skip
        }
      }

      // If no source files found, search project root
      if (sourceFiles.length === 0) {
        const files = await this.findFilesRecursively(this.projectRoot, extensions);
        sourceFiles.push(...files);
      }

      return sourceFiles.slice(0, 20); // Limit to first 20 files for performance
    } catch (error) {
      console.error('Error finding source files:', error);
      return [];
    }
  }
<:automation_backup/browser-error-fixer.jsxasync findFilesRecursively(dir, extensions, maxDepth = 3) {
    const files = [];
    
    async function search(currentDir, depth) {
      if (depth > maxDepth) return;
      
      try {
        const entries = await fs.readdir(currentDir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(currentDir, entry.name);
          
          if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('node_modules')) {
            await search(fullPath, depth + 1);
          } else if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
            files.push(fullPath);
          }
        }
      } catch (err) {
        // Skip directories we can't read
      }
    }

    await search(dir, 0);
    return files;
  }

  async applyFixesToFile(strategy, fileContent, filePath) {
    const fixes = [];
    
    for (const pattern of strategy.patterns) {
      const matches = fileContent.match(new RegExp(pattern.regex,g'));
      if (matches) {
        for (const match of matches) {
          const fix = await pattern.fix(match, filePath);
          if (fix) {
            fixes.push(fix);
          }
        }
      }
    }

    return fixes;
  }

  async createBackup(filePath) {
    try {
      const backupPath = `${filePath}.backup.${Date.now()}`;
      await fs.copyFile(filePath, backupPath);
      this.backupsCreated.push(backupPath);
      // console.log(`💾 Backup created: ${path.relative(this.projectRoot, backupPath)}`);
    } catch (error) {
      console.error(`❌ Failed to create backup for ${filePath}:`, error);
    }
  }

  async applyFixes(filePath, originalContent, fixes) {
    try {
      let modifiedContent = originalContent;
      
      // Apply fixes in reverse order to maintain line numbers
      for (let i = fixes.length - 1; i >= 0; i--) {
        const fix = fixes[i];
        modifiedContent = this.applySingleFix(modifiedContent, fix);

      await fs.writeFile(filePath, modifiedContent,utf8');
      // console.log(`✅ Applied ${fixes.length} fixes to ${path.relative(this.projectRoot, filePath)}`);
    } catch (error) {
      console.error(`❌ Failed to apply fixes to ${filePath}:`, error);

  applySingleFix(content, fix) {
    if (fix.type === 'replace') {
      return content.replace(fix.search, fix.replace);
    } else if (fix.type === 'insert') {
      const lines = content.split('\n');
      lines.splice(fix.line - 1, 0, fix.content);
      return lines.join('\n');
    } else if (fix.type === 'delete') {
      const lines = content.split('\n');
      lines.splice(fix.line - 1, 1);
      return lines.join('\n');

    return content;

  // Fix implementations
  async fixUnexpectedToken(token, filePath) {
    const commonFixes = {
      '(': '),[': ']',{': '},"': '"',
      "'": "'",`': '`'
    };
    
    if (commonFixes[token]) {
      return {
        type: 'insert',
        line: 1,
        content: `// Auto-fix: Added missing closing ${commonFixes[token]} for ${token}`,
        description: `Added missing closing ${commonFixes[token]}`
      };

    return null;

  async fixNullPropertyAccess(property, filePath) {
    return {
      type: 'replace',
      search: new RegExp(`\\.${property}\\b`,g'),
      replace: `?.${property}`,
      description: `Added optional chaining for property ${property}`
    };

  async fixFunctionCall(functionName, filePath) {
    return {
      type: 'replace',
      search: new RegExp(`\\b${functionName}\\s*\\(`,g'),
      replace: `(typeof ${functionName} === 'function' ? ${functionName}(`,
      description: `Added function existence check for ${functionName}`
    };

  async fixReferenceError(variableName, filePath) {
    // Try to find where this variable should be defined
    const commonFixes = [
      `const ${variableName} = null; // Auto-fix: Variable declaration`,
      `let ${variableName}; // Auto-fix: Variable declaration`,
      `var ${variableName}; // Auto-fix: Variable declaration`
    ];
    
    return {
      type: 'insert',
      line: 1,
      content: commonFixes[0],
      description: `Added variable declaration for ${variableName}`
    };

  async fixTypeError(type, filePath) {
    return {
      type: 'replace',
      search: /\.([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g,
      replace: '?.$1',
      description: `Added optional chaining to prevent ${type} errors`
    };

  async generateFixReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFixes: this.fixesApplied.length,
          totalBackups: this.backupsCreated.length,
          filesModified: [...new Set(this.fixesApplied.map(f => f.file))]
        },
        fixesApplied: this.fixesApplied,
        backupsCreated: this.backupsCreated
      };
      
      const reportPath = path.join(this.projectRoot,reports',auto-fix-report.json');
      await fs.mkdir(path.dirname(reportPath), { recursive: true });
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
      
      // console.log(`📄 Auto-fix report generated: ${reportPath}`);
      return report;
    } catch (error) {
      console.error('❌ Failed to generate fix report:', error);
      return null;

  async cleanupBackups(keepRecent = 5) {
    try {
      if (this.backupsCreated.length <= keepRecent) {
        return;

      const backupsToRemove = this.backupsCreated.slice(0, -keepRecent);
      
      for (const backup of backupsToRemove) {
        try {
          await fs.unlink(backup);
          // console.log(`🗑️  Removed old backup: ${path.relative(this.projectRoot, backup)}`);
        } catch (err) {
          // Backup already removed or inaccessible

      this.backupsCreated = this.backupsCreated.slice(-keepRecent);
    } catch (error) {
      console.error('❌ Error during backup cleanup:', error);

  async runFixCycle(errorLog) {
    // console.log('🚀 Starting browser error auto-fix cycle...');
    
    for (const error of errorLog) {
      await this.analyzeError(error);

    await this.generateFixReport();
    await this.cleanupBackups();
    
    // console.log(`✅ Auto-fix cycle completed. Applied ${this.fixesApplied.length} fixes.`);
    return this.fixesApplied;

// Export for use in other modules
module.exports = BrowserErrorFixer;

// CLI usage
if (require.main === module) {
  const fixer = new BrowserErrorFixer();
  
  // Example usage
  const sampleErrors = [
    { message: "Cannot read property 'length' of null" },
    { message: "ReferenceError: userData is not defined" },
    { message: "TypeError: Cannot read properties of undefined" }
  ];
  
  fixer.runFixCycle(sampleErrors).then(() => {
    // console.log('Auto-fix cycle completed successfully');
    process.exit(0);
  }).catch((error) => {
    console.error('Auto-fix cycle failed:', error);
    process.exit(1);
  });

)))}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}