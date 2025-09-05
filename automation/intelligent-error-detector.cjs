#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentErrorDetector {
  constructor() {
    this.projectRoot = process.cwd();
    this.errors = [];
    this.fixes = [];
    this.patterns = {
      mergeConflicts: /<<<<<<< HEAD[\s\S]*?>>>>>>>/g,
      syntaxErrors: /SyntaxError|ParseError|Unexpected token/g,
      typeErrors: /TypeError|Cannot read property|is not defined/g,
      importErrors: /Cannot resolve module|Module not found/g,
      lintingErrors: /warning|error.*eslint/g,
      consoleStatements: /console\.(log|warn|error|info)/g,
      unusedImports: /import.*from.*['"][^'"]*['"];?\s*$/gm,
      unescapedEntities: /[^\\]'|[^\\]"/g
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    
  }

  async scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = [];
      
      // Check for merge conflicts
      if (this.patterns.mergeConflicts.test(content)) {
        issues.push({
          type: 'merge_conflict',
          severity: 'error',
          message: 'Merge conflict markers found',
          line: this.getLineNumber(content, '<<<<<<< HEAD')
        });
      }
      
      // Check for console statements
      const consoleMatches = content.match(this.patterns.consoleStatements);
      if (consoleMatches) {
        issues.push({
          type: 'console_statement',
          severity: 'warning',
          message: `Found ${consoleMatches.length} console statements`,
          count: consoleMatches.length
        });
      }
      
      // Check for unescaped entities
      const entityMatches = content.match(this.patterns.unescapedEntities);
      if (entityMatches) {
        issues.push({
          type: 'unescaped_entities',
          severity: 'error',
          message: `Found ${entityMatches.length} unescaped entities`,
          count: entityMatches.length
        });
      }
      
      // Check for unused imports (basic detection)
      const importLines = content.split('\n').filter(line => line.includes('import'));
      const usedImports = new Set();
      
      // Simple heuristic: check if import names are used in the file
      for (const line of importLines) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          for (const imp of imports) {
            if (content.includes(imp) && !line.includes(imp)) {
              usedImports.add(imp);
            }
          }
        }
      }
      
      if (importLines.length > 0) {
        const unusedCount = importLines.length - usedImports.size;
        if (unusedCount > 0) {
          issues.push({
            type: 'unused_imports',
            severity: 'warning',
            message: `Found ${unusedCount} potentially unused imports`,
            count: unusedCount
          });
        }
      }
      
      return issues;
    } catch (error) {
      this.log(`Error scanning file ${filePath}: ${error.message}`, 'ERROR');
      return [];
    }
  }

  getLineNumber(content, searchString) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchString)) {
        return i + 1;
      }
    }
    return 0;
  }

  async scanDirectory(dirPath) {
    const files = [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.includes('node_modules')) {
        files.push(...await this.scanDirectory(fullPath));
      } else if (entry.isFile() && this.isRelevantFile(entry.name)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  isRelevantFile(filename) {
    const extensions = ['.tsx', '.ts', '.jsx', '.js', '.cjs', '.mjs'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  async fixMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let conflictType = null;
      let headContent = [];
      let branchContent = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          conflictType = 'head';
          continue;
        } else if (line.includes('=======')) {
          conflictType = 'branch';
          continue;
        } else if (line.includes('>>>>>>>')) {
          // End of conflict - choose the newer version (branch content)
          if (branchContent.length > 0) {
            fixedLines.push(...branchContent);
          } else if (headContent.length > 0) {
            fixedLines.push(...headContent);
          }
          
          inConflict = false;
          conflictType = null;
          headContent = [];
          branchContent = [];
          continue;
        }
        
        if (inConflict) {
          if (conflictType === 'head') {
            headContent.push(line);
          } else if (conflictType === 'branch') {
            branchContent.push(line);
          }
        } else {
          fixedLines.push(line);
        }
      }
      
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent);
      
      this.fixes.push({
        type: 'merge_conflict',
        file: filePath,
        message: 'Resolved merge conflicts'
      });
      
      return true;
    } catch (error) {
      this.log(`Error fixing merge conflicts in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixConsoleStatements(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove console statements
      content = content
        .replace(/console\.log\([^)]*\);?\s*/g, '')
        .replace(/console\.warn\([^)]*\);?\s*/g, '')
        .replace(/console\.error\([^)]*\);?\s*/g, '')
        .replace(/console\.info\([^)]*\);?\s*/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        
        this.fixes.push({
          type: 'console_statement',
          file: filePath,
          message: 'Removed console statements'
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing console statements in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixUnescapedEntities(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix common unescaped entities
      content = content
        .replace(/([^\\])'/g, "$1&apos;")
        .replace(/([^\\])"/g, "$1&quot;");
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        
        this.fixes.push({
          type: 'unescaped_entities',
          file: filePath,
          message: 'Fixed unescaped entities'
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing unescaped entities in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async run() {
    this.log('🔍 Starting intelligent error detection...');
    
    // Scan relevant directories
    const directories = ['pages', 'components', 'utils', 'hooks', 'src'];
    const allFiles = [];
    
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        const files = await this.scanDirectory(dir);
        allFiles.push(...files);
      }
    }
    
    this.log(`Found ${allFiles.length} files to scan`);
    
    // Scan each file
    for (const file of allFiles) {
      const issues = await this.scanFile(file);
      if (issues.length > 0) {
        this.errors.push({
          file,
          issues
        });
      }
    }
    
    this.log(`Found ${this.errors.length} files with issues`);
    
    // Apply fixes
    for (const error of this.errors) {
      const { file, issues } = error;
      
      for (const issue of issues) {
        switch (issue.type) {
          case 'merge_conflict':
            await this.fixMergeConflicts(file);
            break;
          case 'console_statement':
            await this.fixConsoleStatements(file);
            break;
          case 'unescaped_entities':
            await this.fixUnescapedEntities(file);
            break;
        }
      }
    }
    
    // Generate report
    this.log('\n📊 INTELLIGENT ERROR DETECTION REPORT');
    this.log('=====================================');
    this.log(`Files scanned: ${allFiles.length}`);
    this.log(`Files with issues: ${this.errors.length}`);
    this.log(`Fixes applied: ${this.fixes.length}`);
    
    if (this.fixes.length > 0) {
      this.log('\n✅ Fixes applied:');
      this.fixes.forEach(fix => {
        this.log(`  - ${fix.file}: ${fix.message}`);
      });
    }
    
    if (this.errors.length > 0) {
      this.log('\n⚠️ Remaining issues:');
      this.errors.forEach(error => {
        this.log(`  - ${error.file}:`);
        error.issues.forEach(issue => {
          this.log(`    * ${issue.type}: ${issue.message}`);
        });
      });
    }
    
    this.log('\n🎉 Intelligent error detection completed!');
    
    return {
      filesScanned: allFiles.length,
      filesWithIssues: this.errors.length,
      fixesApplied: this.fixes.length,
      errors: this.errors,
      fixes: this.fixes
    };
  }
}

if (require.main === module) {
  const detector = new IntelligentErrorDetector();
  detector.run().catch(console.error);
}

module.exports = IntelligentErrorDetector;