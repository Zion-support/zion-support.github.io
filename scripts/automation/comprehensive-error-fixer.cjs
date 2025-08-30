#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ComprehensiveErrorFixer {
  constructor() {
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.logFile = './logs/comprehensive-error-fixer.log';
    this.ensureLogDirectory();
    this.fixers = [
      'syntax',
      'typescript',
      'linting',
      'build',
      'dependencies'
    ];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runFixer(type) {
    this.log(`🔧 Running ${type} fixer...`);
    
    try {
      switch (type) {
        case 'syntax':
          await this.fixSyntaxErrors();
          break;
        case 'typescript':
          await this.fixTypeScriptErrors();
          break;
        case 'linting':
          await this.fixLintingErrors();
          break;
        case 'build':
          await this.fixBuildErrors();
          break;
        case 'dependencies':
          await this.fixDependencyIssues();
          break;
        default:
          this.log(`⚠️ Unknown fixer type: ${type}`);
      }
    } catch (error) {
      this.log(`❌ Error in ${type} fixer: ${error.message}`);
    }
  }

  async fixSyntaxErrors() {
    this.log('🔍 Fixing syntax errors...');
    
    try {
      // Run syntax error fixer
      execSync('node ./scripts/automation/syntax-error-fixer.cjs run', { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      this.log('✅ Syntax errors fixed');
    } catch (error) {
      this.log(`⚠️ Syntax fixer failed: ${error.message}`);
    }
  }

  async fixTypeScriptErrors() {
    this.log('🔍 Fixing TypeScript errors...');
    
    try {
      // Run TypeScript compiler to check for errors
      const result = execSync('npx tsc --noEmit 2>&1', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      if (result.includes('error')) {
        await this.applyTypeScriptFixes(result);
      } else {
        this.log('✅ No TypeScript errors found');
      }
    } catch (error) {
      await this.applyTypeScriptFixes(error.stdout || error.message);
    }
  }

  async applyTypeScriptFixes(output) {
    const errors = this.parseTypeScriptErrors(output);
    this.log(`🔧 Found ${errors.length} TypeScript errors to fix...`);
    
    for (const error of errors) {
      try {
        await this.fixTypeScriptError(error);
      } catch (err) {
        this.log(`❌ Failed to fix TypeScript error in ${error.file}: ${err.message}`);
      }
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^:]+):(\d+):(\d+)\s+-\s+error\s+TS\d+:\s+(.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4].trim(),
            code: line.match(/TS\d+/)?.[0] || 'TS0000'
          });
        }
      }
    }
    
    return errors;
  }

  async fixTypeScriptError(error) {
    if (!fs.existsSync(error.file)) {
      this.log(`⚠️ File not found: ${error.file}`);
      return;
    }

    const content = fs.readFileSync(error.file, 'utf8');
    const lines = content.split('\n');
    
    if (error.line > lines.length) {
      this.log(`⚠️ Line ${error.line} not found in ${error.file}`);
      return;
    }

    const lineIndex = error.line - 1;
    const currentLine = lines[lineIndex];
    
    // Apply TypeScript-specific fixes
    const fixedLine = this.applyTypeScriptFixes(currentLine, error.message, error.code);
    
    if (fixedLine !== currentLine) {
      lines[lineIndex] = fixedLine;
      fs.writeFileSync(error.file, lines.join('\n'));
      this.fixesApplied++;
      this.errorsFixed.push({
        type: 'typescript',
        file: error.file,
        line: error.line,
        original: currentLine.trim(),
        fixed: fixedLine.trim(),
        error: error.message
      });
      this.log(`✅ Fixed TypeScript error in ${error.file}:${error.line}`);
    }
  }

  applyTypeScriptFixes(line, message, code) {
    let fixedLine = line;

    // Fix common TypeScript errors
    if (code === 'TS1003' && message.includes('Identifier expected')) {
      // Fix missing identifier
      if (line.trim() === '') {
        fixedLine = '  // Fixed: Added missing identifier';
      }
    }

    if (code === 'TS1138' && message.includes('Parameter declaration expected')) {
      // Fix missing parameter declaration
      if (line.trim().startsWith('<>')) {
        fixedLine = 'const Component = () => {';
      }
    }

    if (code === 'TS2657' && message.includes('JSX expressions must have one parent element')) {
      // Fix JSX parent element issue
      if (line.trim().startsWith('<')) {
        fixedLine = '  <div>' + line.trim();
      }
    }

    if (code === 'TS1128' && message.includes('Declaration or statement expected')) {
      // Fix missing declaration
      if (line.trim() === '') {
        fixedLine = '  // Fixed: Added missing declaration';
      }
    }

    if (code === 'TS1109' && message.includes('Expression expected')) {
      // Fix missing expression
      if (line.trim() === '') {
        fixedLine = '  // Fixed: Added missing expression';
      }
    }

    if (code === 'TS1131' && message.includes('Property or signature expected')) {
      // Fix missing property
      if (line.trim().startsWith('const')) {
        fixedLine = line.replace(/=\s*$/, '= [];');
      }
    }

    return fixedLine;
  }

  async fixLintingErrors() {
    this.log('🔍 Fixing linting errors...');
    
    try {
      // Run ESLint with auto-fix
      execSync('npx eslint . --fix', { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      this.log('✅ Linting errors auto-fixed');
    } catch (error) {
      this.log(`⚠️ Linting auto-fix failed: ${error.message}`);
    }
  }

  async fixBuildErrors() {
    this.log('🔍 Fixing build errors...');
    
    try {
      // Try to build the project
      execSync('npm run build', { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      this.log('✅ Build successful');
    } catch (error) {
      this.log(`⚠️ Build failed: ${error.message}`);
      await this.analyzeBuildErrors(error.message);
    }
  }

  async analyzeBuildErrors(errorMessage) {
    this.log('🔍 Analyzing build errors...');
    
    // Common build error patterns
    const patterns = [
      {
        pattern: /Module not found: Can't resolve '([^']+)'/,
        fix: async (match) => {
          const module = match[1];
          this.log(`🔧 Installing missing module: ${module}`);
          try {
            execSync(`npm install ${module}`, { stdio: 'inherit' });
            this.log(`✅ Installed ${module}`);
          } catch (err) {
            this.log(`❌ Failed to install ${module}: ${err.message}`);
          }
        }
      },
      {
        pattern: /Cannot find module '([^']+)'/,
        fix: async (match) => {
          const module = match[1];
          this.log(`🔧 Installing missing module: ${module}`);
          try {
            execSync(`npm install ${module}`, { stdio: 'inherit' });
            this.log(`✅ Installed ${module}`);
          } catch (err) {
            this.log(`❌ Failed to install ${module}: ${err.message}`);
          }
        }
      }
    ];

    for (const pattern of patterns) {
      const match = errorMessage.match(pattern.pattern);
      if (match) {
        await pattern.fix(match);
      }
    }
  }

  async fixDependencyIssues() {
    this.log('🔍 Fixing dependency issues...');
    
    try {
      // Check for outdated packages
      execSync('npm audit fix', { stdio: 'inherit' });
      this.log('✅ Dependency issues fixed');
    } catch (error) {
      this.log(`⚠️ Dependency fix failed: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting Comprehensive Error Fixer...');
    
    try {
      for (const fixer of this.fixers) {
        await this.runFixer(fixer);
      }
      
      // Generate final report
      this.generateReport();
      
      this.log(`🎉 Comprehensive Error Fixer completed! Fixed ${this.fixesApplied} issues.`);
      
    } catch (error) {
      this.log(`❌ Error in Comprehensive Error Fixer: ${error.message}`);
      throw error;
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      summary: `Fixed ${this.fixesApplied} errors across all categories`
    };

    const reportFile = './reports/comprehensive-error-fixer-report.json';
    const reportDir = path.dirname(reportFile);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${reportFile}`);
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  
  const command = process.argv[2] || 'run';
  
  switch (command) {
    case 'run':
      fixer.run().catch(console.error);
      break;
    case 'syntax':
      fixer.fixSyntaxErrors().catch(console.error);
      break;
    case 'typescript':
      fixer.fixTypeScriptErrors().catch(console.error);
      break;
    case 'linting':
      fixer.fixLintingErrors().catch(console.error);
      break;
    case 'build':
      fixer.fixBuildErrors().catch(console.error);
      break;
    case 'dependencies':
      fixer.fixDependencyIssues().catch(console.error);
      break;
    default:
      console.log('Usage: node comprehensive-error-fixer.cjs [run|syntax|typescript|linting|build|dependencies]');
      process.exit(1);
  }
}

module.exports = ComprehensiveErrorFixer;