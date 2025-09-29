#!/usr/bin/env node

// Asset Optimizer Script
import fs from 'fs';
import path from 'path';

console.log('📦 Optimizing assets...');

const distPath = 'dist';
if (fs.existsSync(distPath)) {
  // Optimize HTML
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Add performance hints
    content = content.replace(
      '<head>',
      `<head>
  <!-- Performance optimizations -->
  <link rel="preload" href="/assets/main.css" as="style">
  <link rel="preload" href="/assets/main.js" as="script">
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  <link rel="dns-prefetch" href="//www.google-analytics.com">
  <meta name="theme-color" content="#667eea">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Zion Tech Group">`
    );
    
    fs.writeFileSync(indexPath, content);
    console.log('✅ Optimized HTML');
  }
  
  console.log('✅ Asset optimization completed');
} else {
  console.log('⚠️  Dist directory not found');
}
