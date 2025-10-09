import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * SEO audit script for Zion Tech Group website
 * This script checks for SEO best practices and generates recommendations
 */

console.log('🔍 Starting SEO audit...');

// Check HTML structure
function auditHTMLStructure() {
  console.log('📄 Auditing HTML structure...');
  
  const issues = [];
  const recommendations = [];
  
  // Check for main HTML file
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (!fs.existsSync(indexPath)) {
    issues.push('Main index.html file not found');
    return { issues, recommendations };
  }
  
  const html = fs.readFileSync(indexPath, 'utf8');
  
  // Check for essential meta tags
  const metaTags = [
    'title',
    'description',
    'viewport',
    'robots',
    'canonical'
  ];
  
  metaTags.forEach(tag => {
    if (!html.includes(`<meta name="${tag}"`) && !html.includes(`<title>`) && tag === 'title') {
      if (tag === 'title') {
        if (!html.includes('<title>')) {
          issues.push(`Missing ${tag} tag`);
        }
      } else {
        issues.push(`Missing ${tag} meta tag`);
      }
    }
  });
  
  // Check for Open Graph tags
  const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
  ogTags.forEach(tag => {
    if (!html.includes(`property="${tag}"`)) {
      issues.push(`Missing Open Graph ${tag} tag`);
    }
  });
  
  // Check for Twitter Card tags
  const twitterTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  twitterTags.forEach(tag => {
    if (!html.includes(`name="${tag}"`)) {
      issues.push(`Missing Twitter Card ${tag} tag`);
    }
  });
  
  // Check for structured data
  if (!html.includes('application/ld+json')) {
    issues.push('Missing structured data (JSON-LD)');
  }
  
  // Check for alt attributes on images
  const imgTags = html.match(/<img[^>]*>/g) || [];
  imgTags.forEach(img => {
    if (!img.includes('alt=')) {
      issues.push('Image missing alt attribute');
    }
  });
  
  // Check for heading hierarchy
  const headings = html.match(/<h[1-6][^>]*>/g) || [];
  if (headings.length === 0) {
    issues.push('No heading tags found');
  }
  
  // Check for internal links
  const internalLinks = html.match(/href="[^"]*"/g) || [];
  if (internalLinks.length === 0) {
    recommendations.push('Consider adding internal links for better SEO');
  }
  
  // Check for external links
  const externalLinks = html.match(/href="https?:\/\/[^"]*"/g) || [];
  if (externalLinks.length === 0) {
    recommendations.push('Consider adding external links to authoritative sources');
  }
  
  return { issues, recommendations };
}

// Check sitemap
function auditSitemap() {
  console.log('🗺️ Auditing sitemap...');
  
  const issues = [];
  const recommendations = [];
  
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    issues.push('Sitemap.xml not found');
    return { issues, recommendations };
  }
  
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Check for essential sitemap elements
  if (!sitemap.includes('<urlset')) {
    issues.push('Sitemap missing urlset element');
  }
  
  if (!sitemap.includes('<url>')) {
    issues.push('Sitemap missing url elements');
  }
  
  // Count URLs
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  if (urlCount === 0) {
    issues.push('Sitemap contains no URLs');
  } else if (urlCount < 5) {
    recommendations.push('Consider adding more pages to sitemap');
  }
  
  return { issues, recommendations };
}

// Check robots.txt
function auditRobots() {
  console.log('🤖 Auditing robots.txt...');
  
  const issues = [];
  const recommendations = [];
  
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  if (!fs.existsSync(robotsPath)) {
    issues.push('robots.txt not found');
    return { issues, recommendations };
  }
  
  const robots = fs.readFileSync(robotsPath, 'utf8');
  
  if (!robots.includes('User-agent: *')) {
    issues.push('robots.txt missing User-agent directive');
  }
  
  if (!robots.includes('Allow: /')) {
    issues.push('robots.txt missing Allow directive');
  }
  
  if (!robots.includes('Sitemap:')) {
    issues.push('robots.txt missing Sitemap reference');
  }
  
  return { issues, recommendations };
}

// Check performance metrics
function auditPerformance() {
  console.log('⚡ Auditing performance...');
  
  const issues = [];
  const recommendations = [];
  
  const distDir = path.join(__dirname, '../dist');
  const files = fs.readdirSync(distDir);
  
  let totalSize = 0;
  const largeFiles = [];
  
  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      const sizeKB = stats.size / 1024;
      totalSize += stats.size;
      
      if (sizeKB > 100) { // Files larger than 100KB
        largeFiles.push({ file, sizeKB: Math.round(sizeKB) });
      }
    }
  });
  
  const totalSizeMB = totalSize / (1024 * 1024);
  
  if (totalSizeMB > 1) {
    issues.push(`Total bundle size is ${totalSizeMB.toFixed(2)}MB, should be under 1MB`);
  }
  
  if (largeFiles.length > 0) {
    recommendations.push('Consider optimizing large files: ' + largeFiles.map(f => `${f.file} (${f.sizeKB}KB)`).join(', '));
  }
  
  return { issues, recommendations };
}

// Generate SEO report
function generateSEOReport(htmlAudit, sitemapAudit, robotsAudit, performanceAudit) {
  console.log('📊 Generating SEO report...');
  
  const allIssues = [
    ...htmlAudit.issues,
    ...sitemapAudit.issues,
    ...robotsAudit.issues,
    ...performanceAudit.issues
  ];
  
  const allRecommendations = [
    ...htmlAudit.recommendations,
    ...sitemapAudit.recommendations,
    ...robotsAudit.recommendations,
    ...performanceAudit.recommendations
  ];
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalIssues: allIssues.length,
      totalRecommendations: allRecommendations.length,
      score: Math.max(0, 100 - (allIssues.length * 10))
    },
    audits: {
      html: htmlAudit,
      sitemap: sitemapAudit,
      robots: robotsAudit,
      performance: performanceAudit
    },
    issues: allIssues,
    recommendations: allRecommendations
  };
  
  // Write report
  fs.writeFileSync(
    path.join(__dirname, '../seo-audit-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('✅ SEO audit report generated');
  console.log(`📊 SEO Score: ${report.summary.score}/100`);
  console.log(`❌ Issues found: ${report.summary.totalIssues}`);
  console.log(`💡 Recommendations: ${report.summary.totalRecommendations}`);
  
  return report;
}

// Main audit function
async function audit() {
  try {
    const htmlAudit = auditHTMLStructure();
    const sitemapAudit = auditSitemap();
    const robotsAudit = auditRobots();
    const performanceAudit = auditPerformance();
    
    const report = generateSEOReport(htmlAudit, sitemapAudit, robotsAudit, performanceAudit);
    
    console.log('🎉 SEO audit completed successfully!');
    
    if (report.summary.totalIssues > 0) {
      console.log('\n❌ Issues to fix:');
      report.issues.forEach(issue => console.log(`   - ${issue}`));
    }
    
    if (report.summary.totalRecommendations > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`   - ${rec}`));
    }
    
  } catch (error) {
    console.error('❌ Error during SEO audit:', error);
    process.exit(1);
  }
}

// Run audit
audit();