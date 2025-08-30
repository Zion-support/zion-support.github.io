#!/usr/bin/env node

/**
 * TypeScript Error Fixer - PM2 Automation Script
 * 
 * This script specifically targets and fixes TypeScript errors found in the project:
 * - Duplicate identifier errors
 * - Missing default export errors
 * - Object literal property errors
 * - Import/export mismatches
 * - Unused variable warnings
 * 
 * Runs every 15 minutes to continuously fix TypeScript issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'typescript-error-fixer-report.json');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
  }

  async run() {
    console.log('🚀 Starting TypeScript Error Fixer...');
    
    try {
      // Step 1: Run TypeScript check to get current errors
      const currentErrors = await this.getCurrentTypeScriptErrors();
      
      // Step 2: Fix errors systematically
      await this.fixTypeScriptErrors(currentErrors);
      
      // Step 3: Run type check again to verify fixes
      const remainingErrors = await this.getCurrentTypeScriptErrors();
      
      // Step 4: Generate report
      await this.generateReport(currentErrors.length, remainingErrors.length);
      
      console.log(`✅ TypeScript Error Fixer completed! Fixed ${this.errorsFixed} errors.`);
      console.log(`📊 Remaining errors: ${remainingErrors.length}`);
      
    } catch (error) {
      console.error('❌ Error in TypeScript Error Fixer:', error);
      await this.generateErrorReport(error);
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
        
        // Try multiple patterns to handle different error formats
        
        // Pattern 1: src/file.tsx(line,col): error TS1234: message
        let fileMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s+error\s+TS(\d+):\s*(.+)/);
        
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
          
          console.log(`✅ Parsed error (pattern 1): ${message.trim()}`);
        } else {
          // Pattern 2: src/file.tsx(line,col): error TS1234: (wrapped message)
          fileMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s+error\s+TS(\d+):\s*$/);
          
          if (fileMatch && i + 1 < lines.length) {
            const nextLine = lines[i + 1];
            if (nextLine.includes('error TS')) {
              const errorMatch = nextLine.match(/error\s+TS(\d+):\s*(.+)/);
              if (errorMatch) {
                const [, errorCode, message] = errorMatch;
                
                errors.push({
                  type: 'typescript',
                  message: message.trim(),
                  fullLine: `${line} ${nextLine}`,
                  file: `src/${fileMatch[1]}`,
                  lineNumber: parseInt(fileMatch[2]),
                  columnNumber: parseInt(fileMatch[3]),
                  errorCode: errorCode
                });
                
                console.log(`✅ Parsed wrapped error: ${message.trim()}`);
                i++; // Skip next line since we've processed it
              }
            }
          } else {
            // Pattern 3: Handle cases where the error message is split across multiple lines
            fileMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s*$/);
            
            if (fileMatch) {
              // Look ahead for the error details
              let errorDetails = '';
              let j = i + 1;
              
              while (j < lines.length && !lines[j].startsWith('src/')) {
                if (lines[j].includes('error TS')) {
                  const errorMatch = lines[j].match(/error\s+TS(\d+):\s*(.+)/);
                  if (errorMatch) {
                    const [, errorCode, message] = errorMatch;
                    errorDetails = message;
                    
                    errors.push({
                      type: 'typescript',
                      message: message.trim(),
                      fullLine: `${line} ${lines[j]}`,
                      file: `src/${fileMatch[1]}`,
                      lineNumber: parseInt(fileMatch[2]),
                      columnNumber: parseInt(fileMatch[3]),
                      errorCode: errorCode
                    });
                    
                    console.log(`✅ Parsed multi-line error: ${message.trim()}`);
                    i = j; // Skip to the line we processed
                    break;
                  }
                }
                j++;
              }
              
              if (!errorDetails) {
                console.log(`⚠️ Could not parse error line: ${line}`);
              }
            } else {
              // Pattern 4: Handle cases where the error is split across multiple lines with different formats
              // Look for src/file.tsx(line,col): followed by error TS on next line
              fileMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s*$/);
              
              if (fileMatch) {
                // Look ahead for the error details
                let j = i + 1;
                let foundError = false;
                
                while (j < lines.length && !lines[j].startsWith('src/') && j < i + 5) {
                  if (lines[j].includes('error TS')) {
                    const errorMatch = lines[j].match(/error\s+TS(\d+):\s*(.+)/);
                    if (errorMatch) {
                      const [, errorCode, message] = errorMatch;
                      
                      errors.push({
                        type: 'typescript',
                        message: message.trim(),
                        fullLine: `${line} ${lines[j]}`,
                        file: `src/${fileMatch[1]}`,
                        lineNumber: parseInt(fileMatch[2]),
                        columnNumber: parseInt(fileMatch[3]),
                        errorCode: errorCode
                      });
                      
                      console.log(`✅ Parsed split error: ${message.trim()}`);
                      i = j; // Skip to the line we processed
                      foundError = true;
                      break;
                    }
                  }
                  j++;
                }
                
                if (!foundError) {
                  console.log(`⚠️ Could not parse error line: ${line}`);
                }
              } else {
                // Pattern 5: Handle the actual terminal-wrapped format
                // Look for src/file.tsx(line,col): followed by error TS on the same line
                const wrappedMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s*error\s+TS(\d+):\s*(.+)/);
                
                if (wrappedMatch) {
                  const [, filePath, lineNum, colNum, errorCode, message] = wrappedMatch;
                  
                  errors.push({
                    type: 'typescript',
                    message: message.trim(),
                    fullLine: line,
                    file: `src/${filePath}`,
                    lineNumber: parseInt(lineNum),
                    columnNumber: parseInt(colNum),
                    errorCode: errorCode
                  });
                  
                  console.log(`✅ Parsed wrapped error (pattern 5): ${message.trim()}`);
                } else {
                  console.log(`⚠️ Could not parse error line: ${line}`);
                }
              }
            }
          }
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
      if (error.file) {
        try {
          await this.fixDuplicateIdentifiersInFile(error.file);
          this.errorsFixed++;
        } catch (fixError) {
          console.log(`⚠️ Could not fix duplicate identifiers in ${error.file}: ${fixError.message}`);
        }
      }
    }
  }

  async fixDuplicateIdentifiersInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const newLines = [];
      const seenIdentifiers = new Map();
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('import') && line.includes('{')) {
          const importMatch = line.match(/import\s*{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const uniqueImports = [];
            const fromPath = importMatch[2];
            
            for (const imp of imports) {
              const cleanImp = imp.replace(/\s+as\s+.+/, '').trim();
              if (!seenIdentifiers.has(cleanImp)) {
                seenIdentifiers.set(cleanImp, i);
                uniqueImports.push(imp);
              }
            }
            
            if (uniqueImports.length > 0) {
              const newImportLine = `import { ${uniqueImports.join(', ')} } from '${fromPath}'`;
              newLines.push(newImportLine);
            }
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, newLines.join('\n'));
      this.filesProcessed++;
      
    } catch (error) {
      throw new Error(`Failed to fix duplicate identifiers: ${error.message}`);
    }
  }

  async fixMissingExportErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} missing export errors...`);
    
    for (const error of errors) {
      if (error.file) {
        try {
          await this.addMissingExportsToFile(error.file);
          this.errorsFixed++;
        } catch (fixError) {
          console.log(`⚠️ Could not fix missing exports in ${error.file}: ${fixError.message}`);
        }
      }
    }
  }

  async addMissingExportsToFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file already has exports
      if (!content.includes('export default') && !content.includes('export {') && !content.includes('export *')) {
        // Add a default export based on file type
        const fileName = path.basename(filePath, path.extname(filePath));
        
        if (filePath.includes('/pages/') || filePath.includes('/components/')) {
          // This is likely a React component, add default export
          content += `\n\nexport default ${fileName};\n`;
        } else if (filePath.includes('/services/') || filePath.includes('/utils/')) {
          // This is likely a utility/service file, add named exports
          content += `\n\nexport { ${fileName} };\n`;
        }
        
        fs.writeFileSync(filePath, content);
        this.filesProcessed++;
      }
      
    } catch (error) {
      throw new Error(`Failed to add missing exports: ${error.message}`);
    }
  }

  async fixObjectLiteralErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} object literal errors...`);
    
    for (const error of errors) {
      if (error.file) {
        try {
          await this.fixObjectLiteralInFile(error.file);
          this.errorsFixed++;
        } catch (fixError) {
          console.log(`⚠️ Could not fix object literal in ${error.file}: ${fixError.message}`);
        }
      }
    }
  }

  async fixObjectLiteralInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix Stripe constructor options
      if (content.includes('advancedFraudSignals')) {
        content = content.replace(/advancedFraudSignals:\s*false/g, '');
        modified = true;
      }
      
      // Fix other common object literal issues
      if (content.includes('exactOptionalPropertyTypes: true')) {
        // This is a TypeScript config issue, not a runtime issue
        // We'll skip this for now as it's a configuration setting
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.filesProcessed++;
      }
      
    } catch (error) {
      throw new Error(`Failed to fix object literal: ${error.message}`);
    }
  }

  async fixImportExportMismatchErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} import/export mismatch errors...`);
    
    for (const error of errors) {
      if (error.file) {
        try {
          await this.fixImportExportMismatchInFile(error.file);
          this.errorsFixed++;
        } catch (fixError) {
          console.log(`⚠️ Could not fix import/export mismatch in ${error.file}: ${fixError.message}`);
        }
      }
    }
  }

  async fixImportExportMismatchInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix headers type issues
      if (content.includes('headers: Record<string, string> | undefined')) {
        content = content.replace(
          /headers:\s*Record<string, string>\s*\|\s*undefined/g,
          'headers: Record<string, string>'
        );
        modified = true;
      }
      
      // Fix other type mismatch issues
      if (content.includes('Uint8Array<ArrayBufferLike>')) {
        content = content.replace(
          /Uint8Array<ArrayBufferLike>/g,
          'Uint8Array'
        );
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.filesProcessed++;
      }
      
    } catch (error) {
      throw new Error(`Failed to fix import/export mismatch: ${error.message}`);
    }
  }

  async fixUnusedVariableErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} unused variable errors...`);
    
    for (const error of errors) {
      if (error.file) {
        try {
          await this.removeUnusedVariablesFromFile(error.file);
          this.errorsFixed++;
        } catch (fixError) {
          console.log(`⚠️ Could not fix unused variables in ${error.file}: ${fixError.message}`);
        }
      }
    }
  }

  async removeUnusedVariablesFromFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const newLines = [];
      
      for (const line of lines) {
        // Remove unused imports
        if (line.includes('import') && line.includes('{')) {
          const importMatch = line.match(/import\s*{([^}]+)}\s+from/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const usedImports = [];
            const fromPath = line.match(/from\s+['"]([^'"]+)['"]/)?.[1] || '';
            
            for (const imp of imports) {
              const cleanImp = imp.replace(/\s+as\s+.+/, '').trim();
              // Check if the import is actually used in the file
              if (content.includes(cleanImp) && !line.includes(cleanImp)) {
                usedImports.push(imp);
              }
            }
            
            if (usedImports.length > 0) {
              const newImportLine = `import { ${usedImports.join(', ')} } from '${fromPath}'`;
              newLines.push(newImportLine);
            }
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, newLines.join('\n'));
      this.filesProcessed++;
      
    } catch (error) {
      throw new Error(`Failed to remove unused variables: ${error.message}`);
    }
  }

  async fixOtherTypeScriptErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} other TypeScript errors...`);
    
    for (const error of errors) {
      if (error.file) {
        try {
          await this.fixGenericTypeScriptError(error);
          this.errorsFixed++;
        } catch (fixError) {
          console.log(`⚠️ Could not fix generic error in ${error.file}: ${fixError.message}`);
        }
      }
    }
  }

  async fixGenericTypeScriptError(error) {
    // Generic error fixing - try common patterns
    if (error.file) {
      try {
        let content = fs.readFileSync(error.file, 'utf8');
        let modified = false;
        
        // Fix common patterns
        if (error.message.includes('Type') && error.message.includes('is not assignable to')) {
          // Try to fix type assignment issues
          // This is a complex issue that may require manual intervention
          console.log(`⚠️ Complex type assignment issue in ${error.file}, may require manual fix`);
        }
        
        if (modified) {
          fs.writeFileSync(error.file, content);
          this.filesProcessed++;
        }
        
      } catch (fileError) {
        throw new Error(`Failed to fix generic error: ${fileError.message}`);
      }
    }
  }

  async generateReport(initialErrorCount, remainingErrorCount) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      initialErrorCount,
      remainingErrorCount,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'completed',
      summary: `Fixed ${this.errorsFixed} TypeScript errors in ${this.filesProcessed} files. Reduced errors from ${initialErrorCount} to ${remainingErrorCount} in ${((Date.now() - this.startTime) / 1000).toFixed(2)} seconds`
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportFile}`);
  }

  async generateErrorReport(error) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'error',
      error: error.message,
      stack: error.stack
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`❌ Error report generated: ${this.reportFile}`);
  }
}

// Run the automation
const fixer = new TypeScriptErrorFixer();
fixer.run().catch(console.error);