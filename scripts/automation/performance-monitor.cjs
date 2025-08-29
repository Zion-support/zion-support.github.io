#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path'); // Added missing import for path

console.log('⚡ Starting Performance Monitor Automation...');

// Function to measure build time
function measureBuildTime() {
  try {
    console.log('🔨 Measuring build performance...');
    const startTime = Date.now();
    
    execSync('npm run build', { stdio: 'pipe' });
    
    const endTime = Date.now();
    const buildTime = endTime - startTime;
    
    return {
      buildTime: buildTime,
      buildTimeSeconds: Math.round(buildTime / 1000)
    };
  } catch (error) {
    console.log('⚠️  Build failed during performance measurement:', error.message);
    return null;
  }
}

// Function to analyze bundle size
function analyzeBundleSize() {
  try {
    console.log('📦 Analyzing bundle size...');
    
    if (!fs.existsSync('./dist')) {
      console.log('⚠️  Dist directory not found. Cannot analyze bundle size.');
      return null;
    }
    
    const bundleAnalysis = {
      totalSize: 0,
      fileCount: 0,
      files: [],
      largestFiles: []
    };
    
    function analyzeDirectory(dir, basePath = '') {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          analyzeDirectory(fullPath, relativePath);
        } else {
          const size = stat.size;
          const fileInfo = {
            path: relativePath,
            size: size,
            sizeKB: Math.round(size / 1024 * 100) / 100
          };
          
          bundleAnalysis.files.push(fileInfo);
          bundleAnalysis.totalSize += size;
          bundleAnalysis.fileCount++;
        }
      }
    }
    
    analyzeDirectory('./dist');
    
    // Sort files by size to find largest ones
    bundleAnalysis.files.sort((a, b) => b.size - a.size);
    bundleAnalysis.largestFiles = bundleAnalysis.files.slice(0, 10);
    bundleAnalysis.totalSizeMB = Math.round(bundleAnalysis.totalSize / (1024 * 1024) * 100) / 100;
    
    return bundleAnalysis;
  } catch (error) {
    console.log('⚠️  Could not analyze bundle size:', error.message);
    return null;
  }
}

// Function to check TypeScript compilation performance
function checkTypeScriptPerformance() {
  try {
    console.log('🔍 Checking TypeScript compilation performance...');
    const startTime = Date.now();
    
    execSync('npm run type-check', { stdio: 'pipe' });
    
    const endTime = Date.now();
    const typeCheckTime = endTime - startTime;
    
    return {
      typeCheckTime: typeCheckTime,
      typeCheckTimeSeconds: Math.round(typeCheckTime / 1000)
    };
  } catch (error) {
    console.log('⚠️  TypeScript check failed during performance measurement:', error.message);
    return null;
  }
}

// Function to check linting performance
function checkLintingPerformance() {
  try {
    console.log('🧹 Checking linting performance...');
    const startTime = Date.now();
    
    execSync('npm run lint', { stdio: 'pipe' });
    
    const endTime = Date.now();
    const lintTime = endTime - startTime;
    
    return {
      lintTime: lintTime,
      lintTimeSeconds: Math.round(lintTime / 1000)
    };
  } catch (error) {
    console.log('⚠️  Linting failed during performance measurement:', error.message);
    return null;
  }
}

// Function to check memory usage
function checkMemoryUsage() {
  try {
    console.log('💾 Checking memory usage...');
    
    const processInfo = process.memoryUsage();
    const memoryInfo = {
      rss: Math.round(processInfo.rss / 1024 / 1024 * 100) / 100, // MB
      heapTotal: Math.round(processInfo.heapTotal / 1024 / 1024 * 100) / 100, // MB
      heapUsed: Math.round(processInfo.heapUsed / 1024 / 1024 * 100) / 100, // MB
      external: Math.round(processInfo.external / 1024 / 1024 * 100) / 100, // MB
      arrayBuffers: Math.round(processInfo.arrayBuffers / 1024 / 1024 * 100) / 100 // MB
    };
    
    return memoryInfo;
  } catch (error) {
    console.log('⚠️  Could not check memory usage:', error.message);
    return null;
  }
}

// Function to check system resources
function checkSystemResources() {
  try {
    console.log('🖥️  Checking system resources...');
    
    // Check available disk space
    const diskSpace = execSync('df -h . | tail -1', { encoding: 'utf8' });
    const diskInfo = diskSpace.trim().split(/\s+/);
    
    // Check available memory
    const memoryInfo = execSync('free -h | grep Mem', { encoding: 'utf8' });
    const memInfo = memoryInfo.trim().split(/\s+/);
    
    return {
      diskSpace: {
        total: diskInfo[1],
        used: diskInfo[2],
        available: diskInfo[3],
        usagePercent: diskInfo[4]
      },
      memory: {
        total: memInfo[1],
        used: memInfo[2],
        free: memInfo[3],
        shared: memInfo[4],
        cache: memInfo[5],
        available: memInfo[6]
      }
    };
  } catch (error) {
    console.log('⚠️  Could not check system resources:', error.message);
    return null;
  }
}

