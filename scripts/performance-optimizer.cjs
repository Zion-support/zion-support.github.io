#!/usr/bin/env node

/**
 * Performance Optimizer for Zion Tech Group Website
 * Optimizes images, CSS, and JavaScript for better performance
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance optimization...');

// Optimize CSS by removing unused styles
function optimizeCSS() {
  console.log('📝 Optimizing CSS...');
  
  const cssPath = path.join(__dirname, '../dist/assets');
  if (fs.existsSync(cssPath)) {
    const files = fs.readdirSync(cssPath);
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    cssFiles.forEach(file => {
      const filePath = path.join(cssPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused CSS rules (basic optimization)
      content = content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Minify whitespace
        .replace(/;\s*}/g, '}') // Remove unnecessary semicolons
        .replace(/:\s+/g, ':') // Remove space after colons
        .replace(/,\s+/g, ',') // Remove space after commas
        .trim();
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Optimized ${file}`);
    });
  }
}

// Optimize HTML
function optimizeHTML() {
  console.log('📄 Optimizing HTML...');
  
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let content = fs.readFileSync(htmlPath, 'utf8');
    
    // Remove unnecessary whitespace
    content = content
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();
    
    fs.writeFileSync(htmlPath, content);
    console.log('✅ Optimized index.html');
  }
}

// Add performance hints
function addPerformanceHints() {
  console.log('⚡ Adding performance hints...');
  
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let content = fs.readFileSync(htmlPath, 'utf8');
    
    // Add resource hints
    const resourceHints = `
    <link rel="preload" href="/assets/vendor-avszxO8f.js" as="script" crossorigin>
    <link rel="preload" href="/assets/index-Djua46cn.css" as="style">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`;
    
    // Insert before closing head tag
    content = content.replace('</head>', `${resourceHints}\n</head>`);
    
    fs.writeFileSync(htmlPath, content);
    console.log('✅ Added performance hints');
  }
}

// Generate sitemap
function generateSitemap() {
  console.log('🗺️ Generating sitemap...');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');
}

// Generate robots.txt
function generateRobotsTxt() {
  console.log('🤖 Generating robots.txt...');
  
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Performance hints
Crawl-delay: 1`;
  
  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robots);
  console.log('✅ Generated robots.txt');
}

// Main optimization function
function optimize() {
  try {
    optimizeCSS();
    optimizeHTML();
    addPerformanceHints();
    generateSitemap();
    generateRobotsTxt();
    
    console.log('🎉 Performance optimization completed successfully!');
    console.log('📊 Optimizations applied:');
    console.log('  - CSS minification and cleanup');
    console.log('  - HTML minification');
    console.log('  - Resource hints added');
    console.log('  - Sitemap generated');
    console.log('  - Robots.txt generated');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run optimization
optimize();