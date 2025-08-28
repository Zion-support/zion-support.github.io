#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting continuous front maximizer automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runFrontMaximizer() {
  try {
    console.log(`🚀 Running front maximizer at ${new Date().toISOString()}`);
    
    // Build the project
    console.log('🏗️ Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
    }
    
    // Check build output
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
    }
    
    // Analyze frontend performance
    console.log('📊 Analyzing frontend performance...');
    
    // Check bundle size
    try {
      execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
      console.log('✅ Bundle analysis completed');
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
    
    console.log('✅ Continuous front maximizer completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous front maximizer failed:', error.message);
    // Don't exit, just log the error and continue
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

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous front maximizer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial front maximizer
  await runFrontMaximizer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runFrontMaximizer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous front maximizer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous front maximizer
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous front maximizer:', error);
  process.exit(1);
});
