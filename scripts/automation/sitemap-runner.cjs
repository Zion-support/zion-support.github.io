#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️ Starting continuous sitemap runner automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runSitemapRunner() {
  try {
    console.log(`🗺️ Running sitemap runner at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for sitemap generation...');
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
    
    // Generate sitemap
    console.log('🗺️ Generating sitemap...');
    const sitemapData = generateSitemap(distPath);
    
    // Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    const robotsData = generateRobotsTxt(distPath);
    
    // Check for SEO optimization opportunities
    console.log('🔍 Checking for SEO optimization opportunities...');
    const seoOpportunities = findSEOOpportunities(distPath);
    
    // Check for missing meta tags
    console.log('🔍 Checking for missing meta tags...');
    const missingMetaTags = findMissingMetaTags(distPath);
    
    // Check for accessibility issues
    console.log('♿ Checking for accessibility issues...');
    const accessibilityIssues = findAccessibilityIssues(distPath);
    
    // Generate sitemap runner report
    console.log('📊 Generating sitemap runner report...');
    const report = {
      timestamp: new Date().toISOString(),
      sitemap: sitemapData,
      robots: robotsData,
      seoOpportunities: seoOpportunities.length,
      missingMetaTags: missingMetaTags.length,
      accessibilityIssues: accessibilityIssues.length,
      details: {
        seoOpportunities,
        missingMetaTags,
        accessibilityIssues
      },
      summary: 'Sitemap runner completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (sitemapData.pages.length === 0) {
      report.recommendations.push('No pages found for sitemap generation');
    }
    
    if (seoOpportunities.length > 0) {
      report.recommendations.push('Implement identified SEO optimization opportunities');
    }
    
    if (missingMetaTags.length > 0) {
      report.recommendations.push('Add missing meta tags for better SEO');
    }
    
    if (accessibilityIssues.length > 0) {
      report.recommendations.push('Address accessibility issues for better user experience');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('Sitemap and SEO are well optimized');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Sitemap runner report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Sitemap Runner Summary:`);
    console.log(`  - Pages in sitemap: ${sitemapData.pages.length}`);
    console.log(`  - Robots.txt generated: ${robotsData.generated ? 'Yes' : 'No'}`);
    console.log(`  - SEO opportunities: ${seoOpportunities.length}`);
    console.log(`  - Missing meta tags: ${missingMetaTags.length}`);
    console.log(`  - Accessibility issues: ${accessibilityIssues.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous sitemap runner completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous sitemap runner failed:', error.message);
  }
}

function generateSitemap(distPath) {
  const pages = [];
  const baseUrl = 'https://yourdomain.com'; // Update this with your actual domain
  
  function scanDirectory(currentDir, relativePath = '') {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath, path.join(relativePath, file));
      } else if (file.endsWith('.html')) {
        const url = relativePath ? `/${relativePath}/${file}` : `/${file}`;
        const lastModified = stat.mtime;
        
        pages.push({
          url: url.replace(/\\/g, '/'),
          lastModified: lastModified.toISOString(),
          priority: file === 'index.html' ? '1.0' : '0.8',
          changeFreq: 'weekly'
        });
      }
    }
  }
  
  scanDirectory(distPath);
  
  // Generate sitemap.xml
  const sitemapXml = generateSitemapXml(pages, baseUrl);
  const sitemapPath = path.join(distPath, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml);
  
  // Generate sitemap index if there are many pages
  if (pages.length > 1000) {
    const sitemapIndex = generateSitemapIndex(pages, baseUrl);
    const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');
    fs.writeFileSync(sitemapIndexPath, sitemapIndex);
  }
  
  return {
    pages: pages,
    totalPages: pages.length,
    sitemapGenerated: true,
    sitemapPath: 'sitemap.xml'
  };
}

function generateSitemapXml(pages, baseUrl) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastModified}</lastmod>\n`;
    xml += `    <changefreq>${page.changeFreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

function generateSitemapIndex(pages, baseUrl) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Split pages into chunks and create sitemap references
  const chunkSize = 1000;
  for (let i = 0; i < pages.length; i += chunkSize) {
    const chunk = pages.slice(i, i + chunkSize);
    const sitemapUrl = `${baseUrl}/sitemap-${Math.floor(i / chunkSize) + 1}.xml`;
    
    xml += '  <sitemap>\n';
    xml += `    <loc>${sitemapUrl}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += '  </sitemap>\n';
  }
  
  xml += '</sitemapindex>';
  return xml;
}

