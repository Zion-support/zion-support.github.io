#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors application performance metrics
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Starting performance monitoring...');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      errors: []
    };

const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,
  memoryUsage: false;
};
      "bundleSize": 0,
      "memoryUsage": 0,

      "timestamp": new Date().toISOString()
    }}


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
#!/usr/bin/env node

;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;#!/usr/bin/env node;

const fs = // // require('fs')const performanceChecks = {'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': false;
}this.metrics = {ursor/automate-test-improve-and-merge-code-646c;
    }
    this.metrics = {'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString()}'
;
  const performanceChecks = {'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': false}'memoryUsage': false;'
}try {// Check build size;
  }
  if (fs.existsSync('.next')) {const buildSize = execSync('du -sh .next', { 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)// Check if build size is reasonable (less than 50MB;`  const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {console.log('✅ Build size is within acceptable limits')} else {console.log('⚠️  Build size is large, consider optimization')}'
  }
try {// Bundle analysis;
  }
  console.log('📋 Analyzing bundle...')const bundleInfo  = execSync('npx next-bundle-analyzer .next/static/chunks', { 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true;'
} catch (error) {console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')console.warn('⚠️  Could not collect system 'metrics':', error.message)}'
  }
  async collectApplicationMetrics() {try {console.log('📱 Collecting application metrics...')// Check file sizes;'

}

const distPath = path.join(this.projectRoot, 'dist')if (fs.existsSync(distPath)) ;'
  const distSize = this.getDirectorySize(distPath)this.metrics.application.buildSize = Math.round(distSize / 1024 / 1024)// MB;
      }
      // Check node_modules size;

const nodeModulesPath = path.join(this.projectRoot, 'node_modules')if (fs.existsSync(nodeModulesPath)) ;'
  const nodeModulesSize = this.getDirectorySize(nodeModulesPath)this.metrics.application.dependenciesSize = Math.round(nodeModulesSize / 1024 / 1024)// MB;
      }
      // Check source code size;

const srcPath = path.join(this.projectRoot, 'src')if (fs.existsSync(srcPath)) ;'
  const srcSize = this.getDirectorySize(srcPath)this.metrics.application.sourceSize = Math.round(srcSize / 1024)// KB;
      }
      // Count files;
      this.metrics.application.fileCounts = {'source': this.countFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']),'styles': this.countFiles(path.join(this.projectRoot, 'styles'), ['.css', '.scss', '.sass']),'tests': this.countFiles(path.join(this.projectRoot, 'tests'), ['.test.js', '.test.ts', '.spec.js', '.spec.ts'])} catch (error) {console.warn('⚠️  Could not collect application 'metrics':', error.message)}'
  }
  async collectBuildMetrics() {try {console.log('🔨 Collecting build metrics...')// Check if build artifacts exist;'

}

const buildFiles = [;
  'dist/index.html','dist/css','dist/js','dist/assets''
];

      this.metrics.build.artifacts = {}buildFiles.forEach(file => { return  ; }
  const filePath = path.join(this.projectRoot, file)this.metrics.build.artifacts[file] = fs.existsSync(filePath)})// Check build configuration;

