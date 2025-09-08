#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔗 Link Checker Automation Started');

// Function to scan for links in code and documentation
function scanForLinks() {
  console.log('📋 Scanning for links...');
  
  try {
    const directories = ['src', 'pages', 'components', 'utils', 'public'];
    let links = [];
    
    directories.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        scanDirectoryForLinks(dirPath, links);
      }
    });
    
    // Also scan markdown files
    scanMarkdownFiles(links);
    
    console.log(`🔍 Found ${links.length} links to check`);
    return links;
  } catch (error) {
    console.error('❌ Error scanning for links:', error.message);
    return [];
  }
}

function scanDirectoryForLinks(dirPath, links) {
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectoryForLinks(filePath, links);
      } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html')) {
        scanFileForLinks(filePath, links);
      }
    });
  } catch (error) {
    console.error(`❌ Error scanning directory ${dirPath}:`, error.message);
  }
}

function scanFileForLinks(filePath, links) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for URLs and links
    const urlRegex = /(https?:\/\/[^\s"<>]+)/g;
    const matches = content.match(urlRegex);
    
    if (matches) {
      matches.forEach(url => {
        links.push({
          file: filePath,
          url: url,
          type: 'code'
        });
      });
    }
  } catch (error) {
    console.error(`❌ Error scanning file ${filePath}:`, error.message);
  }
}

function scanMarkdownFiles(links) {
  try {
    const markdownFiles = ['README.md', 'PM2-AUTOMATION-README.md'];
    
    markdownFiles.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const urlRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let match;
        
        while ((match = urlRegex.exec(content)) !== null) {
          links.push({
            file: filePath,
            url: match[2],
            text: match[1],
            type: 'markdown'
          });
        }
      }
    });
  } catch (error) {
    console.error('❌ Error scanning markdown files:', error.message);
  }
}

// Function to validate links (basic validation)
function validateLinks(links) {
  console.log('✅ Validating links...');
  
  let validCount = 0;
  let invalidCount = 0;
  
  links.forEach(link => {
    try {
      // Basic URL validation
      const url = new URL(link.url);
      if (url.protocol === 'http:' || url.protocol === 'https:') {
        validCount++;
        console.log(`✅ Valid link: ${link.url}`);
      } else {
        invalidCount++;
        console.log(`❌ Invalid link: ${link.url}`);
      }
    } catch (error) {
      invalidCount++;
      console.log(`❌ Invalid URL format: ${link.url}`);
    }
  });
  
  console.log(`📊 Link validation results: ${validCount} valid, ${invalidCount} invalid`);
  return { valid: validCount, invalid: invalidCount };
}

// Function to generate link report
function generateLinkReport(links, validationResults) {
  console.log('📝 Generating link report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    totalLinks: links.length,
    validLinks: validationResults.valid,
    invalidLinks: validationResults.invalid,
    links: links
  };
  
  const reportPath = path.join(process.cwd(), 'link-reports', 'link-checker-report.json');
  
  // Ensure directory exists
  const reportDir = path.dirname(reportPath);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`📄 Link report saved to: ${reportPath}`);
}

// Main execution
function main() {
  console.log('🔄 Starting link checker automation...');
  
  const links = scanForLinks();
  
  if (links.length > 0) {
    const validationResults = validateLinks(links);
    generateLinkReport(links, validationResults);
    console.log(`🎯 Automation completed: ${links.length} links checked`);
  } else {
    console.log('✅ No links found to check');
  }
  
  console.log('🏁 Link Checker Automation Completed');
}

// Run the automation
main();

// Keep the process running for PM2
setInterval(() => {
  console.log('💓 Link Checker heartbeat...');
}, 1800000); // 30 minutes