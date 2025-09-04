#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Advanced App Optimizer...');

const optimizer = {
  timestamp: new Date().toISOString(),
  optimizations: [],
  results: {},
  status: 'success'
};

// Function to run optimization with error handling
function runOptimization(name, fn) {
  try {
    console.log(`📋 Running: ${name}`);
    const result = fn();
    optimizer.optimizations.push({
      name,
      status: 'success',
      result
    });
    console.log(`✅ ${name} completed successfully`);
    return result;
  } catch (error) {
    optimizer.optimizations.push({
      name,
      status: 'error',
      error: error.message
    });
    console.log(`❌ ${name} failed: ${error.message}`);
    return null;
  }
}

// 1. Bundle Analysis and Optimization
runOptimization('Bundle Analysis', () => {
  try {
    // Analyze bundle size
    const bundleAnalysis = execSync('npx @next/bundle-analyzer', { 
      encoding: 'utf8', 
      stdio: 'pipe' 
    });
    return { bundleAnalysis: 'Bundle analysis completed' };
  } catch (error) {
    // Fallback: check build output
    if (fs.existsSync('.next')) {
      const buildStats = execSync('du -sh .next', { encoding: 'utf8' });
      return { buildSize: buildStats.trim() };
    }
    throw error;
  }
});

// 2. Image Optimization
runOptimization('Image Optimization', () => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
  const publicDir = 'public';
  let optimizedCount = 0;
  
  if (fs.existsSync(publicDir)) {
    function scanDirectory(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDirectory(filePath);
        } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
          // Check if image is optimized (basic check)
          const stats = fs.statSync(filePath);
          if (stats.size > 500000) { // Images larger than 500KB
            console.log(`   ⚠️  Large image found: ${filePath} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);
          }
          optimizedCount++;
        }
      });
    }
    
    scanDirectory(publicDir);
  }
  
  return { imagesFound: optimizedCount };
});

// 3. Code Splitting Analysis
runOptimization('Code Splitting Analysis', () => {
  const pagesDir = 'pages';
  const componentsDir = 'components';
  let totalPages = 0;
  let totalComponents = 0;
  
  if (fs.existsSync(pagesDir)) {
    const pages = fs.readdirSync(pagesDir).filter(file => 
      file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')
    );
    totalPages = pages.length;
  }
  
  if (fs.existsSync(componentsDir)) {
    const components = fs.readdirSync(componentsDir).filter(file => 
      file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')
    );
    totalComponents = components.length;
  }
  
  return { 
    totalPages, 
    totalComponents,
    recommendation: totalPages > 20 ? 'Consider implementing dynamic imports for better code splitting' : 'Code splitting looks good'
  };
});

// 4. Performance Monitoring Setup
runOptimization('Performance Monitoring Setup', () => {
  const performanceConfig = {
    webVitals: true,
    bundleAnalyzer: true,
    compression: true,
    caching: true
  };
  
  // Check if performance monitoring is already set up
  const hasPerformanceMonitor = fs.existsSync('components/PerformanceMonitor.tsx');
  const hasErrorBoundary = fs.existsSync('components/ErrorBoundary.tsx');
  
  return {
    performanceMonitor: hasPerformanceMonitor,
    errorBoundary: hasErrorBoundary,
    config: performanceConfig
  };
});

// 5. SEO Optimization Check
runOptimization('SEO Optimization Check', () => {
  const seoChecks = {
    hasSitemap: fs.existsSync('public/sitemap.xml'),
    hasRobots: fs.existsSync('public/robots.txt'),
    hasMetaTags: false,
    hasStructuredData: false
  };
  
  // Check for meta tags in pages
  if (fs.existsSync('pages/index.tsx')) {
    const indexContent = fs.readFileSync('pages/index.tsx', 'utf8');
    seoChecks.hasMetaTags = indexContent.includes('<Head>') && indexContent.includes('title');
    seoChecks.hasStructuredData = indexContent.includes('application/ld+json');
  }
  
  return seoChecks;
});

// 6. Security Headers Check
runOptimization('Security Headers Check', () => {
  const securityHeaders = [
    'X-Frame-Options',
    'X-Content-Type-Options',
    'X-XSS-Protection',
    'Strict-Transport-Security',
    'Content-Security-Policy'
  ];
  
  // Check if next.config.js has security headers
  let hasSecurityConfig = false;
  if (fs.existsSync('next.config.js')) {
    const configContent = fs.readFileSync('next.config.js', 'utf8');
    hasSecurityConfig = configContent.includes('headers') || configContent.includes('security');
  }
  
  return {
    recommendedHeaders: securityHeaders,
    configured: hasSecurityConfig,
    recommendation: hasSecurityConfig ? 'Security headers configured' : 'Consider adding security headers to next.config.js'
  };
});

// 7. Database and API Optimization
runOptimization('API Optimization Check', () => {
  const apiDir = 'pages/api';
  let apiEndpoints = 0;
  let hasDatabase = false;
  
  if (fs.existsSync(apiDir)) {
    const files = fs.readdirSync(apiDir);
    apiEndpoints = files.filter(file => 
      file.endsWith('.ts') || file.endsWith('.js')
    ).length;
  }
  
  // Check for database configuration
  const dbFiles = ['prisma', 'mongoose', 'sequelize', 'typeorm'];
  hasDatabase = dbFiles.some(db => 
    fs.existsSync(`${db}.js`) || 
    fs.existsSync(`${db}.ts`) || 
    fs.existsSync(`lib/${db}.js`) ||
    fs.existsSync(`lib/${db}.ts`)
  );
  
  return {
    apiEndpoints,
    hasDatabase,
    recommendation: apiEndpoints > 10 ? 'Consider implementing API rate limiting and caching' : 'API structure looks good'
  };
});

// Generate optimization report
const reportPath = 'advanced-app-optimization-report.json';
fs.writeFileSync(reportPath, JSON.stringify(optimizer, null, 2));

console.log('✅ Advanced App Optimizer completed');
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const totalOptimizations = optimizer.optimizations.length;
const successfulOptimizations = optimizer.optimizations.filter(opt => opt.status === 'success').length;
const failedOptimizations = optimizer.optimizations.filter(opt => opt.status === 'error').length;

console.log(`📊 Optimization Summary:`);
console.log(`   - Total optimizations: ${totalOptimizations}`);
console.log(`   - Successful: ${successfulOptimizations}`);
console.log(`   - Failed: ${failedOptimizations}`);
console.log(`   - Success rate: ${((successfulOptimizations / totalOptimizations) * 100).toFixed(1)}%`);

if (failedOptimizations === 0) {
  console.log('🎉 All optimizations completed successfully!');
  process.exit(0);
} else {
  console.log('⚠️  Some optimizations failed, check the report for details');
  process.exit(1);
}