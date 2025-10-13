const fs = require('fs');
const path = require('path');

// Accessibility enhancement script
const enhanceAccessibility = () => {
  console.log('♿ Starting enhanced accessibility optimization...');
  
  // 1. Check for accessibility issues in components
  console.log('🔍 Analyzing components for accessibility...');
  
  const componentsDir = './app/components';
  const accessibilityIssues = [];
  
  const analyzeFile = (filePath) => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common accessibility issues
      const issues = [];
      
      // Check for missing alt attributes
      if (content.includes('<img') && !content.includes('alt=')) {
        issues.push('Missing alt attribute on image');
      }
      
      // Check for missing aria-labels
      if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
        issues.push('Button missing aria-label or aria-labelledby');
      }
      
      // Check for missing heading hierarchy
      if (content.includes('<h3') && !content.includes('<h1') && !content.includes('<h2')) {
        issues.push('Missing proper heading hierarchy');
      }
      
      // Check for missing focus management
      if (content.includes('onClick') && !content.includes('onKeyDown') && !content.includes('onKeyPress')) {
        issues.push('Interactive element missing keyboard support');
      }
      
      // Check for missing form labels
      if (content.includes('<input') && !content.includes('htmlFor') && !content.includes('aria-label')) {
        issues.push('Input missing label or aria-label');
      }
      
      if (issues.length > 0) {
        accessibilityIssues.push({
          file: filePath,
          issues: issues
        });
      }
    } catch (error) {
      console.error(`Error analyzing ${filePath}:`, error.message);
    }
  };
  
  const analyzeDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        analyzeDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        analyzeFile(fullPath);
      }
    }
  };
  
  analyzeDirectory(componentsDir);
  
  // 2. Generate accessibility report
  const accessibilityReport = {
    timestamp: new Date().toISOString(),
    totalComponents: accessibilityIssues.length,
    issues: accessibilityIssues,
    recommendations: [
      'Add alt text to all images',
      'Ensure proper heading hierarchy (h1 > h2 > h3)',
      'Add aria-labels to interactive elements',
      'Implement keyboard navigation support',
      'Add focus management for modals and dropdowns',
      'Ensure sufficient color contrast',
      'Add skip navigation links',
      'Implement screen reader support',
      'Add form validation with clear error messages',
      'Ensure responsive design for all screen sizes'
    ],
    wcagCompliance: {
      level: 'AA',
      guidelines: [
        '1.1.1 Non-text Content - Add alt text to images',
        '1.3.1 Info and Relationships - Use proper heading hierarchy',
        '1.4.3 Contrast - Ensure sufficient color contrast',
        '2.1.1 Keyboard - Make all functionality keyboard accessible',
        '2.4.1 Bypass Blocks - Add skip navigation links',
        '3.1.1 Language of Page - Add lang attribute',
        '4.1.2 Name, Role, Value - Use proper ARIA attributes'
      ]
    }
  };
  
  fs.writeFileSync('./accessibility-enhancement-report.json', JSON.stringify(accessibilityReport, null, 2));
  
  console.log('✅ Accessibility analysis completed!');
  console.log('📊 Accessibility report generated: ./accessibility-enhancement-report.json');
  console.log(`🔍 Found ${accessibilityIssues.length} components with potential issues`);
  
  if (accessibilityIssues.length > 0) {
    console.log('⚠️ Components with accessibility issues:');
    accessibilityIssues.forEach(({ file, issues }) => {
      console.log(`  - ${file}: ${issues.join(', ')}`);
    });
  }
};

enhanceAccessibility();