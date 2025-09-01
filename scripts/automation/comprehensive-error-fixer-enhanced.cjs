#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'automation/reports');
    this.backupDir = path.join(this.projectRoot, 'automation/backups');
    this.errors = [];
    this.fixes = [];
    this.startTime = Date.now();
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir, this.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, `comprehensive-error-fixer-${Date.now()}.log`);
    this.reportFile = path.join(this.reportsDir, `error-fix-report-${Date.now()}.json`);
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async run() {
    this.log('Starting Comprehensive Error Fixer...', 'INFO');
    
    try {
      // Phase 1: Detect all errors
      await this.detectErrors();
      
      // Phase 2: Fix errors systematically
      await this.fixErrors();
      
      // Phase 3: Verify fixes
      await this.verifyFixes();
      
      // Phase 4: Generate report
      await this.generateReport();
      
      this.log('Comprehensive Error Fixer completed successfully', 'SUCCESS');
    } catch (error) {
      this.log(`Error in comprehensive error fixer: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async detectErrors() {
    this.log('Phase 1: Detecting errors...', 'INFO');
    
    // Detect TypeScript errors
    await this.detectTypeScriptErrors();
    
    // Detect ESLint errors
    await this.detectESLintErrors();
    
    // Detect build errors
    await this.detectBuildErrors();
    
    // Detect dependency issues
    await this.detectDependencyIssues();
    
    // Detect file structure issues
    await this.detectFileStructureIssues();
    
    this.log(`Detected ${this.errors.length} total errors`, 'INFO');
  }

  async detectTypeScriptErrors() {
    this.log('Detecting TypeScript errors...', 'INFO');
    
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // If we get here, no TypeScript errors
      this.log('No TypeScript errors detected', 'SUCCESS');
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        if (line.includes('error TS')) {
          this.errors.push({
            type: 'typescript',
            message: line,
            severity: 'error',
            file: this.extractFilePath(line),
            line: this.extractLineNumber(line)
          });
        }
      });
      
      this.log(`Detected ${this.errors.filter(e => e.type === 'typescript').length} TypeScript errors`, 'WARN');
    }
  }

  async detectESLintErrors() {
    this.log('Detecting ESLint errors...', 'INFO');
    
    try {
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('No ESLint errors detected', 'SUCCESS');
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        if (line.includes('error') || line.includes('warning')) {
          this.errors.push({
            type: 'eslint',
            message: line,
            severity: line.includes('error') ? 'error' : 'warning',
            file: this.extractFilePath(line),
            line: this.extractLineNumber(line)
          });
        }
      });
      
      this.log(`Detected ${this.errors.filter(e => e.type === 'eslint').length} ESLint errors`, 'WARN');
    }
  }

  async detectBuildErrors() {
    this.log('Detecting build errors...', 'INFO');
    
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('No build errors detected', 'SUCCESS');
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        if (line.includes('error') || line.includes('Failed to compile')) {
          this.errors.push({
            type: 'build',
            message: line,
            severity: 'error',
            file: this.extractFilePath(line),
            line: this.extractLineNumber(line)
          });
        }
      });
      
      this.log(`Detected ${this.errors.filter(e => e.type === 'build').length} build errors`, 'WARN');
    }
  }

  async detectDependencyIssues() {
    this.log('Detecting dependency issues...', 'INFO');
    
    try {
      const result = execSync('npm audit --audit-level=moderate', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('No critical dependency issues detected', 'SUCCESS');
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        if (line.includes('vulnerability') || line.includes('deprecated')) {
          this.errors.push({
            type: 'dependency',
            message: line,
            severity: 'warning',
            file: 'package.json',
            line: null
          });
        }
      });
      
      this.log(`Detected ${this.errors.filter(e => e.type === 'dependency').length} dependency issues`, 'WARN');
    }
  }

  async detectFileStructureIssues() {
    this.log('Detecting file structure issues...', 'INFO');
    
    // Check for missing files
    const criticalFiles = [
      'package.json',
      'tsconfig.json',
      '.eslintrc.js',
      'next.config.js'
    ];
    
    criticalFiles.forEach(file => {
      if (!fs.existsSync(path.join(this.projectRoot, file))) {
        this.errors.push({
          type: 'file_structure',
          message: `Missing critical file: ${file}`,
          severity: 'error',
          file: file,
          line: null
        });
      }
    });
    
    // Check for duplicate files
    const duplicatePatterns = [
      { pattern: /\.js\.jsx$/, description: 'Duplicate .js.jsx files' },
      { pattern: /\.ts\.tsx$/, description: 'Duplicate .ts.tsx files' }
    ];
    
    this.walkDirectory(this.projectRoot, (filePath) => {
      duplicatePatterns.forEach(({ pattern, description }) => {
        if (pattern.test(filePath)) {
          this.errors.push({
            type: 'file_structure',
            message: `${description}: ${filePath}`,
            severity: 'warning',
            file: filePath,
            line: null
          });
        }
      });
    });
    
    this.log(`Detected ${this.errors.filter(e => e.type === 'file_structure').length} file structure issues`, 'WARN');
  }

  async fixErrors() {
    this.log('Phase 2: Fixing errors...', 'INFO');
    
    // Fix ESLint configuration
    await this.fixESLintConfig();
    
    // Fix TypeScript errors
    await this.fixTypeScriptErrors();
    
    // Fix build errors
    await this.fixBuildErrors();
    
    // Fix dependency issues
    await this.fixDependencyIssues();
    
    // Fix file structure issues
    await this.fixFileStructureIssues();
    
    this.log(`Applied ${this.fixes.length} fixes`, 'INFO');
  }

  async fixESLintConfig() {
    this.log('Fixing ESLint configuration...', 'INFO');
    
    const eslintConfigPath = path.join(this.projectRoot, '.eslintrc.js');
    
    if (fs.existsSync(eslintConfigPath)) {
      try {
        let config = fs.readFileSync(eslintConfigPath, 'utf8');
        
        // Fix module.exports syntax if needed
        if (config.includes('module.exports') && !config.includes('module is not defined')) {
          this.log('ESLint config looks correct', 'INFO');
          return;
        }
        
        // Create a proper ESLint config
        const newConfig = `module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};`;
        
        this.backupFile(eslintConfigPath);
        fs.writeFileSync(eslintConfigPath, newConfig);
        
        this.fixes.push({
          type: 'eslint_config',
          description: 'Fixed ESLint configuration',
          file: '.eslintrc.js'
        });
        
        this.log('ESLint configuration fixed', 'SUCCESS');
      } catch (error) {
        this.log(`Error fixing ESLint config: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...', 'INFO');
    
    const tsErrors = this.errors.filter(e => e.type === 'typescript');
    
    for (const error of tsErrors) {
      if (error.file && error.line) {
        await this.fixTypeScriptError(error);
      }
    }
  }

  async fixTypeScriptError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${error.file}`, 'WARN');
        return;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Common TypeScript fixes
      if (error.message.includes('Property') && error.message.includes('does not exist')) {
        // Fix missing property errors
        const propertyMatch = error.message.match(/Property '([^']+)' does not exist/);
        if (propertyMatch) {
          const propertyName = propertyMatch[1];
          const lineIndex = parseInt(error.line) - 1;
          
          if (lines[lineIndex]) {
            // Try to fix by adding proper import or type annotation
            if (lines[lineIndex].includes('import')) {
              // Fix import statement
              const importMatch = lines[lineIndex].match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
              if (importMatch) {
                const imports = importMatch[1].split(',').map(i => i.trim());
                if (!imports.includes(propertyName)) {
                  imports.push(propertyName);
                  lines[lineIndex] = lines[lineIndex].replace(
                    importMatch[0],
                    `import { ${imports.join(', ')} } from '${importMatch[2]}'`
                  );
                }
              }
            }
          }
        }
      }
      
      // Write back the fixed content
      const newContent = lines.join('\n');
      if (newContent !== content) {
        this.backupFile(filePath);
        fs.writeFileSync(filePath, newContent);
        
        this.fixes.push({
          type: 'typescript',
          description: `Fixed TypeScript error: ${error.message}`,
          file: error.file,
          line: error.line
        });
        
        this.log(`Fixed TypeScript error in ${error.file}:${error.line}`, 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error fixing TypeScript error: ${error.message}`, 'ERROR');
    }
  }

  async fixBuildErrors() {
    this.log('Fixing build errors...', 'INFO');
    
    const buildErrors = this.errors.filter(e => e.type === 'build');
    
    for (const error of buildErrors) {
      if (error.message.includes('ServicesPage')) {
        await this.fixServicesPageError();
      }
    }
  }

  async fixServicesPageError() {
    this.log('Fixing ServicesPage import error...', 'INFO');
    
    const appFilePath = path.join(this.projectRoot, 'src/App.tsx');
    
    if (fs.existsSync(appFilePath)) {
      try {
        let content = fs.readFileSync(appFilePath, 'utf8');
        
        // Fix the ServicesPage import
        const servicesPageImport = /const ServicesPage = lazy\(\(\) => import\('\.\/pages\/ServicesPage'\)\.then\(module => \(\{ default: module\.ServicesPage \}\)\);/;
        
        if (servicesPageImport.test(content)) {
          // Check if ServicesPage exists
          const servicesPagePath = path.join(this.projectRoot, 'src/pages/ServicesPage.tsx');
          const servicesPageJsPath = path.join(this.projectRoot, 'src/pages/ServicesPage.jsx');
          
          if (fs.existsSync(servicesPagePath)) {
            // Fix to use default export
            content = content.replace(
              servicesPageImport,
              "const ServicesPage = lazy(() => import('./pages/ServicesPage'));"
            );
          } else if (fs.existsSync(servicesPageJsPath)) {
            // Fix to use .jsx file
            content = content.replace(
              servicesPageImport,
              "const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));"
            );
          } else {
            // Remove the import if file doesn't exist
            content = content.replace(servicesPageImport, '');
          }
          
          this.backupFile(appFilePath);
          fs.writeFileSync(appFilePath, content);
          
          this.fixes.push({
            type: 'build',
            description: 'Fixed ServicesPage import error',
            file: 'src/App.tsx'
          });
          
          this.log('ServicesPage import error fixed', 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error fixing ServicesPage error: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...', 'INFO');
    
    try {
      // Update dependencies
      execSync('npm update', { cwd: this.projectRoot, stdio: 'pipe' });
      
      // Fix security vulnerabilities
      execSync('npm audit fix', { cwd: this.projectRoot, stdio: 'pipe' });
      
      this.fixes.push({
        type: 'dependency',
        description: 'Updated dependencies and fixed security issues',
        file: 'package.json'
      });
      
      this.log('Dependency issues fixed', 'SUCCESS');
    } catch (error) {
      this.log(`Error fixing dependency issues: ${error.message}`, 'ERROR');
    }
  }

  async fixFileStructureIssues() {
    this.log('Fixing file structure issues...', 'INFO');
    
    const fileStructureErrors = this.errors.filter(e => e.type === 'file_structure');
    
    for (const error of fileStructureErrors) {
      if (error.message.includes('Missing critical file')) {
        await this.createMissingFile(error.file);
      }
    }
  }

  async createMissingFile(fileName) {
    this.log(`Creating missing file: ${fileName}`, 'INFO');
    
    const filePath = path.join(this.projectRoot, fileName);
    
    try {
      switch (fileName) {
        case 'tsconfig.json':
          if (!fs.existsSync(filePath)) {
            const tsConfig = {
              "compilerOptions": {
                "target": "es5",
                "lib": ["dom", "dom.iterable", "es6"],
                "allowJs": true,
                "skipLibCheck": true,
                "strict": true,
                "forceConsistentCasingInFileNames": true,
                "noEmit": true,
                "esModuleInterop": true,
                "module": "esnext",
                "moduleResolution": "node",
                "resolveJsonModule": true,
                "isolatedModules": true,
                "jsx": "preserve",
                "incremental": true,
                "plugins": [
                  {
                    "name": "next"
                  }
                ],
                "paths": {
                  "@/*": ["./src/*"]
                }
              },
              "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
              "exclude": ["node_modules"]
            };
            
            fs.writeFileSync(filePath, JSON.stringify(tsConfig, null, 2));
            
            this.fixes.push({
              type: 'file_structure',
              description: `Created missing ${fileName}`,
              file: fileName
            });
          }
          break;
          
        case 'next.config.js':
          if (!fs.existsSync(filePath)) {
            const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig`;
            
            fs.writeFileSync(filePath, nextConfig);
            
            this.fixes.push({
              type: 'file_structure',
              description: `Created missing ${fileName}`,
              file: fileName
            });
          }
          break;
      }
      
      this.log(`Created missing file: ${fileName}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error creating missing file ${fileName}: ${error.message}`, 'ERROR');
    }
  }

  async verifyFixes() {
    this.log('Phase 3: Verifying fixes...', 'INFO');
    
    // Re-run error detection
    const originalErrorCount = this.errors.length;
    this.errors = [];
    
    await this.detectErrors();
    
    const remainingErrors = this.errors.length;
    const fixedErrors = originalErrorCount - remainingErrors;
    
    this.log(`Fixed ${fixedErrors} errors, ${remainingErrors} remaining`, 'INFO');
    
    if (remainingErrors === 0) {
      this.log('All errors have been fixed!', 'SUCCESS');
    } else {
      this.log(`${remainingErrors} errors remain after fixes`, 'WARN');
    }
  }

  async generateReport() {
    this.log('Phase 4: Generating report...', 'INFO');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      totalErrors: this.errors.length,
      totalFixes: this.fixes.length,
      errors: this.errors,
      fixes: this.fixes,
      summary: {
        typescript: this.errors.filter(e => e.type === 'typescript').length,
        eslint: this.errors.filter(e => e.type === 'eslint').length,
        build: this.errors.filter(e => e.type === 'build').length,
        dependency: this.errors.filter(e => e.type === 'dependency').length,
        file_structure: this.errors.filter(e => e.type === 'file_structure').length
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${this.reportFile}`, 'SUCCESS');
    
    // Also update the global report
    const globalReportPath = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
    fs.writeFileSync(globalReportPath, JSON.stringify({
      lastRun: new Date().toISOString(),
      errorsFixed: this.fixes.length,
      errorsRemaining: this.errors.length,
      status: this.errors.length === 0 ? 'success' : 'partial'
    }, null, 2));
  }

  backupFile(filePath) {
    const backupPath = path.join(this.backupDir, path.basename(filePath) + '.backup.' + Date.now());
    fs.copyFileSync(filePath, backupPath);
  }

  extractFilePath(line) {
    const match = line.match(/([^:]+):\d+:/);
    return match ? match[1] : null;
  }

  extractLineNumber(line) {
    const match = line.match(/:(\d+):/);
    return match ? match[1] : null;
  }

  walkDirectory(dir, callback) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        this.walkDirectory(filePath, callback);
      } else if (stat.isFile()) {
        callback(filePath);
      }
    });
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run().catch(error => {
    console.error('Error fixer failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveErrorFixer;