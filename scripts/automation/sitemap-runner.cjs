#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️ Starting continuous sitemap runner automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runSitemapRunner() {
  try {
    console.log(`🗺️ Running sitemap generation at ${new Date().toISOString()}`);
    
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
    const sitemap = generateSitemap(distPath);
    
    if (sitemap.pages.length > 0) {
      console.log(`✅ Generated sitemap with ${sitemap.pages.length} pages`);
      
      // Save sitemap.xml
      const sitemapXml = generateSitemapXML(sitemap);
      const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemapXml);
      console.log(`📄 Sitemap saved to ${sitemapPath}`);
      
      // Save sitemap.json for programmatic access
      const sitemapJsonPath = path.join(process.cwd(), 'dist', 'sitemap.json');
      fs.writeFileSync(sitemapJsonPath, JSON.stringify(sitemap, null, 2));
      console.log(`📄 Sitemap JSON saved to ${sitemapJsonPath}`);
      
      // Generate robots.txt if it doesn't exist
      const robotsPath = path.join(process.cwd(), 'dist', 'robots.txt');
      if (!fs.existsSync(robotsPath)) {
        const robotsTxt = generateRobotsTxt();
        fs.writeFileSync(robotsPath, robotsTxt);
        console.log(`🤖 Robots.txt generated at ${robotsPath}`);
      }
      
      // Generate sitemap index if there are many pages
      if (sitemap.pages.length > 1000) {
        const sitemapIndex = generateSitemapIndex(sitemap);
        const sitemapIndexPath = path.join(process.cwd(), 'dist', 'sitemap-index.xml');
        fs.writeFileSync(sitemapIndexPath, sitemapIndex);
        console.log(`📑 Sitemap index generated at ${sitemapIndexPath}`);
      }
      
      // Validate sitemap
      console.log('🔍 Validating sitemap...');
      const validationResult = validateSitemap(sitemap);
      if (validationResult.isValid) {
        console.log('✅ Sitemap validation passed');
      } else {
        console.log(`⚠️  Sitemap validation issues: ${validationResult.issues.join(', ')}`);
      }
      
      // Check for SEO optimization opportunities
      console.log('🔍 Checking for SEO optimization opportunities...');
      const seoIssues = checkSEOIssues(sitemap);
      if (seoIssues.length > 0) {
        console.log(`⚠️  Found ${seoIssues.length} SEO optimization opportunities:`);
        seoIssues.forEach(issue => {
          console.log(`  - ${issue.page}: ${issue.issue}`);
        });
      } else {
        console.log('✅ SEO appears to be well optimized');
      }
      
    } else {
      console.log('⚠️  No pages found for sitemap generation');
    }
    
    // Generate sitemap report
    console.log('📊 Generating sitemap runner report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalPages: sitemap.pages.length,
      sitemapGenerated: sitemap.pages.length > 0,
      validationPassed: sitemap.pages.length > 0 ? validationSitemap(sitemap).isValid : false,
      seoIssues: seoIssues ? seoIssues.length : 0,
      summary: `Sitemap generation completed. Generated ${sitemap.pages.length} pages`,
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Sitemap runner report saved to ${reportPath}`);
    
    console.log('✅ Continuous sitemap runner completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous sitemap runner failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Sitemap runner failed',
      status: 'error'
    };
    
    const reportPath = path.join(process.cwd(), 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

function generateSitemap(distPath) {
  const pages = [];
  const baseUrl = 'https://ziontechgroup.com'; // Update with your actual domain
  
  function scanDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath, path.join(relativePath, item));
      } else if (item.endsWith('.html')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const lastModified = stats.mtime;
        
        // Extract page information
        const title = extractTitle(content);
        const description = extractDescription(content);
        const keywords = extractKeywords(content);
        const priority = calculatePriority(relativePath);
        const changeFreq = calculateChangeFreq(relativePath);
        
        pages.push({
          url: `${baseUrl}/${relativePath}/${item}`.replace(/\/+/g, '/').replace(/\/$/, ''),
          lastModified: lastModified.toISOString(),
          title: title,
          description: description,
          keywords: keywords,
          priority: priority,
          changeFreq: changeFreq,
          relativePath: relativePath
        });
      }
    });
  }
  
  scanDirectory(distPath);
  
  // Sort pages by priority and path
  pages.sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    return a.relativePath.localeCompare(b.relativePath);
  });
  
  return {
    baseUrl: baseUrl,
    generatedAt: new Date().toISOString(),
    totalPages: pages.length,
    pages: pages
  };
}

function extractTitle(content) {
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : '';
}

function extractDescription(content) {
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  return descMatch ? descMatch[1].trim() : '';
}

function extractKeywords(content) {
  const keywordsMatch = content.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["']/i);
  return keywordsMatch ? keywordsMatch[1].trim() : '';
}

function calculatePriority(relativePath) {
  if (!relativePath || relativePath === '') return 1.0;
  if (relativePath.includes('index')) return 0.9;
  if (relativePath.split('/').length === 1) return 0.8;
  if (relativePath.split('/').length === 2) return 0.7;
  return 0.6;
}

function calculateChangeFreq(relativePath) {
  if (relativePath.includes('blog') || relativePath.includes('news')) return 'weekly';
  if (relativePath.includes('about') || relativePath.includes('contact')) return 'monthly';
  return 'yearly';
}

function generateSitemapXML(sitemap) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  sitemap.pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastModified}</loc>\n`;
    xml += `    <changefreq>${page.changeFreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay: 1
`;
}

