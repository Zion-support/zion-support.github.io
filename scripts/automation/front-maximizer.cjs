#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Front Maximizer Automation Started');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

function runFrontMaximizer() {
  console.log('🎯 Starting front-end optimization process...');
  
  // Build project
  console.log('🏗️ Building project...');
  const buildResult = runCommand('npm run build', 'Project build');
  
  if (buildResult) {
    console.log('✅ Build successful! Starting optimization...');
    
    // Analyze current build
    if (fs.existsSync('dist')) {
      console.log('📊 Analyzing current build...');
      
      const files = fs.readdirSync('dist');
      let totalSize = 0;
      let jsFiles = [];
      let cssFiles = [];
      let otherFiles = [];
      
      files.forEach(file => {
        const filePath = path.join('dist', file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        
        if (file.endsWith('.js') || file.endsWith('.mjs')) {
          jsFiles.push({ name: file, size: stats.size });
        } else if (file.endsWith('.css')) {
          cssFiles.push({ name: file, size: stats.size });
        } else {
          otherFiles.push({ name: file, size: stats.size });
        }
      });
      
      console.log(`📁 Total build size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`📄 JavaScript files: ${jsFiles.length}`);
      console.log(`🎨 CSS files: ${cssFiles.length}`);
      console.log(`📁 Other files: ${otherFiles.length}`);
      
      // JavaScript optimization recommendations
      if (jsFiles.length > 0) {
        console.log('\n💡 JavaScript Optimization Recommendations:');
        
        jsFiles.forEach(file => {
          const sizeMB = (file.size / 1024 / 1024).toFixed(2);
          if (file.size > 500 * 1024) { // > 500KB
            console.log(`  ⚠️ ${file.name} is large (${sizeMB} MB), consider code splitting`);
          }
        });
        
        if (jsFiles.length > 3) {
          console.log('  ⚠️ Many JavaScript files detected, consider bundling');
        }
      }
      
      // CSS optimization recommendations
      if (cssFiles.length > 0) {
        console.log('\n💡 CSS Optimization Recommendations:');
        
        cssFiles.forEach(file => {
          const sizeKB = (file.size / 1024).toFixed(2);
          if (file.size > 100 * 1024) { // > 100KB
            console.log(`  ⚠️ ${file.name} is large (${sizeKB} KB), consider purging unused styles`);
          }
        });
        
        if (cssFiles.length > 2) {
          console.log('  ⚠️ Multiple CSS files detected, consider combining');
        }
      }
      
      // Check for common optimization opportunities
      console.log('\n🔍 Checking for optimization opportunities...');
      
      // Check for unused CSS
      if (cssFiles.length > 0) {
        console.log('  📊 CSS analysis:');
        cssFiles.forEach(file => {
          const filePath = path.join('dist', file.name);
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n').length;
          const sizeKB = (file.size / 1024).toFixed(2);
          console.log(`    ${file.name}: ${lines} lines, ${sizeKB} KB`);
        });
      }
      
      // Check for large dependencies
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        const heavyDeps = ['lodash', 'moment', 'date-fns', 'ramda', 'underscore'];
        heavyDeps.forEach(dep => {
          if (dependencies[dep]) {
            console.log(`  ⚠️ Heavy dependency detected: ${dep}`);
          }
        });
      }
      
      // Performance optimization suggestions
      console.log('\n🚀 Performance Optimization Suggestions:');
      console.log('  1. Enable gzip compression on your server');
      console.log('  2. Use CDN for static assets');
      console.log('  3. Implement lazy loading for images');
      console.log('  4. Use service workers for caching');
      console.log('  5. Optimize images (WebP format, proper sizing)');
      
    } else {
      console.log('❌ Build directory not found');
    }
    
  } else {
    console.log('❌ Build failed, cannot optimize');
  }
  
  console.log('✅ Front maximizer process completed');
}

// Main execution
runFrontMaximizer();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour default
setInterval(runFrontMaximizer, interval);

console.log(`⏰ Front Maximizer will run every ${interval / 60000} minutes`);