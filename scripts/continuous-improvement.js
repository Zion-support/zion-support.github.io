#!/usr/bin/env node

/**
 * Continuous Improvement Script
 * Replaces GitHub Actions continuous-improvement workflow
 * Analyzes code quality and suggests improvements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Continuous Improvement Started');

class ContinuousImprovement {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.improvements = [];
    this.issues = [];
  }

  async analyze() {
    try {
      console.log('🔍 Analyzing project for improvement opportunities...');
      
      // Analyze package.json
      await this.analyzePackageJson();
      
      // Analyze TypeScript configuration
      await this.analyzeTypeScriptConfig();
      
      // Analyze build configuration
      await this.analyzeBuildConfig();
      
      // Analyze code structure
      await this.analyzeCodeStructure();
      
      // Generate improvement report
      await this.generateReport();
      
      console.log('✅ Continuous improvement analysis completed');
      
    } catch (error) {
      console.error('❌ Error during analysis:', error.message);
    }
  }

  async analyzePackageJson() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        // Check for outdated dependencies
        if (packageJson.dependencies) {
          const deps = Object.keys(packageJson.dependencies);
          if (deps.length > 20) {
            this.improvements.push('Consider reducing dependencies to improve build times');
          }
        }
        
        // Check for missing scripts
        const requiredScripts = ['build', 'dev', 'test', 'lint'];
        const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);
        
        if (missingScripts.length > 0) {
          this.improvements.push(`Add missing scripts: ${missingScripts.join(', ')}`);
        }
        
        // Check for security
        if (packageJson.scripts && packageJson.scripts.prepare) {
          this.improvements.push('Consider using postinstall instead of prepare for better security');
        }
        
      }
    } catch (error) {
      this.issues.push(`Could not analyze package.json: ${error.message}`);
    }
  }

  async analyzeTypeScriptConfig() {
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Check for strict mode
        if (!tsConfig.compilerOptions?.strict) {
          this.improvements.push('Enable strict mode in TypeScript for better type safety');
        }
        
        // Check for noImplicitAny
        if (tsConfig.compilerOptions?.noImplicitAny === false) {
          this.improvements.push('Enable noImplicitAny for better type safety');
        }
        
        // Check for unused imports
        if (!tsConfig.compilerOptions?.noUnusedLocals) {
          this.improvements.push('Enable noUnusedLocals to catch unused variables');
        }
        
      } else {
        this.improvements.push('Consider adding TypeScript configuration');
      }
    } catch (error) {
      this.issues.push(`Could not analyze TypeScript config: ${error.message}`);
    }
  }

  async analyzeBuildConfig() {
    try {
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Check for build optimizations
        if (!viteConfig.includes('build.rollupOptions')) {
          this.improvements.push('Consider adding rollup options for better build optimization');
        }
        
        if (!viteConfig.includes('build.chunkSizeWarningLimit')) {
          this.improvements.push('Consider setting chunk size warning limits');
        }
        
      }
    } catch (error) {
      this.issues.push(`Could not analyze build config: ${error.message}`);
    }
  }

  async analyzeCodeStructure() {
    try {
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        const items = fs.readdirSync(srcDir);
        
        // Check for proper directory structure
        const expectedDirs = ['components', 'utils', 'types', 'hooks'];
        const missingDirs = expectedDirs.filter(dir => !items.includes(dir));
        
        if (missingDirs.length > 0) {
          this.improvements.push(`Consider organizing code into directories: ${missingDirs.join(', ')}`);
        }
        
        // Check for index files
        if (!fs.existsSync(path.join(srcDir, 'index.ts')) && !fs.existsSync(path.join(srcDir, 'index.js'))) {
          this.improvements.push('Consider adding index files for better module organization');
        }
        
      }
    } catch (error) {
      this.issues.push(`Could not analyze code structure: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      issues: this.issues,
      summary: {
        totalImprovements: this.improvements.length,
        totalIssues: this.issues.length
      }
    };
    
    // Save report to file
    const reportPath = path.join(this.projectRoot, 'logs', 'continuous-improvement-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Report saved to: ${reportPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save report:', error.message);
    }
    
    // Display summary
    console.log('\n📋 Improvement Summary:');
    console.log('─'.repeat(50));
    
    if (this.improvements.length > 0) {
      console.log(`💡 ${this.improvements.length} improvement suggestions:`);
      this.improvements.forEach((improvement, index) => {
        console.log(`   ${index + 1}. ${improvement}`);
      });
    } else {
      console.log('🎉 No improvement suggestions found!');
    }
    
    if (this.issues.length > 0) {
      console.log(`⚠️  ${this.issues.length} issues encountered:`);
      this.issues.forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
    }
    
    console.log('─'.repeat(50));
  }
}

// Run the continuous improvement analysis
const ci = new ContinuousImprovement();
ci.analyze().then(() => {
  console.log('🚀 Continuous Improvement Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Continuous Improvement Failed:', error);
  process.exit(1);
});