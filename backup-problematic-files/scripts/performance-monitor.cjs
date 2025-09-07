<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        if (stats.size > 500 * 1024) { // 500KB;
          largeImages++;
        }
      } catch (error) {;
        // Skip files that can't be accessed;
      }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
#!/usr/bin/env node
/**
 * Performance Monitor;
 * Basic performance monitoring for the Zion Tech Group website;
 */
<<<<<<< HEAD
<<<<<<< HEAD

=======
#!/usr/bin/env node

#!/usr/bin/env node
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs');
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
>>>>>>> origin/chore/fix-lint-and-merge
  log(message, type = 'INFO')

const performanceMetrics = {
  timestamp: new Date().toISOString(),
  bundleSize: {},
  fileCounts: {},
  recommendations: []

// Check bundle sizes;
function getDirectorySize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  const files = fs.readdirSync(dirPath, { recursive: true });
<<<<<<< HEAD
  files.forEach(file => {
    if (typeof file === 'string') {
      try {
=======
  files.forEach(file => {)

      const filePath = path.join(dirPath, file);
      try {
  // TODO: Implement
        const stats = fs.statSync(filePath);
>>>>>>> origin/chore/fix-lint-and-merge
        if (stats.isFile()) {
          totalSize += stats.size;

  });
  return totalSize;
<<<<<<< HEAD
}
// Check .next directory
performanceMetrics.bundleSize['.next'] = {
  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)
};
// Check node_modules
performanceMetrics.bundleSize['node_modules'] = {
=======

// Check .next directory;
const nextDirSize = getDirectorySize('.next');

  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)

// Check node_modules;
const nodeModulesSize = getDirectorySize('node_modules');

>>>>>>> origin/chore/fix-lint-and-merge
  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {


function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
<<<<<<< HEAD
  files.forEach(file => {
    if (typeof file === 'string') {
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;
      }
    }
  });
}
['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
=======

>>>>>>> origin/chore/fix-lint-and-merge
performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
<<<<<<< HEAD
}
if (fileCounts['.tsx'] + fileCounts['.ts'] > 50) {
  performanceMetrics.recommendations.push('Consider code splitting - many TypeScript files detected');
}
if (fileCounts['.css'] > 10) {
  performanceMetrics.recommendations.push('Consider CSS optimization - multiple CSS files detected');
}
// Check for large images
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  publicFiles.forEach(file => {
    if (typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      try {
        if (stats.size > 500 * 1024) { // 500KB
=======

// Check for large images;
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir, { recursive: true });
  let largeImages = 0;
  publicFiles.forEach(file => {)

  // TODO: Implement
        const filePath = path.join(publicDir, file);
        if (stats.size > 500 * 1024) { // 500KB;
>>>>>>> origin/chore/fix-lint-and-merge
          largeImages++;

  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;

console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);
<<<<<<< HEAD
module.exports = PerformanceMonitor;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
<<<<<<< HEAD
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
