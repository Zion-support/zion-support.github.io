#!/usr/bin/env node

const fs = require('fs');

// Function to fix comprehensive issues in page.tsx
function fixPageComprehensive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags in stats section
    const statsFix = content.replace(
      /(\s+<div className="text-gray-300">\{stat\.label\}<\/div>\s*)(\s+<\/div>\s*)(\s+<\/div>\s*)(\s+\)\}\s*)/g,
      '$1$2$3$4'
    );
    if (statsFix !== content) {
      content = statsFix;
      modified = true;
    }
    
    // Fix missing closing tags in features section
    const featuresFix = content.replace(
      /(\s+<h2 id="services-heading"[^>]*>Our Services\s*)(\s+<p[^>]*>[^<]*<\/p>\s*)(\s+<\/div>\s*)(\s+<\/div>\s*)/g,
      '$1</h2>$2$3$4'
    );
    if (featuresFix !== content) {
      content = featuresFix;
      modified = true;
    }
    
    // Fix missing closing tags in benefits list
    const benefitsFix = content.replace(
      /(\s+<li[^>]*>.*?\{benefit\}\s*)(\s+<\/li>\s*)(\s+\)\}\s*)/g,
      '$1$2$3'
    );
    if (benefitsFix !== content) {
      content = benefitsFix;
      modified = true;
    }
    
    // Fix missing closing tags in CTA section
    const ctaFix = content.replace(
      /(\s+<h2 id="cta-heading"[^>]*>Ready to Transform Your Business\?\s*)(\s+<p[^>]*>[^<]*<\/p>\s*)(\s+<div[^>]*>)/g,
      '$1</h2>$2$3'
    );
    if (ctaFix !== content) {
      content = ctaFix;
      modified = true;
    }
    
    // Fix missing closing tags in buttons
    const buttonFix = content.replace(
      /(\s+<button[^>]*>Call \+1 302 464 0950\s*)(\s+<a[^>]*>Email[^<]*<\/a>\s*)(\s+<\/div>\s*)(\s+<\/div>\s*)(\s+<\/div>\s*)(\s+<\/section>\s*)/g,
      '$1</button>$2$3$4$5$6'
    );
    if (buttonFix !== content) {
      content = buttonFix;
      modified = true;
    }
    
    // Fix missing closing tags in main structure
    const mainFix = content.replace(
      /(\s+<Footer \/>\s*)(\s+<\/div>\s*)(\s+<\/div>\s*)(\s+<\/div>\s*)(\s+\);)/g,
      '$1$2$3$4$5'
    );
    if (mainFix !== content) {
      content = mainFix;
      modified = true;
    }
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing page syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive page fixes...');

const result = fixPageComprehensive('./app/page.tsx');
if (result) {
  console.log('Fixed comprehensive issues in page.tsx');
} else {
  console.log('No issues found in page.tsx');
}