#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const accessibilityReportFile = './accessibility-audit.json';

// Accessibility audit checklist
const accessibilityChecklist = {
  semanticHTML: [
    'Use proper heading hierarchy (h1, h2, h3, etc.)',
    'Use semantic HTML elements (nav, main, section, article)',
    'Ensure all interactive elements are keyboard accessible',
    'Use proper form labels and fieldset elements'
  ],
  keyboardNavigation: [
    'All interactive elements are focusable with Tab key',
    'Focus indicators are visible and clear',
    'Tab order follows logical sequence',
    'Skip links are provided for main content'
  ],
  screenReader: [
    'Alt text provided for all images',
    'ARIA labels and descriptions where needed',
    'Proper role attributes for custom components',
    'Live regions for dynamic content updates'
  ],
  colorContrast: [
    'Text contrast ratio meets WCAG AA standards (4.5:1)',
    'Large text meets WCAG AA standards (3:1)',
    'Color is not the only means of conveying information',
    'Interactive elements have sufficient contrast'
  ],
  responsiveDesign: [
    'Content is readable at 200% zoom',
    'Layout works on mobile devices',
    'Touch targets are at least 44x44 pixels',
    'Text remains readable without horizontal scrolling'
  ]
};

// Scan components for accessibility issues
function scanComponents() {
  const componentsDir = './src/components';
  const issues = [];
  
  if (!fs.existsSync(componentsDir)) {
    console.log('❌ Components directory not found');
    return issues;
  }
  
  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      // Check for common accessibility issues
      const checks = [
        {
          pattern: /<img(?!.*alt=)/g,
          issue: 'Image missing alt attribute',
          severity: 'high'
        },
        {
          pattern: /<button(?!.*aria-label)(?!.*aria-labelledby)/g,
          issue: 'Button missing accessible label',
          severity: 'medium'
        },
        {
          pattern: /<input(?!.*aria-label)(?!.*aria-labelledby)(?!.*id)/g,
          issue: 'Input missing accessible label',
          severity: 'high'
        },
        {
          pattern: /<div.*onClick/g,
          issue: 'Div with onClick should be button or have proper role',
          severity: 'medium'
        },
        {
          pattern: /<h[1-6](?!.*id)/g,
          issue: 'Heading missing id for anchor links',
          severity: 'low'
        }
      ];
      
      checks.forEach(check => {
        const matches = content.match(check.pattern);
        if (matches) {
          issues.push({
            file: relativePath,
            issue: check.issue,
            severity: check.severity,
            count: matches.length
          });
        }
      });
      
    } catch (error) {
      console.warn(`Could not scan file ${filePath}:`, error.message);
    }
  }
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        scanFile(filePath);
      }
    }
  }
  
  scanDirectory(componentsDir);
  return issues;
}

// Generate accessibility report
function generateAccessibilityReport() {
  console.log('🔍 Scanning components for accessibility issues...');
  
  const issues = scanComponents();
  const issueCount = issues.length;
  const highSeverityIssues = issues.filter(issue => issue.severity === 'high').length;
  const mediumSeverityIssues = issues.filter(issue => issue.severity === 'medium').length;
  const lowSeverityIssues = issues.filter(issue => issue.severity === 'low').length;
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalIssues: issueCount,
      highSeverity: highSeverityIssues,
      mediumSeverity: mediumSeverityIssues,
      lowSeverity: lowSeverityIssues
    },
    issues,
    checklist: accessibilityChecklist,
    recommendations: generateRecommendations(issues)
  };
  
  // Save report
  fs.writeFileSync(accessibilityReportFile, JSON.stringify(report, null, 2));
  
  // Display report
  console.log('\n♿ Accessibility Audit Report');
  console.log('============================');
  console.log(`Total Issues Found: ${issueCount}`);
  console.log(`High Severity: ${highSeverityIssues}`);
  console.log(`Medium Severity: ${mediumSeverityIssues}`);
  console.log(`Low Severity: ${lowSeverityIssues}`);
  
  if (issues.length > 0) {
    console.log('\n🚨 Issues Found:');
    issues.forEach((issue, index) => {
      const severity = issue.severity === 'high' ? '🔴' : issue.severity === 'medium' ? '🟡' : '🟢';
      console.log(`  ${index + 1}. ${severity} ${issue.file}: ${issue.issue} (${issue.count} occurrences)`);
    });
  } else {
    console.log('\n✅ No accessibility issues found!');
  }
  
  console.log('\n📋 Accessibility Checklist:');
  Object.entries(accessibilityChecklist).forEach(([category, items]) => {
    console.log(`\n${category.toUpperCase()}:`);
    items.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item}`);
    });
  });
  
  if (report.recommendations.length > 0) {
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. ${rec}`);
    });
  }
  
  console.log(`\n📄 Full report saved to: ${accessibilityReportFile}`);
}

// Generate recommendations based on found issues
function generateRecommendations(issues) {
  const recommendations = [];
  
  const highSeverityIssues = issues.filter(issue => issue.severity === 'high');
  const mediumSeverityIssues = issues.filter(issue => issue.severity === 'medium');
  
  if (highSeverityIssues.length > 0) {
    recommendations.push('Priority: Fix all high severity accessibility issues');
  }
  
  if (issues.some(issue => issue.issue.includes('alt attribute'))) {
    recommendations.push('Add alt text to all images for screen reader users');
  }
  
  if (issues.some(issue => issue.issue.includes('accessible label'))) {
    recommendations.push('Add proper labels to all form inputs and buttons');
  }
  
  if (issues.some(issue => issue.issue.includes('onClick'))) {
    recommendations.push('Replace div elements with onClick with proper button elements');
  }
  
  if (mediumSeverityIssues.length > 0) {
    recommendations.push('Review and fix medium severity issues');
  }
  
  recommendations.push('Test with screen readers (NVDA, JAWS, VoiceOver)');
  recommendations.push('Test keyboard navigation without mouse');
  recommendations.push('Use automated accessibility testing tools');
  recommendations.push('Conduct user testing with people with disabilities');
  
  return recommendations;
}

// Main execution
function main() {
  console.log('🚀 Starting accessibility audit...');
  
  generateAccessibilityReport();
  
  console.log('\n✅ Accessibility audit completed!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { scanComponents, generateAccessibilityReport };