#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Simple SEO audit
const audit = {
  timestamp: new Date().toISOString(),
  issues: [],
  recommendations: [],
  score: 100
};

// Check for essential SEO features
const checks = [
  {
    name: 'Title tag',
    test: /<title[^>]*>.*<\/title>/i,
    message: 'Title tag is present',
    severity: 'high'
  },
  {
    name: 'Meta description',
    test: /<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["']/i,
    message: 'Meta description is present',
    severity: 'high'
  },
  {
    name: 'Meta keywords',
    test: /<meta[^>]*name=["']keywords["'][^>]*content=["'][^"']*["']/i,
    message: 'Meta keywords are present',
    severity: 'medium'
  },
  {
    name: 'Open Graph tags',
    test: /<meta[^>]*property=["']og:[^"']*["'][^>]*>/i,
    message: 'Open Graph tags are present',
    severity: 'medium'
  },
  {
    name: 'Twitter Card tags',
    test: /<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/i,
    message: 'Twitter Card tags are present',
    severity: 'low'
  },
  {
    name: 'Canonical URL',
    test: /<link[^>]*rel=["']canonical["'][^>]*>/i,
    message: 'Canonical URL is present',
    severity: 'high'
  },
  {
    name: 'Robots meta tag',
    test: /<meta[^>]*name=["']robots["'][^>]*>/i,
    message: 'Robots meta tag is present',
    severity: 'medium'
  },
  {
    name: 'Structured data',
    test: /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i,
    message: 'Structured data is present',
    severity: 'medium'
  },
  {
    name: 'Heading structure',
    test: /<h1[^>]*>.*<\/h1>/i,
    message: 'H1 tag is present',
    severity: 'high'
  },
  {
    name: 'Alt attributes for images',
    test: /<img[^>]*alt=["'][^"']*["']/i,
    message: 'Images have alt attributes',
    severity: 'high'
  }
];

// Run SEO checks
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
    audit.score -= check.severity === 'high' ? 15 : check.severity === 'medium' ? 10 : 5;
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
fs.writeFileSync('./seo-audit-report.json', JSON.stringify(audit, null, 2));

console.log('SEO Audit Results:');
console.log(`Score: ${audit.score}/100`);
console.log(`Issues found: ${audit.issues.length}`);
console.log(`Recommendations: ${audit.recommendations.length}`);
console.log('Report saved to: seo-audit-report.json');

function findHtmlFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
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