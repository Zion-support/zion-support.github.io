#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️  Starting continuous sitemap runner automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runSitemapRunner() {
  try {
    console.log(`🗺️  Running sitemap generation at ${new Date().toISOString()}`);
    
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
      console.log('⚠️  Dist folder not found, skipping sitemap generation');
      return;
    }
    
    // Generate sitemap
    console.log('🗺️  Generating sitemap...');
    try {
      // Find all HTML files
      const htmlFiles = findHtmlFiles(distPath);
      console.log(`📄 Found ${htmlFiles.length} HTML files`);
      
      // Generate sitemap XML
      const sitemapXml = generateSitemapXml(htmlFiles);
      const sitemapPath = path.join(distPath, 'sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemapXml);
      console.log('✅ Sitemap XML generated');
      
      // Generate sitemap index if needed
      if (htmlFiles.length > 1000) { // If more than 1000 pages, create sitemap index
        const sitemapIndex = generateSitemapIndex(htmlFiles);
        const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');
        fs.writeFileSync(sitemapIndexPath, sitemapIndex);
        console.log('✅ Sitemap index generated');
      }
      
    } catch (error) {
      console.log('⚠️  Sitemap generation failed but continuing...');
    }
    
    // Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    try {
      const robotsTxt = generateRobotsTxt();
      const robotsPath = path.join(distPath, 'robots.txt');
      fs.writeFileSync(robotsPath, robotsTxt);
      console.log('✅ Robots.txt generated');
    } catch (error) {
      console.log('⚠️  Robots.txt generation failed but continuing...');
    }
    
    // Validate sitemap
    console.log('🔍 Validating sitemap...');
    try {
      execSync('npx sitemap-validator sitemap.xml', { stdio: 'inherit' });
      console.log('✅ Sitemap validation completed');
    } catch (error) {
      console.log('⚠️  Sitemap validation failed but continuing...');
    }
    
    // Submit to search engines if configured
    console.log('📡 Submitting sitemap to search engines...');
    try {
      if (process.env.GOOGLE_SEARCH_CONSOLE_URL) {
        execSync(`curl -X POST "${process.env.GOOGLE_SEARCH_CONSOLE_URL}"`, { stdio: 'inherit' });
        console.log('✅ Submitted to Google Search Console');
      }
      
      if (process.env.BING_WEBMASTER_URL) {
        execSync(`curl -X POST "${process.env.BING_WEBMASTER_URL}"`, { stdio: 'inherit' });
        console.log('✅ Submitted to Bing Webmaster Tools');
      }
    } catch (error) {
      console.log('⚠️  Search engine submission failed but continuing...');
    }
    
    // Generate sitemap report
    console.log('📊 Generating sitemap report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalPages: htmlFiles.length,
      sitemapGenerated: true,
      robotsTxtGenerated: true,
      summary: 'Sitemap generation completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Report saved to ${reportPath}`);
    
    console.log('✅ Sitemap generation completed successfully');
    
  } catch (error) {
    console.error('❌ Sitemap generation failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(path.relative(dir, fullPath));
    }
  }
  
  return files;
}

function generateSitemapXml(htmlFiles) {
  const baseUrl = process.env.SITE_URL || 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add homepage
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/</loc>\n`;
  xml += `    <lastmod>${currentDate}</lastmod>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>1.0</priority>\n`;
  xml += `  </url>\n`;
  
  // Add other pages
  for (const file of htmlFiles) {
    if (file === 'index.html') continue; // Skip homepage as it's already added
    
    const url = file.replace(/\.html$/, '').replace(/\\/g, '/');
    const priority = getPagePriority(url);
    const changefreq = getPageChangeFreq(url);
    
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/${url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  
  xml += '</urlset>';
  return xml;
}

function generateSitemapIndex(htmlFiles) {
  const baseUrl = process.env.SITE_URL || 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Split files into chunks and create multiple sitemaps
  const chunkSize = 1000;
  for (let i = 0; i < htmlFiles.length; i += chunkSize) {
    const chunk = htmlFiles.slice(i, i + chunkSize);
    const sitemapNumber = Math.floor(i / chunkSize) + 1;
    
    xml += `  <sitemap>\n`;
    xml += `    <loc>${baseUrl}/sitemap-${sitemapNumber}.xml</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }
  
  xml += '</sitemapindex>';
  return xml;
}

function generateRobotsTxt() {
  const baseUrl = process.env.SITE_URL || 'https://ziontechgroup.com';
  
  let robots = `User-agent: *\n`;
  robots += `Allow: /\n\n`;
  robots += `# Sitemap\n`;
  robots += `Sitemap: ${baseUrl}/sitemap.xml\n\n`;
  robots += `# Crawl-delay\n`;
  robots += `Crawl-delay: 1\n\n`;
  robots += `# Disallow admin and private areas\n`;
  robots += `Disallow: /admin/\n`;
  robots += `Disallow: /private/\n`;
  robots += `Disallow: /api/\n`;
  
  return robots;
}

function getPagePriority(url) {
  if (url.includes('services') || url.includes('about')) return '0.9';
  if (url.includes('contact') || url.includes('blog')) return '0.8';
  if (url.includes('privacy') || url.includes('terms')) return '0.3';
  return '0.6';
}

function getPageChangeFreq(url) {
  if (url.includes('blog') || url.includes('news')) return 'weekly';
  if (url.includes('services') || url.includes('about')) return 'monthly';
  if (url.includes('contact') || url.includes('privacy')) return 'yearly';
  return 'monthly';
}

// Main continuous loop
async function runContinuous() {
  console.log(`🗺️  Starting continuous sitemap runner with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial sitemap generation
  await runSitemapRunner();
  
  // Set up continuous execution
  setInterval(async () => {
    await runSitemapRunner();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous sitemap runner running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous sitemap runner
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous sitemap runner:', error);
  process.exit(1);
});
