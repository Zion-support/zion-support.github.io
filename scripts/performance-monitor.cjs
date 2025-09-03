
const { execSync } = require('child_process');const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'performance-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runLighthouse() {
    console.log('🔍 Running Lighthouse audit...');
    try {
      const command = 'npx lighthouse http://localhost:3000 --output=html --output-path=./performance-reports/lighthouse-report.html --chrome-flags="--headless"';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ Lighthouse audit completed');
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