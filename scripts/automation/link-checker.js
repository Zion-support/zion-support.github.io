#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔗 Starting daily link checker automation...');

async function checkLinks() {
  try {
    // Build the project first
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build failed: dist folder not found');
    }
    
    console.log('✅ Build completed successfully');
    
    // Check for common issues
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      throw new Error('index.html not found in dist folder');
    }
    
    console.log('✅ index.html found');
    
    // Check for potential broken references
    const distContent = fs.readdirSync(distPath, { recursive: true });
    let hasIssues = false;
    
    for (const item of distContent) {
      if (typeof item === 'string' && item.includes('404')) {
        console.log('⚠️  Found potential 404 reference:', item);
        hasIssues = true;
      }
    }
    
    if (!hasIssues) {
      console.log('✅ No obvious broken references found');
    }
    
    // Check for broken links in HTML files
    const htmlFiles = findHtmlFiles(distPath);
    for (const htmlFile of htmlFiles) {
      const content = fs.readFileSync(htmlFile, 'utf8');
      if (content.includes('404') || content.includes('not found') || content.includes('broken')) {
        console.log('⚠️  Found potential broken references in:', htmlFile);
        hasIssues = true;
      }
    }
    
    if (hasIssues) {
      console.log('⚠️  Link check completed with issues found');
      process.exit(1);
    } else {
      console.log('✅ Link check completed successfully - no issues found');
    }
    
  } catch (error) {
    console.error('❌ Link check failed:', error.message);
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

// Run the link checker
checkLinks();
