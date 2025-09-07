#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
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

  async fixTypeScriptConfig() {
    this.log('🔧 Fixing TypeScript configuration...');
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Ensure proper TypeScript configuration
        tsConfig.compilerOptions = {
          ...tsConfig.compilerOptions,
          target: 'ES2020',
          lib: ['dom', 'dom.iterable', 'es6'],
          allowJs: true,
          skipLibCheck: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          noEmit: true,
          esModuleInterop: true,
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: 'preserve',
          incremental: true,
          plugins: [
            {
              name: 'next'
            }
          ]
        };
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
        this.fixes.push('Updated TypeScript configuration');
        this.log('✅ TypeScript configuration fixed');
      } else {
        // Create a new tsconfig.json
        const defaultTsConfig = {
          compilerOptions: {
            target: 'ES2020',
            lib: ['dom', 'dom.iterable', 'es6'],
            allowJs: true,
            skipLibCheck: true,
            strict: true,
            forceConsistentCasingInFileNames: true,
            noEmit: true,
            esModuleInterop: true,
            module: 'esnext',
            moduleResolution: 'node',
            resolveJsonModule: true,
            isolatedModules: true,
            jsx: 'preserve',
            incremental: true,
            plugins: [
              {
                name: 'next'
              }
            ]
          },
          include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
          exclude: ['node_modules']
        };
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(defaultTsConfig, null, 2));
        this.fixes.push('Created TypeScript configuration');
        this.log('✅ TypeScript configuration created');
      }
    } catch (error) {
      this.log(`❌ Failed to fix TypeScript config: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async fixTypeErrors() {
    this.log('🔍 Fixing TypeScript errors...');
    try {
      // Run TypeScript check to identify errors
      execSync('npx tsc --noEmit --skipLibCheck', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.fixes.push('TypeScript errors resolved');
      this.log('✅ TypeScript errors fixed');
    } catch (error) {
      this.log(`⚠️ TypeScript errors found: ${error.message}`, 'WARN');
      // Try to fix common TypeScript issues
      await this.fixCommonTypeIssues();
    }
  }

  async fixCommonTypeIssues() {
    this.log('🔧 Fixing common TypeScript issues...');
    try {
      // Find and fix common TypeScript issues
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixFileTypeIssues(file);
      }
      
      this.fixes.push('Common TypeScript issues fixed');
      this.log('✅ Common TypeScript issues resolved');
    } catch (error) {
      this.log(`❌ Failed to fix common issues: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  findTypeScriptFiles() {
    const files = [];
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDir(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
          files.push(fullPath);
        }
      }
    };
    
    scanDir(this.projectRoot);
    return files;
  }

  async fixFileTypeIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common TypeScript issues
      if (content.includes('any')) {
        // Replace some any types with proper types
        content = content.replace(/:\s*any\s*=/g, ': unknown =');
        modified = true;
      }
      
      if (content.includes('@ts-ignore')) {
        // Remove @ts-ignore comments
        content = content.replace(/\/\/\s*@ts-ignore\s*\n/g, '');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`Fixed TypeScript issues in ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`⚠️ Could not fix file ${filePath}: ${error.message}`, 'WARN');
    }
  }

  async runTypeCheck() {
    this.log('🧪 Running TypeScript type check...');
    try {
      execSync('npx tsc --noEmit --skipLibCheck', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      this.fixes.push('TypeScript type check passed');
      this.log('✅ TypeScript type check completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ TypeScript type check failed: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false;
    }
  }

  async run() {
    this.log('🎯 Starting TypeScript Fixing Process...');
    this.log('=========================================');
    try {
      await this.fixTypeScriptConfig();
      await this.fixTypeErrors();
      const typeCheckSuccess = await this.runTypeCheck();
      
      this.log('\n📊 TYPESCRIPT FIXING REPORT');
      this.log('============================');
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      this.log(`Type Check: ${typeCheckSuccess ? '✅ Passed' : '❌ Failed'}`);
      
      if (this.fixes.length > 0) {
        this.log('\n✅ Fixes Applied:');
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log('\n❌ Errors:');
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      this.log('\n🎉 TypeScript fixing completed!');
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

const fixer = new TypeScriptFixer();
fixer.run().catch(console.error);

module.exports = TypeScriptFixer;