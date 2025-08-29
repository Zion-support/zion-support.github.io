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
    console.log('🏗️ Building project for link integrity checking...');
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
    
    // Scan for all links in HTML files
    console.log('🔍 Scanning for links in HTML files...');
    const allLinks = findAllLinks(distPath);
    console.log(`📊 Found ${allLinks.length} total links`);
    
    // Categorize links
    const internalLinks = allLinks.filter(link => isInternalLink(link.url));
    const externalLinks = allLinks.filter(link => isExternalLink(link.url));
    const assetLinks = allLinks.filter(link => isAssetLink(link.url));
    
    console.log(`📊 Link breakdown:`);
    console.log(`  - Internal links: ${internalLinks.length}`);
    console.log(`  - External links: ${externalLinks.length}`);
    console.log(`  - Asset links: ${assetLinks.length}`);
    
    // Check internal link integrity
    console.log('🔍 Checking internal link integrity...');
    const internalIssues = checkInternalLinkIntegrity(internalLinks, distPath);
    
    // Check asset link integrity
    console.log('🔍 Checking asset link integrity...');
    const assetIssues = checkAssetLinkIntegrity(assetLinks, distPath);
    
    // Check for orphaned files
    console.log('🔍 Checking for orphaned files...');
    const orphanedFiles = findOrphanedFiles(distPath, allLinks);
    
    // Check for broken references
    console.log('🔍 Checking for broken references...');
    const brokenRefs = findBrokenReferences(distPath, allLinks);
    
    // Generate link integrity report
    console.log('📊 Generating link integrity report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalLinks: allLinks.length,
      internalLinks: internalLinks.length,
      externalLinks: externalLinks.length,
      assetLinks: assetLinks.length,
      internalIssues: internalIssues.length,
      assetIssues: assetIssues.length,
      orphanedFiles: orphanedFiles.length,
      brokenRefs: brokenRefs.length,
      details: {
        internalIssues,
        assetIssues,
        orphanedFiles,
        brokenRefs
      },
      summary: 'Link integrity check completed',
      status: 'completed',
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (internalIssues.length > 0) {
      report.recommendations.push('Fix internal link issues to ensure proper navigation');
    }
    
    if (assetIssues.length > 0) {
      report.recommendations.push('Resolve asset link issues to prevent broken resources');
    }
    
    if (orphanedFiles.length > 0) {
      report.recommendations.push('Remove or link orphaned files to avoid dead content');
    }
    
    if (brokenRefs.length > 0) {
      report.recommendations.push('Fix broken references to maintain site integrity');
    }
    
    if (report.recommendations.length === 0) {
      report.recommendations.push('All links are properly integrated and functional');
    }
    
    // Save report
    const reportPath = path.join(process.cwd(), 'link-integrity-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Link integrity report saved to ${reportPath}`);
    
    // Log summary
    console.log(`📊 Link Integrity Summary:`);
    console.log(`  - Total links: ${allLinks.length}`);
    console.log(`  - Internal issues: ${internalIssues.length}`);
    console.log(`  - Asset issues: ${assetIssues.length}`);
    console.log(`  - Orphaned files: ${orphanedFiles.length}`);
    console.log(`  - Broken references: ${brokenRefs.length}`);
    
    if (report.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    console.log('✅ Continuous link integrity check completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous link integrity check failed:', error.message);
  }
}

function findAllLinks(distPath) {
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
        
        // Find all types of links
        const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
        const srcMatches = content.match(/src=["']([^"']+)["']/g) || [];
        const linkMatches = content.match(/<link[^>]+href=["']([^"']+)["']/g) || [];
        
        hrefMatches.forEach(match => {
          const url = match.match(/href=["']([^"']+)["']/)[1];
          links.push({ url, file: filePath, type: 'href' });
        });
        
        srcMatches.forEach(match => {
          const url = match.match(/src=["']([^"']+)["']/)[1];
          links.push({ url, file: filePath, type: 'src' });
        });
        
        linkMatches.forEach(match => {
          const url = match.match(/href=["']([^"']+)["']/)[1];
          links.push({ url, file: filePath, type: 'link' });
        });
      }
    }
  }
  
  scanDirectory(distPath);
  return links;
}

