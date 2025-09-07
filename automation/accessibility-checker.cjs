#!/usr/bin/env node

/**
 * Accessibility Checker
 * Checks and improves accessibility compliance
 */

const fs = require('fs');
const path = require('path');

console.log('♿ Starting accessibility audit...');

// Accessibility checker configuration
const config = {
  outputDir: path.join(__dirname, '..', 'accessibility-reports'),
  checks: {
    ariaLabels: true,
    colorContrast: true,
    keyboardNavigation: true,
    semanticHTML: true,
    altText: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Check for ARIA labels
function checkAriaLabels(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for interactive elements without ARIA labels
    const interactiveElements = content.match(/<(button|input|select|textarea)(?![^>]*aria-label)[^>]*>/gi);
    if (interactiveElements) {
      interactiveElements.forEach(element => {
        if (!element.includes('aria-label') && !element.includes('aria-labelledby')) {
          issues.push({
            file: path.relative(__dirname, file),
            type: 'missing-aria-label',
            element: element.trim(),
            severity: 'medium'
          });
        }
      });
    }
  });
  
  return issues;
}

// Check for alt text on images
function checkAltText(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for images without alt text
    const images = content.match(/<img[^>]*>/gi);
    if (images) {
      images.forEach(img => {
        if (!img.includes('alt=') || img.includes('alt=""')) {
          issues.push({
            file: path.relative(__dirname, file),
            type: 'missing-alt-text',
            element: img.trim(),
            severity: 'high'
          });
        }
      });
    }
  });
  
  return issues;
}

// Check for semantic HTML
function checkSemanticHTML(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for proper heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>/gi);
    if (headings) {
      let lastLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.match(/<h([1-6])/)[1]);
        if (level > lastLevel + 1) {
          issues.push({
            file: path.relative(__dirname, file),
            type: 'heading-hierarchy',
            element: heading.trim(),
            severity: 'medium',
            message: `Heading level ${level} follows level ${lastLevel}`
          });
        }
        lastLevel = level;
      });
    }
  });
  
  return issues;
}

// Get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Run accessibility audit
function runAccessibilityAudit() {
  const srcDir = path.join(__dirname, '..', 'src');
  const componentsDir = path.join(__dirname, '..', 'components');
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  const audit = {
    timestamp: new Date().toISOString(),
    checks: {
      ariaLabels: checkAriaLabels(srcDir).concat(checkAriaLabels(componentsDir)).concat(checkAriaLabels(pagesDir)),
      altText: checkAltText(srcDir).concat(checkAltText(componentsDir)).concat(checkAltText(pagesDir)),
      semanticHTML: checkSemanticHTML(srcDir).concat(checkSemanticHTML(componentsDir)).concat(checkSemanticHTML(pagesDir))
    },
    summary: {
      totalIssues: 0,
      highSeverity: 0,
      mediumSeverity: 0,
      lowSeverity: 0
    }
  };

  // Calculate summary
  Object.values(audit.checks).forEach(check => {
    audit.summary.totalIssues += check.length;
    check.forEach(issue => {
      if (issue.severity === 'high') audit.summary.highSeverity++;
      else if (issue.severity === 'medium') audit.summary.mediumSeverity++;
      else audit.summary.lowSeverity++;
    });
  });

  return audit;
}

// Save audit results
function saveAuditResults(audit) {
  const filename = `accessibility-audit-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(audit, null, 2));
  console.log(`♿ Accessibility audit saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 Accessibility Audit Summary:`);
  console.log(`   Total Issues: ${audit.summary.totalIssues}`);
  console.log(`   High Severity: ${audit.summary.highSeverity}`);
  console.log(`   Medium Severity: ${audit.summary.mediumSeverity}`);
  console.log(`   Low Severity: ${audit.summary.lowSeverity}`);
}

// Main execution
try {
  const audit = runAccessibilityAudit();
  saveAuditResults(audit);
  console.log('✅ Accessibility audit completed');
} catch (error) {
  console.error('❌ Accessibility audit failed:', error.message);
  process.exit(1);
}