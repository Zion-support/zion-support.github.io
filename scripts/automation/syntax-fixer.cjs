#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class SyntaxFixer {
  constructor() {
    this.projectRoot = '/workspace';
    this.logDir = path.join(this.projectRoot, 'logs');
    this.backupDir = path.join(this.projectRoot, 'backups');
    this.fixesApplied = 0;
    this.filesProcessed = 0;
    
    this.ensureDirectories();
    this.setupSignalHandlers();
  }

  ensureDirectories() {
    [this.logDir, this.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupSignalHandlers() {
    process.on('SIGTERM', () => this.shutdown());
    process.on('SIGINT', () => this.shutdown());
  }

  log(level, ...args) {
    const timestamp = new Date().toISOString();
    const message = `[${timestamp}] [${level.toUpperCase()}] ${args.join(' ')}`;
    console.log(message);
    
    const logFile = path.join(this.logDir, 'syntax-fixer.log');
    fs.appendFileSync(logFile, message + '\\n');
  }

  createBackup(filePath) {
    try {
      const relativePath = path.relative(this.projectRoot, filePath);
      const backupPath = path.join(this.backupDir, relativePath);
      const backupDir = path.dirname(backupPath);
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      fs.copyFileSync(filePath, backupPath);
      return backupPath;
    } catch (error) {
      this.log('error', `Failed to create backup for ${filePath}:`, error.message);
      return null;
    }
  }

  fixUnterminatedStrings(content) {
    let fixed = content;
    let changes = 0;
    
    // Fix unterminated single quotes at end of lines
    fixed = fixed.replace(/^([^'\\n]*)'([^'\\n]*)$/gm, (match, before, after) => {
      if (!after.includes("'")) {
        changes++;
        return before + "'" + after + "'";
      }
      return match;
    });
    
    // Fix unterminated double quotes at end of lines
    fixed = fixed.replace(/^([^"\\n]*)"([^"\\n]*)$/gm, (match, before, after) => {
      if (!after.includes('"')) {
        changes++;
        return before + '"' + after + '"';
      }
      return match;
    });
    
    return { content: fixed, changes };
  }

  fixMergeConflicts(content) {
    let fixed = content;
    let changes = 0;
    
    // Remove merge conflict markers and take the HEAD version
    const mergeConflictPattern = /<<<<<<< HEAD\\n([\\s\\S]*?)=======\\n[\\s\\S]*?>>>>>>> [^\\n]+\\n/g;
    fixed = fixed.replace(mergeConflictPattern, (match, headContent) => {
      changes++;
      return headContent;
    });
    
    // Remove standalone conflict markers
    fixed = fixed.replace(/^<<<<<<< HEAD\\n/gm, () => { changes++; return ''; });
    fixed = fixed.replace(/^=======\\n/gm, () => { changes++; return ''; });
    fixed = fixed.replace(/^>>>>>>> [^\\n]+\\n/gm, () => { changes++; return ''; });
    
    return { content: fixed, changes };
  }

  fixCommonSyntaxErrors(content) {
    let fixed = content;
    let changes = 0;
    
    // Fix extra semicolons
    fixed = fixed.replace(/;;+/g, () => { changes++; return ';'; });
    
    // Fix missing semicolons at end of import statements
    fixed = fixed.replace(/^(import .+from .+)$/gm, (match) => {
      if (!match.endsWith(';')) {
        changes++;
        return match + ';';
      }
      return match;
    });
    
    // Fix space around assignment operators
    fixed = fixed.replace(/(\\w)=([^=])/g, (match, before, after) => {
      changes++;
      return before + ' = ' + after;
    });
    
    return { content: fixed, changes };
  }

  fixModuleSystemErrors(content) {
    let fixed = content;
    let changes = 0;
    
    // Replace CommonJS require with ES6 imports where appropriate
    fixed = fixed.replace(/const\\s+(\\w+)\\s*=\\s*require\\(['"]([^'"]+)['"]\\);?/g, (match, varName, moduleName) => {
      changes++;
      return `import ${varName} from '${moduleName}';`;
    });
    
    // Fix module.exports to export default
    fixed = fixed.replace(/module\\.exports\\s*=\\s*(.+);?/g, (match, value) => {
      changes++;
      return `export default ${value};`;
    });
    
    return { content: fixed, changes };
  }

  removeCorruptContent(content) {
    let fixed = content;
    let changes = 0;
    
    // Remove lines with parsing errors
    fixed = fixed.replace(/.*Parsing error:.*\\n/g, () => { changes++; return ''; });
    
    // Remove lines that are clearly corrupted
    fixed = fixed.replace(/.*Unterminated string literal.*\\n/g, () => { changes++; return ''; });
    
    // Remove empty quotes at end of file
    fixed = fixed.replace(/["']\\s*$/, () => { changes++; return ''; });
    
    return { content: fixed, changes };
  }

  generateFixedContent(filePath, originalContent) {
    const ext = path.extname(filePath);
    
    // Determine if this should be a TypeScript or JavaScript file
    const shouldBeTypeScript = filePath.includes('.tsx') || filePath.includes('.ts');
    const shouldBeJavaScript = filePath.includes('.jsx') || filePath.includes('.js');
    
    if (originalContent.trim().length === 0) {
      // Generate basic file structure for empty files
      if (shouldBeTypeScript && filePath.includes('components')) {
        return this.generateBasicReactComponent(path.basename(filePath, ext));
      } else if (shouldBeJavaScript && filePath.includes('utils')) {
        return this.generateBasicUtility(path.basename(filePath, ext));
      }
    }
    
    return null; // Return null if no template available
  }

  generateBasicReactComponent(componentName) {
    const name = componentName.replace(/[^a-zA-Z0-9]/g, '');
    return `import React from 'react';

interface ${name}Props {
  // Add props here
}

const ${name}: React.FC<${name}Props> = () => {
  return (
    <div>
      <h1>${name}</h1>
      <p>This component needs implementation.</p>
    </div>
  );
};

export default ${name};
`;
  }

  generateBasicUtility(utilityName) {
    const name = utilityName.replace(/[^a-zA-Z0-9]/g, '');
    return `// ${name} utility functions

export const ${name.toLowerCase()} = {
  // Add utility functions here
};

export default ${name.toLowerCase()};
`;
  }

  async fixFile(filePath) {
    try {
      this.filesProcessed++;
      
      if (!fs.existsSync(filePath)) {
        this.log('warn', `File not found: ${filePath}`);
        return false;
      }
      
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const backupPath = this.createBackup(filePath);
      
      if (!backupPath) {
        this.log('error', `Could not create backup for ${filePath}, skipping fix`);
        return false;
      }
      
      let content = originalContent;
      let totalChanges = 0;
      
      // Apply various fixes
      const fixes = [
        this.fixMergeConflicts(content),
        this.fixUnterminatedStrings,
        this.removeCorruptContent,
        this.fixModuleSystemErrors,
        this.fixCommonSyntaxErrors
      ];
      
      for (let i = 0; i < fixes.length; i++) {
        let result;
        if (typeof fixes[i] === 'function') {
          result = fixes[i](content);
        } else {
          result = fixes[i];
        }
        
        if (result && result.content !== undefined) {
          content = result.content;
          totalChanges += result.changes || 0;
        }
      }
      
      // If content is still severely corrupted, try to generate new content
      if (content.trim().length === 0 || content.includes('Unterminated string literal')) {
        const generatedContent = this.generateFixedContent(filePath, originalContent);
        if (generatedContent) {
          content = generatedContent;
          totalChanges++;
          this.log('info', `Generated new content for ${filePath}`);
        }
      }
      
      // Only write if changes were made
      if (totalChanges > 0) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied += totalChanges;
        this.log('info', `Fixed ${filePath} (${totalChanges} changes)`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log('error', `Failed to fix file ${filePath}:`, error.message);
      return false;
    }
  }

  async scanAndFixDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          await this.scanAndFixDirectory(itemPath);
        } else if (item.match(/\\.(ts|tsx|js|jsx)$/)) {
          await this.fixFile(itemPath);
        }
      }
    } catch (error) {
      this.log('error', `Error scanning directory ${dirPath}:`, error.message);
    }
  }

  async run() {
    this.log('info', 'Syntax Fixer starting...');
    
    const startTime = Date.now();
    this.fixesApplied = 0;
    this.filesProcessed = 0;
    
    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      await this.scanAndFixDirectory(srcDir);
    }
    
    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);
    
    this.log('info', `Syntax fixing completed in ${duration}s`);
    this.log('info', `Files processed: ${this.filesProcessed}`);
    this.log('info', `Fixes applied: ${this.fixesApplied}`);
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      duration,
      filesProcessed: this.filesProcessed,
      fixesApplied: this.fixesApplied,
      status: 'completed'
    };
    
    const reportFile = path.join(this.projectRoot, 'syntax-error-fixer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    return report;
  }

  shutdown() {
    this.log('info', 'Syntax Fixer shutting down...');
    process.exit(0);
  }
}

// Run the fixer
const fixer = new SyntaxFixer();
fixer.run().then(() => {
  fixer.log('info', 'Syntax fixing completed successfully');
  process.exit(0);
}).catch(error => {
  console.error('Syntax fixer failed:', error);
  process.exit(1);
});