function generateSitemapIndex(sitemap) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Split pages into chunks of 1000
  const chunks = [];
  for (let i = 0; i < sitemap.pages.length; i += 1000) {
    chunks.push(sitemap.pages.slice(i, i + 1000));
  }
  
  chunks.forEach((chunk, index) => {
    xml += '  <sitemap>\n';
    xml += `    <loc>https://ziontechgroup.com/sitemap-${index + 1}.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += '  </sitemap>\n`;
  });
  
  xml += '</sitemapindex>';
  return xml;
}

function validateSitemap(sitemap) {
  const issues = [];
  
  // Check for missing titles
  sitemap.pages.forEach(page => {
    if (!page.title) {
      issues.push(`Missing title for ${page.url}`);
    }
  });
  
  // Check for missing descriptions
  sitemap.pages.forEach(page => {
    if (!page.description) {
      issues.push(`Missing description for ${page.url}`);
    }
  });
  
  // Check for duplicate URLs
  const urls = sitemap.pages.map(p => p.url);
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
  if (duplicates.length > 0) {
    issues.push(`Duplicate URLs found: ${duplicates.join(', ')}`);
  }
  
  return {
    isValid: issues.length === 0,
    issues: issues
  };
}

function checkSEOIssues(sitemap) {
  const issues = [];
  
  sitemap.pages.forEach(page => {
    // Check for missing meta descriptions
    if (!page.description) {
      issues.push({
        page: page.url,
        issue: 'Missing meta description'
      });
    }
    
    // Check for short descriptions
    if (page.description && page.description.length < 50) {
      issues.push({
        page: page.url,
        issue: 'Meta description too short (should be 50-160 characters)'
      });
    }
    
    // Check for long descriptions
    if (page.description && page.description.length > 160) {
      issues.push({
        page: page.url,
        issue: 'Meta description too long (should be 50-160 characters)'
      });
    }
    
    // Check for missing keywords
    if (!page.keywords) {
      issues.push({
        page: page.url,
        issue: 'Missing meta keywords'
      });
    }
  });
  
  return issues;
}

// Run the sitemap runner immediately
runSitemapRunner();

// Set up continuous execution
setInterval(runSitemapRunner, AUTOMATION_INTERVAL);

console.log(`🗺️ Sitemap runner automation started. Running every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
console.log('Press Ctrl+C to stop the automation');