// Accessibility checker utility functions

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  selector?: string;
  fix?: string;
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number;
  passed: boolean;
}

/**
 * Check accessibility of the current page
 */
export function checkAccessibility(): AccessibilityReport {
  const issues: AccessibilityIssue[] = [];
  
  // Check for missing alt text on images
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.getAttribute('alt')) {
      issues.push({
        type: 'error',
        message: 'Image missing alt text',
        element: img,
        selector: getSelector(img),
        fix: 'Add alt attribute to image'
      });
    }
  });

  // Check for missing labels on form inputs
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach((input) => {
    const id = input.getAttribute('id');
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if (!id && !ariaLabel && !ariaLabelledBy) {
      issues.push({
        type: 'error',
        message: 'Form input missing label',
        element: input as HTMLElement,
        selector: getSelector(input as HTMLElement),
        fix: 'Add label, aria-label, or aria-labelledby attribute'
      });
    }
  });

  // Check for missing heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      issues.push({
        type: 'warning',
        message: `Heading level ${level} follows level ${lastLevel}`,
        element: heading as HTMLElement,
        selector: getSelector(heading as HTMLElement),
        fix: 'Maintain proper heading hierarchy'
      });
    }
    lastLevel = level;
  });

  // Check for missing focus indicators
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
  focusableElements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element);
    const outline = computedStyle.outline;
    const outlineWidth = computedStyle.outlineWidth;
    
    if (outline === 'none' && outlineWidth === '0px') {
      issues.push({
        type: 'warning',
        message: 'Focusable element missing focus indicator',
        element: element as HTMLElement,
        selector: getSelector(element as HTMLElement),
        fix: 'Add focus styles to element'
      });
    }
  });

  // Check for color contrast (simplified)
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
  textElements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;
    
    if (color === backgroundColor) {
      issues.push({
        type: 'error',
        message: 'Text and background colors are the same',
        element: element as HTMLElement,
        selector: getSelector(element as HTMLElement),
        fix: 'Ensure sufficient color contrast'
      });
    }
  });

  // Calculate score
  const errorCount = issues.filter(issue => issue.type === 'error').length;
  const warningCount = issues.filter(issue => issue.type === 'warning').length;
  const totalIssues = errorCount + warningCount;
  
  const score = Math.max(0, 100 - (errorCount * 10) - (warningCount * 5));
  const passed = errorCount === 0;

  return {
    issues,
    score,
    passed
  };
}

/**
 * Get CSS selector for an element
 */
function getSelector(element: HTMLElement): string {
  if (element.id) {
    return `#${element.id}`;
  }
  
  if (element.className) {
    const classes = element.className.split(' ').filter(c => c.trim());
    if (classes.length > 0) {
      return `.${classes.join('.')}`;
    }
  }
  
  return element.tagName.toLowerCase();
}

/**
 * Fix accessibility issues automatically where possible
 */
export function fixAccessibilityIssues(): void {
  // Add alt text to images without it
  const images = document.querySelectorAll('img:not([alt])');
  images.forEach((img) => {
    img.setAttribute('alt', 'Image');
  });

  // Add aria-label to buttons without text
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach((button) => {
    if (!button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }
  });

  // Add focus styles
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #0066cc;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Generate accessibility report
 */
export function generateAccessibilityReport(): string {
  const report = checkAccessibility();
  
  let reportText = `Accessibility Report\n`;
  reportText += `==================\n\n`;
  reportText += `Score: ${report.score}/100\n`;
  reportText += `Status: ${report.passed ? 'PASSED' : 'FAILED'}\n\n`;
  
  if (report.issues.length > 0) {
    reportText += `Issues Found:\n`;
    reportText += `=============\n\n`;
    
    report.issues.forEach((issue, index) => {
      reportText += `${index + 1}. [${issue.type.toUpperCase()}] ${issue.message}\n`;
      if (issue.selector) {
        reportText += `   Selector: ${issue.selector}\n`;
      }
      if (issue.fix) {
        reportText += `   Fix: ${issue.fix}\n`;
      }
      reportText += `\n`;
    });
  } else {
    reportText += `No accessibility issues found!\n`;
  }
  
  return reportText;
}