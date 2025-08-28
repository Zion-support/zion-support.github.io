#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🗺️ Starting continuous sitemap runner automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runSitemapRunner() {
  try {
    console.log(`🗺️ Running sitemap generation at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
    }
    
    // Check build output
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Build verification failed: dist folder not found');
      return;
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
    
    console.log('✅ Continuous sitemap runner completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous sitemap runner failed:', error.message);
    // Don't exit, just log the error and continue
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

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous sitemap runner with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
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
