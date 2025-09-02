#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SmartDependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.packageJsonPath = path.join(this.projectRoot, 'package.json');
  }

  async analyzeDependencies() {
    console.log('🔍 Analyzing dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      console.log(`📊 Total dependencies: ${Object.keys(dependencies).length}`);
      
      // Check for outdated packages
      console.log('🔄 Checking for outdated packages...');
      try {
        execSync('npm outdated --json', { stdio: 'pipe' });
      } catch (error) {
        // npm outdated returns non-zero exit code when packages are outdated
        const outdated = JSON.parse(error.stdout.toString());
        console.log(`⚠️  ${Object.keys(outdated).length} packages are outdated`);
      }
      
      // Generate dependency report
      this.generateDependencyReport(dependencies);
      
      console.log('✅ Dependency analysis completed');
    } catch (error) {
      console.error('❌ Dependency analysis failed:', error.message);
    }
  }

  async updateDependencies() {
    console.log('🔄 Updating dependencies...');
    
    try {
      // Update to latest compatible versions
      execSync('npm update', { stdio: 'inherit' });
      
      // Audit for security vulnerabilities
      console.log('🔒 Running security audit...');
      execSync('npm audit', { stdio: 'inherit' });
      
      console.log('✅ Dependencies updated successfully');
    } catch (error) {
      console.error('❌ Dependency update failed:', error.message);
    }
  }

  generateDependencyReport(dependencies) {
    const report = {
      timestamp: new Date().toISOString(),
      totalDependencies: Object.keys(dependencies).length,
      dependencies: dependencies,
      recommendations: [
        'Regularly update dependencies',
        'Use exact versions for critical packages',
        'Monitor security vulnerabilities',
        'Remove unused dependencies'
      ]
    };

    const reportPath = path.join(this.projectRoot, 'dependency-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('📄 Dependency report generated');
  }

  async run() {
    await this.analyzeDependencies();
    await this.updateDependencies();
  }
}

const manager = new SmartDependencyManager();
manager.run();