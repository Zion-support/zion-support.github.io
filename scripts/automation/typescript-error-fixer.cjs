#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.errorsRemaining = [];
    
    // Ensure directories exist
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [TypeScriptErrorFixer] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'typescript-error-fixer.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async fixMissingReactImports() {
    this.log('Fixing missing React imports...');
    
    const files = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Check if file uses JSX but doesn't import React
      if (content.includes('React.') || content.includes('<') && content.includes('>') && content.includes('return')) {
        if (!content.includes("import React") && !content.includes("import * as React")) {
          // Add React import at the top
          const lines = content.split('\n');
          let insertIndex = 0;
          
          // Find the first import statement or add at the beginning
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().startsWith('import ')) {
              insertIndex = i + 1;
              break;
            }
          }
          
          lines.splice(insertIndex, 0, 'import React from "react";');
          content = lines.join('\n');
          modified = true;
          this.log(`Added React import to ${file}`);
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied++;
      }
    }
  }

  async fixMissingHookImports() {
    this.log('Fixing missing React hook imports...');
    
    const files = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Check for React hooks usage
      const hooks = ['useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext'];
      const usedHooks = hooks.filter(hook => content.includes(hook));
      
      if (usedHooks.length > 0) {
        const reactImportMatch = content.match(/import React.*from ['"]react['"]/);
        if (reactImportMatch) {
          // Check if hooks are already imported
          const hasHooksImport = usedHooks.some(hook => 
            content.includes(`import { ${hook}`) || content.includes(`import {${hook}`)
          );
          
          if (!hasHooksImport) {
            // Add hooks to existing React import
            content = content.replace(
              /import React.*from ['"]react['"]/,
              `import React, { ${usedHooks.join(', ')} } from 'react'`
            );
            modified = true;
            this.log(`Added React hooks imports to ${file}: ${usedHooks.join(', ')}`);
          }
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied++;
      }
    }
  }

  async fixTypeAnnotations() {
    this.log('Fixing type annotations...');
    
    const files = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix common type annotation issues
      
      // Fix useState without type annotation
      content = content.replace(
        /useState\s*\(\s*([^)]+)\s*\)/g,
        (match, value) => {
          if (!match.includes('<') && !match.includes('any')) {
            // Try to infer type from the value
            let type = 'any';
            if (value.includes('[]')) type = 'any[]';
            else if (value.includes('{}')) type = 'Record<string, any>';
            else if (value.includes('null')) type = 'any';
            else if (value.includes('""') || value.includes("''")) type = 'string';
            else if (value.match(/\d+/)) type = 'number';
            else if (value.includes('true') || value.includes('false')) type = 'boolean';
            
            return `useState<${type}>(${value})`;
          }
          return match;
        }
      );

      // Fix function parameters without types
      content = content.replace(
        /function\s+(\w+)\s*\(\s*([^)]*)\s*\)/g,
        (match, funcName, params) => {
          if (params && !params.includes(':')) {
            const typedParams = params.split(',').map(param => {
              const trimmed = param.trim();
              if (trimmed && !trimmed.includes(':')) {
                return `${trimmed}: any`;
              }
              return trimmed;
            }).join(', ');
            return `function ${funcName}(${typedParams})`;
          }
          return match;
        }
      );

      if (content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content);
        modified = true;
        this.log(`Fixed type annotations in ${file}`);
      }

      if (modified) {
        this.fixesApplied++;
      }
    }
  }

  async fixInterfaceIssues() {
    this.log('Fixing interface issues...');
    
    const files = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix interface property issues
      content = content.replace(
        /interface\s+(\w+)\s*{\s*([^}]*)\s*}/g,
        (match, interfaceName, properties) => {
          if (properties && !properties.includes(':')) {
            const fixedProperties = properties.split('\n').map(line => {
              const trimmed = line.trim();
              if (trimmed && !trimmed.includes(':') && !trimmed.includes('{') && !trimmed.includes('}')) {
                return `  ${trimmed}: any;`;
              }
              return line;
            }).join('\n');
            return `interface ${interfaceName} {\n${fixedProperties}\n}`;
          }
          return match;
        }
      );

      if (content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content);
        modified = true;
        this.log(`Fixed interface issues in ${file}`);
      }

      if (modified) {
        this.fixesApplied++;
      }
    }
  }

  async fixImportPathIssues() {
    this.log('Fixing import path issues...');
    
    const files = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix relative import paths
      content = content.replace(
        /from\s+['"]([^'"]+)['"]/g,
        (match, importPath) => {
          if (importPath.startsWith('.') && !importPath.includes('.')) {
            // Add .ts or .tsx extension
            const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
            for (const ext of possibleExtensions) {
              const fullPath = path.join(path.dirname(filePath), importPath + ext);
              if (fs.existsSync(fullPath)) {
                return `from '${importPath}${ext}'`;
              }
            }
            // If no file found, try without extension (let bundler handle it)
            return `from '${importPath}'`;
          }
          return match;
        }
      );

      if (content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content);
        modified = true;
        this.log(`Fixed import paths in ${file}`);
      }

      if (modified) {
        this.fixesApplied++;
      }
    }
  }

  async runTypeScriptCheck() {
    this.log('Running TypeScript check...');
    
    const result = await this.runCommand('npx tsc --noEmit', { silent: true });
    
    if (!result.success) {
      const errors = result.output.split('\n').filter(line => line.includes('error TS'));
      
      for (const error of errors) {
        this.log(`TypeScript error: ${error}`);
        this.errorsRemaining.push(error);
      }
    } else {
      this.log('TypeScript check passed!');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      type: 'typescript-error-fixer',
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      errorsRemaining: this.errorsRemaining,
      summary: {
        totalErrors: this.errorsFixed.length + this.errorsRemaining.length,
        fixedErrors: this.errorsFixed.length,
        remainingErrors: this.errorsRemaining.length,
        successRate: this.errorsFixed.length / (this.errorsFixed.length + this.errorsRemaining.length) * 100
      }
    };

    const reportPath = path.join(this.reportsDir, `typescript-error-fixer-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    this.log(`Summary: ${report.summary.fixedErrors} errors fixed, ${report.summary.remainingErrors} errors remaining`);
    
    return report;
  }

  async run() {
    this.log('Starting TypeScript Error Fixer...');
    
    try {
      // Step 1: Fix missing React imports
      await this.fixMissingReactImports();
      
      // Step 2: Fix missing hook imports
      await this.fixMissingHookImports();
      
      // Step 3: Fix type annotations
      await this.fixTypeAnnotations();
      
      // Step 4: Fix interface issues
      await this.fixInterfaceIssues();
      
      // Step 5: Fix import path issues
      await this.fixImportPathIssues();
      
      // Step 6: Run TypeScript check
      await this.runTypeScriptCheck();
      
      // Step 7: Generate report
      const report = await this.generateReport();
      
      this.log('TypeScript Error Fixer completed successfully!');
      return report;
      
    } catch (error) {
      this.log(`Error in TypeScript Error Fixer: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const automation = new TypeScriptErrorFixer();
  automation.run()
    .then(report => {
      console.log('TypeScript Error Fixer completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('TypeScript Error Fixer failed:', error);
      process.exit(1);
    });
}

module.exports = TypeScriptErrorFixer;