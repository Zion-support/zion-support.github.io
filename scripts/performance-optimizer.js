#!/usr/bin/env node
/**
 * Performance Optimizer for Zion Tech Group Website
 * 
 * This script optimizes the built website for better performance
 * by minifying HTML, adding preload hints, and optimizing assets.
 */

import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

// Optimize HTML files
function optimizeHTML(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/>\s+</g, '><');
    
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

// Optimize CSS files
function optimizeCSS(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/\s*{\s*/g, '{');
    content = content.replace(/\s*}\s*/g, '}');
    content = content.replace(/\s*;\s*/g, ';');
    content = content.replace(/\s*,\s*/g, ',');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

// Optimize JS files
function optimizeJS(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/\s*{\s*/g, '{');
    content = content.replace(/\s*}\s*/g, '}');
    content = content.replace(/\s*;\s*/g, ';');
    content = content.replace(/\s*,\s*/g, ',');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

// Main optimization function
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Please run build first.');
    return;
  }
  
  // Find and optimize all files
  const files = fs.readdirSync(distDir, { recursive: true });
  
  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const ext = path.extname(file);
    
    if (fs.statSync(filePath).isFile()) {
      switch (ext) {
        case '.html':
          optimizeHTML(filePath);
          break;
        case '.css':
          optimizeCSS(filePath);
          break;
        case '.js':
          optimizeJS(filePath);
          break;
      }
    }
  });
  
  console.log('✅ Performance optimization completed!');
}

optimizePerformance();