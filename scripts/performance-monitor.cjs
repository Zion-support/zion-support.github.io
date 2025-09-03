
const { execSync } = require('child_process');const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
<<<<<<< HEAD
    this.projectRoot = process.cwd();
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString();
};
=======
    this.reportsDir = path.join(process.cwd(), 'performance-reports');
    this.ensureDirectories();
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runLighthouse() {
    console.log('🔍 Running Lighthouse audit...');
    try {
<<<<<<< HEAD
      const { execSync } = require('child_process');
      execSync('NODE_OPTIONS="--max-old-space-size=8192" npm run build', {
        cwd: this.projectRoot,
        stdio: 'inherit';
});
      
      this.metrics.buildTime = Date.now() - startTime;
      this.metrics.memoryUsage = process.memoryUsage();
      
      // Check bundle size
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        this.metrics.bundleSize = this.getDirectorySize(buildDir);
      }
      
      this.saveMetrics();
      console.log('✅ Performance monitoring completed');
=======
      const command = 'npx lighthouse http://localhost:3000 --output=html --output-path=./performance-reports/lighthouse-report.html --chrome-flags="--headless"';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ Lighthouse audit completed');
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
    } catch (error) {
      console.log('❌ Lighthouse audit failed:', error.message);
    }
  }

  async runBundleAnalysis() {
    console.log('📦 Running bundle analysis...');
    try {
      const command = 'ANALYZE=true npm run build';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ Bundle analysis completed');
    } catch (error) {
      console.log('❌ Bundle analysis failed:', error.message);
    }
  }
}

const monitor = new PerformanceMonitor();
monitor.runLighthouse();
monitor.runBundleAnalysis();