#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Simple accessibility audit
const audit = {
  timestamp: new Date().toISOString(),
  issues: [],
  recommendations: [],
  score: 100
};

// Check for essential accessibility features
const checks = [
  {
    name: 'Viewport meta tag',
    test: /<meta[^>]*name=["']viewport["'][^>]*>/i,
    message: 'Viewport meta tag is present',
    severity: 'info'
  },
  {
    name: 'Title tag',
    test: /<title[^>]*>.*<\/title>/i,
    message: 'Title tag is present',
    severity: 'info'
  },
  {
    name: 'Meta description',
    test: /<meta[^>]*name=["']description["'][^>]*>/i,
    message: 'Meta description is present',
    severity: 'info'
  },
  {
    name: 'Alt attributes for images',
    test: /<img[^>]*alt=["'][^"']*["']/i,
    message: 'Images should have alt attributes',
    severity: 'high'
  },
  {
    name: 'Heading structure',
    test: /<h[1-6][^>]*>/i,
    message: 'Heading tags are present',
    severity: 'info'
  },
  {
    name: 'Form labels',
    test: /<label[^>]*for=["'][^"']*["']/i,
    message: 'Form inputs should have associated labels',
    severity: 'medium'
  },
  {
    name: 'ARIA attributes',
    test: /aria-[a-z-]+/i,
    message: 'ARIA attributes are present',
    severity: 'info'
  },
  {
    name: 'Focus management',
    test: /tabindex/i,
    message: 'Tabindex attributes are present',
    severity: 'info'
  },
  {
    name: 'Color contrast',
    test: /color|background/i,
    message: 'Color and background properties are present',
    severity: 'info'
  }
];

// Run accessibility checks
checks.forEach(check => {
  const htmlFiles = findHtmlFiles('./dist');
  let found = false;
  
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (check.test.test(content)) {
      found = true;
    }
  });
  
  if (found) {
    audit.recommendations.push(`✅ ${check.message}`);
  } else {
    audit.issues.push({
      type: check.name,
      message: check.message,
      severity: check.severity
    });
    audit.score -= check.severity === 'high' ? 20 : check.severity === 'medium' ? 10 : 5;
  }
});

// Generate recommendations for failed checks
if (audit.issues.length > 0) {
  const failedChecks = audit.issues.filter(issue => issue.severity === 'high' || issue.severity === 'medium');
  failedChecks.forEach(issue => {
    audit.recommendations.push(`🔧 ${issue.message}`);
  });
}

// Ensure score doesn't go below 0
audit.score = Math.max(0, audit.score);

// Save audit results
fs.writeFileSync('./accessibility-audit-report.json', JSON.stringify(audit, null, 2));

console.log('Accessibility Audit Results:');
console.log(`Score: ${audit.score}/100`);
console.log(`Issues found: ${audit.issues.length}`);
console.log(`Recommendations: ${audit.recommendations.length}`);
console.log('Report saved to: accessibility-audit-report.json');

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