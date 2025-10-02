#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Starting SEO Optimization...');

// Check for missing meta tags
function checkMetaTags() {
  console.log('📋 Checking meta tags...');
  
  const htmlPath = path.join(process.cwd(), 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    
    const requiredTags = [
      'title',
      'meta name="description"',
      'meta name="keywords"',
      'meta property="og:title"',
      'meta property="og:description"',
      'meta property="og:image"',
      'meta property="twitter:card"',
      'link rel="canonical"'
    ];
    
    const missing = requiredTags.filter(tag => !html.includes(tag));
    
    if (missing.length === 0) {
      console.log('✅ All required meta tags present');
    } else {
      console.log(`⚠️  Missing meta tags: ${missing.join(', ')}`);
    }
  }
}

// Check for structured data
function checkStructuredData() {
  console.log('📊 Checking structured data...');
  
  const htmlPath = path.join(process.cwd(), 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    
    if (html.includes('application/ld+json')) {
      console.log('✅ Structured data found');
    } else {
      console.log('⚠️  No structured data found');
    }
  }
}

// Check for alt tags in images
function checkImageAltTags() {
  console.log('🖼️  Checking image alt tags...');
  
  const srcPath = path.join(process.cwd(), 'src');
  let imagesWithoutAlt = 0;
  let totalImages = 0;
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const imgMatches = content.match(/<img[^>]*>/g);
        
        if (imgMatches) {
          imgMatches.forEach(img => {
            totalImages++;
            if (!img.includes('alt=')) {
              imagesWithoutAlt++;
            }
          });
        }
      }
    });
  }
  
  if (fs.existsSync(srcPath)) {
    checkDirectory(srcPath);
  }
  
  if (totalImages > 0) {
    if (imagesWithoutAlt === 0) {
      console.log('✅ All images have alt tags');
    } else {
      console.log(`⚠️  ${imagesWithoutAlt}/${totalImages} images missing alt tags`);
    }
  } else {
    console.log('ℹ️  No images found in source files');
  }
}

// Check for heading hierarchy
function checkHeadingHierarchy() {
  console.log('📝 Checking heading hierarchy...');
  
  const srcPath = path.join(process.cwd(), 'src');
  let h1Count = 0;
  let h2Count = 0;
  let h3Count = 0;
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        h1Count += (content.match(/<h1/g) || []).length;
        h2Count += (content.match(/<h2/g) || []).length;
        h3Count += (content.match(/<h3/g) || []).length;
      }
    });
  }
  
  if (fs.existsSync(srcPath)) {
    checkDirectory(srcPath);
  }
  
  console.log(`📊 Headings found: H1(${h1Count}) H2(${h2Count}) H3(${h3Count})`);
  
  if (h1Count === 0) {
    console.log('⚠️  No H1 headings found');
  } else if (h1Count > 1) {
    console.log('⚠️  Multiple H1 headings found (should be only one per page)');
  } else {
    console.log('✅ Proper H1 heading structure');
  }
}

// Check for internal linking
function checkInternalLinking() {
  console.log('🔗 Checking internal linking...');
  
  const srcPath = path.join(process.cwd(), 'src');
  let internalLinks = 0;
  let externalLinks = 0;
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        const linkMatches = content.match(/href=["']([^"']+)["']/g);
        if (linkMatches) {
          linkMatches.forEach(link => {
            const url = link.match(/href=["']([^"']+)["']/)[1];
            if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
              internalLinks++;
            } else if (url.startsWith('http')) {
              externalLinks++;
            }
          });
        }
      }
    });
  }
  
  if (fs.existsSync(srcPath)) {
    checkDirectory(srcPath);
  }
  
  console.log(`🔗 Links found: Internal(${internalLinks}) External(${externalLinks})`);
  
  if (internalLinks < 10) {
    console.log('⚠️  Low internal linking - consider adding more internal links');
  } else {
    console.log('✅ Good internal linking structure');
  }
}

// Main execution
async function optimize() {
  checkMetaTags();
  checkStructuredData();
  checkImageAltTags();
  checkHeadingHierarchy();
  checkInternalLinking();
  
  console.log('\n✅ SEO optimization check completed!');
  console.log('\n📋 Recommendations:');
  console.log('   - Ensure all pages have unique titles and descriptions');
  console.log('   - Add structured data for better search visibility');
  console.log('   - Optimize images with proper alt tags');
  console.log('   - Maintain proper heading hierarchy');
  console.log('   - Build internal linking between related pages');
}

optimize().catch(console.error);