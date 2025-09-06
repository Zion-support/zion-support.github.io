#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting performance optimization...');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = [];
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');
    try {
      const buildResult = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
      console.log('✅ Build completed successfully');
      
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = fs.readdirSync(distPath);
        const totalSize = files.reduce((total, file) => {
          const filePath = path.join(distPath, file);
          const stats = fs.statSync(filePath);
          return total + stats.size;
        }, 0);
        
        console.log(`📊 Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
        this.results.push({
          type: 'bundle-size',
          size: `${(totalSize / 1024 / 1024).toFixed(2)} MB`,
          status: totalSize > 5 * 1024 * 1024 ? 'warning' : 'good'
        });
      }
    } catch (error) {
      console.log('❌ Build failed:', error.message);
    }
  }

  async checkDependencies() {
    console.log('📦 Checking dependencies...');
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = Object.keys(packageJson.dependencies || {});
      console.log(`📊 Production dependencies: ${deps.length}`);
      this.results.push({
        type: 'dependencies',
        count: deps.length,
        status: deps.length > 50 ? 'warning' : 'good'
      });
    } catch (error) {
      console.log('❌ Could not analyze dependencies');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results
    };
    
    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    await this.analyzeBundleSize();
    await this.checkDependencies();
    await this.generateReport();
    console.log('🎉 Performance optimization completed!');
  }
}

if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;