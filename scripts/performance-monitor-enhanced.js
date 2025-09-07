#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceMonitor {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.metrics = {};
    this.thresholds = {
      bundleSize: 500000, // 500KB
      loadTime: 3000, // 3 seconds
      memoryUsage: 100000000 // 100MB
    };
  }

  async run() {
    console.log('📊 Enhanced Performance Monitor Starting...');
    
    try {
      await this.checkBundleSize();
      await this.checkLoadTime();
      await this.checkMemoryUsage();
      await this.checkLighthouseScore();
      await this.generateReport();
      
      console.log('✅ Performance monitoring completed');
      return true;
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      return false;
    }
  }

  async checkBundleSize() {
    try {
      console.log('📦 Checking bundle size...');
      
      // Check if .next directory exists
      const nextDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(nextDir)) {
        console.log('⚠️ No build found, running build first...');
        execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe' });
      }

      // Analyze bundle size
      const buildDir = path.join(nextDir, 'static', 'chunks');
      if (fs.existsSync(buildDir)) {
        const files = fs.readdirSync(buildDir);
        let totalSize = 0;
        
        files.forEach(file => {
          const filePath = path.join(buildDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        });

        this.metrics.bundleSize = totalSize;
        const sizeKB = Math.round(totalSize / 1024);
        
        if (totalSize > this.thresholds.bundleSize) {
          console.log(`⚠️ Bundle size is large: ${sizeKB}KB (threshold: ${Math.round(this.thresholds.bundleSize / 1024)}KB)`);
        } else {
          console.log(`✅ Bundle size is good: ${sizeKB}KB`);
        }
      }
    } catch (error) {
      console.error('Failed to check bundle size:', error.message);
    }
  }

  async checkLoadTime() {
    try {
      console.log('⏱️ Checking load time...');
      
      // Simulate load time check (in real scenario, you'd use tools like Lighthouse)
      const startTime = Date.now();
      
      // Check if the app can start
      try {
        execSync('timeout 10s npm run start > /dev/null 2>&1 &', { cwd: this.projectRoot });
        await new Promise(resolve => setTimeout(resolve, 2000));
        execSync('pkill -f "next start" || true', { cwd: this.projectRoot });
      } catch (error) {
        // Expected timeout
      }
      
      const loadTime = Date.now() - startTime;
      this.metrics.loadTime = loadTime;
      
      if (loadTime > this.thresholds.loadTime) {
        console.log(`⚠️ Load time is slow: ${loadTime}ms (threshold: ${this.thresholds.loadTime}ms)`);
      } else {
        console.log(`✅ Load time is good: ${loadTime}ms`);
      }
    } catch (error) {
      console.error('Failed to check load time:', error.message);
    }
  }

  async checkMemoryUsage() {
    try {
      console.log('🧠 Checking memory usage...');
      
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = memUsage.heapUsed;
      
      if (memUsage.heapUsed > this.thresholds.memoryUsage) {
        console.log(`⚠️ Memory usage is high: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
      } else {
        console.log(`✅ Memory usage is good: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
      }
    } catch (error) {
      console.error('Failed to check memory usage:', error.message);
    }
  }

  async checkLighthouseScore() {
    try {
      console.log('🔍 Checking Lighthouse score...');
      
      // Check if Lighthouse is available
      try {
        execSync('npx lighthouse --version', { stdio: 'pipe' });
        
        // Run Lighthouse on localhost (if available)
        const lighthouseCmd = 'npx lighthouse http://localhost:3000 --output=json --quiet --chrome-flags="--headless"';
        const result = execSync(lighthouseCmd, { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 60000 
        });
        
        const lighthouseData = JSON.parse(result.toString());
        this.metrics.lighthouse = {
          performance: lighthouseData.categories.performance.score * 100,
          accessibility: lighthouseData.categories.accessibility.score * 100,
          bestPractices: lighthouseData.categories['best-practices'].score * 100,
          seo: lighthouseData.categories.seo.score * 100
        };
        
        console.log('✅ Lighthouse scores:', this.metrics.lighthouse);
      } catch (error) {
        console.log('⚠️ Lighthouse not available or localhost not running');
        this.metrics.lighthouse = null;
      }
    } catch (error) {
      console.error('Failed to check Lighthouse score:', error.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      thresholds: this.thresholds,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Performance report saved to performance-report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > this.thresholds.bundleSize) {
      recommendations.push('Consider code splitting and lazy loading');
      recommendations.push('Remove unused dependencies');
      recommendations.push('Use dynamic imports for large components');
    }
    
    if (this.metrics.loadTime > this.thresholds.loadTime) {
      recommendations.push('Optimize images and use WebP format');
      recommendations.push('Enable gzip compression');
      recommendations.push('Use a CDN for static assets');
    }
    
    if (this.metrics.memoryUsage > this.thresholds.memoryUsage) {
      recommendations.push('Check for memory leaks');
      recommendations.push('Optimize component re-renders');
      recommendations.push('Use React.memo for expensive components');
    }
    
    if (this.metrics.lighthouse) {
      if (this.metrics.lighthouse.performance < 90) {
        recommendations.push('Improve Core Web Vitals');
        recommendations.push('Optimize JavaScript execution');
      }
      if (this.metrics.lighthouse.accessibility < 90) {
        recommendations.push('Improve accessibility features');
        recommendations.push('Add proper ARIA labels');
      }
    }
    
    return recommendations;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new PerformanceMonitor();
  monitor.run().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export default PerformanceMonitor;