const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts')if (fs.existsSync(viteConfigPath)) ;'
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf8')this.metrics.build.config = {'hasVite': true,'hasBuildOptimizations': viteConfig.includes('build.rollupOptions'),'hasChunkSplitting': viteConfig.includes('build.rollupOptions.output.manualChunks')}'
   
} catch (error) {console.warn('⚠️  Could not collect build 'metrics':', error.message)}'
  }
  getDirectorySize(dirPath) {let totalSize = 0;
    }
    try {const items = fs.readdirSync(dirPath)for (const item of items) {const fullPath = path.join(dirPath, item;
  }
  const stat = fs.statSync(fullPath)if (stat.isDirectory()) {totalSize += this.getDirectorySize(fullPath)} else {totalSize += stat.size;
        }
      }
    } catch (error) {// Skip directories we can't read;'
    }
    return totalSize;
  }
  countFiles(dirPath, extensions) {let count = 0;
    }
    try {const items = fs.readdirSync(dirPath)for (const item of items) {const fullPath = path.join(dirPath, item;
  }
  const stat = fs.statSync(fullPath)if (stat.isDirectory()) {count += this.countFiles(fullPath, extensions)} else if (extensions.some(ext => item.endsWith(ext))) {count++;
        }
      }
    } catch (error) {// Skip directories we can't read;'
    }
    return count;
  }
  async saveMetrics() {const metricsPath = path.join(this.projectRoot, 'logs', 'performance-metrics.json')try {fs.writeFileSync(metricsPath, JSON.stringify(this.metrics, null, 2))console.log(`📊 Metrics saved 'to': ${metricsPath}`,`} catch (error) {console.warn('⚠️  Could not save 'metrics':', error.message)}'
  }
  displaySummary() {console.log('\n📊 Performance 'Summary':')console.log('─')console.log('─'.repeat(50))// System metrics;'
    }
    console.log('💻 'System': ')console.log(`   'Memory': ${this.metrics.system.memory && this.metrics.system.memory.heapUsed || 'N/A'}MB used / ${this.metrics.system.memory && this.metrics.system.memory.heapTotal || 'N/A'}MB total`)console.log(`   'CPU': ${this.metrics.system.cpu && this.metrics.system.cpu.user || 'N/A'}ms user / ${this.metrics.system.cpu && this.metrics.system.cpu.system || 'N/A'}ms system`)console.log(`   'Uptime': ${this.metrics.system.process && this.metrics.system.process.uptime || 'N/,'}s`)// Application metrics;`    console.log('\n📱 'Application': ')if (this.metrics.application.buildSize) {console.log(`   Build 'size': ${this.metrics.application.buildSize}MB`)}`    if (this.metrics.application.dependenciesSize) {console.log(`   'Dependencies': ${this.metrics.application.dependenciesSize}MB`)}`    if (this.metrics.application.sourceSize) {console.log(`   Source 'code': ${this.metrics.application.sourceSize}KB`,`}
    // Build metrics;
    console.log('\n🔨 'Build': ')const artifactCount = Object.values(this.metrics.build.artifacts || ,'
}).filter(Boolean).length;
    console.log(`   'Artifacts': ${artifactCount}/${Object.keys(this.metrics.build.artifacts || {}).length} present`)console.log('─'.repeat(50),'}
  sleep(ms) {return new Promise(resolve => { return setTimeout(resolve, ms))}
  performanceChecks.bundleAnalysis = true; }
} catch (error) {console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')console.log('✅ Bundle analysis completed')ursor/automate-test-improve-and-merge-code-646c;'
  }
  console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) {console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}'
try {// Check if app is running and get basic metrics;

}

const isRunning = execSync('curl -s -o /dev/null -w '%{http_code}' 'http': //'localhost':3000', { 'encoding': 'utf8' })if (isRunning === '200') {console.log('✅ Application is running on 'localhost': 3000'),console.log('✅ Application is running on 'localhost': 3000'),ursor/automate-test-improve-and-merge-code-646c;'
    }
    console.log('✅ Application is running on 'localhost': 3000'),console.log('✅ Application is running on 'localhost': 3000'),// Get response time;'

const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': //'localhost':3000', { 'encoding': 'utf8' })console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) {console.log('✅ Response time is good')} else {console.log('⚠️  Response time could be improved')}'#!/usr/bin/env node;
  const fs = // // require('fs');'

const path = // // require('path');'
class PerformanceMonitor {
  }
  constructor() {
    }
    this.metrics = {
      }
      'bundleSize': 0,
      'memoryUsage': 0,
      'timestamp': new Date().toISOString()
   
};
  }

const performanceChecks = {
  }
  'buildSize': false,
  'bundleAnalysis': false,
  'lighthouseScore': false,
  'loadTime': false,
  'memoryUsage': false
};

    this.metrics = {
      'bundleSize': 0,'
      'memoryUsage': 0,'
      'timestamp': new Date().toISOString()'
    }
;
  const performanceChecks = {
  'buildSize': false,'
  'bundleAnalysis': false,'
  'lighthouseScore': false,'
  'loadTime': false,'
  'memoryUsage': false};'
try {
  // Check build size
}
if (fs.existsSync('.next')) {'
    }
    const buildSize = execSync('du -sh .next', { 'encoding': 'utf8' }).trim();'
    console.log(`✅ Build 'size': ${buildSize}`);`    // Check if build size is reasonable (less than 50MB)
    const sizeInMB = parseInt(buildSize.split('\t')[0]);'
    if (sizeInMB < 50) {
      }
      console.log('✅ Build size is within acceptable limits');'
    } else {
      }
      console.log('⚠️  Build size is large, consider optimization');'
    }
  }
try {
  // Bundle analysis
  console.log('📋 Analyzing bundle...');
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
  console.log('✅ Bundle analysis completed');
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  }
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');'
}
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {
    console.log('✅ Application is running on localhost: 3000');,
    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
    if (parseFloat(responseTime) < 1) {
      console.log('✅ Response time is good');
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
  } else {
    console.log('⚠️  Application not running on localhost: 3000');,
  }
      console.log('✅ Response time is good')} else {

      console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {'"
    console.log('⚠️  Application not running on "localhost": 3000')}

  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }
  generateReport() {
    const report = {
      "timestamp": this.metrics.timestamp,
      "metrics": this.metrics,
      "recommendations": this.generateRecommendations()

    }
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Performance report generated:', reportPath);
  }
    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {
    const recommendations = [];
    if (this.metrics.bundleSize > 1000000) {
      recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    }
    return recommendations;
  }
      recommendations.push('Consider code splitting to reduce bundle size')}
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}
}
// Generate performance report
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
// Save performance report
const report = {
  timestamp: new Date().toISOString(),
  score: performanceScore,
  checks: performanceChecks,
  recommendations: [];
};
if (performanceScore < 80) {
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting');
}
module.exports = PerformanceMonitor;
  "timestamp": new Date().toISOString(),

  "score": performanceScore,
  "checks": performanceChecks,
  "recommendations": []};
