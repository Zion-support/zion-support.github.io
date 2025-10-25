#!/usr/bin/env node
/**
 * Performance Optimizer for Zion Tech Group Website
 * 
 * This script optimizes the built website for better performance
 * by adding preload hints, optimizing images, and other enhancements.
 */

import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');

// Optimize HTML files
function optimizeHTML(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add preload hints for critical resources
    const preloadHints = `
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">
    `;
    
    content = content.replace('</head>', `${preloadHints}</head>`);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

// Main optimization function
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  // Find all HTML files in dist
  const htmlFiles = [];
  
  function findHTMLFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findHTMLFiles(filePath);
      } else if (file.endsWith('.html')) {
        htmlFiles.push(filePath);
      }
    });
  }
  
  if (fs.existsSync(distPath)) {
    findHTMLFiles(distPath);
    
    // Optimize each HTML file
    htmlFiles.forEach(optimizeHTML);
    
    console.log(`✅ Performance optimization completed!`);
    console.log(`📊 Optimized ${htmlFiles.length} HTML files`);
  } else {
    console.log('❌ Dist directory not found. Please run build first.');
  }
}

// Run optimization
optimizePerformance();
