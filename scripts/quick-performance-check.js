#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Running quick performance check...');

// Check bundle size
const distPath = path.join(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.statSync(filePath).isFile()) {
      totalSize += fs.statSync(filePath).size;
    }
  });
  
  console.log(`📦 Bundle size: ${Math.round(totalSize / (1024 * 1024) * 100) / 100}MB`);
  
  if (totalSize > 5000000) {
    console.log('⚠️  Bundle size is large (>5MB). Consider optimization.');
  } else {
    console.log('✅ Bundle size looks good.');
  }
} else {
  console.log('📦 No dist folder found. Run npm run build first.');
}

// Check for large images
const publicPath = path.join(process.cwd(), 'public');
if (fs.existsSync(publicPath)) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  let largeImages = 0;
  
  function checkImages(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        checkImages(filePath);
      } else if (stat.isFile() && imageExtensions.includes(path.extname(file).toLowerCase())) {
        if (stat.size > 500000) { // 500KB
          largeImages++;
        }
      }
    });
  }
  
  checkImages(publicPath);
  
  if (largeImages > 0) {
    console.log(`⚠️  Found ${largeImages} large images. Consider compression.`);
  } else {
    console.log('✅ Image sizes look good.');
  }
}

console.log('✅ Performance check completed!');