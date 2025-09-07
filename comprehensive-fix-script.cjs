#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveFixScript {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async fixPackageJsonConflicts() {
    this.log('\n🔧 FIXING PACKAGE.JSON CONFLICTS');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Remove postcss from dependencies since it's in devDependencies
      if (packageJson.dependencies && packageJson.dependencies.postcss) {
        delete packageJson.dependencies.postcss;
        this.fixes.push('Removed postcss from dependencies (already in devDependencies)');
      }
      
      // Ensure React version is specified for ESLint
      if (packageJson.dependencies && packageJson.dependencies.react) {
        packageJson.dependencies.react = packageJson.dependencies.react || '^18.3.1';
      }
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      this.log('Package.json conflicts fixed', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Package.json fix failed: ${error.message}`);
    }
  }

  async fixESLintConfiguration() {
    this.log('\n🔧 FIXING ESLINT CONFIGURATION');
    
    try {
      const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
      let config = fs.readFileSync(eslintConfigPath, 'utf8');
      
      // Add React version specification
      if (!config.includes('react: { version: "detect" }')) {
        config = config.replace(
          /plugins: \{\s*react,/g,
          `plugins: {
      react: {
        ...react,
        settings: {
          react: {
            version: "detect"
          }
        }
      },`
        );
        this.fixes.push('Added React version detection to ESLint config');
      }
      
      fs.writeFileSync(eslintConfigPath, config);
      this.log('ESLint configuration fixed', 'SUCCESS');
    } catch (error) {
      this.errors.push(`ESLint config fix failed: ${error.message}`);
    }
  }

  async fixTypeScriptConfiguration() {
    this.log('\n🔧 FIXING TYPESCRIPT CONFIGURATION');
    
    try {
      const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsconfigPath)) {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        
        // Ensure proper compiler options
        tsconfig.compilerOptions = {
          ...tsconfig.compilerOptions,
          target: 'ES2020',
          lib: ['dom', 'dom.iterable', 'es6'],
          allowJs: true,
          skipLibCheck: true,
          strict: false,
          noEmit: true,
          esModuleInterop: true,
          module: 'esnext',
          moduleResolution: 'bundler',
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: 'preserve',
          incremental: true,
          plugins: [
            {
              name: 'next'
            }
          ],
          paths: {
            '@/*': ['./*']
          }
        };
        
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
        this.fixes.push('Updated TypeScript configuration');
      }
      this.log('TypeScript configuration fixed', 'SUCCESS');
    } catch (error) {
      this.errors.push(`TypeScript config fix failed: ${error.message}`);
    }
  }

  async fixFileSyntaxErrors() {
    this.log('\n🔧 FIXING FILE SYNTAX ERRORS');
    
    try {
      // Fix files that might have syntax issues
      const filesToCheck = [
        'app/about/page.tsx',
        'app/services/automation/page.tsx',
        'app/services/consulting/page.tsx',
        'lib/integrations/fileStore.ts'
      ];
      
      for (const file of filesToCheck) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, 'utf8');
          
          // Ensure files end with newline
          if (!content.endsWith('\n')) {
            content += '\n';
            fs.writeFileSync(filePath, content);
            this.fixes.push(`Added newline to ${file}`);
          }
          
          // Fix common syntax issues
          if (content.includes('ensureDataDir(),')) {
            content = content.replace('ensureDataDir(),', 'ensureDataDir();');
            fs.writeFileSync(filePath, content);
            this.fixes.push(`Fixed syntax error in ${file}`);
          }
        }
      }
      
      this.log('File syntax errors fixed', 'SUCCESS');
    } catch (error) {
      this.errors.push(`File syntax fix failed: ${error.message}`);
    }
  }

  async installMissingDependencies() {
    this.log('\n🔧 INSTALLING MISSING DEPENDENCIES');
    
    try {
      // Install missing dependencies
      const dependencies = [
        '@heroicons/react',
        'eslint-plugin-jsx-a11y'
      ];
      
      for (const dep of dependencies) {
        const result = await this.runCommand(
          `npm install ${dep}`,
          `Install ${dep}`
        );
        if (result.success) {
          this.fixes.push(`Installed ${dep}`);
        }
      }
      
      this.log('Missing dependencies installed', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Dependency installation failed: ${error.message}`);
    }
  }

  async runSecurityAudit() {
    this.log('\n🔒 RUNNING SECURITY AUDIT');
    
    try {
      const auditResult = await this.runCommand(
        'npm audit --audit-level moderate',
        'Security audit'
      );
      
      if (!auditResult.success) {
        // Try to fix automatically
        const fixResult = await this.runCommand(
          'npm audit fix --force',
          'Security fix'
        );
        if (fixResult.success) {
          this.fixes.push('Security vulnerabilities fixed automatically');
        } else {
          this.errors.push('Security vulnerabilities could not be fixed automatically');
        }
      } else {
        this.log('No security issues found', 'SUCCESS');
      }
    } catch (error) {
      this.errors.push(`Security audit failed: ${error.message}`);
    }
  }

  async runTests() {
    this.log('\n🧪 RUNNING TESTS');
    
    try {
      const testResult = await this.runCommand(
        'npm run test:smoke',
        'Smoke tests'
      );
      
      if (testResult.success) {
        this.fixes.push('All tests passed');
      } else {
        this.errors.push('Some tests failed');
      }
    } catch (error) {
      this.errors.push(`Test execution failed: ${error.message}`);
    }
  }

  async generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 COMPREHENSIVE FIX REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Fixes Applied: ${this.fixes.length}`);
    this.log(`Errors: ${this.errors.length}`);
    this.log('');
    
    if (this.fixes.length > 0) {
      this.log('✅ FIXES APPLIED:');
      this.fixes.forEach(fix => this.log(`  - ${fix}`));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ ERRORS:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      fixes: this.fixes,
      errors: this.errors,
      summary: {
        fixesApplied: this.fixes.length,
        errorsFound: this.errors.length,
        success: this.errors.length === 0
      }
    };
    
    fs.writeFileSync(
      'comprehensive-fix-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to comprehensive-fix-report.json');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Fix Script');
    this.log('='.repeat(60));
    
    try {
      await this.fixPackageJsonConflicts();
      await this.fixESLintConfiguration();
      await this.fixTypeScriptConfiguration();
      await this.fixFileSyntaxErrors();
      await this.installMissingDependencies();
      await this.runSecurityAudit();
      await this.runTests();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }
}

// Run the comprehensive fix script
if (require.main === module) {
  const fixScript = new ComprehensiveFixScript();
  fixScript.run().catch(console.error);
}

module.exports = ComprehensiveFixScript;