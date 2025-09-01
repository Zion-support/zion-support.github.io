#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting enhanced error detector...');

// Get automation interval from environment variable (default: 5 minutes)
const ERROR_DETECTION_INTERVAL = parseInt(process.env.ERROR_DETECTION_INTERVAL) || 300000;

class EnhancedErrorDetector {
  constructor() {
    this.errorTypes = {
      typescript: [],
      linting: [],
      build: [],
      dependency: [],
      import: [],
      syntax: [],
      runtime: []
    };
    this.lastCheck = null;
    this.errorHistory = [];
  }

  async run() {
    try {
      console.log(`🔍 Running enhanced error detection at ${new Date().toISOString()}`);
      
      // Clear previous error types
      Object.keys(this.errorTypes).forEach(key => {
        this.errorTypes[key] = [];
      });

      // 1. Detect TypeScript errors
      await this.detectTypeScriptErrors();
      
      // 2. Detect linting errors
      await this.detectLintingErrors();
      
      // 3. Detect build errors
      await this.detectBuildErrors();
      
      // 4. Detect dependency errors
      await this.detectDependencyErrors();
      
      // 5. Detect import/export errors
      await this.detectImportExportErrors();
      
      // 6. Detect syntax errors
      await this.detectSyntaxErrors();
      
      // 7. Generate error report
      await this.generateErrorReport();
      
      // 8. Trigger appropriate fixers if errors found
      await this.triggerErrorFixers();
      
      this.lastCheck = new Date();
      console.log('✅ Enhanced error detection completed');
      
    } catch (error) {
      console.error('❌ Enhanced error detection failed:', error.message);
    }
  }

  async detectTypeScriptErrors() {
    try {
      console.log('🔍 Detecting TypeScript errors...');
      const result = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
      
      if (result.includes('error TS')) {
        const errors = result.split('\n').filter(line => line.includes('error TS'));
        this.errorTypes.typescript = errors.map(error => ({
          type: 'typescript',
          message: error.trim(),
          timestamp: new Date().toISOString()
        }));
        console.log(`⚠️  Found ${this.errorTypes.typescript.length} TypeScript errors`);
      } else {
        console.log('✅ No TypeScript errors detected');
      }
    } catch (error) {
      // TypeScript check failed, which means there are errors
      const errorOutput = error.stdout || error.stderr || error.message;
      const errors = errorOutput.split('\n').filter(line => line.includes('error TS'));
      this.errorTypes.typescript = errors.map(error => ({
        type: 'typescript',
        message: error.trim(),
        timestamp: new Date().toISOString()
      }));
      console.log(`⚠️  Found ${this.errorTypes.typescript.length} TypeScript errors`);
    }
  }

  async detectLintingErrors() {
    try {
      console.log('🔍 Detecting linting errors...');
      const result = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      
      if (result.includes('error')) {
        const errors = result.split('\n').filter(line => line.includes('error'));
        this.errorTypes.linting = errors.map(error => ({
          type: 'linting',
          message: error.trim(),
          timestamp: new Date().toISOString()
        }));
        console.log(`⚠️  Found ${this.errorTypes.linting.length} linting errors`);
      } else {
        console.log('✅ No linting errors detected');
      }
    } catch (error) {
      // Linting failed, which means there are errors
      const errorOutput = error.stdout || error.stderr || error.message;
      const errors = errorOutput.split('\n').filter(line => line.includes('error'));
      this.errorTypes.linting = errors.map(error => ({
        type: 'linting',
        message: error.trim(),
        timestamp: new Date().toISOString()
      }));
      console.log(`⚠️  Found ${this.errorTypes.linting.length} linting errors`);
    }
  }

  async detectBuildErrors() {
    try {
      console.log('🔍 Detecting build errors...');
      const result = execSync('npm run build 2>&1', { encoding: 'utf8' });
      
      if (result.includes('error') || result.includes('failed')) {
        const errors = result.split('\n').filter(line => 
          line.includes('error') || line.includes('failed') || line.includes('Error')
        );
        this.errorTypes.build = errors.map(error => ({
          type: 'build',
          message: error.trim(),
          timestamp: new Date().toISOString()
        }));
        console.log(`⚠️  Found ${this.errorTypes.build.length} build errors`);
      } else {
        console.log('✅ No build errors detected');
      }
    } catch (error) {
      // Build failed, which means there are errors
      const errorOutput = error.stdout || error.stderr || error.message;
      const errors = errorOutput.split('\n').filter(line => 
        line.includes('error') || line.includes('failed') || line.includes('Error')
      );
      this.errorTypes.build = errors.map(error => ({
        type: 'build',
        message: error.trim(),
        timestamp: new Date().toISOString()
      }));
      console.log(`⚠️  Found ${this.errorTypes.build.length} build errors`);
    }
  }