function generateRobotsTxt(distPath) {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://yourdomain.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Crawl delay (optional)
Crawl-delay: 1
`;
  
  const robotsPath = path.join(distPath, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  
  return {
    generated: true,
    path: 'robots.txt',
    content: robotsContent
  };
}

function findSEOOpportunities(distPath) {
  const opportunities = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for SEO opportunities
        if (!content.includes('<title>')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'Missing title',
            issue: 'No title tag found',
            recommendation: 'Add a descriptive title tag'
          });
        }
        
        if (!content.includes('<meta name="description"')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'Missing description',
            issue: 'No meta description found',
            recommendation: 'Add a meta description for better search results'
          });
        }
        
        if (!content.includes('<meta name="keywords"')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'Missing keywords',
            issue: 'No meta keywords found',
            recommendation: 'Add relevant keywords for better SEO'
          });
        }
        
        if (!content.includes('<h1>')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'Missing H1',
            issue: 'No H1 heading found',
            recommendation: 'Add a main H1 heading for better structure'
          });
        }
        
        if (content.includes('<img') && !content.includes('alt=')) {
          opportunities.push({
            file: filePath.replace(distPath, ''),
            type: 'Missing alt text',
            issue: 'Images without alt attributes found',
            recommendation: 'Add alt text to all images for accessibility and SEO'
          });
        }
      }
    }
  }
  
  scanDirectory(distPath);
  return opportunities;
}

function findMissingMetaTags(distPath) {
  const missingTags = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for essential meta tags
        const requiredTags = [
          { name: 'viewport', pattern: '<meta name="viewport"', description: 'Viewport meta tag for responsive design' },
          { name: 'charset', pattern: '<meta charset', description: 'Character encoding declaration' },
          { name: 'robots', pattern: '<meta name="robots"', description: 'Robots meta tag for search engine control' },
          { name: 'author', pattern: '<meta name="author"', description: 'Author meta tag for content attribution' },
          { name: 'og:title', pattern: '<meta property="og:title"', description: 'Open Graph title for social sharing' },
          { name: 'og:description', pattern: '<meta property="og:description"', description: 'Open Graph description for social sharing' },
          { name: 'og:image', pattern: '<meta property="og:image"', description: 'Open Graph image for social sharing' },
          { name: 'twitter:card', pattern: '<meta name="twitter:card"', description: 'Twitter Card meta tag for social sharing' }
        ];
        
        requiredTags.forEach(tag => {
          if (!content.includes(tag.pattern)) {
            missingTags.push({
              file: filePath.replace(distPath, ''),
              tag: tag.name,
              description: tag.description
            });
          }
        });
      }
    }
  }
  
  scanDirectory(distPath);
  return missingTags;
}

function findAccessibilityIssues(distPath) {
  const issues = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for accessibility issues
        if (content.includes('<button') && !content.includes('aria-label') && !content.includes('>')) {
          issues.push({
            file: filePath.replace(distPath, ''),
            type: 'Button accessibility',
            issue: 'Button without accessible text or aria-label',
            recommendation: 'Add text content or aria-label to buttons'
          });
        }
        
        if (content.includes('<form') && !content.includes('<label')) {
          issues.push({
            file: filePath.replace(distPath, ''),
            type: 'Form accessibility',
            issue: 'Form without proper labels',
            recommendation: 'Add labels to all form inputs'
          });
        }
        
        if (content.includes('<table') && !content.includes('<th')) {
          issues.push({
            file: filePath.replace(distPath, ''),
            type: 'Table accessibility',
            issue: 'Table without header cells',
            recommendation: 'Add header cells to tables for better structure'
          });
        }
        
        if (content.includes('<div') && content.includes('onclick') && !content.includes('role=')) {
          issues.push({
            file: filePath.replace(distPath, ''),
            type: 'Interactive element accessibility',
            issue: 'Div with onclick without proper role',
            recommendation: 'Add appropriate ARIA role or use semantic HTML elements'
          });
        }
      }
    }
  }
  
  scanDirectory(distPath);
  return issues;
}

// Main execution loop
async function main() {
  console.log(`🚀 Sitemap runner automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runSitemapRunner();
  
  // Set up continuous execution
  setInterval(async () => {
    await runSitemapRunner();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Sitemap runner automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Sitemap runner automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Sitemap runner automation failed to start:', error);
  process.exit(1);
});