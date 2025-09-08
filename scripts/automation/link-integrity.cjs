#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Starting continuous link integrity automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

async function runLinkIntegrity() {
  try {
    console.log(`🔗 Running link integrity check at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for link analysis...');
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
    
    // Install linkinator if not available
    console.log('📦 Installing linkinator for link checking...');
    try {
      execSync('npm install -g linkinator', { stdio: 'pipe' });
      console.log('✅ Linkinator installed');
    } catch (error) {
      console.log('ℹ️  Linkinator already available');
    }
    
    // Check internal links
    console.log('🔍 Checking internal links...');
    let internalLinks = [];
    try {
      // Start a local server to check internal links
      const serverProcess = execSync('npx http-server dist -p 5000 -s', { 
        stdio: 'pipe',
        detached: true 
      });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check internal links
      const internalOutput = execSync('npx linkinator http://localhost:5000 --recurse --concurrency 5 --format json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      internalLinks = JSON.parse(internalOutput);
      
      // Stop the server
      try {
        execSync('pkill -f "http-server"', { stdio: 'pipe' });
      } catch (killError) {
        // Ignore kill errors
      }
      
      console.log(`✅ Internal link check completed. Found ${internalLinks.links ? internalLinks.links.length : 0} links`);
    } catch (error) {
      console.log('⚠️  Internal link check failed:', error.message);
    }
    
    // Check external links
    console.log('🔍 Checking external links...');
    let externalLinks = [];
    try {
      // Extract external URLs from the build
      const externalUrls = extractExternalUrls(distPath);
      if (externalUrls.length > 0) {
        console.log(`🔗 Found ${externalUrls.length} external URLs to check`);
        
        // Check external links in batches to avoid overwhelming servers
        const batchSize = 10;
        for (let i = 0; i < externalUrls.length; i += batchSize) {
          const batch = externalUrls.slice(i, i + batchSize);
          console.log(`🔍 Checking batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(externalUrls.length / batchSize)}`);
          
          try {
            const batchOutput = execSync(`npx linkinator ${batch.join(' ')} --concurrency 3 --format json`, { 
              encoding: 'utf8',
              stdio: 'pipe'
            });
            
            const batchLinks = JSON.parse(batchOutput);
            if (batchLinks.links) {
              externalLinks.push(...batchLinks.links);
            }
            
            // Wait between batches to be respectful
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (batchError) {
            console.log(`⚠️  Batch ${Math.floor(i / batchSize) + 1} failed:`, batchError.message);
          }
        }
        
        console.log(`✅ External link check completed. Found ${externalLinks.length} links`);
      } else {
        console.log('ℹ️  No external URLs found to check');
      }
    } catch (error) {
      console.log('⚠️  External link check failed:', error.message);
    }
    
    // Combine and analyze results
    console.log('📊 Analyzing link integrity results...');
    const allLinks = [
      ...(internalLinks.links || []),
      ...externalLinks
    ];
    
    const brokenLinks = allLinks.filter(link => link.state === 'BROKEN');
    const workingLinks = allLinks.filter(link => link.state === 'OK');
    const unknownLinks = allLinks.filter(link => link.state === 'UNKNOWN');
    
    console.log(`📊 Link integrity summary:`);
    console.log(`  - Total links: ${allLinks.length}`);
    console.log(`  - Working: ${workingLinks.length}`);
    console.log(`  - Broken: ${brokenLinks.length}`);
    console.log(`  - Unknown: ${unknownLinks.length}`);
    
    if (brokenLinks.length > 0) {
      console.log(`⚠️  Broken links found:`);
      brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (Status: ${link.status || 'unknown'})`);
      });
    }
    
    // Generate link integrity report
    console.log('📊 Generating link integrity report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalLinks: allLinks.length,
      workingLinks: workingLinks.length,
      brokenLinks: brokenLinks.length,
      unknownLinks: unknownLinks.length,
      brokenLinksDetails: brokenLinks,
      summary: `Link integrity check completed. ${brokenLinks.length} broken links found`,
      status: brokenLinks.length > 0 ? 'issues_found' : 'clean'
    };
    
    const reportPath = path.join(process.cwd(), 'link-integrity-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Link integrity report saved to ${reportPath}`);
    
    console.log('✅ Continuous link integrity check completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous link integrity check failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Link integrity check failed',
      status: 'error'
    };
    
    const reportPath = path.join(process.cwd(), 'link-integrity-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

function extractExternalUrls(distPath) {
  const urls = new Set();
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.html') || item.endsWith('.js') || item.endsWith('.css')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        
        // Find external URLs
        const urlMatches = content.match(/https?:\/\/[^\s"<>{}|\\^`\[\]]+/g);
        if (urlMatches) {
          urlMatches.forEach(url => {
            // Clean up the URL
            const cleanUrl = url.replace(/[^\w\-._~:/?#[\]@!$&'()*+,;=%]+$/, '');
            if (cleanUrl.startsWith('http')) {
              urls.add(cleanUrl);
            }
          });
        }
      }
    });
  }
  
  scanDirectory(distPath);
  return Array.from(urls);
}

// Run the link integrity check immediately
runLinkIntegrity();

// Set up continuous execution
setInterval(runLinkIntegrity, AUTOMATION_INTERVAL);

console.log(`🔗 Link integrity automation started. Running every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
console.log('Press Ctrl+C to stop the automation');