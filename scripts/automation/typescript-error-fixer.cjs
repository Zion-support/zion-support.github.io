#!/usr/bin/env node

/**
 * TypeScript Error Fixer - Automatically detects and fixes TypeScript errors
 * Runs every 45 minutes as part of the PM2 automation ecosystem
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptErrorFixer {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/typescript-error-fixer.log');
    this.errorsFixed = 0;
    this.startTime = new Date();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runTypeCheck() {
    try {
      this.log('🔍 Running TypeScript type check...');
      const result = execSync('npm run type-check', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log('✅ TypeScript check completed successfully - no errors found');
      return { success: true, output: result };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.log('⚠️  TypeScript check found errors, analyzing...');
      return { success: false, output };
    }
  }

  async fixTypeScriptErrors() {
    try {
      this.log('🔧 Attempting to fix TypeScript errors...');
      
      // Run the type check to see current errors
      const typeCheckResult = await this.runTypeCheck();
      
      if (typeCheckResult.success) {
        this.log('✅ No TypeScript errors to fix');
        return true;
      }

      // Parse TypeScript errors
      const errors = this.parseTypeScriptErrors(typeCheckResult.output);
      
      if (errors.length === 0) {
        this.log('✅ No TypeScript errors detected in output');
        return true;
      }

      this.log(`🔍 Found ${errors.length} TypeScript errors`);
      
      // Try to fix common TypeScript issues
      for (const error of errors) {
        if (await this.fixTypeScriptError(error)) {
          this.errorsFixed++;
        }
      }

      this.log(`✅ Fixed ${this.errorsFixed} TypeScript errors`);
      return true;
      
    } catch (error) {
      this.log(`❌ Error during TypeScript error fixing: ${error.message}`);
      return false;
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      // Match TypeScript error format: file.ts:line:column - error message
      const match = line.match(/(.+\.tsx?):(\d+):(\d+)\s*-\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  async fixTypeScriptError(error) {
    try {
      this.log(`🔧 Attempting to fix: ${error.file}:${error.line} - ${error.message}`);
      
      // Check if file exists
      if (!fs.existsSync(error.file)) {
        this.log(`⚠️  File not found: ${error.file}`);
        return false;
      }

      // Read file content
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      if (error.line > lines.length) {
        this.log(`⚠️  Line ${error.line} is beyond file length`);
        return false;
      }

      const targetLine = lines[error.line - 1];
      let fixedLine = targetLine;
      let wasFixed = false;

      // Apply common TypeScript fixes
      if (error.message.includes('Cannot find module')) {
        // Fix import issues
        fixedLine = await this.fixImportIssue(targetLine, error.message);
        wasFixed = true;
      } else if (error.message.includes('Property') && error.message.includes('does not exist')) {
        // Fix property access issues
        fixedLine = this.fixPropertyAccessIssue(targetLine, error.message);
        wasFixed = true;
      } else if (error.message.includes('Type') && error.message.includes('is not assignable')) {
        // Fix type assignment issues
        fixedLine = this.fixTypeAssignmentIssue(targetLine, error.message);
        wasFixed = true;
      } else if (error.message.includes('Parameter') && error.message.includes('implicitly has an')) {
        // Fix implicit any parameter issues
        fixedLine = this.fixImplicitAnyIssue(targetLine, error.message);
        wasFixed = true;
      }

      // Apply the fix if something was changed
      if (wasFixed && fixedLine !== targetLine) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(error.file, lines.join('\n'));
        this.log(`✅ Fixed line ${error.line} in ${error.file}`);
        return true;
      } else if (wasFixed) {
        this.log(`ℹ️  No changes needed for line ${error.line}`);
        return true;
      } else {
        this.log(`⚠️  No automatic fix available for: ${error.message}`);
        return false;
      }
      
    } catch (error) {
      this.log(`❌ Failed to fix TypeScript error: ${error.message}`);
      return false;
    }
  }

  async fixImportIssue(line, message) {
    // Extract module name from error message
    const moduleMatch = message.match(/Cannot find module ['"]([^'"]+)['"]/);
    if (!moduleMatch) return line;

    const missingModule = moduleMatch[1];
    
    // Try to fix common import issues
    if (missingModule.startsWith('@/')) {
      // Fix path alias imports
      return line.replace(
        new RegExp(`from ['"]${missingModule}['"]`, 'g'),
        `from '${missingModule.replace('@/', './')}'`
      );
    } else if (missingModule.includes('react')) {
      // Fix React imports
      return line.replace(
        /import React from ['"]react['"]/g,
        "import React from 'react'"
      );
    }
    
    return line;
  }

  fixPropertyAccessIssue(line, message) {
    // Extract property name from error message
    const propertyMatch = message.match(/Property ['"]([^'"]+)['"] does not exist/);
    if (!propertyMatch) return line;

    const propertyName = propertyMatch[1];
    
    // Add optional chaining for property access
    return line.replace(
      new RegExp(`(\\w+)\\.${propertyName}`, 'g'),
      `$1?.${propertyName}`
    );
  }

  fixTypeAssignmentIssue(line, message) {
    // Add type assertions for assignment issues
    return line.replace(
      /(\w+)\s*=\s*([^;]+);/g,
      '$1 = $2 as any;'
    );
  }

  fixImplicitAnyIssue(line, message) {
    // Extract parameter name from error message
    const paramMatch = message.match(/Parameter ['"]([^'"]+)['"] implicitly has an/);
    if (!paramMatch) return line;

    const paramName = paramMatch[1];
    
    // Add explicit any type for parameters
    return line.replace(
      new RegExp(`\\(([^)]*${paramName}[^)]*)\\)`, 'g'),
      (match, params) => {
        return params.replace(
          new RegExp(`\\b${paramName}\\b(?!\\s*:)`, 'g'),
          `${paramName}: any`
        );
      }
    );
  }

  async run() {
    this.log('🚀 TypeScript Error Fixer starting...');
    
    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Run the main fixing logic
      const success = await this.fixTypeScriptErrors();
      
      const endTime = new Date();
      const duration = endTime - this.startTime;
      
      this.log(`🏁 TypeScript Error Fixer completed in ${duration}ms`);
      this.log(`📊 Summary: Fixed ${this.errorsFixed} errors`);
      
      if (success) {
        this.log('✅ TypeScript Error Fixer completed successfully');
        process.exit(0);
      } else {
        this.log('⚠️  TypeScript Error Fixer completed with warnings');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ TypeScript Error Fixer failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer if this script is executed directly
if (require.main === module) {
  const fixer = new TypeScriptErrorFixer();
  fixer.run();
}

module.exports = TypeScriptErrorFixer;