// Accessibility checker utility functions

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion?: string;
}

export interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  passed: number;
  failed: number;
  warnings: number;
}

export const checkAccessibility = (): AccessibilityReport => {
  const issues: AccessibilityIssue[] = [];
  let passed = 0;
  let failed = 0;
  let warnings = 0;

  // Check for missing alt text on images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push({
        type: 'error',
        element: `img[${index}]`,
        message: 'Image missing alt text',
        suggestion: 'Add descriptive alt text to improve accessibility for screen readers'
      });
      failed++;
    } else {
      passed++;
    }
  });

  // Check for missing form labels
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    const label = document.querySelector(`label[for="${id}"]`);
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if (!label && !ariaLabel && !ariaLabelledBy) {
      issues.push({
        type: 'error',
        element: `input[${index}]`,
        message: 'Form control missing label',
        suggestion: 'Add a label element or aria-label attribute'
      });
      failed++;
    } else {
      passed++;
    }
  });

  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      issues.push({
        type: 'warning',
        element: `heading[${index}]`,
        message: 'Heading hierarchy skipped',
        suggestion: 'Use proper heading hierarchy (h1 -> h2 -> h3, etc.)'
      });
      warnings++;
    }
    previousLevel = level;
  });

  // Check for color contrast (simplified check)
  const elements = document.querySelectorAll('*');
  elements.forEach((element, index) => {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
      // This is a simplified check - in a real implementation, you'd calculate actual contrast ratios
      if (color === backgroundColor) {
        issues.push({
          type: 'error',
          element: `element[${index}]`,
          message: 'Insufficient color contrast',
          suggestion: 'Ensure sufficient contrast between text and background colors'
        });
        failed++;
      }
    }
  });

  // Check for keyboard navigation
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
  let hasTabIndex = false;
  focusableElements.forEach((element, index) => {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '0' || tabIndex === null) {
      hasTabIndex = true;
    }
  });

  if (!hasTabIndex) {
    issues.push({
      type: 'warning',
      element: 'document',
      message: 'No keyboard navigation available',
      suggestion: 'Ensure all interactive elements are keyboard accessible'
    });
    warnings++;
  }

  const total = passed + failed + warnings;
  const score = total > 0 ? Math.round((passed / total) * 100) : 100;

  return {
    score,
    issues,
    passed,
    failed,
    warnings
  };
};

export const generateAccessibilityReport = (): string => {
  const report = checkAccessibility();
  
  let reportText = `Accessibility Report\n`;
  reportText += `==================\n\n`;
  reportText += `Overall Score: ${report.score}%\n`;
  reportText += `Passed: ${report.passed}\n`;
  reportText += `Failed: ${report.failed}\n`;
  reportText += `Warnings: ${report.warnings}\n\n`;
  
  if (report.issues.length > 0) {
    reportText += `Issues Found:\n`;
    reportText += `=============\n\n`;
    
    report.issues.forEach((issue, index) => {
      reportText += `${index + 1}. [${issue.type.toUpperCase()}] ${issue.element}\n`;
      reportText += `   Message: ${issue.message}\n`;
      if (issue.suggestion) {
        reportText += `   Suggestion: ${issue.suggestion}\n`;
      }
      reportText += `\n`;
    });
  }
  
  return reportText;
};