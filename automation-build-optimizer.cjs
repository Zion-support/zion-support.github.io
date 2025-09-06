#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Build Optimizer for Next.js applications
 * Optimizes build process and fixes common build issues
 */
class BuildOptimizer {
  constructor() {
    this.optimizations = [];
    this.errors = [];
  }

  async runCommand(command, description) {
    try {
      console.log(`🔨 Running: ${description}`);
      const output = execSync(command, { 
        cwd: process.cwd(), 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      console.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      console.log(`❌ ${description} failed: ${error.message}`);
      this.errors.push({ command, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async optimizeBuild() {
    console.log('🔨 Build Optimizer Started...');
    
    // Clean previous builds
    await this.runCommand('npm run clean', 'Clean previous builds');
    
    // Install dependencies
    await this.runCommand('npm install', 'Install dependencies');
    
    // Run linting
    await this.runCommand('npm run lint:fix', 'Fix linting issues');
    
    // Run type checking
    await this.runCommand('npm run type-check', 'Type checking');
    
    // Try to build
    const buildResult = await this.runCommand('npm run build', 'Build application');
    
    if (buildResult.success) {
      this.optimizations.push('Build completed successfully');
    } else {
      // Try to fix common build issues
      await this.fixBuildIssues();
    }
    
    // Generate build report
    this.generateReport();
    
    console.log('🔨 Build optimization completed');
    return {
      success: buildResult.success,
      optimizations: this.optimizations,
      errors: this.errors
    };
  }

  async fixBuildIssues() {
    console.log('🔧 Attempting to fix build issues...');
    
    // Run syntax fixer
    await this.runCommand('node automation-syntax-fixer.cjs', 'Fix syntax issues');
    
    // Try building again
    const rebuildResult = await this.runCommand('npm run build', 'Rebuild after fixes');
    
    if (rebuildResult.success) {
      this.optimizations.push('Build issues fixed and rebuild successful');
    } else {
      this.optimizations.push('Build issues could not be automatically fixed');
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      errors: this.errors,
      summary: {
        totalOptimizations: this.optimizations.length,
        totalErrors: this.errors.length,
        success: this.errors.length === 0
      }
    };

    fs.writeFileSync('build-optimization-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Build optimization report generated: build-optimization-report.json');
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.optimizeBuild().then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

module.exports = BuildOptimizer;