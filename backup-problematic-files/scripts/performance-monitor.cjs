#!/usr/bin/env node
/**
 * Performance Monitor;
 * Basic performance monitoring for the Zion Tech Group website;
 */
<<<<<<< HEAD
=======
#!/usr/bin/env node
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class PerformanceMonitor {
  // TODO: Implement
}
  constructor() {
    this.metrics = {
<<<<<<< HEAD
      bundleSize: '0',
      memoryUsage: '0',
=======
      bundleSize: 0,
      memoryUsage: 0,
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      timestamp: new Date().toISOString()
    };

  async run() {
<<<<<<< HEAD
    console.log('📊 Running performance monitoring...');
    console.log('✅ Performance monitoring completed');
=======
    console.log('📊 Running performance monitoring...);
    console.log('✅ Performance monitoring completed');
  }
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);

module.exports = PerformanceMonitor;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
<<<<<<< HEAD
      'INFO': 'ℹ
      'SUCCESS': 
      'ERROR': 
      'WARNING': '⚠
      'PERFORMANCE': '⚡
    }[type] || 'ℹ
    this.log('Measuring build time...', 'PERFORMANCE')
      execSync('npm run build')
        stdio: 'pipe,
  encoding: 'utf8
      this.log(`Build completed in ${this.metrics.buildTime}ms`, 'SUCCESS'`)`;
      this.log(`Build failed: ${error.message}`, 'ERROR'`)
    this.log('Analyzing bundle size...', 'PERFORMANCE')
      const buildOutput = execSync('npm run build')
  encoding: 'utf8`;
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`, 'INFO'`)`;
      this.log(`Pages: ${this.metrics.pageCount}`, 'INFO'`)`;
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR'`)
    this.log('Checking image optimization...', 'PERFORMANCE')
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const publicDir = path.join(this.projectRoot, 'public')
              size: Math.round(stats.size / 1024) + 'KB`;
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`, 'INFO
        type: 'image_optimization,
  priority: 'high
    this.log('Checking code splitting...', 'PERFORMANCE')
    const pagesDir = path.join(this.projectRoot, 'pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file, 'utf8')
          const lines = content.split('\n')`;
    this.log(`Analyzed ${totalPages} pages`, 'INFO'`)
        type: 'code_splitting,
  priority: 'medium
    this.log('Checking dependencies...', 'PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8
      const largeDeps = ['lodash', 'moment', 'jquery', 'bootstrap']
          type: 'dependency_optimization,
  priority: 'medium`;
          message: `Consider replacing large dependencies: ${largeDependencies.join(', '`})`;
      this.log(`Dependency check failed: ${error.message}`, 'ERROR'`)
    this.log('\n Performance Report', 'PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations:')
        const priority = rec.priority === 'high' ? '�' : rec.priority === 'medium' ? '�' : '�`;
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(', '`})
      this.log('� No performance issues found!', 'SUCCESS')
    let grade = 'A
    if (this.metrics.performanceScore < 90) grade = 'B
    if (this.metrics.performanceScore < 80) grade = 'C
    if (this.metrics.performanceScore < 70) grade = 'D
    if (this.metrics.performanceScore < 60) grade = 'F
    this.log(' Starting Performance Monitor', 'PERFORMANCE')`;
      this.log(`Error during performance monitoring: ${error.message}`, 'ERROR'`)
console.log('⚡ Starting performance monitoring...');
=======
      'INFO: ℹ'
      'SUCCESS: ERROR: WARNING: ⚠'
      'PERFORMANCE: ⚡}[type] ||ℹ'
    this.log('Measuring build time...,PERFORMANCE')
      execSync('npm run build')
        stdio: pipe,
  encoding: utf8
      this.log(`Build completed in ${this.metrics.buildTime}ms`,SUCCESS'`)
      this.log(`Build failed: ${error.message},ERROR'`)
    this.log('Analyzing bundle size...,PERFORMANCE')
      const buildOutput = execSync('npm run build')
        stdio: pipe,
  encoding: utf8
      this.log(`Bundle size: ${this.metrics.bundleSize}kB`,INFO'`)
      this.log(`Pages: ${this.metrics.pageCount},INFO'`)
      this.log(`Bundle analysis failed: ${error.message},ERROR'`)
    this.log('Checking image optimization...,PERFORMANCE')
    const imageExtensions = [.jpg,.jpeg,.png,.gif,.webp,.svg]
    const publicDir = path.join(this.projectRoot,public')
              size: Math.round(stats.size / 1024) +KB'
    this.log(`Found ${imageCount} images (${Math.round(totalImageSize / 1024)}KB total)`,INFO'
        type: image_optimization,
  priority: high'
    this.log('Checking code splitting...,PERFORMANCE')
    const pagesDir = path.join(this.projectRoot,pages')
        if (file.endsWith('.tsx') || file.endsWith('.jsx')
          const content = fs.readFileSync(file,utf8)
          const lines = content.split('\n')
    this.log(`Analyzed ${totalPages} pages`,INFO'`)
        type: code_splitting,
  priority: medium'
    this.log('Checking dependencies...,PERFORMANCE')
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot,package.json'),utf8
      const largeDeps = [lodash,moment,jquery,bootstrap]
          type: dependency_optimization,
  priority: medium'
          message: `Consider replacing large dependencies: ${largeDependencies.join(,`})
      this.log(`Dependency check failed: ${error.message},ERROR'`)
    this.log('\n Performance Report,PERFORMANCE')
    this.log('=')
      console.log('\n Recommendations: )
        const priority = rec.priority ===high' ? '�: rec.priority ===medium' ? '�: �'
          console.log(`      Details: ${rec.details.map(d => d.file || d).join(,`})
      this.log('� No performance issues found!,SUCCESS')
    let grade = 'A'
    if (this.metrics.performanceScore < 90) grade = 'B'
    if (this.metrics.performanceScore < 80) grade = 'C'
    if (this.metrics.performanceScore < 70) grade = 'D'
    if (this.metrics.performanceScore < 60) grade = 'F'
    this.log(' Starting Performance Monitor,PERFORMANCE')
      this.log(`Error during performance monitoring: ${error.message},ERROR'`)
console.log('⚡ Starting performance monitoring...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const performanceMetrics = {
  timestamp: new Date().toISOString(),
  bundleSize: {},
  fileCounts: {},
  recommendations: []

// Check bundle sizes;
function getDirectorySize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { recursive: true });
  
  files.forEach(file => {)
<<<<<<< HEAD
    if (typeof file === 'string') {
=======
    if (typeof file ===string') {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      const filePath = path.join(dirPath, file);
      try {
  // TODO: Implement
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          totalSize += stats.size;
<<<<<<< HEAD
      } catch (error) {
        // Skip files that can't be accessed;
=======
        }
      } catch (error) {
        // Skip files that can't be accessed;
      }
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  });
  
  return totalSize;

// Check .next directory;
const nextDirSize = getDirectorySize('.next');
<<<<<<< HEAD
performanceMetrics.bundleSize['.next'] = {
=======
performanceMetrics.bundleSize[.next] = {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)

// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');
<<<<<<< HEAD
performanceMetrics.bundleSize['node_modules'] = {
=======
performanceMetrics.bundleSize[node_modules] = {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {
<<<<<<< HEAD
  '.tsx': 0,
  '.ts': 0,
  '.jsx': 0,
  '.js': 0,
  '.css': 0,
  '.json': 0;
=======
  '.tsx: 0,.ts: 0,.jsx: 0,.js: 0,.css: 0,.json: 0;
};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
<<<<<<< HEAD
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;

['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
=======
  const files = fs.readdirSync(dirPath, { recursive: true });
  files.forEach(file => {)
    if (typeof file ===string') {
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;
      }
    }
  });
}
'
[components,pages,lib,styles].forEach(dir => countFiles(dir));
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
<<<<<<< HEAD

if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');

if (fileCounts['.css'] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');

=======
}
'
if (fileCounts[.tsx] + fileCounts[.ts] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');
}
'
if (fileCounts[.css] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');
}

>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  
  publicFiles.forEach(file => {)
<<<<<<< HEAD
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
=======
    if (typeof file ===string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      try {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  // TODO: Implement
        const filePath = path.join(publicDir, file);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;
<<<<<<< HEAD
        // Skip files that can't be accessed;
=======
        }
      } catch (error) {
        // Skip files that can't be accessed;
      }
    }
  });
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  
  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;
<<<<<<< HEAD
console.log('\n📊 Performance Metrics:');`;
console.log(`   - .next bundle size: ${performanceMetrics.bundleSize['.next']?.sizeMB || '0'} MB`);`;
console.log(`   - node_modules size: ${performanceMetrics.bundleSize['node_modules']?.sizeMB || '0'} MB`);`;
console.log(`   - TypeScript files: ${fileCounts['.tsx'] + fileCounts['.ts']}`);`;
console.log(`   - JavaScript files: ${fileCounts['.jsx'] + fileCounts['.js']}`);`;
console.log(`   - CSS files: ${fileCounts['.css']}`);
if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');`;
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}`));
} else {
  // TODO: Implement
  console.log('\n✅ No performance issues detected');

// Save report;
fs.writeFileSync('performance-metrics.json', JSON.stringify(performanceMetrics, null, 2));
=======
console.log('\n📊 Performance Metrics: );
console.log(`   - .next bundle size: ${performanceMetrics.bundleSize[.next]?.sizeMB ||0} MB`);
console.log(`   - node_modules size: ${performanceMetrics.bundleSize[node_modules]?.sizeMB ||0} MB`);
console.log(`   - TypeScript files: ${fileCounts[.tsx] + fileCounts[.ts]});
console.log(`   - JavaScript files: ${fileCounts[.jsx] + fileCounts[.js]});
console.log(`   - CSS files: ${fileCounts[.css]});
if (performanceMetrics.recommendations.length > 0) {
  console.log('\n💡 Recommendations: );
  performanceMetrics.recommendations.forEach(rec => console.log(`   - ${rec}));
} else {
  // TODO: Implement
}
  console.log('\n✅ No performance issues detected');
}

// Save report;
fs.writeFileSync('performance-metrics.json, JSON.stringify(performanceMetrics, null, 2));
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);
`;