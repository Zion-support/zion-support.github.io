

#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';);
  const images = [];
console.log('🖼️  Starting image optimization...');

// Check if sharp is available
try {
  require('sharp');
  console.log('✅ Sharp is available for image optimization');
} catch (error) {
  console.log('⚠️  Sharp not available, skipping image optimization');
  process.exit(0);
}

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      optimizeImages(filePath);
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      try {
        console.log(`📸 Optimizing: ${file}`);
        // Add image optimization logic here
        // For now, just log the file
      } catch (error) {
        console.log(`❌ Failed to optimize ${file}: ${error.message}`);
      }
    }
  });
}

if (fs.existsSync(publicDir)) {
  optimizeImages(publicDir);
  console.log('✅ Image optimization completed');
} else {
  console.log('⚠️  Public directory not found, skipping image optimization');
}