if (performanceScore < 80) {




=======
  console.log('✅ Bundle analysis completed');'
  performanceChecks.bundleAnalysis = true} catch (error) {
  }
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}'
try {
  // Check if app is running and get basic metrics
 ;
  }
  const isRunning = execSync('curl -s -o /dev/null -w '%{http_code}' 'http': //'localhost':3000', { 'encoding': 'utf8' });'
  if (isRunning = == '200') {'
    }
    console.log('✅ Application is running on 'localhost': 3000'),'
    // Get response time
   ;
  const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': //'localhost':3000', { 'encoding': 'utf8' });'
    console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`);`    if (parseFloat(responseTime) < 1) {
      }
      console.log('✅ Response time is good');'
    } else {
      }
      console.log('⚠️  Response time could be improved');'
    }
    performanceChecks.loadTime = true;
  } else {ursor/automate-test-improve-and-merge-code-646c;
      }
      console.log('✅ Response time is good')} else {console.log('⚠️  Response time could be improved')}'
    performanceChecks.loadTime = true} else {console.log('⚠️  Application not running on 'localhost': 3000')}'
  measureMemoryUsage() ;
  const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)// MB;
  }
  generateReport() {const report = {'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations(;'
}

const reportPath = path.join(process.cwd(), 'performance-report.json')fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))console.log('Performance report 'generated':', reportPath)}ursor/automate-test-improve-and-merge-code-646c;'
  generateReport() {
    }
    const reportPath = path.join(process.cwd(), 'performance-report.json');'
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Performance report 'generated': ', reportPath)}'
  generateRecommendations() {const recommendations = [];
    }
    if (this.metrics.bundleSize > 1000000) {recommendations.push('Consider code splitting to reduce bundle size')}'
    if (this.metrics.memoryUsage > 100) {recommendations.push('High memory usage detected, consider optimization')}'
    return recommendations;
  }ursor/automate-test-improve-and-merge-code-646c;
      recommendations.push('Consider code splitting to reduce bundle size')}'
    if (this.metrics.memoryUsage > 100) {recommendations.push('High memory usage detected, consider optimization')}'
    return recommendations}
}// Generate performance report;
const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalChecks})`)// Save performance report;`
const report = {'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': [];
}'recommendations': [];
}if (performanceScore < 80) {module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
  'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) {#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() ,'
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { console.log('✅ Application is running on 'localhost': 3000'),const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on 'localhost': 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report 'generated':',reportPath)} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalCheck,`})`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { console.log('✅ Application is running on 'localhost': 3000'),const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on 'localhost': 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report 'generated':',reportPath)} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalCheck,`})`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { console.log('✅ Application is running on 'localhost': 3000'),const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on 'localhost': 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report 'generated':',reportPath)} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalCheck,`})`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { console.log('✅ Application is running on 'localhost': 3000'),const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on 'localhost': 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report 'generated':',reportPath)} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalCheck,`})`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { console.log('✅ Application is running on 'localhost': 3000'),const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on 'localhost': 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report 'generated':',reportPath)} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalCheck,`})`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { 'bundleSize': 0,'memoryUsage': 0,'timestamp': new Date().toISOString() 
}

const performanceChecks = { 'buildSize': false,'bundleAnalysis': false,'lighthouseScore': false,'loadTime': false,'memoryUsage': fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ 'encoding': 'utf8' }).trim()console.log(`✅ Build 'size': ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ 'encoding': 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w '%{http_cod,'
}' 'http': if (isRunning === '200') { console.log('✅ Application is running on 'localhost': 3000'),const responseTime = execSync('curl -s -o /dev/null -w '%{time_total}' 'http': console.log(`✅ Response 'time': ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on 'localhost': 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { 'timestamp': this.metrics.timestamp,'metrics': this.metrics,'recommendations': this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report 'generated':',reportPath)} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance 'Score': ${performanceScore}% (${passedChecks}/${totalCheck,`})`;`  const report = { 'timestamp': new Date().toISOString(),'score': performanceScore,'checks': performanceChecks,'recommendations': []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')}'
module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;