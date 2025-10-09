#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance monitoring script
const performanceReport = {
  timestamp: new Date().toISOString(),
  buildSize: 0,
  pageCount: 0,
  recommendations: []
};

// Analyze build output
const buildDir = path.join(process.cwd(), '.next');
const staticDir = path.join(buildDir, 'static');

if (fs.existsSync(staticDir)) {
  const files = fs.readdirSync(staticDir, { recursive: true });
  const jsFiles = files.filter(file => file.endsWith('.js'));
  
  jsFiles.forEach(file => {
    const filePath = path.join(staticDir, file);
    const stats = fs.statSync(filePath);
    performanceReport.buildSize += stats.size;
  });
  
  performanceReport.buildSize = Math.round(performanceReport.buildSize / 1024); // Convert to KB
}

// Performance recommendations
if (performanceReport.buildSize > 500) {
  performanceReport.recommendations.push('Consider code splitting to reduce bundle size');
}

if (performanceReport.buildSize > 1000) {
  performanceReport.recommendations.push('Bundle size is large - consider lazy loading components');
}

performanceReport.recommendations.push('Enable gzip compression on server');
performanceReport.recommendations.push('Consider using a CDN for static assets');

// Write report
const reportPath = path.join(process.cwd(), 'performance-report.json');
fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

console.log('Performance Report Generated:');
console.log(`Build Size: ${performanceReport.buildSize} KB`);
console.log(`Recommendations: ${performanceReport.recommendations.length}`);