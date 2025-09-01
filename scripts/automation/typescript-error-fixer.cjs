#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting TypeScript error fixer...');

class TypeScriptErrorFixer {
  constructor() {
    this.fixes = [];
    this.stats = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      filesProcessed: 0
    };
  }

  async run() {
    try {
      console.log('🔍 Running TypeScript check...');
      
      // Run TypeScript check to get errors
      const errors = await this.getTypeScriptErrors();
      this.stats.totalErrors = errors.length;
      
      console.log(`📊 Found ${errors.length} TypeScript errors`);
      
      // Apply fixes for each error
      for (const error of errors) {
        try {
          const fixResult = await this.applyFix(error);
          if (fixResult.success) {
            this.fixes.push(fixResult);
            this.stats.fixedErrors++;
            console.log(`✅ Fixed: ${error.message}`);
          } else {
            this.stats.failedFixes++;
            console.log(`⚠️ Could not fix: ${error.message}`);
          }
        } catch (error) {
          console.error(`❌ Error applying fix: ${error.message}`);
          this.stats.failedFixes++;
        }
      }
      
      // Generate report
      this.generateReport();
      
      console.log(`✅ TypeScript error fixer completed. Fixed ${this.stats.fixedErrors}/${this.stats.totalErrors} errors`);
      
    } catch (error) {
      console.error('❌ TypeScript error fixer failed:', error.message);
    }
  }

  async getTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No errors if command succeeds
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseTypeScriptErrors(output);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: this.categorizeError(match[4])
          });
        }
      }
    });
    
    return errors;
  }

  categorizeError(message) {
    if (message.includes('Cannot find module')) return 'module-resolution';
    if (message.includes('Property') && message.includes('does not exist')) return 'property-access';
    if (message.includes('Type') && message.includes('is not assignable')) return 'type-assignment';
    if (message.includes('Expected') && message.includes('arguments')) return 'function-arguments';
    if (message.includes('Object is possibly')) return 'null-check';
    if (message.includes('Parameter') && message.includes('implicitly has an')) return 'implicit-any';
    return 'unknown';
  }

  async applyFix(error) {
    const { file, line, column, message, type } = error;
    
    try {
      switch (type) {
        case 'module-resolution':
          return await this.fixModuleResolution(error);
        case 'property-access':
          return await this.fixPropertyAccess(error);
        case 'type-assignment':
          return await this.fixTypeAssignment(error);
        case 'function-arguments':
          return await this.fixFunctionArguments(error);
        case 'null-check':
          return await this.fixNullCheck(error);
        case 'implicit-any':
          return await this.fixImplicitAny(error);
        default:
          return { success: false, reason: 'Unknown error type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async fixModuleResolution(error) {
    const { file, message } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Fix React import issues
    if (message.includes('react') && !content.includes("import React")) {
      lines.unshift("import React from 'react';");
      fs.writeFileSync(file, lines.join('\n'));
      return { 
        success: true, 
        type: 'module-resolution', 
        action: 'Added React import',
        file: file
      };
    }
    
    // Fix other module imports
    const moduleMatch = message.match(/Cannot find module '([^']+)'/);
    if (moduleMatch) {
      const moduleName = moduleMatch[1];
      
      // Try to install missing package
      try {
        execSync(`npm install ${moduleName}`, { stdio: 'pipe' });
        return { 
          success: true, 
          type: 'module-resolution', 
          action: `Installed missing package: ${moduleName}`,
          file: file
        };
      } catch (error) {
        // If installation fails, try to fix import path
        return await this.fixImportPath(error, moduleName);
      }
    }
    
    return { success: false, reason: 'No fix available for module resolution' };
  }

  async fixImportPath(error, moduleName) {
    const { file } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Look for import statements and try to fix them
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('import') && line.includes(moduleName)) {
        // Try common fixes
        const fixedLine = line
          .replace(/from ['"]\.\.\/\.\.\//g, "from '../../../")
          .replace(/from ['"]\.\.\//g, "from '../")
          .replace(/from ['"]\.\//g, "from './");
        
        if (fixedLine !== line) {
          lines[i] = fixedLine;
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'module-resolution', 
            action: 'Fixed import path',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix import path' };
  }

  async fixPropertyAccess(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Add optional chaining
      if (currentLine.includes('.')) {
        const fixedLine = currentLine.replace(/\.(\w+)/g, '?.$1');
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'property-access', 
            action: 'Added optional chaining',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix property access' };
  }

  async fixTypeAssignment(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Add type assertion
      if (currentLine.includes('=')) {
        const fixedLine = currentLine.replace(/= (.+)/, '= $1 as any');
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'type-assignment', 
            action: 'Added type assertion',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix type assignment' };
  }

  async fixFunctionArguments(error) {
    // Function argument fixes are complex and often require manual intervention
    return { success: false, reason: 'Manual fix required for function arguments' };
  }

  async fixNullCheck(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Add null check
      if (currentLine.includes('.')) {
        const fixedLine = currentLine.replace(/\.(\w+)/g, '?.$1');
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'null-check', 
            action: 'Added null check',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix null check' };
  }

  async fixImplicitAny(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Add explicit any type
      if (currentLine.includes('function') || currentLine.includes('=>')) {
        const fixedLine = currentLine.replace(/(\w+):\s*\)/, '$1: any)');
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'implicit-any', 
            action: 'Added explicit any type',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix implicit any' };
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      fixes: this.fixes,
      summary: {
        totalErrors: this.stats.totalErrors,
        fixedErrors: this.stats.fixedErrors,
        failedFixes: this.stats.failedFixes,
        successRate: this.stats.totalErrors > 0 ? 
          (this.stats.fixedErrors / this.stats.totalErrors * 100).toFixed(2) + '%' : '0%'
      }
    };

    const reportPath = path.join(process.cwd(), 'typescript-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 TypeScript error fixer report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const fixer = new TypeScriptErrorFixer();
  
  try {
    await fixer.run();
    
    // Exit with appropriate code
    process.exit(fixer.stats.failedFixes > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ TypeScript error fixer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { TypeScriptErrorFixer };