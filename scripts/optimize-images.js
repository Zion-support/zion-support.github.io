#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🖼️  Starting image optimization...');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
const publicDir = path.join(__dirname, '..', 'public');
const mediaDir = path.join(__dirname, '..', 'media');

function findImages(dir) {
  const images = [];
  
  if (!fs.existsSync(dir)) {
    return images;
  }
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      images.push(...findImages(fullPath));
    } else if (imageExtensions.some(ext => file.name.toLowerCase().endsWith(ext))) {
      images.push(fullPath);
    }
  }
  
  return images;
}

function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const dir = path.dirname(imagePath);
    const name = path.basename(imagePath, ext);
    
    // Create optimized versions
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      // Convert to WebP
      const webpPath = path.join(dir, `${name}.webp`);
      if (!fs.existsSync(webpPath)) {
        execSync(`cwebp -q 80 "${imagePath}" -o "${webpPath}"`, { stdio: 'pipe' });
        console.log(`✅ Created WebP: ${webpPath}`);
      }
      
      // Create responsive sizes
      const sizes = [320, 640, 768, 1024, 1280, 1920];
      for (const size of sizes) {
        const responsivePath = path.join(dir, `${name}-${size}w${ext}`);
        if (!fs.existsSync(responsivePath)) {
          execSync(`convert "${imagePath}" -resize ${size}x -quality 85 "${responsivePath}"`, { stdio: 'pipe' });
          console.log(`✅ Created ${size}w: ${responsivePath}`);
        }
      }
    }
    
    return true;
  } catch (error) {
    console.warn(`⚠️  Failed to optimize ${imagePath}: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🔍 Scanning for images...');
    
    const publicImages = findImages(publicDir);
    const mediaImages = findImages(mediaDir);
    const allImages = [...publicImages, ...mediaImages];
    
    console.log(`📊 Found ${allImages.length} images to optimize`);
    
    let optimized = 0;
    let failed = 0;
    
    for (const image of allImages) {
      if (optimizeImage(image)) {
        optimized++;
      } else {
        failed++;
      }
    }
    
    console.log(`\n📈 Optimization Summary:`);
    console.log(`✅ Successfully optimized: ${optimized}`);
    console.log(`❌ Failed to optimize: ${failed}`);
    console.log(`📊 Total processed: ${allImages.length}`);
    
    // Generate optimization report
    const report = {
      timestamp: new Date().toISOString(),
      totalImages: allImages.length,
      optimized: optimized,
      failed: failed,
      successRate: `${((optimized / allImages.length) * 100).toFixed(2)}%`
    };
    
    fs.writeFileSync(
      path.join(__dirname, '..', 'image-optimization-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('📄 Report saved to image-optimization-report.json');
    
  } catch (error) {
    console.error('❌ Image optimization failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, findImages };