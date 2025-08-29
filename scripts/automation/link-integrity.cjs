#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔗 Starting Link Integrity Automation...');

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

// Function to check internal link integrity
function checkInternalLinks(links, baseDir) {
  const internalLinks = links.filter(link => !link.startsWith('http'));
  const brokenInternalLinks = [];
  
  for (const link of internalLinks) {
    if (link.startsWith('#')) {
      // Skip anchor links
      continue;
    }
    
    if (link.startsWith('/')) {
      // Absolute path from root
      const fullPath = path.join(baseDir, link.substring(1));
      if (!fs.existsSync(fullPath)) {
        brokenInternalLinks.push({
          link: link,
          type: 'internal',
          reason: 'File not found'
        });
      }
    } else {
      // Relative path
      const fullPath = path.join(baseDir, link);
      if (!fs.existsSync(fullPath)) {
        brokenInternalLinks.push({
          link: link,
          type: 'internal',
          reason: 'File not found'
        });
      }
    }
  }
  
  return brokenInternalLinks;
}

// Function to check external link integrity
async function checkExternalLinks(links) {
  const externalLinks = links.filter(link => link.startsWith('http'));
  const brokenExternalLinks = [];
  
  for (const link of externalLinks) {
    console.log(`🔍 Checking external link: ${link}`);
    
    if (!checkUrl(link)) {
      brokenExternalLinks.push({
        link: link,
        type: 'external',
        reason: 'HTTP error or connection failed'
      });
      console.log(`❌ Broken external link: ${link}`);
    } else {
      console.log(`✅ Valid external link: ${link}`);
    }
    
    // Small delay to be respectful to servers
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return brokenExternalLinks;
}

// Function to check for orphaned files
function findOrphanedFiles(baseDir) {
  const orphanedFiles = [];
  const allFiles = getAllFiles(baseDir);
  const referencedFiles = new Set();
  
  // Get all HTML files to check references
  const htmlFiles = findHtmlFiles(baseDir);
  
  for (const htmlFile of htmlFiles) {
    const content = fs.readFileSync(htmlFile, 'utf8');
    const links = extractLinks(content);
    
    for (const link of links) {
      if (!link.startsWith('http') && !link.startsWith('#')) {
        let filePath = link;
        if (link.startsWith('/')) {
          filePath = path.join(baseDir, link.substring(1));
        } else {
          filePath = path.join(path.dirname(htmlFile), link);
        }
        
        if (fs.existsSync(filePath)) {
          referencedFiles.add(path.relative(baseDir, filePath));
        }
      }
    }
  }
  
  // Find files that are not referenced
  for (const file of allFiles) {
    if (!referencedFiles.has(file) && 
        !file.endsWith('.html') && 
        !file.endsWith('.css') && 
        !file.endsWith('.js') &&
        !file.includes('node_modules')) {
      orphanedFiles.push(file);
    }
  }
  
  return orphanedFiles;
}

// Function to get all files in directory
function getAllFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...getAllFiles(fullPath).map(f => path.join(item, f)));
      } else if (stat.isFile()) {
        files.push(item);
      }
    }
  } catch (error) {
    // Directory might not exist
  }
  
  return files;
}

// Function to check for duplicate content
function checkDuplicateContent(baseDir) {
  const duplicates = [];
  const htmlFiles = findHtmlFiles(baseDir);
  const contentHashes = new Map();
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const cleanContent = content.replace(/\s+/g, ' ').trim();
    const hash = require('crypto').createHash('md5').update(cleanContent).digest('hex');
    
    if (contentHashes.has(hash)) {
      duplicates.push({
        file1: contentHashes.get(hash),
        file2: file,
        similarity: 'exact'
      });
    } else {
      contentHashes.set(hash, file);
    }
  }
  
  return duplicates;
}

