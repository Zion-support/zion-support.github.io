#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class BulkJSXFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async fixAllJSXFiles() {
    this.log('Starting bulk JSX syntax fixing...');
    
    const patterns = [
      'src/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'components/**/*.{ts,tsx}'
    ];

    for (const pattern of patterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          await this.fixJSXFile(filePath);
        }
      }
    }
  }

  async fixJSXFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix JSX syntax errors
      modified = this.fixJSXSyntax(content) || modified;
      
      // Fix function declarations
      modified = this.fixFunctionDeclarations(content) || modified;
      
      // Fix import statements
      modified = this.fixImportStatements(content) || modified;
      
      // Fix export statements
      modified = this.fixExportStatements(content) || modified;

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.errorsFixed++;
        this.log(`Fixed JSX issues in: ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error processing file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  fixJSXSyntax(content) {
    let modified = false;

    // Fix JSX syntax errors (<> and </>)
    if (content.includes('<>') || content.includes('</>')) {
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix missing React imports
    if (content.includes('React') && !content.includes("import React") && !content.includes("import * as React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix missing return statements in components
    if (content.includes('export default') && content.includes('function') && !content.includes('return')) {
      const lines = content.split('\n');
      let inFunction = false;
      let functionStart = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('function') && line.includes('(')) {
          inFunction = true;
          functionStart = i;
        }
        if (inFunction && line.includes('}')) {
          // Check if there's a return statement
          const functionBody = lines.slice(functionStart + 1, i);
          if (!functionBody.some(l => l.includes('return'))) {
            lines.splice(i, 0, '  return null;');
            modified = true;
          }
          inFunction = false;
        }
      }
      
      if (modified) {
        content = lines.join('\n');
      }
    }

    return modified;
  }

  fixFunctionDeclarations(content) {
    let modified = false;

    // Fix missing type annotations for function parameters
    content = content.replace(/(function\s+\w+\s*\()([^)]*)(\))/g, (match, funcStart, params, funcEnd) => {
      if (params.trim() && !params.includes(':')) {
        const newParams = params.split(',').map(param => {
          const trimmed = param.trim();
          if (trimmed && !trimmed.includes(':')) {
            return `${trimmed}: any`;
          }
          return trimmed;
        }).join(', ');
        return `${funcStart}${newParams}${funcEnd}`;
      }
      return match;
    });

    // Fix missing return types
    content = content.replace(/(const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{)/g, '$1\n  return (');
    content = content.replace(/(const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{)/g, '$1\n  return (');

    return modified;
  }

  fixImportStatements(content) {
    let modified = false;

    // Fix relative imports
    content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\//g, "from '../../../");
    content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\//g, "from '../../");
    content = content.replace(/from\s+['"]\.\.\/\.\.\//g, "from '../");
    
    // Fix missing file extensions
    content = content.replace(/from\s+['"]([^'"]+)['"]/g, (match, importPath) => {
      if (importPath.startsWith('.') && !importPath.includes('.')) {
        return `from '${importPath}.tsx'`;
      }
      return match;
    });

    // Fix import syntax
    content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s*from\s+['"]([^'"]+)\.ts['"]/g, 'import { $1 } from "$2"');

    return modified;
  }

  fixExportStatements(content) {
    let modified = false;

    // Fix missing export default
    if (content.includes('const') && content.includes('=') && content.includes('React.FC') && !content.includes('export default')) {
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const') && lines[i].includes('React.FC')) {
          const componentName = lines[i].match(/const\s+(\w+)/)?.[1];
          if (componentName) {
            lines.splice(lines.length - 1, 0, `export default ${componentName};`);
            modified = true;
          }
          break;
        }
      }
      if (modified) {
        content = lines.join('\n');
      }
    }

    return modified;
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      filesProcessed: this.filesProcessed,
      errorsFixed: this.errorsFixed,
      success: this.errorsFixed > 0,
      summary: `Processed ${this.filesProcessed} files and fixed ${this.errorsFixed} JSX syntax errors in ${duration}ms`
    };

    const reportPath = path.join(this.reportsDir, 'bulk-jsx-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    this.log(report.summary);
    
    return report;
  }

  async run() {
    this.log('Starting Bulk JSX Fixer...');
    
    try {
      await this.fixAllJSXFiles();
      
      const report = await this.generateReport();
      
      this.log('Bulk JSX Fixer completed successfully');
      return report;
      
    } catch (error) {
      this.log(`JSX fixing failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const fixer = new BulkJSXFixer();
  fixer.run().catch(console.error);
}

module.exports = BulkJSXFixer;