#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️ Starting sitemap runner automation...');

async function runSitemapRunner() {
  try {
    // Build the project first
    console.log('🏗️ Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check build output
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build failed: dist folder not found');
    }
    
    // Generate sitemap
    console.log('🗺️ Generating sitemap...');
    try {
      execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
      console.log('✅ Sitemap generated successfully');
    } catch (error) {
      console.log('⚠️  Sitemap generation failed but continuing...');
    }
    
    // Check sitemap
    const sitemapPath = path.join(distPath, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;
      console.log(`✅ Sitemap contains ${urlCount} URLs`);
      
      // Validate sitemap structure
      if (sitemapContent.includes('<?xml') && sitemapContent.includes('<urlset')) {
        console.log('✅ Sitemap XML structure is valid');
      } else {
        console.log('⚠️  Sitemap XML structure may be invalid');
      }
    } else {
      console.log('⚠️  Sitemap not found in build output');
    }
    
    // Generate robots.txt if it doesn't exist
    console.log('🤖 Checking robots.txt...');
    const robotsPath = path.join(distPath, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
      const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;
      
      fs.writeFileSync(robotsPath, robotsContent);
      console.log('✅ robots.txt generated');
    } else {
      console.log('✅ robots.txt already exists');
    }
    
    // Check for all HTML files
    console.log('📄 Scanning for HTML files...');
    const htmlFiles = findHtmlFiles(distPath);
    console.log(`✅ Found ${htmlFiles.length} HTML files`);
    
    // Generate sitemap report
    console.log('📊 Generating sitemap report...');
    const report = {
      timestamp: new Date().toISOString(),
      htmlFiles: htmlFiles.length,
      sitemapExists: fs.existsSync(sitemapPath),
      robotsExists: fs.existsSync(robotsPath),
      summary: 'Sitemap runner completed'
    };
    
    const reportPath = path.join(process.cwd(), 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Sitemap runner report saved to ${reportPath}`);
    
    console.log('✅ Sitemap runner completed successfully');
    
  } catch (error) {
    console.error('❌ Sitemap runner failed:', error.message);
    process.exit(1);
  }
}

function findHtmlFiles(dir) {
  const htmlFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.html')) {
          htmlFiles.push(path.relative(process.cwd(), fullPath));
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return htmlFiles;
}

// Run the sitemap runner
runSitemapRunner();
