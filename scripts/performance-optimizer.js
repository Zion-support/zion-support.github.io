#!/usr/bin/env node
/**
 * Performance Optimization Script
 * Optimizes the application for better performance, SEO, and user experience
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeHTML = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    
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
};

const optimizeCSS = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/{\s*/g, '{');
    content = content.replace(/;\s*/g, ';');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
};

const optimizeJS = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    // Minify whitespace
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/;\s*/g, ';');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Optimized ${filePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
};

const generateManifest = () => {
  const manifest = {
    name: 'Zion Tech Group',
    short_name: 'Zion Tech',
    description: 'Leading provider of AI-powered enterprise solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#8b5cf6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };

  const manifestPath = path.join(__dirname, '..', 'public', 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Generated manifest.json');
};

const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('✅ Generated robots.txt');
};

const main = () => {
  console.log('🚀 Starting performance optimization...');
  
  const distPath = path.join(__dirname, '..', 'dist');
  
  // Optimize HTML files
  const htmlFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.html'));
  htmlFiles.forEach(file => {
    optimizeHTML(path.join(distPath, file));
  });
  
  // Optimize CSS files
  const cssFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.css'));
  cssFiles.forEach(file => {
    optimizeCSS(path.join(distPath, file));
  });
  
  // Optimize JS files
  const jsFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.js'));
  jsFiles.forEach(file => {
    optimizeJS(path.join(distPath, file));
  });
  
  // Generate additional files
  generateManifest();
  generateRobotsTxt();
  
  console.log('✅ Performance optimization completed!');
};

main();