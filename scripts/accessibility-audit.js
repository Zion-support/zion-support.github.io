#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Accessibility audit for HTML files
function auditAccessibility() {
  const distPath = path.join(__dirname, '../dist');
  const indexPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.log('❌ Index.html not found. Please run npm run build first.');
    return;
  }

  const htmlContent = fs.readFileSync(indexPath, 'utf8');
  const audit = {
    timestamp: new Date().toISOString(),
    issues: [],
    recommendations: [],
    score: 100
  };

  // Check for essential accessibility features
  const checks = [
    {
      name: 'HTML lang attribute',
      test: /<html[^>]*lang=["'][^"']*["']/i,
      message: 'HTML should have a lang attribute',
      severity: 'high'
    },
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
    const found = check.test.test(htmlContent);
    if (found) {
      if (check.severity === 'high' || check.severity === 'medium') {
        audit.issues.push({
          type: check.name,
          severity: check.severity,
          message: check.message,
          status: 'pass'
        });
      }
    } else {
      if (check.severity === 'high' || check.severity === 'medium') {
        audit.issues.push({
          type: check.name,
          severity: check.severity,
          message: check.message,
          status: 'fail'
        });
        audit.score -= check.severity === 'high' ? 20 : 10;
      }
    }
  });

  // Generate recommendations
  const failedChecks = audit.issues.filter(issue => issue.status === 'fail');
  
  if (failedChecks.length === 0) {
    audit.recommendations.push('✅ All basic accessibility checks passed!');
  } else {
    failedChecks.forEach(issue => {
      audit.recommendations.push(`🔧 ${issue.message}`);
    });
  }

  // Additional recommendations
  audit.recommendations.push('📱 Test with screen readers (NVDA, JAWS, VoiceOver)');
  audit.recommendations.push('🎨 Verify color contrast ratios meet WCAG AA standards');
  audit.recommendations.push('⌨️ Test keyboard navigation and focus management');
  audit.recommendations.push('🔍 Use automated tools like axe-core or Lighthouse');

  return audit;
}

// Generate accessibility report
function generateReport() {
  console.log('♿ Running accessibility audit...\n');
  
  const audit = auditAccessibility();
  
  if (!audit) return;

  console.log('📊 Accessibility Audit Results:');
  console.log('==============================');
  console.log(`Total Checks: ${audit.issues.length}`);
  console.log(`Passed: ${audit.issues.filter(i => i.status === 'pass').length}`);
  console.log(`Failed: ${audit.issues.filter(i => i.status === 'fail').length}`);
  console.log(`Score: ${Math.max(0, audit.score)}/100\n`);

  console.log('🔍 Detailed Results:');
  console.log('===================');
  audit.issues.forEach((issue, index) => {
    const status = issue.status === 'pass' ? '✅' : '❌';
    const severity = issue.severity === 'high' ? '🔴' : issue.severity === 'medium' ? '🟡' : '🟢';
    console.log(`${index + 1}. ${status} ${severity} ${issue.type}: ${issue.message}`);
  });

  console.log('\n💡 Recommendations:');
  console.log('==================');
  audit.recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`);
  });

  // Save detailed report
  const reportPath = path.join(__dirname, '../accessibility-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(audit, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);

  // Accessibility score interpretation
  if (audit.score >= 90) {
    console.log('\n🌟 Excellent accessibility!');
  } else if (audit.score >= 70) {
    console.log('\n👍 Good accessibility with room for improvement');
  } else if (audit.score >= 50) {
    console.log('\n⚠️  Accessibility needs attention');
  } else {
    console.log('\n🚨 Accessibility requires immediate improvement');
  }
}

// Run audit
generateReport();