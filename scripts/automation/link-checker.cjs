#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Link Checker Automation Started');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

function checkLinks() {
  console.log('🔍 Starting link checking process...');
  
  // Check if dist folder exists (build first if needed)
  if (!fs.existsSync('dist')) {
    console.log('📦 Building project first...');
    runCommand('npm run build', 'Building project');
  }
  
  // Check for broken links in the built project
  if (fs.existsSync('dist')) {
    console.log('🔍 Checking for broken links...');
    
    // Look for common link issues
    const htmlFiles = findHtmlFiles('dist');
    let brokenLinks = 0;
    
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractLinks(content);
      
      links.forEach(link => {
        if (!isValidLink(link)) {
          console.log(`⚠️ Potential broken link found in ${file}: ${link}`);
          brokenLinks++;
        }
      });
    });
    
    if (brokenLinks === 0) {
      console.log('✅ No broken links found');
    } else {
      console.log(`⚠️ Found ${brokenLinks} potential broken links`);
    }
  }
}

function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  
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

function isValidLink(link) {
  // Skip external links, anchors, and data URLs
  if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#')) {
    return true;
  }
  
  // Check if internal link exists
  const fullPath = path.join('dist', link);
  return fs.existsSync(fullPath);
}

// Main execution
checkLinks();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
setInterval(checkLinks, interval);

console.log(`⏰ Link Checker will run every ${interval / 60000} minutes`);