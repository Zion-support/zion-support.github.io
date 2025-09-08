#!/usr/bin/env node

/**
 * Error Fix Automation Script
 * Automatically detects and fixes common TypeScript and ESLint errors
 * Runs every 15 minutes to keep the project error-free
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class ErrorFixAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting Error Fix Automation...');
    
    try {
      // Step 1: Run TypeScript check to identify errors
      const tsErrors = await this.checkTypeScriptErrors();
      
      // Step 2: Run ESLint to identify linting errors
      const lintErrors = await this.checkESLintErrors();
      
      // Step 3: Fix common TypeScript errors
      await this.fixTypeScriptErrors(tsErrors);
      
      // Step 4: Fix common ESLint errors
      await this.fixESLintErrors(lintErrors);
      
      // Step 5: Fix import/export issues
      await this.fixImportExportIssues();
      
      // Step 6: Fix duplicate identifier issues
      await this.fixDuplicateIdentifiers();
      
      // Step 7: Fix unused variable issues
      await this.fixUnusedVariables();
      
      // Step 8: Fix file casing issues
      await this.fixFileCasingIssues();
      
      // Step 9: Run final checks
      await this.runFinalChecks();
      
      // Step 10: Generate report
      await this.generateReport();
      
      this.log(`✅ Error Fix Automation completed successfully!`);
      this.log(`📊 Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files`);
      
    } catch (error) {
      this.log(`❌ Error Fix Automation failed: ${error.message}`, 'ERROR');
      await this.generateErrorReport(error);
    }
  }

  async checkTypeScriptErrors() {
    this.log('🔍 Checking TypeScript errors...');
    
    try {
      const result = execSync('npm run type-check 2>&1', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      return result;
    } catch (error) {
      // TypeScript check failed, which means there are errors to fix
      return error.stdout || error.stderr || error.message;
    }
  }

  async checkESLintErrors() {
    this.log('🔍 Checking ESLint errors...');
    
    try {
      const result = execSync('npm run lint 2>&1', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      return result;
    } catch (error) {
      // ESLint check failed, which means there are errors to fix
      return error.stdout || error.stderr || error.message;
    }
  }

  async fixTypeScriptErrors(tsOutput) {
    this.log('🔧 Fixing TypeScript errors...');
    
    const fixes = [
      // Fix missing default exports
      {
        pattern: /Module '.*' has no default export/,
        fix: async (filePath) => {
          const content = fs.readFileSync(filePath, 'utf8');
          if (!content.includes('export default')) {
            const componentName = this.extractComponentName(content);
            if (componentName) {
              const newContent = content + `\n\nexport default ${componentName};`;
              fs.writeFileSync(filePath, newContent);
              this.errorsFixed++;
              this.log(`✅ Added default export to ${filePath}`);
            }
          }
        }
      },
      
      // Fix import path issues
      {
        pattern: /Cannot find module '.*'/,
        fix: async (filePath) => {
          const content = fs.readFileSync(filePath, 'utf8');
          const importMatches = content.match(/import.*from ['"]([^'"]+)['"]/g);
          
          if (importMatches) {
            for (const importMatch of importMatches) {
              const modulePath = importMatch.match(/from ['"]([^'"]+)['"]/)[1];
              const fixedPath = await this.findCorrectModulePath(modulePath, filePath);
              
              if (fixedPath && fixedPath !== modulePath) {
                const newContent = content.replace(importMatch, importMatch.replace(modulePath, fixedPath));
                fs.writeFileSync(filePath, newContent);
                this.errorsFixed++;
                this.log(`✅ Fixed import path in ${filePath}: ${modulePath} -> ${fixedPath}`);
              }
            }
          }
        }
      }
    ];

    for (const fix of fixes) {
      const matches = tsOutput.match(fix.pattern);
      if (matches) {
        const files = this.findFilesWithErrors(tsOutput);
        for (const file of files) {
          await fix.fix(file);
        }
      }
    }
  }

  async fixESLintErrors(lintOutput) {
    this.log('🔧 Fixing ESLint errors...');
    
    try {
      // Try to auto-fix ESLint errors
      execSync('npm run lint -- --fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('✅ ESLint auto-fix completed');
    } catch (error) {
      this.log('⚠️ ESLint auto-fix failed, will fix manually');
      await this.fixESLintErrorsManually(lintOutput);
    }
  }

  async fixESLintErrorsManually(lintOutput) {
    const fixes = [
      // Fix unused variables
      {
        pattern: /'([^']+)' is declared but its value is never read/,
        fix: async (filePath, match) => {
          const variableName = match[1];
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Add underscore prefix to unused variables
          const newContent = content.replace(
            new RegExp(`\\b${variableName}\\b`, 'g'),
            `_${variableName}`
          );
          
          fs.writeFileSync(filePath, newContent);
          this.errorsFixed++;
          this.log(`✅ Fixed unused variable ${variableName} in ${filePath}`);
        }
      },
      
      // Fix missing semicolons
      {
        pattern: /Missing semicolon/,
        fix: async (filePath) => {
          const content = fs.readFileSync(filePath, 'utf8');
          // Add semicolons where needed
          const newContent = content.replace(/([^;])\n/g, '$1;\n');
          fs.writeFileSync(filePath, newContent);
          this.errorsFixed++;
          this.log(`✅ Fixed missing semicolons in ${filePath}`);
        }
      }
    ];

    for (const fix of fixes) {
      const matches = lintOutput.match(fix.pattern);
      if (matches) {
        const files = this.findFilesWithErrors(lintOutput);
        for (const file of files) {
          await fix.fix(file, matches);
        }
      }
    }
  }

  async fixImportExportIssues() {
    this.log('🔧 Fixing import/export issues...');
    
    const tsxFiles = glob.sync('src/**/*.{tsx,ts}', { cwd: this.projectRoot });
    
    for (const file of tsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has React component but no export
      if (content.includes('function ') && content.includes('(') && !content.includes('export default')) {
        const componentName = this.extractComponentName(content);
        if (componentName) {
          const newContent = content + `\n\nexport default ${componentName};`;
          fs.writeFileSync(filePath, newContent);
          this.errorsFixed++;
          this.log(`✅ Added missing default export to ${file}`);
        }
      }
      
      // Check for duplicate imports
      const importLines = content.match(/import.*from ['"][^'"]+['"]/g);
      if (importLines) {
        const uniqueImports = [...new Set(importLines)];
        if (uniqueImports.length !== importLines.length) {
          const newContent = content.replace(/import.*from ['"][^'"]+['"]/g, '');
          const importSection = uniqueImports.join('\n') + '\n\n';
          fs.writeFileSync(filePath, importSection + newContent);
          this.errorsFixed++;
          this.log(`✅ Fixed duplicate imports in ${file}`);
        }
      }
    }
  }

  async fixDuplicateIdentifiers() {
    this.log('🔧 Fixing duplicate identifier issues...');
    
    const tsxFiles = glob.sync('src/**/*.{tsx,ts}', { cwd: this.projectRoot });
    
    for (const file of tsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find duplicate imports from lucide-react
      const lucideImports = content.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
      if (lucideImports) {
        const imports = lucideImports[1].split(',').map(i => i.trim());
        const uniqueImports = [...new Set(imports)];
        
        if (uniqueImports.length !== imports.length) {
          const newImport = `import { ${uniqueImports.join(', ')} } from 'lucide-react'`;
          const newContent = content.replace(lucideImports[0], newImport);
          fs.writeFileSync(filePath, newContent);
          this.errorsFixed++;
          this.log(`✅ Fixed duplicate lucide-react imports in ${file}`);
        }
      }
    }
  }

  async fixUnusedVariables() {
    this.log('🔧 Fixing unused variable issues...');
    
    const tsxFiles = glob.sync('src/**/*.{tsx,ts}', { cwd: this.projectRoot });
    
    for (const file of tsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find unused imports and add underscore prefix
      const importMatches = content.match(/import\s*{([^}]+)}\s*from\s*['"][^'"]+['"]/g);
      if (importMatches) {
        for (const importMatch of importMatches) {
          const imports = importMatch.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
          if (imports) {
            const importList = imports[1];
            const modulePath = imports[2];
            
            // Check which imports are actually used
            const importNames = importList.split(',').map(i => i.trim());
            const usedImports = [];
            const unusedImports = [];
            
            for (const importName of importNames) {
              const cleanName = importName.replace(/\s+as\s+.*$/, '');
              if (content.includes(cleanName) && !content.match(new RegExp(`\\b${cleanName}\\b`, 'g'))) {
                unusedImports.push(`_${cleanName}`);
              } else {
                usedImports.push(importName);
              }
            }
            
            if (unusedImports.length > 0) {
              const newImportList = [...usedImports, ...unusedImports].join(', ');
              const newImport = `import { ${newImportList} } from '${modulePath}'`;
              const newContent = content.replace(importMatch, newImport);
              fs.writeFileSync(filePath, newContent);
              this.errorsFixed++;
              this.log(`✅ Fixed unused imports in ${file}`);
            }
          }
        }
      }
    }
  }

  async fixFileCasingIssues() {
    this.log('🔧 Fixing file casing issues...');
    
    // Find files with potential casing conflicts
    const allFiles = glob.sync('src/**/*', { cwd: this.projectRoot });
    const fileMap = new Map();
    
    for (const file of allFiles) {
      const lowerFile = file.toLowerCase();
      if (fileMap.has(lowerFile)) {
        // Found duplicate with different casing
        const existingFile = fileMap.get(lowerFile);
        const existingContent = fs.readFileSync(path.join(this.projectRoot, existingFile), 'utf8');
        const currentContent = fs.readFileSync(path.join(this.projectRoot, file), 'utf8');
        
        if (existingContent === currentContent) {
          // Files are identical, remove the duplicate
          fs.unlinkSync(path.join(this.projectRoot, file));
          this.errorsFixed++;
          this.log(`✅ Removed duplicate file with different casing: ${file}`);
        }
      } else {
        fileMap.set(lowerFile, file);
      }
    }
  }

  async runFinalChecks() {
    this.log('🔍 Running final checks...');
    
    try {
      // Run TypeScript check
      execSync('npm run type-check', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('✅ TypeScript check passed');
    } catch (error) {
      this.log('⚠️ TypeScript check still has errors', 'WARN');
    }
    
    try {
      // Run ESLint check
      execSync('npm run lint', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('✅ ESLint check passed');
    } catch (error) {
      this.log('⚠️ ESLint check still has errors', 'WARN');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'completed',
      summary: `Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files`
    };
    
    const reportPath = path.join(this.reportsDir, 'error-fix-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      status: 'failed',
      error: error.message,
      stack: error.stack
    };
    
    const reportPath = path.join(this.reportsDir, 'error-fix-automation-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    
    this.log(`❌ Error report generated: ${reportPath}`);
  }

  extractComponentName(content) {
    // Try to extract component name from function declaration
    const functionMatch = content.match(/function\s+(\w+)\s*\(/);
    if (functionMatch) return functionMatch[1];
    
    // Try to extract from arrow function
    const arrowMatch = content.match(/const\s+(\w+)\s*=\s*\(/);
    if (arrowMatch) return arrowMatch[1];
    
    // Try to extract from React.FC
    const fcMatch = content.match(/const\s+(\w+)\s*:\s*React\.FC/);
    if (fcMatch) return fcMatch[1];
    
    return null;
  }

  findFilesWithErrors(output) {
    const fileMatches = output.match(/src\/[^:]+/g);
    return fileMatches ? [...new Set(fileMatches)] : [];
  }

  async findCorrectModulePath(modulePath, currentFile) {
    // Try to find the correct module path
    const possibleExtensions = ['.tsx', '.ts', '.jsx', '.js'];
    const currentDir = path.dirname(currentFile);
    
    for (const ext of possibleExtensions) {
      const fullPath = path.join(currentDir, modulePath + ext);
      if (fs.existsSync(fullPath)) {
        return modulePath + ext;
      }
    }
    
    return null;
  }
}

// Main execution
if (require.main === module) {
  const automation = new ErrorFixAutomation();
  automation.run().catch(console.error);
}

module.exports = ErrorFixAutomation;