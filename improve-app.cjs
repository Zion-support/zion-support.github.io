#!/usr/bin/env node

/**
 * App Improvement Script
 * Minimal, safe improvements: analyze build output size and generate a report.
 */

const fs = require('fs');
const path = require('path');

function getDirectorySizeRecursive(directoryPath) {
  let totalSizeBytes = 0;
  if (!fs.existsSync(directoryPath)) return 0;
  const entries = fs.readdirSync(directoryPath);
  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry);
    const stats = fs.statSync(entryPath);
    if (stats.isDirectory()) {
      totalSizeBytes += getDirectorySizeRecursive(entryPath);
    } else {
      totalSizeBytes += stats.size;
    }
  }
  return totalSizeBytes;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(2)} ${units[i]}`;
}

function main() {
  const buildDir = path.resolve('.next');
  const totalSize = getDirectorySizeRecursive(buildDir);
  const report = {
    timestamp: new Date().toISOString(),
    buildDirectory: buildDir,
    totalSizeBytes: totalSize,
    totalSizeHuman: formatBytes(totalSize),
    recommendations: totalSize > 10 * 1024 * 1024
      ? [
          'Bundle is larger than 10MB. Consider code splitting and dynamic imports.',
          'Audit large dependencies and remove unused ones.',
          'Enable image optimization and ensure modern formats (AVIF/WebP).'
        ]
      : ['Bundle size is reasonable. No immediate actions required.']
  };
  fs.writeFileSync('build-size-report.json', JSON.stringify(report, null, 2));
  console.log(`Build size report written to build-size-report.json (${report.totalSizeHuman})`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error('Failed to run improvement script:', error);
    process.exit(1);
  }
}

module.exports = { main };
