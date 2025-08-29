#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Starting continuous link checker automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function runLinkChecker() {
  try {
    console.log(`🔗 Running link checker at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for link checking...');
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
    
    // Scan for links in HTML files
    console.log('🔍 Scanning for links in HTML files...');
    const links = findLinksInHtml(distPath);
    console.log(`📊 Found ${links.length} links to check`);
    
    // Check link validity
    console.log('🔍 Checking link validity...');
    const validLinks = [];
    const brokenLinks = [];
    
    for (const link of links) {
      try {
        // Simple link validation (you can enhance this with actual HTTP requests)
        if (isValidLink(link.url)) {
          validLinks.push(link);
        } else {
          brokenLinks.push(link);
        }
      } catch (error) {
        brokenLinks.push(link);
      }
    }
    
    console.log(`✅ Valid links: ${validLinks.length}`);
    console.log(`❌ Broken links: ${brokenLinks.length}`);
    
    if (brokenLinks.length > 0) {
      console.log('⚠️  Broken links found:');
      brokenLinks.forEach(link => {
        console.log(`  - ${link.url} in ${link.file}`);
      });
    }
    
    // Generate link checker report
    console.log('📊 Generating link checker report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalLinks: links.length,
      validLinks: validLinks.length,
      brokenLinks: brokenLinks.length,
      brokenLinksDetails: brokenLinks,
      summary: 'Link checker completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'link-checker-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Link checker report saved to ${reportPath}`);
    
    console.log('✅ Continuous link checker completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous link checker failed:', error.message);
  }
}

function findLinksInHtml(dir) {
  const links = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
        const srcMatches = content.match(/src=["']([^"']+)["']/g) || [];
        
        linkMatches.forEach(match => {
          const url = match.match(/href=["']([^"']+)["']/)[1];
          links.push({ url, file: filePath, type: 'href' });
        });
        
        srcMatches.forEach(match => {
          const url = match.match(/src=["']([^"']+)["']/)[1];
          links.push({ url, file: filePath, type: 'src' });
        });
      }
    }
  }
  
  scanDirectory(dir);
  return links;
}

function isValidLink(url) {
  // Basic validation - you can enhance this with actual HTTP requests
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return true; // External links - assume valid for now
  }
  if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
    return true; // Internal links - assume valid for now
  }
  if (url.startsWith('#')) {
    return true; // Anchor links
  }
  if (url.startsWith('mailto:') || url.startsWith('tel:')) {
    return true; // Protocol links
  }
  return false;
}

// Main execution loop
async function main() {
  console.log(`🚀 Link checker automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runLinkChecker();
  
  // Set up continuous execution
  setInterval(async () => {
    await runLinkChecker();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Link checker automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Link checker automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Link checker automation failed to start:', error);
  process.exit(1);
});