  async detectDependencyErrors() {
    try {
      console.log('🔍 Detecting dependency errors...');
      const result = execSync('npm audit 2>&1', { encoding: 'utf8' });
      
      if (result.includes('vulnerability') || result.includes('error')) {
        const errors = result.split('\n').filter(line => 
          line.includes('vulnerability') || line.includes('error') || line.includes('high severity')
        );
        this.errorTypes.dependency = errors.map(error => ({
          type: 'dependency',
          message: error.trim(),
          timestamp: new Date().toISOString()
        }));
        console.log(`⚠️  Found ${this.errorTypes.dependency.length} dependency issues`);
      } else {
        console.log('✅ No dependency errors detected');
      }
    } catch (error) {
      // Audit failed, which might indicate dependency issues
      const errorOutput = error.stdout || error.stderr || error.message;
      const errors = errorOutput.split('\n').filter(line => 
        line.includes('vulnerability') || line.includes('error') || line.includes('high severity')
      );
      this.errorTypes.dependency = errors.map(error => ({
        type: 'dependency',
        message: error.trim(),
        timestamp: new Date().toISOString()
      }));
      console.log(`⚠️  Found ${this.errorTypes.dependency.length} dependency issues`);
    }
  }

  async detectImportExportErrors() {
    try {
      console.log('🔍 Detecting import/export errors...');
      
      // Scan TypeScript/JavaScript files for import/export issues
      const srcDir = path.join(process.cwd(), 'src');
      const files = this.getAllFiles(srcDir, ['.ts', '.tsx', '.js', '.jsx']);
      
      const importErrors = [];
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common import/export issues
          if (content.includes('import') || content.includes('export')) {
            // Check for missing semicolons after imports
            const importLines = content.split('\n').filter(line => line.includes('import'));
            importLines.forEach((line, index) => {
              if (line.includes('import') && !line.trim().endsWith(';') && !line.trim().endsWith('}')) {
                importErrors.push({
                  file: file.replace(process.cwd(), ''),
                  line: line.trim(),
                  issue: 'Missing semicolon after import'
                });
              }
            });
            
            // Check for unused imports
            const lines = content.split('\n');
            lines.forEach((line, lineNumber) => {
              if (line.includes('import') && line.includes('from')) {
                const importMatch = line.match(/import\s+{?\s*([^}]+)\s*}?\s+from/);
                if (importMatch) {
                  const imports = importMatch[1].split(',').map(imp => imp.trim());
                  imports.forEach(imp => {
                    if (imp && !content.includes(imp.split(' as ')[0].trim())) {
                      importErrors.push({
                        file: file.replace(process.cwd(), ''),
                        line: lineNumber + 1,
                        issue: `Unused import: ${imp}`
                      });
                    }
                  });
                }
              }
            });
          }
        } catch (fileError) {
          // File read error, might be a syntax issue
          importErrors.push({
            file: file.replace(process.cwd(), ''),
            line: 1,
            issue: `File read error: ${fileError.message}`
          });
        }
      }
      
      this.errorTypes.import = importErrors.map(error => ({
        type: 'import',
        message: `${error.file}:${error.line} - ${error.issue}`,
        timestamp: new Date().toISOString()
      }));
      
      if (importErrors.length > 0) {
        console.log(`⚠️  Found ${importErrors.length} import/export issues`);
      } else {
        console.log('✅ No import/export errors detected');
      }
      
    } catch (error) {
      console.log(`⚠️  Import/export detection failed: ${error.message}`);
    }
  }

  async detectSyntaxErrors() {
    try {
      console.log('🔍 Detecting syntax errors...');
      
      const srcDir = path.join(process.cwd(), 'src');
      const files = this.getAllFiles(srcDir, ['.ts', '.tsx', '.js', '.jsx']);
      
      const syntaxErrors = [];
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common syntax issues
          const lines = content.split('\n');
          lines.forEach((line, lineNumber) => {
            // Check for missing semicolons
            if (line.trim() && !line.trim().endsWith(';') && !line.trim().endsWith('{') && 
                !line.trim().endsWith('}') && !line.trim().endsWith('(') && !line.trim().endsWith(')') &&
                !line.includes('import') && !line.includes('export') && !line.includes('function') &&
                !line.includes('const') && !line.includes('let') && !line.includes('var') &&
                !line.includes('if') && !line.includes('for') && !line.includes('while') &&
                !line.includes('return') && !line.includes('throw') && !line.includes('break') &&
                !line.includes('continue') && !line.includes('//') && !line.includes('/*')) {
              
              // This might be a missing semicolon
              syntaxErrors.push({
                file: file.replace(process.cwd(), ''),
                line: lineNumber + 1,
                issue: 'Potential missing semicolon'
              });
            }
            
            // Check for unmatched brackets
            const openBrackets = (line.match(/\{/g) || []).length;
            const closeBrackets = (line.match(/\}/g) || []).length;
            if (openBrackets !== closeBrackets) {
              syntaxErrors.push({
                file: file.replace(process.cwd(), ''),
                line: lineNumber + 1,
                issue: 'Unmatched brackets'
              });
            }
          });
          
        } catch (fileError) {
          syntaxErrors.push({
            file: file.replace(process.cwd(), ''),
            line: 1,
            issue: `File syntax error: ${fileError.message}`
          });
        }
      }
      
      this.errorTypes.syntax = syntaxErrors.map(error => ({
        type: 'syntax',
        message: `${error.file}:${error.line} - ${error.issue}`,
        timestamp: new Date().toISOString()
      }));
      
      if (syntaxErrors.length > 0) {
        console.log(`⚠️  Found ${syntaxErrors.length} syntax issues`);
      } else {
        console.log('✅ No syntax errors detected');
      }
      
    } catch (error) {
      console.log(`⚠️  Syntax detection failed: ${error.message}`);
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    function traverse(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dir);
    return files;
  }

  async generateErrorReport() {
    const totalErrors = Object.values(this.errorTypes).reduce((sum, errors) => sum + errors.length, 0);
    
    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: totalErrors,
      errorTypes: this.errorTypes,
      summary: `Detected ${totalErrors} total errors across ${Object.keys(this.errorTypes).length} categories`
    };
    
    const reportPath = path.join(process.cwd(), 'enhanced-error-detector-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Error report generated: ${totalErrors} total errors detected`);
    
    // Add to error history
    this.errorHistory.push({
      timestamp: new Date().toISOString(),
      totalErrors: totalErrors,
      errorTypes: Object.keys(this.errorTypes).reduce((acc, key) => {
        acc[key] = this.errorTypes[key].length;
        return acc;
      }, {})
    });
    
    // Keep only last 100 entries
    if (this.errorHistory.length > 100) {
      this.errorHistory = this.errorHistory.slice(-100);
    }
  }

  async triggerErrorFixers() {
    const totalErrors = Object.values(this.errorTypes).reduce((sum, errors) => sum + errors.length, 0);
    
    if (totalErrors > 0) {
      console.log(`🔧 Triggering error fixers for ${totalErrors} detected errors...`);
      
      // Trigger specific fixers based on error types
      if (this.errorTypes.typescript.length > 0) {
        console.log('🔧 Triggering TypeScript error fixer...');
        this.triggerFixer('intelligent-typescript-fixer');
      }
      
      if (this.errorTypes.linting.length > 0) {
        console.log('🔧 Triggering linting error fixer...');
        this.triggerFixer('smart-linting-fixer');
      }
      
      if (this.errorTypes.build.length > 0) {
        console.log('🔧 Triggering build error fixer...');
        this.triggerFixer('build-error-auto-fixer');
      }
      
      if (this.errorTypes.dependency.length > 0) {
        console.log('🔧 Triggering dependency error fixer...');
        this.triggerFixer('dependency-error-resolver');
      }
      
      if (this.errorTypes.import.length > 0) {
        console.log('🔧 Triggering import/export fixer...');
        this.triggerFixer('auto-import-export-fixer');
      }
      
      if (this.errorTypes.syntax.length > 0) {
        console.log('🔧 Triggering syntax fixer...');
        this.triggerFixer('jsx-tsx-syntax-fixer');
      }
    } else {
      console.log('✅ No errors detected, no fixers needed');
    }
  }

  triggerFixer(fixerName) {
    try {
      // Send a signal to the PM2 process to restart it, which will trigger the fixer
      execSync(`pm2 restart ${fixerName}`, { stdio: 'pipe' });
      console.log(`✅ Triggered ${fixerName}`);
    } catch (error) {
      console.log(`⚠️  Failed to trigger ${fixerName}: ${error.message}`);
    }
  }
}

// Main execution
async function main() {
  const detector = new EnhancedErrorDetector();
  
  // Run initial detection
  await detector.run();
  
  // Set up continuous monitoring
  setInterval(async () => {
    await detector.run();
  }, ERROR_DETECTION_INTERVAL);
  
  console.log(`🔍 Enhanced error detector running with ${ERROR_DETECTION_INTERVAL / 1000}s intervals`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🔍 Enhanced error detector shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🔍 Enhanced error detector shutting down...');
  process.exit(0);
});

// Start the detector
main().catch(error => {
  console.error('❌ Enhanced error detector failed to start:', error.message);
  process.exit(1);
});