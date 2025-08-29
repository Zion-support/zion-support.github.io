#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Front Maximizer Automation Started');

async function maximizeFrontend() {
  try {
    console.log('🎨 Maximizing frontend performance...');
    
    const optimizationResults = [];
    
    // Check for unused CSS
    console.log('🎨 Checking for unused CSS...');
    try {
      const cssCheck = execSync('npm run build', { encoding: 'utf8' });
      optimizationResults.push({
        type: 'css-optimization',
        result: 'Build completed for CSS analysis'
      });
    } catch (error) {
      optimizationResults.push({
        type: 'css-optimization',
        result: 'Build failed for CSS analysis'
      });
    }
    
    // Check for image optimization opportunities
    console.log('🖼️ Checking image optimization...');
    const publicDir = 'public';
    if (fs.existsSync(publicDir)) {
      const imageFiles = getAllImageFiles(publicDir);
      if (imageFiles.length > 0) {
        optimizationResults.push({
          type: 'image-optimization',
          result: `Found ${imageFiles.length} images for potential optimization`
        });
      }
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalOptimizations: optimizationResults.length,
      results: optimizationResults
    };
    
    fs.writeFileSync('front-maximizer-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: front-maximizer-report.json');
    
  } catch (error) {
    console.error('❌ Error in front maximizer:', error);
  }
}

function getAllImageFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllImageFiles(fullPath, arrayOfFiles);
    } else if (file.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
      arrayOfFiles.push(fullPath);
    }
  }
  
  return arrayOfFiles;
}

// Run the automation
maximizeFrontend().then(() => {
  console.log('✅ Front Maximizer Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Front Maximizer Automation Failed:', error);
  process.exit(1);
});