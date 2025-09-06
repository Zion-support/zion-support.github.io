<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;#!/usr/bin/env node
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const fs = // // require('fs');
const path = // // require('path');
class PerformanceMonitor {
  constructor() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.metrics = {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
    this.metrics = {
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    this.metrics = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }
const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  memoryUsage: false;
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
    this.metrics = {
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      "bundleSize": 0,
      "memoryUsage": 0,
=======




#!/usr/bin/env node;
const fs = // // require('fs');'
const path = // // require('path');
class PerformanceMonitor {}
  constructor() {}
      "bundleSize": 0,"
      "memoryUsage": 0,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "timestamp": new Date().toISOString()
    }}
const performanceChecks = {"
  "buildSize": false,"
  "bundleAnalysis": false,"
  "lighthouseScore": false,"
  "loadTime": false,"
  "memoryUsage": false};
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  memoryUsage: false
}
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
=======
  memoryUsage: false;
};
    this.metrics = {
      "bundleSize": 0,
      "memoryUsage": 0,
      "timestamp": new Date().toISOString()
    }}
const performanceChecks = {
  "buildSize": false,
  "bundleAnalysis": false,
  "lighthouseScore": false,
  "loadTime": false,
  "memoryUsage": false};
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
try {
  // Check build size
  if (fs.existsSync('.next')) {
    const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim();
=======
try {}
  // Check build size'
  if (fs.existsSync('.next')) {'"
    const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim();"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB)'
    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {'
      console.log('✅ Build size is within acceptable limits');
    } else {'
      console.log('⚠️  Build size is large, consider optimization');
    }
  }
<<<<<<< HEAD
try {
  // Bundle analysis
  console.log('📋 Analyzing bundle...');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log('✅ Bundle analysis completed');

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  console.log('✅ Bundle analysis completed');
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  console.log('✅ Bundle analysis completed');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  performanceChecks.bundleAnalysis = true;
} catch (error) {
<<<<<<< HEAD
      console.warn('⚠️  Could not collect system metrics:', error.message);
    }
  }
  async collectApplicationMetrics() {
    try {
      console.log('📱 Collecting application metrics...');
      // Check file sizes
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const distSize = this.getDirectorySize(distPath);
        this.metrics.application.buildSize = Math.round(distSize / 1024 / 1024); // MB
      }
      // Check node_modules size
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        const nodeModulesSize = this.getDirectorySize(nodeModulesPath);
        this.metrics.application.dependenciesSize = Math.round(nodeModulesSize / 1024 / 1024); // MB
      }
      // Check source code size
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        const srcSize = this.getDirectorySize(srcPath);
        this.metrics.application.sourceSize = Math.round(srcSize / 1024); // KB
      }
      // Count files
      this.metrics.application.fileCounts = {
        source: this.countFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']),
        styles: this.countFiles(path.join(this.projectRoot, 'styles'), ['.css', '.scss', '.sass']),
        tests: this.countFiles(path.join(this.projectRoot, 'tests'), ['.test.js', '.test.ts', '.spec.js', '.spec.ts'])
      };
    } catch (error) {
      console.warn('⚠️  Could not collect application metrics:', error.message);
    }
  }
  async collectBuildMetrics() {
    try {
      console.log('🔨 Collecting build metrics...');
      // Check if build artifacts exist
      const buildFiles = [
        'dist/index.html',
        'dist/css',
        'dist/js',
        'dist/assets'
      ];
      this.metrics.build.artifacts = {};
      buildFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        this.metrics.build.artifacts[file] = fs.existsSync(filePath);
      });
      // Check build configuration
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
        this.metrics.build.config = {
          hasVite: true,
          hasBuildOptimizations: viteConfig.includes('build.rollupOptions'),
          hasChunkSplitting: viteConfig.includes('build.rollupOptions.output.manualChunks')
        };
      }
    } catch (error) {
      console.warn('⚠️  Could not collect build metrics:', error.message);
    }
  }
  getDirectorySize(dirPath) {
    let totalSize = 0;
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    return totalSize;
  }
  countFiles(dirPath, extensions) {
    let count = 0;
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          count += this.countFiles(fullPath, extensions);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          count++;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    return count;
  }
  async saveMetrics() {
    const metricsPath = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
    try {
      fs.writeFileSync(metricsPath, JSON.stringify(this.metrics, null, 2));
      console.log(`📊 Metrics saved to: ${metricsPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save metrics:', error.message);
    }
  }
  displaySummary() {
    console.log('\n📊 Performance Summary:');
    console.log('─');
    console.log('─'.repeat(50));
    // System metrics
    console.log('💻 System:');
    console.log(`   Memory: ${this.metrics.system.memory && this.metrics.system.memory.heapUsed || 'N/A'}MB used / ${this.metrics.system.memory && this.metrics.system.memory.heapTotal || 'N/A'}MB total`);
    console.log(`   CPU: ${this.metrics.system.cpu && this.metrics.system.cpu.user || 'N/A'}ms user / ${this.metrics.system.cpu && this.metrics.system.cpu.system || 'N/A'}ms system`);
    console.log(`   Uptime: ${this.metrics.system.process && this.metrics.system.process.uptime || 'N/A}s`);
    // Application metrics
    console.log('\n📱 Application:');
    if (this.metrics.application.buildSize) {
      console.log(`   Build size: ${this.metrics.application.buildSize}MB`);
    }
    if (this.metrics.application.dependenciesSize) {
      console.log(`   Dependencies: ${this.metrics.application.dependenciesSize}MB`);
    }
    if (this.metrics.application.sourceSize) {
      console.log(`   Source code: ${this.metrics.application.sourceSize}KB`);
    }
    // Build metrics
    console.log('\n🔨 Build:');
    const artifactCount = Object.values(this.metrics.build.artifacts || {}).filter(Boolean).length;
    console.log(`   Artifacts: ${artifactCount}/${Object.keys(this.metrics.build.artifacts || {}).length} present`);
    console.log('─'.repeat(50));
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
  console.log('✅ Bundle analysis completed');
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  console.log('✅ Bundle analysis completed');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    console.log('✅ Application is running on localhost: 3000');,
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
    console.log('✅ Application is running on localhost: 3000');,
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    console.log('✅ Application is running on localhost: 3000');,
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
try {}
  // Bundle analysis'
  console.log('📋 Analyzing bundle...');'"
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });




  performanceChecks.bundleAnalysis = true} catch (error) {'
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {}
  // Check if app is running and get basic metrics'"
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });'
  if (isRunning === '200') {}
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time'"
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });"`
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
<<<<<<< HEAD
    if (parseFloat(responseTime) < 1) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      console.log('✅ Response time is good');
