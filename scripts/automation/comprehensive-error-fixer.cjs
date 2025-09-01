#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorReport = {
      timestamp: new Date().toISOString(),
      duration: 0,
      fixesApplied: [],
      errorsFound: [],
      summary: {
        totalErrors: 0,
        fixedErrors: 0,
        remainingErrors: 0
      }
    };
    this.startTime = Date.now();
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async run() {
    this.log('Starting comprehensive error fixing automation...');
    
    try {
      // Step 1: Fix merge conflicts
      await this.fixMergeConflicts();
      
      // Step 2: Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Step 3: Fix ESLint errors
      await this.fixESLintErrors();
      
      // Step 4: Fix import/export issues
      await this.fixImportExportIssues();
      
      // Step 5: Fix file extension issues
      await this.fixFileExtensionIssues();
      
      // Step 6: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Step 7: Fix dependency issues
      await this.fixDependencyIssues();
      
      // Step 8: Generate error report
      await this.generateErrorReport();
      
      this.log('Comprehensive error fixing completed successfully!');
      
    } catch (error) {
      this.log(`Error during automation: ${error.message}`);
      this.errorReport.errorsFound.push({
        type: 'automation_error',
        message: error.message,
        stack: error.stack
      });
    } finally {
      this.errorReport.duration = Date.now() - this.startTime;
      await this.saveErrorReport();
    }
  }

  async fixMergeConflicts() {
    this.log('Fixing merge conflicts...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx,json,md}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          this.log(`Fixing merge conflicts in ${file}`);
          
          // Remove merge conflict markers and keep the first version
          let fixedContent = content
            .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [^\n]*\n?/g, '$1')
            .replace(/<<<<<<< [^\n]*\n[\s\S]*?\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n?/g, '$1');
          
          fs.writeFileSync(file, fixedContent);
          
          this.errorReport.fixesApplied.push({
            type: 'merge_conflict',
            file,
            description: 'Removed merge conflict markers'
          });
        }
      } catch (error) {
        this.log(`Error fixing merge conflicts in ${file}: ${error.message}`);
      }
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');
    
    try {
      // Run TypeScript check to get errors
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        stdio: ['pipe', 'pipe', 'pipe'] 
      });
      
      // Parse TypeScript errors and fix common issues
      const errorLines = result.split('\n').filter(line => line.includes('.tsx:') || line.includes('.ts:'));
      
      for (const errorLine of errorLines) {
        const match = errorLine.match(/([^:]+):(\d+):(\d+)/);
        if (match) {
          const [, filePath, line, column] = match;
          await this.fixTypeScriptError(filePath, parseInt(line), parseInt(column), errorLine);
        }
      }
    } catch (error) {
      // TypeScript check failed, which is expected if there are errors
      this.log('TypeScript check completed with errors (expected)');
    }
  }

  async fixTypeScriptError(filePath, line, column, errorLine) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (line > lines.length) return;
      
      const currentLine = lines[line - 1];
      
      // Fix common TypeScript errors
      if (errorLine.includes('Cannot find module')) {
        // Fix import issues
        const fixedLine = this.fixImportError(currentLine, errorLine);
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(filePath, lines.join('\n'));
          
          this.errorReport.fixesApplied.push({
            type: 'typescript_import',
            file: filePath,
            line,
            description: 'Fixed import statement'
          });
        }
      } else if (errorLine.includes('Property') && errorLine.includes('does not exist')) {
        // Fix property access issues
        const fixedLine = this.fixPropertyAccessError(currentLine, errorLine);
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(filePath, lines.join('\n'));
          
          this.errorReport.fixesApplied.push({
            type: 'typescript_property',
            file: filePath,
            line,
            description: 'Fixed property access'
          });
        }
      }
    } catch (error) {
      this.log(`Error fixing TypeScript error in ${filePath}: ${error.message}`);
    }
  }

  fixImportError(line, errorLine) {
    // Fix common import issues
    const moduleMatch = errorLine.match(/Cannot find module '([^']+)'/);
    if (moduleMatch) {
      const moduleName = moduleMatch[1];
      
      // Try to fix common import patterns
      if (moduleName.startsWith('./') || moduleName.startsWith('../')) {
        // Check if file exists with different extension
        const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
        for (const ext of possibleExtensions) {
          const testPath = moduleName.replace(/\.(ts|tsx|js|jsx)$/, '') + ext;
          if (fs.existsSync(testPath)) {
            return line.replace(moduleName, testPath);
          }
        }
      }
    }
    return line;
  }

  fixPropertyAccessError(line, errorLine) {
    // Add optional chaining for property access
    const propertyMatch = errorLine.match(/Property '([^']+)' does not exist/);
    if (propertyMatch) {
      const propertyName = propertyMatch[1];
      return line.replace(new RegExp(`\\.${propertyName}\\b`, 'g'), `?.${propertyName}`);
    }
    return line;
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');
    
    try {
      // Run ESLint with --fix option (using flat config)
      execSync('npx eslint . --fix', { 
        stdio: 'inherit',
        cwd: this.projectRoot 
      });
      
      this.errorReport.fixesApplied.push({
        type: 'eslint_auto_fix',
        description: 'Applied ESLint auto-fixes'
      });
    } catch (error) {
      this.log(`ESLint fix completed with some manual fixes needed`);
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix default export issues
        if (content.includes('export default') && !content.includes('export {')) {
          // Add named exports if missing
          const exportMatch = content.match(/export default\s+(\w+)/);
          if (exportMatch) {
            const componentName = exportMatch[1];
            if (!content.includes(`export { ${componentName} }`)) {
              newContent = content.replace(
                `export default ${componentName}`,
                `export { ${componentName} }\nexport default ${componentName}`
              );
              modified = true;
            }
          }
        }
        
        // Fix React import issues
        if (content.includes('React.') && !content.includes("import React")) {
          newContent = "import React from 'react';\n" + newContent;
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, newContent);
          this.errorReport.fixesApplied.push({
            type: 'import_export',
            file,
            description: 'Fixed import/export statements'
          });
        }
      } catch (error) {
        this.log(`Error fixing import/export in ${file}: ${error.message}`);
      }
    }
  }

  async fixFileExtensionIssues() {
    this.log('Fixing file extension issues...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if JSX is used in .js files
        if (file.endsWith('.js') && (content.includes('<') && content.includes('>'))) {
          const newPath = file.replace('.js', '.jsx');
          fs.renameSync(file, newPath);
          
          this.errorReport.fixesApplied.push({
            type: 'file_extension',
            file,
            newFile: newPath,
            description: 'Renamed .js to .jsx for JSX content'
          });
        }
        
        // Check if TypeScript is used in .js files
        if (file.endsWith('.js') && (content.includes(': ') && content.includes('interface'))) {
          const newPath = file.replace('.js', '.ts');
          fs.renameSync(file, newPath);
          
          this.errorReport.fixesApplied.push({
            type: 'file_extension',
            file,
            newFile: newPath,
            description: 'Renamed .js to .ts for TypeScript content'
          });
        }
      } catch (error) {
        this.log(`Error fixing file extension for ${file}: ${error.message}`);
      }
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix common syntax errors
        // Remove trailing commas in objects
        newContent = newContent.replace(/,(\s*[}\]])/g, '$1');
        
        // Fix missing semicolons
        newContent = newContent.replace(/([^;])\n(import|export|const|let|var|function|class)/g, '$1;\n$2');
        
        // Fix unclosed brackets
        const openBrackets = (newContent.match(/\{/g) || []).length;
        const closeBrackets = (newContent.match(/\}/g) || []).length;
        if (openBrackets > closeBrackets) {
          newContent += '\n'.repeat(openBrackets - closeBrackets) + '}';
        }
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          
          this.errorReport.fixesApplied.push({
            type: 'syntax_error',
            file,
            description: 'Fixed syntax errors'
          });
        }
      } catch (error) {
        this.log(`Error fixing syntax in ${file}: ${error.message}`);
      }
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Check for missing dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Install missing dependencies
      execSync('npm install', { stdio: 'inherit', cwd: this.projectRoot });
      
      this.errorReport.fixesApplied.push({
        type: 'dependencies',
        description: 'Installed/updated dependencies'
      });
    } catch (error) {
      this.log(`Error fixing dependencies: ${error.message}`);
    }
  }

  async generateErrorReport() {
    this.log('Generating error report...');
    
    try {
      // Run final checks
      const typeCheckResult = execSync('npx tsc --noEmit --pretty false 2>&1', { 
        encoding: 'utf8' 
      });
      
      const lintResult = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx 2>&1', { 
        encoding: 'utf8' 
      });
      
      this.errorReport.summary.totalErrors = 
        (typeCheckResult.match(/error TS\d+/g) || []).length +
        (lintResult.match(/error/g) || []).length;
      
      this.errorReport.summary.fixedErrors = this.errorReport.fixesApplied.length;
      this.errorReport.summary.remainingErrors = this.errorReport.summary.totalErrors;
      
    } catch (error) {
      this.log(`Error generating report: ${error.message}`);
    }
  }

  async saveErrorReport() {
    const timestamp = Date.now();
    const reportPath = path.join(this.projectRoot, 'error-reports', `error-fixer-report-${timestamp}.json`);
    
    // Ensure directory exists
    const dir = path.dirname(reportPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(this.errorReport, null, 2));
    this.log(`Error report saved to: ${reportPath}`);
  }
}

// Run the automation
const fixer = new ComprehensiveErrorFixer();
fixer.run().catch(console.error);