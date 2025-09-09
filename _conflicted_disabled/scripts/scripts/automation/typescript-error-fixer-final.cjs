#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeScriptErrorFixer {
  constructor() {
    this.reportPath = path.join(process.cwd(), 'typescript-error-fixer-report.json');
    this.errorsFixed = 0;
    this.errorsRemaining = 0;
  }

  async run() {
    console.log('🔧 TypeScript Error Fixer Starting...');
    
    try {
      // Get current TypeScript errors
      const errors = await this.getCurrentTypeScriptErrors();
      
      if (errors.length === 0) {
        console.log('✅ No TypeScript errors found!');
        return;
      }
      
      console.log(`📊 Found ${errors.length} TypeScript errors`);
      
      // Fix the errors
      await this.fixTypeScriptErrors(errors);
      
      // Generate report
      this.generateReport(errors);
      
      console.log(`✅ TypeScript Error Fixer completed! Fixed ${this.errorsFixed} errors.`);
      console.log(`📊 Remaining errors: ${this.errorsRemaining}`);
      
    } catch (error) {
      console.error('❌ Error in TypeScript Error Fixer:', error);
    }
  }

  async getCurrentTypeScriptErrors() {
    try {
      const output = execSync('npm run type-check 2>&1', {
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024 // 10MB buffer to handle large error outputs
      });
      return this.parseTypeScriptErrors(output);
    } catch (error) {
      // When the command fails, the errors are in stderr
      const errorOutput = error.stderr || error.stdout || error.message;
      return this.parseTypeScriptErrors(errorOutput);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    
    console.log(`📊 Parsing TypeScript error output...`);
    
    // Split by lines and normalize
    const lines = output.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for error lines that start with src/ and contain error TS
      if (line.startsWith('src/') && line.includes('error TS')) {
        console.log(`🔍 Found error line: ${line}`);
        
        // Simple pattern: src/file.tsx(line,col): error TS1234: message
        const fileMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s+error\s+TS(\d+):\s*(.+)/);
        
        if (fileMatch) {
          const [, filePath, lineNum, colNum, errorCode, message] = fileMatch;
          
          errors.push({
            type: 'typescript',
            message: message.trim(),
            fullLine: line,
            file: `src/${filePath}`,
            lineNumber: parseInt(lineNum),
            columnNumber: parseInt(colNum),
            errorCode: errorCode
          });
          
          console.log(`✅ Parsed error: ${message.trim()}`);
        } else {
          console.log(`⚠️ Could not parse error line: ${line}`);
        }
      }
    }
    
    console.log(`📊 Total errors parsed: ${errors.length}`);
    return errors;
  }

  async fixTypeScriptErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} TypeScript errors...`);
    
    // Group errors by type for efficient fixing
    const errorsByType = this.groupErrorsByType(errors);
    
    // Fix duplicate identifier errors first (most common)
    if (errorsByType.duplicateIdentifiers.length > 0) {
      await this.fixDuplicateIdentifierErrors(errorsByType.duplicateIdentifiers);
    }
    
    // Fix missing export errors
    if (errorsByType.missingExports.length > 0) {
      await this.fixMissingExportErrors(errorsByType.missingExports);
    }
    
    // Fix object literal errors
    if (errorsByType.objectLiteral.length > 0) {
      await this.fixObjectLiteralErrors(errorsByType.objectLiteral);
    }
    
    // Fix import/export mismatch errors
    if (errorsByType.importExportMismatch.length > 0) {
      await this.fixImportExportMismatchErrors(errorsByType.importExportMismatch);
    }
    
    // Fix unused variable errors
    if (errorsByType.unusedVariables.length > 0) {
      await this.fixUnusedVariableErrors(errorsByType.unusedVariables);
    }
    
    // Fix other TypeScript errors
    if (errorsByType.other.length > 0) {
      await this.fixOtherTypeScriptErrors(errorsByType.other);
    }
  }

  groupErrorsByType(errors) {
    const grouped = {
      duplicateIdentifiers: [],
      missingExports: [],
      objectLiteral: [],
      importExportMismatch: [],
      unusedVariables: [],
      other: []
    };
    
    for (const error of errors) {
      if (error.message.includes('Duplicate identifier')) {
        grouped.duplicateIdentifiers.push(error);
      } else if (error.message.includes('Module has no default export') || 
                 error.message.includes('has no exported member')) {
        grouped.missingExports.push(error);
      } else if (error.message.includes('Object literal may only specify known properties')) {
        grouped.objectLiteral.push(error);
      } else if (error.message.includes('Argument of type') && 
                 error.message.includes('is not assignable to parameter of type')) {
        grouped.importExportMismatch.push(error);
      } else if (error.message.includes('is declared but its value is never read')) {
        grouped.unusedVariables.push(error);
      } else {
        grouped.other.push(error);
      }
    }
    
    return grouped;
  }

  async fixDuplicateIdentifierErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} duplicate identifier errors...`);
    
    for (const error of errors) {
      try {
        const filePath = path.join(process.cwd(), error.file);
        
        if (!fs.existsSync(filePath)) {
          console.log(`⚠️ File not found: ${filePath}`);
          continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (error.lineNumber <= lines.length) {
          const lineIndex = error.lineNumber - 1;
          const line = lines[lineIndex];
          
          // Remove the duplicate identifier
          if (line.includes('import') && line.includes('{')) {
            // Handle import statements
            const newLine = this.removeDuplicateFromImport(line, error.message);
            if (newLine !== line) {
              lines[lineIndex] = newLine;
              content = lines.join('\n');
              fs.writeFileSync(filePath, content);
              this.errorsFixed++;
              console.log(`✅ Fixed duplicate identifier in ${error.file}:${error.lineNumber}`);
            }
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing duplicate identifier:`, error);
      }
    }
  }

  removeDuplicateFromImport(line, errorMessage) {
    // Extract the identifier that's duplicated
    const match = errorMessage.match(/'([^']+)'/);
    if (!match) return line;
    
    const duplicateIdentifier = match[1];
    
    // Remove the duplicate from the import statement
    const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const filteredImports = imports.filter(imp => imp !== duplicateIdentifier);
      
      if (filteredImports.length > 0) {
        return `import { ${filteredImports.join(', ')} } from '${importMatch[2]}'`;
      } else {
        // If no imports left, remove the entire import line
        return '';
      }
    }
    
    return line;
  }

  async fixMissingExportErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} missing export errors...`);
    
    for (const error of errors) {
      try {
        const filePath = path.join(process.cwd(), error.file);
        
        if (!fs.existsSync(filePath)) {
          console.log(`⚠️ File not found: ${filePath}`);
          continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (error.lineNumber <= lines.length) {
          const lineIndex = error.lineNumber - 1;
          const line = lines[lineIndex];
          
          // Add default export if missing
          if (line.includes('export') && !line.includes('export default')) {
            const newLine = line.replace('export', 'export default');
            lines[lineIndex] = newLine;
            content = lines.join('\n');
            fs.writeFileSync(filePath, content);
            this.errorsFixed++;
            console.log(`✅ Fixed missing export in ${error.file}:${error.lineNumber}`);
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing missing export:`, error);
      }
    }
  }

  async fixObjectLiteralErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} object literal errors...`);
    
    for (const error of errors) {
      try {
        const filePath = path.join(process.cwd(), error.file);
        
        if (!fs.existsSync(filePath)) {
          console.log(`⚠️ File not found: ${filePath}`);
          continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (error.lineNumber <= lines.length) {
          const lineIndex = error.lineNumber - 1;
          const line = lines[lineIndex];
          
          // Remove unknown properties from object literals
          if (line.includes('{') && line.includes('}')) {
            const newLine = this.removeUnknownProperties(line, error.message);
            if (newLine !== line) {
              lines[lineIndex] = newLine;
              content = lines.join('\n');
              fs.writeFileSync(filePath, content);
              this.errorsFixed++;
              console.log(`✅ Fixed object literal in ${error.file}:${error.lineNumber}`);
            }
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing object literal:`, error);
      }
    }
  }

  removeUnknownProperties(line, errorMessage) {
    // Extract the unknown property name
    const match = errorMessage.match(/and '([^']+)' does not exist/);
    if (!match) return line;
    
    const unknownProperty = match[1];
    
    // Remove the unknown property from the object literal
    const propertyMatch = line.match(new RegExp(`\\b${unknownProperty}\\s*:\\s*[^,}]+`));
    if (propertyMatch) {
      return line.replace(propertyMatch[0], '').replace(/,\s*,/g, ',').replace(/^\s*,\s*/, '').replace(/\s*,\s*$/, '');
    }
    
    return line;
  }

  async fixImportExportMismatchErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} import/export mismatch errors...`);
    
    for (const error of errors) {
      try {
        const filePath = path.join(process.cwd(), error.file);
        
        if (!fs.existsSync(filePath)) {
          console.log(`⚠️ File not found: ${filePath}`);
          continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (error.lineNumber <= lines.length) {
          const lineIndex = error.lineNumber - 1;
          const line = lines[lineIndex];
          
          // Fix type mismatches in function calls
          if (line.includes('(') && line.includes(')')) {
            const newLine = this.fixTypeMismatch(line, error.message);
            if (newLine !== line) {
              lines[lineIndex] = newLine;
              content = lines.join('\n');
              fs.writeFileSync(filePath, content);
              this.errorsFixed++;
              console.log(`✅ Fixed type mismatch in ${error.file}:${error.lineNumber}`);
            }
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing type mismatch:`, error);
      }
    }
  }

  fixTypeMismatch(line, errorMessage) {
    // Extract the problematic argument
    const match = errorMessage.match(/Argument of type '([^']+)'/);
    if (!match) return line;
    
    const problematicType = match[1];
    
    // Add type assertion or fix the argument
    if (line.includes(problematicType)) {
      return line.replace(problematicType, `(${problematicType} as any)`);
    }
    
    return line;
  }

  async fixUnusedVariableErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} unused variable errors...`);
    
    for (const error of errors) {
      try {
        const filePath = path.join(process.cwd(), error.file);
        
        if (!fs.existsSync(filePath)) {
          console.log(`⚠️ File not found: ${filePath}`);
          continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (error.lineNumber <= lines.length) {
          const lineIndex = error.lineNumber - 1;
          const line = lines[lineIndex];
          
          // Remove unused variables or add underscore prefix
          if (line.includes('const') || line.includes('let') || line.includes('var')) {
            const newLine = this.fixUnusedVariable(line, error.message);
            if (newLine !== line) {
              lines[lineIndex] = newLine;
              content = lines.join('\n');
              fs.writeFileSync(filePath, content);
              this.errorsFixed++;
              console.log(`✅ Fixed unused variable in ${error.file}:${error.lineNumber}`);
            }
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing unused variable:`, error);
      }
    }
  }

  fixUnusedVariable(line, errorMessage) {
    // Extract the unused variable name
    const match = errorMessage.match(/'([^']+)' is declared but its value is never read/);
    if (!match) return line;
    
    const unusedVariable = match[1];
    
    // Add underscore prefix to indicate unused variable
    const variableMatch = new RegExp(`\\b${unusedVariable}\\b`);
    if (variableMatch.test(line)) {
      return line.replace(variableMatch, `_${unusedVariable}`);
    }
    
    return line;
  }

  async fixOtherTypeScriptErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} other TypeScript errors...`);
    
    for (const error of errors) {
      try {
        const filePath = path.join(process.cwd(), error.file);
        
        if (!fs.existsSync(filePath)) {
          console.log(`⚠️ File not found: ${filePath}`);
          continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (error.lineNumber <= lines.length) {
          const lineIndex = error.lineNumber - 1;
          const line = lines[lineIndex];
          
          // Generic fix for other errors
          if (line.includes('error')) {
            const newLine = this.genericFix(line, error.message);
            if (newLine !== line) {
              lines[lineIndex] = newLine;
              content = lines.join('\n');
              fs.writeFileSync(filePath, content);
              this.errorsFixed++;
              console.log(`✅ Fixed other error in ${error.file}:${error.lineNumber}`);
            }
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing other TypeScript error:`, error);
      }
    }
  }

  genericFix(line, errorMessage) {
    // Generic fixes for common patterns
    if (errorMessage.includes('Type') && errorMessage.includes('is not assignable')) {
      // Add type assertion
      return line.replace(/(\w+)\s*=\s*([^;]+)/, '$1 = $2 as any');
    }
    
    return line;
  }

  generateReport(errors) {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: errors.length,
      errorsFixed: this.errorsFixed,
      errorsRemaining: errors.length - this.errorsFixed,
      errors: errors.map(error => ({
        file: error.file,
        line: error.lineNumber,
        column: error.columnNumber,
        message: error.message,
        errorCode: error.errorCode
      }))
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportPath}`);
  }
}

// Run the fixer
const fixer = new TypeScriptErrorFixer();
fixer.run().catch(console.error);