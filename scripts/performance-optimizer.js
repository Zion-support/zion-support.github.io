#!/usr/bin/env node
/**
 * Performance Optimizer for Zion Tech Group Website
 * 
 * This script optimizes the built website for better performance
 * by adding preload hints, optimizing images, and other performance improvements.
 */

import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const publicDir = path.join(process.cwd(), 'public');

// Optimize HTML files
function optimizeHTML() {
  const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));
  
  htmlFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">
    `;
    
    content = content.replace('</head>', `${preloadHints}</head>`);
    
    // Add performance meta tags
    const performanceMeta = `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0f172a">
    <meta name="color-scheme" content="dark">
    `;
    
    content = content.replace('<head>', `<head>${performanceMeta}`);
    
    fs.writeFileSync(filePath, content);
  });
  
  console.log(`✅ Optimized ${htmlFiles.length} HTML files`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
`;

  const robotsPath = path.join(distDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Generated robots.txt');
}

// Generate manifest.json
function generateManifest() {
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Leading AI and IT solutions provider',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#06b6d4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };

  const manifestPath = path.join(distDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Generated manifest.json');
}

// Optimize images (placeholder - in real implementation, this would use sharp or similar)
function optimizeImages() {
  const imagesDir = path.join(distDir, 'images');
  if (fs.existsSync(imagesDir)) {
    const imageFiles = fs.readdirSync(imagesDir, { recursive: true })
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    
    console.log(`📸 Found ${imageFiles.length} images to optimize`);
    // In a real implementation, you would optimize these images here
  }
}

// Generate performance report
function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    buildSize: getDirectorySize(distDir),
    optimizations: [
      'HTML preload hints added',
      'Performance meta tags added',
      'Robots.txt generated',
      'Manifest.json generated'
    ],
    recommendations: [
      'Consider implementing image optimization',
      'Add service worker for caching',
      'Implement lazy loading for images',
      'Consider code splitting for better performance'
    ]
  };

  const reportPath = path.join(distDir, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('✅ Generated performance report');
}

// Helper function to get directory size
function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(itemPath) {
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => {
        calculateSize(path.join(itemPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

// Main optimization function
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Please run build first.');
    process.exit(1);
  }
  
  optimizeHTML();
  generateRobotsTxt();
  generateManifest();
  optimizeImages();
  generatePerformanceReport();
  
  console.log('✅ Performance optimization completed!');
}

// Run optimization
optimizePerformance();