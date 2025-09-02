#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class TypeScriptErrorMonitor {
  constructor() {
    this.checkInterval = process.env.CHECK_INTERVAL || 180000; // 3 minutes
    this.autoFixEnabled = process.env.AUTO_FIX_ENABLED === 'true';
    this.maxErrorsPerRun = parseInt(process.env.MAX_ERRORS_PER_RUN) || 50;
    this.logFile = 'error-reports/typescript-error-monitor-report.json';
    
    console.log('🔧 TypeScript Error Monitor started');
    console.log(`Check interval: ${this.checkInterval}ms`);
    console.log(`Auto-fix enabled: ${this.autoFixEnabled}`);
    console.log(`Max errors per run: ${this.maxErrorsPerRun}`);
  }

  async start() {
    // Initial check
    await this.checkAndFixTypeScriptErrors();
    
    // Set up interval checking
    setInterval(async () => {
      await this.checkAndFixTypeScriptErrors();
    }, this.checkInterval);
  }

  async checkAndFixTypeScriptErrors() {
    console.log('🔍 Checking TypeScript errors...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: 0,
        fixesApplied: 0,
        fixesFailed: 0,
        fixesSkipped: 0
      },
      errors: [],
      fixes: {
        applied: [],
        failed: [],
        skipped: []
      },
      recommendations: []
    };

    try {
      // Run TypeScript compiler to get errors
      const errors = await this.getTypeScriptErrors();
      report.summary.totalErrors = errors.length;
      report.errors = errors.slice(0, this.maxErrorsPerRun); // Limit errors processed

      if (this.autoFixEnabled) {
        for (const error of report.errors) {
          try {
            const fixed = await this.fixTypeScriptError(error);
            if (fixed) {
              report.fixes.applied.push(error);
              report.summary.fixesApplied++;
              console.log(`✅ Fixed TS error: ${error.file}:${error.line}`);
            } else {
              report.fixes.failed.push(error);
              report.summary.fixesFailed++;
            }
          } catch (fixError) {
            report.fixes.failed.push({ ...error, fixError: fixError.message });
            report.summary.fixesFailed++;
            console.error(`❌ Failed to fix TS error in ${error.file}:`, fixError.message);
          }
        }
      } else {
        report.summary.fixesSkipped = errors.length;
        report.fixes.skipped = errors;
      }

      // Generate recommendations
      report.recommendations = this.generateRecommendations(errors);

      // Save report
      this.saveReport(report);
      
      console.log(`📊 TypeScript check complete.`);
      console.log(`Total errors: ${report.summary.totalErrors}`);
      console.log(`✅ Fixed: ${report.summary.fixesApplied}, ❌ Failed: ${report.summary.fixesFailed}, ⏭️ Skipped: ${report.summary.fixesSkipped}`);
      
    } catch (error) {
      console.error('Error during TypeScript check:', error);
      report.error = error.message;
      this.saveReport(report);
    }
  }

  async getTypeScriptErrors() {
    try {
      // Run tsc --noEmit to get TypeScript errors
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      return []; // No errors
    } catch (error) {
      const output = error.stdout ? error.stdout.toString() : error.stderr.toString();
      return this.parseTypeScriptErrors(output);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\\n');
    
    for (const line of lines) {
      // Parse TypeScript error format: file(line,col): error TS#### message
      const match = line.match(/^(.+?)\\((\\d+),(\\d+)\\):\\s+error\\s+(TS\\d+):\\s+(.+)$/);
      if (match) {
        const [, file, line, col, code, message] = match;
        errors.push({
          file: file.trim(),
          line: parseInt(line),
          column: parseInt(col),
          code,
          message: message.trim(),
          type: 'typescript'
        });
      }
    }

    return errors;
  }

  async fixTypeScriptError(error) {
    try {
      const { file, line, message, code } = error;
      
      if (!fs.existsSync(file)) {
        return false;
      }

      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\\n');
      
      if (line > lines.length) {
        return false;
      }

      let modified = false;
      const originalContent = content;

      // Apply specific fixes based on error codes
      switch (code) {
        case 'TS2304': // Cannot find name
          modified = this.fixCannotFindName(lines, line - 1, message);
          break;
        case 'TS2307': // Cannot find module
          modified = this.fixCannotFindModule(lines, line - 1, message);
          break;
        case 'TS2339': // Property does not exist
          modified = this.fixPropertyDoesNotExist(lines, line - 1, message);
          break;
        case 'TS2345': // Argument type not assignable
          modified = this.fixArgumentTypeError(lines, line - 1, message);
          break;
        case 'TS2322': // Type not assignable
          modified = this.fixTypeNotAssignable(lines, line - 1, message);
          break;
        case 'TS7006': // Parameter implicitly has 'any' type
          modified = this.fixImplicitAnyParameter(lines, line - 1, message);
          break;
        default:
          // Generic fixes
          modified = this.applyGenericFix(lines, line - 1, message);
      }

      if (modified) {
        // Create backup
        fs.writeFileSync(file + '.backup', originalContent);
        
        // Write fixed content
        const newContent = lines.join('\\n');
        fs.writeFileSync(file, newContent);
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Error fixing TypeScript error in ${error.file}:`, error.message);
      return false;
    }
  }

  fixCannotFindName(lines, lineIndex, message) {
    const line = lines[lineIndex];
    const nameMatch = message.match(/Cannot find name '(.+?)'/);
    
    if (nameMatch) {
      const missingName = nameMatch[1];
      
      // Add common missing imports
      const commonImports = {
        'React': "import React from 'react';",
        'useState': "import { useState } from 'react';",
        'useEffect': "import { useEffect } from 'react';",
        'useRef': "import { useRef } from 'react';",
        'FC': "import { FC } from 'react';",
        'ReactNode': "import { ReactNode } from 'react';",
      };

      if (commonImports[missingName]) {
        lines.unshift(commonImports[missingName]);
        return true;
      }

      // Add type annotation for undefined variables
      if (line.includes(missingName) && !line.includes('const') && !line.includes('let')) {
        lines[lineIndex] = line.replace(missingName, `${missingName}: any`);
        return true;
      }
    }

    return false;
  }

  fixCannotFindModule(lines, lineIndex, message) {
    const line = lines[lineIndex];
    const moduleMatch = message.match(/Cannot find module '(.+?)'/);
    
    if (moduleMatch) {
      const moduleName = moduleMatch[1];
      
      // Fix relative imports
      if (moduleName.startsWith('./') || moduleName.startsWith('../')) {
        const extensions = ['.ts', '.tsx', '.js', '.jsx'];
        for (const ext of extensions) {
          const newImport = line.replace(moduleName, moduleName + ext);
          const resolvedPath = path.resolve(path.dirname(lines[0]), moduleName + ext);
          if (fs.existsSync(resolvedPath)) {
            lines[lineIndex] = newImport;
            return true;
          }
        }
      }
    }

    return false;
  }

  fixPropertyDoesNotExist(lines, lineIndex, message) {
    const line = lines[lineIndex];
    
    // Add optional chaining
    if (line.includes('.') && !line.includes('?.')) {
      lines[lineIndex] = line.replace(/\\.(\\w+)/g, '?.$1');
      return true;
    }

    return false;
  }

  fixArgumentTypeError(lines, lineIndex, message) {
    const line = lines[lineIndex];
    
    // Add type assertions
    if (line.includes('(') && line.includes(')')) {
      lines[lineIndex] = line.replace(/(\\w+)\\s*\\(/g, '$1 as any(');
      return true;
    }

    return false;
  }

  fixTypeNotAssignable(lines, lineIndex, message) {
    const line = lines[lineIndex];
    
    // Add type assertions
    if (line.includes('=')) {
      lines[lineIndex] = line.replace(/=\\s*(.+)$/, '= $1 as any');
      return true;
    }

    return false;
  }

  fixImplicitAnyParameter(lines, lineIndex, message) {
    const line = lines[lineIndex];
    const paramMatch = message.match(/Parameter '(.+?)' implicitly has an 'any' type/);
    
    if (paramMatch) {
      const paramName = paramMatch[1];
      lines[lineIndex] = line.replace(
        new RegExp(`\\\\b${paramName}\\\\b`),
        `${paramName}: any`
      );
      return true;
    }

    return false;
  }

  applyGenericFix(lines, lineIndex, message) {
    const line = lines[lineIndex];
    
    // Generic type annotation fixes
    if (line.includes(':') && !line.includes(': any') && !line.includes(': string') && !line.includes(': number')) {
      lines[lineIndex] = line.replace(/:\\s*$/, ': any');
      return true;
    }

    return false;
  }

  generateRecommendations(errors) {
    const recommendations = [];
    const errorCounts = {};

    // Count error types
    errors.forEach(error => {
      errorCounts[error.code] = (errorCounts[error.code] || 0) + 1;
    });

    // Generate recommendations based on most common errors
    const sortedErrors = Object.entries(errorCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);

    sortedErrors.forEach(([code, count]) => {
      const recommendation = this.getRecommendationForErrorCode(code, count);
      if (recommendation) {
        recommendations.push(recommendation);
      }
    });

    return recommendations;
  }

  getRecommendationForErrorCode(code, count) {
    const recommendations = {
      'TS2304': `Consider adding proper imports for undefined names (${count} occurrences)`,
      'TS2307': `Check module paths and file extensions (${count} occurrences)`,
      'TS2339': `Add proper type definitions or use optional chaining (${count} occurrences)`,
      'TS2345': `Review function argument types (${count} occurrences)`,
      'TS2322': `Fix type assignments or add type assertions (${count} occurrences)`,
      'TS7006': `Add explicit type annotations for parameters (${count} occurrences)`,
    };

    return recommendations[code];
  }

  saveReport(report) {
    try {
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    } catch (error) {
      console.error('Error saving report:', error.message);
    }
  }
}

// Start the monitor
const monitor = new TypeScriptErrorMonitor();
monitor.start().catch(console.error);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('🔧 TypeScript Error Monitor shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🔧 TypeScript Error Monitor interrupted');
  process.exit(0);
});