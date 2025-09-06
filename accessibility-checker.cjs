#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('♿ Accessibility Checker Started...');

// Check accessibility compliance
function checkAccessibility() {
  const issues = [];
  const recommendations = [];
  
  // Check for accessibility issues
  const pagesDir = '/workspace/pages_minimal';
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        const filePath = path.join(pagesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for missing alt attributes on images
        if (content.includes('<img') && !content.includes('alt=')) {
          issues.push({
            file: filePath,
            issue: 'Images missing alt attributes',
            severity: 'high',
            wcag: '1.1.1'
          });
        }
        
        // Check for missing form labels
        if (content.includes('<input') && !content.includes('<label')) {
          issues.push({
            file: filePath,
            issue: 'Form inputs missing labels',
            severity: 'high',
            wcag: '1.3.1'
          });
        }
        
        // Check for heading hierarchy
        const headingMatches = content.match(/<h[1-6]/g);
        if (headingMatches && headingMatches.length > 1) {
          const hasH1 = content.includes('<h1');
          if (!hasH1) {
            issues.push({
              file: filePath,
              issue: 'Missing H1 heading',
              severity: 'medium',
              wcag: '1.3.1'
            });
          }
        }
        
        // Check for color contrast (basic check)
        if (content.includes('color:') && !content.includes('background-color:')) {
          issues.push({
            file: filePath,
            issue: 'Potential color contrast issues',
            severity: 'medium',
            wcag: '1.4.3'
          });
        }
      }
    });
  }
  
  // Generate accessibility report
  const report = {
    timestamp: new Date().toISOString(),
    issues,
    recommendations: [
      'Add alt attributes to all images',
      'Ensure proper heading hierarchy (H1, H2, H3...)',
      'Add labels to all form inputs',
      'Use semantic HTML elements',
      'Ensure sufficient color contrast',
      'Add ARIA labels where needed',
      'Test with screen readers',
      'Implement keyboard navigation'
    ],
    wcagCompliance: {
      level: issues.length === 0 ? 'AA' : 'Partial',
      issuesFound: issues.length,
      criticalIssues: issues.filter(i => i.severity === 'high').length
    }
  };
  
  fs.writeFileSync('/workspace/accessibility-report.json', JSON.stringify(report, null, 2));
  console.log(`♿ Accessibility check completed. Found ${issues.length} issues.`);
  
  return report;
}

// Run accessibility check
checkAccessibility();
