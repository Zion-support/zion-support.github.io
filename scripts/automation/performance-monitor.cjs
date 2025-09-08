#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Performance Monitor Automation Started');

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

function runPerformanceMonitor() {
  console.log('📊 Starting performance monitoring process...');
  
  // Build project if needed
  if (!fs.existsSync('dist')) {
    console.log('🏗️ Building project for performance analysis...');
    runCommand('npm run build', 'Project build');
  }
  
  if (fs.existsSync('dist')) {
    console.log('📁 Analyzing build performance...');
    
    // Check bundle size
    const distStats = fs.statSync('dist');
    const totalSizeMB = (distStats.size / 1024 / 1024).toFixed(2);
    console.log(`📊 Total build size: ${totalSizeMB} MB`);
    
    // Analyze individual files
    const files = fs.readdirSync('dist');
    let jsSize = 0;
    let cssSize = 0;
    let otherSize = 0;
    
    files.forEach(file => {
      const filePath = path.join('dist', file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      
      if (file.endsWith('.js') || file.endsWith('.mjs')) {
        jsSize += stats.size;
        console.log(`  📄 ${file}: ${sizeKB} KB (JavaScript)`);
      } else if (file.endsWith('.css')) {
        cssSize += stats.size;
        console.log(`  🎨 ${file}: ${sizeKB} KB (CSS)`);
      } else {
        otherSize += stats.size;
        console.log(`  📁 ${file}: ${sizeKB} KB (Other)`);
      }
    });
    
    // Performance metrics
    const jsSizeMB = (jsSize / 1024 / 1024).toFixed(2);
    const cssSizeMB = (cssSize / 1024 / 1024).toFixed(2);
    const otherSizeMB = (otherSize / 1024 / 1024).toFixed(2);
    
    console.log('\n📊 Performance Summary:');
    console.log(`  JavaScript: ${jsSizeMB} MB`);
    console.log(`  CSS: ${cssSizeMB} MB`);
    console.log(`  Other: ${otherSizeMB} MB`);
    
    // Performance recommendations
    console.log('\n💡 Performance Recommendations:');
    
    if (jsSizeMB > 1) {
      console.log('  ⚠️ JavaScript bundle is large, consider code splitting');
    }
    
    if (cssSizeMB > 0.5) {
      console.log('  ⚠️ CSS bundle is large, consider purging unused styles');
    }
    
    if (totalSizeMB > 5) {
      console.log('  ⚠️ Total bundle size is large, consider optimization');
    }
    
    // Check for common performance issues
    console.log('\n🔍 Checking for performance issues...');
    
    // Look for large dependencies
    if (fs.existsSync('package.json')) {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const largeDeps = ['lodash', 'moment', 'date-fns', 'ramda'];
      largeDeps.forEach(dep => {
        if (dependencies[dep]) {
          console.log(`  ⚠️ Large dependency detected: ${dep}`);
        }
      });
    }
    
    // Check for duplicate dependencies
    try {
      const duplicateResult = execSync('npm ls --depth=0', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      if (duplicateResult.includes('UNMET PEER DEPENDENCY')) {
        console.log('  ⚠️ Peer dependency issues detected');
      }
    } catch (error) {
      // Ignore errors in dependency checking
    }
    
  } else {
    console.log('❌ Build failed, cannot analyze performance');
  }
  
  console.log('✅ Performance monitoring process completed');
}

// Main execution
runPerformanceMonitor();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
setInterval(runPerformanceMonitor, interval);

console.log(`⏰ Performance Monitor will run every ${interval / 60000} minutes`);