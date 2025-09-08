#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting continuous performance monitor automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

async function runPerformanceMonitor() {
  try {
    console.log(`⚡ Running performance monitor at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for performance analysis...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
    }
    
    // Analyze bundle size
    console.log('📊 Analyzing bundle size...');
    const bundleAnalysis = analyzeBundleSize(distPath);
    
    // Check for performance issues in source code
    console.log('🔍 Checking for performance issues in source code...');
    const performanceIssues = findPerformanceIssues('./src');
    
    // Check build performance
    console.log('⏱️ Checking build performance...');
    const buildPerformance = await measureBuildPerformance();
    
    // Check for large dependencies
    console.log('📦 Checking for large dependencies...');
    const largeDeps = await findLargeDependencies();
    
    // Generate performance report
    console.log('📊 Generating performance monitor report...');
    const report = {
      timestamp: new Date().toISOString(),
      bundleSize: bundleAnalysis,
      performanceIssues: performanceIssues.length,
      buildPerformance: buildPerformance,
      largeDependencies: largeDeps.length,
      details: {
        issues: performanceIssues,
        largeDeps: largeDeps
      },
      summary: 'Performance monitor completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (bundleAnalysis.totalSize > 1024 * 1024) { // > 1MB
      report.recommendations.push('Bundle size is large, consider code splitting and tree shaking');
    }
    
    if (performanceIssues.length > 0) {
      report.recommendations.push('Review performance issues in source code');
    }
    
    if (buildPerformance.buildTime > 30000) { // > 30 seconds
      report.recommendations.push('Build time is slow, consider optimizing build process');
    }
    
    if (largeDeps.length > 0) {
      report.recommendations.push('Review large dependencies for alternatives');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('Performance is within acceptable ranges');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Performance monitor report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Performance Monitor Summary:`);
    console.log(`  - Bundle size: ${(bundleAnalysis.totalSize / 1024).toFixed(2)} KB`);
    console.log(`  - Performance issues: ${performanceIssues.length}`);
    console.log(`  - Build time: ${buildPerformance.buildTime}ms`);
    console.log(`  - Large dependencies: ${largeDeps.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous performance monitor completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous performance monitor failed:', error.message);
  }
}

function analyzeBundleSize(distPath) {
  let totalSize = 0;
  let fileCount = 0;
  let largeFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else {
        const size = stat.size;
        totalSize += size;
        fileCount++;
        
        if (size > 100 * 1024) { // > 100KB
          largeFiles.push({
            file: filePath.replace(distPath, ''),
            size: size,
            sizeKB: (size / 1024).toFixed(2)
          });
        }
      }
    }
  }
  
  scanDirectory(distPath);
  
  return {
    totalSize,
    totalSizeKB: (totalSize / 1024).toFixed(2),
    fileCount,
    largeFiles: largeFiles.sort((a, b) => b.size - a.size)
  };
}

function findPerformanceIssues(srcPath) {
  const issues = [];
  
  if (!fs.existsSync(srcPath)) {
    return issues;
  }
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for common performance anti-patterns
        const patterns = [
          { pattern: /useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[\]\)/g, issue: 'Empty dependency array in useEffect' },
          { pattern: /\.map\([^)]*\)\.filter\([^)]*\)/g, issue: 'Chained array methods without optimization' },
          { pattern: /new\s+Date\(\)/g, issue: 'Creating new Date objects in render' },
          { pattern: /Math\.random\(\)/g, issue: 'Math.random() in render' },
          { pattern: /console\.log\(/g, issue: 'Console.log in production code' }
        ];
        
        patterns.forEach(({ pattern, issue }) => {
          const matches = content.match(pattern);
          if (matches) {
            issues.push({
              file: filePath.replace(srcPath, ''),
              issue,
              count: matches.length
            });
          }
        });
      }
    }
  }
  
  scanDirectory(srcPath);
  return issues;
}

async function measureBuildPerformance() {
  const startTime = Date.now();
  
  try {
    execSync('npm run build', { stdio: 'pipe' });
    const buildTime = Date.now() - startTime;
    return { buildTime, success: true };
  } catch (error) {
    const buildTime = Date.now() - startTime;
    return { buildTime, success: false, error: error.message };
  }
}

async function findLargeDependencies() {
  try {
    const output = execSync('npm list --depth=0 --json', { 
      stdio: 'pipe',
      encoding: 'utf8'
    });
    
    const data = JSON.parse(output);
    const largeDeps = [];
    
    if (data.dependencies) {
      Object.entries(data.dependencies).forEach(([name, info]) => {
        if (info.size && info.size > 1024 * 1024) { // > 1MB
          largeDeps.push({
            name,
            size: info.size,
            sizeMB: (info.size / (1024 * 1024)).toFixed(2)
          });
        }
      });
    }
    
    return largeDeps;
  } catch (error) {
    console.log('⚠️  Could not analyze dependency sizes');
    return [];
  }
}

// Main execution loop
async function main() {
  console.log(`🚀 Performance monitor automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runPerformanceMonitor();
  
  // Set up continuous execution
  setInterval(async () => {
    await runPerformanceMonitor();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Performance monitor automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Performance monitor automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Performance monitor automation failed to start:', error);
  process.exit(1);
});