<<<<<<< HEAD
=======
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });      console.log('✅ Response time is good');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('⚠️  Application not running on localhost: 3000');,
  }

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      console.log('✅ Response time is good')} else {
<<<<<<< HEAD
=======
  } else {      console.log('✅ Response time is good')} else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    if (parseFloat(responseTime) < 1) {}
'
      console.log('✅ Response time is good')} else {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {'"
    console.log('⚠️  Application not running on "localhost": 3000')}
  measureMemoryUsage() {}
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB;
  }
  generateReport() {}
    const report = {"
      "timestamp": this.metrics.timestamp,"
      "metrics": this.metrics,"
      "recommendations": this.generateRecommendations()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    console.log('Performance report generated:', reportPath);
  }
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
    console.log('Performance report generated:', reportPath);
  }
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {}
    const recommendations = [];
<<<<<<< HEAD
    if (this.metrics.bundleSize > 1000000) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    }
    return recommendations;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      recommendations.push('Consider code splitting to reduce bundle size')}
=======
    }      recommendations.push('Consider code splitting to reduce bundle size')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}
<<<<<<< HEAD
}// Generate performance report
=======
}
// Generate performance report
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    if (this.metrics.bundleSize > 1000000) {}
'
      recommendations.push('Consider code splitting to reduce bundle size')}
    if (this.metrics.memoryUsage > 100) {'
      recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}

// Generate performance report;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);"`
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
<<<<<<< HEAD
// Save performance report
const report = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  timestamp: new Date().toISOString(),
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  timestamp: new Date().toISOString(),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  score: performanceScore,
  checks: performanceChecks,
<<<<<<< HEAD
  recommendations: []
}
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
=======
  recommendations: [];
};
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
if (performanceScore < 80) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting');

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
module.exports = PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

module.exports = PerformanceMonitor;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  "timestamp": new Date().toISOString(),
<<<<<<< HEAD
=======
module.exports = PerformanceMonitor;  "timestamp": new Date().toISOString(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  "score": performanceScore,
  "checks": performanceChecks,
  "recommendations": []};
if (performanceScore < 80) {
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;  report.recommendations.push('Consider optimizing build size');
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  report.recommendations.push('Consider optimizing build size');
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
  report.recommendations.push('Consider optimizing build size');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
// Save performance report;
const report = {}
"
  "timestamp": new Date().toISOString(),"
  "score": performanceScore,"
  "checks": performanceChecks,"
  "recommendations": []};
if (performanceScore < 80) {}
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