// Function to generate performance report
function generatePerformanceReport(buildTime, bundleSize, typeCheckTime, lintTime, memoryUsage, systemResources) {
  const report = {
    timestamp: new Date().toISOString(),
    buildPerformance: buildTime,
    bundleAnalysis: bundleSize,
    typeScriptPerformance: typeCheckTime,
    lintingPerformance: lintTime,
    memoryUsage: memoryUsage,
    systemResources: systemResources,
    summary: {
      buildTimeSeconds: buildTime?.buildTimeSeconds || 0,
      bundleSizeMB: bundleSize?.totalSizeMB || 0,
      fileCount: bundleSize?.fileCount || 0,
      typeCheckTimeSeconds: typeCheckTime?.typeCheckTimeSeconds || 0,
      lintTimeSeconds: lintTime?.lintTimeSeconds || 0
    }
  };
  
  return report;
}

// Function to provide performance recommendations
function providePerformanceRecommendations(report) {
  console.log('\n📋 Performance Recommendations:');
  
  // Build performance
  if (report.summary.buildTimeSeconds > 60) {
    console.log('\n🔨 Build performance can be improved:');
    console.log(`Current build time: ${report.summary.buildTimeSeconds}s`);
    console.log('Recommendations:');
    console.log('1. Enable build caching');
    console.log('2. Use parallel builds');
    console.log('3. Optimize webpack/vite configuration');
    console.log('4. Consider using build tools like esbuild');
  }
  
  // Bundle size
  if (report.summary.bundleSizeMB > 5) {
    console.log('\n📦 Bundle size can be optimized:');
    console.log(`Current bundle size: ${report.summary.bundleSizeMB}MB`);
    console.log('Recommendations:');
    console.log('1. Enable tree shaking');
    console.log('2. Use code splitting');
    console.log('3. Analyze bundle with webpack-bundle-analyzer');
    console.log('4. Consider lazy loading for routes');
  }
  
  // TypeScript performance
  if (report.summary.typeCheckTimeSeconds > 30) {
    console.log('\n🔍 TypeScript compilation can be optimized:');
    console.log(`Current type check time: ${report.summary.typeCheckTimeSeconds}s`);
    console.log('Recommendations:');
    console.log('1. Enable incremental compilation');
    console.log('2. Use project references');
    console.log('3. Exclude unnecessary files from compilation');
    console.log('4. Consider using swc for faster compilation');
  }
  
  // Linting performance
  if (report.summary.lintTimeSeconds > 20) {
    console.log('\n🧹 Linting can be optimized:');
    console.log(`Current lint time: ${report.summary.lintTimeSeconds}s`);
    console.log('Recommendations:');
    console.log('1. Use lint-staged for staged files only');
    console.log('2. Configure ESLint rules efficiently');
    console.log('3. Use parallel linting');
    console.log('4. Consider using faster linters like Rome');
  }
  
  if (report.summary.buildTimeSeconds <= 60 && 
      report.summary.bundleSizeMB <= 5 && 
      report.summary.typeCheckTimeSeconds <= 30 && 
      report.summary.lintTimeSeconds <= 20) {
    console.log('\n✅ Performance is within acceptable ranges!');
  }
  
  console.log('\n📚 General performance tips:');
  console.log('1. Monitor performance metrics regularly');
  console.log('2. Use performance profiling tools');
  console.log('3. Implement caching strategies');
  console.log('4. Optimize critical rendering paths');
}

// Main function
async function runPerformanceMonitor() {
  try {
    console.log('🚀 Starting comprehensive performance monitoring...');
    
    // Run various performance checks
    const buildTime = measureBuildTime();
    const bundleSize = analyzeBundleSize();
    const typeCheckTime = checkTypeScriptPerformance();
    const lintTime = checkLintingPerformance();
    const memoryUsage = checkMemoryUsage();
    const systemResources = checkSystemResources();
    
    // Generate comprehensive report
    const performanceReport = generatePerformanceReport(
      buildTime,
      bundleSize,
      typeCheckTime,
      lintTime,
      memoryUsage,
      systemResources
    );
    
    // Save detailed report
    fs.writeFileSync('./performance-monitor-report.json', JSON.stringify(performanceReport, null, 2));
    
    // Display summary
    console.log('\n📊 Performance Monitoring Summary:');
    console.log(`Build time: ${performanceReport.summary.buildTimeSeconds}s`);
    console.log(`Bundle size: ${performanceReport.summary.bundleSizeMB}MB`);
    console.log(`File count: ${performanceReport.summary.fileCount}`);
    console.log(`Type check time: ${performanceReport.summary.typeCheckTimeSeconds}s`);
    console.log(`Lint time: ${performanceReport.summary.lintTimeSeconds}s`);
    
    // Provide recommendations
    providePerformanceRecommendations(performanceReport);
    
    console.log('\n⚡ Performance Monitor Automation completed successfully!');
    console.log('📄 Detailed report saved to: performance-monitor-report.json');
    
  } catch (error) {
    console.error('❌ Error in Performance Monitor Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runPerformanceMonitor();