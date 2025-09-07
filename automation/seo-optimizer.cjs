#!/usr/bin/env node

/**
 * SEO Optimizer
 * Optimizes SEO elements and structure
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Starting SEO optimization...');

// SEO optimizer configuration
const config = {
  outputDir: path.join(__dirname, '..', 'seo-reports'),
  checks: {
    metaTags: true,
    headingStructure: true,
    imageAltText: true,
    internalLinks: true,
    pageTitles: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Check meta tags
function checkMetaTags(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for missing meta description
    if (content.includes('<Head>') || content.includes('<head>')) {
      if (!content.includes('meta name="description"')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-meta-description',
          severity: 'high',
          message: 'Missing meta description tag'
        });
      }
      
      // Check for missing viewport meta tag
      if (!content.includes('meta name="viewport"')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-viewport-meta',
          severity: 'high',
          message: 'Missing viewport meta tag'
        });
      }
    }
  });
  
  return issues;
}

// Check heading structure
function checkHeadingStructure(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for proper heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi);
    if (headings) {
      let lastLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.match(/<h([1-6])/)[1]);
        if (level > lastLevel + 1) {
          issues.push({
            file: path.relative(__dirname, file),
            type: 'heading-hierarchy',
            severity: 'medium',
            message: `Heading level ${level} follows level ${lastLevel}`
          });
        }
        lastLevel = level;
      });
    }
  });
  
  return issues;
}

// Check page titles
function checkPageTitles(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for missing or empty page titles
    if (content.includes('<Head>') || content.includes('<head>')) {
      const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i);
      if (!titleMatch || !titleMatch[1].trim()) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-page-title',
          severity: 'high',
          message: 'Missing or empty page title'
        });
      }
    }
  });
  
  return issues;
}

// Get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Run SEO audit
function runSEOAudit() {
  const srcDir = path.join(__dirname, '..', 'src');
  const componentsDir = path.join(__dirname, '..', 'components');
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  const audit = {
    timestamp: new Date().toISOString(),
    checks: {
      metaTags: checkMetaTags(srcDir).concat(checkMetaTags(componentsDir)).concat(checkMetaTags(pagesDir)),
      headingStructure: checkHeadingStructure(srcDir).concat(checkHeadingStructure(componentsDir)).concat(checkHeadingStructure(pagesDir)),
      pageTitles: checkPageTitles(srcDir).concat(checkPageTitles(componentsDir)).concat(checkPageTitles(pagesDir))
    },
    summary: {
      totalIssues: 0,
      highSeverity: 0,
      mediumSeverity: 0,
      lowSeverity: 0
    }
  };

  // Calculate summary
  Object.values(audit.checks).forEach(check => {
    audit.summary.totalIssues += check.length;
    check.forEach(issue => {
      if (issue.severity === 'high') audit.summary.highSeverity++;
      else if (issue.severity === 'medium') audit.summary.mediumSeverity++;
      else audit.summary.lowSeverity++;
    });
  });

  return audit;
}

// Save audit results
function saveAuditResults(audit) {
  const filename = `seo-audit-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(audit, null, 2));
  console.log(`🔍 SEO audit saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 SEO Audit Summary:`);
  console.log(`   Total Issues: ${audit.summary.totalIssues}`);
  console.log(`   High Severity: ${audit.summary.highSeverity}`);
  console.log(`   Medium Severity: ${audit.summary.mediumSeverity}`);
  console.log(`   Low Severity: ${audit.summary.lowSeverity}`);
}

// Main execution
try {
  const audit = runSEOAudit();
  saveAuditResults(audit);
  console.log('✅ SEO optimization completed');
} catch (error) {
  console.error('❌ SEO optimization failed:', error.message);
  process.exit(1);
}