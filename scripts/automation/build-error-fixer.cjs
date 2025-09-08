#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class BuildErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout?.toString() || error.stderr?.toString() || ''
      };
    }
  }

  async fixBuildErrors() {
    this.log('Starting build error fixing...');
    
    // Fix configuration issues
    await this.fixConfigurationIssues();
    
    // Fix dependency issues
    await this.fixDependencyIssues();
    
    // Fix specific build errors
    await this.fixSpecificBuildErrors();
    
    // Fix import and export issues
    await this.fixImportExportIssues();
  }

  async fixConfigurationIssues() {
    this.log('Fixing configuration issues...');
    
    // Fix package.json
    await this.fixPackageJson();
    
    // Fix ESLint config
    await this.fixESLintConfig();
    
    // Fix TypeScript config
    await this.fixTypeScriptConfig();
    
    // Fix Vite config
    await this.fixViteConfig();
  }

  async fixPackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        let modified = false;

        // Ensure all required dependencies are present
        const requiredDevDeps = [
          'globals',
          '@types/node',
          'typescript',
          'eslint',
          '@typescript-eslint/eslint-plugin',
          '@typescript-eslint/parser'
        ];

        for (const dep of requiredDevDeps) {
          if (!packageJson.devDependencies[dep]) {
            this.log(`Adding missing dev dependency: ${dep}`);
            await this.runCommand(`npm install --save-dev ${dep}`);
            modified = true;
          }
        }

        // Ensure all required dependencies are present
        const requiredDeps = [
          'react',
          'react-dom',
          'vite',
          '@vitejs/plugin-react'
        ];

        for (const dep of requiredDeps) {
          if (!packageJson.dependencies[dep]) {
            this.log(`Adding missing dependency: ${dep}`);
            await this.runCommand(`npm install ${dep}`);
            modified = true;
          }
        }

        if (modified) {
          this.log('Fixed package.json dependencies');
          this.errorsFixed++;
        }
      } catch (error) {
        this.log(`Error fixing package.json: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixESLintConfig() {
    const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (fs.existsSync(eslintConfigPath)) {
      try {
        let content = fs.readFileSync(eslintConfigPath, 'utf8');
        let modified = false;

        // Ensure proper module syntax
        if (content.includes('module.exports =')) {
          content = content.replace('module.exports =', 'export default');
          modified = true;
        }

        // Ensure globals import is present
        if (!content.includes("import globals from 'globals'")) {
          content = content.replace(
            "import js from '@eslint/js';",
            "import js from '@eslint/js';\nimport globals from 'globals';"
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(eslintConfigPath, content);
          this.log('Fixed ESLint configuration');
          this.errorsFixed++;
        }
      } catch (error) {
        this.log(`Error fixing ESLint config: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixTypeScriptConfig() {
    const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
    if (fs.existsSync(tsConfigPath)) {
      try {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        let modified = false;

        // Ensure proper TypeScript configuration
        if (!tsConfig.compilerOptions) {
          tsConfig.compilerOptions = {};
          modified = true;
        }

        const requiredOptions = {
          target: 'ES2020',
          lib: ['ES2020', 'DOM', 'DOM.Iterable'],
          allowJs: true,
          skipLibCheck: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          noFallthroughCasesInSwitch: true,
          module: 'ESNext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: 'react-jsx'
        };

        for (const [key, value] of Object.entries(requiredOptions)) {
          if (tsConfig.compilerOptions[key] !== value) {
            tsConfig.compilerOptions[key] = value;
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
          this.log('Fixed TypeScript configuration');
          this.errorsFixed++;
        }
      } catch (error) {
        this.log(`Error fixing TypeScript config: ${error.message}`, 'ERROR');
      }
  }
}

  async fixViteConfig() {
    const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
    if (fs.existsSync(viteConfigPath)) {
      try {
        let content = fs.readFileSync(viteConfigPath, 'utf8');
        let modified = false;

        // Ensure proper Vite configuration
        if (!content.includes('@vitejs/plugin-react')) {
          content = content.replace(
            "import { defineConfig } from 'vite'",
            "import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'"
          );
          modified = true;
        }

        if (!content.includes('plugins: [react()]')) {
          content = content.replace(
            'export default defineConfig({',
            'export default defineConfig({\n  plugins: [react()],'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(viteConfigPath, content);
          this.log('Fixed Vite configuration');
          this.errorsFixed++;
        }
      } catch (error) {
        this.log(`Error fixing Vite config: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Clean install dependencies
      this.log('Cleaning and reinstalling dependencies...');
      await this.runCommand('rm -rf node_modules package-lock.json');
      await this.runCommand('npm install');
      
      this.log('Dependencies reinstalled successfully');
      this.errorsFixed++;
    } catch (error) {
      this.log(`Error fixing dependencies: ${error.message}`, 'ERROR');
    }
  }

  async fixSpecificBuildErrors() {
    this.log('Fixing specific build errors...');
    
    // Fix the specific ChatAssistant.tsx error
    const chatAssistantPath = path.join(this.projectRoot, 'src/components/ChatAssistant.tsx');
    if (fs.existsSync(chatAssistantPath)) {
      try {
        let content = fs.readFileSync(chatAssistantPath, 'utf8');
        let modified = false;

        // Fix the specific syntax error
        if (content.includes('(window as ).webkitSpeechRecognition')) {
          content = content.replace(
            '(window as ).webkitSpeechRecognition',
            '(window as any).webkitSpeechRecognition'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(chatAssistantPath, content);
          this.log('Fixed ChatAssistant.tsx build error');
          this.errorsFixed++;
        }
      } catch (error) {
        this.log(`Error fixing ChatAssistant.tsx: ${error.message}`, 'ERROR');
      }
    }

    // Fix other common build errors
    await this.fixJSXSyntaxErrors();
  }

  async fixJSXSyntaxErrors() {
    this.log('Fixing JSX syntax errors...');
    
    const patterns = ['src/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'];
    
    for (const pattern of patterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          await this.fixJSXInFile(filePath);
        }
      }
    }
  }

  async fixJSXInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix JSX syntax errors
      if (content.includes('<>') || content.includes('</>')) {
        content = content.replace(/<>/g, '<div>');
        content = content.replace(/<\/>/g, '</div>');
        modified = true;
      }

      // Fix missing React imports
      if (content.includes('React') && !content.includes("import React") && !content.includes("import * as React")) {
        content = "import React from 'react';\n" + content;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.errorsFixed++;
        this.log(`Fixed JSX issues in: ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error processing file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    const patterns = ['src/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'];
    
    for (const pattern of patterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          await this.fixImportExportInFile(filePath);
        }
      }
    }
  }

  async fixImportExportInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix relative imports
      content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\//g, "from '../../../");
      content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\//g, "from '../../");
      content = content.replace(/from\s+['"]\.\.\/\.\.\//g, "from '../");
      
      // Fix missing file extensions
      content = content.replace(/from\s+['"]([^'"]+)['"]/g, (match, importPath) => {
        if (importPath.startsWith('.') && !importPath.includes('.')) {
          return `from '${importPath}.tsx'`;
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.errorsFixed++;
        this.log(`Fixed imports in: ${filePath}`);
      }
    } catch (error) {
      this.log(`Error fixing imports in ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async testBuild() {
    this.log('Testing build...');
    
    try {
      const result = await this.runCommand('npm run build');
      if (result.success) {
        this.log('Build test passed successfully');
        return true;
      } else {
        this.log(`Build test failed: ${result.error}`, 'WARN');
        return false;
      }
    } catch (error) {
      this.log(`Build test error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      filesProcessed: this.filesProcessed,
      errorsFixed: this.errorsFixed,
      success: this.errorsFixed > 0,
      summary: `Processed ${this.filesProcessed} files and fixed ${this.errorsFixed} build errors in ${duration}ms`
    };

    const reportPath = path.join(this.reportsDir, 'build-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    this.log(report.summary);
    
    return report;
  }

  async run() {
    this.log('Starting Build Error Fixer...');
    
    try {
      await this.fixBuildErrors();
      
      // Test the build
      const buildSuccess = await this.testBuild();
      
      const report = await this.generateReport();
      report.buildSuccess = buildSuccess;
      
      this.log('Build Error Fixer completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Build error fixing failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const fixer = new BuildErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = BuildErrorFixer;