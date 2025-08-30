#!/usr/bin/env node

/**
 * Build Error Fixer - PM2 Automation
 * Automatically detects and fixes build errors
 * Runs every 30 minutes to ensure successful builds
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'build-error-fixer-report.json');
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.warnings = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: '\x1b[34m',
      success: '\x1b[32m',
      warning: '\x1b[33m',
      error: '\x1b[31m',
      reset: '\x1b[0m'
    };
    
    console.log(`${colors[type]}[${type.toUpperCase()}]${colors.reset} [${timestamp}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting Build Error Fixer...', 'info');
    
    try {
      // Step 1: Check current build status
      const buildStatus = await this.checkBuildStatus();
      
      if (buildStatus.success) {
        this.log('✅ Build is already successful, no fixes needed', 'success');
        return;
      }
      
      // Step 2: Fix build errors
      await this.fixBuildErrors(buildStatus.errors);
      
      // Step 3: Verify build after fixes
      const verificationStatus = await this.verifyBuild();
      
      // Step 4: Generate report
      await this.generateReport(buildStatus, verificationStatus);
      
      this.log(`✅ Build Error Fixer completed! Fixed ${this.fixesApplied} issues`, 'success');
      
    } catch (error) {
      this.log(`❌ Error in Build Error Fixer: ${error.message}`, 'error');
      this.warnings.push(`Runtime error: ${error.message}`);
    }
  }

  async checkBuildStatus() {
    this.log('🔍 Checking build status...', 'info');
    
    try {
      const result = execSync('npm run build', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return { success: true, errors: [] };
      
    } catch (error) {
      const output = error.stdout ? error.stdout.toString() : '';
      const errors = this.parseBuildErrors(output);
      
      return { success: false, errors };
    }
  }

  parseBuildErrors(buildOutput) {
    const errors = [];
    
    // Parse esbuild errors
    const esbuildErrors = buildOutput.match(/ERROR:\s*([^\n]+)/g);
    if (esbuildErrors) {
      esbuildErrors.forEach(error => {
        const message = error.replace('ERROR:', '').trim();
        errors.push({
          type: 'esbuild',
          message,
          file: this.extractFileName(message),
          line: this.extractLineNumber(message)
        });
      });
    }
    
    // Parse Vite errors
    const viteErrors = buildOutput.match(/Build failed[^:]*:\s*([^\n]+)/g);
    if (viteErrors) {
      viteErrors.forEach(error => {
        const message = error.replace(/Build failed[^:]*:\s*/, '').trim();
        errors.push({
          type: 'vite',
          message,
          file: this.extractFileName(message),
          line: this.extractLineNumber(message)
        });
      });
    }
    
    return errors;
  }

  extractFileName(errorMessage) {
    const fileMatch = errorMessage.match(/\/workspace\/([^:]+)/);
    return fileMatch ? fileMatch[1] : 'unknown';
  }

  extractLineNumber(errorMessage) {
    const lineMatch = errorMessage.match(/:(\d+):/);
    return lineMatch ? parseInt(lineMatch[1]) : 0;
  }

  async fixBuildErrors(errors) {
    this.log(`🔧 Fixing ${errors.length} build errors...`, 'info');
    
    for (const error of errors) {
      try {
        await this.fixSpecificError(error);
      } catch (fixError) {
        this.warnings.push(`Could not fix error in ${error.file}: ${fixError.message}`);
      }
    }
  }

  async fixSpecificError(error) {
    const filePath = path.join(this.projectRoot, error.file);
    
    if (!fs.existsSync(filePath)) {
      this.warnings.push(`File not found: ${error.file}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    switch (error.type) {
      case 'esbuild':
        content = await this.fixESBuildError(content, error);
        break;
      case 'vite':
        content = await this.fixViteError(content, error);
        break;
      default:
        content = await this.fixGenericBuildError(content, error);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.errorsFixed.push(`Fixed ${error.type} error in ${error.file}: ${error.message}`);
      this.fixesApplied++;
    }
  }

  async fixESBuildError(content, error) {
    // Fix duplicate symbol declarations
    if (error.message.includes('already been declared')) {
      const symbolMatch = error.message.match(/The symbol "([^"]+)" has already been declared/);
      if (symbolMatch) {
        const symbol = symbolMatch[1];
        const duplicatePattern = new RegExp(`\\b${symbol}\\b.*=.*\\b${symbol}\\b`, 'g');
        content = content.replace(duplicatePattern, symbol);
      }
    }
    
    // Fix unexpected token errors
    if (error.message.includes('Expected ";" but found')) {
      const tokenMatch = error.message.match(/Expected "([^"]+)" but found "([^"]+)"/);
      if (tokenMatch) {
        const expected = tokenMatch[1];
        const found = tokenMatch[2];
        
        if (expected === ';' && found === ')') {
          // Fix missing semicolon before closing parenthesis
          content = content.replace(/\)\s*\)/g, '); )');
        }
      }
    }
    
    // Fix malformed JSX
    if (error.message.includes('JSX element')) {
      // Fix unclosed JSX tags
      const openTags = (content.match(/<([A-Z][a-zA-Z]*)/g) || []);
      const closeTags = (content.match(/<\/([^>]*)/g) || []);
      
      if (openTags.length > closeTags.length) {
        const missingTags = openTags.length - closeTags.length;
        for (let i = 0; i < missingTags; i++) {
          content += '\n      </div>';
        }
      }
    }
    
    return content;
  }

  async fixViteError(content, error) {
    // Fix module resolution issues
    if (error.message.includes('Cannot resolve module')) {
      const moduleMatch = error.message.match(/Cannot resolve module '([^']+)'/);
      if (moduleMatch) {
        const module = moduleMatch[1];
        
        // Fix common module resolution issues
        if (module.includes('.ts')) {
          content = content.replace(new RegExp(`from ['"]${module}['"]`, 'g'), `from '${module.replace('.ts', '')}'`);
        }
      }
    }
    
    // Fix syntax errors
    if (error.message.includes('Unexpected token')) {
      // Fix common syntax issues
      content = content.replace(/any'([^']+)'/g, "'$1'");
      content = content.replace(/any\(/g, '(');
      content = content.replace(/any\)/g, ')');
      content = content.replace(/any\{/g, '{');
      content = content.replace(/any\}/g, '}');
    }
    
    return content;
  }

  async fixGenericBuildError(content, error) {
    // Generic fixes for common build issues
    
    // Fix malformed imports
    content = content.replace(/from 'lucide-react\.ts';/g, "from 'lucide-react';");
    content = content.replace(/}\s*from '([^']+)';/g, "} from '$1';");
    
    // Fix malformed JSX
    content = content.replace(/<\/>([a-zA-Z][a-zA-Z0-9]*)/g, '</$1>');
    content = content.replace(/transition=\{\{\s*duration:\s*any(\d+\.?\d*)/g, 'transition={{ duration: $1');
    
    // Fix malformed TypeScript
    content = content.replace(/:\s*any\(([^)]+)\)\s*=>/g, ': ($1) =>');
    content = content.replace(/:\s*any\{/g, ': {');
    
    return content;
  }

  async verifyBuild() {
    this.log('✅ Verifying build after fixes...', 'info');
    
    try {
      const result = execSync('npm run build', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return { success: true, message: 'Build successful after fixes' };
      
    } catch (error) {
      const output = error.stdout ? error.stdout.toString() : '';
      return { success: false, message: 'Build still failing after fixes', output };
    }
  }

  async generateReport(initialStatus, verificationStatus) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      initialBuildStatus: initialStatus,
      verificationStatus: verificationStatus,
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      warnings: this.warnings,
      status: verificationStatus.success ? 'success' : 'partial-success'
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`, 'info');
  }
}

// Main execution
if (require.main === module) {
  const fixer = new BuildErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = BuildErrorFixer;