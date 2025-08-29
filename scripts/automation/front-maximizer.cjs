#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎨 Starting continuous front maximizer automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runFrontMaximizer() {
  try {
    console.log(`🎨 Running front maximizer at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for front-end optimization...');
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
    
    // Analyze CSS optimization opportunities
    console.log('🎨 Analyzing CSS optimization opportunities...');
    const cssOptimizations = analyzeCSSOptimizations(distPath);
    if (cssOptimizations.length > 0) {
      console.log(`⚠️  Found ${cssOptimizations.length} CSS optimization opportunities:`);
      cssOptimizations.forEach(opt => {
        console.log(`  - ${opt.file}: ${opt.issue}`);
      });
    } else {
      console.log('✅ CSS appears to be well optimized');
    }
    
    // Analyze JavaScript optimization opportunities
    console.log('⚡ Analyzing JavaScript optimization opportunities...');
    const jsOptimizations = analyzeJSOptimizations(distPath);
    if (jsOptimizations.length > 0) {
      console.log(`⚠️  Found ${jsOptimizations.length} JavaScript optimization opportunities:`);
      jsOptimizations.forEach(opt => {
        console.log(`  - ${opt.file}: ${opt.issue}`);
      });
    } else {
      console.log('✅ JavaScript appears to be well optimized');
    }
    
    // Analyze HTML optimization opportunities
    console.log('🌐 Analyzing HTML optimization opportunities...');
    const htmlOptimizations = analyzeHTMLOptimizations(distPath);
    if (htmlOptimizations.length > 0) {
      console.log(`⚠️  Found ${htmlOptimizations.length} HTML optimization opportunities:`);
      htmlOptimizations.forEach(opt => {
        console.log(`  - ${opt.file}: ${opt.issue}`);
      });
    } else {
      console.log('✅ HTML appears to be well optimized');
    }
    
    // Check for image optimization opportunities
    console.log('🖼️  Analyzing image optimization opportunities...');
    const imageOptimizations = analyzeImageOptimizations(distPath);
    if (imageOptimizations.length > 0) {
      console.log(`⚠️  Found ${imageOptimizations.length} image optimization opportunities:`);
      imageOptimizations.forEach(opt => {
        console.log(`  - ${opt.file}: ${opt.issue}`);
      });
    } else {
      console.log('✅ Images appear to be well optimized');
    }
    
    // Check for accessibility improvements
    console.log('♿ Analyzing accessibility improvements...');
    const accessibilityIssues = analyzeAccessibility(distPath);
    if (accessibilityIssues.length > 0) {
      console.log(`⚠️  Found ${accessibilityIssues.length} accessibility issues:`);
      accessibilityIssues.forEach(issue => {
        console.log(`  - ${issue.file}: ${issue.issue}`);
      });
    } else {
      console.log('✅ Accessibility appears to be well implemented');
    }
    
    // Check for SEO optimization opportunities
    console.log('🔍 Analyzing SEO optimization opportunities...');
    const seoOptimizations = analyzeSEOOptimizations(distPath);
    if (seoOptimizations.length > 0) {
      console.log(`⚠️  Found ${seoOptimizations.length} SEO optimization opportunities:`);
      seoOptimizations.forEach(opt => {
        console.log(`  - ${opt.file}: ${opt.issue}`);
      });
    } else {
      console.log('✅ SEO appears to be well optimized');
    }
    
    // Generate front maximizer report
    console.log('📊 Generating front maximizer report...');
    const report = {
      timestamp: new Date().toISOString(),
      cssOptimizations: cssOptimizations.length,
      jsOptimizations: jsOptimizations.length,
      htmlOptimizations: htmlOptimizations.length,
      imageOptimizations: imageOptimizations.length,
      accessibilityIssues: accessibilityIssues.length,
      seoOptimizations: seoOptimizations.length,
      totalOptimizations: cssOptimizations.length + jsOptimizations.length + htmlOptimizations.length + 
                         imageOptimizations.length + accessibilityIssues.length + seoOptimizations.length,
      summary: `Front maximizer completed. Found ${cssOptimizations.length + jsOptimizations.length + htmlOptimizations.length + imageOptimizations.length + accessibilityIssues.length + seoOptimizations.length} optimization opportunities`,
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'front-maximizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Front maximizer report saved to ${reportPath}`);
    
    console.log('✅ Continuous front maximizer completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous front maximizer failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Front maximizer failed',
      status: 'error'
    };
    
    const reportPath = path.join(process.cwd(), 'front-maximizer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

function analyzeCSSOptimizations(distPath) {
  const optimizations = [];
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.css')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const size = stats.size;
        
        // Check for large CSS files
        if (size > 100 * 1024) { // Larger than 100KB
          optimizations.push({
            file: itemPath,
            issue: `Large CSS file (${(size / 1024).toFixed(2)} KB) - consider splitting or minifying`
          });
        }
        
        // Check for unused CSS rules
        if (content.includes('@import') && content.split('@import').length > 5) {
          optimizations.push({
            file: itemPath,
            issue: 'Multiple @import statements - consider consolidating'
          });
        }
        
        // Check for vendor prefixes
        if (content.includes('-webkit-') || content.includes('-moz-') || content.includes('-ms-')) {
          optimizations.push({
            file: itemPath,
            issue: 'Vendor prefixes found - consider using autoprefixer'
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return optimizations;
}

function analyzeJSOptimizations(distPath) {
  const optimizations = [];
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.js')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const size = stats.size;
        
        // Check for large JS files
        if (size > 500 * 1024) { // Larger than 500KB
          optimizations.push({
            file: itemPath,
            issue: `Large JavaScript file (${(size / 1024).toFixed(2)} KB) - consider code splitting`
          });
        }
        
        // Check for minification
        if (!content.includes(';') && content.length > 1000) {
          optimizations.push({
            file: itemPath,
            issue: 'JavaScript file appears unminified - consider minifying for production'
          });
        }
        
        // Check for source maps
        if (item.endsWith('.js.map')) {
          optimizations.push({
            file: itemPath,
            issue: 'Source map found - consider removing for production'
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return optimizations;
}

function analyzeHTMLOptimizations(distPath) {
  const optimizations = [];
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(dirPath);
      } else if (item.endsWith('.html')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        
        // Check for meta tags
        if (!content.includes('<meta name="description"') && !content.includes('<meta name="keywords"')) {
          optimizations.push({
            file: itemPath,
            issue: 'Missing meta description and keywords - important for SEO'
          });
        }
        
        // Check for viewport meta tag
        if (!content.includes('<meta name="viewport"')) {
          optimizations.push({
            file: itemPath,
            issue: 'Missing viewport meta tag - important for mobile optimization'
          });
        }
        
        // Check for alt attributes on images
        if (content.includes('<img') && content.includes('src=') && !content.includes('alt=')) {
          optimizations.push({
            file: itemPath,
            issue: 'Images missing alt attributes - important for accessibility'
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return optimizations;
}

function analyzeImageOptimizations(distPath) {
  const optimizations = [];
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(dirPath);
      } else if (item.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
        const size = stats.size;
        
        // Check for large images
        if (size > 500 * 1024) { // Larger than 500KB
          optimizations.push({
            file: itemPath,
            issue: `Large image file (${(size / 1024).toFixed(2)} KB) - consider compressing or using WebP format`
          });
        }
        
        // Check for PNG files that could be WebP
        if (item.endsWith('.png') && size > 100 * 1024) {
          optimizations.push({
            file: itemPath,
            issue: 'PNG file could be converted to WebP for better compression'
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return optimizations;
}

function analyzeAccessibility(distPath) {
  const issues = [];
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(dirPath);
      } else if (item.endsWith('.html')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        
        // Check for ARIA labels
        if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
          issues.push({
            file: itemPath,
            issue: 'Buttons missing ARIA labels - important for screen readers'
          });
        }
        
        // Check for form labels
        if (content.includes('<input') && !content.includes('<label') && !content.includes('aria-label')) {
          issues.push({
            file: itemPath,
            issue: 'Form inputs missing labels - important for accessibility'
          });
        }
        
        // Check for heading hierarchy
        if (content.includes('<h1') && content.includes('<h3') && !content.includes('<h2')) {
          issues.push({
            file: itemPath,
            issue: 'Heading hierarchy issue - h1 followed by h3 without h2'
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return issues;
}

function analyzeSEOOptimizations(distPath) {
  const optimizations = [];
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(dirPath);
      } else if (item.endsWith('.html')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        
        // Check for title tags
        if (!content.includes('<title>') || content.includes('<title></title>')) {
          optimizations.push({
            file: itemPath,
            issue: 'Missing or empty title tag - critical for SEO'
          });
        }
        
        // Check for Open Graph tags
        if (!content.includes('og:title') && !content.includes('og:description')) {
          optimizations.push({
            file: itemPath,
            issue: 'Missing Open Graph tags - important for social media sharing'
          });
        }
        
        // Check for structured data
        if (!content.includes('application/ld+json')) {
          optimizations.push({
            file: itemPath,
            issue: 'Missing structured data - can improve search engine understanding'
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return optimizations;
}

// Run the front maximizer immediately
runFrontMaximizer();

// Set up continuous execution
setInterval(runFrontMaximizer, AUTOMATION_INTERVAL);

console.log(`🎨 Front maximizer automation started. Running every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
console.log('Press Ctrl+C to stop the automation');