function isInternalLink(url) {
  return url.startsWith('/') || url.startsWith('./') || url.startsWith('../') || url.startsWith('#');
}

function isExternalLink(url) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:');
}

function isAssetLink(url) {
  return url.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i);
}

function checkInternalLinkIntegrity(internalLinks, distPath) {
  const issues = [];
  
  for (const link of internalLinks) {
    if (link.url.startsWith('#')) {
      // Skip anchor links for now
      continue;
    }
    
    let targetPath = link.url;
    if (targetPath.startsWith('./')) {
      targetPath = targetPath.substring(2);
    } else if (targetPath.startsWith('../')) {
      targetPath = targetPath.substring(3);
    } else if (targetPath.startsWith('/')) {
      targetPath = targetPath.substring(1);
    }
    
    const fullPath = path.join(distPath, targetPath);
    
    if (!fs.existsSync(fullPath)) {
      issues.push({
        file: link.file.replace(distPath, ''),
        link: link.url,
        type: link.type,
        issue: 'Target file not found'
      });
    }
  }
  
  return issues;
}

function checkAssetLinkIntegrity(assetLinks, distPath) {
  const issues = [];
  
  for (const link of assetLinks) {
    let targetPath = link.url;
    if (targetPath.startsWith('./')) {
      targetPath = targetPath.substring(2);
    } else if (targetPath.startsWith('../')) {
      targetPath = targetPath.substring(3);
    } else if (targetPath.startsWith('/')) {
      targetPath = targetPath.substring(1);
    }
    
    const fullPath = path.join(distPath, targetPath);
    
    if (!fs.existsSync(fullPath)) {
      issues.push({
        file: link.file.replace(distPath, ''),
        link: link.url,
        type: link.type,
        issue: 'Asset file not found'
      });
    }
  }
  
  return issues;
}

function findOrphanedFiles(distPath, allLinks) {
  const orphaned = [];
  const referencedFiles = new Set();
  
  // Collect all referenced files
  allLinks.forEach(link => {
    if (isInternalLink(link.url) || isAssetLink(link.url)) {
      let targetPath = link.url;
      if (targetPath.startsWith('./')) {
        targetPath = targetPath.substring(2);
      } else if (targetPath.startsWith('../')) {
        targetPath = targetPath.substring(3);
      } else if (targetPath.startsWith('/')) {
        targetPath = targetPath.substring(1);
      }
      referencedFiles.add(targetPath);
    }
  });
  
  // Find files that aren't referenced
  function scanDirectory(currentDir, basePath = '') {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      const relativePath = path.join(basePath, file);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath, relativePath);
      } else if (!file.startsWith('.') && file !== 'index.html') {
        if (!referencedFiles.has(relativePath)) {
          orphaned.push({
            file: relativePath,
            size: stat.size
          });
        }
      }
    }
  }
  
  scanDirectory(distPath);
  return orphaned;
}

function findBrokenReferences(distPath, allLinks) {
  const broken = [];
  
  for (const link of allLinks) {
    if (link.url.startsWith('#')) {
      // Check if anchor exists in the file
      const fileContent = fs.readFileSync(link.file, 'utf8');
      const anchor = link.url.substring(1);
      if (!fileContent.includes(`id="${anchor}"`) && !fileContent.includes(`name="${anchor}"`)) {
        broken.push({
          file: link.file.replace(distPath, ''),
          link: link.url,
          type: link.type,
          issue: 'Anchor not found'
        });
      }
    }
  }
  
  return broken;
}

// Main execution loop
async function main() {
  console.log(`🚀 Link integrity automation started with ${AUTOMATION_INTERVAL}ms interval`);
  
  // Run immediately
  await runLinkIntegrity();
  
  // Set up continuous execution
  setInterval(async () => {
    await runLinkIntegrity();
  }, AUTOMATION_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Link integrity automation shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Link integrity automation shutting down...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Link integrity automation failed to start:', error);
  process.exit(1);
});