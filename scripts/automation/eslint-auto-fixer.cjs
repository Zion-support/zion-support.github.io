#!/usr/bin/env node

/**
 * ESLint Auto-Fixer - Automatically fixes all auto-fixable ESLint errors
 * Runs every 15 minutes to keep code quality high
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ESLintAutoFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'eslint-fixes-report.json');
    this.fixableErrors = 0;
    this.fixedErrors = 0;
    this.totalErrors = 0;
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runESLintFix() {
    try {
      this.log('Starting ESLint auto-fix process...');
      
      // First, run ESLint to see current errors
      const currentErrors = await this.getCurrentErrors();
      this.totalErrors = currentErrors;
      
      if (currentErrors === 0) {
        this.log('No ESLint errors found. Code is clean!');
        return;
      }

      this.log(`Found ${currentErrors} ESLint errors. Attempting to auto-fix...`);

      // Run ESLint with --fix flag
      const fixResult = await this.runESLintWithFix();
      
      if (fixResult.success) {
        // Check how many errors were fixed
        const remainingErrors = await this.getCurrentErrors();
        this.fixedErrors = currentErrors - remainingErrors;
        
        this.log(`Successfully fixed ${this.fixedErrors} ESLint errors`);
        this.log(`Remaining errors: ${remainingErrors}`);
        
        // If there are still errors, try to fix common patterns
        if (remainingErrors > 0) {
          await this.fixCommonPatterns();
        }
      } else {
        this.log('ESLint fix command failed', 'ERROR');
      }

    } catch (error) {
      this.log(`Error during ESLint auto-fix: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }

  async getCurrentErrors() {
    try {
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Count errors from output
      const errorLines = result.split('\n').filter(line => 
        line.includes('error') || line.includes('Error')
      );
      
      return errorLines.length;
    } catch (error) {
      // If lint fails, extract error count from stderr
      const stderr = error.stderr || error.stdout || '';
      const errorMatches = stderr.match(/(\d+)\s+errors?/);
      return errorMatches ? parseInt(errorMatches[1]) : 0;
    }
  }

  async runESLintWithFix() {
    return new Promise((resolve) => {
      const child = spawn('npm', ['run', 'lint', '--', '--fix'], {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        resolve({
          success: code === 0,
          stdout,
          stderr,
          code
        });
      });
    });
  }

  async fixCommonPatterns() {
    this.log('Attempting to fix common patterns that ESLint cannot auto-fix...');
    
    try {
      // Fix unescaped entities in JSX
      await this.fixUnescapedEntities();
      
      // Fix duplicate imports
      await this.fixDuplicateImports();
      
      // Fix missing exports
      await this.fixMissingExports();
      
    } catch (error) {
      this.log(`Error fixing common patterns: ${error.message}`, 'ERROR');
    }
  }

  async fixUnescapedEntities() {
    this.log('Fixing unescaped entities in JSX files...');
    
    try {
      // Find all JSX/TSX files
      const jsxFiles = this.findJSXFiles();
      
      for (const file of jsxFiles) {
        await this.fixFileUnescapedEntities(file);
      }
    } catch (error) {
      this.log(`Error fixing unescaped entities: ${error.message}`, 'ERROR');
    }
  }

  findJSXFiles() {
    const jsxFiles = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          jsxFiles.push(filePath);
        }
      }
    };
    
    walkDir(path.join(this.projectRoot, 'src'));
    return jsxFiles;
  }

  async fixFileUnescapedEntities(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common unescaped entities
      const replacements = [
        { from: /`'/g, to: '`&apos;' },
        { from: /'`/g, to: '&apos;`' },
        { from: /`"/g, to: '`&quot;' },
        { from: /"`/g, to: '&quot;`' }
      ];
      
      for (const replacement of replacements) {
        if (replacement.from.test(content)) {
          content = content.replace(replacement.from, replacement.to);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed unescaped entities in ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async fixDuplicateImports() {
    this.log('Fixing duplicate imports...');
    
    try {
      const jsxFiles = this.findJSXFiles();
      
      for (const file of jsxFiles) {
        await this.fixFileDuplicateImports(file);
      }
    } catch (error) {
      this.log(`Error fixing duplicate imports: ${error.message}`, 'ERROR');
    }
  }

  async fixFileDuplicateImports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Find import statements
      const importRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
      const imports = new Map();
      
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const source = match[2];
        const importsList = match[1].split(',').map(imp => imp.trim());
        
        if (!imports.has(source)) {
          imports.set(source, new Set());
        }
        
        importsList.forEach(imp => imports.get(source).add(imp));
      }
      
      // Rebuild import statements
      let newImports = '';
      for (const [source, importSet] of imports) {
        const importList = Array.from(importSet).join(', ');
        newImports += `import { ${importList} } from '${source}';\n`;
      }
      
      // Replace all imports with deduplicated ones
      const newContent = content.replace(importRegex, () => {
        modified = true;
        return '';
      });
      
      if (modified) {
        const finalContent = newImports + '\n' + newContent;
        fs.writeFileSync(filePath, finalContent, 'utf8');
        this.log(`Fixed duplicate imports in ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`Error fixing duplicate imports in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async fixMissingExports() {
    this.log('Fixing missing exports...');
    
    try {
      // Check for files that are imported but don't have default exports
      const importFiles = this.findImportFiles();
      
      for (const file of importFiles) {
        await this.fixFileMissingExports(file);
      }
    } catch (error) {
      this.log(`Error fixing missing exports: ${error.message}`, 'ERROR');
    }
  }

  findImportFiles() {
    const importFiles = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          importFiles.push(filePath);
        }
      }
    };
    
    walkDir(path.join(this.projectRoot, 'src'));
    return importFiles;
  }

  async fixFileMissingExports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has a default export
      if (!content.includes('export default') && !content.includes('export {')) {
        // Add a basic default export
        const componentName = path.basename(filePath, path.extname(filePath));
        const defaultExport = `\n\nexport default ${componentName};\n`;
        
        fs.appendFileSync(filePath, defaultExport);
        this.log(`Added default export to ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`Error fixing missing exports in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: duration,
      totalErrors: this.totalErrors,
      fixedErrors: this.fixedErrors,
      remainingErrors: this.totalErrors - this.fixedErrors,
      success: this.fixedErrors > 0,
      details: {
        startTime: this.startTime.toISOString(),
        endTime: endTime.toISOString(),
        projectRoot: this.projectRoot
      }
    };
    
    // Save report
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    
    // Log summary
    this.log('=== ESLint Auto-Fix Report ===');
    this.log(`Total errors found: ${this.totalErrors}`);
    this.log(`Errors fixed: ${this.fixedErrors}`);
    this.log(`Remaining errors: ${report.remainingErrors}`);
    this.log(`Duration: ${duration}ms`);
    this.log(`Report saved to: ${this.logFile}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const fixer = new ESLintAutoFixer();
  fixer.runESLintFix().catch(console.error);
}

module.exports = ESLintAutoFixer;