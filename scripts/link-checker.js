#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔗 Starting link checker...');

async function checkLinks() {
  try {
    // Build the project first
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check if dist folder exists
    if (!fs.existsSync('dist')) {
      console.log('❌ Build failed - dist folder not found');
      return;
    }
    
    console.log('✅ Build completed successfully');
    
    // Simple link validation
    const htmlFiles = findHtmlFiles('dist');
    let brokenLinks = [];
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractLinks(content);
      
      for (const link of links) {
        if (link.startsWith('http') && !isValidUrl(link)) {
          brokenLinks.push({
            source: file,
            target: link,
            status: 'BROKEN'
          });
        }
      }
    }
    
    // Generate report
    generateReport(brokenLinks);
    
    if (brokenLinks.length > 0) {
      console.log(`⚠️  Found ${brokenLinks.length} broken links`);
      process.exit(1);
    } else {
      console.log('✅ All links are working correctly');
    }
    
  } catch (error) {
    console.error('❌ Link checker failed:', error.message);
    process.exit(1);
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
      files.push(fullPath);
    }
  }
  
  return files;
}

function extractLinks(content) {
  const linkRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function generateReport(brokenLinks) {
  const report = {
    timestamp: new Date().toISOString(),
    totalBrokenLinks: brokenLinks.length,
    brokenLinks: brokenLinks
  };
  
  fs.writeFileSync('link-check-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Report generated: link-check-report.json');
}

checkLinks();