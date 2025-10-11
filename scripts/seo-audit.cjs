const fs = require('fs');
const path = require('path');

console.log('Running SEO audit...');

// Check for required meta tags
function checkMetaTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Check for title tag
  if (!content.includes('<title>')) {
    issues.push('Missing <title> tag');
  }
  
  // Check for meta description
  if (!content.includes('name="description"')) {
    issues.push('Missing meta description');
  }
  
  // Check for viewport meta tag
  if (!content.includes('name="viewport"')) {
    issues.push('Missing viewport meta tag');
  }
  
  // Check for Open Graph tags
  if (!content.includes('property="og:title"')) {
    issues.push('Missing Open Graph title');
  }
  
  if (!content.includes('property="og:description"')) {
    issues.push('Missing Open Graph description');
  }
  
  if (!content.includes('property="og:image"')) {
    issues.push('Missing Open Graph image');
  }
  
  // Check for Twitter Card tags
  if (!content.includes('name="twitter:card"')) {
    issues.push('Missing Twitter Card');
  }
  
  return issues;
}

// Check for alt attributes on images
function checkImageAltTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Find all img tags
  const imgRegex = /<img[^>]*>/g;
  const imgTags = content.match(imgRegex) || [];
  
  imgTags.forEach((imgTag, index) => {
    if (!imgTag.includes('alt=')) {
      issues.push(`Image ${index + 1} missing alt attribute`);
    }
  });
  
  return issues;
}

// Check for heading structure
function checkHeadingStructure(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Find all heading tags
  const headingRegex = /<h([1-6])[^>]*>([^<]*)<\/h[1-6]>/g;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      text: match[2].trim()
    });
  }
  
  // Check for h1 tag
  const h1Tags = headings.filter(h => h.level === 1);
  if (h1Tags.length === 0) {
    issues.push('Missing H1 tag');
  } else if (h1Tags.length > 1) {
    issues.push('Multiple H1 tags found');
  }
  
  // Check heading hierarchy
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    if (heading.level > previousLevel + 1) {
      issues.push(`Heading hierarchy issue: H${heading.level} after H${previousLevel}`);
    }
    previousLevel = heading.level;
  });
  
  return issues;
}

// Check for internal links
function checkInternalLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Find all internal links
  const linkRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('/') || href.includes('ziontechgroup.com')) {
      links.push(href);
    }
  }
  
  // Check for broken internal links (simplified check)
  const brokenLinks = links.filter(link => {
    // This is a simplified check - in a real audit, you'd check if the page exists
    return link.includes('#') && !content.includes(`id="${link.split('#')[1]}"`);
  });
  
  if (brokenLinks.length > 0) {
    issues.push(`Potential broken internal links: ${brokenLinks.join(', ')}`);
  }
  
  return issues;
}

// Check for performance issues
function checkPerformanceIssues(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Check for large images without optimization
  const imgRegex = /<img[^>]*src=["']([^"']*)["'][^>]*>/g;
  const images = [];
  let match;
  
  while ((match = imgRegex.exec(content)) !== null) {
    images.push(match[1]);
  }
  
  // Check for inline styles (should be in CSS files)
  const inlineStyleRegex = /style=["'][^"']*["']/g;
  const inlineStyles = content.match(inlineStyleRegex) || [];
  if (inlineStyles.length > 5) {
    issues.push('Too many inline styles - consider moving to CSS files');
  }
  
  // Check for script tags in head (should be at bottom)
  const headScriptRegex = /<head[^>]*>[\s\S]*?<script[^>]*>[\s\S]*?<\/script>[\s\S]*?<\/head>/i;
  if (headScriptRegex.test(content)) {
    issues.push('Script tags found in head - consider moving to bottom of body');
  }
  
  return issues;
}

// Generate SEO report
function generateSEOReport() {
  const report = {
    timestamp: new Date().toISOString(),
    pages: [],
    summary: {
      totalPages: 0,
      totalIssues: 0,
      criticalIssues: 0,
      warnings: 0
    }
  };
  
  // Check all HTML files in the dist directory
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('Dist directory not found. Run build first.');
    return;
  }
  
  const files = fs.readdirSync(distPath, { recursive: true });
  const htmlFiles = files.filter(file => file.endsWith('.html'));
  
  htmlFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    const pageReport = {
      file: file,
      issues: [],
      score: 100
    };
    
    // Run all checks
    const metaIssues = checkMetaTags(filePath);
    const altIssues = checkImageAltTags(filePath);
    const headingIssues = checkHeadingStructure(filePath);
    const linkIssues = checkInternalLinks(filePath);
    const performanceIssues = checkPerformanceIssues(filePath);
    
    pageReport.issues = [
      ...metaIssues.map(issue => ({ type: 'critical', message: issue })),
      ...altIssues.map(issue => ({ type: 'warning', message: issue })),
      ...headingIssues.map(issue => ({ type: 'warning', message: issue })),
      ...linkIssues.map(issue => ({ type: 'warning', message: issue })),
      ...performanceIssues.map(issue => ({ type: 'warning', message: issue }))
    ];
    
    // Calculate score
    pageReport.score = Math.max(0, 100 - (pageReport.issues.length * 5));
    
    report.pages.push(pageReport);
  });
  
  // Calculate summary
  report.summary.totalPages = report.pages.length;
  report.summary.totalIssues = report.pages.reduce((sum, page) => sum + page.issues.length, 0);
  report.summary.criticalIssues = report.pages.reduce((sum, page) => 
    sum + page.issues.filter(issue => issue.type === 'critical').length, 0);
  report.summary.warnings = report.pages.reduce((sum, page) => 
    sum + page.issues.filter(issue => issue.type === 'warning').length, 0);
  
  // Save report
  const reportPath = path.join(__dirname, '../seo-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\nSEO Audit Summary:');
  console.log(`Total pages: ${report.summary.totalPages}`);
  console.log(`Total issues: ${report.summary.totalIssues}`);
  console.log(`Critical issues: ${report.summary.criticalIssues}`);
  console.log(`Warnings: ${report.summary.warnings}`);
  console.log(`\nReport saved to: ${reportPath}`);
  
  // Print page scores
  console.log('\nPage Scores:');
  report.pages.forEach(page => {
    console.log(`${page.file}: ${page.score}/100`);
    if (page.issues.length > 0) {
      page.issues.forEach(issue => {
        console.log(`  - ${issue.type.toUpperCase()}: ${issue.message}`);
      });
    }
  });
}

// Run the audit
generateSEOReport();