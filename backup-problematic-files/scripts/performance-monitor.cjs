#!/usr/bin/env node;
;const fs = require('fs');
const path = require('path');
;
console.log('⚡ Starting performance monitoring...');
;
const performanceMetrics = {;
  timestamp:new Date().toISOString(),;
  bundleSize:{},;
  fileCounts:{},;
  recommendations:[];
};
;
// Check bundle sizes;
function getDirectorySize(dirPath) {;
  if (!fs.existsSync(dirPath)) return 0;
  ;
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { recursive:true });
  ;
  files.forEach(file => {;
    if (typeof file === 'string') {;
      const filePath = path.join(dirPath, file);
      try {;
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {;
          totalSize += stats.size;
        }
      } catch (error) {;
        // Skip files that can't be accessed;
      }
    }
  });
  ;
  return totalSize;
}
;
// Check .next directory;
const nextDirSize = getDirectorySize('.next');
performanceMetrics.bundleSize['.next'] = {;
  size:nextDirSize,;
  sizeMB:(nextDirSize / 1024 / 1024).toFixed(2);
};
;
// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');
performanceMetrics.bundleSize['node_modules'] = {;
  size:nodeModulesSize,;
  sizeMB:(nodeModulesSize / 1024 / 1024).toFixed(2);
};
;
// Count files by type;
const fileCounts = {;
  '.tsx':0,;
  '.ts':0,;
  '.jsx':0,;
  '.js':0,;
  '.css':0,;
  '.json':0;
};
;
function countFiles(dirPath) {;
  if (!fs.existsSync(dirPath)) return;
  ;
  const files = fs.readdirSync(dirPath, { recursive:true });
  files.forEach(file => {;
    if (typeof file === 'string') {;
      const ext = path.extname(file);
      if (fileCounts.hasOwnProperty(ext)) {;
        fileCounts[ext]++;
      }
    }
  });
}
;
['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
performanceMetrics.fileCounts = fileCounts;
;
// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
}
;
if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {;
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');
}
;
if (fileCounts['.css'] > 10) {;
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');
}
;
// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {;
  const publicFiles = fs.readdirSync(publicDir, { recursive:true });
  let largeImages = 0;
  ;
  publicFiles.forEach(file => {;
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {;
      try {;
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;
        }
      } catch (error) {;
        // Skip files that can't be accessed;
      }
#!/usr/bin/env node
/**
 * Performance Monitor;
 * Basic performance monitoring for the Zion Tech Group website;
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class PerformanceMonitor {
  // TODO: Implement
}
  constructor() {
    this.metrics = {

      timestamp: new Date().toISOString()
    };

  async run() {

const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);

module.exports = PerformanceMonitor;
`;
