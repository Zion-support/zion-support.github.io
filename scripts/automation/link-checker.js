#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔗 Starting continuous link checker automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function checkLinks() {
  try {
    console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('📦 Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('❌ Build failed, skipping link check');
      return;
    }

    // Find all HTML files in dist directory
    const distDir = path.join(__dirname, '../../dist');
    if (!fs.existsSync(distDir)) {
      console.log('❌ Dist directory not found');
      return;
    }

    const htmlFiles = findHtmlFiles(distDir);
    console.log(`📄 Found ${htmlFiles.length} HTML files to check`);

    let totalLinks = 0;
    let brokenLinks = 0;
    const brokenLinksList = [];

    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractLinks(content);
      
      for (const link of links) {
        totalLinks++;
        if (!await isLinkValid(link, file)) {
          brokenLinks++;
          brokenLinksList.push({ file, link });
          console.log(`❌ Broken link: ${link} in ${file}`);
        }
      }
    }

    console.log(`📊 Link check completed:`);
    console.log(`   Total links: ${totalLinks}`);
    console.log(`   Broken links: ${brokenLinks}`);
    console.log(`   Success rate: ${((totalLinks - brokenLinks) / totalLinks * 100).toFixed(2)}%`);

    if (brokenLinks > 0) {
      console.log('🔧 Broken links found:');
      brokenLinksList.forEach(({ file, link }) => {
        console.log(`   ${file}: ${link}`);
      });
    } else {
      console.log('✅ All links are working!');
    }

  } catch (error) {
    console.error('❌ Link check failed:', error.message);
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

function extractLinks(htmlContent) {
  const links = [];
  const linkRegex = /href=["']([^"']+)["']/g;
  const imgRegex = /src=["']([^"']+)["']/g;
  
  let match;
  while ((match = linkRegex.exec(htmlContent)) !== null) {
    links.push(match[1]);
  }
  
  while ((match = imgRegex.exec(htmlContent)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

async function isLinkValid(link, baseFile) {
  // Skip external links for now
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return true;
  }
  
  // Skip mailto and tel links
  if (link.startsWith('mailto:') || link.startsWith('tel:')) {
    return true;
  }
  
  // Skip anchor links
  if (link.startsWith('#')) {
    return true;
  }
  
  // Resolve relative paths
  const baseDir = path.dirname(baseFile);
  const resolvedPath = path.resolve(baseDir, link);
  const distDir = path.join(__dirname, '../../dist');
  
  // Check if file exists
  if (fs.existsSync(resolvedPath)) {
    return true;
  }
  
  // Check if it's a directory with index.html
  if (fs.existsSync(path.join(resolvedPath, 'index.html'))) {
    return true;
  }
  
  return false;
}

// Run immediately
checkLinks();

// Set up interval for continuous automation
setInterval(checkLinks, AUTOMATION_INTERVAL);

console.log(`⏰ Link checker scheduled to run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);