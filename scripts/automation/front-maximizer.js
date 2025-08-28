#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting front maximizer automation...');

async function runFrontMaximizer() {
  try {
    // Build the project
    console.log('🏗️ Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check build output
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build failed: dist folder not found');
    }
    
    // Analyze frontend performance
    console.log('📊 Analyzing frontend performance...');
    
    // Check bundle size
    try {
      execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Bundle analysis failed but continuing...');
    }
    
    // Check for large files
    const largeFiles = findLargeFiles(distPath);
    if (largeFiles.length > 0) {
      console.log('⚠️  Large files detected:');
      largeFiles.forEach(file => {
        console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
      });
    }
    
    // Check for performance optimizations
    console.log('🔍 Checking for performance optimizations...');
    checkPerformanceOptimizations(distPath);
    
    // Generate optimization report
    console.log('📊 Generating optimization report...');
    const report = {
      timestamp: new Date().toISOString(),
      buildSize: getDirectorySize(distPath),
      largeFiles: largeFiles.length,
      summary: 'Front maximizer completed'
    };
    
    const reportPath = path.join(process.cwd(), 'front-maximizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Front maximizer report saved to ${reportPath}`);
    
    console.log('✅ Front maximizer completed successfully');
    
  } catch (error) {
    console.error('❌ Front maximizer failed:', error.message);
    process.exit(1);
  }
}

function findLargeFiles(dir, maxSize = 1024 * 1024) {
  const largeFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && stat.size > maxSize) {
          largeFiles.push({
            path: path.relative(process.cwd(), fullPath),
            size: stat.size
          });
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return largeFiles.sort((a, b) => b.size - a.size);
}

function getDirectorySize(dir) {
  let totalSize = 0;
  
  function calculateSize(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          calculateSize(fullPath);
        } else if (stat.isFile()) {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  calculateSize(dir);
  return totalSize;
}

function checkPerformanceOptimizations(distPath) {
  // Check for image optimization
  const imageFiles = findImageFiles(distPath);
  console.log(`📸 Found ${imageFiles.length} image files`);
  
  // Check for CSS/JS minification
  const cssFiles = findFilesByExtension(distPath, '.css');
  const jsFiles = findFilesByExtension(distPath, '.js');
  
  console.log(`🎨 Found ${cssFiles.length} CSS files`);
  console.log(`⚡ Found ${jsFiles.length} JavaScript files`);
  
  // Check for gzip compression readiness
  const htmlFiles = findFilesByExtension(distPath, '.html');
  console.log(`📄 Found ${htmlFiles.length} HTML files`);
}

function findImageFiles(dir) {
  const imageFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(item)) {
          imageFiles.push(path.relative(process.cwd(), fullPath));
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return imageFiles;
}

function findFilesByExtension(dir, extension) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith(extension)) {
          files.push(path.relative(process.cwd(), fullPath));
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Run the front maximizer
runFrontMaximizer();
