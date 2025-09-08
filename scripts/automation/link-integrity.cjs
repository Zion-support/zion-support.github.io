#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Link Integrity Automation Started');

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

function checkLinkIntegrity() {
  console.log('🔍 Starting link integrity check process...');
  
  // Build project if needed
  if (!fs.existsSync('dist')) {
    console.log('🏗️ Building project for link analysis...');
    runCommand('npm run build', 'Project build');
  }
  
  if (fs.existsSync('dist')) {
    console.log('🔍 Analyzing link integrity...');
    
    const htmlFiles = findHtmlFiles('dist');
    let totalLinks = 0;
    let brokenLinks = 0;
    let externalLinks = 0;
    let internalLinks = 0;
    
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractAllLinks(content);
      
      links.forEach(link => {
        totalLinks++;
        
        if (isExternalLink(link)) {
          externalLinks++;
          console.log(`  🌐 External link: ${link}`);
        } else {
          internalLinks++;
          
          if (!isValidInternalLink(link, file)) {
            brokenLinks++;
            console.log(`  ❌ Broken internal link in ${file}: ${link}`);
          }
        }
      });
    });
    
    // Summary report
    console.log('\n📊 Link Integrity Summary:');
    console.log(`  Total links: ${totalLinks}`);
    console.log(`  Internal links: ${internalLinks}`);
    console.log(`  External links: ${externalLinks}`);
    console.log(`  Broken links: ${brokenLinks}`);
    
    if (brokenLinks === 0) {
      console.log('✅ All internal links are valid!');
    } else {
      console.log(`⚠️ Found ${brokenLinks} broken internal links that need attention`);
    }
    
    // Check for common link issues
    console.log('\n🔍 Checking for common link issues...');
    
    // Check for relative vs absolute paths
    const relativeLinks = findRelativeLinks('dist');
    if (relativeLinks.length > 0) {
      console.log(`  ℹ️ Found ${relativeLinks.length} relative links (this is usually good)`);
    }
    
    // Check for missing alt attributes in images
    const imagesWithoutAlt = findImagesWithoutAlt('dist');
    if (imagesWithoutAlt.length > 0) {
      console.log(`  ⚠️ Found ${imagesWithoutAlt.length} images without alt attributes`);
      imagesWithoutAlt.forEach(img => console.log(`    ${img}`));
    }
    
    // Check for broken anchor links
    const brokenAnchors = findBrokenAnchors('dist');
    if (brokenAnchors.length > 0) {
      console.log(`  ⚠️ Found ${brokenAnchors.length} broken anchor links`);
      brokenAnchors.forEach(anchor => console.log(`    ${anchor}`));
    }
    
  } else {
    console.log('❌ Build failed, cannot check link integrity');
  }
  
  console.log('✅ Link integrity check process completed');
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

function extractAllLinks(content) {
  const linkRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

function isExternalLink(link) {
  return link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:');
}

function isValidInternalLink(link, sourceFile) {
  // Skip anchors
  if (link.startsWith('#')) {
    return true;
  }
  
  // Handle relative paths
  const sourceDir = path.dirname(sourceFile);
  const targetPath = path.join(sourceDir, link);
  
  return fs.existsSync(targetPath);
}

function findRelativeLinks(dir) {
  const relativeLinks = [];
  const htmlFiles = findHtmlFiles(dir);
  
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractAllLinks(content);
    
    links.forEach(link => {
      if (!isExternalLink(link) && !link.startsWith('#') && !link.startsWith('/')) {
        relativeLinks.push(link);
      }
    });
  });
  
  return relativeLinks;
}

function findImagesWithoutAlt(dir) {
  const imagesWithoutAlt = [];
  const htmlFiles = findHtmlFiles(dir);
  
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgRegex = /<img[^>]*>/g;
    let match;
    
    while ((match = imgRegex.exec(content)) !== null) {
      if (!match[0].includes('alt=')) {
        imagesWithoutAlt.push(`${file}: ${match[0]}`);
      }
    }
  });
  
  return imagesWithoutAlt;
}

function findBrokenAnchors(dir) {
  const brokenAnchors = [];
  const htmlFiles = findHtmlFiles(dir);
  
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractAllLinks(content);
    
    links.forEach(link => {
      if (link.includes('#')) {
        const [filePath, anchor] = link.split('#');
        if (anchor && !content.includes(`id="${anchor}"`) && !content.includes(`name="${anchor}"`)) {
          brokenAnchors.push(`${file}: ${link}`);
        }
      }
    });
  });
  
  return brokenAnchors;
}

// Main execution
checkLinkIntegrity();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 7200000; // 2 hours default
setInterval(checkLinkIntegrity, interval);

console.log(`⏰ Link Integrity will run every ${interval / 60000} minutes`);