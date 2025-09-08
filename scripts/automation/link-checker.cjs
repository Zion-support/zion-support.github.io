#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔗 Starting Link Checker Automation...');

// Function to check if a URL is accessible
function checkUrl(url) {
  try {
    const result = execSync(`curl -s -o /dev/null -w "%{http_code}" "${url}"`, { encoding: 'utf8' });
    return parseInt(result) < 400; // Consider 2xx and 3xx as success
  } catch (error) {
    return false;
  }
}

// Function to find all HTML files
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to extract links from HTML content
function extractLinks(htmlContent) {
  const linkRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(htmlContent)) !== null) {
    links.push(match[1]);
  }
  
  return [...new Set(links)]; // Remove duplicates
}

// Main function
async function runLinkChecker() {
  try {
    console.log('📁 Scanning for HTML files...');
    
    // Check if dist directory exists
    if (!fs.existsSync('./dist')) {
      console.log('⚠️  Dist directory not found. Building project first...');
      execSync('npm run build', { stdio: 'inherit' });
    }
    
    const htmlFiles = findHtmlFiles('./dist');
    console.log(`📄 Found ${htmlFiles.length} HTML files`);
    
    const allLinks = [];
    const brokenLinks = [];
    
    // Extract links from all HTML files
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractLinks(content);
      
      for (const link of links) {
        if (link.startsWith('http') && !allLinks.includes(link)) {
          allLinks.push(link);
        }
      }
    }
    
    console.log(`🔗 Found ${allLinks.length} external links to check`);
    
    // Check each link
    for (const link of allLinks) {
      console.log(`🔍 Checking: ${link}`);
      if (!checkUrl(link)) {
        brokenLinks.push(link);
        console.log(`❌ Broken link: ${link}`);
      } else {
        console.log(`✅ Valid link: ${link}`);
      }
      
      // Small delay to be respectful to servers
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalLinks: allLinks.length,
      brokenLinks: brokenLinks,
      htmlFilesScanned: htmlFiles.length
    };
    
    // Save report
    fs.writeFileSync('./link-checker-report.json', JSON.stringify(report, null, 2));
    
    console.log(`\n📊 Link Checker Report:`);
    console.log(`Total links checked: ${report.totalLinks}`);
    console.log(`Broken links found: ${report.brokenLinks.length}`);
    console.log(`HTML files scanned: ${report.htmlFilesScanned}`);
    
    if (brokenLinks.length > 0) {
      console.log('\n❌ Broken links:');
      brokenLinks.forEach(link => console.log(`  - ${link}`));
    } else {
      console.log('\n✅ All links are working!');
    }
    
    console.log('\n🔗 Link Checker Automation completed successfully!');
    
  } catch (error) {
    console.error('❌ Error in Link Checker Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runLinkChecker();