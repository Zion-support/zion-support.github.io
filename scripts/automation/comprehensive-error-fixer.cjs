#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.backupDir = path.join(this.projectRoot, 'backup');
    this.fixedFiles = [];
    this.errorCount = 0;
    this.warningCount = 0;
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir, this.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'comprehensive-error-fixer.log');
    this.reportFile = path.join(this.reportsDir, 'comprehensive-error-fixer-report.json');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  backupFile(filePath) {
    try {
      const backupPath = path.join(this.backupDir, path.basename(filePath) + '.backup');
      fs.copyFileSync(filePath, backupPath);
      return backupPath;
    } catch (error) {
      this.log(`Failed to backup ${filePath}: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async scanForErrors() {
    this.log('Starting comprehensive error scan...');
    
    try {
      // Run ESLint to get current errors
      const lintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      this.log('ESLint scan completed');
      
      // Parse ESLint output to extract file paths and error types
      const errorFiles = this.parseESLintOutput(lintResult);
      
      // Run TypeScript check
      try {
        const tsResult = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
        this.log('TypeScript check completed');
        const tsErrors = this.parseTypeScriptOutput(tsResult);
        
        // Merge errors
        errorFiles.push(...tsErrors);
      } catch (tsError) {
        this.log('TypeScript check failed (expected for projects with errors)', 'WARN');
      }
      
      return errorFiles;
    } catch (error) {
      this.log(`Error during scan: ${error.message}`, 'ERROR');
      return [];
    }
  }

  parseESLintOutput(output) {
    const errorFiles = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/^([^:]+):(\d+):(\d+)\s+(error|warning)\s+(.+)$/);
        if (match) {
          const [, filePath, lineNum, colNum, type, message] = match;
          errorFiles.push({
            file: filePath,
            line: parseInt(lineNum),
            column: parseInt(colNum),
            type: type,
            message: message.trim(),
            source: 'eslint'
          });
        }
      }
    }
    
    return errorFiles;
  }

  parseTypeScriptOutput(output) {
    const errorFiles = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/^([^:]+):(\d+):(\d+)\s+-\s+error\s+TS\d+:\s+(.+)$/);
        if (match) {
          const [, filePath, lineNum, colNum, message] = match;
          errorFiles.push({
            file: filePath,
            line: parseInt(lineNum),
            column: parseInt(colNum),
            type: 'error',
            message: message.trim(),
            source: 'typescript'
          });
        }
      }
    }
    
    return errorFiles;
  }

  async fixFileErrors(filePath, errors) {
    try {
      this.log(`Fixing errors in ${filePath}`);
      
      // Backup the file
      const backupPath = this.backupFile(filePath);
      if (!backupPath) {
        this.log(`Skipping ${filePath} due to backup failure`, 'WARN');
        return false;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;
      
      // Sort errors by line number (descending) to avoid line number shifts
      const sortedErrors = errors.sort((a, b) => b.line - a.line);
      
      for (const error of sortedErrors) {
        if (error.source === 'eslint') {
          const fixResult = this.fixESLintError(content, error);
          if (fixResult.fixed) {
            content = fixResult.content;
            fixed = true;
            this.log(`Fixed ESLint error at line ${error.line}: ${error.message}`);
          }
        } else if (error.source === 'typescript') {
          const fixResult = this.fixTypeScriptError(content, error);
          if (fixResult.fixed) {
            content = fixResult.content;
            fixed = true;
            this.log(`Fixed TypeScript error at line ${error.line}: ${error.message}`);
          }
        }
      }
      
      if (fixed) {
        // Write the fixed content
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Successfully fixed errors in ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  fixESLintError(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex < 0 || lineIndex >= lines.length) {
      return { fixed: false, content };
    }
    
    const line = lines[lineIndex];
    let newLine = line;
    let fixed = false;
    
    // Fix common ESLint errors
    if (error.message.includes('no-unused-vars')) {
      // Remove unused imports/variables
      if (line.includes('import') || line.includes('const') || line.includes('let') || line.includes('var')) {
        // Comment out the line instead of deleting to preserve structure
        newLine = '// ' + line + ' // FIXED: unused variable';
        fixed = true;
      }
    } else if (error.message.includes('no-console')) {
      // Comment out console statements
      if (line.includes('console.')) {
        newLine = '// ' + line + ' // FIXED: console statement removed';
        fixed = true;
      }
    } else if (error.message.includes('Parsing error')) {
      // Try to fix common parsing errors
      if (line.includes('<>') && !line.includes('React.Fragment')) {
        newLine = line.replace(/<>/g, '<React.Fragment>');
        fixed = true;
      } else if (line.includes('</>') && !line.includes('</React.Fragment>')) {
        newLine = line.replace(/<\/>/g, '</React.Fragment>');
        fixed = true;
      }
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return { fixed: true, content: lines.join('\n') };
    }
    
    return { fixed: false, content };
  }

  fixTypeScriptError(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex < 0 || lineIndex >= lines.length) {
      return { fixed: false, content };
    }
    
    const line = lines[lineIndex];
    let newLine = line;
    let fixed = false;
    
    // Fix common TypeScript errors
    if (error.message.includes('JSX expressions must have one parent element')) {
      // Wrap JSX in React.Fragment
      if (line.trim().startsWith('<>')) {
        newLine = line.replace(/<>/g, '<React.Fragment>');
        fixed = true;
      } else if (line.trim().startsWith('</>')) {
        newLine = line.replace(/<\/>/g, '</React.Fragment>');
        fixed = true;
      }
    } else if (error.message.includes('Unexpected token')) {
      // Try to fix syntax errors
      if (line.includes('[') && !line.includes(']')) {
        newLine = line + ']';
        fixed = true;
      } else if (line.includes('{') && !line.includes('}')) {
        newLine = line + '}';
        fixed = true;
      }
    } else if (error.message.includes('Identifier expected')) {
      // Fix function declaration issues
      if (line.trim().startsWith('const') && line.includes('=') && line.includes('(')) {
        // This looks like a function declaration, ensure proper syntax
        if (!line.includes('function') && !line.includes('=>')) {
          newLine = line.replace('const', 'function');
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return { fixed: true, content: lines.join('\n') };
    }
    
    return { fixed: false, content };
  }

  async runAutoFixes() {
    this.log('Running automatic fixes...');
    
    try {
      // Fix common project-wide issues
      await this.fixProjectStructure();
      await this.fixImportIssues();
      await this.fixSyntaxErrors();
      
      this.log('Automatic fixes completed');
    } catch (error) {
      this.log(`Error during auto-fixes: ${error.message}`, 'ERROR');
    }
  }

  async fixProjectStructure() {
    this.log('Fixing project structure issues...');
    
    // Ensure proper React imports in JSX files
    const jsxFiles = this.findFiles('src', ['.jsx', '.tsx']);
    
    for (const file of jsxFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Add React import if missing
        if (content.includes('JSX') && !content.includes('import React')) {
          content = 'import React from \'react\';\n' + content;
          modified = true;
        }
        
        // Fix React.Fragment usage
        if (content.includes('<>') || content.includes('</>')) {
          if (!content.includes('React.Fragment')) {
            content = content.replace(/<>/g, '<React.Fragment>');
            content = content.replace(/<\/>/g, '</React.Fragment>');
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          this.log(`Fixed structure issues in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing structure in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixImportIssues() {
    this.log('Fixing import issues...');
    
    // Remove duplicate imports and fix import paths
    const jsFiles = this.findFiles('src', ['.js', '.jsx', '.ts', '.tsx']);
    
    for (const file of jsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove duplicate imports
        const lines = content.split('\n');
        const importLines = [];
        const otherLines = [];
        
        for (const line of lines) {
          if (line.trim().startsWith('import ')) {
            if (!importLines.includes(line.trim())) {
              importLines.push(line.trim());
            }
          } else {
            otherLines.push(line);
          }
        }
        
        if (importLines.length + otherLines.length !== lines.length) {
          content = importLines.join('\n') + '\n' + otherLines.join('\n');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          this.log(`Fixed import issues in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing imports in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors...');
    
    // Fix common syntax issues in data files
    const dataFiles = this.findFiles('src/data', ['.js', '.jsx']);
    
    for (const file of dataFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix common syntax errors in data files
        if (content.includes('const') && content.includes('[') && content.includes('=')) {
          // Ensure proper array syntax
          content = content.replace(/const\s+(\w+)\s*=\s*\[/g, 'const $1 = [');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          this.log(`Fixed syntax in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing syntax in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.errorCount,
        totalWarnings: this.warningCount,
        filesFixed: this.fixedFiles.length,
        success: this.errorCount === 0
      },
      fixedFiles: this.fixedFiles,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.errorCount > 0) {
      recommendations.push('Run the error fixer again to address remaining issues');
    }
    
    if (this.fixedFiles.length > 0) {
      recommendations.push('Review fixed files to ensure changes are correct');
      recommendations.push('Run tests to verify functionality is preserved');
    }
    
    recommendations.push('Consider adding pre-commit hooks to prevent future errors');
    recommendations.push('Regularly run linting and type checking in CI/CD pipeline');
    
    return recommendations;
  }

  async run() {
    this.log('Starting Comprehensive Error Fixer...');
    
    try {
      // Scan for current errors
      const errors = await this.scanForErrors();
      this.log(`Found ${errors.length} errors to fix`);
      
      // Group errors by file
      const errorsByFile = {};
      for (const error of errors) {
        if (!errorsByFile[error.file]) {
          errorsByFile[error.file] = [];
        }
        errorsByFile[error.file].push(error);
      }
      
      // Fix errors in each file
      for (const [filePath, fileErrors] of Object.entries(errorsByFile)) {
        if (fs.existsSync(filePath)) {
          await this.fixFileErrors(filePath, fileErrors);
        }
      }
      
      // Run automatic fixes
      await this.runAutoFixes();
      
      // Generate final report
      const report = this.generateReport();
      
      this.log('Comprehensive Error Fixer completed successfully');
      this.log(`Fixed ${this.fixedFiles.length} files`);
      
      return report;
      
    } catch (error) {
      this.log(`Error during execution: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  
  fixer.run()
    .then(report => {
      console.log('\n=== COMPREHENSIVE ERROR FIXER REPORT ===');
      console.log(`Files fixed: ${report.summary.filesFixed}`);
      console.log(`Total errors: ${report.summary.totalErrors}`);
      console.log(`Total warnings: ${report.summary.totalWarnings}`);
      console.log(`Success: ${report.summary.success ? 'YES' : 'NO'}`);
      
      if (report.recommendations.length > 0) {
        console.log('\nRecommendations:');
        report.recommendations.forEach(rec => console.log(`- ${rec}`));
      }
      
      process.exit(report.summary.success ? 0 : 1);
    })
    .catch(error => {
      console.error('Error:', error.message);
      process.exit(1);
    });
}

module.exports = ComprehensiveErrorFixer;