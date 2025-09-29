#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔗 Starting continuous link integrity automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

async function runLinkIntegrity() {
  try {
    console.log(`🔗 Running link integrity check at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for link checking...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
    
    // Run linkinator for comprehensive link checking
    console.log('🔍 Running comprehensive link check...');
    try {
      execSync('npx linkinator dist/ --reporter json --output link-report.json', { stdio: 'inherit' });
      console.log('✅ Linkinator completed successfully');
      
      // Parse and analyze link report
      if (fs.existsSync('link-report.json')) {
        analyzeLinkReport(JSON.parse(fs.readFileSync('link-report.json', 'utf8')));
      }
    } catch (error) {
      console.log('⚠️  Linkinator failed but continuing...');
    }
    
    // Check for broken internal links
    console.log('🔍 Checking for broken internal links...');
    const distPath = path.join(process.cwd(), 'dist');
    const internalLinks = findInternalLinks(distPath);
    const brokenInternalLinks = [];
    
    for (const link of internalLinks) {
      if (!fs.existsSync(path.join(distPath, link))) {
        brokenInternalLinks.push(link);
      }
    }
    
    if (brokenInternalLinks.length > 0) {
      console.log('⚠️  Broken internal links found:');
      brokenInternalLinks.forEach(link => {
        console.log(`  - ${link}`);
      });
    } else {
      console.log('✅ No broken internal links found');
    }
    
    // Check for orphaned files
    console.log('🔍 Checking for orphaned files...');
    const orphanedFiles = findOrphanedFiles(distPath);
    
    if (orphanedFiles.length > 0) {
      console.log('⚠️  Orphaned files found:');
      orphanedFiles.forEach(file => {
        console.log(`  - ${file}`);
      });
    } else {
      console.log('✅ No orphaned files found');
    }
    
    // Check for missing assets
    console.log('🔍 Checking for missing assets...');
    const missingAssets = findMissingAssets(distPath);
    
    if (missingAssets.length > 0) {
      console.log('⚠️  Missing assets found:');
      missingAssets.forEach(asset => {
        console.log(`  - ${asset}`);
      });
    } else {
      console.log('✅ No missing assets found');
    }
    
    // Generate link integrity report
    console.log('📊 Generating link integrity report...');
    const report = {
      timestamp: new Date().toISOString(),
      brokenInternalLinks: brokenInternalLinks.length,
      orphanedFiles: orphanedFiles.length,
      missingAssets: missingAssets.length,
      summary: 'Link integrity check completed'
    };
    
    const reportPath = path.join(process.cwd(), 'link-integrity-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Link integrity report saved to ${reportPath}`);
    
    console.log('✅ Continuous link integrity check completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous link integrity check failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

function findInternalLinks(distPath) {
  const internalLinks = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.html')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          // Find internal links (href attributes)
          const hrefMatches = content.match(/href=["']([^"']+)["']/g);
          if (hrefMatches) {
            hrefMatches.forEach(match => {
              const href = match.match(/href=["']([^"']+)["']/)[1];
              if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../')) {
                internalLinks.push(href);
              }
            });
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(distPath);
  return [...new Set(internalLinks)]; // Remove duplicates
}

function findOrphanedFiles(distPath) {
  const referencedFiles = new Set();
  const allFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const relativePath = path.relative(distPath, fullPath);
          allFiles.push(relativePath);
          
          // If it's an HTML file, check for references
          if (item.endsWith('.html')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Find references to other files
            const fileMatches = content.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/g);
            if (fileMatches) {
              fileMatches.forEach(match => {
                const fileRef = match.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/)[1] || match.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/)[2];
                if (fileRef && !fileRef.startsWith('http')) {
                  referencedFiles.add(fileRef);
                }
              });
            }
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(distPath);
  
  // Find files that are not referenced
  return allFiles.filter(file => {
    return !referencedFiles.has(file) && 
           !file.endsWith('.html') && 
           !file.endsWith('.css') && 
           !file.endsWith('.js');
  });
}

function findMissingAssets(distPath) {
  const referencedAssets = new Set();
  const missingAssets = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.html')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          // Find asset references
          const assetMatches = content.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/g);
          if (assetMatches) {
            assetMatches.forEach(match => {
              const assetRef = match.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/)[1] || match.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/)[2];
              if (assetRef && !assetRef.startsWith('http')) {
                referencedAssets.add(assetRef);
              }
            });
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(distPath);
  
  // Check if referenced assets exist
  referencedAssets.forEach(asset => {
    const assetPath = path.join(distPath, asset);
    if (!fs.existsSync(assetPath)) {
      missingAssets.push(asset);
    }
  });
  
  return missingAssets;
}

function analyzeLinkReport(linkReport) {
  if (linkReport.results) {
    const brokenLinks = linkReport.results.filter(result => result.status !== 200);
    
    if (brokenLinks.length > 0) {
      console.log(`⚠️  Found ${brokenLinks.length} broken external links:`);
      brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (Status: ${link.status})`);
      });
    } else {
      console.log('✅ All external links are working');
    }
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous link integrity checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial link integrity check
  await runLinkIntegrity();
  
  // Set up continuous execution
  setInterval(async () => {
    await runLinkIntegrity();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous link integrity checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the continuous link integrity checker
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous link integrity checker:', error);
  process.exit(1);
});
