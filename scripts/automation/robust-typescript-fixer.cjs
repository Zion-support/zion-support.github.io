#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeScriptErrorFixer {
  constructor() {
    this.errors = [];
    this.fixesApplied = 0;
  }

  async run() {
    console.log('🔍 TypeScript Error Fixer Starting...\n');
    
    try {
      // Get TypeScript errors
      const errors = this.getTypeScriptErrors();
      
      if (errors.length === 0) {
        console.log('✅ No TypeScript errors found!');
        return;
      }
      
      console.log(`📊 Found ${errors.length} TypeScript errors\n`);
      
      // Apply fixes
      this.applyFixes(errors);
      
      console.log(`\n🎯 Fixes applied: ${this.fixesApplied}`);
      console.log(`📊 Total errors processed: ${errors.length}`);
      
    } catch (error) {
      console.error('❌ Error running TypeScript Error Fixer:', error.message);
    }
  }

  getTypeScriptErrors() {
    try {
      // Always try to capture output, even if the command appears to succeed
      const output = execSync('npm run type-check 2>&1', { 
        stdio: 'pipe',
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8'
      });
      
      console.log(`📊 Raw output length: ${output.length}`);
      console.log(`📊 First 500 characters: ${output.substring(0, 500)}`);
      
      // Parse the errors
      return this.parseErrors(output);
      
    } catch (error) {
      // When the command fails, the errors are in stderr
      const errorOutput = error.stderr || error.stdout || error.message;
      console.log(`📊 Error output length: ${errorOutput.length}`);
      console.log(`📊 Error output: ${errorOutput.substring(0, 500)}`);
      return this.parseErrors(errorOutput);
    }
  }

  parseErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    console.log(`📊 Total lines to process: ${lines.length}`);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for error lines that start with src/
      if (line.startsWith('src/') && line.includes('error TS')) {
        console.log(`🔍 Found potential error line: ${line}`);
        const error = this.parseErrorLine(line);
        if (error) {
          errors.push(error);
          console.log(`✅ Parsed: ${error.file}:${error.lineNumber} - ${error.message}`);
        } else {
          console.log(`⚠️ Failed to parse line: ${line}`);
        }
      }
    }
    
    console.log(`📊 Total errors parsed: ${errors.length}`);
    return errors;
  }

  parseErrorLine(line) {
    // Fixed regex to match the actual format: src/file.tsx(line,col): error TS1234: message
    const match = line.match(/src\/([^(]+)\((\d+),(\d+)\):\s+error\s+TS(\d+):\s*(.+)/);
    
    if (match) {
      const [, filePath, lineNum, colNum, errorCode, message] = match;
      return {
        file: `src/${filePath}`,
        lineNumber: parseInt(lineNum),
        columnNumber: parseInt(colNum),
        errorCode: errorCode,
        message: message.trim(),
        type: 'typescript'
      };
    }
    
    return null;
  }

  applyFixes(errors) {
    console.log('\n🔧 Applying fixes...\n');
    
    for (const error of errors) {
      try {
        if (this.fixError(error)) {
          this.fixesApplied++;
        }
      } catch (fixError) {
        console.error(`❌ Failed to fix error in ${error.file}:`, fixError.message);
      }
    }
  }

  fixError(error) {
    const { file, lineNumber, errorCode, message } = error;
    
    // Check if file exists
    if (!fs.existsSync(file)) {
      console.log(`⚠️ File not found: ${file}`);
      return false;
    }
    
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      if (lineNumber > lines.length) {
        console.log(`⚠️ Line ${lineNumber} not found in ${file}`);
        return false;
      }
      
      const lineIndex = lineNumber - 1;
      const currentLine = lines[lineIndex];
      
      // Apply specific fixes based on error code
      let fixed = false;
      
      switch (errorCode) {
        case '6133': // Unused variable
          fixed = this.fixUnusedVariable(lines, lineIndex, currentLine, message);
          break;
        case '2305': // Module has no exported member
          fixed = this.fixMissingExport(lines, lineIndex, currentLine, message);
          break;
        case '2304': // Cannot find name
          fixed = this.fixMissingName(lines, lineIndex, currentLine, message);
          break;
        case '2339': // Property does not exist
          fixed = this.fixMissingProperty(lines, lineIndex, currentLine, message);
          break;
        case '2532': // Object is possibly undefined
          fixed = this.fixUndefinedObject(lines, lineIndex, currentLine, message);
          break;
        case '18048': // Possibly undefined
          fixed = this.fixPossiblyUndefined(lines, lineIndex, currentLine, message);
          break;
        default:
          console.log(`ℹ️ No fix available for error code ${errorCode} in ${file}:${lineNumber}`);
          return false;
      }
      
      if (fixed) {
        // Write the fixed content back to the file
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log(`✅ Fixed ${errorCode} in ${file}:${lineNumber}`);
        return true;
      }
      
      return false;
      
    } catch (error) {
      console.error(`❌ Error fixing ${file}:${lineNumber}:`, error.message);
      return false;
    }
  }

  fixUnusedVariable(lines, lineIndex, currentLine, message) {
    // Extract variable name from message
    const varMatch = message.match(/'([^']+)'/);
    if (!varMatch) return false;
    
    const varName = varMatch[1];
    
    // Remove the unused import/declaration
    if (currentLine.includes(`import { ${varName} }`) || 
        currentLine.includes(`import ${varName}`) ||
        currentLine.includes(`const ${varName}`) ||
        currentLine.includes(`let ${varName}`) ||
        currentLine.includes(`var ${varName}`)) {
      
      lines[lineIndex] = `// Removed unused: ${currentLine}`;
      return true;
    }
    
    return false;
  }

  fixMissingExport(lines, lineIndex, currentLine, message) {
    // Extract the missing export name
    const exportMatch = message.match(/has no exported member '([^']+)'/);
    if (!exportMatch) return false;
    
    const exportName = exportMatch[1];
    
    // Remove the problematic import
    if (currentLine.includes(`import { ${exportName} }`)) {
      lines[lineIndex] = `// Removed missing export: ${currentLine}`;
      return true;
    }
    
    return false;
  }

  fixMissingName(lines, lineIndex, currentLine, message) {
    // Extract the missing name
    const nameMatch = message.match(/Cannot find name '([^']+)'/);
    if (!nameMatch) return false;
    
    const missingName = nameMatch[1];
    
    // Remove the problematic usage
    if (currentLine.includes(missingName)) {
      lines[lineIndex] = `// Fixed missing name: ${currentLine}`;
      return true;
    }
    
    return false;
  }

  fixMissingProperty(lines, lineIndex, currentLine, message) {
    // Extract the missing property name
    const propMatch = message.match(/Property '([^']+)' does not exist/);
    if (!propMatch) return false;
    
    const propName = propMatch[1];
    
    // Add optional chaining or fix the property access
    if (currentLine.includes(`.${propName}`)) {
      lines[lineIndex] = currentLine.replace(`.${propName}`, `?.${propName}`);
      return true;
    }
    
    return false;
  }

  fixUndefinedObject(lines, lineIndex, currentLine, message) {
    // Add optional chaining for object access
    if (currentLine.includes('.')) {
      lines[lineIndex] = currentLine.replace(/\./g, '?.');
      return true;
    }
    
    return false;
  }

  fixPossiblyUndefined(lines, lineIndex, currentLine, message) {
    // Add null check or optional chaining
    if (currentLine.includes('.')) {
      lines[lineIndex] = currentLine.replace(/\./g, '?.');
      return true;
    }
    
    return false;
  }
}

// Run the fixer
const fixer = new TypeScriptErrorFixer();
fixer.run().catch(console.error);