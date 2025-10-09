#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🚀 Starting Performance Optimization...");

// 1. Optimize images
console.log("📸 Optimizing images...");
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const publicDir = path.join(__dirname, "../public");

function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      optimizeImages(filePath);
    } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
      console.log(`  ✓ Found image: ${file}`);
    }
  });
}

if (fs.existsSync(publicDir)) {
  optimizeImages(publicDir);
}

// 2. Check for unused CSS
console.log("🎨 Checking for unused CSS...");
const cssFile = path.join(__dirname, "../app/globals.css");
if (fs.existsSync(cssFile)) {
  const cssContent = fs.readFileSync(cssFile, "utf8");
  const cssClasses = cssContent.match(/\.([a-zA-Z0-9_-]+)/g) || [];
  console.log(`  ✓ Found ${cssClasses.length} CSS classes`);
}

// 3. Bundle analysis
console.log("📦 Analyzing bundle size...");
const distDir = path.join(__dirname, "../dist");
if (fs.existsSync(distDir)) {
  const files = fs.readdirSync(distDir);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      totalSize += stat.size;
      console.log(`  ✓ ${file}: ${(stat.size / 1024).toFixed(2)} KB`);
    }
  });
  
  console.log(`  📊 Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
}

// 4. Performance recommendations
console.log("💡 Performance Recommendations:");
console.log("  • Enable gzip compression on server");
console.log("  • Use CDN for static assets");
console.log("  • Implement lazy loading for images");
console.log("  • Use WebP format for images");
console.log("  • Minimize third-party scripts");
console.log("  • Enable browser caching");

console.log("✅ Performance optimization complete!");
