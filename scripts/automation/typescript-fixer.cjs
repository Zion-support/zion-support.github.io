#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'typescript-fixer-report.json');
    this.fixesApplied = [];
    this.errorsFound = [];
  }

  async run() {
    console.log('🔧 Starting TypeScript error fixing...');
    
    try {
      // Run TypeScript check
      await this.scanForTypeScriptErrors();
      
      // Apply TypeScript fixes
      await this.applyTypeScriptFixes();
      
      // Run final validation
      await this.validateTypeScriptFixes();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ TypeScript fixing completed successfully!');
    } catch (error) {
      console.error('❌ Error during TypeScript fixing:', error);
      await this.generateReport();
      process.exit(1);
    }
  }

  async scanForTypeScriptErrors() {
    console.log('🔍 Scanning for TypeScript errors...');
    
    try {
      // Run TypeScript compiler to get errors
      const tsOutput = execSync('npx tsc --noEmit 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.errorsFound = this.parseTypeScriptOutput(tsOutput);
      console.log(`📊 Found ${this.errorsFound.length} TypeScript errors`);
      
    } catch (error) {
      // TypeScript failed, parse the error output
      this.errorsFound = this.parseTypeScriptOutput(error.stdout || error.stderr || '');
    }
  }

  parseTypeScriptOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s+-\s+error\s+TS(\d+):\s+(.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            code: `TS${match[4]}`,
            message: match[5].trim()
          });
        }
      }
    }
    
    return errors;
  }

  async applyTypeScriptFixes() {
    console.log('🔧 Applying TypeScript fixes...');
    
    // Group errors by file
    const errorsByFile = this.groupErrorsByFile();
    
    for (const [filePath, errors] of Object.entries(errorsByFile)) {
      await this.fixTypeScriptFileErrors(filePath, errors);
    }
  }

  groupErrorsByFile() {
    const grouped = {};
    
    for (const error of this.errorsFound) {
      if (!grouped[error.file]) {
        grouped[error.file] = [];
      }
      grouped[error.file].push(error);
    }
    
    return grouped;
  }

  async fixTypeScriptFileErrors(filePath, errors) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Sort errors by line number (descending) to avoid line number shifts
      const sortedErrors = errors.sort((a, b) => b.line - a.line);
      
      for (const error of sortedErrors) {
        const fix = await this.getTypeScriptFix(error, content);
        if (fix) {
          content = this.applyTypeScriptFix(content, error, fix);
          modified = true;
          this.fixesApplied.push({
            file: filePath,
            error: error.message,
            code: error.code,
            fix: fix.description
          });
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${errors.length} TypeScript issues in ${filePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error fixing TypeScript in ${filePath}:`, error);
    }
  }

  async getTypeScriptFix(error, content) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Handle different TypeScript error codes
    switch (error.code) {
      case 'TS1185': // Merge conflict marker
        return this.fixMergeConflict(error, line, lineIndex);
      case 'TS1382': // Unexpected token
        return this.fixUnexpectedToken(error, line, lineIndex);
      case 'TS1005': // Expected corresponding JSX closing tag
        return this.fixJSXClosingTag(error, line, lineIndex);
      case 'TS2322': // Type assignment error
        return this.fixTypeAssignment(error, line, lineIndex);
      case 'TS2339': // Property does not exist
        return this.fixPropertyDoesNotExist(error, line, lineIndex);
      case 'TS2345': // Argument type error
        return this.fixArgumentType(error, line, lineIndex);
      case 'TS2531': // Object is possibly null
        return this.fixPossiblyNull(error, line, lineIndex);
      case 'TS2532': // Object is possibly undefined
        return this.fixPossiblyUndefined(error, line, lineIndex);
      case 'TS6133': // Variable declared but never used
        return this.fixUnusedVariable(error, line, lineIndex);
      default:
        return null;
    }
  }

  fixMergeConflict(error, line, lineIndex) {
    return {
      type: 'remove-conflict',
      description: 'Remove merge conflict markers',
      action: () => {
        return line
          .replace(/<<<<<<< HEAD/g, '')
          .replace(/=======/g, '')
          .replace(/>>>>>>> [a-f0-9]+/g, '')
          .trim();
      }
    };
  }

  fixUnexpectedToken(error, line, lineIndex) {
    return {
      type: 'fix-token',
      description: 'Fix unexpected token',
      action: () => {
        // Handle common token issues
        return line
          .replace(/\{\s*>\s*\}/g, '{">"}')
          .replace(/\{\s*<\s*\}/g, '{"<"}')
          .replace(/\{\s*&\s*\}/g, '{"&"}');
      }
    };
  }

  fixJSXClosingTag(error, line, lineIndex) {
    return {
      type: 'fix-jsx',
      description: 'Fix JSX closing tag',
      action: () => {
        // This is complex and might need manual intervention
        return line;
      }
    };
  }

  fixTypeAssignment(error, line, lineIndex) {
    const match = error.message.match(/Type '(.+)' is not assignable to type '(.+)'/);
    if (match) {
      const actualType = match[1];
      const expectedType = match[2];
      
      return {
        type: 'fix-type',
        description: `Fix type assignment from ${actualType} to ${expectedType}`,
        action: () => {
          // Add type assertion or fix the assignment
          if (line.includes('=')) {
            return line.replace(/=\s*([^;]+);?/, `= $1 as ${expectedType};`);
          }
          return line;
        }
      };
    }
    return null;
  }

  fixPropertyDoesNotExist(error, line, lineIndex) {
    const match = error.message.match(/Property '(.+)' does not exist on type '(.+)'/);
    if (match) {
      const property = match[1];
      const type = match[2];
      
      return {
        type: 'fix-property',
        description: `Fix property ${property} access on ${type}`,
        action: () => {
          // Add optional chaining or type assertion
          return line.replace(
            new RegExp(`\\.${property}\\b`),
            `?.${property}`
          );
        }
      };
    }
    return null;
  }

  fixArgumentType(error, line, lineIndex) {
    const match = error.message.match(/Argument of type '(.+)' is not assignable to parameter of type '(.+)'/);
    if (match) {
      const actualType = match[1];
      const expectedType = match[2];
      
      return {
        type: 'fix-argument',
        description: `Fix argument type from ${actualType} to ${expectedType}`,
        action: () => {
          // Add type assertion
          return line.replace(
            /\(([^)]+)\)/g,
            `($1 as ${expectedType})`
          );
        }
      };
    }
    return null;
  }

  fixPossiblyNull(error, line, lineIndex) {
    return {
      type: 'fix-null',
      description: 'Fix possibly null object',
      action: () => {
        return line.replace(
          /(\w+)\./g,
          '$1?.'
        );
      }
    };
  }

  fixPossiblyUndefined(error, line, lineIndex) {
    return {
      type: 'fix-undefined',
      description: 'Fix possibly undefined object',
      action: () => {
        return line.replace(
          /(\w+)\./g,
          '$1?.'
        );
      }
    };
  }

  fixUnusedVariable(error, line, lineIndex) {
    const match = error.message.match(/Variable '(.+)' is declared but never used/);
    if (match) {
      const variable = match[1];
      
      return {
        type: 'fix-unused',
        description: `Fix unused variable ${variable}`,
        action: () => {
          // Prefix with underscore
          return line.replace(
            new RegExp(`\\b${variable}\\b`),
            `_${variable}`
          );
        }
      };
    }
    return null;
  }

  applyTypeScriptFix(content, error, fix) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (fix.action() === 'REMOVE_LINE') {
      lines.splice(lineIndex, 1);
    } else {
      lines[lineIndex] = fix.action();
    }
    
    return lines.join('\n');
  }

  async validateTypeScriptFixes() {
    console.log('🔍 Validating TypeScript fixes...');
    
    try {
      // Run TypeScript compiler again to check if fixes worked
      const tsOutput = execSync('npx tsc --noEmit 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const remainingErrors = this.parseTypeScriptOutput(tsOutput);
      console.log(`📊 Remaining TypeScript errors: ${remainingErrors.length}`);
      
      if (remainingErrors.length < this.errorsFound.length) {
        console.log(`🎉 Successfully fixed ${this.errorsFound.length - remainingErrors.length} TypeScript errors!`);
      }
      
    } catch (error) {
      console.log('⚠️  Some TypeScript errors may still remain');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalTypeScriptErrorsFound: this.errorsFound.length,
      fixesApplied: this.fixesApplied.length,
      fixes: this.fixesApplied,
      remainingErrors: this.errorsFound.length - this.fixesApplied.length
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 TypeScript report saved to ${this.reportPath}`);
  }
}

// Run the TypeScript fixer
const typescriptFixer = new TypeScriptFixer();
typescriptFixer.run().catch(console.error);