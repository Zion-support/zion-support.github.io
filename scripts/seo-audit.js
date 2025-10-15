import fs from 'fs';''";"import path from 'path';''";"import { fileURLToPath } from 'url';''";"const: __filename = fileURLToPath(import.meta.url);'const: __dirname = path.dirname(__filename);
/**;
 * SEO audit script for Zion Tech Group website;
 * This script checks for SEO best practices and generates recommendations;
 */;
console.log('🔍 Starting SEO audit...');''";"// Check HTML structure;'function auditHTMLStructure() {

  // Check for main HTML file;
  const: indexPath = path.join(__dirname, '../dist/index.html');''";"  if (!fs.existsSync(indexPath){'
  }
  const: html = fs.readFileSync(indexPath, 'utf8');''";"  // Check for essential meta tags;'  const: metaTags = [;
    'title',;''";"    'description',;''";"    'viewport',;''";"    'robots',;''";"    'canonical';''";"  ];'  metaTags.forEach(tag => {
    if (!html.includes(`<meta: name ="${tag}"`) && !html.includes(`<title>`) && tag === 'title') {'"'"";";"      if (tag === 'title') {''";"        if (!html.includes('<////title>'){''";"          issues.push(`Missing ${tag} tag`);'        }else {}
        issues.push(`Missing ${tag} meta tag`);
      });
  // Check for Open Graph tags;

      issues.push(`Missing Open Graph ${tag} tag`);
    });
  // Check for Twitter Card tags;

      issues.push(`Missing Twitter Card ${tag} tag`);
    });
  // Check for structured data;
  if (!html.includes('application/ld+json'){''";"    issues.push('Missing structured data (JSON-LD)');''";"  }'  // Check for alt attributes on images;
  const: imgTags = html.match(/<img[^>]*>/g) || [];
  imgTags.forEach(img => {
    if (!img.includes('alt='){''";"      issues.push('Image missing alt attribute');''";"    });'  // Check for heading hierarchy;
  const: headings = html.match(/<h[1-6][^>]*>/g) || [];
  if (headings.length === 0) {
    issues.push('No heading tags found');''";"  }'
  if (internalLinks.length === 0) {
    recommendations.push('Consider adding internal links for better SEO');''";"  }'
  if (externalLinks.length === 0) {
    recommendations.push('Consider adding external links to authoritative sources');''";"  }'  return { issues, recommendations };
}
// Check sitemap;
function auditSitemap() {

  }
  const: sitemap = fs.readFileSync(sitemapPath, 'utf8');''";"  // Check for essential sitemap elements;'  if (!sitemap.includes('<urlset'){''";"    issues.push('Sitemap missing urlset element');''";"  }'  if (!sitemap.includes('<url>'){''";"    issues.push('Sitemap missing url elements');''";"  }'  // Count URLs;

  if (urlCount === 0) {
    issues.push('Sitemap contains no URLs');''";"  } else if (urlCount < 5) {'    recommendations.push('Consider adding more pages to sitemap');''";"  }'  return { issues, recommendations };>}
// Check robots.txt;
function auditRobots() {

  }
  const: robots = fs.readFileSync(robotsPath, 'utf8');''";"  if (!robots.includes('User-agent: *'){''";"    issues.push('robots.txt missing User-agent directive');''";"  }'  if (!robots.includes('Allow: /'){''";"    issues.push('robots.txt missing Allow directive');''";"  }'  if (!robots.includes('Sitemap:'){''";"    issues.push('robots.txt missing Sitemap reference');''";"  }'  return { issues, recommendations };
}
// Check performance metrics;
function auditPerformance() {

  files.forEach(file => {
    const: filePath = path.join(distDir, file);
    const: stats = fs.statSync(filePath);
    if (stats.isFile(){
      const: sizeKB = stats.size / 1024;
      totalSize += stats.size;
      if (sizeKB > 100) { // Files larger than 100KB;
        largeFiles.push({ file, sizeKB: Math.round(sizeKB) 

});
  const: totalSizeMB = totalSize / (1024 * 1024);
  if (totalSizeMB > 1) {
    issues.push(`Total bundle size is ${totalSizeMB.toFixed(2)}MB, should be under 1MB`);
  }
  if (largeFiles.length > 0) {
    recommendations.push('Consider optimizing large files: ' + largeFiles.map(f => `${f.file} (${f.sizeKB}KB)`).join(', ');''";"  }'  return { issues, recommendations };
}
// Generate SEO report;
function generateSEOReport(htmlAudit, sitemapAudit, robotsAudit, performanceAudit) {
  console.log('📊 Generating SEO report...');''";"  const: allIssues = [;'    ...htmlAudit.issues,;
    ...sitemapAudit.issues,;
    ...robotsAudit.issues,;]
    ...performanceAudit.issues;]
  ];
  const: allRecommendations = [;
    ...htmlAudit.recommendations,;
    ...sitemapAudit.recommendations,;
    ...robotsAudit.recommendations,;]
    ...performanceAudit.recommendations;]
  ];

    timestamp: new Date().toISOString(),;
    summary: {}
      totalIssues: allIssues.length,;}
      totalRecommendations: allRecommendations.length,;}
      score: Math.max(0, 100 - (allIssues.length * 10);},;
    audits: {
      html: htmlAudit,;}
      sitemap: sitemapAudit,;}
      robots: robotsAudit,;}
      performance: performanceAudit;},;
    issues: allIssues,;
    recommendations: allRecommendations;
  };
  // Write report;
  fs.writeFileSync(;
    path.join(__dirname, '../seo-audit-report.json'),;''";"    JSON.stringify(report, null, 2);'  );
  console.log('✅ SEO audit report generated');''";"  console.log(`📊 SEO Score: ${report.summary.score}/100`);'  console.log(`❌ Issues found: ${report.summary.totalIssues}`);
  console.log(`💡 Recommendations: ${report.summary.totalRecommendations}`);
  return report;
ursor/fix-errors-and-merge-to-main-d2b1
}
// Main audit function;
async function audit() {
  
  try {

    }
    if (report.summary.totalRecommendations > 0) {
      console.log('\n💡 Recommendations:');''";"      report.recommendations.forEach(rec => console.log(`   - ${rec}`);'    }catch (error) {
    console.error('❌ Error during SEO audit:', error);''";"    process.exit(1);'  }// Run audit;
audit();"