#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.logsDir = path.join(__dirname, '..', 'logs');
    this.logFile = path.join(this.logsDir, 'performance-optimizer.log');
    this.ensureDirectory(this.logsDir);
  }

  ensureDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}\n`;
    process.stdout.write(`${message}\n`);
    fs.appendFileSync(this.logFile, line);
  }

  optimizePerformance() {
    this.log('Starting performance optimization...');

    const bundleSize = this.analyzeBundleSize();
    const imageOptimization = this.analyzeImages();
    const dependencies = this.analyzeDependencies();

    const report = {
      timestamp: new Date().toISOString(),
      bundleSize,
      imageOptimization,
      dependencies,
      recommendations: this.generateRecommendations(bundleSize, imageOptimization, dependencies),
    };

    this.saveReport(report);
    this.log('Performance optimization completed');
    return report;
  }

  analyzeBundleSize() {
    const distPath = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distPath)) {
      return { error: 'Build directory not found. Run npm run build first.' };
    }
    const files = this.listFiles(distPath);
    let totalBytes = 0;
    for (const file of files) {
      totalBytes += fs.statSync(file).size;
    }
    const gzippedEstimate = Math.floor(totalBytes * 0.3);
    return {
      totalBytes,
      totalSize: this.formatBytes(totalBytes),
      gzippedEstimate,
      gzippedSize: this.formatBytes(gzippedEstimate),
      fileCount: files.length,
      recommendations: this.getBundleRecommendations(totalBytes, files.length),
    };
  }

  analyzeImages() {
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      return { error: 'Public directory not found' };
    }
    const imageFiles = this.listFiles(publicDir).filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'].includes(ext);
    });
    let totalBytes = 0;
    let optimizedCount = 0;
    for (const file of imageFiles) {
      totalBytes += fs.statSync(file).size;
      if (file.endsWith('.webp') || file.endsWith('.avif')) optimizedCount += 1;
    }
    return {
      totalImages: imageFiles.length,
      optimizedImages: optimizedCount,
      totalSize: this.formatBytes(totalBytes),
      recommendations: this.getImageRecommendations(imageFiles),
    };
  }

  analyzeDependencies() {
    try {
      const pkgPath = path.join(__dirname, '..', 'package.json');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const deps = Object.keys(pkg.dependencies || {});
      const devDeps = Object.keys(pkg.devDependencies || {});
      return {
        totalDependencies: deps.length + devDeps.length,
        productionDependencies: deps.length,
        devDependencies: devDeps.length,
        potentialUnused: this.findPotentiallyUnused(deps),
      };
    } catch (e) {
      return { error: e.message };
    }
  }

  listFiles(dir) {
    const stack = [dir];
    const files = [];
    while (stack.length) {
      const current = stack.pop();
      const entries = fs.readdirSync(current);
      for (const entry of entries) {
        const full = path.join(current, entry);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) stack.push(full);
        else files.push(full);
      }
    }
    return files;
  }

  formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return '0 Bytes';
    const units = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = (bytes / Math.pow(1024, i)).toFixed(2);
    return `${value} ${units[i]}`;
  }

  getBundleRecommendations(totalBytes, fileCount) {
    const recs = [];
    if (totalBytes > 1 * 1024 * 1024) recs.push('Consider code splitting to reduce initial bundle size');
    if (fileCount > 50) recs.push('Consider consolidating small files');
    recs.push('Enable gzip/brotli compression on your server');
    recs.push('Use a CDN for static assets');
    return recs;
  }

  getImageRecommendations(imageFiles) {
    const recs = [];
    const unoptimized = imageFiles.filter((f) => !f.endsWith('.webp') && !f.endsWith('.avif'));
    if (unoptimized.length > 0) recs.push(`Convert ${unoptimized.length} images to WebP/AVIF`);
    recs.push('Use responsive images with srcset');
    recs.push('Implement lazy loading for images');
    return recs;
  }

  findPotentiallyUnused(deps) {
    const common = ['lodash', 'moment', 'jquery'];
    return common.filter((d) => deps.includes(d));
  }

  generateRecommendations(bundleSize, imageOptimization, dependencies) {
    const recs = [];
    if (!bundleSize.error && bundleSize.totalBytes > 2 * 1024 * 1024) recs.push('Bundle is large; enable tree-shaking and split by routes');
    if (!imageOptimization.error && imageOptimization.optimizedImages < imageOptimization.totalImages) recs.push('Convert heavy images to modern formats');
    if (!dependencies.error && dependencies.totalDependencies > 50) recs.push('Review dependencies and remove unused packages');
    recs.push('Use React.lazy and Suspense for route-based code splitting');
    return recs;
  }

  saveReport(report) {
    const outPath = path.join(this.logsDir, 'performance-report.json');
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
    this.log(`Performance report saved to: ${outPath}`);
  }
}

try {
  const optimizer = new PerformanceOptimizer();
  const report = optimizer.optimizePerformance();
  process.stdout.write('\nSummary\n');
  process.stdout.write(`Bundle: ${report.bundleSize.totalSize || 'N/A'} (gz ~ ${report.bundleSize.gzippedSize || 'N/A'})\n`);
  process.stdout.write(`Images: ${report.imageOptimization.totalImages || 0}, optimized: ${report.imageOptimization.optimizedImages || 0}\n`);
  process.stdout.write(`Dependencies: ${report.dependencies.totalDependencies || 0}\n`);
} catch (e) {
  console.error('Error running performance optimizer:', e.message);
  process.exit(1);
}
