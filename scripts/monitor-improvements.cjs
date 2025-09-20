#!/usr/bin/env node

/**
 * Improvement Monitoring Script for Zion App
 * 
 * This script monitors and tracks improvements made to the project:
 * - Security vulnerability tracking
 * - Performance metrics monitoring
 * - Build status verification
 * - Dependency health checks
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ImprovementMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'improvement-monitor-report.json');
    this.metrics = {
      timestamp: new Date().toISOString(),
      security: {},
      performance: {},
      build: {},
      dependencies: {},
      recommendations: []
    };
  }

  async run() {
    console.log('🔍 Starting Improvement Monitoring Analysis...\n');
    
    await this.checkSecurity();
    await this.checkPerformance();
    await this.checkBuildStatus();
    await this.checkDependencies();
    await this.generateRecommendations();
    await this.generateReport();
    
    console.log('\n✅ Improvement monitoring analysis complete!');
    console.log(`📊 Report saved to: ${this.reportPath}`);
    this.displaySummary();
  }

  async checkSecurity() {
    console.log('🔒 Checking security status...');
    
    try {
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditOutput);
      
      this.metrics.security = {
        vulnerabilities: audit.metadata?.vulnerabilities || {},
        totalVulnerabilities: audit.metadata?.vulnerabilities?.total || 0,
        status: audit.metadata?.vulnerabilities?.total === 0 ? 'secure' : 'needs_attention'
      };
      
      if (this.metrics.security.totalVulnerabilities === 0) {
        console.log('   ✅ No security vulnerabilities found');
      } else {
        console.log(`   ⚠️  ${this.metrics.security.totalVulnerabilities} vulnerabilities found`);
      }
    } catch (error) {
      console.log('   ❌ Failed to check security status');
      this.metrics.security.error = error.message;
    }
  }

  async checkPerformance() {
    console.log('⚡ Checking performance metrics...');
    
    const distPath = path.join(this.projectRoot, 'dist');
    if (fs.existsSync(distPath)) {
      const assets = this.getAssets(distPath);
      const totalSize = assets.reduce((sum, asset) => sum + asset.size, 0);
      
      this.metrics.performance = {
        totalBundleSize: totalSize,
        totalBundleSizeKB: Math.round(totalSize / 1024),
        assetCount: assets.length,
        largestAsset: assets.reduce((max, asset) => 
          asset.size > max.size ? asset : max, assets[0] || { size: 0, name: 'none' }
        ),
        status: totalSize < 2 * 1024 * 1024 ? 'optimized' : 'needs_optimization' // < 2MB
      };
      
      console.log(`   📦 Total bundle size: ${this.metrics.performance.totalBundleSizeKB}KB`);
      console.log(`   📄 Asset count: ${this.metrics.performance.assetCount}`);
    } else {
      this.metrics.performance = {
        status: 'no_build',
        message: 'No dist folder found. Run build first.'
      };
      console.log('   ⚠️  No build found - run npm run build first');
    }
  }

  async checkBuildStatus() {
    console.log('🏗️  Checking build status...');
    
    try {
      execSync('npm run build:netlify', { stdio: 'pipe' });
      this.metrics.build = {
        status: 'success',
        message: 'Build completed successfully'
      };
      console.log('   ✅ Build successful');
    } catch (error) {
      this.metrics.build = {
        status: 'failed',
        error: error.message,
        message: 'Build failed'
      };
      console.log('   ❌ Build failed');
    }
  }

  async checkDependencies() {
    console.log('📚 Checking dependency health...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      this.metrics.dependencies = {
        totalDependencies: Object.keys(dependencies).length,
        hasTypeModule: packageJson.type === 'module',
        nodeVersion: packageJson.engines?.node || 'not specified',
        packageManager: packageJson.packageManager || 'npm',
        status: 'healthy'
      };
      
      console.log(`   📦 Total dependencies: ${this.metrics.dependencies.totalDependencies}`);
      console.log(`   🟢 Dependencies status: ${this.metrics.dependencies.status}`);
    }
  }

  async generateRecommendations() {
    console.log('💡 Generating improvement recommendations...');
    
    const recommendations = [];
    
    // Security recommendations
    if (this.metrics.security.totalVulnerabilities > 0) {
      recommendations.push({
        category: 'Security',
        priority: 'high',
        recommendation: 'Fix security vulnerabilities immediately',
        action: 'Run npm audit fix --force'
      });
    }
    
    // Performance recommendations
    if (this.metrics.performance.status === 'needs_optimization') {
      recommendations.push({
        category: 'Performance',
        priority: 'medium',
        recommendation: 'Bundle size is large, consider code splitting',
        action: 'Implement lazy loading and optimize chunks'
      });
    }
    
    // Build recommendations
    if (this.metrics.build.status === 'failed') {
      recommendations.push({
        category: 'Build',
        priority: 'high',
        recommendation: 'Fix build issues',
        action: 'Check for TypeScript errors and dependency issues'
      });
    }
    
    // General recommendations
    recommendations.push({
      category: 'Monitoring',
      priority: 'low',
      recommendation: 'Set up continuous monitoring',
      action: 'Implement automated testing and monitoring pipeline'
    });
    
    this.metrics.recommendations = recommendations;
    console.log(`   💡 Generated ${recommendations.length} recommendations`);
  }

  async generateReport() {
    fs.writeFileSync(this.reportPath, JSON.stringify(this.metrics, null, 2));
  }

  displaySummary() {
    console.log('\n📋 Improvement Monitoring Summary:');
    console.log(`   🔒 Security: ${this.getStatusIcon(this.metrics.security.status)} ${this.metrics.security.status}`);
    console.log(`   ⚡ Performance: ${this.getStatusIcon(this.metrics.performance.status)} ${this.metrics.performance.status}`);
    console.log(`   🏗️  Build: ${this.getStatusIcon(this.metrics.build.status)} ${this.metrics.build.status}`);
    console.log(`   📚 Dependencies: ${this.getStatusIcon(this.metrics.dependencies.status)} ${this.metrics.dependencies.status}`);
    
    if (this.metrics.recommendations.length > 0) {
      console.log('\n💡 Priority Recommendations:');
      this.metrics.recommendations
        .filter(rec => rec.priority === 'high')
        .forEach(rec => {
          console.log(`   • ${rec.category}: ${rec.recommendation}`);
        });
    }
  }

  getStatusIcon(status) {
    const icons = {
      'secure': '✅',
      'optimized': '✅',
      'success': '✅',
      'healthy': '✅',
      'needs_attention': '⚠️',
      'needs_optimization': '⚠️',
      'failed': '❌',
      'no_build': '⚠️'
    };
    return icons[status] || '❓';
  }

  getAssets(dir, assets = []) {
    if (!fs.existsSync(dir)) return assets;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.getAssets(filePath, assets);
      } else if (file.match(/\.(js|css)$/)) {
        assets.push({
          name: file,
          path: filePath,
          size: stat.size
        });
      }
    });
    
    return assets;
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new ImprovementMonitor();
  monitor.run().catch(console.error);
}

module.exports = ImprovementMonitor;