// Main function
async function runLinkIntegrity() {
  try {
    console.log('📁 Scanning for HTML files...');
    
    // Check if dist directory exists
    if (!fs.existsSync('./dist')) {
      console.log('⚠️  Dist directory not found. Building project first...');
      execSync('npm run build', { stdio: 'inherit' });
    }
    
    const baseDir = './dist';
    const htmlFiles = findHtmlFiles(baseDir);
    console.log(`📄 Found ${htmlFiles.length} HTML files`);
    
    const allLinks = [];
    const brokenInternalLinks = [];
    const brokenExternalLinks = [];
    
    // Extract links from all HTML files
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractLinks(content);
      
      for (const link of links) {
        if (!allLinks.includes(link)) {
          allLinks.push(link);
        }
      }
    }
    
    console.log(`🔗 Found ${allLinks.length} total links to check`);
    
    // Check internal links
    console.log('\n🔍 Checking internal link integrity...');
    const internalBroken = checkInternalLinks(allLinks, baseDir);
    brokenInternalLinks.push(...internalBroken);
    
    // Check external links
    console.log('\n🌐 Checking external link integrity...');
    const externalBroken = await checkExternalLinks(allLinks);
    brokenExternalLinks.push(...externalBroken);
    
    // Check for orphaned files
    console.log('\n📁 Checking for orphaned files...');
    const orphanedFiles = findOrphanedFiles(baseDir);
    
    // Check for duplicate content
    console.log('\n🔄 Checking for duplicate content...');
    const duplicateContent = checkDuplicateContent(baseDir);
    
    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      totalLinks: allLinks.length,
      internalLinks: allLinks.filter(link => !link.startsWith('http')).length,
      externalLinks: allLinks.filter(link => link.startsWith('http')).length,
      brokenInternalLinks: brokenInternalLinks,
      brokenExternalLinks: brokenExternalLinks,
      orphanedFiles: orphanedFiles,
      duplicateContent: duplicateContent,
      htmlFilesScanned: htmlFiles.length,
      summary: {
        totalBrokenLinks: brokenInternalLinks.length + brokenExternalLinks.length,
        brokenInternalCount: brokenInternalLinks.length,
        brokenExternalCount: brokenExternalLinks.length,
        orphanedFilesCount: orphanedFiles.length,
        duplicateContentCount: duplicateContent.length
      }
    };
    
    // Save report
    fs.writeFileSync('./link-integrity-report.json', JSON.stringify(report, null, 2));
    
    // Display summary
    console.log(`\n📊 Link Integrity Report:`);
    console.log(`Total links checked: ${report.totalLinks}`);
    console.log(`Internal links: ${report.internalLinks}`);
    console.log(`External links: ${report.externalLinks}`);
    console.log(`Broken internal links: ${report.summary.brokenInternalCount}`);
    console.log(`Broken external links: ${report.summary.brokenExternalCount}`);
    console.log(`Orphaned files: ${report.summary.orphanedFilesCount}`);
    console.log(`Duplicate content: ${report.summary.duplicateContentCount}`);
    
    // Display broken links
    if (brokenInternalLinks.length > 0) {
      console.log('\n❌ Broken internal links:');
      brokenInternalLinks.forEach(link => console.log(`  - ${link.link} (${link.reason})`));
    }
    
    if (brokenExternalLinks.length > 0) {
      console.log('\n❌ Broken external links:');
      brokenExternalLinks.forEach(link => console.log(`  - ${link.link} (${link.reason})`));
    }
    
    if (orphanedFiles.length > 0) {
      console.log('\n📁 Orphaned files:');
      orphanedFiles.forEach(file => console.log(`  - ${file}`));
    }
    
    if (duplicateContent.length > 0) {
      console.log('\n🔄 Duplicate content found:');
      duplicateContent.forEach(dup => console.log(`  - ${dup.file1} and ${dup.file2}`));
    }
    
    if (report.summary.totalBrokenLinks === 0 && 
        report.summary.orphanedFilesCount === 0 && 
        report.summary.duplicateContentCount === 0) {
      console.log('\n✅ All links are working and no integrity issues found!');
    }
    
    console.log('\n🔗 Link Integrity Automation completed successfully!');
    console.log('📄 Detailed report saved to: link-integrity-report.json');
    
  } catch (error) {
    console.error('❌ Error in Link Integrity Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runLinkIntegrity();