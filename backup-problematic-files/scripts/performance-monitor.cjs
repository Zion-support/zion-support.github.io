

#!/usr/bin/env node
/**
 * Performance Monitor;
 * Basic performance monitoring for the Zion Tech Group website;
 */


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
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
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
  files.forEach(file => {
    if (typeof file === 'string') {
      try {
        if (stats.isFile()) {
          totalSize += stats.size;

  });
  return totalSize;
}
// Check .next directory
performanceMetrics.bundleSize['.next'] = {
  size: nextDirSize,
  sizeMB: (nextDirSize / 1024 / 1024).toFixed(2)
};
// Check node_modules
performanceMetrics.bundleSize['node_modules'] = {
  size: nodeModulesSize,
  sizeMB: (nodeModulesSize / 1024 / 1024).toFixed(2)

// Count files by type;
const fileCounts = {


function countFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  files.forEach(file => {
    if (typeof file === 'string') {
      if (fileCounts.hasOwnProperty(ext)) {
        fileCounts[ext]++;
      }
    }
  });
}
['components', 'pages', 'lib', 'styles'].forEach(dir => countFiles(dir));
performanceMetrics.fileCounts = fileCounts;

// Performance recommendations;
if (nextDirSize > 50 * 1024 * 1024) { // 50MB;
  performanceMetrics.recommendations.push('Consider optimizing bundle size - .next directory is large');
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
          largeImages++;

  if (largeImages > 0) {`;
    performanceMetrics.recommendations.push(`Optimize ${largeImages} large images in public directory`);

// Display results;

console.log('\n📄 Performance report saved to performance-metrics.json');
// Exit after a delay to prevent rapid restarts;
setTimeout(() => {
  process.exit(0);
}, 1000);
module.exports = PerformanceMonitor;
`;
`;
